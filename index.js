"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var o = rxjs_1.Observable.from([1, 2, 3, 4]).pairwise();
o.subscribe(function (x) { return console.log(x); });
var o1 = new rxjs_1.Observable(function (observer) {
    console.log('start obsersable');
    observer.next('pushed');
    observer.next('pushed');
    setTimeout(function () { return observer.next('pushed async'); });
});
console.log('start subscribe');
o1.subscribe(function (x) { return console.log('subscriber received: ' + x); });
console.log('end subscribe');
var s = rxjs_1.Subject();
s.subscribe({
    next: function (observer) {
        console.log('start subject');
        observer.next('pushed');
        observer.next('pushed');
        var interval = setInterval(function () { return observer.next('pushed async'); }, 1000);
        return function () { return clearInterval(interval); };
    }
});
var subs = s.subscribe('s');
setTimeout(function () { return subs.unsubscribe(); }, 10000);
