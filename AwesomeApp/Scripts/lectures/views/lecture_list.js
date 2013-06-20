define([
        'jquery',
        'underscore',
        'backbone',
        'views/lecture'
    ], function($, _, Backbone, LectureView) {
        var LectureListView = Backbone.View.extend({
            tagName: 'section',
            
            initialize: function() {
                this.model.fetch();
                this.model.bind('reset', this.render, this);
                var self = this;
                this.model.bind('add', function(lecture) {
                    var newLectureView = new LectureView({ model: lecture }).render().el;
                    self.$el.append(newLectureView);
                });
            },
            
            render: function() {
                var rootElement = this.$el;
                _.each(this.model.models, function(lecture) {
                    rootElement
                        .find(this.tagName)
                        .append(new LectureView({ model: lecture }).render().el);
                }, this);

                return this;
            }
        });

        return LectureListView;
    });