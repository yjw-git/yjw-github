!function(){

	var wenmingUtil = {
		init:function(){
			//this.updatePv();
			var city = $('.city_btn').val();
			//$('.reslut_num').text('47695092')
			this.wxConfig('H5 | 中国文明网2019年“网上祭英烈”活动','致敬有一分热发一分光的你');	
			//this.getOauthurl();
			
			$("#jsq-btn").click(function(){
			//this.updatePv();
			wenmingUtil.updatePv()
			})
		},
		updatePv:function(){
			var s = this;
			$.ajax({
				url: 'http://newapi.zmiti.com:50293/api/viewdata',
				type: 'post',
				data: JSON.stringify({
					h5id: 'zyxlfh5',
					appsecret: 'c9GxtUre3kOJCgvp',
					sign:1,
				}),
				success:function(data){
					if (data.getret === 0) {
						s.pv = data.v1;
						$('.num').text(s.pv)
							
					}

				}
			});
		},
		isWeiXin: function() {
			var ua = window.navigator.userAgent.toLowerCase();
			if (ua.match(/MicroMessenger/i) == 'micromessenger') {
				return true;
			} else {
				return false;
			}
		},
		wxConfig: function(title, desc, url, isDebug ) {			
			var s = this;
			/*if (!s.isWeiXin()) {
				return;
			}*/
			var img = 'http://h5.wenming.cn/wmh5/zyxlfh5/images/300.jpg';

			var appId = "wxec2401ee9a70f3d9";

			var durl = url || location.href.split('#')[0];

			var code_durl = encodeURIComponent(durl);

			//alert(title+' \n' + desc + '\n');
			$.ajax({
				type: 'get',
				url: "https://h5.wenming.cn/weixin/jssdk.php?type=signature&durl=" + code_durl,
				dataType: 'jsonp',
				jsonp: "callback",
				jsonpCallback: "jsonFlickrFeed",
				error: function() {

				},
				success: function(data) {

					wx.config({
						debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
						appId: 'wxec2401ee9a70f3d9', // 必填，公众号的唯一标识
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
							link: durl,
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
		},
		getQueryString: function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return (r[2]);
			return null;
		},
		getOauthurl: function() {
			var s = this;
			var wxappid = window.wxappid;
			var wxappsecret = window.wxappsecret;
			var customid = window.customid;
			if (!s.isWeiXin()) {
				return;
			}

			$.ajax({
				type: 'post',
				//url: window.baseUrl + '/weixin/getwxuserinfo/',
				url: window.protocol + '//api.zmiti.com/v2/weixin/getwxuserinfo/',
				data: {
					code: s.getQueryString('code'),
					wxappid:wxappid,
					wxappsecret:wxappsecret
				},
				error: function() {},
				success: function(dt) {

					if (dt.getret === 0) {


						s.openid = dt.userinfo.openid;
						s.nickname = dt.userinfo.nickname;
						s.headimgurl = dt.userinfo.headimgurl;

						window.nickname = s.nickname;
						window.headimgurl = s.headimgurl;
						window.openid = s.openid;

						/*s.wxConfig(window.nickname+' -:浏览量为：'+s.pv,window.desc);*/
						
					//s.wxConfig('一战到底','为中国加油！');		
					} else {
						if (s.isWeiXin()) {
							var wish = s.getQueryString('src');
							var nickname = s.getQueryString('nickname');
							var address = s.getQueryString('address');

							var redirect_uri = window.location.href.split('?')[0];


							$.ajax({
								url: window.protocol + '//api.zmiti.com/v2/weixin/getoauthurl/',
								type: 'post',
								data: {
									redirect_uri: redirect_uri,
									scope: 'snsapi_userinfo',
									worksid: customid,
									state: new Date().getTime() + ''
								},
								error: function() {},
								success: function(dt) {
									if (dt.getret === 0) {
										window.location.href = dt.url;
									}
								}
							})
						} else {
						}

					}


				}
			});
		},
		
		
		
	}

			wenmingUtil.init();
  			$('.city_btn').change(function(){
  				$('body').scrollTop(0);
  				wenmingUtil.init();
  				
  			})


}();