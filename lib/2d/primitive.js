if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([], function () {
    var Tuple = function (x, y) {
        this.x = x;
        this.y = y;
    };

    var round = function (cls) {
        return new cls(Math.round(this.x), Math.round(this.y));
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

    Vector.inject = function (xy) {
        return new Vector(xy.x, xy.y);
    };

    Vector.prototype = Object.create(Tuple);

    Vector.prototype.round = function () {
        return round.bind(this)(Vector);
    };

    Vector.prototype.scale = function (k) {
        return scale.bind(this)(Vector, k);
    };

    Vector.prototype.plus = function (rhs) {
        return plus.bind(this)(Vector, rhs);
    };

    Vector.prototype.minus = function (rhs) {
        return minus.bind(this)(Vector, rhs);
    };

    Vector.prototype.dot = function (rhs) {
        return this.x*rhs.x + this.y*rhs.y;
    };

    Object.defineProperty(Vector.prototype, 'length', {
        get : function () {
            return Math.sqrt(this.x*this.x + this.y*this.y);
        }
    });

    var Point = function (x, y) {
        Tuple.call(this, x, y);
    };

    Point.inject = function (xy) {
        return new Point(xy.x, xy.y);
    };

    Point.prototype = Object.create(Tuple);

    Point.prototype.round = function () {
        return round.bind(this)(Vector);
    };

    Point.prototype.plus = function (rhs) {
        return plus.bind(this)(Point, rhs);
    };

    Point.prototype.minus = function (rhs) {
        return minus.bind(this)(Vector, rhs);
    };

    Point.prototype.interpolate = function (pWeight, p) {
        return plus.bind(this)(Point, p.minus(this).scale(pWeight));
    };

    return {
        Point : Point,
        Vector : Vector
    };
});
