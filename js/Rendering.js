var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,//可选选项，自动滑动
	pagination : '.swiper-pagination',
    paginationClickable :true,
	prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next',
	effect : 'fade',
	fade: {
	  crossFade: false,
	}
})

//瀑布流
// function fallFn(){
// 		var list =  document.getElementById("list");
// 		var width = 200;
// 		var padding = 10;
// 		//用来保存li 的高度 
// 		var heightArr = [];
// 		//随机函数随机高度 
// 		function randFn(min,max){
// 			return parseInt(Math.random()*(max-min+1)+min);
// 		}
// 		//创建瀑布流 boolern 用来判断是否创建新元素
// 		function createFall(bool){
// 			//获取浏览器可视区域窗口宽度
// 			var windowBody =document.documentElement.clientWidth;
// 			//windowBody/width = 多少列
// 			var cols = parseInt( windowBody/(width + padding));
// 			list.style.width = cols*(width + padding) + "px";
// 			var lis = list.getElementsByTagName("li");
// 			var topArr = [];//用来做最矮高度判断 
// 			for(var i = 0;i<cols;i++){
// 				topArr[i] = 0;
// 			}	
// 				//创建li 
// 		function createLi(num){
// 			var li = lis[num] || document.createElement("li");//如果li已经存在，那么用现有的， 如果没有则创建 
// 			var height = heightArr[num] || randFn(100,300);//如果有高度，则取现有的，如果没有则随机高度
// 			li.style.height = height + "px";
// //			<img src="img/rendering/0.jng"/>
// 			li.innerHTML = "<img src='img/rendering/0.jng'/>"
// 			var minIndex ;
// 			minIndex = topArr.indexOf(Math.min.apply(null,topArr));
// 			li.style.top = topArr[minIndex] + padding + "px";
// 			li.style.left = minIndex*(width + padding) + "px";
// 			topArr[minIndex] += height +padding;
// 			if(bool){
// 				heightArr.push(height);
// 				list.appendChild(li);
// 			 }			
// 			for(var i = 0; i < 20;i++){
// 				createLi(i);
// 			}	
// 		}
// 		window.onload = function(){
// 			createFall(true);
// 		}
// 		window.onresize = function(){	
// 			createFall(false);
// 		}	
// 	}
	
	// fallFn();
	




// bottom waterfall
window.onload = function(){
	function RandHeight(min,max){
	return parseInt(Math.random()*(max-min+1)+min);
}

var bottom = document.getElementById("bottom");
var oDiv = bottom.getElementsByTagName("div");
function creatLi(){
		//存ul高度的数组
		var arr = [];
		var index= 0;
		var	newImg = document.createElement("img");
		newImg.src = "img/rendering/rd"+ RandHeight(0,30) +".jpg"
		for(var i=0;i<oDiv.length;i++){
			arr.push(oDiv[i].offsetHeight);	
			var minHeight = Math.min.apply(null,arr);
			index = arr.indexOf(minHeight);
			oDiv[index].appendChild(newImg);			
		}
	}
	function addLi(num){
//				isNaN(num)?0:num;
				for(var i=0;i<num;i++){
					creatLi();
				}
			}
	addLi(30);
}


