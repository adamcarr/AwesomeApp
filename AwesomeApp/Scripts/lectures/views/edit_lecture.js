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
                this.model.bind('change', this.render, this);
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON())).fadeIn('slow');

                return this;
            },
            
            events: {
                'click .lecture-save': 'save',
                'click .lecture-cancel': 'cancel'
            },
            
            save: function() {
                var rootElement = this.$el;
                this.model.set({
                    Name: rootElement.find('#lecture-name').val(),
                    Description: rootElement.find('#lecture-description').val()
                });
                this.model.save();
                this.options.router.navigate('', { trigger: true });
                return false;
            },
            
            cancel: function() {
                if (!this.model.get('Id')) {
                    this.model.destroy();
                }
                this.options.router.navigate('', { trigger: true });
                return false;
            }
        });

        return EditLectureView;
    });