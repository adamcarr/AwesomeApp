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
                this.listenTo(this.model, 'change', this.render);
                this.listenTo(this.model, 'destroy', function() {
                    this.$el.remove();
                });
            },
            
            render: function() {
                this.$el.html(this.template(this.model.toJSON())).fadeIn('slow');

                return this;
            },
            
            events: {
                'click .lecture-edit' : 'edit'
            },
            
            edit: function() {
                Backbone.history.navigate('edit/' + this.model.get('Id'), { trigger: true });
            },

            undelegateEvents: function () {
                this.model.off();
            }
        });

        return LectureView;
    });