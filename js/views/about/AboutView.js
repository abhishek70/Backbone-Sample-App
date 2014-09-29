define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/about/aboutTemplate.html'
], function($, _, Backbone, aboutTemplate){

  var AboutView = Backbone.View.extend({
    el: $("#site_content"),

    render: function(){
      
      $('#nav li').removeClass('selected');
      $('#nav li a[href="'+window.location.hash+'"]').parent().addClass('selected');
      this.$el.html(aboutTemplate);
 
    }

  });

  return AboutView;
  
});