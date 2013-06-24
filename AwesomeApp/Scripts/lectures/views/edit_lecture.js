define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/edit_lecture.html'
    ], function($, _, Backbone, EditLectureTemplate) {
        var EditLectureView = Backbone.View.extend({
            tagName: 'form',
            template: _.template(EditLectureTemplate),

            initialize: function (options) {
                this.lectures = options.lectures;
                this.model.bind('change', this.render, this);
            },

            render: function() {
                this.$el.html(this.template(this.model.toJSON())).fadeIn('slow');

                return this;
            },
            
            events: {
                'click .lecture-save' : 'save',
                'click .lecture-cancel' : 'cancel',
                'click .lecture-delete' : 'delete'
            },
            
            save: function() {
                var rootElement = this.$el;
                this.model.set({
                    Name: rootElement.find('#lecture-name').val(),
                    Description: rootElement.find('#lecture-description').val()
                });
                if (this.model.isNew()) {
                    this.lectures.add(this.model);
                }
                this.model.save();
                Backbone.history.navigate('', { trigger: true });
            },
            
            cancel: function() {
                if (!this.model.get('Id')) {
                    this.model.destroy();
                }
                Backbone.history.navigate('', { trigger: true });
            },
            
            delete:function() {
                this.model.destroy();
                Backbone.history.navigate('', { trigger: true });
            },

            undelegateEvents: function () {
                this.model.off();
            }
        });

        return EditLectureView;
    });