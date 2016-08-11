$(document).ready(function(){
	console.log("Document is ready");
});

var MYAPP = MYAPP || {};

MYAPP.namespace = function(ns_string){
	var parts = ns_string.split('.'),
		parent = MYAPP,
		i;

	//	strip redundant leading global
	if (parts[0] === "MYAPP"){
		parts = parts.slice(1);
	}

	for (i = 0; i < parts.length; i += 1){
		// create a property if it doesn't exist
		if (typeof parent[parts[i]] === "undefined") {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	return parent;
}



// assign returned value to a local var
var module2 = MYAPP.namespace('MYAPP.modules.module2');
module2 === MYAPP.modules.module2;

//skip initial 'MYAPP'
MYAPP.namespace('modules.module51');


// long namespace
MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');
