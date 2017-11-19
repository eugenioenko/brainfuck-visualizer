function Brainfuck(maxIns){
	this.maxIns = typeof maxIns === "undefined" ? 1000 : maxIns;
	this.output = [];
	this.input = [];
	this.mem =  new Array(100).fill(0);
	this.ip = 0;
	this.ptr = 0;
	this.ins = '';
	this.counter = 0;
	this.active  = false;
}
Brainfuck.prototype['>'] = function(){ ++this.ptr };
Brainfuck.prototype['<'] = function(){ --this.ptr };
Brainfuck.prototype['+'] = function(){ ++this.mem[this.ptr] };
Brainfuck.prototype['-'] = function(){ --this.mem[this.ptr] };
Brainfuck.prototype['.'] = function(){
	this.output.push(String.fromCharCode(this.mem[this.ptr]));
};
Brainfuck.prototype[','] = function(){ this.mem[this.ptr] = ''}
Brainfuck.prototype['['] = function(){
	if(this.mem[this.ptr] == 0){
		var brackets = 1;
		while(brackets > 0){
			this.ins = this.input[++this.ip];
			if(this.ins == '[') brackets++;
			if(this.ins == ']') brackets--;
		}
	}
};
Brainfuck.prototype[']'] = function(){
	if(this.mem[this.ptr] != 0){
		var brackets = 1;
		while(brackets>0){
			this.ins = this.input[--this.ip];
			if(this.ins == ']') brackets++;
			if(this.ins == '[') brackets--;
		}
	}
};
Brainfuck.prototype.exec = function(){
	this.active = true;
	while(this.active){
		this.tick();
	}
	return this;
};
Brainfuck.prototype.tick = function(){
	if(this.ip <= this.input.length-1){
		this.ins = this.input[this.ip];
		if(typeof this[this.ins] !== "undefined"){
			this[this.ins]();
		}
		this.ip++;
		if(++this.counter > this.maxIns) this.active = false;
	} else {
		this.active = false;
	}
	return this;
};
Brainfuck.prototype.reset = function(){
	this.output = [];
	this.input = [];
	this.mem =  new Array(100).fill(0);
	this.ip = 0;
	this.ptr = 0;
	this.ins = '';
	this.counter = 0;
	this.active  = false;
	return this;
};
Brainfuck.prototype.load = function(str){
	this.input = str.replace(/[^\[\]\.,<>\+\-]/g,'').split('');
	return this;
};