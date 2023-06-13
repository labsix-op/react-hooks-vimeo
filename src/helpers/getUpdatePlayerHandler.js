import { OPTIONS_NAMES } from '../constants'

export const getUpdatePlayerHandler = {
  [OPTIONS_NAMES.autopause]: (vimeoPlayer, value) => {
    vimeoPlayer.setAutopause(value)
  },
  [OPTIONS_NAMES.color]: (vimeoPlayer, value) => {
    vimeoPlayer.setColor(value)
  },
  [OPTIONS_NAMES.loop]: (vimeoPlayer, value) => {
    vimeoPlayer.setLoop(value)
  },
  [OPTIONS_NAMES.volume]: (vimeoPlayer, value) => {
    vimeoPlayer.setVolume(value)
  },
  [OPTIONS_NAMES.paused]: (vimeoPlayer, value) => {
    vimeoPlayer.getPaused().then((paused) => {
      if (value && !paused) {
        return vimeoPlayer.pause()
      }
      if (!value && paused) {
        return vimeoPlayer.play()
      }
      return null
    })
  },
  [OPTIONS_NAMES.width]: (vimeoPlayer, value) => {
    vimeoPlayer.element['width'] = value
  },
  [OPTIONS_NAMES.height]: (vimeoPlayer, value) => {
    vimeoPlayer.element['height'] = value
  },
  [OPTIONS_NAMES.video]: (vimeoPlayer, value) => {
    if (value) {
      const { start } = this.props
      const loaded = vimeoPlayer.loadVideo(value)
      // Set the start time only when loading a new video.
      // It seems like this has to be done after the video has loaded, else it just starts at
      // the beginning!
      if (typeof start === 'number') {
        loaded.then(() => {
          vimeoPlayer.setCurrentTime(start)
        })
      }
    } else {
      vimeoPlayer.unload()
    }
  },
  [OPTIONS_NAMES.playbackRate]: (vimeoPlayer, value) => {
    vimeoPlayer.setPlaybackRate(value)
  },
  [OPTIONS_NAMES.quality]: (vimeoPlayer, value) => {
    vimeoPlayer.setQuality(value)
  },
}
