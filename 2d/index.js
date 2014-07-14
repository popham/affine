(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', './primitive'], factory);
    } else if (typeof exports === 'object') {
        factory(exports, require('./primitive'));
    }
}(this, function (exports, primitives) {
    exports.Point = primitives.Point;
    exports.Vector = primitives.Vector;
}));
