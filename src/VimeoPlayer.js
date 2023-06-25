import './VimeoPlayer.css'

import { useRef } from 'react'

import { videoPlayerPropshape } from './constants/propshapes'
import useVimeoPlayer from './hooks/useVimeoPlayer'

export default function VimeoPlayer({
  video,
  className,
  // other Options
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

  if (className) {
    return <div className={className} ref={vimeoPlayerRef} />
  }

  return <div className='vimeo_player' ref={vimeoPlayerRef} />
}

VimeoPlayer.displayName = 'VimeoPlayer'

VimeoPlayer.defaultProps = {
  className: '',
  // other options,
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
