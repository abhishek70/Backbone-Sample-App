// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/about/AboutView'
], function($, _, Backbone, HomeView, AboutView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      
      'about':'aboutAction',
      
      // Default
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:aboutAction', function (actions) {
     
        // Display about page 
        var aboutView = new AboutView();
        aboutView.render();
    });

    app_router.on('route:defaultAction', function (actions) {
     
       // We have no matching route, lets display the home page 
        var homeView = new HomeView();
        homeView.render();
    });

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
