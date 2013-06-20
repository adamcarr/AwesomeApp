define([
        'jquery',
        'underscore',
        'backbone',
        'models/lecture'
    ], function($, _, Backbone, LectureModel) {
        var LectureCollection = Backbone.Collection.extend({
            url: '/api/lecture',
            model: LectureModel,
            initialize: function() {
                
            },
            comparator: function(lecture) {
                return lecture.get('Name');
            }
        });

        return LectureCollection;
    });