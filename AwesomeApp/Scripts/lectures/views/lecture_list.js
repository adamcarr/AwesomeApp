define([
        'jquery',
        'underscore',
        'backbone',
        'views/lecture'
    ], function($, _, Backbone, LectureView) {
        var LectureListView = Backbone.View.extend({
            tagName: 'section',
            
            initialize: function() {
                this.model.on('reset', this.render, this);
                var self = this;
                this.model.on('add', function(lecture) {
                    var newLectureView = new LectureView({ model: lecture, router: self.options.router }).render().el;
                    self.$el.append(newLectureView);
                });
            },
            
            render: function() {
                var rootElement = this.$el;
                _.each(this.model.models, function(lecture) {
                    rootElement
                        .find(this.tagName)
                        .append(new LectureView({ model: lecture, router: self.options.router }).render().el);
                }, this);

                return this;
            }
        });

        return LectureListView;
    });