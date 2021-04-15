const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'app/assets/js').vue({ version: 2 }).sourceMaps();

mix.postCss('resources/css/app.css', 'app/assets/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('postcss-preset-env')({stage: 0})
]);

if (mix.inProduction()) {
    mix.version();
}
