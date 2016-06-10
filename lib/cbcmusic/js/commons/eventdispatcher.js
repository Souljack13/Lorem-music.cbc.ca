CBCR3.namespace("CBCR3.Commons");

CBCR3.Commons.EventDispatcher = Class.create({
    listenerChain: null,
    debug: false,

    initialize: function() {

    },

    buildListenerChain: function() {

        if (!this.listenerChain)
            this.listenerChain = {};

    },
    getListeners: function() {

        return (this.listenerChain) ? this.listenerChain : null;
    },

    addEventListener: function(type, listener) {
        if (!listener instanceof Function)
            alert("Listener isn't a function");

        this.buildListenerChain();

        if (!this.listenerChain[type])
            this.listenerChain[type] = [listener];
        else
            this.listenerChain[type].push(listener);

    },

    hasEventListener: function(type) {
        if (this.listenerChain)
            return (typeof this.listenerChain[type] != "undefined");
        return false;
    },

    removeEventListenerType: function(type) {
        if (!this.hasEventListener(type))
            return false;

        this.listenerChain[type] = [];
    },

    removeEventListener: function(type, listener) {
        if (!this.hasEventListener(type))
            return false;

        Trace.write("METANODE: removeEventListener BEFORE", this.debug);
        Trace.write(this.listenerChain[type], this.debug);
        Trace.write(listener, this.debug);
        Trace.write(this.listenerChain, this.debug);
        for (var i = 0; i < this.listenerChain[type].length; i++) {
            if (this.listenerChain[type][i] == listener) {
                Trace.write("equal", this.debug);
                this.listenerChain[type].splice(i, 1);
            }
        }
        Trace.write("METANODE: removeEventListener AFTER", this.debug);
        Trace.write(this.listenerChain, this.debug);
    },

    clearEventListeners: function() {
        this.listenerChain = {};
    },

    dispatchEvent: function(type, data, target) {
        var event;
        if (typeof type === "object") {
            event = type;
            type = event.type;
        }
        else
            event = new CBCR3.Commons.Event(type, data, target || this);

        this.buildListenerChain();

        if (!this.hasEventListener(type))
            return false;

        this.listenerChain[type].any(function(funct) {
            return (funct(event) == false ? true : false);
        });

    }
}); 