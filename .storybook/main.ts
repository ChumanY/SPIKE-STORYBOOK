// .storybook/main.js
const { execSync } = require('child_process');

const getAuthorName = () => {
  try {
    const authorName = execSync('git log -1 --pretty=format:%an').toString().trim();
    console.log('Nombre del autor:', authorName); 
    return authorName;
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
  outputDir: `../build/${getAuthorName()}/storybook`,
};
