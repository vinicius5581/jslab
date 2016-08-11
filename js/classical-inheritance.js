//////////////////////////////////////////////////////
/////////////// classical pattern #1 /////////////////
//////////////////////////////////////////////////////


// the parent constructor
function Parent(name){
	this.name = name || 'Vinicius';
}

// adding functionality to the prototype
Parent.prototype.say = function(){
	return this.name;
};

// empty child constructor
function Child(name) {}

// inheritance magic happens here
inheritDefaultPattern(Child, Parent);



function inheritDefaultPattern(C, P){
	C.prototype = new P();
}



var kid = new Child();
kid.say();


//////////////////////////////////////////////////////
/////////////// classical pattern #2 /////////////////
//////////////////////////////////////////////////////


function(a, c, b, d) {
	Parent.apply(this.arguments);

}

// a parent constructor
function.Article(){
	this.tags = ['js', 'css'];
}

var article = new Article();

// a blog post inherits from an article object
// via the classical pattern #1