define([
        'jquery',
        'underscore',
        'backbone',
        'views/lecture'
    ], function($, _, Backbone, LectureView) {
        var LectureListView = Backbone.View.extend({
            tagName: 'section',
            
            initialize: function () {
                this.listenTo(this.model, 'reset', this.render);
                var self = this;
                this.listenTo(this.model, 'add', function (lecture) {
                    var newLectureView = new LectureView({ model: lecture, lectures: self.model }).render().el;
                    self.$el.append(newLectureView);
                });

                this.model.each(function (lecture) {
                    this.$el.append(new LectureView({ model: lecture, lectures: self.model }).render().el);
                }, this);
            },
            
            render: function() {
                return this;
            },
            
            undelegateEvents: function() {
                this.model.off();
            }
        });

        return LectureListView;
    });