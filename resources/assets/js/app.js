require.config({
    'baseUrl': 'js',
    'paths': {
        'jquery': 'lib/jquery/dist/jquery',
        'underscore': 'lib/underscore/underscore',
        'backbone': 'lib/backbone/backbone',
    },
    'shim': {
        'backbone': ['underscore'],
    }
});

require(['app/main']);
