/* jshint strict:false */
var elixir = require('laravel-elixir');
require('laravel-elixir-rjs');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy('resources/assets/js/lib/requirejs/require.js', 'public/js/lib/requirejs/require.js');
    mix.rjs('app.js', 'resources/assets/js', 'public/js', {
        out: "app.js"
    });
});
