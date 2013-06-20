define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/lecture.html'
    ], function($, _, Backbone, LectureTemplate) {
        var LectureView = Backbone.View.extend({
            tagName: 'article',
            template: _.template(LectureTemplate),
            
            initialize: function() {
                this.model.bind('change', this.render, this);
            },
            
            render: function() {
                this.$el.html(this.template(this.model.toJSON()));

                return this;
            }
        });

        return LectureView;
    });