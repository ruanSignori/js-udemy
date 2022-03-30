interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement
}

interface VideoPlayerProtocol {
  playToogle(): void;
  stop(): void;
  startEvents(): void;
}

export class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer
    this.playButton = videoPlayerElements.playButton
    this.stopButton = videoPlayerElements.stopButton
  }

  startEvents(): void {
    this.playButton.addEventListener('click', () => {
      this.playToogle();
    })

    this.stopButton.addEventListener('click', () => {
      this.stop();
    })
  }

  playToogle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause'
    } else {
      this.videoPlayer.pause()
      this.playButton.innerText = 'Play'
    }
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play '
  }
}

const video = document.querySelector('video.video')
const buttonPlay = document.querySelector('button.play');
const buttonStop = document.querySelector('button.stop')

const videoPlayer = new VideoPlayer({
  videoPlayer: video as HTMLVideoElement,
  playButton: buttonPlay as HTMLButtonElement,
  stopButton: buttonStop as HTMLButtonElement
})

videoPlayer.startEvents();