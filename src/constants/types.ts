/// <reference types="@types/vimeo__player" />
import VimeoPlayer from '@vimeo/player'

export type EventNameMap = {
  [key: string]: string
}

export type OptionNames = {
  [key: string]: string
}

export type EmbedOptions = {
  id?: number
  url?: string
  autopause?: boolean
  autoplay?: boolean
  autopip?: boolean
  background?: boolean
  showByline?: boolean
  byline?: boolean
  color?: string
  colors?: Array<string>
  controls?: boolean
  dnt?: boolean
  height?: number
  interactiveParams?: string
  keyboard?: boolean
  loop?: boolean
  maxHeight?: number
  maxWidth?: number
  muted?: boolean
  pip?: boolean
  playsInline?: boolean
  showPortrait?: boolean
  responsive?: boolean
  speed?: boolean
  quality?: VimeoPlayer.VimeoVideoQuality
  textTrack?: string
  showTitle?: boolean
  transparent?: boolean
  width?: number
}

export type ControlOptions = {
  start?: number
  volume?: number
  playbackRate?: number
  paused?: boolean
}

export type VimeoPlayerProps = {
  video: any
  className?: string
  paused?: boolean
  volume?: number
  start?: number
  playbackRate?: number
  autopause?: boolean
  autopip?: boolean
  autoplay?: boolean
  background?: boolean
  showByline?: boolean
  color?: string
  colors?: any
  controls?: boolean
  dnt?: boolean
  height?: number
  interactiveParams?: any
  keyboard?: boolean
  loop?: boolean
  maxHeight?: number
  maxWidth?: number
  muted?: boolean
  pip?: boolean
  playsInline?: boolean
  showPortrait?: boolean
  quality?: any
  responsive?: boolean
  speed?: boolean
  showTitle?: boolean
  textTrack?: any
  transparent?: boolean
  width?: number
  onPlay?: () => void
  onPlaying?: () => void
  onPause?: () => void
  onEnd?: () => void
  onTimeUpdate?: () => void
  onProgress?: () => void
  onSeeked?: () => void
  onTextTrackChange?: () => void
  onCueChange?: () => void
  onCuePoint?: () => void
  onVolumeChange?: () => void
  onPlaybackRateChange?: () => void
  onError?: () => void
  onLoaded?: () => void
  onPlaybackTimeReporting?: () => void
}

export type ExtendedVimeoPlayer = VimeoPlayer & {
  element: {
    width: number | string | undefined
    height: number | string | undefined
    controls: number | string | undefined
  }
}
