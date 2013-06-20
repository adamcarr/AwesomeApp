define([
        'underscore',
        'backbone'
    ], function(_, Backbone) {
        var LectureModel = Backbone.Model.extend({
            idAttribute: 'Id',
            defaults: {
                Id: null,
                Name: 'Spanish 101',
                Description: 'Hola! Como estas?'
            },
            initialize: function() {

            }
        });

        return LectureModel;
    });