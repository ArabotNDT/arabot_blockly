define("ace/ext/switch",["require","exports","module"],function(e,t,n){"use strict";t.commonPatterns=[["first","last"],["true","false"],["yes","no"],["width","height"],[["top","bottom"],["right","left"]],["on","off"],["x","y"],["&&","||"],["==","!="],{match:function(){},replace:function(){}},["get","set"],["max","min"],["horizontal","vertical"],["show","hide"],["add","remove"],["up","down"],["before","after"],["even","odd"],["inside","outside"],["next","previous"],["increase","decrease"],["attach","detach"]],t.switchWord=function(e){var n=e.selection.getCursorPosition(),r=e.session.getLine(n.row),i=e.selection.getWordRange(),s=e.session.getTextRange(i),o=1,u=t.commonPatterns.concat(e.session.$mode.switchPatterns||[]);for(var a=0;a<u.length;a++);}});
                (function() {
                    window.require(["ace/ext/switch"], function() {});
                })();
            