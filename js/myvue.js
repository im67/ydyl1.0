

    $(document).ready(function(){
        $('.h1_zx').addClass("btnSelect"); 
        $('.h1_xm').addClass("btnSelect");
        $('.h1_gj').addClass("btnSelect");
        $("#h1template").show();
        $("#h2template").hide();
        $('.xmal').show();
        $('.zqzx').hide();
        $('.silkgj').show();
        $('.silkzg').hide();
    })

   $('.h1_gn').mouseover(function(){
        $('.h1_gn').addClass("btnSelect");
        $('.h1_zx').removeClass("btnSelect");
        $("#h2template").show();
        $("#h1template").hide();
    });

    $('.h1_zx').mouseover(function(){
       $('.h1_zx').addClass("btnSelect");
       $('.h1_gn').removeClass("btnSelect");
       $("#h1template").show();
       $("#h2template").hide();
       });

    $('.h1_xm').mouseover(function(){
       $('.h1_xm').addClass("btnSelect");
       $('.h1_zq').removeClass("btnSelect");
       $(".zqzx").hide();
       $(".xmal").show();
       });

    $('.h1_zq').mouseover(function(){
       $('.h1_zq').addClass("btnSelect");
       $('.h1_xm').removeClass("btnSelect");
       $(".xmal").hide();
       $(".zqzx").show();
       });


    $('.h1_gj').mouseover(function(){
       $('.h1_gj').addClass("btnSelect");
       $('.h1_zg').removeClass("btnSelect");
       $(".silkzg").hide();
       $(".silkgj").show();
       });


    $('.h1_zg').mouseover(function(){
       $('.h1_zg').addClass("btnSelect");
       $('.h1_gj').removeClass("btnSelect");
       $(".silkgj").hide();
       $(".silkzg").show();
       });

        var lastnews = {
        template:'#h1',
        props :['url','title','time']
    }

        var middlephotonews = {
            template:'#h2',
            props:['imgurl','imgsrc','imgtitle']
        }


        var middlenews = {
            template:'#h3',
            props:['url','title']
        }


        var silkroad = {
            template:'#h4',
            props:['url','imgurl','title','introduce']
        }


    var h1 = new Vue({
        el:'#h1template',
        data:{
            list:[{
                url:'#',
                title:'·【以色列】红线项目三条主隧洞贯通 获赞“中国朋友了不起”',
                time:'2018-06-26'
            },
            {   
                url:'#',
                title:"·【阿根廷】中企承建贝尔格拉诺货运铁路项目顺利推进",
                time:'2018-06-26' 
            },
            {   
                url:'#',
                title:"·【沙特】中国铁建再获沙特麦加轻轨运营合同",
                time:'2018-06-26' 
            },
            {   
                url:'#',
                title:"·【乌兹别克斯坦】中企承建乌兹别克斯坦沙尔贡煤矿开工",
                time:'2018-06-26' 
            },
            {   
                url:'#',
                title:"·【拉美】受制资金和基础设施 “一带一路”成中拉合作新“风口",
                time:'2018-06-26' 
            },{   
                url:'#',
                title:"·【巴拿马】建交一周年：签署20多项合作协议",
                time:'2018-06-26' 
            },
            {   
                url:'#',
                title:"·【法国】参议院：法国应在“一带一路”建设中发挥积极作用",
                time:'2018-06-26' 
            }]
        
        }
    })


    var h2 = new Vue({
        el:'#h2template',
        data:{
            list:[{
                url:'#',
                title:"·【法国】参议院：法国应在“一带一路”建设中发挥积极作用",
                time:'2018-06-26'
            },
            {   
                url:'#',
                title:"·【阿根廷】中企承建贝尔格拉诺货运铁路项目顺利推进",
                time:'2018-06-26' 
            },
            {   
                url:'#',
                title:"·【沙特】中国铁建再获沙特麦加轻轨运营合同",
                time:'2018-06-26' 
            },
            {   
                url:'#',
                title:"·【乌兹别克斯坦】中企承建乌兹别克斯坦沙尔贡煤矿开工",
                time:'2018-06-26' 
            },
            {   
                url:'#',
                title:"·【拉美】受制资金和基础设施 “一带一路”成中拉合作新“风口",
                time:'2018-06-26' 
            },{   
                url:'#',
                title:"·【巴拿马】建交一周年：签署20多项合作协议",
                time:'2018-06-26' 
            },
            {   
                url:'#',
                title:'·【以色列】红线项目三条主隧洞贯通 获赞“中国朋友了不起”',
                time:'2018-06-26' 
            }]
        }
    })


    
    var h3 = new Vue({
        el:'#middle_left',
        data:{
            imgurl:'#',
            imgsrc:'../images/news.jpg',
            imgtitle:'“一带一路”国际合作重大工程项目盘点'
        }
    })

    var h5 = new Vue({
        el:'#middle_right',
        data:{
            imgurl:'#',
            imgsrc:'../images/news2.jpg',
            imgtitle:'境外经贸合作区：“一带一路”双赢平台'
        }
    })


var h4 = new Vue({
        el:'#middle_leftnews',
        data:{
            list:[{
                url:'#',
                title:'·以色列红线项目三条主隧洞贯通 获赞“中国...'
            },
            {
                url:'#',
                title:'·中国铁建再获沙特麦加轻轨运营合同'
            },
            {
                url:'#',
                title:'·中企承建外高加索地区最长铁路隧道实现贯通'
            }
            ,{
                url:'#',
                title:'·中企在越南承建的首座斜拉桥通车 获赞“崭...'
            },
            {
                url:'#',
                title:'·中企承建巴基斯坦拉合尔橙线轨道项目试运行'
            },
            {
                url:'#',
                title:'·孟加拉国帕德玛大桥项目签订贷款协议 预算...'
            }]
        }
    })


    var h6 = new Vue({
        el:'#middle_rightnews',
        data:{
            list:[{
                url:'#',
                title:'·中阿产能合作示范园将获全金融牌照'
            },
            {
                url:'#',
                title:'·中国企业签约建设克罗地亚跨海大桥项目'
            },
            {
                url:'#',
                title:'·中企承建巴基斯坦水电站项目并网发电'
            }
            ,{
                url:'#',
                title:'·中企将在乌克兰中部建设大型太阳能电站'
            },
            {
                url:'#',
                title:'·中埃合建光缆厂投产 助推埃及加速进入数字...'
            },
            {
                url:'#',
                title:'·比雷埃夫斯港首迎2万标准箱级集装箱船'
            }]
        }
    })


    var h7 = new Vue({
        el:'#middle_leftnews_zq',
        data:{
            list:[{
                url:'#',
                title:'·中阿产能合作示范园将获全金融牌照'
            },
            {
                url:'#',
                title:'·中国企业签约建设克罗地亚跨海大桥项目'
            },
            {
                url:'#',
                title:'·中企承建巴基斯坦水电站项目并网发电'
            }
            ,{
                url:'#',
                title:'·中企将在乌克兰中部建设大型太阳能电站'
            },
            {
                url:'#',
                title:'·中埃合建光缆厂投产 助推埃及加速进入数字...'
            },
            {
                url:'#',
                title:'·比雷埃夫斯港首迎2万标准箱级集装箱船'
            }]
        }
    })


    var h8 = new Vue({
        el:'#middle_rightnews_zq',
        data:{
            list:[{
                url:'#',
                title:'·以色列红线项目三条主隧洞贯通 获赞“中国...'
            },
            {
                url:'#',
                title:'·中国铁建再获沙特麦加轻轨运营合同'
            },
            {
                url:'#',
                title:'·中企承建外高加索地区最长铁路隧道实现贯通'
            }
            ,{
                url:'#',
                title:'·中企在越南承建的首座斜拉桥通车 获赞“崭...'
            },
            {
                url:'#',
                title:'·中企承建巴基斯坦拉合尔橙线轨道项目试运行'
            },
            {
                url:'#',
                title:'·孟加拉国帕德玛大桥项目签订贷款协议 预算...'
            }]
        }
    })


    var h9 = new Vue({
        el:'#middle_right_zq',
        data:{
            imgurl:'#',
            imgsrc:'../images/news.jpg',
            imgtitle:'“一带一路”国际合作重大工程项目盘点'
        }
    })

    var h10 = new Vue({
        el:'#middle_left_zq',
        data:{
            imgurl:'#',
            imgsrc:'../images/news2.jpg',
            imgtitle:'境外经贸合作区：“一带一路”双赢平台'
        }
    })


    var h11 = new Vue({
        el:'#imgnews_gj',
        data:{
            url:'#',
            imgurl: '../images/gj.jpg',
            title:'第72届联大主席：“一带一路”助推联合国可持续发展议程',
            introduce:'“中国经济增长带来的益处并不局限于其国界。作为一个奉行多边主义的国家，中国正在通过“一带一路”倡议分享全球经济发展和科技进步带来的成果...'
        }
    })

    var h12 = new Vue({
        el:'#imgnews_zg',
        data:{
            url:'#',
            imgurl: '../images/zg.jpg',
            title:'王文：“一带一路”建设与上合组织存在天然“亲缘”关系',
            introduce:'6月9日-10日，上海合作组织成员国元首理事会第十八次会议将在中国青岛举行。青岛峰会，是中共十九大后上合...'
        }
    })


    var h13 = new Vue({
        el:'#slgj_news',
        data:{
            list:[{
                url:'#',
                title:'土耳其外长恰武什奥卢： 我们完全支持“一带一路”',
                time:'2018-06-26'
            },
            {   
                url:'#',
                title:"多米尼加官员：多中两国在“一带一路”国际合作中大有可为",
                time:'2018-06-26' 
            },
            {   
                url:'#',
                title:"希腊议长：希中合作潜力巨大 支持“一带一路”倡议 ",
                time:'2018-06-26' 
            }]
        
        }
    })

    var h14 = new Vue({
        el:'#slzg_news',
        data:{
            list:[{
                url:'#',
                title:'土耳其外长恰武什奥卢： 我们完全支持“一带一路”',
                time:'2018-06-26'
            },
            {   
                url:'#',
                title:"多米尼加官员：多中两国在“一带一路”国际合作中大有可为",
                time:'2018-06-26' 
            },
            {   
                url:'#',
                title:"希腊议长：希中合作潜力巨大 支持“一带一路”倡议 ",
                time:'2018-06-26' 
            }]
        
        }
    })

    var h15 = new Vue({
        el:'#hotview',
        data:{
            list:[{
                url:'#',
                title:'·“一带一路”服务热线'
            },
            {
                url:'#',
                title:'·丝路新闻摘要：每天1分钟 丝路全知道'
            }]
        }
    })

    var h16 = new Vue({
        el:'#hotresearch',
        data:{
            list:[{
                url:'#',
                title:'·中巴经济走廊最大交通基础设施项目...'
            },
            {
                url:'#',
                title:'·印媒：中国修建的汉班托塔港不是无…'
            },
            {
                url:'#',
                title:'·巴基斯坦4月份发电量增48% 新增电...'
            },
            {
                url:'#',
                title:'·中企承建外高加索地区最长铁路隧道…'
            },
            {
                url:'#',
                title:'·好事不愿说出事不敢说 中企“走出去...'
            }]
        }
    })

    
    var h17 = new Vue({
        el:'#downloadRank',
        data:{
            list:[{
                url:'#',
                title:'·中巴经济走廊最大交通基础设施项目...'
            },
            {
                url:'#',
                title:'·印媒：中国修建的汉班托塔港不是无…'
            },
            {
                url:'#',
                title:'·巴基斯坦4月份发电量增48% 新增电...'
            },
            {
                url:'#',
                title:'·中企承建外高加索地区最长铁路隧道…'
            },
            {
                url:'#',
                title:'·好事不愿说出事不敢说 中企“走出去...'
            }]
        }
    })





    var zx = new Vue({
            el:'#h1template',
            components:{
                'lastnews':lastnews
            }
        });

    var gn = new Vue({
         el:'#h2template',
            components:{
                'gnnews':lastnews
            }
    });

    var xm1 = new Vue({
        el:'#middle_left',
            components:{
                'middlephotonews':middlephotonews
        }
    });

    var xm2 = new Vue({
        el:'#middle_right',
            components:{
                'middlephotonews':middlephotonews
        }
    });


    var mn1 = new Vue({
        el:'#middle_leftnews',
        components:{
            'middlenews':middlenews
        }
    });

    var mn2 = new Vue({
        el:'#middle_rightnews',
        components:{
            'middlenews':middlenews
        }
    });


    var zq1 = new Vue({
        el:'#middle_rightnews_zq',
        components:{
            'middlenews':middlenews
        }
    })


    var zq2 = new Vue({
        el:'#middle_leftnews_zq',
        components:{
            'middlenews':middlenews
        }
    });

    var zq3 = new Vue({
        el:'#middle_left_zq',
            components:{
                'middlephotonews':middlephotonews
        }
    });

    var zq4 = new Vue({
        el:'#middle_right_zq',
            components:{
                'middlephotonews':middlephotonews
        }
    });


    var sr = new Vue({
        el:'#imgnews_gj',
            components:{
                'silkroad':silkroad
            }
    })

    var src = new Vue({
        el:'#imgnews_zg',
            components:{
                'silkroad':silkroad
        }
    })

    var srn = new Vue({
        el:'#slgj_news',
        components:{
            'gjnews':lastnews
        }
    })

    var srn = new Vue({
        el:'#slzg_news',
        components:{
            'gjnews':lastnews
        }
    })


    var vb = {
        template:'#v1',
        props:['url','viewimgsrc','title','introduce']
    }

    var v1 = new Vue({
        el:'#viewbanner',
        data:{
            list:[{
                url:'#',
                viewimgsrc:'../images/v1.jpg',
                title:'中刚合作项目巡礼',
                introduce:'刚果（布）是中非产能合作先行先试示范国家之一，中刚近年来通过密切合作实施了中刚友好医院、体育中心、沿河大道斜拉桥等诸多项目，其中既有政府间合作，也有中方提供贷款和刚方融资等合作形式。此外两国还在金融领域深化合作，我国首次与刚方通过合资组建的中刚非洲银行被当地人亲切地称为“刚果人自己的商业银行”。 '
            },
            {
                url:'#',
                viewimgsrc:'../images/v2.jpg',
                title:'蒙内铁路累计发送旅客近138万人次 创造近5万个岗位',
                introduce:'截至2018年6月10日，蒙内铁路累计发送旅客近138万人次，平均上座率超过95%，为肯尼亚创造近5万个工作岗位，受到肯尼亚政府和民间高度认可。'
            },
            {
                url:'#',
                viewimgsrc:'../images/v3.jpg',
                title:'探访中老友谊学校',
                introduce:'中老友谊学校始建于2006年，采用中老双语教学，目前开设了幼儿园、小学部和中学部。'
            },{
                url:'#',
                viewimgsrc:'../images/v4.jpg',
                title:'中国援斐斯丁森桥改善首都苏瓦交通状况',
                introduce:'中国援斐斯丁森桥位于斐济首都苏瓦市中心，自今年初建成通车以来，有效缓解了苏瓦市区的交通堵塞状况，极大便利了市民出行，受到民众欢迎。 '
            },
            {
                url:'#',
                viewimgsrc:'../images/v1.jpg',
                title:'中刚合作项目巡礼',
                introduce:'刚果（布）是中非产能合作先行先试示范国家之一，中刚近年来通过密切合作实施了中刚友好医院、体育中心、沿河大道斜拉桥等诸多项目，其中既有政府间合作，也有中方提供贷款和刚方融资等合作形式。此外两国还在金融领域深化合作，我国首次与刚方通过合资组建的中刚非洲银行被当地人亲切地称为“刚果人自己的商业银行”。 '
            }]
        }
    })

    var vimg = new Vue({
        el:'#viewbanner',
        components:{
            'viewb':vb
        }
    })




