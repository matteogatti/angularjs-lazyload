require.config({
    baseUrl: "js/scripts",    
    paths: {
        'angular': 'libs/angular.min',
        'angular-route': 'libs/angular-route.min',
        'angularAMD': 'libs/angularAMD.min'
    },
    shim: { 
        'angularAMD': ['angular'], 
        'angular-route': ['angular'] 
    },
    deps: ['app']
});