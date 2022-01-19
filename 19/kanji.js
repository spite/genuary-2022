import { Vector3 } from "../third_party/three.module.js";
import { ConstantBezier } from "./constant-bezier.js";

function bezierConstantDensity(p0, p1, p2, p3) {
  const curve = new ConstantBezier();
  curve.p0.set(p0.x, p0.y, 0);
  curve.p1.set(p1.x, p1.y, 0);
  curve.p2.set(p2.x, p2.y, 0);
  curve.p3.set(p3.x, p3.y, 0);
  curve.calculate();
  curve.calculateDistances();
  curve.reticulate({ distancePerStep: 0.1 });
  return curve.lPoints;
}

async function loadKanji(filename) {
  const res = await fetch(filename);
  const txt = await res.text();
  const parser = new DOMParser();
  let svg = parser.parseFromString(txt, "image/svg+xml");

  let lines = [];

  const pathNodes = svg.querySelectorAll("path");
  [].forEach.call(pathNodes, function (p) {
    // console.log("path");
    if (p instanceof SVGPathElement && p.pathSegList) {
      let x = 0;
      let y = 0;
      const segments = p.pathSegList;
      let segmentPoints = [];
      for (let i = 0; i < segments.numberOfItems; i++) {
        const segment = segments.getItem(i);
        if (segment instanceof SVGPathSegMovetoAbs) {
          // Move
          x = segment.x;
          y = segment.y;
          segmentPoints.push(new Vector3(x, y, 0));
        } else if (segment instanceof SVGPathSegCurvetoCubicRel) {
          // Curve relative
          const from = { x, y };
          const to = { x: x + segment.x, y: y + segment.y };
          const p1 = { x: x + segment.x1, y: y + segment.y1 };
          const p2 = { x: x + segment.x2, y: y + segment.y2 };
          segmentPoints = segmentPoints.concat(
            bezierConstantDensity(from, p1, p2, to)
          );
          x += segment.x;
          y += segment.y;
        } else if (segment instanceof SVGPathSegCurvetoCubicAbs) {
          // Curve absolute
          const from = { x, y };
          const to = { x: segment.x, y: segment.y };
          const p1 = { x: segment.x1, y: segment.y1 };
          const p2 = { x: segment.x2, y: segment.y2 };
          segmentPoints = segmentPoints.concat(
            bezierConstantDensity(from, p1, p2, to)
          );
          x = segment.x;
          y = segment.y;
        } else if (segment instanceof SVGPathSegCurvetoCubicSmoothRel) {
          // Curve absolute
          const from = { x, y };
          const to = { x: x + segment.x, y: y + segment.y };
          const p = { x: x + segment.x2, y: y + segment.y2 };
          segmentPoints = segmentPoints.concat(
            bezierConstantDensity(from, p, p, to)
          );
          x = x + segment.x;
          y = y + segment.y;
        } else if (segment instanceof SVGPathSegMovetoRel) {
          // Move
          x += segment.x;
          y += segment.y;
          segmentPoints.push(new Vector3(x, y, 0));
        } else if (segment instanceof SVGPathSegCurvetoCubicSmoothAbs) {
          // Curve absolute
          const from = { x, y };
          const to = { x: x + segment.x, y: y + segment.y };
          const p = { x: x + segment.x2, y: y + segment.y2 };
          segmentPoints = segmentPoints.concat(
            bezierConstantDensity(from, p, p, to)
          );
          x = segment.x;
          y = segment.y;
        } else {
          debugger;
        }
      }

      lines.push({ points: segmentPoints });
    }
  });

  return lines;
}

async function loadKanjis() {
  const url = "https://api.github.com/repos/KanjiVG/kanjivg/git/trees/master";
  const file = await fetch(url);
  const entries = await file.json();
  const kanjiUrl = entries.tree.filter(
    (e) => e.path === "kanji" && e.type === "tree"
  )[0].url;
  const kanjiFile = await fetch(kanjiUrl);
  const kanjiEntriess = await kanjiFile.json();
  const kanjis = kanjiEntriess.tree.map((e) => e.path);
  return kanjis;
}

async function loadKanjiFromGitHub(filename) {
  return await loadKanji(
    `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${filename}`
  );
}

export { loadKanjis, loadKanji, loadKanjiFromGitHub };
