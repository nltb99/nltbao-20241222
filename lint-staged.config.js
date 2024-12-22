module.exports = {
  '**/*.ts?(x)': () => 'npm run check-types',
  '*.{js,ts,jsx,tsx}': ['yarn lint:fix', 'prettier --write'],
  '*.{json,yaml}': ['prettier --write'],
};
