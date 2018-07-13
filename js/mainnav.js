//网页主导航JS并解决ajax前进后退问题
$(document).ready(function(){
        var pathname = window.document.location.href;
        var result = pathname.split('#');
        console.log(result);
        changeContent(result);
	})

       function changeContent(result){
        if(result.length == 1)
            result[1] = "homePage";
        $("#mainArea").load(result[1]+".html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
            console.log("加载成功");
            if(result[1]=="homePage")
                bannerChange();
        }
    })
        $('#'+result[1]).css("backgroundColor","#006FB7");
        $('#'+result[1]+' a div').css("color","#FFF");
        $('#'+result[1]).siblings().css("backgroundColor","#F8F8F8");
        $('#'+result[1]).siblings().children().children().css("color","#000");
      }

	var state = new Object();
	$(document).on('click','#nav li',function(){
		var navId = $(this).attr('id');
		$('#'+navId).css("backgroundColor","#006FB7");
		$('#'+navId+' a div').css("color","#FFF");
        $('#'+navId).siblings().css("backgroundColor","#F8F8F8");
        $('#'+navId).siblings().children().children().css("color","#000");
        		
	});



    $(document).on('click','#viewLibrary',function(){
         clearInterval(timer);
        $("#mainArea").load("viewLibrary.html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
            console.log("观点资讯库加载成功");
            if(state.id!=5){
            state.id = 5;
            history.pushState(state,null,"#viewLibrary");
        }
        var img=document.getElementById('viewbanner');
           var list=$('#viewBannerChange').children();
           libbanner(img,list);
        }
    })
        }); 

    $(document).on('click','#nationLibrary',function(){
         clearInterval(timer);
    	$("#mainArea").load("nationLibrary.html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
            console.log("沿线国家库加载成功");
            if(state.id!=5){
            state.id = 5;
            history.pushState(state,null,"#nationLibrary");
        }
        }
    })
    	});


     $(document).on('click','#literatureDetail',function(){
         clearInterval(timer);
        $("#mainArea").load("literatureDetail.html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
            console.log("文献库加载成功");
            if(state.id!=3){
            state.id = 3;
            history.pushState(state,null,"#literatureDetail");
        }
        }
    })
        });

    $(document).on('click','#homePage',function(){
         clearInterval(timer);
    	$("#mainArea").load("homePage.html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
            console.log("首页加载成功");
            if(state.id!=0){
            state.id = 0;
            history.pushState(state,null,"#homePage");
        }
            bannerChange();
        }
    })
    	});


    $(document).on('click','#practicalDiscovery',function(){
         clearInterval(timer);
    	$("#mainArea").load("practicalDiscovery.html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
           console.log("实践探索库加载成功");
           if(state.id!=2){
            state.id = 2;
            history.pushState(state,null,"#practicalDiscovery");
        }
           var img=document.getElementById('disbanner');
           var list=$('#disBannerChange').children();
           libbanner(img,list);

        }
    })
    	});


    $(document).on('click','#investmentGuide',function(){
         clearInterval(timer);
    	$("#mainArea").load("investmentGuide.html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
           console.log("投资指南库加载成功");
           if(state.id!=4){
            state.id = 4;
            history.pushState(state,null,"#investmentGuide");
        }
        }
    })
    	});

    $(document).on('click','#featureLibrary',function(){
         clearInterval(timer);
    	$("#mainArea").load("featureLibrary.html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
            console.log("特色专题库加载成功");
            if(state.id!=6){
            state.id = 6;
            history.pushState(state,null,"#featureLibrary");
        }
        }
    })
    	});


    $(document).on('click','#silkRoad',function(){
         clearInterval(timer);
    	$("#mainArea").load("silkRoad.html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
           console.log("丝路指数库加载成功");
           if(state.id!=7){
            state.id = 7;
            history.pushState(state,null,"#silkRoad");
        }
           var img=document.getElementById('silbanner');
           var list=$('#silBannerChange').children();
           libbanner(img,list);

        }
    })
    	});

    $(document).on('click','#expertLibrary',function(){
         clearInterval(timer);
    	$("#mainArea").load("expertLibrary.html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
           console.log("专家学者库加载成功");
           if(state.id!=8){
            state.id = 8;
            history.pushState(state,null,"#expertLibrary");
        }
        }
    })
    	});


    $(document).on('click','#evaluationSystem',function(){
         clearInterval(timer);
        $("#mainArea").load("evaluationSystem.html",function(responseTxt,statusTxt){
        if(statusTxt=="success"){
           console.log("评价体系库加载成功");
           if(state.id!=9){
            state.id = 9;
            history.pushState(state,null,"#evaluationSystem");
        }
        }
    })
        });


     $(window).on("popstate",function(){
         var pathname = window.document.location.href;
         var result = pathname.split('#');
         console.log(result);
         changeContent(result);               
            });






