import type { Preview, Decorator } from '@storybook/react'
import '../src/tokens/index.css'

const withTheme: Decorator = (StoryFn, context) => {
  const theme = (context.globals.theme as string) ?? 'light'
  document.documentElement.setAttribute('data-theme', theme)
  document.body.style.background = theme === 'dark' ? '#252828' : '#F9F9F9'
  return StoryFn()
}

const preview: Preview = {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Switch between light and dark theme',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },
  parameters: {
    backgrounds: { disable: true },
    layout: 'padded',
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Foundations', 'Components'],
      },
    },
  },
}

export default preview
