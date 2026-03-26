import type { Preview } from '@storybook/react'

// Import tokens and themes
import '../src/core/tokens/index.css'
import '../src/themes/default/index.css'
import '../src/themes/seasonal/themes.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: 'oklch(0.96 0.01 85)' },
        { name: 'white', value: '#ffffff' },
        { name: 'dark', value: 'oklch(0.12 0 0)' },
      ],
    },
  },
  globalTypes: {
    season: {
      description: 'Season theme',
      defaultValue: 'none',
      toolbar: {
        title: 'Season',
        icon: 'paintbrush',
        items: [
          { value: 'none', title: 'Default (Blue)' },
          { value: 'spring-early', title: '🌸 Spring Early (桜色)' },
          { value: 'spring-late', title: '🌿 Spring Late (若草色)' },
          { value: 'summer-early', title: '🌲 Summer Early (萌葱色)' },
          { value: 'summer-peak', title: '☀️ Summer Peak (朱色)' },
          { value: 'autumn-early', title: '🌊 Autumn Early (浅葱色)' },
          { value: 'autumn-late', title: '🍂 Autumn Late (山吹色)' },
          { value: 'winter-early', title: '❄️ Winter Early (銀鼠)' },
          { value: 'winter-deep', title: '🌙 Winter Deep (藍色)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const season = context.globals.season
      if (season && season !== 'none') {
        document.documentElement.setAttribute('data-season', season)
      } else {
        document.documentElement.removeAttribute('data-season')
      }
      return Story()
    },
  ],
}

export default preview
