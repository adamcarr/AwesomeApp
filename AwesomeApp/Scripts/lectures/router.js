define([
        'jquery',
        'underscore',
        'backbone',
        'collections/lectures'
    ], function($, _, Backbone, LecturesCollection) {
        var AppRouter = Backbone.Router.extend({

            routes: {
                'add': 'add',
                'edit/:id': 'edit',
                
                '*actions': 'defaultAction'
            },

            add: function () {
                var self = this;
                require(['views/edit_lecture'], function (EditLectureView) {
                    var editLectureView = new EditLectureView({ model: self.model.create(), router: self });
                    $('.main-container').html(editLectureView.render().el);
                });
            },

            edit: function (id) {
                var self = this;
                require(['views/edit_lecture'], function (EditLectureView) {
                    var editLectureView = new EditLectureView({ model: self.model, router: self });
                    $('.main-container').html(editLectureView.render().el);
                });
            },

            defaultAction: function(actions) {
                var self = this;
                require(['views/app'], function (AppView) {
                    var appView = new AppView(({ model: self.model, router: self }));
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