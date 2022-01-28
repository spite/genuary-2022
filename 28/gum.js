class Gum {
  constructor(deviceNameElement, nextDeviceButton) {
    this.invalidateVideoSource();

    this.deviceNameLabel = deviceNameElement;
    this.nextDeviceButton = nextDeviceButton;
    this.currentVideoInput = 0;
    this.devices = {
      audioinput: [],
      audiooutput: [],
      videoinput: [],
    };
    this.nextDeviceButton.addEventListener("click", (e) => {
      this.currentVideoInput =
        (this.currentVideoInput + 1) % this.devices.videoinput.length;
      this.invalidateVideoSource();
      this.getMedia(this.devices.videoinput[this.currentVideoInput]);
    });

    this.video = document.createElement("video");
    this.video.autoplay = true;
    this.video.playsinline = true;
    this.video.addEventListener("loadeddata", () => {
      this.resolveLoadedData();
    });

    this.init();
  }

  async init() {
    await this.enumerateDevices();
    if (this.devices.videoinput.length === 1) {
      this.nextDeviceButton.style.display = "none";
      this.currentVideoInput = 0;
      this.invalidateVideoSource();
      this.getMedia(this.devices.videoinput[this.currentVideoInput]);
    } else {
      this.nextDeviceButton.style.display = "initial";
      this.currentVideoInput = 0;
      this.invalidateVideoSource();
      this.getMedia(this.devices.videoinput[this.currentVideoInput]);
    }
  }

  async ready() {
    await this.videoLoadedData;
  }

  async enumerateDevices() {
    if (!navigator.mediaDevices) {
      this.deviceNameLabel.textContent = `Can't enumerate devices. Make sure the page is HTTPS, and the browser support getUserMedia.`;
      return;
    }
    const devices = await navigator.mediaDevices.enumerateDevices();

    for (const device of devices) {
      let name;
      switch (device.kind) {
        case "audioinput":
          name = device.label || "Microphone";
          break;
        case "audiooutput":
          name = device.label || "Speakers";
          break;
        case "videoinput":
          name = device.label || "Camera";
          break;
      }
      this.devices[device.kind].push(device);
    }
  }

  invalidateVideoSource() {
    this.videoLoadedData = new Promise((resolve, reject) => {
      this.resolveLoadedData = resolve;
      this.rejectLoadedData = reject;
    });
  }

  async getMedia(device) {
    const constraints = {
      video: { deviceId: device.deviceId, width: 500, height: 500 },
    };
    this.deviceNameLabel.textContent = "Connecting...";
    let stream = null;

    try {
      stream = await navigator.mediaDevices.getUserMedia(constraints);
      this.deviceNameLabel.textContent = device.label
        ? device.label
        : "Unlabeled camera";
      this.createVideoElement();
      this.video.srcObject = stream;
    } catch (err) {
      this.deviceNameLabel.textContent = `${err.name} ${err.message}`;
    }
  }

  createVideoElement() {
    if (this.video && this.video.srcObject) {
      this.video.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }
}

export { Gum };
