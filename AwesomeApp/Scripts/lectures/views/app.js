define([
        'jquery',
        'underscore',
        'backbone',
        'views/lecture_list',
        'text!templates/layout.html'
    ], function($, _, Backbone, LectureListView, layoutTemplate) {
        var AppView = Backbone.View.extend({
            el: '.main-container',
            
            initialize: function() {
                
            },
            
            render: function() {
                this.$el.html(layoutTemplate);
                var collection = this.model;

                require(['views/header/menu'], function(HeaderMenuView) {
                    var headerMenuView = new HeaderMenuView({ model: collection });
                    headerMenuView.render();
                });

                var lectureListView = new LectureListView({ model: collection });

                this.$el.find('.content').append(lectureListView.render().el);

                collection.fetch();

                return this;
            }
        });

        return AppView;
    });