import VimeoPlayer from '.'

export default {
  title: 'Video/VimeoPlayer',
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
    volume: { control: 'number' },
  },
}

export const Default = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
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
  },
}

export const AutoPlayMuted = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    autoplay: true,
    muted: true,
  },
}
// Define a story for each key
export const Autoplay = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    autoplay: true,
  },
}

export const ShowByline = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    showByline: true,
  },
}

export const Controls = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    controls: false,
  },
}

export const Loop = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    loop: true,
  },
}

export const ShowPortrait = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    showPortrait: true,
  },
}

export const ShowTitle = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    showTitle: true,
  },
}

export const Muted = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    muted: true,
  },
}

export const Background = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    background: true,
  },
}

export const Responsive = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    responsive: true,
  },
}

export const DNT = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    dnt: true,
  },
}

export const Speed = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    speed: true,
  },
}

export const Keyboard = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    keyboard: true,
  },
}

export const PIP = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    pip: true,
  },
}

export const PlaysInline = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    playsInline: true,
  },
}

export const Transparent = {
  args: {
    video: 'https://player.vimeo.com/video/76979871?h=8272103f6e',
    transparent: true,
  },
}
