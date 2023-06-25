module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/theming'],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  staticDirs: [{
    from: './public',
    to: '/assets'
  }],
  docs: {
    autodocs: true
  }
};