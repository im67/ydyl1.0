
    	var chart1,
            transform,
            position;
    	function loadScript(url, callback){
		var script = document.createElement("script");
		script.type = "text/javascript";
		if (script.readyState){  //IE
				script.onreadystatechange = function(){
						if (script.readyState == "loaded" ||
								script.readyState == "complete"){
								script.onreadystatechange = null;
								callback();
						}
				};
		} else {  //Others
				script.onload = function(){
						callback();
				};
		}
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
}
/*
 * 获取链接的 map 参数
 * map 参数值为地图的路径，所有文件路径参考 https://img.hcharts.cn/mapdata/index.html
 */
function getMapName(name) {
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"),
				r = window.location.search.substr(1).match(reg),
				defaultMap = {
						path: 'custom/world',
						name: 'World, Miller projection, medium resolution',
						chineseName: '世界地图（米勒投影，中分辨率）'
				};
		if(r!==null) {
				var path = unescape(r[2]);
				for(var key in Highcharts.mapsInfo) {
						if(Highcharts.mapsInfo[key][path]) {
								return {
										path: path,
										name: Highcharts.mapsInfo[key][path].name,
										cname: Highcharts.mapsInfo[key][path].chineseName || ''
								};
						}
				}
		}
		return defaultMap;
}
// 地图路径，参考 https://img.hcharts.cn/mapdata/index.html
var map = getMapName('map'),
		url = '../js/mapdata-cn.js';
/*
 * console.log(map)
 */
// 动态加载地图数据文件并生成图表。
loadScript(url, function(){
		// 生成随机数据
		var mapdata = Highcharts.maps[map.path],
				data = [];
		Highcharts.each(mapdata.features, function(md, index) {
				data.push({
						'hc-key': md.properties['hc-key'],
						value: Math.floor((Math.random()*100)+1)  // 生成 1 ~ 100 随机值
				});
		});
		// 初始化图表
		chart1 = Highcharts.Map({
			 chart: {
        renderTo: 'worldMap',
						events: {
								load: function () {
										this.mapZoom(0.35,6500,-7500);
								}
						}
    },
				title : {
					enabled:false,
						text : ''
				},
				subtitle : {
					enabled:false,
						text : ''
				},
				mapNavigation: {
						enabled: true,
						enableButtons:false
				},
				colorAxis: {
						min: 0,
						stops: [
								[0, '#EFEFFF'],
								[0.5, Highcharts.getOptions().colors[0]],
								[1, Highcharts.Color(Highcharts.getOptions().colors[0]).brighten(-0.5).get()]
						]
				},

				legend:{
					enabled:false
				},

				tooltip: {
                enabled:false
    },
    plotOptions: {
            series: {
                point: {
                    events: {
                        click: function () {
                            axios.post('http://localhost:3000/posts', {
    								message:this.properties['ename']
  								})
  									.then(function (response) {
   									 console.log(response);
  								})
  									.catch(function (error) {
  									console.log(error);
 							    });

                        }
                    }
                }
            },
            marker: {
										radius: 5
								}
        },

				series :
					[{
						cursor:'pointer',
						data : data,
						mapData: mapdata,
						joinBy: 'hc-key',
						name: '点击查看详情',

						states: {
								hover: {
										color: '#a4edba'
								}
						},
						dataLabels: {
								enabled: true,
								format: '{point.name}'
								
						}
				},
				{
						type: 'mappoint',
						name: 'Cities',
						color: 'blue',
						radius:3,
						data: [{
								name: '万象',
								lat: 18.173,
								lon: 102.5914,
								dataLabels: {
										align: 'left',
										x: 5,
										verticalAlign: 'middle',
										color:'#9F4D95'
								}
						},
						{
								name: '新德里',
								lat: 28.615013,
								lon: 77.209327,
								dataLabels: {
										align: 'left',
										x: 5,
										verticalAlign: 'middle',
										color:'#9F4D95'
								}
						},
						{
								name: '海口',
								lat: 20.0403154771,
								lon: 110.31432196,
								dataLabels: {
										align: 'left',
										x: 5,
										verticalAlign: 'middle',
										color:'#9F4D95'
								}
						},
						{
								name: '上海',
								lat: 31.230370,
								lon: 121.4737,
					
								dataLabels: {
										align: 'left',
										x: 5,
										verticalAlign: 'middle',
										color:'#9F4D95'
								}
							}]
						},
						{
						type: 'mapline',
						color: 'yellow',
						lineWidth: 3,
						data: [{
								name: 'mapline',
								path:'M 7809 -7430 L 7478 -7078 M 7478 -7078 L 7249 -7020 M7249 -7020 L 6495 -7346'
						}
						]
					}]
				})
            });
