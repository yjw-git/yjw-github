function wxConfig(title, desc, img) {

	var durl = location.href.split('#')[0]; //window.location;
	var code_durl = encodeURIComponent(durl);


	var appId = 'wxfacf4a639d9e3bcc',
		img = img;

	var url = "http://api.zmiti.com/weixin/jssdk.php?type=signature&durl=" + code_durl

	$.ajax({
		type: 'get',
		url: url,
		dataType: 'jsonp',
		jsonp: "callback",
		jsonpCallback: "jsonFlickrFeed",
		success: function(data) {
			wx.config({
				debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: appId, // 必填，公众号的唯一标识
				timestamp: '1488558145', // 必填，生成签名的时间戳
				nonceStr: 'Wm3WZYTPz0wzccnW', // 必填，生成签名的随机串
				signature: data.signature, // 必填，签名，见附录1
				jsApiList: ['checkJsApi',
						'onMenuShareTimeline',
						'onMenuShareAppMessage',
						'onMenuShareQQ',
						'onMenuShareWeibo',
						'hideMenuItems',
						'showMenuItems',
						'hideAllNonBaseMenuItem',
						'showAllNonBaseMenuItem'
					] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			});

			wx.ready(function() {
				//朋友圈
				wx.onMenuShareTimeline({
					title: title, // 分享标题
					link: durl, // 分享链接
					imgUrl: img, // 分享图标
					desc: desc,
					success: function() {},
					cancel: function() {}
				});
				//朋友
				wx.onMenuShareAppMessage({
					title: title, // 分享标题
					link: durl, // 分享链接
					imgUrl: img, // 分享图标
					type: "link",
					dataUrl: "",
					desc: desc,
					success: function() {},
					cancel: function() {}
				});
				//qq
				wx.onMenuShareQQ({
					title: title, // 分享标题
					link: durl, // 分享链接
					imgUrl: img, // 分享图标
					desc: desc,
					success: function() {},
					cancel: function() {}
				});
			});
		}
	});

}