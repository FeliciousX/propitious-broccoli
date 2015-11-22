/* jshint strict:false */
var config = require('./config');
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
    config.libraries.forEach( function( file) {
        mix.copy( config.constants.library_input + file,
                config.constants.library_output + file );
    });

    mix.rjs('app.js', 'resources/assets/js', 'public/js', {
        include: ['requirejs', 'underscore']
    });
});
