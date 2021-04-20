// Generated by purs version 0.11.7
"use strict";
var Control_Bind = require("../Control.Bind");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Boolean = require("../Data.Boolean");
var Data_Eq = require("../Data.Eq");
var Data_Foldable = require("../Data.Foldable");
var Data_Maybe = require("../Data.Maybe");
var Data_Monoid = require("../Data.Monoid");
var Data_Ord = require("../Data.Ord");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Semigroup_Foldable = require("../Data.Semigroup.Foldable");
var Data_Show = require("../Data.Show");
var Data_String = require("../Data.String");
var Data_String_Unsafe = require("../Data.String.Unsafe");
var Prelude = require("../Prelude");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var NonEmptyString = function (x) {
    return x;
};
var NonEmptyReplacement = function (x) {
    return x;
};
var toUpper = function (v) {
    return Data_String.toUpper(v);
};
var toString = function (v) {
    return v;
};
var toLower = function (v) {
    return Data_String.toLower(v);
};
var toCharArray = function (v) {
    return Data_String.toCharArray(v);
};
var toChar = function (v) {
    return Data_String.toChar(v);
};
var takeRight = function (i) {
    return function (v) {
        if (i < 1) {
            return Data_Maybe.Nothing.value;
        };
        if (Data_Boolean.otherwise) {
            return new Data_Maybe.Just(Data_String.takeRight(i)(v));
        };
        throw new Error("Failed pattern match at Data.String.NonEmpty line 367, column 1 - line 367, column 59: " + [ i.constructor.name, v.constructor.name ]);
    };
};
var take = function (i) {
    return function (v) {
        if (i < 1) {
            return Data_Maybe.Nothing.value;
        };
        if (Data_Boolean.otherwise) {
            return new Data_Maybe.Just(Data_String.take(i)(v));
        };
        throw new Error("Failed pattern match at Data.String.NonEmpty line 355, column 1 - line 355, column 54: " + [ i.constructor.name, v.constructor.name ]);
    };
};
var snoc = function (c) {
    return function (s) {
        return s + Data_String.singleton(c);
    };
};
var singleton = function ($74) {
    return NonEmptyString(Data_String.singleton($74));
};
var showNonEmptyString = new Data_Show.Show(function (v) {
    return "(NonEmptyString.unsafeFromString " + (Data_Show.show(Data_Show.showString)(v) + ")");
});
var showNonEmptyReplacement = new Data_Show.Show(function (v) {
    return "(NonEmptyReplacement " + (Data_Show.show(showNonEmptyString)(v) + ")");
});
var semigroupNonEmptyString = Data_Semigroup.semigroupString;
var semigroupNonEmptyReplacement = semigroupNonEmptyString;
var replaceAll = function (pat) {
    return function (v) {
        return function (v1) {
            return Data_String.replaceAll(pat)(v)(v1);
        };
    };
};
var replace = function (pat) {
    return function (v) {
        return function (v1) {
            return Data_String.replace(pat)(v)(v1);
        };
    };
};
var prependString = function (s1) {
    return function (v) {
        return s1 + v;
    };
};
var ordNonEmptyString = Data_Ord.ordString;
var ordNonEmptyReplacement = ordNonEmptyString;
var localeCompare = function (v) {
    return function (v1) {
        return Data_String.localeCompare(v)(v1);
    };
};
var liftS = function (f) {
    return function (v) {
        return f(v);
    };
};
var length = function (v) {
    return Data_String.length(v);
};
var lastIndexOf$prime = function (pat) {
    return function ($75) {
        return liftS(Data_String["lastIndexOf'"](pat)($75));
    };
};
var lastIndexOf = function ($76) {
    return liftS(Data_String.lastIndexOf($76));
};
var joinWith1 = function (dictFoldable1) {
    return function (v) {
        return function ($77) {
            return NonEmptyString(Data_Foldable.intercalate(dictFoldable1.Foldable0())(Data_Monoid.monoidString)(v)($77));
        };
    };
};
var joinWith = function (dictFoldable) {
    return function (splice) {
        return function ($78) {
            return Data_Foldable.intercalate(dictFoldable)(Data_Monoid.monoidString)(splice)($78);
        };
    };
};
var join1With = function (dictFoldable1) {
    return function (splice) {
        return function ($79) {
            return NonEmptyString(joinWith(dictFoldable1.Foldable0())(splice)($79));
        };
    };
};
var indexOf$prime = function (pat) {
    return function ($80) {
        return liftS(Data_String["indexOf'"](pat)($80));
    };
};
var indexOf = function ($81) {
    return liftS(Data_String.indexOf($81));
};
var fromString = function (v) {
    if (v === "") {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just(v);
};
var splitAt = function (i) {
    return function (v) {
        var v1 = Data_String.splitAt(i)(v);
        if (v1 instanceof Data_Maybe.Just) {
            return new Data_Maybe.Just({
                before: fromString(v1.value0.before),
                after: fromString(v1.value0.after)
            });
        };
        if (v1 instanceof Data_Maybe.Nothing) {
            return Data_Maybe.Nothing.value;
        };
        throw new Error("Failed pattern match at Data.String.NonEmpty line 416, column 32 - line 420, column 12: " + [ v1.constructor.name ]);
    };
};
var stripPrefix = function (pat) {
    return Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe)(fromString)(liftS(Data_String.stripPrefix(pat)));
};
var stripSuffix = function (pat) {
    return Control_Bind.composeKleisliFlipped(Data_Maybe.bindMaybe)(fromString)(liftS(Data_String.stripSuffix(pat)));
};
var takeWhile = function (f) {
    return function ($82) {
        return fromString(liftS(Data_String.takeWhile(f))($82));
    };
};
var trim = function (v) {
    return fromString(Data_String.trim(v));
};
var uncons = function (v) {
    return {
        head: Data_String_Unsafe.charAt(0)(v),
        tail: fromString(Data_String.drop(1)(v))
    };
};
var unsafeFromString = function (dictPartial) {
    return function ($83) {
        return Data_Maybe.fromJust(dictPartial)(fromString($83));
    };
};
var fromFoldable1 = function (dictFoldable1) {
    return function ($84) {
        return Data_Semigroup_Foldable.fold1(dictFoldable1)(semigroupNonEmptyString)($84);
    };
};
var fromCharArray = function (v) {
    if (v.length === 0) {
        return Data_Maybe.Nothing.value;
    };
    return new Data_Maybe.Just(Data_String.fromCharArray(v));
};
var eqNonEmptyString = Data_Eq.eqString;
var eqNonEmptyReplacement = eqNonEmptyString;
var dropWhile = function (f) {
    return function ($85) {
        return fromString(liftS(Data_String.dropWhile(f))($85));
    };
};
var dropRight = function (i) {
    return function (v) {
        if (i >= Data_String.length(v)) {
            return Data_Maybe.Nothing.value;
        };
        if (Data_Boolean.otherwise) {
            return new Data_Maybe.Just(Data_String.dropRight(i)(v));
        };
        throw new Error("Failed pattern match at Data.String.NonEmpty line 391, column 1 - line 391, column 59: " + [ i.constructor.name, v.constructor.name ]);
    };
};
var drop = function (i) {
    return function (v) {
        if (i >= Data_String.length(v)) {
            return Data_Maybe.Nothing.value;
        };
        if (Data_Boolean.otherwise) {
            return new Data_Maybe.Just(Data_String.drop(i)(v));
        };
        throw new Error("Failed pattern match at Data.String.NonEmpty line 379, column 1 - line 379, column 54: " + [ i.constructor.name, v.constructor.name ]);
    };
};
var count = function ($86) {
    return liftS(Data_String.count($86));
};
var contains = function ($87) {
    return liftS(Data_String.contains($87));
};
var cons = function (c) {
    return function (s) {
        return Data_String.singleton(c) + s;
    };
};
var charCodeAt = function ($88) {
    return liftS(Data_String.charCodeAt($88));
};
var charAt = function ($89) {
    return liftS(Data_String.charAt($89));
};
var appendString = function (v) {
    return function (s2) {
        return v + s2;
    };
};
module.exports = {
    NonEmptyReplacement: NonEmptyReplacement,
    fromString: fromString,
    unsafeFromString: unsafeFromString,
    fromCharArray: fromCharArray,
    singleton: singleton,
    cons: cons,
    snoc: snoc,
    fromFoldable1: fromFoldable1,
    toString: toString,
    toCharArray: toCharArray,
    charAt: charAt,
    charCodeAt: charCodeAt,
    toChar: toChar,
    appendString: appendString,
    prependString: prependString,
    contains: contains,
    indexOf: indexOf,
    "indexOf'": indexOf$prime,
    lastIndexOf: lastIndexOf,
    "lastIndexOf'": lastIndexOf$prime,
    uncons: uncons,
    length: length,
    localeCompare: localeCompare,
    replace: replace,
    replaceAll: replaceAll,
    take: take,
    takeRight: takeRight,
    takeWhile: takeWhile,
    drop: drop,
    dropRight: dropRight,
    dropWhile: dropWhile,
    stripPrefix: stripPrefix,
    stripSuffix: stripSuffix,
    count: count,
    splitAt: splitAt,
    toLower: toLower,
    toUpper: toUpper,
    trim: trim,
    joinWith: joinWith,
    join1With: join1With,
    joinWith1: joinWith1,
    eqNonEmptyString: eqNonEmptyString,
    ordNonEmptyString: ordNonEmptyString,
    semigroupNonEmptyString: semigroupNonEmptyString,
    showNonEmptyString: showNonEmptyString,
    eqNonEmptyReplacement: eqNonEmptyReplacement,
    ordNonEmptyReplacement: ordNonEmptyReplacement,
    semigroupNonEmptyReplacement: semigroupNonEmptyReplacement,
    showNonEmptyReplacement: showNonEmptyReplacement
};