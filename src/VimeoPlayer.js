import { useRef } from 'react'
import { styled } from 'styled-components'

import { videoPlayerPropshape } from './constants/propshapes'
import useVimeoPlayer from './hooks/useVimeoPlayer'

const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 56.25%; // Aspect ratio (height / width * 100) => (9 / 16 * 100 = 56.25%)
  height: 0;
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default function VimeoPlayer({
  video,
  paused,
  volume,
  start,
  playbackRate,
  // Embed Options
  autopause,
  autopip,
  autoplay,
  background,
  showByline,
  color,
  colors,
  controls,
  dnt,
  height,
  interactiveParams,
  keyboard,
  loop,
  maxHeight,
  maxWidth,
  muted,
  pip,
  playsInline,
  showPortrait,
  quality,
  responsive,
  speed,
  showTitle,
  textTrack,
  transparent,
  width,

  // Events
  onPlay,
  onPlaying,
  onPause,
  onEnd,
  onTimeUpdate,
  onProgress,
  onSeeked,
  onTextTrackChange,
  onCueChange,
  onCuePoint,
  onVolumeChange,
  onPlaybackRateChange,
  onError,
  onLoaded,
  onPlaybackTimeReporting,
}) {
  const vimeoPlayerRef = useRef(null)
  useVimeoPlayer(video, vimeoPlayerRef, {
    embedOptions: {
      volume,
      start,
      playbackRate,
      autopause,
      autopip,
      autoplay,
      background,
      showByline,
      color,
      colors,
      controls,
      dnt,
      height,
      interactiveParams,
      keyboard,
      loop,
      maxHeight,
      maxWidth,
      muted,
      pip,
      playsInline,
      paused,
      showPortrait,
      quality,
      responsive,
      speed,
      showTitle,
      textTrack,
      transparent,
      width,
    },
    events: {
      onPlay,
      onPlaying,
      onPause,
      onEnd,
      onTimeUpdate,
      onProgress,
      onSeeked,
      onTextTrackChange,
      onCueChange,
      onCuePoint,
      onVolumeChange,
      onPlaybackRateChange,
      onError,
      onLoaded,
      onPlaybackTimeReporting,
    },
  })

  return <VideoWrapper ref={vimeoPlayerRef} />
}

VimeoPlayer.defaultProps = {
  // ...EMBED_OPTIONS_DEFAULT_VALUES,
  paused: null,
  volume: null,
  start: null,
  playbackRate: null,
  // EmbedOptions

  autopause: true,
  autoplay: false,
  showByline: true,
  controls: true,
  loop: false,
  showPortrait: true,
  showTitle: true,
  muted: false,
  background: false,
  responsive: false,
  dnt: false,
  speed: false,
  keyboard: true,
  pip: false,
  playsInline: true,
  transparent: true,

  // Events
  onPlay: null,
  onPlaying: null,
  onPause: null,
  onEnd: null,
  onTimeUpdate: null,
  onProgress: null,
  onSeeked: null,
  onTextTrackChange: null,
  onCueChange: null,
  onCuePoint: null,
  onVolumeChange: null,
  onPlaybackRateChange: null,
  onError: null,
  onLoaded: null,

  onPlaybackTimeReporting: () => {},
}

VimeoPlayer.propTypes = videoPlayerPropshape
