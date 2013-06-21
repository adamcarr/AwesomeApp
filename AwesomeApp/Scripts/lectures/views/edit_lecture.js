define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/edit_lecture.html'
    ], function($, _, Backbone, EditLectureTemplate) {
        var EditLectureView = Backbone.View.extend({
            tagName: 'form',
            template: _.template(EditLectureTemplate),

            initialize: function() {
                this.model.on('change', this.render, this);
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON())).fadeIn('slow');

                return this;
            }
        });

        return EditLectureView;
    });