requirejs.config({
    enforceDefine : true,
    baseUrl: 'javascript',
    paths: {
        // libraries to be used
        jquery: [
            '//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min',
            'libs/jquery-1.11.3.min'
        ],
        canjs: [
            '//canjs.com/release/2.3.2/can.jquery',
            'libs/can.jquery'
        ],
        can_ex: 'libs/can.extend',
        main: 'libs/main'
    },
    shim : {
        "canjs" : {
            deps : ['jquery'],
            exports : 'can'
        }
    }
});


define([], function () {
    require(['main']);
});