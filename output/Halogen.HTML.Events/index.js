// Generated by purs version 0.11.7
"use strict";
var Control_Bind = require("../Control.Bind");
var Control_Monad_Except = require("../Control.Monad.Except");
var Control_Monad_Except_Trans = require("../Control.Monad.Except.Trans");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM_Event_Event = require("../DOM.Event.Event");
var DOM_Event_Types = require("../DOM.Event.Types");
var DOM_HTML_Event_Types = require("../DOM.HTML.Event.Types");
var Data_Either = require("../Data.Either");
var Data_Foreign = require("../Data.Foreign");
var Data_Foreign_Index = require("../Data.Foreign.Index");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_Identity = require("../Data.Identity");
var Data_Maybe = require("../Data.Maybe");
var Halogen_HTML_Core = require("../Halogen.HTML.Core");
var Halogen_HTML_Properties = require("../Halogen.HTML.Properties");
var Halogen_Query = require("../Halogen.Query");
var Halogen_Query_InputF = require("../Halogen.Query.InputF");
var Prelude = require("../Prelude");
var Unsafe_Coerce = require("../Unsafe.Coerce");
var mouseHandler = Unsafe_Coerce.unsafeCoerce;
var keyHandler = Unsafe_Coerce.unsafeCoerce;
var input_ = function (f) {
    return function (v) {
        return Data_Maybe.Just.create(Halogen_Query.action(f));
    };
};
var input = function (f) {
    return function (x) {
        return Data_Maybe.Just.create(Halogen_Query.action(f(x)));
    };
};
var handler = function (et) {
    return function ($1) {
        return Halogen_HTML_Core.handler(et)(Data_Functor.map(Data_Functor.functorFn)(Data_Functor.map(Data_Maybe.functorMaybe)(Halogen_Query_InputF.Query.create))($1));
    };
};
var onAbort = handler("abort");
var onChange = handler("change");
var onClick = function ($2) {
    return handler("click")(mouseHandler($2));
};
var onContextMenu = function ($3) {
    return handler("contextmenu")(mouseHandler($3));
};
var onDoubleClick = function ($4) {
    return handler("dblclick")(mouseHandler($4));
};
var onError = handler("error");
var onInput = handler("input");
var onInvalid = handler("invalid");
var onKeyDown = function ($5) {
    return handler("keydown")(keyHandler($5));
};
var onKeyPress = function ($6) {
    return handler("keypress")(keyHandler($6));
};
var onKeyUp = function ($7) {
    return handler("keyup")(keyHandler($7));
};
var onLoad = handler("load");
var onMouseDown = function ($8) {
    return handler("mousedown")(mouseHandler($8));
};
var onMouseEnter = function ($9) {
    return handler("mouseenter")(mouseHandler($9));
};
var onMouseLeave = function ($10) {
    return handler("mouseleave")(mouseHandler($10));
};
var onMouseMove = function ($11) {
    return handler("mousemove")(mouseHandler($11));
};
var onMouseOut = function ($12) {
    return handler("mouseout")(mouseHandler($12));
};
var onMouseOver = function ($13) {
    return handler("mouseover")(mouseHandler($13));
};
var onMouseUp = function ($14) {
    return handler("mouseup")(mouseHandler($14));
};
var onReset = handler("reset");
var onScroll = handler("scroll");
var onSelect = handler("select");
var onSubmit = handler("submit");
var onTransitionEnd = handler("transitionend");
var focusHandler = Unsafe_Coerce.unsafeCoerce;
var onBlur = function ($15) {
    return handler("blur")(focusHandler($15));
};
var onFocus = function ($16) {
    return handler("focus")(focusHandler($16));
};
var onFocusIn = function ($17) {
    return handler("focusin")(focusHandler($17));
};
var onFocusOut = function ($18) {
    return handler("focusout")(focusHandler($18));
};
var dragHandler = Unsafe_Coerce.unsafeCoerce;
var onDrag = function ($19) {
    return handler("drag")(dragHandler($19));
};
var onDragEnd = function ($20) {
    return handler("dragend")(dragHandler($20));
};
var onDragEnter = function ($21) {
    return handler("dragenter")(dragHandler($21));
};
var onDragExit = function ($22) {
    return handler("dragexit")(dragHandler($22));
};
var onDragLeave = function ($23) {
    return handler("dragleave")(dragHandler($23));
};
var onDragOver = function ($24) {
    return handler("dragover")(dragHandler($24));
};
var onDragStart = function ($25) {
    return handler("dragstart")(dragHandler($25));
};
var onDrop = function ($26) {
    return handler("drop")(dragHandler($26));
};
var clipboardHandler = Unsafe_Coerce.unsafeCoerce;
var onCopy = function ($27) {
    return handler("copy")(clipboardHandler($27));
};
var onCut = function ($28) {
    return handler("cut")(clipboardHandler($28));
};
var onPaste = function ($29) {
    return handler("paste")(clipboardHandler($29));
};
var addForeignPropHandler = function (key) {
    return function (prop) {
        return function (reader) {
            return function (f) {
                return handler(key)(function ($30) {
                    return Data_Either.either(Data_Function["const"](Data_Maybe.Nothing.value))(f)(Control_Monad_Except.runExcept(Control_Bind.composeKleisliFlipped(Control_Monad_Except_Trans.bindExceptT(Data_Identity.monadIdentity))(reader)(Data_Foreign_Index.readProp(prop))(Data_Foreign.toForeign(DOM_Event_Event.currentTarget($30)))));
                });
            };
        };
    };
};
var onChecked = addForeignPropHandler("change")("checked")(Data_Foreign.readBoolean);
var onSelectedIndexChange = addForeignPropHandler("change")("selectedIndex")(Data_Foreign.readInt);
var onValueChange = addForeignPropHandler("change")("value")(Data_Foreign.readString);
var onValueInput = addForeignPropHandler("input")("value")(Data_Foreign.readString);
module.exports = {
    input: input,
    input_: input_,
    handler: handler,
    onAbort: onAbort,
    onError: onError,
    onLoad: onLoad,
    onScroll: onScroll,
    onChange: onChange,
    onInput: onInput,
    onInvalid: onInvalid,
    onReset: onReset,
    onSelect: onSelect,
    onSubmit: onSubmit,
    onTransitionEnd: onTransitionEnd,
    onCopy: onCopy,
    onPaste: onPaste,
    onCut: onCut,
    onClick: onClick,
    onContextMenu: onContextMenu,
    onDoubleClick: onDoubleClick,
    onMouseDown: onMouseDown,
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onMouseMove: onMouseMove,
    onMouseOver: onMouseOver,
    onMouseOut: onMouseOut,
    onMouseUp: onMouseUp,
    onKeyDown: onKeyDown,
    onKeyPress: onKeyPress,
    onKeyUp: onKeyUp,
    onBlur: onBlur,
    onFocus: onFocus,
    onFocusIn: onFocusIn,
    onFocusOut: onFocusOut,
    onDrag: onDrag,
    onDragEnd: onDragEnd,
    onDragExit: onDragExit,
    onDragEnter: onDragEnter,
    onDragLeave: onDragLeave,
    onDragOver: onDragOver,
    onDragStart: onDragStart,
    onDrop: onDrop,
    onValueChange: onValueChange,
    onValueInput: onValueInput,
    onSelectedIndexChange: onSelectedIndexChange,
    onChecked: onChecked
};