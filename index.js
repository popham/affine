var load = define;
if (typeof load !== 'function') { var load = require('amdefine')(module); }

load(['./lib/2d/index'], function (affine2) {
    return {
        affine2 : affine2
    };
});
