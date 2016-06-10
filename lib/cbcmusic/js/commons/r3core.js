if (typeof CBCR3 == "undefined" || !CBCR3) {
    var CBCR3 = {};
}
var debug = false;
var traceCount = 0;

function docDomain() {
    var myDomain = window.location.hostname;
    var isLive = myDomain.search("cbc.ca");
    if (isLive > -1) { return document.domain = "cbc.ca"; } else { return null; }
}

CBCR3.namespace = function() {
    var a=arguments, o=null, i, j, d;
    for (i=0; i<a.length; i=i+1) {
        d=(""+a[i]).split(".");
        o=CBCR3;

        // CBCR3 is implied, so it is ignored if it is included
        for (j = (d[0] == "CBCR3") ? 1 : 0; j < d.length; j = j + 1) {
            o[d[j]]=o[d[j]] || {};
            o=o[d[j]];
        }
    }

    return o;		
}

var Trace = {
    
    log: function(obj) {
        this._outputToConsole(obj);
    },

    /*
    write: function(msg, obj) {
    this._outputToConsole(msg);
    this._outputToConsole(obj);
    },
    */
    error: function(error) {
        var fileName = error.fileName; /* | error.stack;*/
        var lineNumber = error.lineNumber; /* | "";*/
        this._outputToConsole("ERROR - message: " + error.message + " error:" + error + " fileName: " + fileName + " lineNumber: " + lineNumber);
    },


    write: function(obj, overwrite) {
        if (debug) {
            this._outputToConsole(obj);
        } else {
            if (overwrite)
                this._outputToConsole(obj);
        }
    },


    _outputToConsole: function(obj) {

        if (!window.top.location.href.toQueryParams().debug)
            return;

        if (typeof window.opera != "undefined")
            window.opera.postError(obj);

        if (typeof console != "undefined") {
            traceCount++;
            console.log(this._source + " " + traceCount + ":");
            console.log(obj);
        }
    },
    _source: ""
};

if (!Array.prototype.filter)
{
  Array.prototype.filter = function(fun /*, thisp*/)
  {
    var len = this.length >>> 0;
    if (typeof fun != "function")
      throw new TypeError();

    var res = new Array();
    var thisp = arguments[1];
    for (var i = 0; i < len; i++)
    {
      if (i in this)
      {
        var val = this[i]; // in case fun mutates this
        if (fun.call(thisp, val, i, this))
          res.push(val);
      }
    }

    return res;
  };
}

/*extend Event.stop in prototype to fix FF issue 
if (Event.prototype.stop) {
    Event.prototype.stop = function(event) {
        if (event.preventDefault) {
            event.stopPropagation();
            event.preventDefault();
        } else {
            event.returnValue = false;
            event.cancelBubble = true;
        }
    };
}
*/

var CBCDetect = {
    isIE: function() {
        var isMinIE10 = !!window.MSStream; //feature detection
        return (Prototype && Prototype.Browser) ? (isMinIE10 || Prototype.Browser.IE) : isMinIE10;
    }
};

function isIE(v) {
    var isMinIE10 = !!window.MSStream;

    alert(isMinIE10);

    return (isMinIE10 || Prototype.Browser.IE);
}

CBCR3.environment = function()
{
    if (!top.document._r3Environment)
        top.document._r3Environment = {};
    return top.document._r3Environment;
};