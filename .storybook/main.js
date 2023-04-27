const { toPath } = require('./utils')

module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    'storybook-dark-mode',
    '@storybook/addon-actions',
    {
      /**
       * Fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@/components': toPath('src/components'),
          '@/pages': toPath('src/pages'),
          '@/lib': toPath('src/lib'),
          '@/hooks': toPath('src/hooks'),
          '@/atoms': toPath('src/components/ui/atoms'),
          '@/molecules': toPath('src/components/ui/molecules'),
          '@/organisms': toPath('src/components/ui/organisms'),
          '@/templates': toPath('src/components/ui/templates'),
          '@/data': toPath('src/data'),
          '@/interfaces': toPath('src/interfaces'),
          '@/context': toPath('src/context'),
          '@/mocks': toPath('mocks'),
          '@/tests': toPath('tests')
        }
      }
    }
  }
}
