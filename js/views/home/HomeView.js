define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/homeTemplate.html'
], function($, _, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#site_content"),

    render: function(){
      
      $('#nav li').removeClass('selected');
      $('#nav li a[href="#"]').parent().addClass('selected');
      this.$el.html(homeTemplate);
 
    }

  });

  return HomeView;
  
});