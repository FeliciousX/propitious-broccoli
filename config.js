/* jshint node:true */
var constants = {
    library_input: 'resources/assets/js/lib/',
    library_output: 'public/js/lib/',
};

var libraries = [
    'requirejs/require.js',
];

var config = {
    constants: constants,
    libraries: libraries,
};

module.exports = config;

