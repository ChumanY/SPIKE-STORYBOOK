// .storybook/main.js
const { execSync } = require('child_process');

// Obtener el nombre del autor del último commit usando un comando de git
const getAuthorName = () => {
  try {
    return execSync('git log -1 --pretty=format:%an').toString().trim();
  } catch (error) {
    console.error('Error obteniendo el nombre del autor:', error.message);
    return 'unknown-author';
  }
};

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  // Utilizar el nombre del autor en el path de salida
  outputDir: `../build/${getAuthorName()}/storybook`,
};
