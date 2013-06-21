define([
        'jquery',
        'underscore',
        'backbone',
        'collections/lectures'
    ], function($, _, Backbone, LecturesCollection) {
        var AppRouter = Backbone.Router.extend({

            routes: {
                '*actions': 'defaultAction',
                'add': 'add',
                'edit/:id': 'edit'
            },

            add: function () {
                require(['views/edit_lecture'], function (EditLectureView) {
                    var editLectureView = new editLectureView({ model: {} });
                    $('.main-container').html(editLectureView.render().el);
                });
            },

            edit: function (id) {
                var collection = this.model;
                require(['views/edit_lecture'], function (EditLectureView) {
                    var editLectureView = new editLectureView({ model: collection });
                    $('.main-container').html(editLectureView.render().el);
                });
            },

            defaultAction: function(actions) {
                var collection = this.model;
                require(['views/app'], function (AppView) {
                    var appView = new AppView(({ model: collection }));
                    appView.render();
                });
            },
            
            initialize: function(options) {
                this.model = new LecturesCollection();
            }
        });

        var initialize = function() {
            var app_router = new AppRouter();
            Backbone.history.start();
        };

        return { initialize: initialize };
    });