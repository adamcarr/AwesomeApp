define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/header/menu.html'
    ], function($, _, Backbone, HeaderMenuTemplate) {
        var MenuView = Backbone.View.extend({
            el: '.header',
            
            initialize: function () { },
            
            render: function() {
                this.$el.html(HeaderMenuTemplate);
            },
            
            events: {
                'click .refresh' : 'refresh'
            },
            
            refresh: function(event) {
                this.model.fetch();
            }
        });

        return MenuView;
    });