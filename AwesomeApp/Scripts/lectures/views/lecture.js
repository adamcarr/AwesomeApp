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
                this.model.on('change', this.render, this);
            },
            
            render: function() {
                this.$el.html(this.template(this.model.toJSON())).fadeIn('slow');

                return this;
            },
            
            events: {
                'click .lecture-edit' : 'edit'
            },
            
            edit: function() {
                this.options.router.navigate('edit/' + this.model.get('Id'), { trigger: true });
            }
        });

        return LectureView;
    });