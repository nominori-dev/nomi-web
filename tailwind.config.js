/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
        content: [
            "./app/**/*.{js,ts,jsx,tsx}",
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",

            // Or if using `src` directory:
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [
                require('tailwindcss-font-inter'),
                plugin(function({ addVariant, e, postcss }) {
                        addVariant('firefox', ({ container, separator }) => {
                                    const isFirefoxRule = postcss.atRule({
                                        name: '-moz-document',
                                        params: 'url-prefix()',
                                    });
                                    isFirefoxRule.append(container.nodes);
                                    container.append(isFirefoxRule);
                                    isFirefoxRule.walkRules((rule) => {
                                                rule.selector = `.${e(
                              `firefox${separator}${rule.selector.slice(1)}`
                            )}`;
                        });
                    });
                }), ],
        }