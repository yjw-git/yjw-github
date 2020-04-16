var arr = [
		'images/bg-ico2.png',
		'images/fx.png',
        "images/wsjyl2020-01.jpg",
        "images/wsjyl2020-xhbg.jpg",
        "images/wsjyl-fx.jpg",
        "images/wsjyl-jz.jpg",
        "images/flower01.png",
        "images/flower02.png",
        "images/flower03.png",
        "images/flower04.png",
        "images/jyl2020-n01.png",
        "images/jyl2020-n02.png",
        "images/jyl2020-n03.png",
        "images/jyl2020-n04.png",
        "images/jyl2020-n05.png",
        "images/jyl2020-n06.png",
        "images/jyl2020-n07.png",
        "images/jyl2020-n08.png",
        "images/jyl2020-n09.png",
        "images/jyl2020-n10.png",
        "images/rw.png",
        "images/rw01.png",
         "images/rw02.png",
        "images/rw03.png",
         "images/rw04.png",
        "images/rw05.png",
         "images/rw06.png",
        "images/rw07.png",
         "images/rw08.png",
        "images/rw09.png",
         "images/rw10.png",
        "images/rw11.png",
         "images/rw12.png",
        "images/rw13.png",
         "images/rw14.png",
        "images/rw15.png",
         "images/rw16.png",
        "images/wsjyl2020-02.png",
        "images/wsjyl2020-04.png",
        "images/wsjyl2020-0601.png",
        "images/wsjyl2020-07.png",
        "images/wsjyl-btn01.png",
        "images/wsjyl-btn02.png",
        "images/wsjyl-btn03.png",
        "images/wsjyl-fx01.png",
        "images/wz01.png",
        "images/wz02.png",
        "images/wz03.png",
        "images/wz04.png",
        "images/wz05.png",
        "images/wz06.png",
        "images/wz07.png",
        "images/wz08.png",
        "images/wz09.png",
        "images/wz10.png",
        "images/wz11.png",
		'images/mus.mp3',
		'images/300.jpg'
	]
	loading(arr, function(prec) {
        var scale = ((prec * 100)|0);
        $('.jz_num1').text(scale+'%');
        var degNUm = scale*3.6;
        $('.paogress_box1').css({
            'transform':"rotate("+degNUm+"deg"+")"
        })
    }, function() {
		$('.load_box').hide();


      	$('.swiper-container').show()
	$('.load_box').hide();
      	$('.swiper-container').show()
      	var music1 = document.getElementById("music");
      	$('.music-btn').addClass('jz-dh');
      	music1.play();
      	$(".music-btn").on('touchstart',function(){ 
			     if(music1.paused){ 
			    $('.music-btn').addClass('jz-dh');
			        music1.play();
			    }else{ 
			    	$('.music-btn').removeClass('jz-dh');
			        music1.pause();
			    } 
			});
$('.jz').hide();
$('.swiper-container').show()	
$(function() {
	  	 var cst = Math.floor(Math.random()*5);
		$('.jy-txt').eq(cst).show();
	console.log(cst)
   /* $('.hb-pic dd').hide()
      $('.jl-btn01').on('touchstart',function(){ 
      
	});*/
//点击再来一次
$(".again").click(function(){
	window.location.href = window.location.href + '?v=' + (new Date().getTime())
})
    }) 
	var mySwiper = new Swiper ('.contain01', {
        autoplayDisableOnInteraction : false,
	    	 	direction : 'vertical', //垂直上下滑动
	    	 	//direction : 'horizontal', //垂直左右滑动
	    	 	zoom: false, //双击放大图片
   				pagination: '.swiper-pagination',
   				mousewheelControl : false, //控制鼠标滚轮是否使用
	  			 nextButton:".loa",
		  		onInit: function(swiper){
		    	swiperAnimateCache(swiper); //隐藏动画元素 
		    	swiperAnimate(swiper); //初始化完成开始动画
		 	 	}, 
		  		onSlideChangeEnd: function(swiper){ 
		   	 	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
					$('.music-btn').addClass('jz-dh');
		 		 } 
  }) 


    var swiper02 = new Swiper('.contain02', {

       loop : true,
      centeredSlides: true,
      autoplay: {
        delay:1000,
       // disableOnInteraction: false,
      }
    });
	/*分享*/
  			$('.sd_share').click(function(){
  				$('.share_box').show();
  			})
  			$('.share_box').click(function(){
  				$(this).hide();
  			});
		
	})
$(".box_one").height(document.documentElement.clientHeight);
$('.box_one').width(document.documentElement.clientWidth);


$(".my-goodLot").height(document.documentElement.clientHeight);
$('.my-goodLot').width(document.documentElement.clientWidth);


  $(function(){




$("#jsq-btn").on('click', function(){
    $('.flower').addClass('downf9')
    $('.flower01').addClass('downf10')
    $('.flower02').addClass('downf8')

})

$("#jsq-btn").on('touchend', function(){
$('.flower').removeClass('downf9')
$('.flower01').removeClass('downf10')
$('.flower02').removeClass('downf8')
})
/**/
   


var numjs=0;
//倒计时开始
   var setTime;
        $('#jsbtn').click(function(){
        	$('#time').show();
              $('.cc').addClass('rowup')
$("#jsq-btn").on('click',function(){ 
//$('.flower').addClass('myfirst')
    //wenmingUtil.updatePv()
	numjs++
	$("#total span").text(numjs)
//$("#total span").text()
});
        	var time=parseInt($("#time span").text());
        	  setTime=setInterval(function(){
                if(time<=0){
                    clearInterval(setTime);
                    return;
                }
                time--;
                $("#time span").text(time);
					if(time==0){
						$("#jsq-btn").attr("disabled","true"); 
						$('#time').hide();
						//numjs--
//$('.last-swip').show()
 //draw()
						//$('#jsq-btn').hide()
					}
            },1000);
        	  //console.log(time) 当前总时间
        })

        

$(".f-full").height(document.documentElement.clientHeight);
$('.f-full').width(document.documentElement.clientWidth);
        // 摇一摇事件
        var shakeThreshold = 2000; // 定义一个摇动的阈值
        var lastUpdate = 0; // 记录上一次摇动的时间
        var x, y, z, lastX, lastY, lastZ; // 定义x、y、z记录三个轴的数据以及上一次触发的数据
        // 监听传感器运动事件
        if (window.DeviceMotionEvent) {
            window.addEventListener('devicemotion', deviceMotionHandler, false);
        } else {
          //  console.log('天呐，你的手机竟然还不支持摇一摇ヾ(◍°∇°◍)ﾉﾞ，你也可以点击下方的“开始旺签”参与抽奖');
        }
        // 运动传感器处理
        function deviceMotionHandler(eventData) {
            if(phoneBoolean && sharkBoolean){
                var acceleration = eventData.accelerationIncludingGravity; // 获取含重力的加速度
                var curTime = new Date().getTime();
                // 100毫秒进行一次位置判断
                if ((curTime - lastUpdate) > 100) {
                    var diffTime = curTime - lastUpdate;
                    lastUpdate = curTime;
                    x = acceleration.x;
                    y = acceleration.y;
                    z = acceleration.z;
                    var speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;
                    if (speed > shakeThreshold) {
                        //摇一摇触发
                        draw();
                    }
                    lastX = x;
                    lastY = y;
                    lastZ = z;
                }
            }
        }
    });
function loading(arr, fn, fnEnd) {
		var len = arr.length;
		var count = 0;
		var i = 0;

		function loadimg() {
			if (i === len) {
				return;
			}
			var img = new Image();
			img.onload = img.onerror = function() {
				count++;
				if (i < len - 1) {
					i++;
					loadimg();
					fn && fn(i / (len - 1), img.src);
				} else {
					fnEnd && fnEnd(img.src);
				}
			};
			img.src = arr[i];
		}
		loadimg();
	}