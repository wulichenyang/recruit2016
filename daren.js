var darenList=[
{
	"photo":"img/someone.jpeg",
	"name":"王树根",
	"school":"2013信软",
	"job":"现在在那里那里工作"
},
{
	"photo":"img/someone.jpeg",
	"name":"王树根",
	"school":"2013信软",
	"job":"现在在那里那里工作"
},
{
	"photo":"img/someone.jpeg",
	"name":"王树根",
	"school":"2013信软",
	"job":"现在在那里那里工作"
}];

var photoWall=[{"imgs":"img/1.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},{"imgs":"img/2.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},
    {"imgs":"img/3.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},{"imgs":"img/4.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},
   {"imgs":"img/5.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},{"imgs":"img/6.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},
   {"imgs":"img/7.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},{"imgs":"img/8.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},
   {"imgs":"img/9.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},{"imgs":"img/10.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},
   {"imgs":"img/11.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},{"imgs":"img/12.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},
   {"imgs":"img/13.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},{"imgs":"img/14.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},
   {"imgs":"img/15.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},{"imgs":"img/16.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},
   {"imgs":"img/17.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"},{"imgs":"img/18.jpg","imgs_date":"2015.10.1","imgs_discrip":"在哪里聚餐"}
]
// 把json字符串转为JS
// var jsonText_1=JSON.parse(darenList);
// var jsonText_2=JSON.parse(photoWall);

var daren_list=document.getElementById("daren_list");
// var photo_box=document.getElementById("photo-box");
var len=darenList.length;
// var li_2=photo_box.createElement("li");
 // console.log(len);
var li_1=new Array();
var daren_p=new Array();
var daren_img=new Array();
for(var i=0;i<len;i++){   

	 li_1[i]=document.createElement("li");
	 daren_p[i]=new Array();
	 // console.log("daren_p[i]");
	 daren_list.appendChild(li_1[i]);
  
   for(var j=0;j<4;j++){
       daren_p[i][j]=document.createElement("p");
     if(j==0){
           daren_img[i]=document.createElement("img");
           daren_img[i].src=darenList[i].photo;
           daren_p[i][j].appendChild(daren_img[i]);
         }
     else if(j==1){
           daren_p[i][j].innerHTML=darenList[i].name;
    	}
     else if(j==2){
     	   daren_p[i][j].innerHTML=darenList[i].school;
     }
      else{
     	   daren_p[i][j].innerHTML=darenList[i].job;
     }
      li_1[i].appendChild(daren_p[i][j]);
    }
      
}

	
  // 自动定时器处理
   var curIndex=0;
   var ph_length=photoWall.length;
   // 设置透明度
	function setOpacity(elem, level) {
        elem.filters?elem.style.filter='alpha(opacity='+level+')':elem.style.opacity=level/100;
	}
   var img_list=new Array();
   var img_dis=new Array();
   var img_date=new Array();
   var photo_box=new Array();
   var photo_wrapper=document.getElementById("photo-wrapper");
   for(var k=0;k<ph_length;k++){
    photo_box[k]=document.createElement("div");
    img_list[k]=document.createElement("img");
    img_dis[k]=document.createElement("p");
    img_date[k]=document.createElement("h3");
    img_list[k].src=photoWall[k].imgs;
    img_dis[k].innerHTML=photoWall[k].imgs_discrip;
    img_date[k].innerHTML=photoWall[k].imgs_date;
    photo_wrapper.appendChild(photo_box[k]);
    // console.log(photo_box[k]);
    photo_box[k].appendChild(img_list[k]);
    
    photo_box[k].appendChild(img_date[k]);
    photo_box[k].appendChild(img_dis[k]);
    // 除第一张图外 其他图片不显示
    if(k!==0)
        setOpacity(photo_box[k],0);
   }
   var pb_length=photo_box.length;
   var timeInterval=3000;
   var autoChange=setInterval(change,timeInterval);
   function change(){
        if(curIndex<ph_length-1){ 
            curIndex=+1; 
        }else{
          curIndex=0;
       }
        toRight(curIndex);
  }
// 重置定时器
function autoChangeAgain(){ 
    autoChange = setInterval(function(){ 
     if(curIndex < ph_length-1){ 
       curIndex ++;
     }else{ 
       curIndex = 0;
     }
   //调用变换处理函数
      toRight(curIndex); 
   },timeInterval);
   }
 var phWall=document.getElementById("gallery");
      phWall.onmouseover=function(){
          clearInterval(autoChange);
       };
       phWall.onmouseout = function(){ 
        //滑出则重置定时器
            autoChangeAgain();
        }
//给左箭头left添加上一个事
   var left =phWall.getElementsByClassName("icon-left")[0];
   left.onclick=function(){
    toLeft(curIndex);
    // console.log(curIndex)
    
    curIndex = (curIndex > 0) ? (--curIndex) : (ph_length-1);
    
  };

//给右箭头right添加下一个事件
    var right =phWall.getElementsByClassName("icon-right")[0];
    right.onclick = function(){ 
        curIndex = (curIndex < ph_length-1) ? (++curIndex) : 0;
        toRight(curIndex);
        // console.log(curIndex)
      };

  // 当前照片淡出，目标照片淡入

	function fadeIn(elem) {
		setOpacity(elem, 0);
		for ( var i = 0; i <= 20; i++) {
			(function() {
				var pos = i * 5;
				setTimeout(function() {
					setOpacity(elem, pos)
				}, i * 25);
			})(i);
		}
	}
   function fadeOut(elem) {
		for ( var i = 0; i <= 20; i++) {
			(function() {
				var pos = 100 - i * 5;
				setTimeout(function() {
					setOpacity(elem, pos);
				}, i * 25);
			})(i);
		}
	}
   function fade(Cur,Target){
			if(Target==Cur) return;
			fadeOut(photo_box[Cur]);
			fadeIn(photo_box[Target]);
  }
  function clearRight(num){
  	if(num<ph_length-1){
        for(var i=0;i<pb_length;i++){
    	  if (i!==num&&i!==num+1)
    	   setOpacity(photo_box[i],0);
       }
    }else{
    	for(var i=0;i<pb_length;i++){
    	  if (i>0&&i<ph_length-1)
    	   setOpacity(photo_box[i],0);
       }
    }

  }
  function clearLeft(num){
  	if(num>0){
       for(var i=0;i<pb_length;i++){
    	  if (i!==num&&i!==num-1)
    	   setOpacity(photo_box[i],0);

        }
     }else{
     	for(var i=0;i<pb_length;i++){
     	  if (i>0&&i<ph_length-1)
    	   setOpacity(photo_box[i],0);
        }
     }
  }
   function toRight(num){ 
   	clearRight(num);
   	if(num<ph_length-1)
    fade(num,num+1);
    else
    fade(num,0);
    }

   function toLeft(num){ 
   	clearLeft(num);
   	if(num<=0)
   	fade(num,ph_length-1);
    else
    fade(num,num-1);
    }
  
// 当所有照片遍历一遍之后将其z-index再次重置为K
// function init(){
// 	for(var k=0;k<ph_length;k++){
//     photo_box[k].style.zIndex=0;
// }
// console.log("ok");
// }


//    var phWall=document.getElementsByClassName("photo_wall")[0];
//    var images=phWall.getElementsByTagName("img");

//    var oUl = phWall.getElementsByTagName("ul");
//    var aLi = oUl[0].getElementsByTagName("li");
 

   

//   //图片组相对原始左移dist px距离
//   function goLeft(elem,dist){ 
//     if(dist == 600){ //第一次时设置left为0px 或者直接使用内嵌法 style="left:0;"
//       elem.style.left = "0px";
//     }
//     var toLeft; //判断图片移动方向是否为左
//     dist = dist + parseInt(elem.style.left); //图片组相对当前移动距离
//     if(dist<0){  
//       toLeft = false;
//       dist = Math.abs(dist);
//     }else{ 
//       toLeft = true;
//     }  
//     for(var i=0;i<= dist/20;i++){ //这里设定缓慢移动，10阶每阶40px
//       (function(_i){ 
//         var pos = parseInt(elem.style.left); //获取当前left
//         setTimeout(function(){ 
//           pos += (toLeft)? -(_i * 20) : (_i * 20); //根据toLeft值指定图片组位置改变
//           // console.log(pos);
//           elem.style.left = pos + "px";
//         },_i * 20); //每阶间隔50毫秒
//       })(i);
//     }
//   }
