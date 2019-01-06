window.onload = function(){
	var top = document.getElementsByClassName('top')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop ||document.body.scrollTop;
		if(st>50){
			top.style.position = 'fixed'
		}
		else{
			top.style.position = 'static'
		}
	}


	var wrap = document.querySelector(".wrap");
	var next = document.querySelector(".arrow_right");
	var prev = document.querySelector(".arrow_left");
	var chart = document.querySelector(".chart");
	var index = 0;
	var dots = document.getElementsByTagName("span");
	next.onclick = function () {
	    next_pic();
	}
	prev.onclick = function () {
	    prev_pic();
	}
	function next_pic () {
	    var newLeft;
	    if(wrap.style.left === "-5600px"){
	        newLeft = -1600;
	    }else{
	        newLeft = parseInt(wrap.style.left)-800;
	    }
	    wrap.style.left = newLeft + "px";

	    index++;
	    if(index > 5){
	        index = 0;
	    }
	    showCurrentDot();
	}
	function prev_pic () {
	    var newLeft;
	    if(wrap.style.left === "0px"){
	        newLeft = -4800;
	    }else{
	        newLeft = parseInt(wrap.style.left)+800;
	    }
	    wrap.style.left = newLeft + "px";

	    index--;
	    if(index < 0){
	        index = 5;
	    }
	    showCurrentDot();
	}
	var timer = null;
	function autoPlay () {
	    timer = setInterval(function () {
	        next_pic();
	    },3000);
	}
	autoPlay();

	chart.onmouseenter = function () {
	    clearInterval(timer);
	}
	chart.onmouseleave = function () {
	    autoPlay();    
	}



	function showCurrentDot () {
	    for(var i = 0, len = dots.length; i < len; i++){
	        dots[i].className = "";
	    }
	    dots[index].className = "on";
	}
	showCurrentDot();
	for (var i = 0, len = dots.length; i < len; i++){
	    (function(i){
	        dots[i].onclick = function () {
	            var dis = index - i;
	            if(index == 5 && parseInt(wrap.style.left)!==-4800){
	                dis = dis - 6;     
	            }
	           
	            if(index == 0 && parseInt(wrap.style.left)!== -800){
	                dis = 6 + dis;
	            }
	            wrap.style.left = (parseInt(wrap.style.left) +  dis * 800)+"px";
	            index = i;
	            showCurrentDot();
	        }
	    })(i);            
	}

}
