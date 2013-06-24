define([
        'jquery',
        'underscore',
        'backbone',
        'collections/lectures',
        'models/lecture'
    ], function($, _, Backbone, LecturesCollection, LectureModel) {
        var AppRouter = Backbone.Router.extend({

            routes: {
                'add': 'add',
                'edit/:id': 'edit',
                
                '*actions': 'defaultAction'
            },

            add: function () {
                var newLectureModel = new LectureModel,
                    self = this;
                require(['views/edit_lecture'], function (EditLectureView) {
                    var editLectureView = new EditLectureView({ lectures: self.lectures, model: newLectureModel });
                    $('.main-container').html(editLectureView.render().el);
                });
            },

            edit: function (id) {
                var self = this;
                require(['views/edit_lecture'], function (EditLectureView) {
                    var editLectureView = new EditLectureView({ model: self.lectures.get(id) });
                    $('.main-container').html(editLectureView.render().el);
                });
            },

            defaultAction: function(actions) {
                var self = this;

                require(['views/app'], function(AppView) {
                    if (!self.appView) {
                        self.appView = new AppView(({ lectures: self.lectures }));
                    }
                    self.appView.render();
                });
            },
            
            initialize: function(options) {
                this.lectures = new LecturesCollection();
                this.lectures.fetch();
            }
        });

        var initialize = function() {
            var app_router = new AppRouter();
            Backbone.history.start({pushState: true, root: '/lectures'});
        };

        return { initialize: initialize };
    });