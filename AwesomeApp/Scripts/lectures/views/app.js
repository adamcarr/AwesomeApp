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
                var self = this;

                require(['views/header/menu'], function(HeaderMenuView) {
                    var headerMenuView = new HeaderMenuView({ model: self.model, router: self.options.router });
                    headerMenuView.render();
                });

                var lectureListView = new LectureListView({ model: this.model, router: this.options.router });

                this.$el.find('.content').append(lectureListView.render().el);

                this.model.fetch();

                return this;
            }
        });

        return AppView;
    });