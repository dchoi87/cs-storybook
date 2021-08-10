import '../src/scss/common/global.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  html: {
    prettier: {
      printWidth: 160
    },
    highlighter: {
      showLineNumbers: true
    }
  },
}