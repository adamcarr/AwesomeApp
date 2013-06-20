require.config({
    url: '/Scripts/lectures',
    paths: {
        jquery: '../jquery-2.0.2.min',
        underscore: '../underscore.min',
        backbone: '../backbone.min',
        text: '../text'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'backbone.localStorage': {
            deps: ['backbone'],
            exports: 'Backbone'
        }
    }
});

require([
        'views/app',
        'router'
    ], function(AppView, Router) {
        var appView = new AppView();
        appView.render();

        Router.initialize();
    });