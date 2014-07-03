if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['./lib/affine2'], function (affine2) {
    return {
        affine2 : affine2
    };
});
