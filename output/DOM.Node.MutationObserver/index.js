// Generated by purs version 0.11.7
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var DOM = require("../DOM");
var DOM_Node_MutationRecord = require("../DOM.Node.MutationRecord");
var DOM_Node_Types = require("../DOM.Node.Types");
var Prelude = require("../Prelude");
var observe = function (dictUnion) {
    return $foreign._observe;
};
module.exports = {
    observe: observe,
    mutationObserver: $foreign.mutationObserver,
    disconnect: $foreign.disconnect,
    takeRecords: $foreign.takeRecords
};
