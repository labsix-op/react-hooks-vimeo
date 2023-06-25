import './VimeoPlayer.css'

import { useRef } from 'react'

import { VimeoPlayerProps } from './constants/types'
import useVimeoPlayer from './hooks/useVimeoPlayer'

export default function VimeoPlayer(props: VimeoPlayerProps) {
  const {
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
  } = props

  const vimeoPlayerRef = useRef(null)
  useVimeoPlayer(video, vimeoPlayerRef, {
    controlOptions: {
      volume,
      start,
      playbackRate,
      paused,
    },
    embedOptions: {
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
