if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([], function () {
    var Tuple = function (x, y) {
        this.x = x;
        this.y = y;
    };

    var scale = function (cls, k) {
        return new cls(k*this.x, k*this.y);
    };

    var plus = function (cls, rhs) {
        return new cls(this.x + rhs.x, this.y + rhs.y);
    };

    var minus = function (cls, rhs) {
        return new cls(this.x - rhs.x, this.y - rhs.y);
    };

    var Vector = function (x, y) {
        Tuple.call(this, x, y);
    };

    Vector.prototype = Object.create(Tuple);

    Vector.prototype.scale = function (k) {
        return scale.bind(this)(k);
    };

    Vector.prototype.plus = function (rhs) {
        return plus.bind(this)(Vector, rhs);
    };

    Vector.prototype.minus = function (rhs) {
        return minus.bind(this)(Vector, rhs);
    };

    Object.defineProperty(Vector, 'length', {
        get : function () {
            return Math.sqrt(this.x*this.x + this.y*this.y);
        }
    });

    var Point = function (x, y) {
        Tuple.call(this, x, y);
    };

    Point.prototype = Object.create(Tuple);

    Point.prototype.minus = function (rhs) {
        return minus.bind(this)(Vector, rhs);
    };

    Point.prototype.interpolate = function (pWeight, p) {
        return plus.bind(this)(Point, p.minus(this).scale(pWeight));
    };
});
