import VimeoPlayer from './VimeoPlayer'

export default {
  title: 'VimeoPlayer',
  component: VimeoPlayer,
  argTypes: {
    autoplay: { control: 'boolean' },
    showByline: { control: 'boolean' },
    controls: { control: 'boolean' },
    loop: { control: 'boolean' },
    showPortrait: { control: 'boolean' },
    showTitle: { control: 'boolean' },
    muted: { control: 'boolean' },
    background: { control: 'boolean' },
    responsive: { control: 'boolean' },
    dnt: { control: 'boolean' },
    speed: { control: 'boolean' },
    keyboard: { control: 'boolean' },
    pip: { control: 'boolean' },
    playsInline: { control: 'boolean' },
    transparent: { control: 'boolean' },
    start: { control: 'number' },
    volume: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
  },
}

const VIDEO = 'https://player.vimeo.com/video/76979871?h=8272103f6e'

export const Default = {
  args: {
    video: VIDEO,
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
    volume: 0,
  },
}

export const AutoPlayMuted = {
  args: {
    video: VIDEO,
    autoplay: true,
    muted: true,
  },
}

export const ShowByline = {
  args: {
    video: VIDEO,
    showByline: true,
  },
}

export const Controls = {
  args: {
    video: VIDEO,
    controls: false,
  },
}

export const Color = {
  args: {
    video: VIDEO,
    color: '#ff5251',
  },
}

export const Colors = {
  args: {
    video: VIDEO,
    colors: ['#ff5251', '#ff5251', '#ff5251', '#ff5251'],
  },
}

export const Loop = {
  args: {
    video: VIDEO,
    loop: true,
  },
}

export const ShowPortrait = {
  args: {
    video: VIDEO,
    showPortrait: true,
  },
}

export const ShowTitle = {
  args: {
    video: VIDEO,
    showTitle: true,
  },
}

export const Muted = {
  args: {
    video: VIDEO,
    muted: true,
  },
}

export const Background = {
  args: {
    video: VIDEO,
    background: true,
  },
}

export const Responsive = {
  args: {
    video: VIDEO,
    responsive: true,
  },
}

export const DNT = {
  args: {
    video: VIDEO,
    dnt: true,
  },
}

export const Speed = {
  args: {
    video: VIDEO,
    speed: true,
  },
}

export const Keyboard = {
  args: {
    video: VIDEO,
    keyboard: true,
  },
}

export const PIP = {
  args: {
    video: VIDEO,
    pip: true,
  },
}

export const PlaysInline = {
  args: {
    video: VIDEO,
    playsInline: true,
  },
}

export const Transparent = {
  args: {
    video: VIDEO,
    transparent: true,
  },
}

export const Volume = {
  args: {
    video: VIDEO,
    volume: 1,
  },
}
