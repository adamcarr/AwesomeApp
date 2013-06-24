define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/header/menu.html'
    ], function($, _, Backbone, HeaderMenuTemplate) {
        var MenuView = Backbone.View.extend({
            el: '.header',
            
            initialize: function(options) {
                this.lectures = options.lectures;
            },
            
            render: function() {
                this.$el.html(HeaderMenuTemplate);
            },
            
            events: {
                'click .refresh': 'refresh',
                'click .add': 'add'
            },
            
            refresh: function(event) {
                this.lectures.fetch();
            },
            
            add: function(event) {
                Backbone.history.navigate('add', { trigger: true });
            }
        });

        return MenuView;
    });