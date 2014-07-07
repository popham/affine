if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['./lib/2d/index'], function (affine2) {
    return {
        affine2 : affine2
    };
});
