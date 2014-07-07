var load = define;
if (typeof load !== 'function') { var load = require('amdefine')(module); }

load(['./primitive'], function (primitive) {
    return primitive; // Point and Vector
});
