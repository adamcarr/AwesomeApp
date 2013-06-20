define([
        'jquery',
        'underscore',
        'backbone'
    ], function($, _, Backbone) {
        var AppRouter = Backbone.Router.extend({
            routes: {
                '*actions': 'defaultAction'
            },

            defaultAction: function(actions) {

            },
            
            initialize: function(options) {
                
            }
        });

        var initialize = function() {
            var app_router = new AppRouter();
            Backbone.history.start();
        };

        return { initialize: initialize };
    });