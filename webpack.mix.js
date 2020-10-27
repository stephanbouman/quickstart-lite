const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'app/assets/js')
   .postCss('resources/css/app.css', 'app/assets/css', [
     require('tailwindcss'),
   ]);
