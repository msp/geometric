var frequencyList = []
var inlets = 2;


if (jsarguments.length>1) {
	frequencyList = jsarguments[1];
}
 
// EVENTS
function msg_int(v) {
	//post("in msg_int " + v.length + "\n");
	//post("in msg_int " + v + "\n");
	//frequencyList = v;
	//work();
}

function list() {
	frequencyList = Array.prototype.slice.call(arguments);
	work();
}

function bang() {
	post("in bang \n");
	//work();
}

// WORK
function work() {
	//post("in work \n");
	//post("frequencyList: "+frequencyList+" \n");
	var value = Math.max.apply( Math, frequencyList );
	var index = frequencyList.indexOf(value);
	//post("max: "+value+" index: "+index+" \n");
	var freq = lookUpFreqOfValue(index);
	//post("freq: "+freq+"\n");
	
	outlet(0, freq);
	return freq;	
}

// UTIL
function lookUpFreqOfValue(index) {
	// https://en.wikipedia.org/wiki/Bark_scale
	var barkScale = [60, 150, 250, 350, 450, 570, 700, 840, 1000, 1170, 1370, 1600, 1850, 2150, 2500, 2900, 3400, 4000, 4800, 5800, 7000, 8500, 10500, 13500, 17000];
	return barkScale[index];
}
