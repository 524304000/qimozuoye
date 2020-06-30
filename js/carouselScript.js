window.onload = rotate; //当窗口加载完成时，触发rotate函数-->
     
    var thisAd = 0; 
     
    function rotate(){ 
		 "use strict";
     var adImages = new Array("img/indexImg55.jpg","img/indexImg05.jpg","img/indexImg11.jpg","img/indexImg01.jpg","img/indexImg22.jpg","img/indexImg02.jpg","img/indexImg33.jpg","img/indexImg03.jpg","img/indexImg44.jpg","img/indexImg04.jpg"); 
         
        thisAd++; 
        if(thisAd === adImages.length){ 
			//如果thisAd的值等于adImages数组中成员的数量，将其设置为0，实现循环
            thisAd=0; 
            } 
        document.getElementById("adBanner").src = adImages[thisAd]; 
         
        setTimeout(rotate,2*1000); 
	}
//HTML DOM setTimeout()方法，用于在指定的毫秒数后调用函数或计算表达式。只执行code一次。
//setTimeout(code,millisec)，millisec指定执行code间隔的时间，本例中图像每隔3秒改变一次







