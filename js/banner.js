function bannerChange(){
function movePicture(element,x,y,interval){
		var xpos = element.offsetLeft;
		var ypos = element.offsetRight;
		var dist = 0;
        var num = 0;
		if(element.movement)
			clearTimeout(element.movement);
		if(xpos==x&&ypos==y){//先判断是否需要移动
            return;
        }
        dist=Math.ceil(Math.abs(x-xpos)/20);//分10次移动完成
        xpos = xpos<x ? xpos+dist : xpos-dist;
        
        dist=Math.ceil(Math.abs(y-ypos)/20);//分10次移动完成
        ypos = ypos<y ? ypos+dist : ypos-dist;
        if(xpos==-5500){
        element.style.left='0px';
        element.style.top='0px';
    }else{
        element.style.left=xpos+'px';
        element.style.top=ypos+'px';    
        element.movement=setTimeout(function(){
            movePicture(element,x,y,interval);
        },interval)
    }
	}

    function show(num,intro){
        $('#intro').html(intro[num]);
    }


	function moveIndex1(list,num){//移动小圆点
        console.log('move');
        for(var i=0;i<list.length;i++){
            if(list[i].className=='onfocus'){//清除li的背景样式
                list[i].className='';
            }
        }
        list[num].className='onfocus';
        show(num,introduce);
    }

    var introduce = ["“一带一路”国际科技创新合作大会","一带一路迎来新的机遇","巩固发展充实提高","新道路新视野","关注世界最伟大的工程","一带一路”国际科技创新合作大会"];
    var img=document.getElementById('banner');
    var list=$('#bannerChange1').children();
    var index=0; 
    var nowindex=0;
    var introindex = 0;
    var hf;
    var f ;
    show(index,introduce);
    var nextMove=function(){//一直向右移动，最后一个之后返回
        index+=1;
        if(index>=list.length){
            index=0;
        }
        moveIndex1(list,index);
        f = img.offsetLeft;
        movePicture(img,f+(-1100),0,20);
    };
    var play=function(){
        console.log("play");
        timer=window.setInterval(function(){
             nextMove();
        },6000);
    };
          
    play();
    for(var i=0;i<list.length;i++){//鼠标覆盖上哪个小圆圈，图片就移动到哪个小圆圈，并停止
        list[i].index=i;//这里是设置index属性，和index变量没有任何联系
        list[i].onmouseover= function (){
            var clickIndex=parseInt(this.index);
            movePicture(img,-1100*clickIndex,0,20);
            index=clickIndex;
            moveIndex1(list,index);
            clearInterval(timer);
        };
        list[i].onmouseout= function () {//移开后继续轮播
            play();
      }; 
    }

    window.onblur = function(){
         clearInterval(timer);
     }

    window.onfocus = function(){
         play();
     }
}
