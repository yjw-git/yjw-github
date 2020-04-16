function inforvideo(id){//播放当前答案视频
	var videoContext = document.getElementById(id);
	//console.log(videoContext,'videoContext',id)
	videoContext.play();
	if(videoContext!=null){
		if (window.WeixinJSBridge) {
		    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
		        videoContext.play();
		    }, false);
		}else{
		    document.addEventListener("WeixinJSBridgeReady", function () {
		        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
		            videoContext.play();
		        });
		    }, false);
		}
	}
	console.log(id,'视频id');
}
/**
 * 产生随机整数，包含下限值，但不包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower)) + lower;
}
var userIndex=0;
var userface=[{	
	"username":"易烊千玺",
	"imgurl":"./images/hb_x0.png",
	"xzimgurl":"./images/hb_xz_0.png",
	"screenimgurl":"./images/share_mx0.png",
	"imgstatus":false
},{
	"username":"蔡国庆",	
	"imgurl":"./images/hb_x1.png",
	"xzimgurl":"./images/hb_xz_1.png",
	"screenimgurl":"./images/share_mx1.png",
	"imgstatus":false
},{
	"username":"杨洋",
	"imgurl":"./images/hb_x2.png",
	"xzimgurl":"./images/hb_xz_2.png",
	"screenimgurl":"./images/share_mx2.png",
	"imgstatus":false
},{		
	"username":"王源",
	"imgurl":"./images/hb_x3.png",
	"xzimgurl":"./images/hb_xz_3.png",
	"screenimgurl":"./images/share_mx3.png",
	"imgstatus":false
},{	
	"username":"关晓彤",
	"imgurl":"./images/hb_x4.png",
	"xzimgurl":"./images/hb_xz_4.png",
	"screenimgurl":"./images/share_mx4.png",
	"imgstatus":false
},{
	"username":"王嘉",
	"imgurl":"./images/hb_x5.png",
	"xzimgurl":"./images/hb_xz_5.png",
	"screenimgurl":"./images/share_mx5.png",
	"imgstatus":false
}];
	var app=new Vue({
	    el:"#app",
	    data:{
	    	questionData:[{
				"qid":"01",
				"vtit":"一",
				"title":"有些“艾”需要拒绝",
				"videimg":"video/v-1.jpg",
				"videourl":"video/01.mp4",
				"summary":"或许你也知道艾滋病毒有三种感染途径，即母婴、血液和性传播。那么，以下哪些行为可能感染艾滋病呢？",
				"other":[],
				"options":[{
					"label":"拥抱亲吻",
					"value":"A",
					"status":""
				},{
					"label":"蚊虫叮咬",
					"value":"B",
					"status":""
				},{
					"label":"吃了被污染的黄焖鸡米饭",
					"value":"C",
					"status":""
				},{
					"label":"输血或者共用注射器针头",
					"value":"D",
					"status":""
				}],
				"answer":"D",
				"detailstatus":false,
				"introduce":"<p>艾滋病毒主要存在于HIV感染者的血液、精液、阴道分泌物、伤口渗出液及乳汁中，只有接触了它们才有感染的风险。而且，离开人体的艾滋病毒非常脆弱，像蚊虫叮咬、拥抱亲吻、黄焖鸡米饭这些事，要么没有体液接触，要么就是病毒无法存活，咱不必担心。但要注意喽，不能共用针头和来路不明的血制品等，并且务必保证安全性行为。</p>"
			},{
				"qid":"10",
				"vtit":"十",
				"title":"关“艾”有我 国家在行动",
				"videimg":"video/v-10.jpg",
				"videourl":"video/10.mp4",
				"summary":"联合国艾滋病规划署确定的2020年“3个90%”的目标不包括：",
				"other":[],
				"options":[{
					"label":"艾滋病自愿咨询检测点全国覆盖率",
					"value":"A",
					"status":""
				},{
					"label":"诊断发现并知晓自身感染状况的感染者和病人比例",
					"value":"B",
					"status":""
				},{
					"label":"符合治疗条件的感染者和病人接受抗病毒治疗比例",
					"value":"C",
					"status":""
				},{
					"label":"接受抗病毒治疗的感染者和病人治疗成功率",
					"value":"D",
					"status":""
				}],
				"answer":"A",
				"detailstatus":false,
				"introduce":"<p>划重点了啊！《中国遏制与防治艾滋病“十三五”行动计划》在工作目标中提出了“经诊断发现并知晓自身感染状况的感染者和病人比例”“符合治疗条件的感染者和病人接受抗病毒治疗比例”“接受抗病毒治疗的感染者和病人治疗成功率”这三项具体指标达到90%以上，与联合国艾滋病规划署确定的2020年“3个90%”的目标一致。</p>"
			}],
			userface:userface,
			userIndex:0,//第几个明星
	    	viewIndex:0,
	    	screenstatus:false,//截屏状态
	    	score:0,//得分
	    	reportnum:1,//百分比
	    	flag:'防艾小白',//称号
	    	tips:'很遗憾！',
	    	sharestatus:false,//分享图片状态
	    	total:0//答题完成
	    },
	    methods:{
	    	answerHandle:function(index,idx){//选择答案
	    		var questionData=this.questionData;
	    		/*
				*index为问题索引
				*idx为答案索引
	    		*/
	    		console.log(index,idx);
	    		/*正确答案*/
	    		var answer=questionData[index].answer;
	    		/*点击时选择的答案*/
	    		var options=questionData[index].options[idx].value;
	    		console.log(options);
	    		console.log(answer);
	    		/*暂停问题项视频*/
	    		var videoid='formvideo'+index;
	    		this.pausevideo(videoid);
	    		this.pausevideo("audio_play");
	    		if(options==answer){
	    			console.log("答对了");
	    			questionData[index].options[idx].status="status_success";
	    			this.score=this.score+1;
	    			console.log(this.score,'得分')
	    		}else{
	    			console.log("答错了");
	    			questionData[index].options[idx].status="status_error";
	    		}
	    		setTimeout(()=>{
	    			/*显示知识普及*/
	    			questionData[index].detailstatus=true;
	    		},500) 		
	    	},
	    	viewnext:function(index){//下一题
	    		/*4为正式答题页*/
	    		var currindex=index+4;
	    		console.log(currindex,'currindex')
	    		mySwiper.slideTo(currindex);
	    		this.viewIndex=index;
	    		console.log(this.viewIndex,'viewIndex');
	    		setTimeout(()=>{
	    			/*播放下一题问题项视频*/	
		    		var nextIndex=index+1;
		    		var videoid='formvideo'+nextIndex;//'formvideo1'//
		    		this.inforvideo(videoid);		    		
	    		},300);
	    		/*当答题完成后自动截屏*/
	    		if(this.viewIndex==9){
	    			/*播放结束背景音乐*/
			    	var autoplayVideoend=document.getElementById("audio_end");
        			autoplayVideoend.play();        			
	    			/*setTimeout(()=>{
	    				document.getElementById('reportscreen').style.display="none"; 				
		    			this.toimg();				
	    			},2000);*/
	    			setTimeout(()=>{
	    				/*隐藏答题完成界面*/
	    				document.getElementById('reportscreen').style.display="none";
	    				/*显示选择明星*/	    				
		    			document.getElementById('mystar').style.display="block";
		    			/*显示操作按钮*/
		    			document.getElementById('last_btn2').style.display="block";	
	    			},2500);
	    		}  		
	    	},
	    	weixinvideo:function(i){
	    		var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
				var videoContext = document.getElementById('formvideo'+i);
				console.log(videoContext,'videoContext')
				videoContext.addEventListener('ended', () => {
					if (!isiOS) {
					    videoContext.play();
					    setTimeout(() => {
					        videoContext.pause();
					    }, 100)
					}
					console.log('第',i+1,'个视频播放完成')
				})
	    	},
	    	inforvideo:function(id){
	    		var videoContext = document.getElementById(id);
	    		console.log(videoContext,'videoContext',id)
	    		if(videoContext!=null){
		    		videoContext.play();
		    		if (window.WeixinJSBridge) {
		    			/*真实手机*/
					    WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
					        videoContext.play();
					    }, false);
					} else {
						/*手机模拟器*/
					    document.addEventListener("WeixinJSBridgeReady", function () {
					        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
					            videoContext.play();
					        });
					    }, false);
					}
				}
	    	},
	    	pausevideo:function(id){//暂停所有视频
	    		var video = document.getElementById(id);
	    		console.log(video,'暂停-video',id);
	    		video.pause();
	    	},
	    	toHome:function(){//开始答题
	    		/*跳转到第4页*/
			    mySwiper.slideTo(3);
			    /*暂停开场白*/
			    this.pausevideo('catchword_video');
			    /*播放第一个问题视频*/
			    this.inforvideo('formvideo0');			    
			    //到最后一个后开始截屏
			    /*setTimeout(()=>{	    				
	    			document.getElementById('reportscreen').style.display="none";	
	    			setTimeout(()=>{
	    				this.toimg();
	    			},1500);
    			},2500);*/

    			
			},
			starHandle:function(ii){								
				for(var i=0;i<this.userface.length;i++){
					if(i==ii){
						/*更改当前明星状态*/
						this.userface[i].imgstatus=!this.userface[i].imgstatus;
						this.userIndex=i;/*选中第几个明星*/
						/*给微信分享参数重新赋值*/
						config.title='为艾发声 关艾有我';
						config.desc=this.userface[i].username+'喊你来挑战';
						config.imgUrl="http://h5.zhongguowangshi.com/h5/m2/faz005/images/mx-"+i+".jpg";
					}else{
						/*去掉其它明星选择状态*/
						this.userface[i].imgstatus=false;
					}
					//console.log(ii,'选择明星',i);
				}
				console.log(this.userface[this.userIndex].username,'选中的明星',this.userIndex);
			},
			toscreen:function(){
				/*隐藏生成海报按钮*/
                document.getElementById('last_btn2').style.display="none";
				//开始截屏
			    setTimeout(()=>{	    				
	    			document.getElementById('reportscreen').style.display="none";
	    			document.getElementById('mystar').style.display="none";	
	    			setTimeout(()=>{
	    				//开始截屏
	    				this.toimg();
	    			},1500);
    			},1500);
			},
			userreport:function(){//百分比
				/*this.reportnum=Math.floor((Math.random()*99)+1);*/
				if(this.score>0 && this.score<3){
					console.log('答对2道题');
					this.reportnum=random(1,30);
					this.tips="恭喜您！";
					this.flag="防艾小白";
					console.log(this.reportnum+'%','--',this.flag);
				}else if(this.score>2 && this.score<5){
					console.log('答对3~4道题');
					this.reportnum=random(31,50);
					this.flag="防艾之星";
					this.tips="好厉害！";
					console.log(this.reportnum+'%','--',this.flag);

				}else if(this.score>4 && this.score<7){
					console.log('答对5~6道题');
					this.reportnum=random(51,70);
					this.flag="防艾能手";
					this.tips="好厉害！";
					console.log(this.reportnum+'%','--',this.flag);

				}else if(this.score>6 && this.score<9){
					console.log('答对7~8道题');
					this.reportnum=random(71,85);
					this.flag="防艾卫士";
					this.tips="好厉害！";
					console.log(this.reportnum+'%','--',this.flag);

				}else if(this.score>8 && this.score<11){
					console.log('答对9~10道题');
					this.reportnum=random(86,99);
					this.flag="防艾大使";
					this.tips="好厉害！";
					console.log(this.reportnum+'%','--',this.flag);

				}else{
					console.log('全错的');
					this.reportnum=random(0,2);
					this.flag="防艾小白";
					this.tips="好厉害！";
					console.log(this.reportnum+'%','--',this.flag);
				}
			},
			restartHandle:function(){
				mySwiper.slideTo(3);
				this.viewIndex=0;
		    	this.score=0;//得分
		    	this.reportnum=1,//百分比
		    	this.flag='防艾小白';//称号
		    	this.tips='很遗憾！';
		    	/*重置所有已选状态*/
		    	var questionData=this.questionData;
		    	var qlen=questionData.length;
		    	for(var i=0;i<qlen;i++){
		    		this.questionData[i].detailstatus=false;
		    		var klen=this.questionData[i].options.length;
		    		for(var k=0;k<klen;k++){
		    			this.questionData[i].options[k].status="";
		    		}
		    	}
		    	console.log('this.restartHandle');
		    	/*停止背景音乐*/
		    	var autoplayVideoend=document.getElementById("audio_end");
    			autoplayVideoend.pause();
		    	setTimeout(() => {
		    		/*播放第一个视频*/
		    		this.inforvideo('formvideo0');
		    	},500);		    	
			},
			toimg:function(){				
				var rigdiv=document.getElementById('page_report_inner');
				var rigtopval=rigdiv.offsetTop+rigdiv.offsetHeight;
				this.screenstatus=true;
			    var cntElem = document.getElementById("mobile_screen");
			    var shareContent = cntElem;//需要截图的包裹的（原生的）DOM 对象
	            var width = document.body.clientWidth; //宽度
	            var height = document.body.clientHeight; //高度
	            var canvas = document.createElement("canvas"); //创建一个canvas节点
	            var scale = 2; //定义任意放大倍数 支持小数
	            canvas.width = width * scale; //定义canvas 宽度 * 缩放
	            canvas.height = height * scale; //定义canvas高度 *缩放
	            canvas.getContext("2d").scale(scale, scale); //获取context,设置scale
	            html2canvas(cntElem, {
	            	scale: scale,
	            	canvas: canvas,
	            	//logging: true,
	            	background: "#fff",
	            	onrendered: function(canvas) {
	            		var context = canvas.getContext('2d');
	                    context.mozImageSmoothingEnabled = false;
	                    context.webkitImageSmoothingEnabled = false;
	                    context.msImageSmoothingEnabled = false;
	                    context.imageSmoothingEnabled = false;
	                    var img = Canvas2Image.saveAsPNG(canvas, canvas.width, canvas.height);
	                    //document.body.appendChild(img);
	                    document.getElementById("myshare").style.zIndex="15";
	                    /*在myshare中追加IMG*/
	                    document.getElementById('myshare_pic').appendChild(img);
	                    $(img).css({
	                        "width":"100%",
	                        "height": "100%"
	                    });
	                    //document.getElementById('last_btn').style.display="block";
                    	setTimeout(()=>{                    		
                    		/*让图片缩小至0.7*/
                    		document.getElementById('mobile_screen').style.display="none";
                    		document.getElementById('myshare_pic').className="zoomScreen";
                    		/*显示分享按纽*/
                    		document.getElementById('last_btn').style.display="block";
                    		document.getElementById('last_btn').className="effect_btn";
                    	},1000);                    

	            	},
	            	width: document.body.clientWidth,
        			height: document.body.clientHeight,
        			useCORS: true
	            });
			}
	    },
	    mounted(){
	    	//this.weixinvideo(0);
	    	this.userreport();
	    },
	    watch:{
	    	userIndex:function(newVal,oldVal){
	    		console.log('旧的：',oldVal);
	    		console.log('新的：',newVal);	
	    		userIndex=newVal;
	    		console.log(userIndex,'外部userIndex');		
	    	}
	    }
	})


/*window.h5name = 'faz005';
var config = {
    title: '为艾发声 关艾有我',
    desc: userface[app.userIndex].username+'喊你来挑战',
    link: (window.location.href.split('?')[0].split('#')[0]),
    link: 'https://h5.zhongguowangshi.com/h5/m2/faz005/index.html',
    imgUrl: "http://h5.zhongguowangshi.com/h5/m2/faz005/images/mx-"+app.userIndex+".jpg",
    error: function () {

    },
    success() {
    }
};
function wxHandlercallback(res, title, desc) {
    arguments.callee.res = arguments.callee.res || res;
    wx.config({
        debug: false,
        appId: arguments.callee.res.appId,
        timestamp: arguments.callee.res.timestamp,
        nonceStr: arguments.callee.res.nonceStr,
        signature: arguments.callee.res.signature,
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareQZone",
            "onMenuShareWeibo"
        ]
    });
    wx.ready(function () {
        wx.onMenuShareAppMessage(config);
        wx.onMenuShareTimeline(config);      
    });
}*/