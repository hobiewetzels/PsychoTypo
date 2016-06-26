(function(window){//Calling the window function

	//Function for defining PsychoPara
	function definePsycho(){
		
	 var PsychoPara = {};
     PsychoPara.condition = function(condition){
	
	if(condition.transition == true){
		PsychoPara.transition();
	}else{console.log("Wrong use of parameter : transition, or set to false.")}

	if(condition.color == true){
		if(condition.interval){
			setInterval(PsychoPara.color, condition.interval);
		}else{
			//if not set by USER give default value of 3000.
			setInterval(PsychoPara.color, 3000);
		}
	}else{console.log("Wrong use of parameter : color, or set to false.")}

	if(condition.spacing == true){
		if(condition.interval){
			//Use interval set by user.
			setInterval(PsychoPara.spacing, condition.interval);
		}else{
			//if not set by USER give default value of 3000.
			setInterval(PsychoPara.spacing, 3000);
		}
	}else{console.log("Wrong use of parameter : spacing, or set to false.")}
	}

	
		PsychoPara.color = function () {
			document.getElementById("Psycho").style.color = getRandomColor();
		};
		PsychoPara.spacing = function (){
			document.getElementById("Psycho").style.letterSpacing = getRandomSpacing();
		};
		PsychoPara.transition = function (){
			document.getElementById("Psycho").style.transition = "all 1s";
		};
		

		return PsychoPara;
	}

	if(typeof(PsychoPara) === 'undefined') {
		window.PsychoPara = definePsycho();

	}


	//functions for random

	function getRandomColor() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.floor(Math.random() * 16)];
	    }
	    return color;
	}

	function getRandomSpacing() {

		var number = Math.floor(Math.random() * 100) -50;
		var spacing = number + "px";
		return spacing;
	}



})(window);
