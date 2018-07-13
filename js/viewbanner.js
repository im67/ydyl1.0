function libbanner(img,list){

function movePicture(element,x,y,interval){
        var xpos = element.offsetLeft;
        var ypos = element.offsetRight;
        var dist = 0;
        if(element.movement)
            clearTimeout(element.movement);
        if(xpos==x&&ypos==y){//先判断是否需要移动
            return;
        }
        dist=Math.ceil(Math.abs(x-xpos)/20);//分10次移动完成
        xpos = xpos<x ? xpos+dist : xpos-dist;
        
        dist=Math.ceil(Math.abs(y-ypos)/20);//分10次移动完成
        ypos = ypos<y ? ypos+dist : ypos-dist;
        if(xpos==-4400){
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


    var moveIndex = function(list,num){//移动小圆点
        for(var i=0;i<list.length;i++){
            if(list[i].className=='onfocus'){//清除li的背景样式
                list[i].className='';
            }
        }
        list[num].className='onfocus';
    }

    var timer;
    var index=0;
    var nextMove=function(){//一直向右移动，最后一个之后返回
        index+=1;
        if(index>=list.length){
            index=0;
        }
        moveIndex(list,index);
        var f = img.offsetLeft;
        movePicture(img,f+(-1100),0,20);
    };
    var play=function(){
        timer=window.setInterval(function(){
            nextMove();
        },6000);
    };
          
    play();
    for(var i=0;i<list.length;i++){//鼠标覆盖上哪个小圆圈，图片就移动到哪个小圆圈，并停止
        list[i].index=i;//这里是设置index属性，和index变量没有任何联系
        list[i].onmouseover= function () {
            var clickIndex=parseInt(this.index);
            movePicture(img,-1100*clickIndex,0,20);
            index=clickIndex;
            moveIndex(list,index);
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
