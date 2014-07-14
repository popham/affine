(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', './lib/2d/index'], factory);
    } else if (typeof exports === 'object') {
        factory(exports, require('./lib/2d/index'));
    }
}(this, function (exports, affine2) {
    exports.affine2 = affine2;
}));
