define([
        'jquery',
        'underscore',
        'backbone',
        'views/lecture_list',
        'text!templates/layout.html'
    ], function($, _, Backbone, LectureListView, layoutTemplate) {
        var AppView = Backbone.View.extend({
            el: '.main-container',
            
            initialize: function(options) {
                this.lectures = options.lectures;
            },
            
            render: function() {
                var self = this;

                this.$el.html(layoutTemplate);

                require(['views/header/menu'], function(HeaderMenuView) {
                    var headerMenuView = new HeaderMenuView({ lectures: self.lectures });
                    headerMenuView.render();
                });

                var lectureListView = new LectureListView({ model: this.lectures });

                this.$el.find('.content').append(lectureListView.render().el);


                return this;
            }
        });

        return AppView;
    });