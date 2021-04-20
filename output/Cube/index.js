"use strict";
var Control_Applicative = require("../Control.Applicative");
var Control_Bind = require("../Control.Bind");
var Control_Monad_Aff = require("../Control.Monad.Aff");
var Control_Monad_Eff_Class = require("../Control.Monad.Eff.Class");
var Control_Monad_Eff_Console = require("../Control.Monad.Eff.Console");
var Control_Monad_State_Class = require("../Control.Monad.State.Class");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Array = require("../Data.Array");
var Data_EuclideanRing = require("../Data.EuclideanRing");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Ring = require("../Data.Ring");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semiring = require("../Data.Semiring");
var Data_Show = require("../Data.Show");
var Data_Tuple = require("../Data.Tuple");
var Halogen = require("../Halogen");
var Halogen_Component = require("../Halogen.Component");
var Halogen_HTML = require("../Halogen.HTML");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Halogen_HTML_Elements = require("../Halogen.HTML.Elements");
var Halogen_HTML_Events = require("../Halogen.HTML.Events");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties");
var Halogen_Query_HalogenM = require("../Halogen.Query.HalogenM");
var $$Math = require("../Math");
var Prelude = require("../Prelude");
var Svg_Attributes = require("../Svg.Attributes");
var Svg_Elements = require("../Svg.Elements");
var X = (function () {
    function X() {

    };
    X.value = new X();
    return X;
})();
var Y = (function () {
    function Y() {

    };
    Y.value = new Y();
    return Y;
})();
var Z = (function () {
    function Z() {

    };
    Z.value = new Z();
    return Z;
})();

// Events
var Tick = (function () {
    function Tick(value0) {
        this.value0 = value0;
    };
    Tick.create = function (value0) {
        return new Tick(value0);
    };
    return Tick;
})();

// Events
var IncAngVelocity = (function () {
    function IncAngVelocity(value0, value1) {
        this.value0 = value0;
        this.value1 = value1;
    };
    IncAngVelocity.create = function (value0) {
        return function (value1) {
            return new IncAngVelocity(value0, value1);
        };
    };
    return IncAngVelocity;
})();

// Events
var SpeedInc = (function () {
    function SpeedInc(value0) {
        this.value0 = value0;
    };
    SpeedInc.create = function (value0) {
        return new SpeedInc(value0);
    };
    return SpeedInc;
})();

// Events
var SpeedDec = (function () {
    function SpeedDec(value0) {
        this.value0 = value0;
    };
    SpeedDec.create = function (value0) {
        return new SpeedDec(value0);
    };
    return SpeedDec;
})();

// Values
var viewBoxSize = 600.0;
var viewCenter = {
    x: viewBoxSize / 2.0,
    y: viewBoxSize / 2.0
};
var rotate = function (v) {
    var rotateInPlane = function (axis1) {
        return function (axis2) {
            return function (ang) {
                return new Data_Tuple.Tuple(axis1 * $$Math.cos(ang) - axis2 * $$Math.sin(ang), axis2 * $$Math.cos(ang) + axis1 * $$Math.sin(ang));
            };
        };
    };
    var rotateX = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.y)(v1.z)(ang);
            return {
                x: v1.x,
                y: v2.value0,
                z: v2.value1
            };
        };
    };
    var rotateY = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.x)(v1.z)(ang);
            return {
                x: v2.value0,
                y: v1.y,
                z: v2.value1
            };
        };
    };
    var rotateZ = function (ang) {
        return function (v1) {
            var v2 = rotateInPlane(v1.x)(v1.y)(ang);
            return {
                x: v2.value0,
                y: v2.value1,
                z: v1.z
            };
        };
    };
    return function ($117) {
        return rotateZ(v.za)(rotateY(v.ya)(rotateX(v.xa)($117)));
    };
};
var rotateShape = function (vertices) {
    return function (ang) {
        return Data_Functor.map(Data_Functor.functorArray)(rotate(ang))(vertices);
    };
};

// Basics.max 0 (ang-drpf)
//------------------ VIEW --------------------
var renderView = function (state) {
    var renderButton = function (label) {
        return function (query) {
            return Halogen_HTML_Elements.button([ Halogen_HTML_Properties.title(label), Halogen_HTML_Events.onClick(Halogen_HTML_Events.input_(query)) ])([ Halogen_HTML_Core.text(label) ]);
        };
    };
    
    // parallel projection
var project = function (p) {
        return {
            x: p.x + viewCenter.x,
            y: p.y + viewCenter.y
        };
    };
    var getPoint = function (maybePoint) {
        var $$default = {
            x: 100.0,
            y: 100.0
        };
        return Data_Maybe.fromMaybe($$default)(maybePoint);
    };
    var drawVertex = function (idx) {
        return function (v) {
            return Svg_Elements.g([  ])([ Svg_Elements.text([ Svg_Attributes.x(v.x + 5.0), Svg_Attributes.y(v.y - 5.0), Svg_Attributes.fill(new Data_Maybe.Just(new Svg_Attributes.RGB(150, 150, 150))) ])([ Halogen_HTML_Core.text(Data_Show.show(Data_Show.showInt)(idx)) ]), Svg_Elements.circle([ Svg_Attributes.r(3.0), Svg_Attributes.cx(v.x), Svg_Attributes.cy(v.y), Svg_Attributes.fill(new Data_Maybe.Just(new Svg_Attributes.RGB(100, 100, 100))) ]) ]);
        };
    };
    var drawVertices = function (vert2Ds) {
        return Data_Array.mapWithIndex(drawVertex)(vert2Ds);
    };
    var drawLine = function (a) {
        return function (b) {
            return Svg_Elements.path([ Svg_Attributes.d([ new Svg_Attributes.Abs(new Svg_Attributes.M(a.x, a.y)), new Svg_Attributes.Abs(new Svg_Attributes.L(b.x, b.y)) ]), Svg_Attributes.stroke(new Data_Maybe.Just(new Svg_Attributes.RGB(50, 50, 50))) ]);
        };
    };
    var drawEdges = function (edges) {
        return function (verts) {
            var connectedVerts = Data_Functor.map(Data_Functor.functorArray)(function (v) {
                return new Data_Tuple.Tuple(Data_Array.index(verts)(v.value0), Data_Array.index(verts)(v.value1));
            })(edges);
            return Data_Functor.map(Data_Functor.functorArray)(function (v) {
                return drawLine(getPoint(v.value0))(getPoint(v.value1));
            })(connectedVerts);
        };
    };
    var drawCube = function (edges) {
        return function (vert2Ds) {
            return Data_Semigroup.append(Data_Semigroup.semigroupArray)(drawEdges(edges)(vert2Ds))(drawVertices(vert2Ds));
        };
    };
    var vert2Ds = Data_Functor.map(Data_Functor.functorArray)(project)(state.shape.vertices);
    return Halogen_HTML_Elements.div([  ])(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ renderButton("rotX++")(IncAngVelocity.create(X.value)), renderButton("rotY++")(IncAngVelocity.create(Y.value)), renderButton("rotZ++")(IncAngVelocity.create(Z.value)), renderButton("Reverse")(IncAngVelocity.create(X.value)), renderButton("Speed++")(SpeedInc.create), renderButton("Speed--")(SpeedDec.create), renderButton("Add")(IncAngVelocity.create(X.value)), renderButton("Remove")(IncAngVelocity.create(X.value)) ])(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ Halogen_HTML_Elements.div([  ])([ renderButton("123++")(SpeedInc.create) ]) ])(Data_Semigroup.append(Data_Semigroup.semigroupArray)([ Halogen_HTML_Elements.div([  ])([ Halogen_HTML_Core.text("Welcome") ]) ])([ Svg_Elements.svg([ Svg_Attributes.viewBox(0.0)(0.0)(viewBoxSize)(viewBoxSize) ])([ Svg_Elements.g([  ])(drawCube(state.shape.edges)(vert2Ds)) ]) ]))));
};
var oneDegInRad = 1.745329255e-2;
var tenDegInRad = oneDegInRad * 10.0;

// 10% per second
var initCube = {
    shape: {
        vertices: [ {
            x: 100.0,
            y: 100.0,
            z: 100.0
        }, {
            x: -100.0,
            y: 100.0,
            z: 100.0
        }, {
            x: 100.0,
            y: -100.0,
            z: 100.0
        }, {
            x: -100.0,
            y: -100.0,
            z: 100.0
        }, {
            x: 100.0,
            y: 100.0,
            z: -100.0
        }, {
            x: -100.0,
            y: 100.0,
            z: -100.0
        }, {
            x: 100.0,
            y: -100.0,
            z: -100.0
        }, {
            x: -100.0,
            y: -100.0,
            z: -100.0
        } ],
        edges: [ new Data_Tuple.Tuple(0, 1), new Data_Tuple.Tuple(0, 2), new Data_Tuple.Tuple(0, 4), new Data_Tuple.Tuple(1, 5), new Data_Tuple.Tuple(1, 3), new Data_Tuple.Tuple(2, 3), new Data_Tuple.Tuple(2, 6), new Data_Tuple.Tuple(4, 5), new Data_Tuple.Tuple(4, 6), new Data_Tuple.Tuple(3, 7), new Data_Tuple.Tuple(6, 7), new Data_Tuple.Tuple(5, 7) ]
    },
    angVel: {
        xa: tenDegInRad,
        ya: tenDegInRad,
        za: tenDegInRad
    },
    forward: true,
    speed: 1.0
};
var frameRate = 200.0;
var dampenPercent = 1.0 - 0.9 / frameRate;
var dampenAngVelocity = function (v) {
    var dampen = function (ang) {
        return ang * dampenPercent;
    };
    return {
        xa: dampen(v.xa),
        ya: dampen(v.ya),
        za: dampen(v.za)
    };
};
var anglePerFrame = function (v) {
    return {
        xa: v.xa / frameRate,
        ya: v.ya / frameRate,
        za: v.za / frameRate
    };
};
var accelerateBy = oneDegInRad * 10.0;

//------------------ UPDATE / REDUCERS --------------------
var cubes = (function () {
    var $$eval = function (v) {
        if (v instanceof Tick) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                var newShape = {
                    edges: v1.shape.edges,
                    vertices: rotateShape(v1.shape.vertices)(anglePerFrame(v1.angVel))
                };
                var newCube = (function () {
                    var $75 = {};
                    for (var $76 in v1) {
                        if ({}.hasOwnProperty.call(v1, $76)) {
                            $75[$76] = v1[$76];
                        };
                    };
                    $75.angVel = dampenAngVelocity(v1.angVel);
                    $75.shape = newShape;
                    return $75;
                })();
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.put(Halogen_Query_HalogenM.monadStateHalogenM)(newCube))(function () {
                    return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_Eff_Class.liftEff(Halogen_Query_HalogenM.monadEffHalogenM(Control_Monad_Aff.monadEffAff))(Control_Monad_Eff_Console.log("tick")))(function () {
                        return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value0);
                    });
                });
            });
        };
        if (v instanceof IncAngVelocity) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    if (v.value0 instanceof X) {
                        var $87 = {};
                        for (var $88 in c) {
                            if ({}.hasOwnProperty.call(c, $88)) {
                                $87[$88] = c[$88];
                            };
                        };
                        $87.angVel = (function () {
                            var $84 = {};
                            for (var $85 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $85)) {
                                    $84[$85] = c["angVel"][$85];
                                };
                            };
                            $84.xa = v1.angVel.xa + accelerateBy + v1.speed;
                            return $84;
                        })();
                        return $87;
                    };
                    if (v.value0 instanceof Y) {
                        var $93 = {};
                        for (var $94 in c) {
                            if ({}.hasOwnProperty.call(c, $94)) {
                                $93[$94] = c[$94];
                            };
                        };
                        $93.angVel = (function () {
                            var $90 = {};
                            for (var $91 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $91)) {
                                    $90[$91] = c["angVel"][$91];
                                };
                            };
                            $90.ya = v1.angVel.ya + accelerateBy + v1.speed;
                            return $90;
                        })();
                        return $93;
                    };
                    if (v.value0 instanceof Z) {
                        var $99 = {};
                        for (var $100 in c) {
                            if ({}.hasOwnProperty.call(c, $100)) {
                                $99[$100] = c[$100];
                            };
                        };
                        $99.angVel = (function () {
                            var $96 = {};
                            for (var $97 in c.angVel) {
                                if ({}.hasOwnProperty.call(c.angVel, $97)) {
                                    $96[$97] = c["angVel"][$97];
                                };
                            };
                            $96.za = v1.angVel.za + accelerateBy + v1.speed;
                            return $96;
                        })();
                        return $99;
                    };
                    throw new Error("Failed pattern match at Cube line 173, column 13 - line 176, column 67: " + [ v.value0.constructor.name ]);
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value1);
                });
            });
        };
        if (v instanceof SpeedInc) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    var $108 = {};
                    for (var $109 in c) {
                        if ({}.hasOwnProperty.call(c, $109)) {
                            $108[$109] = c[$109];
                        };
                    };
                    $108.speed = v1.speed + 15.0;
                    return $108;
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value0);
                });
            });
        };
        if (v instanceof SpeedDec) {
            return Control_Bind.bind(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.get(Halogen_Query_HalogenM.monadStateHalogenM))(function (v1) {
                return Control_Bind.discard(Control_Bind.discardUnit)(Halogen_Query_HalogenM.bindHalogenM)(Control_Monad_State_Class.modify(Halogen_Query_HalogenM.monadStateHalogenM)(function (c) {
                    var $113 = {};
                    for (var $114 in c) {
                        if ({}.hasOwnProperty.call(c, $114)) {
                            $113[$114] = c[$114];
                        };
                    };
                    $113.speed = v1.speed - 15.0;
                    return $113;
                }))(function () {
                    return Control_Applicative.pure(Halogen_Query_HalogenM.applicativeHalogenM)(v.value0);
                });
            });
        };
        throw new Error("Failed pattern match at Cube line 150, column 12 - line 194, column 18: " + [ v.constructor.name ]);
    };
    return Halogen_Component.component(Halogen_HTML_Core.bifunctorHTML)({
        initialState: Data_Function["const"](initCube),
        render: renderView,
        "eval": $$eval,
        receiver: Data_Function["const"](Data_Maybe.Nothing.value)
    });
})();
module.exports = {
    X: X,
    Y: Y,
    Z: Z,
    viewBoxSize: viewBoxSize,
    viewCenter: viewCenter,
    frameRate: frameRate,
    oneDegInRad: oneDegInRad,
    tenDegInRad: tenDegInRad,
    accelerateBy: accelerateBy,
    dampenPercent: dampenPercent,
    initCube: initCube,
    Tick: Tick,
    IncAngVelocity: IncAngVelocity,
    SpeedInc: SpeedInc,
    SpeedDec: SpeedDec,
    cubes: cubes,
    rotateShape: rotateShape,
    rotate: rotate,
    anglePerFrame: anglePerFrame,
    dampenAngVelocity: dampenAngVelocity,
    renderView: renderView
};
