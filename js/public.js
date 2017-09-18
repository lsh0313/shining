var head = document.getElementById("head");
var foot = document.getElementById("foot");
var navButtons = head.getElementsByTagName("li");
var otherLink = foot.getElementsByTagName("img");
var nav = head_box_navButton.getElementsByClassName("head_box_nav1")[0];
var navBtn = document.getElementById("head_box_navButton");


function navbuttons(){
	//导航栏事件
	for(var i = 0;i < navButtons.length;i++ ){
		navButtons[i].index = i;
		navButtons[i].onmouseover = function(){
		   for(var i = 1 ;i<navButtons.length;i++){
		   	navButtons[i].className ="";
		   }
	//  navButton[this.index].className = "head_box_nav_border";
		navButtons[this.index].setAttribute("class","head_box_nav_border");
	   }
	}
}

function navimg(){
	//导航栏按钮事件
    var bool = true;
    navBtn.onclick = function(){
	if(bool){
		nav.style.display = "block";
		bool = false; 
	}else{
		nav.style.display = "none";
		bool = true;
	}	
  }
}

function changeOther(){
	//底部换图片事件
	for(var i = 0;i<otherLink.length;i++){
		otherLink[i].index = i;
		otherLink[i].onmouseover = function(){
			switch(this.index){
				case 0:{mail_h.src = "img/home/mail_h.jpg";};break;
				case 1:{facebook_h.src = "img/home/facebook_h.jpg";};break;
				case 2:{youtube_h.src = "img/home/youtube_h.jpg";};break;
				case 3:{linkedln_h.src = "img/home/linkedln_h.jpg";};break;
				case 4:{twitter_h.src = "img/home/twitter_h.jpg";};break;
			}
		}
		otherLink[i].onmouseout = function(){
			switch(this.index){
			    case 0:{mail_h.src = "img/home/mail.jpg";};break;
				case 1:{facebook_h.src = "img/home/facebook.jpg";};break;
				case 2:{youtube_h.src = "img/home/youtube.jpg";};break;
				case 3:{linkedln_h.src = "img/home/linkedln.jpg";};break;
				case 4:{twitter_h.src = "img/home/twitter.jpg";};break;
			}	
		}
	
	}
}


changeOther();
navimg();
navbuttons();