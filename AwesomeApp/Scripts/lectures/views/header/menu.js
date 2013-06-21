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
                'click .refresh': 'refresh',
                'click .add': 'add'
            },
            
            refresh: function(event) {
                this.model.fetch();
            },
            
            add: function(event) {
                this.navigate('add');
            }
        });

        return MenuView;
    });