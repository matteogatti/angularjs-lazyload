define(['angularAMD', 'angular-route'], function (angularAMD) {
    var app = angular.module("lazy-app", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when("/dash", 
                angularAMD.route({
                    templateUrl: 'views/dash.html', 
                    controller: 'dashController', 
                    controllerUrl: 'controllers/controllers'
            }))
            .when("/list", 
                angularAMD.route({
                    templateUrl: 'views/list.html', 
                    controller: 'listController',
                    controllerUrl: 'controllers/controllers'
            }))
            .otherwise({redirectTo: '/dash'});
    });
        
    // Bootstrap Angular when DOM is ready
    return angularAMD.bootstrap(app);
});
