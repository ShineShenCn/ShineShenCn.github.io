/*
	软件名称：ckplayer
	软件版本：X1
	软件作者：http://www.ckplayer.com
	--------------------------------------------------------------------------------------------------------------------
	开发说明：
	使用的主要程序语言：javascript(js)及actionscript3.0(as3.0)(as3.0主要用于flashplayer部分的开发，不在该页面呈现)
	功能：播放视频
	特点：兼容HTML5-VIDEO(优先)以及FlashPlayer
	=====================================================================================================================
*/
function ckplayerConfig() {
	return {
		flashvars: {},//用来补充flashvars里的对象
		languagePath: '',//语言包文件地址
		stylePath: '',//风格包文件地址
		config: {
			fullInteractive: true,//是否开启交互功能
			delay: 30,//延迟加载视频，单位：毫秒
			timeFrequency: 100,//计算当前播放时间和加载量的时间频率，单位：毫秒
			autoLoad: true,//视频是否自动加载
			loadNext: 0,//多段视频预加载的段数，设置成0则全部加载
			definition: true,//是否使用清晰度组件
			smartRemove: true,//是否使用智能清理，使用该功能则在多段时当前播放段之前的段都会被清除出内存，减少对内存的使用
			bufferTime: 200,//缓存区的长度，单位：毫秒,不要小于10
			click: true,//是否支持屏幕单击暂停
			doubleClick: true,//是否支持屏幕双击全屏
			doubleClickInterval: 200,//判断双击的标准，即二次单击间隔的时间差之内判断为是双击，单位：毫秒
			keyDown: {
				space: true,//是否启用空格键切换播放/暂停
				left: true,//是否启用左方向键快退
				right: true,//是否启用右方向键快进
				up: true,//是否支持上方向键增加音量
				down: true //是否支持下方向键减少音量
			},
			timeJump: 10,//快进快退时的秒数
			volumeJump: 0.1,//音量调整的数量，大于0小于1的小数
			timeScheduleAdjust: 1,//是否可调节调节栏,0不启用，1是启用，2是只能前进（向右拖动），3是只能后退，4是只能前进但能回到第一次拖动时的位置，5是看过的地方可以随意拖动
			previewDefaultLoad: true,//预览图片是否默认加载，优点是鼠标第一次经过进度条即可显示预览图片
			promptSpotTime: false,//提示点文字是否在前面加上对应时间
			buttonMode: {
				player: false,//鼠标在播放器上是否显示可点击形态
				controlBar: false,//鼠标在控制栏上是否显示可点击形态
				timeSchedule: true,//鼠标在时间进度条上是否显示可点击形态
				volumeSchedule: true //鼠标在音量调节栏上是否显示可点击形态
			},
			liveAndVod: { //直播+点播=回播功能
				open: false,//是否开启，开启该功能需要设置flashvars里live=true
				vodTime: 2,//可以回看的整点数
				start: 'start' //回看请求参数
			},
			errorNum: 3,//错误重连次数
			playCorrect: false,//是否需要错误修正，这是针对rtmp的
			timeCorrect: true,//http视频播放时间错误纠正，有些因为视频格式的问题导致视频没有实际播放结束视频文件就返回了stop命令
			m3u8Definition: { //m3u8自动清晰度时按关键字来进行判断
				//tags:['200k','110k','400k','600k','1000k']
			},
			m3u8MaxBufferLength: 30,//m3u8每次缓冲时间，单位：秒数
			split: '|',//当视频地址采用字符形式并且需要使用逗号或其它符号来切割数组里定义
			timeStamp: '',//一个地址，用来请求当前时间戳，用于播放器内部时间效准
			mobileVolumeBarShow: false,//在移动端是否显示音量调节按钮
			addCallback: 'adPlay,adPause,playOrPause,videoPlay,videoPause,videoMute,videoEscMute,videoClear,changeVolume,fastBack,fastNext,videoSeek,newVideo,getMetaDate,videoRotation,videoBrightness,videoContrast,videoSaturation,videoHue,videoZoom,videoProportion,videoError,addListener,removeListener,addElement,getElement,deleteElement,elementShow,animate,animateResume,animatePause,deleteAnimate,changeConfig,getConfig,openUrl,fullScreen,quitFullScreen,switchFull,screenshot,custom,changeControlBarShow,getCurrentSrc,changeDefinition'//需要支持的事件
		},
		menu: { //版权名称支持
			ckkey: '',
			name: '',
			link: '',
			version: '',
			domain: '',
			more: []
		},
		style: { //风格部分内容配置，这里主要配置loading和logo以及广告的部分内容
			loading: { //视频加载前显示在播放器中间的图片，如果不需要可以删除该属性
				file: 'data:image/swf;base64,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',
				align: 'center',
				vAlign: 'middle',
				offsetX: -100,
				offsetY: -40
			},
			logo: { //显示在右上角的logo图片，如果不需要可以删除该属性
				file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAUCAYAAAD4BKGuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAVTSURBVHja1Fl/aJVVGP4cw/mH5tUWi3I53cA0WbeIzMgaq6lQoVawm0S6glHhIKM/TELICotqCxMSGWQRdFfRLEhc9mMxqA0rbdS2wsV0GkZXuaKUWlHvgeeNh7f3u1du3Ft74eGcnXu+c873vD/Pt0nZbDZyZL2gWZAQTBH8IjggeEjgPZASPIB+g/P7EsGT6J/BfHfjHFIv2Jpjj/+dlDskvCm42Jk7X3C7YJOgw/z2oOBGwdEYRW0RVAjOCZ4ugNggqwU3CTLRBJFyQ+xuwVRY14igB78tE9QKpgmeEHwkGKRnq9AeMesHRWwEsYGUxwSdBZ51ecweE4Lct0DsOVjaZvptA8jfC4JfghWpXIJ2jMY+EDShf1pwh6DvX5x1GtpDE43cNFlfhyFWpQ9xd5FgFo3fRi++C+2nCBNBRgU3O6RsEyyEQv4QLMb4CcE9RlFBLqS1WZ6BZ83A35ofVhuvfE5QJrjWebdgCJOx51qM1QgewbMzsO57MDQrB9DeC8ObHd5Xyb2eiNiQQxmtgkZBr+OuZwV7BIcF1RgbF1wTE2MbEccX48VY9sMzBilhTke/m+b1Q9lefpgruI7OsYhIGzPJuAnn3+6EM7vu1YKl5vkrYRSfCGZivCxoMklk7M5j6eFlXyRNRSAvAoFf0Fo/CC7LkbwuQjsZsf0qwbuI9wlYgIqGl6NEzDYibJ/gbmAfxpKoMDRcaSK8xZzjZbK+NMhSYoNSngV5e+ksKXp+JdqZwDDmdpSbsqa9gNAyi5JalSGv3iQ+dtNK9HvI+sNBh2AhvNYVaH+msRtAdsa4ehoKCuQsoP2PY8+kCSkJ5IRWjD2FZ4/BOFSWYv9KhI40eUKQ31CqdnLM1c1OOnHufKSS+iEZvgHNhji8g1yT5VZKdCnHO+ajvrYK/I7GkuSWjwvq8Mzl5M79NF89aCHaBNXmWv0sQVUUZEDwsDnbr2i9s31lKyGuFs7kITEBC+snJaToRYIFrRN0CeYgoSUxJ23WUm85eB41b4IUuIvGtyIMVMY8lzHGMoYworF7J/onKYk10/wVQL6zXYr+Zq9aOEhuXZPDel8Q3If+HMzTeHPKlForEK+mws3SMfH2UMxNLIJbasKsoIQZwVLbKFkN4T1C3HxUMM+EkCAfgjwNV40Y304KriOP+jIHqa+jvYsqnH/kqzKaGCFZxWnoTqooxky8+dHUsOGwr6Jfi9jmlVVTHGLnot9L3qGWqCToWYYRF5fDa96mtb93yI2g8B0IWxlTHWmi/hOG00D4mEJfJ5WhQX7ySCsDUaNkJeud6+sgXCgs3OLEG2/xdZSh10JBeiB1zQU0HuQdSib60rOdm9kFToIL8hmFiRHzm1YM0ylet5k579OFpcUk4I0oD0/QuJ7tcBy5ERY6ixdrh5uNwN3bUV7pd4E+J958HmPxbRRydqK/in6vxj5aH9din/udEPKtuU1GqBL24xJwBInQWiHLcbQVKBXTzkVpHP0tWHsIpZUqPeWcrScXuX2ImRkqlufBhdQl15ig3WLKH0/SeAmtD+uprBqGx1ThhlWN5LKG4lcNKbDblFDjVDU0wWK7yLLqnPNk6cKzKsfXt1GQmQQXSuwymhd3tr9lkvPJMUV152kc2PsmUEMxtzdPRk2SNX2DQ3Vhr02Is18LXjHVAz/bG0NEK8johus3UBiwyfkYlDkQUyLaWrwZBrbHMaB8Z3PJLaYk8IIVKKPSJdxbv3ecynNzLNr33GKLV1YVW4IyfycXfq0UxP4X5HJdXCqX4Wv0AKqYkkipw4LG6WxMNi+GhAtH+M/K8wVe7wuWvwQYAFT+UsGCXmX3AAAAAElFTkSuQmCC',
				align: 'right',
				vAlign: 'top',
				offsetX: -100,
				offsetY: 10
			},
			advertisement: { //广告相关的配置
				time: 5,//广告默认播放时长以及多个广告时每个广告默认播放时间，单位：秒
				method: 'get',//广告监测地址默认请求方式，get/post
				videoForce: false,//视频广告是否强制播放结束
				videoVolume: 0.8,//视频音量
				skipButtonShow: true,//是否显示跳过广告按钮
				linkButtonShow: true,//是否显示广告链接按钮，如果选择显示，只有在提供了广告链接地址时才会显示
				muteButtonShow: true,//是否在视频广告时显示静音按钮
				closeButtonShow: true,//暂停时是否显示关闭广告按钮
				closeOtherButtonShow: true,//其它广告是否需要关闭广告按钮
				frontSkipButtonDelay: 1,//前置广告跳过广告按钮延时显示的时间，单位：秒
				insertSkipButtonDelay: 0,//插入广告跳过广告按钮延时显示的时间，单位：秒
				endSkipButtonDelay: 0,//后置广告跳过广告按钮延时显示的时间，单位：秒
				frontStretched: 2,//前置广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				insertStretched: 2,//插入广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				pauseStretched: 2,//暂停广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
				endStretched: 2 //结束广告拉伸方式，0=原始大小，1=自动缩放，2=只有当广告的宽或高大于播放器宽高时才进行缩放，3=参考播放器宽高，4=宽度参考播放器宽、高度自动，5=高度参考播放器高、宽度自动
			},
			video: { //视频的默认比例，当视频元数据里没有宽和高属性时默认使用该宽高
				defaultWidth: 4,//宽度
				defaultHeight: 3 //高度
			}
		}
	};
} 
! (function() {
	var javascriptPath = '';
	!function() {
		var scriptList = document.scripts,
		thisPath = scriptList[scriptList.length - 1].src;
		javascriptPath = thisPath.substring(0, thisPath.lastIndexOf('/') + 1);
	} ();
	var ckplayer = function(obj) {
		/*
			javascript部分开发所用的注释说明：
			1：初始化-程序调用时即运行的代码部分
			2：定义样式-定义容器（div,p,canvas等）的样式表，即css
			3：监听动作-监听元素节点（单击-click，鼠标进入-mouseover，鼠标离开-mouseout，鼠标移动-mousemove等）事件
			4：监听事件-监听视频的状态（播放，暂停，全屏，音量调节等）事件
			5：共用函数-这类函数在外部也可以使用
			6：全局变量-定义成全局使用的变量
			7：其它相关注释
			全局变量说明：
			在本软件中所使用到的全局变量（变量（类型）包括Boolean，String，Int，Object（包含元素对象和变量对象），Array，Function等）
			下面列出重要的全局变量：
				V:Object：视频对象
				VA:Array：视频列表（包括视频地址，类型，清晰度说明）
				ID:String：视频ID
				CB:Object：控制栏各元素的集合对象
				PD:Object：内部视频容器对象
			---------------------------------------------------------------------------------------------
			程序开始
			下面为需要初始化配置的全局变量
			初始化配置
			config：全局变量定义一些基本配置
		*/
		this.config = {
			videoDbClick: true,//是否支持双击全屏/退出全屏动作
			errorTime: 100,//延迟判断失败的时间，单位：毫秒
			videoDrawImage: false,//是否使用视频drawImage功能，注意，该功能在移动端表现不了
			adSkipClick: 'javaScript->adjump' //h5环境中点击跳过广告按钮触发的功能
		};
		//全局变量：播放器默认配置，在外部传递过来相应配置后，则进行相关替换
		this.varsConfig = {
			playerID: '',//播放器ID
			container: '',//视频容器的ID
			variable: 'ckplayer',//播放函数(变量)名称
			volume: 0.8,//默认音量，范围0-1
			poster: '',//封面图片地址
			autoplay: false,//是否自动播放
			loop: false,//是否需要循环播放
			live: false,//是否是直播
			duration: 0,//指定总时间
			seek: 0,//默认需要跳转的秒数
			drag: '',//拖动时支持的前置参数
			front: '',//前一集按钮动作
			next: '',//下一集按钮动作
			loaded: '',//加载播放器后调用的函数
			flashplayer: false,//设置成true则强制使用flashplayer
			html5m3u8: false,//PC平台上是否使用h5播放器播放m3u8
			track: null,//字幕轨道
			cktrack: null,//ck字幕
			preview: null,//预览图片对象
			prompt: null,//提示点功能
			video: null,//视频地址
			config: '',//调用配置函数名称
			type: '',//视频格式
			crossorigin: '',//设置html5视频的crossOrigin属性
			crossdomain: '',//安全策略文件地址
			unescape: false,//默认flashplayer里需要解码
			mobileCkControls: false,//移动端h5显示控制栏
			mobileAutoFull: true,//移动端是否默认全屏播放
			playbackrate: 1,//默认倍速
			h5container: '',//h5环境中使用自定义容器
			debug: false,//是否开启调试模式
			//以下为广告相关配置
			adfront: '',
			adfronttime: '',
			adfrontlink: '',
			adpause: '',
			adpausetime: '',
			adpauselink: '',
			adinsert: '',
			adinserttime: '',
			adinsertlink: '',
			inserttime: '',
			adend: '',
			adendtime: '',
			adendlink: '',
			advertisements: ''
		};
		this.vars = {};//全局变量：语言配置
		this.language = {
			volume: '音量：',
			play: '点击播放',
			pause: '点击暂停',
			full: '点击全屏',
			escFull: '退出全屏',
			mute: '点击静音',
			escMute: '取消静音',
			front: '上一集',
			next: '下一集',
			definition: '点击选择清晰度',
			playbackRate: '点击选择速度',
			error: '加载出错',
			adTime: '广告{$second}秒',
			skipAd: '跳过广告',
			skipAdTime: '{$second}秒后可跳过广告',
			adLink: '查看详情'
		};
		//全局变量：右键菜单：[菜单标题,类型(link:链接，default:灰色，function：调用函数，javascript:调用js函数),执行内容(包含链接地址，函数名称),[line(间隔线)]]
		this.contextMenu = [['ckplayer', 'link', 'http://www.ckplayer.com', '_blank'], ['version:X1', 'default', 'line']];
		//全局变量：错误提示列表
		this.errorList = [['000', 'Object does not exist'], ['001', 'Variables type is not a object'], ['002', 'Video object does not exist'], ['003', 'Video object format error'], ['004', 'Video object format error'], ['005', 'Video object format error'], ['006', '[error] does not exist '], ['007', 'Ajax error'], ['008', 'Ajax error'], ['009', 'Ajax object format error'], ['010', 'Ajax.status:[error]']];
		//全局变量：HTML5变速播放的值数组/如果不需要可以设置成null
		this.playbackRateArr = [[0.5, '0.5倍'], [1, '正常'], [1.25, '1.25倍'], [1.5, '1.5倍'], [2, '2倍速'], [4, '4倍速']];
		//全局变量：HTML5默认变速播放的值
		this.playbackRateDefault = 1;
		//全局变量：定义logo
		this.logo = '';
		//全局变量：是否加载了播放器
		this.loaded = false;
		//全局变量：计时器，监听视频加载出错的状态
		this.timerError = null;
		//全局变量：是否出错
		this.error = false;
		//全局变量：出错地址的数组
		this.errorUrl = [];
		//全局变量：计时器，监听全屏与非全屏状态
		this.timerFull = null;
		//全局变量：是否全屏状态
		this.full = false;
		//全局变量：计时器，监听当前的月/日 时=分=秒
		this.timerTime = null;
		//全局变量：计时器，监听视频加载
		this.timerBuffer = null;
		//全局变量：设置进度按钮及进度条是否跟着时间变化，该属性主要用来在按下进度按钮时暂停进度按钮移动和进度条的长度变化
		this.isTimeButtonMove = true;
		//全局变量：进度栏是否有效，如果是直播，则不需要监听时间让进度按钮和进度条变化
		this.isTimeButtonDown = false;
		//全局变量：用来模拟双击功能的判断
		this.isClick = false;
		//全局变量：计时器，用来模拟双击功能的计时器
		this.timerClick = null;
		//全局变量：计时器，旋转loading
		this.timerLoading = null;
		//全局变量：计时器，监听鼠标在视频上移动显示控制栏
		this.timerCBar = null;
		//全局变量：播放视频时如果该变量的值大于0，则进行跳转后设置该值为0
		this.needSeek = 0;
		//全局变量：当前音量
		this.volume = 0;
		//全局变量：静音时保存临时音量
		this.volumeTemp = 0;
		//全局变量/变量类型：Number/功能：当前播放时间
		this.time = 0;
		//全局变量：定义首次调用
		this.isFirst = true;
		//全局变量：是否使用HTML5-VIDEO播放
		this.html5Video = true;
		//全局变量记录视频容器节点的x;y
		this.pdCoor = {
			x: 0,
			y: 0
		};
		//全局变量：判断当前使用的播放器类型，html5video或flashplayer
		this.playerType = '';
		//全局变量：加载进度条的长度
		this.loadTime = 0;
		//全局变量：body对象
		this.body = document.body || document.documentElement;
		//全局变量：播放器
		this.V = null;
		//全局变量：保存外部js监听事件数组
		this.listenerJsArr = [];
		//全局变量：保存控制栏显示元素的总宽度
		this.buttonLen = 0;
		//全局变量：保存控制栏显示元素的数组
		this.buttonArr = [];
		//全局变量：保存按钮元素的宽
		this.buttonWidth = {};
		//全局变量：保存播放器上新增元件的数组
		this.elementArr = [];
		//全局变量：保存播放器上弹幕的临时数组
		this.elementTempArr = [];
		//全局变量：字幕内容
		this.track = [];
		//全局变量：字幕索引
		this.trackIndex = 0;
		//全局变量：当前显示的字幕内容
		this.nowTrackShow = {
			sn: ''
		};
		//全局变量：保存字幕元件数组
		this.trackElement = [];
		//全局变量：将视频转换为图片
		this.timerVCanvas = null;
		//全局变量：animate，缓动对象数组
		this.animateArray = [];
		//全局变量：保存animate的元件
		this.animateElementArray = [];
		//全局变量：保存需要在暂停时停止缓动的数组
		this.animatePauseArray = [];
		//全局变量：预览图片加载状态/0=没有加载，1=正在加载，2=加载完成
		this.previewStart = 0;
		//全局变量：预览图片容器
		this.previewDiv = null;
		//全局变量：预览框
		this.previewTop = null;
		//全局变量：预览框的宽
		this.previewWidth = 120;
		//全局变量：预览图片容器缓动函数
		this.previewTween = null;
		//全局变量：是否是m3u8格式，是的话则可以加载hls.js
		this.isM3u8 = false;
		//全局变量：保存提示点数组
		this.promptArr = [];
		//全局变量：显示提示点文件的容器
		this.promptElement = null;
		//全局变量：配置文件函数
		this.ckplayerConfig = {};
		//全局变量：控制栏是否显示
		this.showFace = true;
		//全局变量：是否监听过h5的错误
		this.errorAdd = false;
		//全局变量：是否发送了错误
		this.errorSend = false;
		//全局变量：控制栏是否隐藏
		this.controlBarIsShow = true;
		//全局变量，保存当前缩放比例
		this.videoScale = 1;
		//全局变量：设置字体
		this.fontFamily = '"Microsoft YaHei"; YaHei; "\5FAE\8F6F\96C5\9ED1"; SimHei; "\9ED1\4F53";Arial';
		//全局变量：记录第一次拖动进度按钮时的位置
		this.timeSliderLeftTemp = 0;
		//全局变量：判断是否记录了总时间
		this.durationSendJS = false;
		//全局变量：初始化广告分析是否结束设置
		this.adAnalysisEnd = false;
		//全局变量：广告变量
		this.advertisements = {};
		//全局变量：是否是第一次播放视频
		this.isFirstTimePlay = true;
		//全局变量：当前需要播放的广告类型
		this.adType = '';
		//全局变量：播放广告计数
		this.adI = 0;
		//全局变量：要播放的临时地址
		this.videoTemp = {
			src: '',
			source: '',
			currentSrc: '',
			loop: false
		};
		//全局变量：当前要播放的广告组总时间
		this.adTimeAllTotal = 0;
		//全局变量：肖前要播放的广告时间
		this.adTimeTotal = 0;
		//全局变量：用来做倒计时
		this.adCountDownObj = null;
		//全局变量：前置，中插，结尾广告是否已开始运行
		this.adPlayStart = false;
		//全局变量：目前是否在播放广告
		this.adPlayerPlay = false;
		//全局变量：当前广告是否暂停
		this.adIsPause = false;
		//全局变量：视频广告是否静音
		this.adVideoMute = false;
		//全局变量：是否需要记录当前播放的时间供广告播放结束后进行跳转
		this.adIsVideoTime = false;
		//全局变量：后置广告是否播放
		this.endAdPlay = false;
		//全局变量：暂停广告是否在显示
		this.adPauseShow = false;
		//全局变量：是否需要重置广告以实现重新播放时再播放一次
		this.adReset = false;
		//全局变量：是否在播放广告时播放过视频广告
		this.adVideoPlay = false;
		if (obj) {
			this.embed(obj);
		}
	};
	ckplayer.prototype = {
		/*
			主要函数部分开始
			主接口函数：
			调用播放器需初始化该函数
		*/
		embed: function(c) {
			//c:Object：是调用接口传递的属性对象
			if (window.location.href.substr(0, 7) == 'file://') {//如果是使用的file协议打网页则弹出提示
				alert('Please use the HTTP protocol to open the page');
				return;
			}
			if (c == undefined || !c) {
				this.eject(this.errorList[0]);
				return;
			}
			if (typeof(c) != 'object') {
				this.eject(this.errorList[1]);
			}
			this.vars = this.standardization(this.varsConfig, c);
			if (!this.vars['mobileCkControls'] && this.isMobile()) {
				this.vars['flashplayer'] = false;
				this.showFace = false;
			}
			var videoString = this.vars['video'];
			if (!videoString) {
				this.eject(this.errorList[2]);
				return;
			}
			if (typeof(videoString) == 'string') {
				if (videoString.substr(0, 3) == 'CK:' || videoString.substr(0, 3) == 'CE:' || videoString.substr(8, 3) == 'CK:' || videoString.substr(8, 3) == 'CE:') {
					this.vars['flashplayer'] = true;
				}
			}
			if (typeof(videoString) == 'object') {
				if (videoString.length > 1) {
					if (videoString[0][0].substr(0, 3) == 'CK:' || videoString[0][0].substr(0, 3) == 'CE:' || videoString[0][0].substr(8, 3) == 'CK:' || videoString[0][0].substr(8, 3) == 'CE:') {
						this.vars['flashplayer'] = true;
					}
				}
			}
			if (this.vars['config']) {
				this.ckplayerConfig = eval(this.vars['config'] + '()');
			} else {
				this.ckplayerConfig = ckplayerConfig();
			}
			if ((!this.supportVideo() && this.vars['flashplayer'] != '') || (this.vars['flashplayer'] && this.uploadFlash()) || !this.isMsie()) {
				this.html5Video = false;
				this.getVideo();
			} else if (videoString) {
				//判断视频数据类型
				this.analysedVideoUrl(videoString);
				return this;
			} else {
				this.eject(this.errorList[2]);
			}
		},
		/*
			内部函数
			根据外部传递过来的video开始分析视频地址
		*/
		analysedVideoUrl: function(video) {
			var i = 0,
			y = 0;
			var thisTemp = this;
			this.VA = [];//定义全局变量VA：视频列表（包括视频地址，类型，清晰度说明）
			if (typeof(video) == 'string') { //如果是字符形式的则判断后缀进行填充
				if (video.substr(0, 8) != 'website:') {
					this.VA = [[video, '', '', 0]];
					var fileExt = this.getFileExt(video);
					switch (fileExt) {
					case '.mp4':
						this.VA[0][1] = 'video/mp4';
						break;
					case '.ogg':
						this.VA[0][1] = 'video/ogg';
						break;
					case '.webm':
						this.VA[0][1] = 'video/webm';
						break;
					default:
						break;
					}
					this.getVideo();
				} else {
					if (this.html5Video) {
						var ajaxObj = {
							url: video.substr(8),
							success: function(data) {
								if (data) {
									thisTemp.analysedUrl(data);
								} else {
									thisTemp.eject(thisTemp.errorList[5]);
									this.VA = video;
									thisTemp.getVideo();
								}
							}
						};
						this.ajax(ajaxObj);
					} else {
						this.VA = video;
						this.getVideo();
					}

				}
			} else if (typeof(video) == 'object') { //如果视频地址是对象或数组
				if (!this.isUndefined(typeof(video.length))) { //如果视频地址是数组
					if (!this.isUndefined(typeof(video[0].length))) { //如果视频地址是二维数组
						this.VA = video;
					}
					this.getVideo();
				} else {
					/*
						如果video格式是对象形式，则分二种
						如果video对象里包含type，则直接播放
					*/
					if (!this.isUndefined(video['type'])) {
						this.VA.push([video['file'], video['type'], '', 0]);
						this.getVideo();
					} else {
						this.eject(this.errorList[5]);
					}
				}
			} else {
				this.eject(this.errorList[4]);
			}
		},
		/*
			对请求到的视频地址进行重新分析
		*/
		analysedUrl: function(data) {
			this.vars = this.standardization(this.vars, data);
			if (!this.isUndefined(data['video'])) {
				this.vars['video'] = data['video'];
			}
			this.analysedVideoUrl(this.vars['video']);
		},
		/*
			内部函数
			检查浏览器支持的视频格式，如果是则将支持的视频格式重新分组给播放列表
		*/
		getHtml5Video: function() {
			var va = this.VA;
			var nva = [];
			var mobile = false;
			var video = document.createElement('video');
			var codecs = function(type) {
				var cod = '';
				switch (type) {
				case 'video/mp4':
					cod = 'avc1.4D401E, mp4a.40.2';
					break;
				case 'video/ogg':
					cod = 'theora, vorbis';
					break;
				case 'video/webm':
					cod = 'vp8.0, vorbis';
					break;
				default:
					break;
				}
				return cod;
			};
			var supportType = function(vidType, codType) {
				if (!video.canPlayType) {
					this.html5Video = false;
					return;
				}
				var isSupp = video.canPlayType(vidType + ';codecs="' + codType + '"');
				if (isSupp == '') {
					return false
				}
				return true;
			};
			if (this.vars['flashplayer'] || !this.isMsie()) {
				this.html5Video = false;
				return;
			}
			if (this.isMobile()) {
				mobile = true;
			}
			for (var i = 0; i < va.length; i++) {
				var v = va[i];
				if (v) {
					if (v[1] != '' && !mobile && supportType(v[1], codecs(v[1])) && v[0].substr(0, 4) != 'rtmp') {
						nva.push(v);
					}
					if ((this.getFileExt(v[0]) == '.m3u8' || this.vars['type'] == 'video/m3u8' || this.vars['type'] == 'm3u8' || v[1] == 'video/m3u8' || v[1] == 'm3u8') && this.vars['html5m3u8']) {
						this.isM3u8 = true;
						nva.push(v);
					}
				}
			}
			if (nva.length > 0) {
				this.VA = nva;
			} else {
				if (!mobile) {
					this.html5Video = false;
				}
			}
		},
		/*
			内部函数
			根据视频地址开始构建播放器
		*/
		getVideo: function() {
			var thisTemp = this;
			var v = this.vars;
			//如果存在广告字段则开始分析广告
			if (!this.adAnalysisEnd && (v['adfront'] != '' || v['adpause'] != '' || v['adinsert'] != '' || v['adend'] != '' || v['advertisements'] != '')) {
				this.adAnalysisEnd = true;
				this.adAnalysis();
				return;
			}
			//如果存在字幕则加载
			if (this.V) { //如果播放器已存在，则认为是从newVideo函数发送过来的请求
				this.changeVideo();
				return;
			}
			if (this.vars['cktrack']) {
				this.loadTrack();
			}
			if (this.supportVideo() && !this.vars['flashplayer']) {
				this.getHtml5Video(); //判断浏览器支持的视频格式
			}
			var src = '',
			source = '',
			poster = '',
			loop = '',
			autoplay = '',
			track = '';
			var video = v['video'];
			var i = 0;
			this.CD = this.getByElement(v['container']);
			volume = v['volume'];
			if (!this.CD) {
				this.eject(this.errorList[6], v['container']);
				return false;
			}
			//开始构建播放器容器
			this.V = undefined;
			var thisPd = null;
			if (v['h5container'] != '') {
				thisPd = this.getByElement(v['h5container']);
				if (this.isUndefined(thisPd)) {
					thisPd = null;
				}
			}
			var isVideoH5 = null; //isUndefined  thisPd
			if (v['playerID'] != '') {
				isVideoH5 = this.getByElement('#' + v['playerID']);
				if (this.isUndefined(isVideoH5)) {
					isVideoH5 = null;
				}
			}
			if (thisPd != null && isVideoH5 != null) {
				this.PD = thisPd; //PD:定义播放器容器对象全局变量
			} else {
				var playerID = 'ckplayer' + this.randomString();
				var playerDiv = document.createElement('div');
				playerDiv.className = playerID;
				this.CD.innerHTML = '';
				this.CD.appendChild(playerDiv);
				this.PD = this.getByElement(playerID); //PD:定义播放器容器对象全局变量
			}
			this.css(this.CD, {
				backgroundColor: '#000000',
				overflow: 'hidden',
				position: 'relative'
			});
			this.css(this.PD, {
				backgroundColor: '#000000',
				width: '100%',
				height: '100%',
				fontFamily: this.fontFamily
			});
			if (this.html5Video) { //如果支持HTML5-VIDEO则默认使用HTML5-VIDEO播放器
				//禁止播放器容器上鼠标选择文本
				this.PD.onselectstart = this.PD.ondrag = function() {
					return false;
				};
				//播放器容器构建完成并且设置好样式
				//构建播放器
				if (this.VA.length == 1) {
					this.videoTemp['src'] = decodeURIComponent(this.VA[0][0]);
					src = ' src="' + this.videoTemp['src'] + '"';

				} else {
					var videoArr = this.VA.slice(0);
					videoArr = this.arrSort(videoArr);
					for (i = 0; i < videoArr.length; i++) {
						var type = '';
						var va = videoArr[i];
						if (va[1]) {
							type = ' type="' + va[1] + '"';
							if (type == ' type="video/m3u8"' || type == ' type="m3u8"') {
								type = '';
							}
						}
						source += '<source src="' + decodeURIComponent(va[0]) + '"' + type + '>';
					}
					this.videoTemp['source'] = source;
				}
				//分析视频地址结束
				if (v['autoplay']) {
					autoplay = ' autoplay="autoplay"';
				}
				if (v['poster']) {
					poster = ' poster="' + v['poster'] + '"';
				}
				if (v['loop']) {
					loop = ' loop="loop"';
				}
				if (v['seek'] > 0) {
					this.needSeek = v['seek'];
				}
				if (v['track'] != null && v['cktrack'] == null) {
					var trackArr = v['track'];
					var trackDefault = '';
					var defaultHave = false;
					for (i = 0; i < trackArr.length; i++) {
						var trackObj = trackArr[i];
						if (trackObj['default'] && !defaultHave) {
							trackDefault = ' default';
							defaultHave = true;
						} else {
							trackDefault = '';
						}
						track += '<track kind="' + trackObj['kind'] + '" src="' + trackObj['src'] + '" srclang="' + trackObj['srclang'] + '" label="' + trackObj['label'] + '"' + trackDefault + '>';
					}
				}
				var autoLoad = this.ckplayerConfig['config']['autoLoad'];
				var preload = '';
				if (!autoLoad) {
					preload = ' preload="meta"';
				}
				var vid = this.randomString();
				var controls = '';
				if (!this.showFace) {
					controls = ' controls="controls"';
				}
				var mobileAutoFull = v['mobileAutoFull'];
				var mobileautofull = '';
				if (!mobileAutoFull) {
					mobileautofull = ' x-webkit-airplay="true" playsinline  webkit-playsinline="true"  x5-video-player-type="h5"';
				}
				if (isVideoH5 != null && thisPd != null) {
					this.V = isVideoH5;
					if (v['poster']) {
						this.V.poster = v['poster'];
					}
				} else {
					var html = '';
					if (!this.isM3u8) {
						html = '<video id="' + vid + '"' + src + ' width="100%" height="100%"' + autoplay + poster + loop + preload + controls + mobileautofull + track + '">' + source + '</video>';
					} else {
						html = '<video id="' + vid + '" width="100%" height="100%"' + poster + loop + preload + controls + mobileautofull + track + '"></video>';
					}
					this.PD.innerHTML = html;
					this.V = this.getByElement('#' + vid); //V：定义播放器对象全局变量
				}
				if (this.vars['crossorigin']) {
					this.V.crossOrigin = this.vars['crossorigin'];
				}
				try {
					this.V.volume = volume; //定义音量
					if (this.playbackRateArr && this.vars['playbackrate'] > -1) {
						if (this.vars['playbackrate'] < this.playbackRateArr.length) {
							this.playbackRateDefault = this.vars['playbackrate'];
						}
						this.V.playbackRate = this.playbackRateArr[this.playbackRateDefault][0]; //定义倍速
					}
				} catch(error) {}
				this.css(this.V, {
					width: '100%',
					height: '100%'
				});
				if (this.isM3u8) {
					var loadJsHandler = function() {
						thisTemp.embedHls(thisTemp.VA[0][0], v['autoplay']);
					};
					this.loadJs(javascriptPath + 'hls/hls.min.js', loadJsHandler);
				}
				this.css(this.V, 'backgroundColor', '#000000');
				//创建一个画布容器
				if (this.config['videoDrawImage']) {
					var canvasID = 'vcanvas' + this.randomString();
					var canvasDiv = document.createElement('div');
					canvasDiv.className = canvasID;
					this.PD.appendChild(canvasDiv);
					this.MD = this.getByElement(canvasID); //定义画布存储容器
					this.css(this.MD, {
						backgroundColor: '#000000',
						width: '100%',
						height: '100%',
						position: 'absolute',
						display: 'none',
						cursor: 'pointer',
						left: '0px',
						top: '0px',
						zIndex: '10'
					});
					var cvid = 'ccanvas' + this.randomString();
					this.MD.innerHTML = this.newCanvas(cvid, this.PD.offsetWidth, this.PD.offsetHeight);
					this.MDC = this.getByElement(cvid + '-canvas');
					this.MDCX = this.MDC.getContext('2d');
				}
				this.playerType = 'html5video';
				//播放器构建完成并且设置好样式
				//建立播放器的监听函数，包含操作监听及事件监听
				this.addVEvent();
				//根据清晰度的值构建清晰度切换按钮
				if (this.showFace) {
					this.definition();
					if (!this.vars['live'] && this.playbackRateArr && this.vars['playbackrate'] > -1) {
						this.playbackRate();
					}
					if (v['autoplay']) {
						this.loadingStart(true);
					}
				}
				this.playerLoad();
			} else { //如果不支持HTML5-VIDEO则调用flashplayer
				this.embedSWF();
			}
		},
		/*
			分析广告数据
		*/
		adAnalysis: function() {
			var thisTemp = this;
			var v = this.vars;
			var isAdvShow = [];
			var i = 0;
			if (v['advertisements'] != '' && v['advertisements'].substr(0, 8) == 'website:') {
				var ajaxObj = {
					url: v['advertisements'].substr(8),
					success: function(data) {
						if (data) {
							var newData = {};
							var val = null;
							//对广告进行分析
							try {
								if (!thisTemp.isUndefined(data['front'])) {
									val = thisTemp.arrayDel(data['front']);
									if (!thisTemp.isUndefined(val)) {
										newData['front'] = val;
									}
									val = thisTemp.arrayDel(data['pause']);
									if (!thisTemp.isUndefined(val)) {
										newData['pause'] = val;
									}
									val = thisTemp.arrayDel(data['insert']);
									if (!thisTemp.isUndefined(val)) {
										newData['insert'] = val;
										if (!thisTemp.isUndefined(data['inserttime'])) {
											newData['inserttime'] = thisTemp.arrayInt(data['inserttime']);
											isAdvShow = [];
											for (i = 0; i < newData['inserttime'].length; i++) {
												isAdvShow.push(false);
											}
											newData['insertPlay'] = isAdvShow;
										}
									}
									val = thisTemp.arrayDel(data['end']);
									if (!thisTemp.isUndefined(val)) {
										newData['end'] = val;
									}
									val = thisTemp.arrayDel(data['other']);
									if (!thisTemp.isUndefined(val)) {
										newData['other'] = val;
										isAdvShow = [];
										var arrTemp = [];
										for (i = 0; i < val.length; i++) {
											isAdvShow.push(false);
											arrTemp.push(parseInt('0' + val[i]['startTime']));
										}
										newData['othertime'] = arrTemp;
										newData['otherPlay'] = isAdvShow;
									}
								}
							} catch(event) {
								thisTemp.log(event)
							}
							thisTemp.advertisements = newData;
							//对广告进行分析结束
						}
						thisTemp.getVideo();
					}
				};
				this.ajax(ajaxObj);
			} else {
				//根据广告分析
				this.adAnalysisOne('front', 'adfront', 'adfronttime', 'adfrontlink', 'adfronttype');
				this.adAnalysisOne('pause', 'adpause', 'adpausetime', 'adpauselink', 'adpausetype');
				this.adAnalysisOne('insert', 'adinsert', 'adinserttime', 'adinsertlink', 'adinserttype');
				this.adAnalysisOne('end', 'adend', 'adendtime', 'adendlink', 'adendtype');
				if (!this.isUndefined(this.advertisements['insert'])) {
					if (!this.isUndefined(v['inserttime'])) {
						thisTemp.advertisements['inserttime'] = v['inserttime'];
					}
				}
				if (!this.isUndefined(thisTemp.advertisements['inserttime'])) {
					thisTemp.advertisements['inserttime'] = thisTemp.arrayInt(thisTemp.advertisements['inserttime']);
					isInsert = [];
					for (i = 0; i < thisTemp.advertisements['inserttime'].length; i++) {
						isInsert.push(false);
					}
					thisTemp.advertisements['insertPlay'] = isInsert;
				}
				thisTemp.getVideo();
			}
		},
		/*
			将广告数组数据里不是视频和图片的去除
		*/
		arrayDel: function(arr) {
			if (arr.length == 0) {
				return null;
			}
			var newArr = [];
			for (var i = 0; i < arr.length; i++) {
				var type = arr[i]['type'];
				if (type == 'mp4' || type == 'mov' || this.isStrImage(type)) {
					newArr.push(arr[i]);
				}
			}
			if (newArr.length > 0) {
				return newArr;
			}
			return null;
		},
		/*分析单个类型的广告*/
		adAnalysisOne: function(adType, adName, adTime, adLink, adStype) {
			var v = this.vars;
			if (this.isUndefined(v[adName])) {
				v[adName] = '';
			}
			if (this.isUndefined(v[adTime])) {
				v[adTime] = '';
			}
			if (this.isUndefined(v[adLink])) {
				v[adLink] = '';
			}
			if (this.isUndefined(v[adStype])) {
				v[adStype] = '';
			}
			if (v[adName] != '') {
				var adList = [];
				var ad = v[adName].split(',');
				var adtime = v[adTime].split(',');
				var adlink = v[adLink].split(',');
				var adstype = v[adStype].split(',');
				var i = 0;
				if (ad.length > 0) {
					var adLinkLen = adlink.length,
					adTimeLen = adtime.length;
					if (v[adLink] == '') {
						adLinkLen = 0;
						adlink = [];
					}
					if (v[adTime] == '') {
						adTimeLen = 0;
						adtime = [];
					}
					if (adLinkLen < ad.length) {
						for (i = adLinkLen; i < ad.length; i++) {
							adlink.push('');
						}
					}
					if (adTimeLen < ad.length) {
						for (i = adTimeLen; i < ad.length; i++) {
							adtime.push('');
						}
					}
					var adstypeLen = adstype.length;
					if (v[adStype] == '') {
						adstypeLen = 0;
						adstype = [];
					}
					if (adstypeLen < ad.length) {
						for (i = adstypeLen; i < ad.length; i++) {
							adstype.push(this.getFileExt(ad[i]).replace('.', ''));
						}
					}
					for (i = 0; i < ad.length; i++) {
						var type = adstype[i];
						if (type == 'mp4' || type == 'mov' || this.isStrImage(type)) {
							var obj = {
								file: ad[i],
								type: type,
								time: parseInt(adtime[i]) > 0 ? parseInt(adtime[i]) : this.ckplayerConfig['style']['advertisement']['time'],
								link: adlink[i]
							};
							adList.push(obj);
						}

					}
					if (this.isUndefined(this.advertisements)) {
						this.advertisements = {};
					}
					if (adList.length > 0) {
						this.advertisements[adType] = adList;
					}
				}
			}
		},
		/*
			内部函数
			发送播放器加载成功的消息
		*/
		playerLoad: function() {
			var thisTemp = this;
			if (this.isFirst) {
				this.isFirst = false;
				setTimeout(function() {
					thisTemp.loadedHandler();
				},1);
			}
		},
		/*
			内部函数
			建立播放器的监听函数，包含操作监听及事件监听
		*/
		addVEvent: function() {
			var thisTemp = this;
			//监听视频单击事件
			var eventVideoClick = function(event) {
				thisTemp.videoClick();
			};
			this.addListenerInside('click', eventVideoClick);
			this.addListenerInside('click', eventVideoClick, this.MDC);
			//延迟计算加载失败事件
			this.timerErrorFun();
			//监听视频加载到元数据事件
			var eventJudgeIsLive = function(event) {
				thisTemp.sendJS('loadedmetadata');
				if (typeof(thisTemp.V.duration) == 'number' && thisTemp.V.duration > 1) {
					thisTemp.sendJS('duration', thisTemp.V.duration);
					thisTemp.formatInserttime(thisTemp.V.duration);
					if (thisTemp.adPlayerPlay) {
						thisTemp.advertisementsTime(thisTemp.V.duration + 1);
					}
					thisTemp.durationSendJS = true;
				}
				thisTemp.judgeIsLive();
			};
			this.addListenerInside('loadedmetadata', eventJudgeIsLive);
			//监听视频播放事件
			var eventPlaying = function(event) {
				thisTemp.playingHandler();
				thisTemp.sendJS('play');
				thisTemp.sendJS('paused', false);
				if (!thisTemp.durationSendJS && typeof(thisTemp.V.duration) == 'number' && thisTemp.V.duration > 0) {
					thisTemp.durationSendJS = true;
					thisTemp.sendJS('duration', thisTemp.V.duration);
					thisTemp.formatInserttime(thisTemp.V.duration);
				}
			};
			this.addListenerInside('playing', eventPlaying);
			//监听视频暂停事件
			var eventPause = function(event) {
				thisTemp.pauseHandler();
				thisTemp.sendJS('pause');
				thisTemp.sendJS('paused', true);
			};
			this.addListenerInside('pause', eventPause);
			//监听视频播放结束事件
			var eventEnded = function(event) {
				thisTemp.endedHandler();
			};
			this.addListenerInside('ended', eventEnded);
			//监听视频播放时间事件
			var eventTimeupdate = function(event) {
				if (thisTemp.timerLoading != null) {
					thisTemp.loadingStart(false);
				}
				if (thisTemp.time) {
					if (!thisTemp.adPlayerPlay) {
						thisTemp.sendJS('time', thisTemp.time);
						//监听中间插入广告是否需要播放
						if (!thisTemp.isUndefined(thisTemp.advertisements['insert'])) {
							thisTemp.checkAdInsert(thisTemp.time);
						}
						//监听其它广告
						if (!thisTemp.isUndefined(thisTemp.advertisements['other'])) {
							thisTemp.checkAdOther(thisTemp.time);
						}
						if (thisTemp.time < 3 && thisTemp.adReset) {
							thisTemp.adReset = false;
							thisTemp.endedAdReset();
						}
					} else { //如果是广告则进行广告倒计时
						thisTemp.adPlayerTimeHandler(thisTemp.time);
					}

				}
			};
			this.addListenerInside('timeupdate', eventTimeupdate);
			//监听视频缓冲事件
			var eventWaiting = function(event) {
				thisTemp.loadingStart(true);
			};
			this.addListenerInside('waiting', eventWaiting);
			//监听视频seek开始事件
			var eventSeeking = function(event) {
				thisTemp.sendJS('seek', 'start');
			};
			this.addListenerInside('seeking', eventSeeking);
			//监听视频seek结束事件
			var eventSeeked = function(event) {
				thisTemp.seekedHandler();
				thisTemp.sendJS('seek', 'ended');
			};
			this.addListenerInside('seeked', eventSeeked);
			//监听视频音量
			var eventVolumeChange = function(event) {
				try {
					thisTemp.volumechangeHandler();
					thisTemp.sendJS('volume', thisTemp.volume || thisTemp.V.volume);
				} catch(event) {}
			};
			this.addListenerInside('volumechange', eventVolumeChange);
			//监听全屏事件
			var eventFullChange = function(event) {
				var fullState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
				thisTemp.sendJS('full', fullState);
			};
			this.addListenerInside('fullscreenchange', eventFullChange);
			this.addListenerInside('webkitfullscreenchange', eventFullChange);
			this.addListenerInside('mozfullscreenchange', eventFullChange);
			//建立界面
			if (this.showFace) {
				this.interFace();
			}
		},
		/*
			内部函数
			重置界面元素
		*/
		resetPlayer: function() {
			this.timeTextHandler();
			if (this.showFace) {
				this.timeProgress(0, 1); //改变时间进度条宽
				this.changeLoad(0);
				this.initPlayPause(); //判断显示播放或暂停按钮
				this.definition(); //构建清晰度按钮
				this.showFrontNext(); //构建上一集下一集按钮
				this.deletePrompt(); //删除提示点
				this.deletePreview(); //删除预览图
				this.trackHide(); //重置字幕
				this.resetTrack();
				this.trackElement = [];
				this.track = [];
			}
		},
		/*
			内部函数
			构建界面元素
		 */
		interFace: function() {
			this.showFace = true;
			var thisTemp = this;
			var html = ''; //控制栏内容
			var i = 0;
			var bWidth = 38,//按钮的宽
			bHeight = 38; //按钮的高
			var bBgColor = '#FFFFFF',//按钮元素默认颜色
			bOverColor = '#0782F5'; //按钮元素鼠标经过时的颜色
			var timeInto = this.formatTime(0) + ' / ' + this.formatTime(this.vars['duration']); //时间显示框默认显示内容
			var randomS = this.randomString(10); //获取一个随机字符串
			/*
				以下定义界面各元素的ID，统一以ID结束
			*/
			var controlBarBgID = 'controlbgbar' + randomS,//控制栏背景
			controlBarID = 'controlbar' + randomS,//控制栏容器
			timeProgressBgID = 'timeprogressbg' + randomS,//播放进度条背景
			loadProgressID = 'loadprogress' + randomS,//加载进度条
			timeProgressID = 'timeprogress' + randomS,//播放进度条
			timeBOBGID = 'timebobg' + randomS,//播放进度按钮容器，该元素为一个透明覆盖在播放进度条上
			timeBOID = 'timebo' + randomS,//播放进度可拖动按钮外框
			timeBWID = 'timebw' + randomS,//播放进度可拖动按钮内框
			timeTextID = 'timetext' + randomS,//时间文本框
			playID = 'play' + randomS,//播放按钮
			pauseID = 'pause' + randomS,//暂停按钮
			frontID = 'front' + randomS,//前一集按钮
			nextID = 'next' + randomS,//下一集按钮
			fullID = 'full' + randomS,//全屏按钮
			escFullID = 'escfull' + randomS,//退出全屏按钮
			muteID = 'mute' + randomS,//静音按钮
			escMuteID = 'escmute' + randomS,//取消静音按钮				
			volumeID = 'volume' + randomS,//音量调节框容器
			volumeDbgID = 'volumedbg' + randomS,//音量调节框容器背景
			volumeBgID = 'volumebg' + randomS,//音量调节框背景层
			volumeUpID = 'volumeup' + randomS,//音量调节框可变宽度层
			volumeBOID = 'volumebo' + randomS,//音量调节按钮外框
			volumeBWID = 'volumebw' + randomS,//音量调节按钮内框
			definitionID = 'definition' + randomS,//清晰度容器
			definitionPID = 'definitionp' + randomS,//清晰度列表容器
			playbackRateID = 'playbackrate' + randomS,//清晰度容器
			playbackRatePID = 'playbackratep' + randomS,//清晰度列表容器
			promptBgID = 'promptbg' + randomS,//提示框背景
			promptID = 'prompt' + randomS,//提示框
			dlineID = 'dline' + randomS,//分隔线共用前缀
			menuID = 'menu' + randomS,//右键容器
			pauseCenterID = 'pausecenter' + randomS,//中间暂停按钮
			loadingID = 'loading' + randomS,//缓冲
			errorTextID = 'errortext' + randomS,//错误文本框
			logoID = 'logo' + randomS,//logo
			adBackgroundID = 'background' + randomS,//广告背景图片
			adElementID = 'adelement' + randomS,//广告容器
			adBarID = 'adBar' + randomS,//广告顶部倒计时，跳过广告，静音按钮容器
			adSkipID = 'adskip' + randomS,//跳过广告按钮
			adTimeID = 'adtime' + randomS,//倒计时按钮
			adLinkID = 'adlink' + randomS,//广告链接按钮
			adMuteID = 'admute' + randomS,//广告静音按钮
			adEscMuteID = 'adescmute' + randomS,//广告取消静音按钮
			adPauseCloseID = 'adpauseclose' + randomS; //暂停广场的关闭按钮
			/*
				构建一些PD（播放器容器）里使用的元素
			*/
			var controlBarBg = document.createElement('div'),
			controlBar = document.createElement('div'),
			timeProgressBg = document.createElement('div'),
			timeBoBg = document.createElement('div'),
			pauseCenter = document.createElement('div'),
			errorText = document.createElement('div'),
			promptBg = document.createElement('div'),
			prompt = document.createElement('div'),
			menuDiv = document.createElement('div'),
			definitionP = document.createElement('div'),
			playbackrateP = document.createElement('div'),
			loading = document.createElement('div'),
			logo = document.createElement('div'),
			adBackground = document.createElement('div'),
			adElement = document.createElement('div'),
			adBar = document.createElement('div'),
			adLink = document.createElement('div'),
			adPauseClose = document.createElement('div');
			/*
				定义各节点的样式 
			*/
			controlBarBg.className = controlBarBgID;
			controlBar.className = controlBarID;
			timeProgressBg.className = timeProgressBgID;
			timeBoBg.className = timeBOBGID;
			promptBg.className = promptBgID;
			prompt.className = promptID;
			menuDiv.className = menuID;
			definitionP.className = definitionPID;
			playbackrateP.className = playbackRatePID;
			pauseCenter.className = pauseCenterID;
			loading.className = loadingID;
			logo.className = logoID;
			errorText.className = errorTextID;
			adBackground.className = adBackgroundID;
			adElement.className = adElementID;
			adBar.className = adBarID;
			adLink.className = adLinkID;
			adPauseClose.className = adPauseCloseID;
			/*
				加载节点到播放器容器中
			*/
			this.PD.appendChild(controlBarBg);
			this.PD.appendChild(controlBar);
			this.PD.appendChild(timeProgressBg);
			this.PD.appendChild(timeBoBg);
			this.PD.appendChild(promptBg);
			this.PD.appendChild(prompt);
			this.PD.appendChild(definitionP);
			this.PD.appendChild(playbackrateP);
			this.PD.appendChild(pauseCenter);
			this.PD.appendChild(loading);
			this.PD.appendChild(errorText);
			this.PD.appendChild(logo);
			this.PD.appendChild(adBackground);
			this.PD.appendChild(adElement);
			this.PD.appendChild(adBar);
			this.PD.appendChild(adLink);
			this.PD.appendChild(adPauseClose);
			this.body.appendChild(menuDiv);
			if (this.vars['live']) { //如果是直播，时间显示文本框里显示当前系统时间
				timeInto = this.getNowDate();
			}
			/*
				构建控制栏的内容 
			*/
			html += '<div class="' + playID + '" data-title="' + thisTemp.language['play'] + '">' + this.newCanvas(playID, bWidth, bHeight) + '</div>'; //播放按钮
			html += '<div class="' + pauseID + '" data-title="' + thisTemp.language['pause'] + '">' + this.newCanvas(pauseID, bWidth, bHeight) + '</div>'; //暂停按钮
			html += '<div class="' + dlineID + '-la"></div>'; //分隔线
			html += '<div class="' + frontID + '" data-title="' + thisTemp.language['front'] + '">' + this.newCanvas(frontID, bWidth, bHeight) + '</div>'; //前一集按钮
			html += '<div class="' + dlineID + '-lb"></div>'; //分隔线
			html += '<div class="' + nextID + '" data-title="' + thisTemp.language['next'] + '">' + this.newCanvas(nextID, bWidth, bHeight) + '</div>'; //下一集按钮
			html += '<div class="' + dlineID + '-lc"></div>'; //分隔线
			html += '<div class="' + timeTextID + '">' + timeInto + '</div>'; //时间文本
			html += '<div class="' + fullID + '" data-title="' + thisTemp.language['full'] + '">' + this.newCanvas(fullID, bWidth, bHeight) + '</div>'; //全屏按钮
			html += '<div class="' + escFullID + '" data-title="' + thisTemp.language['escFull'] + '">' + this.newCanvas(escFullID, bWidth, bHeight) + '</div>'; //退出全屏按钮
			html += '<div class="' + dlineID + '-ra"></div>'; //分隔线
			html += '<div class="' + definitionID + '" data-title="' + thisTemp.language['definition'] + '"></div>'; //清晰度容器
			html += '<div class="' + dlineID + '-rb"></div>'; //分隔线
			html += '<div class="' + playbackRateID + '" data-title="' + thisTemp.language['playbackRate'] + '"></div>'; //倍速
			html += '<div class="' + dlineID + '-rc"></div>'; //分隔线
			html += '<div class="' + volumeID + '"><div class="' + volumeDbgID + '"><div class="' + volumeBgID + '"><div class="' + volumeUpID + '"></div></div><div class="' + volumeBOID + '"><div class="' + volumeBWID + '"></div></div></div></div>'; //音量调节框,音量调节按钮
			html += '<div class="' + muteID + '" data-title="' + thisTemp.language['mute'] + '">' + this.newCanvas(muteID, bWidth, bHeight) + '</div>'; //静音按钮
			html += '<div class="' + escMuteID + '" data-title="' + thisTemp.language['escMute'] + '">' + this.newCanvas(escMuteID, bWidth, bHeight) + '</div>'; //退出静音按钮
			html += '<div class="' + dlineID + '-rd"></div>'; //分隔线
			this.getByElement(controlBarID).innerHTML = html;
			//构建进度条内容
			this.getByElement(timeProgressBgID).innerHTML = '<div class="' + loadProgressID + '"></div><div class="' + timeProgressID + '"></div>';
			this.getByElement(timeBOBGID).innerHTML = '<div class="' + timeBOID + '"><div class="' + timeBWID + '"></div></div>';
			//构建进度条内容结束
			this.getByElement(pauseCenterID).innerHTML = this.newCanvas(pauseCenterID, 80, 80); //构建中间暂停按钮
			this.getByElement(loadingID).innerHTML = this.newCanvas(loadingID, 60, 60); //构建中间缓冲时显示的图标
			this.getByElement(errorTextID).innerHTML = this.language['error']; //构建错误时显示的文本框
			//构建广告相关
			html = '<div class="' + adTimeID + '">' + this.language['adTime'].replace('{$second}', 0) + '</div>';
			html += '<div class="' + adMuteID + '">' + this.newCanvas(adMuteID, 30, 30) + '</div>';
			html += '<div class="' + adEscMuteID + '">' + this.newCanvas(adEscMuteID, 30, 30) + '</div>';
			html += '<div class="' + adSkipID + '"></div>';
			this.getByElement(adBarID).innerHTML = html;
			this.getByElement(adLinkID).innerHTML = this.language['adLink'];
			this.getByElement(adPauseCloseID).innerHTML = this.newCanvas(adPauseCloseID, 20, 20);
			if (this.ckplayerConfig['style']['logo']) {
				if (this.ckplayerConfig['style']['logo']['file']) {
					var logoFile = this.ckplayerConfig['style']['logo']['file'];
					if (logoFile.substr(0, 15) == 'data:image/png;' || logoFile.substr(0, 15) == 'data:image/jpg;' || logoFile.substr(0, 16) == 'data:image/jpeg;') {
						this.getByElement(logoID).innerHTML = '<img src="' + logoFile + '" border="0">'; //构建logo
					}
				}
			} else {
				this.getByElement(logoID).innerHTML = this.vars['logo'] || this.logo || ''; //构建logo
			}
			var pd = this.PD;
			//CB:Object：全局变量，将一些全局需要用到的元素统一放在CB对象里
			this.CB = {
				controlBarBg: this.getByElement(controlBarBgID, pd),
				controlBar: this.getByElement(controlBarID, pd),
				promptBg: this.getByElement(promptBgID, pd),
				prompt: this.getByElement(promptID, pd),
				timeProgressBg: this.getByElement(timeProgressBgID, pd),
				loadProgress: this.getByElement(loadProgressID, pd),
				timeProgress: this.getByElement(timeProgressID, pd),
				timeBoBg: this.getByElement(timeBOBGID, pd),
				timeButton: this.getByElement(timeBOID, pd),
				timeText: this.getByElement(timeTextID, pd),
				play: this.getByElement(playID, pd),
				front: this.getByElement(frontID, pd),
				next: this.getByElement(nextID, pd),
				pause: this.getByElement(pauseID, pd),
				definition: this.getByElement(definitionID, pd),
				definitionP: this.getByElement(definitionPID, pd),
				definitionLine: this.getByElement(dlineID + '-rb', pd),
				playbackrate: this.getByElement(playbackRateID, pd),
				playbackrateP: this.getByElement(playbackRatePID, pd),
				playbackrateLine: this.getByElement(dlineID + '-rc', pd),
				full: this.getByElement(fullID, pd),
				escFull: this.getByElement(escFullID, pd),
				mute: this.getByElement(muteID, pd),
				escMute: this.getByElement(escMuteID, pd),
				volume: this.getByElement(volumeID, pd),
				volumeBg: this.getByElement(volumeBgID, pd),
				volumeUp: this.getByElement(volumeUpID, pd),
				volumeBO: this.getByElement(volumeBOID, pd),
				pauseCenter: this.getByElement(pauseCenterID, pd),
				menu: this.getByElement(menuID),
				loading: this.getByElement(loadingID, pd),
				loadingCanvas: this.getByElement(loadingID + '-canvas', pd),
				errorText: this.getByElement(errorTextID, pd),
				logo: this.getByElement(logoID, pd),
				playLine: this.getByElement(dlineID + '-la', pd),
				frontLine: this.getByElement(dlineID + '-lb', pd),
				nextLine: this.getByElement(dlineID + '-lc', pd),
				fullLine: this.getByElement(dlineID + '-ra'),
				definitionLine: this.getByElement(dlineID + '-rb', pd),
				muteLine: this.getByElement(dlineID + '-rd', pd),
				adBackground: this.getByElement(adBackgroundID, pd),
				adElement: this.getByElement(adElementID, pd),
				adBar: this.getByElement(adBarID, pd),
				adSkip: this.getByElement(adSkipID, pd),
				adTime: this.getByElement(adTimeID, pd),
				adLink: this.getByElement(adLinkID, pd),
				adMute: this.getByElement(adMuteID, pd),
				adEscMute: this.getByElement(adEscMuteID, pd),
				adPauseClose: this.getByElement(adPauseCloseID, pd)
			};
			this.buttonWidth = {
				play: bWidth,
				full: bWidth,
				front: bWidth,
				next: bWidth,
				mute: bWidth
			};
			//定义界面元素的样式
			//控制栏背景
			this.css(controlBarBgID, {
				width: '100%',
				height: bHeight + 'px',
				backgroundColor: '#000000',
				position: 'absolute',
				bottom: '0px',
				filter: 'alpha(opacity:0.8)',
				opacity: '0.8',
				zIndex: '990'
			});
			//控制栏容器
			this.css(controlBarID, {
				width: '100%',
				height: bHeight + 'px',
				position: 'absolute',
				bottom: '0px',
				zIndex: '990'
			});
			//中间暂停按钮
			this.css(pauseCenterID, {
				width: '80px',
				height: '80px',
				borderRadius: '50%',
				position: 'absolute',
				display: 'none',
				cursor: 'pointer',
				zIndex: '996'
			});
			//loading
			this.css(loadingID, {
				width: '60px',
				height: '60px',
				position: 'absolute',
				display: 'none',
				zIndex: '996'
			});
			//出错文本框
			this.css(errorTextID, {
				width: '120px',
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontSize: '14px',
				textAlign: 'center',
				position: 'absolute',
				display: 'none',
				zIndex: '101',
				cursor: 'default',
				zIndex: '996'
			});
			//定义logo文字的样式
			this.css(logoID, {
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontFamily: 'Arial',
				fontSize: '28px',
				textAlign: 'center',
				position: 'absolute',
				float: 'left',
				left: '-1000px',
				top: '20px',
				zIndex: '996',
				filter: 'alpha(opacity:0.8)',
				opacity: '0.8',
				cursor: 'default'
			});

			this.css(this.CB['loadingCanvas'], {
				transform: 'rotate(0deg)',
				msTransform: 'rotate(0deg)',
				mozTransform: 'rotate(0deg)',
				webkitTransform: 'rotate(0deg)',
				oTransform: 'rotate(0deg)'
			});
			//定义提示语的样式
			this.css([promptBgID, promptID], {
				height: '30px',
				lineHeight: '30px',
				color: '#FFFFFF',
				fontSize: '14px',
				textAlign: 'center',
				position: 'absolute',
				borderRadius: '5px',
				paddingLeft: '5px',
				paddingRight: '5px',
				bottom: '0px',
				display: 'none',
				zIndex: '995'
			});
			this.css(promptBgID, {
				backgroundColor: '#000000',
				filter: 'alpha(opacity:0.5)',
				opacity: '0.5'
			});
			//时间进度条背景容器
			this.css(timeProgressBgID, {
				width: '100%',
				height: '6px',
				backgroundColor: '#3F3F3F',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '38px',
				zIndex: '888'
			});
			//加载进度和时间进度
			this.css([loadProgressID, timeProgressID], {
				width: '1px',
				height: '6px',
				position: 'absolute',
				bottom: '38px',
				top: '0px',
				zIndex: '991'
			});
			this.css(loadProgressID, 'backgroundColor', '#6F6F6F');
			this.css(timeProgressID, 'backgroundColor', bOverColor);
			//时间进度按钮
			this.css(timeBOBGID, {
				width: '100%',
				height: '14px',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '34px',
				cursor: 'pointer',
				zIndex: '992'
			});
			this.css(timeBOID, {
				width: '14px',
				height: '14px',
				overflow: 'hidden',
				borderRadius: '50%',
				backgroundColor: bBgColor,
				cursor: 'pointer',
				position: 'absolute',
				top: '0px',
				zIndex: '200'
			});
			this.css(timeBWID, {
				width: '8px',
				height: '8px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bOverColor,
				left: '3px',
				top: '3px'
			});
			this.css(timeTextID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				fontFamily: 'arial',
				fontSize: '16px',
				paddingLeft: '10px',
				float: 'left',
				overflow: 'hidden',
				cursor: 'default'
			});
			//分隔线
			this.css([dlineID + '-la', dlineID + '-lb', dlineID + '-lc', dlineID + '-ra', dlineID + '-rb', dlineID + '-rc', dlineID + '-rd'], {
				width: '0px',
				height: bHeight + 'px',
				overflow: 'hidden',
				borderLeft: '1px solid #303030',
				borderRight: '1px solid #151515',
				filter: 'alpha(opacity:0.9)',
				opacity: '0.9'
			});
			this.css([dlineID + '-la', dlineID + '-lb', dlineID + '-lc'], 'float', 'left');
			this.css([dlineID + '-ra', dlineID + '-rb', dlineID + '-rc', dlineID + '-rd'], 'float', 'right');
			this.css([dlineID + '-lb', dlineID + '-lc', dlineID + '-rb', dlineID + '-rc'], 'display', 'none');
			//播放/暂停/上一集/下一集按钮
			this.css([playID, pauseID, frontID, nextID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'left',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			this.css([frontID, nextID], 'display', 'none');
			//初始化判断播放/暂停按钮隐藏项
			this.initPlayPause();

			//设置静音/取消静音的按钮样式
			this.css([muteID, escMuteID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'right',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			if (this.vars['volume'] > 0) {
				this.css(escMuteID, 'display', 'none');
			} else {
				this.css(muteID, 'display', 'none');
			}
			if (!this.ckplayerConfig['config']['mobileVolumeBarShow'] && this.isMobile()) {
				this.css([muteID, escMuteID, volumeID, volumeDbgID, dlineID + '-rd'], {
					display: 'none'
				});
			}
			//音量调节框
			this.css([volumeID, volumeDbgID], {
				width: '110px',
				height: bHeight + 'px',
				overflow: 'hidden',
				float: 'right'
			});
			this.css(volumeDbgID, {
				position: 'absolute'
			});
			this.css([volumeBgID, volumeUpID], {
				width: '100px',
				height: '6px',
				overflow: 'hidden',
				borderRadius: '5px',
				cursor: 'pointer'
			});
			this.css(volumeBgID, {
				position: 'absolute',
				top: '16px'
			});
			this.css(volumeBgID, 'backgroundColor', '#666666');
			this.css(volumeUpID, 'backgroundColor', bOverColor);
			this.buttonWidth['volume'] = 100;
			//音量调节按钮
			this.css(volumeBOID, {
				width: '12px',
				height: '12px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bBgColor,
				top: '13px',
				left: '0px',
				cursor: 'pointer'
			});
			this.css(volumeBWID, {
				width: '6px',
				height: '6px',
				overflow: 'hidden',
				borderRadius: '50%',
				position: 'absolute',
				backgroundColor: bOverColor,
				left: '3px',
				top: '3px'
			});
			//清晰度容器
			this.css(definitionID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				float: 'right',
				fontSize: '14px',
				textAlign: 'center',
				overflow: 'hidden',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(definitionPID, {
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '4px',
				backgroundColor: '#000000',
				textAlign: 'center',
				zIndex: '995',
				cursor: 'pointer',
				display: 'none'
			});
			//倍速容器
			this.css(playbackRateID, {
				lineHeight: bHeight + 'px',
				color: '#FFFFFF',
				float: 'right',
				fontSize: '14px',
				textAlign: 'center',
				overflow: 'hidden',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(playbackRatePID, {
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '4px',
				backgroundColor: '#000000',
				textAlign: 'center',
				zIndex: '995',
				cursor: 'pointer',
				display: 'none'
			});
			//设置全屏/退出全屏按钮样式
			this.css([fullID, escFullID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'right',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			this.css(escFullID, 'display', 'none');
			//设置广告背景层样式
			this.css(adBackgroundID, {
				width: '100%',
				height: '100%',
				backgroundColor: '#000000',
				position: 'absolute',
				top: '0px',
				zIndex: '997',
				display: 'none'
			});
			this.css(adElementID, {
				position: 'absolute',
				overflow: 'hidden',
				top: '0px',
				zIndex: '998',
				float: 'center',
				display: 'none'
			});
			this.css(adBarID, {
				position: 'absolute',
				overflow: 'hidden',
				top: '10px',
				right: '10px',
				zIndex: '999',
				textAlign: 'right',
				display: 'none'
			});
			this.css(adTimeID, {
				backgroundColor: '#000000',
				color: '#FF0000',
				paddingLeft: '10px',
				paddingRight: '10px',
				lineHeight: (bHeight - 8) + 'px',
				marginLeft: '5px',
				float: 'right',
				cursor: 'pointer'
			});
			this.css([adMuteID, adEscMuteID], {
				backgroundColor: '#000000',
				width: '30px',
				height: '30px',
				marginLeft: '5px',
				float: 'right',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(adSkipID, {
				backgroundColor: '#000000',
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				paddingLeft: '10px',
				paddingRight: '10px',
				float: 'right',
				display: 'none',
				cursor: 'pointer'
			});
			this.css(adLinkID, {
				backgroundColor: '#ea5503',
				lineHeight: (bHeight - 8) + 'px',
				color: '#FFFFFF',
				paddingLeft: '10px',
				paddingRight: '10px',
				position: 'absolute',
				overflow: 'hidden',
				bottom: '10px',
				right: '10px',
				zIndex: '999',
				display: 'none'
			});
			this.css(adPauseCloseID, {
				backgroundColor: '#f7f7f7',
				//f8f7f7
				widht: '20px',
				height: '20px',
				position: 'absolute',
				overflow: 'hidden',
				zIndex: '999',
				top: '60px',
				left: '30px',
				borderRadius: '20px',
				display: 'none',
				cursor: 'pointer'
			});
			//构建各按钮的形状
			//播放按钮
			var cPlay = this.getByElement(playID + '-canvas').getContext('2d');
			var cPlayFillRect = function() {
				thisTemp.canvasFill(cPlay, [[12, 10], [29, 19], [12, 28]]);
			};
			cPlay.fillStyle = bBgColor;
			cPlayFillRect();
			var cPlayOver = function(event) {
				cPlay.clearRect(0, 0, bWidth, bHeight);
				cPlay.fillStyle = bOverColor;
				cPlayFillRect();
			};
			var cPlayOut = function(event) {
				cPlay.clearRect(0, 0, bWidth, bHeight);
				cPlay.fillStyle = bBgColor;
				cPlayFillRect();
			};

			this.addListenerInside('mouseover', cPlayOver, this.getByElement(playID + '-canvas'));
			this.addListenerInside('mouseout', cPlayOut, this.getByElement(playID + '-canvas'));
			//暂停按钮
			var cPause = this.getByElement(pauseID + '-canvas').getContext('2d');
			var cPauseFillRect = function() {
				thisTemp.canvasFillRect(cPause, [[10, 10, 5, 18], [22, 10, 5, 18]]);
			};
			cPause.fillStyle = bBgColor;
			cPauseFillRect();
			var cPauseOver = function(event) {
				cPause.clearRect(0, 0, bWidth, bHeight);
				cPause.fillStyle = bOverColor;
				cPauseFillRect();
			};
			var cPauseOut = function(event) {
				cPause.clearRect(0, 0, bWidth, bHeight);
				cPause.fillStyle = bBgColor;
				cPauseFillRect();
			};
			this.addListenerInside('mouseover', cPauseOver, this.getByElement(pauseID + '-canvas'));
			this.addListenerInside('mouseout', cPauseOut, this.getByElement(pauseID + '-canvas'));
			//前一集按钮
			var cFront = this.getByElement(frontID + '-canvas').getContext('2d');
			var cFrontFillRect = function() {
				thisTemp.canvasFill(cFront, [[16, 19], [30, 10], [30, 28]]);
				thisTemp.canvasFillRect(cFront, [[8, 10, 5, 18]]);
			};
			cFront.fillStyle = bBgColor;
			cFrontFillRect();
			var cFrontOver = function(event) {
				cFront.clearRect(0, 0, bWidth, bHeight);
				cFront.fillStyle = bOverColor;
				cFrontFillRect();
			};
			var cFrontOut = function(event) {
				cFront.clearRect(0, 0, bWidth, bHeight);
				cFront.fillStyle = bBgColor;
				cFrontFillRect();
			};

			this.addListenerInside('mouseover', cFrontOver, this.getByElement(frontID + '-canvas'));
			this.addListenerInside('mouseout', cFrontOut, this.getByElement(frontID + '-canvas'));
			//下一集按钮
			var cNext = this.getByElement(nextID + '-canvas').getContext('2d');
			var cNextFillRect = function() {
				thisTemp.canvasFill(cNext, [[8, 10], [22, 19], [8, 28]]);
				thisTemp.canvasFillRect(cNext, [[25, 10, 5, 18]]);
			};
			cNext.fillStyle = bBgColor;
			cNextFillRect();
			var cNextOver = function(event) {
				cNext.clearRect(0, 0, bWidth, bHeight);
				cNext.fillStyle = bOverColor;
				cNextFillRect();
			};
			var cNextOut = function(event) {
				cNext.clearRect(0, 0, bWidth, bHeight);
				cNext.fillStyle = bBgColor;
				cNextFillRect();
			};
			this.addListenerInside('mouseover', cNextOver, this.getByElement(nextID + '-canvas'));
			this.addListenerInside('mouseout', cNextOut, this.getByElement(nextID + '-canvas'));
			//全屏按钮
			var cFull = this.getByElement(fullID + '-canvas').getContext('2d');
			var cFullFillRect = function() {
				thisTemp.canvasFillRect(cFull, [[19, 10, 9, 3], [25, 13, 3, 6], [10, 19, 3, 9], [13, 25, 6, 3]]);
			};
			cFull.fillStyle = bBgColor;
			cFullFillRect();
			var cFullOver = function() {
				cFull.clearRect(0, 0, bWidth, bHeight);
				cFull.fillStyle = bOverColor;
				cFullFillRect();
			};
			var cFullOut = function() {
				cFull.clearRect(0, 0, bWidth, bHeight);
				cFull.fillStyle = bBgColor;
				cFullFillRect();
			};
			this.addListenerInside('mouseover', cFullOver, this.getByElement(fullID + '-canvas'));
			this.addListenerInside('mouseout', cFullOut, this.getByElement(fullID + '-canvas'));
			//定义退出全屏按钮样式
			var cEscFull = this.getByElement(escFullID + '-canvas').getContext('2d');
			var cEscFullFillRect = function() {
				thisTemp.canvasFillRect(cEscFull, [[20, 9, 3, 9], [23, 15, 6, 3], [9, 20, 9, 3], [15, 23, 3, 6]]);
			};
			cEscFull.fillStyle = bBgColor;
			cEscFullFillRect();
			var cEscFullOver = function() {
				cEscFull.clearRect(0, 0, bWidth, bHeight);
				cEscFull.fillStyle = bOverColor;
				cEscFullFillRect();
			};
			var cEscFullOut = function() {
				cEscFull.clearRect(0, 0, bWidth, bHeight);
				cEscFull.fillStyle = bBgColor;
				cEscFullFillRect();
			};
			this.addListenerInside('mouseover', cEscFullOver, this.getByElement(escFullID + '-canvas'));
			this.addListenerInside('mouseout', cEscFullOut, this.getByElement(escFullID + '-canvas'));
			//定义静音按钮的样式
			var cMute = this.getByElement(muteID + '-canvas').getContext('2d');
			var cMuteFillRect = function() {
				thisTemp.canvasFill(cMute, [[10, 15], [15, 15], [21, 10], [21, 28], [15, 23], [10, 23]]);
				thisTemp.canvasFillRect(cMute, [[23, 15, 2, 8], [27, 10, 2, 18]]);
			};
			cMute.fillStyle = bBgColor;
			cMuteFillRect();
			var cMuteOver = function() {
				cMute.clearRect(0, 0, bWidth, bHeight);
				cMute.fillStyle = bOverColor;
				cMuteFillRect();
			};
			var cMuteOut = function() {
				cMute.clearRect(0, 0, bWidth, bHeight);
				cMute.fillStyle = bBgColor;
				cMuteFillRect();
			};
			this.addListenerInside('mouseover', cMuteOver, this.getByElement(muteID + '-canvas'));
			this.addListenerInside('mouseout', cMuteOut, this.getByElement(muteID + '-canvas'));
			//定义取消广告静音按钮样式
			var cEscMute = this.getByElement(escMuteID + '-canvas').getContext('2d');
			var cEscMuteFillRect = function() {
				thisTemp.canvasFill(cEscMute, [[10, 15], [15, 15], [21, 10], [21, 28], [15, 23], [10, 23]]);
				thisTemp.canvasFill(cEscMute, [[23, 13], [24, 13], [33, 25], [32, 25]]);
				thisTemp.canvasFill(cEscMute, [[32, 13], [33, 13], [24, 25], [23, 25]]);
			};
			cEscMute.fillStyle = bBgColor;
			cEscMuteFillRect();
			var cEscMuteOver = function() {
				cEscMute.clearRect(0, 0, bWidth, bHeight);
				cEscMute.fillStyle = bOverColor;
				cEscMuteFillRect();
			};
			var cEscMuteOut = function() {
				cEscMute.clearRect(0, 0, bWidth, bHeight);
				cEscMute.fillStyle = bBgColor;
				cEscMuteFillRect();
			};
			this.addListenerInside('mouseover', cEscMuteOver, this.getByElement(escMuteID + '-canvas'));
			this.addListenerInside('mouseout', cEscMuteOut, this.getByElement(escMuteID + '-canvas'));
			//定义广告静音按钮的样式
			var cAdMute = this.getByElement(adMuteID + '-canvas').getContext('2d');
			var cAdMuteFillRect = function() {
				thisTemp.canvasFill(cAdMute, [[8, 12], [12, 12], [16, 8], [16, 21], [12, 18], [8, 18]]);
				thisTemp.canvasFillRect(cAdMute, [[18, 12, 2, 6], [21, 8, 2, 14]]);
			};
			cAdMute.fillStyle = bBgColor;
			cAdMuteFillRect();
			var cAdMuteOver = function() {
				cAdMute.clearRect(0, 0, bWidth, bHeight);
				cAdMute.fillStyle = bOverColor;
				cAdMuteFillRect();
			};
			var cAdMuteOut = function() {
				cAdMute.clearRect(0, 0, bWidth, bHeight);
				cAdMute.fillStyle = bBgColor;
				cAdMuteFillRect();
			};
			this.addListenerInside('mouseover', cAdMuteOver, this.getByElement(adMuteID + '-canvas'));
			this.addListenerInside('mouseout', cAdMuteOut, this.getByElement(adMuteID + '-canvas'));
			//定义取消静音广告按钮样式
			var cAdEscMute = this.getByElement(adEscMuteID + '-canvas').getContext('2d');
			var cAdEscMuteFillRect = function() {
				thisTemp.canvasFill(cAdEscMute, [[8, 12], [12, 12], [16, 8], [16, 21], [12, 18], [8, 18]]);
				thisTemp.canvasFill(cAdEscMute, [[18, 10], [20, 10], [26, 20], [24, 20]]);
				thisTemp.canvasFill(cAdEscMute, [[25, 10], [27, 10], [20, 20], [18, 20]]);
			};
			cAdEscMute.fillStyle = bBgColor;
			cAdEscMuteFillRect();
			var cAdEscMuteOver = function() {
				cAdEscMute.clearRect(0, 0, bWidth, bHeight);
				cAdEscMute.fillStyle = bOverColor;
				cAdEscMuteFillRect();
			};
			var cAdEscMuteOut = function() {
				cAdEscMute.clearRect(0, 0, bWidth, bHeight);
				cAdEscMute.fillStyle = bBgColor;
				cAdEscMuteFillRect();
			};
			this.addListenerInside('mouseover', cAdEscMuteOver, this.getByElement(adEscMuteID + '-canvas'));
			this.addListenerInside('mouseout', cAdEscMuteOut, this.getByElement(adEscMuteID + '-canvas'));
			//定义暂停广告关闭按钮
			var adPauseClose = this.getByElement(adPauseCloseID + '-canvas').getContext('2d');
			var adPauseCloseFillRect = function() {
				thisTemp.canvasFill(adPauseClose, [[4, 6], [6, 6], [16, 15], [14, 15]]);
				thisTemp.canvasFill(adPauseClose, [[14, 6], [16, 6], [6, 15], [4, 15]]);
			};
			adPauseClose.fillStyle = '#404856';
			adPauseCloseFillRect();
			var adPauseCloseOver = function() {
				adPauseClose.clearRect(0, 0, bWidth, bHeight);
				adPauseClose.fillStyle = bOverColor;
				adPauseCloseFillRect();
			};
			var adPauseCloseOut = function() {
				adPauseClose.clearRect(0, 0, bWidth, bHeight);
				adPauseClose.fillStyle = '#404856';
				adPauseCloseFillRect();
			};
			this.addListenerInside('mouseover', adPauseCloseOver, this.getByElement(adPauseCloseID + '-canvas'));
			this.addListenerInside('mouseout', adPauseCloseOut, this.getByElement(adPauseCloseID + '-canvas'));
			//定义loading样式
			var cLoading = this.getByElement(loadingID + '-canvas').getContext('2d');
			var cLoadingFillRect = function() {
				cLoading.save();
				var grad = cLoading.createLinearGradient(0, 0, 60, 60);
				grad.addColorStop(0, bBgColor);
				var grad2 = cLoading.createLinearGradient(0, 0, 80, 60);
				grad2.addColorStop(1, bOverColor);
				var grad3 = cLoading.createLinearGradient(0, 0, 80, 60);
				grad3.addColorStop(1, '#FF9900');
				var grad4 = cLoading.createLinearGradient(0, 0, 80, 60);
				grad4.addColorStop(1, '#CC3300');
				cLoading.strokeStyle = grad; //设置描边样式
				cLoading.lineWidth = 8; //设置线宽
				cLoading.beginPath(); //路径开始
				cLoading.arc(30, 30, 25, 0, 0.4 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.closePath(); //路径结束
				cLoading.beginPath(); //路径开始
				cLoading.strokeStyle = grad2; //设置描边样式
				cLoading.arc(30, 30, 25, 0.5 * Math.PI, 0.9 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.beginPath(); //路径开始
				cLoading.strokeStyle = grad3; //设置描边样式
				cLoading.arc(30, 30, 25, Math.PI, 1.4 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.beginPath(); //路径开始
				cLoading.strokeStyle = grad4; //设置描边样式
				cLoading.arc(30, 30, 25, 1.5 * Math.PI, 1.9 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cLoading.stroke(); //绘制
				cLoading.closePath(); //路径结束
				cLoading.restore();
			};
			cLoading.fillStyle = bBgColor;
			cLoadingFillRect();
			//定义中间暂停按钮的样式
			var cPauseCenter = this.getByElement(pauseCenterID + '-canvas').getContext('2d');
			var cPauseCenterFillRect = function() {
				thisTemp.canvasFill(cPauseCenter, [[28, 22], [59, 38], [28, 58]]);
				/* 指定几个颜色 */
				cPauseCenter.save();
				cPauseCenter.lineWidth = 5; //设置线宽
				cPauseCenter.beginPath(); //路径开始
				cPauseCenter.arc(40, 40, 35, 0, 2 * Math.PI, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
				cPauseCenter.stroke(); //绘制
				cPauseCenter.closePath(); //路径结束
				cPauseCenter.restore();
			};
			cPauseCenter.fillStyle = bBgColor;
			cPauseCenter.strokeStyle = bBgColor;
			cPauseCenterFillRect();
			var cPauseCenterOver = function() {
				cPauseCenter.clearRect(0, 0, 80, 80);
				cPauseCenter.fillStyle = bOverColor;
				cPauseCenter.strokeStyle = bOverColor;
				cPauseCenterFillRect();
			};
			var cPauseCenterOut = function() {
				cPauseCenter.clearRect(0, 0, 80, 80);
				cPauseCenter.fillStyle = bBgColor;
				cPauseCenter.strokeStyle = bBgColor;
				cPauseCenterFillRect();
			};
			this.addListenerInside('mouseover', cPauseCenterOver, this.getByElement(pauseCenterID + '-canvas'));
			this.addListenerInside('mouseout', cPauseCenterOut, this.getByElement(pauseCenterID + '-canvas'));

			//鼠标经过/离开音量调节按钮
			var volumeBOOver = function() {
				thisTemp.css(volumeBOID, 'backgroundColor', bOverColor);
				thisTemp.css(volumeBWID, 'backgroundColor', bBgColor);
			};
			var volumeBOOut = function() {
				thisTemp.css(volumeBOID, 'backgroundColor', bBgColor);
				thisTemp.css(volumeBWID, 'backgroundColor', bOverColor);
			};
			this.addListenerInside('mouseover', volumeBOOver, this.getByElement(volumeBOID));
			this.addListenerInside('mouseout', volumeBOOut, this.getByElement(volumeBOID));
			//鼠标经过/离开进度按钮
			var timeBOOver = function() {
				thisTemp.css(timeBOID, 'backgroundColor', bOverColor);
				thisTemp.css(timeBWID, 'backgroundColor', bBgColor);
			};
			var timeBOOut = function() {
				thisTemp.css(timeBOID, 'backgroundColor', bBgColor);
				thisTemp.css(timeBWID, 'backgroundColor', bOverColor);
			};
			this.addListenerInside('mouseover', timeBOOver, this.getByElement(timeBOID));
			this.addListenerInside('mouseout', timeBOOut, this.getByElement(timeBOID));

			this.addButtonEvent(); //注册按钮及音量调节，进度操作事件
			this.newMenu(); //单独设置右键的样式和事件
			this.controlBarHide(); //单独注册控制栏隐藏事件
			this.keypress(); //单独注册键盘事件
			//初始化音量调节框
			this.changeVolume(this.vars['volume']);
			//初始化判断是否需要显示上一集和下一集按钮
			this.showFrontNext();
			setTimeout(function() {
				thisTemp.elementCoordinate(); //调整中间暂停按钮/loading的位置/error的位置
			},
			100);
			this.checkBarWidth();
			var resize = function() {
				thisTemp.elementCoordinate();
				thisTemp.timeUpdateHandler();
				thisTemp.changeLoad();
				thisTemp.checkBarWidth();
				thisTemp.changeElementCoor(); //修改新加元件的坐标
				thisTemp.changePrompt();
				thisTemp.adPauseCoor();
				thisTemp.adOtherCoor();
			};
			this.addListenerInside('resize', resize, window);
		},
		/*
			内部函数
			创建按钮，使用canvas画布
		*/
		newCanvas: function(id, width, height) {
			return '<canvas class="' + id + '-canvas" width="' + width + '" height="' + height + '"></canvas>';
		},
		/*
			内部函数
			注册按钮，音量调节框，进度操作框事件
		*/
		addButtonEvent: function() {
			var thisTemp = this;
			//定义按钮的单击事件
			var playClick = function(event) {
				thisTemp.videoPlay();
				thisTemp.sendJS('clickEvent', 'actionScript->videoPlay');
			};
			this.addListenerInside('click', playClick, this.CB['play']);
			this.addListenerInside('click', playClick, this.CB['pauseCenter']);
			var pauseClick = function(event) {
				thisTemp.videoPause();
				thisTemp.sendJS('clickEvent', 'actionScript->videoPause');
			};
			this.addListenerInside('click', pauseClick, this.CB['pause']);
			var frontClick = function(event) {
				if (thisTemp.vars['front']) {
					eval(thisTemp.vars['front'] + '()');
					thisTemp.sendJS('clickEvent', 'actionScript->' + thisTemp.vars['front']);
				}
			};
			this.addListenerInside('click', frontClick, this.CB['front']);
			var nextClick = function(event) {
				if (thisTemp.vars['next']) {
					eval(thisTemp.vars['next'] + '()');
					thisTemp.sendJS('clickEvent', 'actionScript->' + thisTemp.vars['next']);
				}
			};
			this.addListenerInside('click', nextClick, this.CB['next']);
			var muteClick = function(event) {
				thisTemp.videoMute();
				thisTemp.sendJS('clickEvent', 'actionScript->videoMute');
			};
			this.addListenerInside('click', muteClick, this.CB['mute']);
			var escMuteClick = function(event) {
				thisTemp.videoEscMute();
				thisTemp.sendJS('clickEvent', 'actionScript->videoEscMute');
			};
			this.addListenerInside('click', escMuteClick, this.CB['escMute']);
			var fullClick = function(event) {
				thisTemp.fullScreen();
				thisTemp.sendJS('clickEvent', 'actionScript->fullScreen');
			};
			this.addListenerInside('click', fullClick, this.CB['full']);
			var escFullClick = function(event) {
				thisTemp.quitFullScreen();
				thisTemp.sendJS('clickEvent', 'actionScript->quitFullScreen');
			};
			this.addListenerInside('click', escFullClick, this.CB['escFull']);
			var adSkipClick = function(event) {
				if (thisTemp.CB['adSkip'].innerHTML == thisTemp.language['skipAd']) {
					thisTemp.runFunction(thisTemp.config['adSkipClick']);
				}
			};
			this.addListenerInside('click', adSkipClick, this.CB['adSkip']);
			var adMuteClick = function(event) {
				thisTemp.adMuteFunction();
			};
			this.addListenerInside('click', adMuteClick, this.CB['adMute']);
			var adEscMuteClick = function(event) {
				thisTemp.adEscMuteFunction();
			};
			this.addListenerInside('click', adEscMuteClick, this.CB['adEscMute']);
			var adPauseCloseClick = function(event) {
				thisTemp.adPauseCloseFunction();
			};
			this.addListenerInside('click', adPauseCloseClick, this.CB['adPauseClose']);
			//定义各个按钮的鼠标经过/离开事件
			var promptHide = function(event) {
				thisTemp.promptShow(false);
			};
			var playOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['play']);
			};
			this.addListenerInside('mouseover', playOver, this.CB['play']);
			this.addListenerInside('mouseout', promptHide, this.CB['play']);
			var pauseOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['pause']);
			};
			this.addListenerInside('mouseover', pauseOver, this.CB['pause']);
			this.addListenerInside('mouseout', promptHide, this.CB['pause']);
			var frontOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['front']);
			};
			this.addListenerInside('mouseover', frontOver, this.CB['front']);
			this.addListenerInside('mouseout', promptHide, this.CB['front']);
			var nextOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['next']);
			};
			this.addListenerInside('mouseover', nextOver, this.CB['next']);
			this.addListenerInside('mouseout', promptHide, this.CB['next']);
			var muteOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['mute']);
			};
			this.addListenerInside('mouseover', muteOver, this.CB['mute']);
			this.addListenerInside('mouseout', promptHide, this.CB['mute']);
			var escMuteOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['escMute']);
			};
			this.addListenerInside('mouseover', escMuteOver, this.CB['escMute']);
			this.addListenerInside('mouseout', promptHide, this.CB['escMute']);
			var fullOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['full']);
			};
			this.addListenerInside('mouseover', fullOver, this.CB['full']);
			this.addListenerInside('mouseout', promptHide, this.CB['full']);
			var escFullOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['escFull']);
			};
			this.addListenerInside('mouseover', escFullOver, this.CB['escFull']);
			this.addListenerInside('mouseout', promptHide, this.CB['escFull']);
			var definitionOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['definition']);
			};
			this.addListenerInside('mouseover', definitionOver, this.CB['definition']);
			this.addListenerInside('mouseout', promptHide, this.CB['definition']);
			var playbackrateOver = function(event) {
				thisTemp.promptShow(thisTemp.CB['playbackrate']);
			};
			this.addListenerInside('mouseover', playbackrateOver, this.CB['playbackrate']);
			this.addListenerInside('mouseout', promptHide, this.CB['playbackrate']);
			//定义音量和进度按钮的滑块事件
			var volumePrompt = function(vol) {
				var volumeBOXY = thisTemp.getCoor(thisTemp.CB['volumeBO']);
				var promptObj = {
					title: thisTemp.language['volume'] + vol + '%',
					x: volumeBOXY['x'] + thisTemp.CB['volumeBO'].offsetWidth * 0.5,
					y: volumeBOXY['y']
				};
				thisTemp.promptShow(false, promptObj);
			};
			var volumeObj = {
				slider: this.CB['volumeBO'],
				follow: this.CB['volumeUp'],
				refer: this.CB['volumeBg'],
				grossValue: 'volume',
				pd: true,
				startFun: function(vol) {},
				monitorFun: function(vol) {
					thisTemp.changeVolume(vol * 0.01, false, false);
					volumePrompt(vol);
				},
				endFun: function(vol) {},
				overFun: function(vol) {
					volumePrompt(vol);
				}
			};
			this.slider(volumeObj);
			var volumeClickObj = {
				refer: this.CB['volumeBg'],
				grossValue: 'volume',
				fun: function(vol) {
					thisTemp.changeVolume(vol * 0.01, true, true);
				}
			};
			this.progressClick(volumeClickObj);
			this.timeButtonMouseDown(); //用单击的函数来判断是否需要建立控制栏监听
			//鼠标经过/离开音量调节框时的
			var volumeBgMove = function(event) {
				var volumeBgXY = thisTemp.getCoor(thisTemp.CB['volumeBg']);
				var eventX = thisTemp.client(event)['x'];
				var eventVolume = parseInt((eventX - volumeBgXY['x']) * 100 / thisTemp.CB['volumeBg'].offsetWidth);
				var buttonPromptObj = {
					title: thisTemp.language['volume'] + eventVolume + '%',
					x: eventX,
					y: volumeBgXY['y']
				};
				thisTemp.promptShow(false, buttonPromptObj);
			};
			this.addListenerInside('mousemove', volumeBgMove, this.CB['volumeBg']);
			this.addListenerInside('mouseout', promptHide, this.CB['volumeBg']);
			this.addListenerInside('mouseout', promptHide, this.CB['volumeBO']);
			//注册清晰度相关事件
			this.addDefListener();
			//注册倍速相关事件
			this.addPlaybackrate();
		},
		/*
			内部函数
			注册单击视频动作
		*/
		videoClick: function() {
			var thisTemp = this;
			var clearTimerClick = function() {
				if (thisTemp.timerClick != null) {
					if (thisTemp.timerClick.runing) {
						thisTemp.timerClick.stop();
					}
					thisTemp.timerClick = null;
				}
			};
			var timerClickFun = function() {
				clearTimerClick();
				thisTemp.isClick = false;
				if (thisTemp.adPlayerPlay) {
					var ad = thisTemp.getNowAdvertisements();
					try {
						if (ad['link'] != '') {
							window.open(ad['link']);
						}
						thisTemp.ajaxSuccessNull(ad['clickMonitor']);
					} catch(event) {}
				} else {
					if (thisTemp.ckplayerConfig['config']['click']) {
						thisTemp.playOrPause();
					}
				}

			};
			clearTimerClick();
			if (this.isClick) {
				this.isClick = false;
				if (thisTemp.ckplayerConfig['config']['doubleClick']) {
					if (!this.full) {
						thisTemp.fullScreen();
					} else {
						thisTemp.quitFullScreen();
					}
				}

			} else {
				this.isClick = true;
				this.timerClick = new this.timer(300, timerClickFun, 1)
				//this.timerClick.start();
			}

		},
		/*
			内部函数
			注册鼠标经过进度滑块的事件
		*/
		timeButtonMouseDown: function() {
			var thisTemp = this;
			var timePrompt = function(time) {
				if (isNaN(time)) {
					time = 0;
				}
				var timeButtonXY = thisTemp.getCoor(thisTemp.CB['timeButton']);
				var promptObj = {
					title: thisTemp.formatTime(time),
					x: timeButtonXY['x'] - thisTemp.pdCoor['x'] + thisTemp.CB['timeButton'].offsetWidth * 0.5,
					y: timeButtonXY['y'] - thisTemp.pdCoor['y']
				};
				thisTemp.promptShow(false, promptObj);
			};
			var timeObj = {
				slider: this.CB['timeButton'],
				follow: this.CB['timeProgress'],
				refer: this.CB['timeBoBg'],
				grossValue: 'time',
				pd: false,
				startFun: function(time) {
					thisTemp.isTimeButtonMove = false;
				},
				monitorFun: function(time) {},
				endFun: function(time) {
					if (thisTemp.V) {
						if (thisTemp.V.duration > 0) {
							thisTemp.needSeek = 0;
							thisTemp.videoSeek(parseInt(time));
						}
					}
				},
				overFun: function(time) {
					timePrompt(time);
				}
			};
			var timeClickObj = {
				refer: this.CB['timeBoBg'],
				grossValue: 'time',
				fun: function(time) {
					if (thisTemp.V) {
						if (thisTemp.V.duration > 0) {
							thisTemp.needSeek = 0;
							thisTemp.videoSeek(parseInt(time));
						}
					}
				}
			};
			var timeBoBgmousemove = function(event) {
				var timeBoBgXY = thisTemp.getCoor(thisTemp.CB['timeBoBg']);
				var eventX = thisTemp.client(event)['x'];
				var eventTime = parseInt((eventX - timeBoBgXY['x']) * thisTemp.V.duration / thisTemp.CB['timeBoBg'].offsetWidth);
				var buttonPromptObj = {
					title: thisTemp.formatTime(eventTime),
					x: eventX,
					y: timeBoBgXY['y']
				};
				thisTemp.promptShow(false, buttonPromptObj);
				var def = false;
				if (!thisTemp.isUndefined(thisTemp.CB['definitionP'])) {
					if (thisTemp.css(thisTemp.CB['definitionP'], 'display') != 'block') {
						def = true;
					}
				}
				if (thisTemp.vars['preview'] != null && def) {
					buttonPromptObj['time'] = eventTime;
					thisTemp.preview(buttonPromptObj);
				}
			};
			var promptHide = function(event) {
				thisTemp.promptShow(false);
				if (thisTemp.previewDiv != null) {
					thisTemp.css([thisTemp.previewDiv, thisTemp.previewTop], 'display', 'none');
				}
			};
			if (!this.vars['live']) { //如果不是直播
				this.isTimeButtonDown = true;
				this.addListenerInside('mousemove', timeBoBgmousemove, this.CB['timeBoBg']);
				this.addListenerInside('mouseout', promptHide, this.CB['timeBoBg']);
			} else {
				this.isTimeButtonDown = false;
				timeObj['removeListenerInside'] = true;
				timeClickObj['removeListenerInside'] = true;
			}
			this.slider(timeObj);
			this.progressClick(timeClickObj);

		},
		/*
			内部函数
			注册调节框上单击事件，包含音量调节框和播放时度调节框
		*/
		progressClick: function(obj) {
			/*
				refer:参考对象
				fun:返回函数
				refer:参考元素，即背景
				grossValue:调用的参考值类型
				pd:
			*/
			//建立参考元素的mouseClick事件，用来做为鼠标在其上按下时触发的状态
			var thisTemp = this;
			var referMouseClick = function(event) {
				var referX = thisTemp.client(event)['x'] - thisTemp.getCoor(obj['refer'])['x'];
				var rWidth = obj['refer'].offsetWidth;
				var grossValue = 0;
				if (obj['grossValue'] == 'volume') {
					grossValue = 100;
				} else {
					if (thisTemp.V) {
						grossValue = thisTemp.V.duration;
					}
				}
				var nowZ = parseInt(referX * grossValue / rWidth);
				if (obj['fun']) {
					if (obj['grossValue'] === 'time') {
						var sliderXY = thisTemp.getCoor(thisTemp.CB['timeButton']);
						sliderLeft = sliderXY['x'];
						if (!thisTemp.checkSlideLeft(referX, sliderLeft, rWidth)) {
							return;
						}
						var bimeButtonWB = thisTemp.CB['timeButton'].offsetWidth * 0.5;
						thisTemp.css(thisTemp.CB['timeButton'], 'left', (referX - bimeButtonWB) + 'px');
						thisTemp.css(thisTemp.CB['timeProgress'], 'width', (referX) + 'px');
					}
					obj['fun'](nowZ);
				}
			};
			if (this.isUndefined(obj['removeListenerInside'])) {
				this.addListenerInside('click', referMouseClick, obj['refer']);
			} else {
				this.removeListenerInside('click', referMouseClick, obj['refer']);
			}

		},

		/*
			内部函数
			共用的注册滑块事件
		*/
		slider: function(obj) {
			/*
				obj={
					slider:滑块元素
					follow:跟随滑块的元素
					refer:参考元素，即背景
					grossValue:调用的参考值类型
					startFun:开始调用的元素
					monitorFun:监听函数
					endFun:结束调用的函数
					overFun:鼠标放上去后调用的函数
					pd:是否需要修正
				}
			*/
			var thisTemp = this;
			var clientX = 0,
			criterionWidth = 0,
			sliderLeft = 0,
			referLeft = 0;
			var value = 0;
			var calculation = function() { //根据滑块的left计算百分比
				var sLeft = parseInt(thisTemp.css(obj['slider'], 'left'));
				var rWidth = obj['refer'].offsetWidth - obj['slider'].offsetWidth;
				var grossValue = 0;
				if (thisTemp.isUndefined(sLeft) || isNaN(sLeft)) {
					sLeft = 0;
				}
				if (obj['grossValue'] == 'volume') {
					grossValue = 100;
				} else {
					if (thisTemp.V) {
						grossValue = thisTemp.V.duration;
					}
				}
				return parseInt(sLeft * grossValue / rWidth);
			};
			var mDown = function(event) {
				thisTemp.addListenerInside('mousemove', mMove, document);
				thisTemp.addListenerInside('mouseup', mUp, document);
				var referXY = thisTemp.getCoor(obj['refer']);
				var sliderXY = thisTemp.getCoor(obj['slider']);
				clientX = thisTemp.client(event)['x'];
				referLeft = referXY['x'];
				sliderLeft = sliderXY['x'];
				criterionWidth = clientX - sliderLeft;
				if (obj['startFun']) {
					obj['startFun'](calculation());
				}
			};
			var mMove = function(event) {
				clientX = thisTemp.client(event)['x'];
				var newX = clientX - criterionWidth - referLeft;
				if (newX < 0) {
					newX = 0;
				}
				if (newX > obj['refer'].offsetWidth - obj['slider'].offsetWidth) {
					newX = obj['refer'].offsetWidth - obj['slider'].offsetWidth;
				}
				if (obj['slider'] === thisTemp.CB['timeButton']) {
					if (!thisTemp.checkSlideLeft(newX, sliderLeft, obj['refer'].offsetWidth)) {
						return;
					}
				}
				thisTemp.css(obj['slider'], 'left', newX + 'px');
				thisTemp.css(obj['follow'], 'width', (newX + obj['slider'].offsetWidth * 0.5) + 'px');
				var nowZ = calculation();
				if (obj['monitorFun']) {
					obj['monitorFun'](nowZ);
				}
			};
			var mUp = function(event) {
				thisTemp.removeListenerInside('mousemove', mMove, document);
				thisTemp.removeListenerInside('mouseup', mUp, document);
				if (obj['endFun']) {
					obj['endFun'](calculation());
				}
			};
			var mOver = function(event) {
				if (obj['overFun']) {
					obj['overFun'](calculation());
				}

			};
			if (this.isUndefined(obj['removeListenerInside'])) {
				this.addListenerInside('mousedown', mDown, obj['slider']);
				this.addListenerInside('mouseover', mOver, obj['slider']);
			} else {
				this.removeListenerInside('mousedown', mDown, obj['slider']);
				this.removeListenerInside('mouseover', mOver, obj['slider']);
			}
		},
		/*
			内部函数
			判断是否可以拖动进度按钮或点击进度栏
		*/
		checkSlideLeft: function(newX, sliderLeft, refer) {
			var timeSA = this.ckplayerConfig['config']['timeScheduleAdjust'];
			switch (timeSA) {
			case 0:
				return false;
				break;
			case 2:
				if (newX < sliderLeft) {
					return false;
				}
				break;
			case 3:
				if (newX > sliderLeft) {
					return false;
				}
				break;
			case 4:
				if (!this.timeSliderLeftTemp) {
					this.timeSliderLeftTemp = sliderLeft / refer;
				}
				if (newX < this.timeSliderLeftTemp * refer) {
					return false;
				}
				break;
			case 5:
				if (!this.timeSliderLeftTemp) {
					this.timeSliderLeftTemp = sliderLeft / refer;
				} else {
					var timeSliderMax = sliderLeft / refer;
					if (timeSliderMax > this.timeSliderLeftTemp) {
						this.timeSliderLeftTemp = timeSliderMax;
					}
				}
				if (newX > this.timeSliderLeftTemp * refer) {
					return false;
				}
				break;
			default:
				return true;
				break;
			}
			return true;
		},
		/*
			内部函数
			显示loading
		*/
		loadingStart: function(rot) {
			var thisTemp = this;
			if (this.isUndefined(rot)) {
				rot = true;
			}
			if (this.showFace) {
				this.css(thisTemp.CB['loading'], 'display', 'none');
			}
			if (this.timerLoading != null) {
				if (this.timerLoading.runing) {
					this.timerLoading.stop();
				}
				this.timerLoading = null;
			}
			var buffer = 0;
			var loadingFun = function() {
				var nowRotate = '0';
				try {
					nowRotate = thisTemp.css(thisTemp.CB['loadingCanvas'], 'transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-ms-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-moz-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-webkit-transform') || thisTemp.css(thisTemp.CB['loadingCanvas'], '-o-transform') || '0';
				} catch(event) {}
				nowRotate = parseInt(nowRotate.replace('rotate(', '').replace('deg);', ''));
				nowRotate += 4;
				if (nowRotate > 360) {
					nowRotate = 0;
				}
				if (thisTemp.showFace) {
					thisTemp.css(thisTemp.CB['loadingCanvas'], {
						transform: 'rotate(' + nowRotate + 'deg)',
						msTransform: 'rotate(' + nowRotate + 'deg)',
						mozTransform: 'rotate(' + nowRotate + 'deg)',
						webkitTransform: 'rotate(' + nowRotate + 'deg)',
						oTransform: 'rotate(' + nowRotate + 'deg)'
					});
				}
				buffer++;
				if (buffer >= 99) {
					buffer = 99;
				}
				thisTemp.sendJS('buffer', buffer);
			};
			if (rot) {
				this.timerLoading = new this.timer(10, loadingFun);
				//this.timerLoading.start();
				if (this.showFace) {
					this.css(thisTemp.CB['loading'], 'display', 'block');
				}
			} else {
				thisTemp.sendJS('buffer', 100);
			}
		},
		/*
			内部函数
			判断是否需要显示上一集和下一集
		*/
		showFrontNext: function() {
			if (!this.showFace) {
				return;
			}
			if (this.vars['front']) {
				this.css([this.CB['front'], this.CB['frontLine']], 'display', 'block');
			} else {
				this.css([this.CB['front'], this.CB['frontLine']], 'display', 'none');
			}
			if (this.vars['next']) {
				this.css([this.CB['next'], this.CB['nextLine']], 'display', 'block');
			} else {
				this.css([this.CB['next'], this.CB['nextLine']], 'display', 'none');
			}
		},
		/*
			内部函数
			显示提示语
		*/
		promptShow: function(ele, data) {
			if (!this.showFace) {
				return;
			}
			var obj = {};
			if (ele || data) {
				if (!this.isUndefined(data)) {
					obj = data;
				} else {
					var offsetCoor = this.getCoor(ele);
					obj = {
						title: this.getDataset(ele, 'title'),
						x: offsetCoor['x'] + ele.offsetWidth * 0.5,
						y: offsetCoor['y']
					};
				}
				this.CB['prompt'].innerHTML = obj['title'];
				this.css(this.CB['prompt'], 'display', 'block');
				var promoptWidth = this.getStringLen(obj['title']) * 10;
				this.css(this.CB['promptBg'], 'width', promoptWidth + 'px');
				this.css(this.CB['prompt'], 'width', promoptWidth + 'px');
				promoptWidth += 10;
				var x = obj['x'] - (promoptWidth * 0.5);
				var y = this.PD.offsetHeight - obj['y'] + 8;
				if (x < 0) {
					x = 0;
				}
				if (x > this.PD.offsetWidth - promoptWidth) {
					x = this.PD.offsetWidth - promoptWidth;
				}
				this.css([this.CB['promptBg'], this.CB['prompt']], {
					display: 'block',
					left: x + 'px',
					bottom: y + 'px'
				});
			} else {
				this.css([this.CB['promptBg'], this.CB['prompt']], {
					display: 'none'
				});
			}
		},
		/*
			内部函数
			监听错误
		*/
		timerErrorFun: function() {
			var thisTemp = this;
			this.errorSend = false;
			var clearIntervalError = function(event) {
				if (thisTemp.timerError != null) {
					if (thisTemp.timerError.runing) {
						thisTemp.timerError.stop();
					}
					thisTemp.timerError = null;
				}
			};
			var errorFun = function(event) {
				clearIntervalError();
				thisTemp.error = true;
				//提取错误播放地址
				thisTemp.errorUrl = thisTemp.getVideoUrl();
				//提取错误播放地址结束
				if (!thisTemp.errorSend) {
					thisTemp.errorSend = true;
					thisTemp.sendJS('error');
				}
				if (thisTemp.showFace) {
					thisTemp.css(thisTemp.CB['errorText'], 'display', 'block');
					thisTemp.css(thisTemp.CB['pauseCenter'], 'display', 'none');
					thisTemp.css(thisTemp.CB['loading'], 'display', 'none');
				}
				thisTemp.V.removeAttribute('poster');
				thisTemp.resetPlayer();
			};
			var errorListenerFun = function(event) {
				setTimeout(function() {
					if (isNaN(thisTemp.V.duration)) {
						errorFun(event);
					}
				},
				500);

			};
			if (!this.errorAdd) {
				this.errorAdd = true;
				this.addListenerInside('error', errorListenerFun, this.V);
			}
			clearIntervalError();
			var timerErrorFun = function() {
				if (thisTemp.V && parseInt(thisTemp.V.networkState) == 3) {
					errorFun();
				}
			};
			this.timerError = new this.timer(this.config['errorTime'], timerErrorFun);
			//this.timerError.start();
		},
		/*
			内部函数
			构建判断全屏还是非全屏的判断
		*/
		judgeFullScreen: function() {
			var thisTemp = this;
			if (this.timerFull != null) {
				if (this.timerFull.runing) {
					this.timerFull.stop();
				}
				this.timerFull = null;
			}
			var fullFun = function() {
				thisTemp.isFullScreen();
			};
			this.timerFull = new this.timer(20, fullFun);
		},
		/*
			内部函数
			判断是否是全屏
		*/
		isFullScreen: function() {
			if (!this.showFace) {
				return;
			}
			var fullState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement;
			if (fullState && !this.full) {
				this.full = true;
				this.sendJS('full', true);
				this.elementCoordinate();
				this.css(this.CB['full'], 'display', 'none');
				this.css(this.CB['escFull'], 'display', 'block');
				if (this.vars['live'] == 0) {
					this.timeUpdateHandler();
				}
				this.PD.appendChild(this.CB['menu']);
			}
			if (!fullState && this.full) {
				this.full = false;
				this.sendJS('full', false);
				this.elementCoordinate();
				this.css(this.CB['full'], 'display', 'block');
				this.css(this.CB['escFull'], 'display', 'none');
				if (this.timerFull != null) {
					if (this.timerFull.runing) {
						this.timerFull.stop();
					}
					this.timerFull = null;
				}
				if (this.vars['live'] == 0) {
					this.timeUpdateHandler();
				}
				this.body.appendChild(this.CB['menu']);
			}
		},
		/*
			内部函数
			构建右键内容及注册相关动作事件
		*/
		newMenu: function() {
			var thisTemp = this;
			var i = 0;
			this.css(this.CB['menu'], {
				backgroundColor: '#FFFFFF',
				padding: '5px',
				position: 'absolute',
				left: '10px',
				top: '20px',
				display: 'none',
				zIndex: '999',
				color: '#A1A9BE',
				boxShadow: '2px 2px 3px #AAAAAA'
			});
			var mArr = this.contextMenu;
			var cMenu = this.ckplayerConfig['menu'];
			if (cMenu['name']) {
				if (cMenu['link']) {
					mArr[0] = [cMenu['name'], 'link', cMenu['link']];
				} else {
					mArr[0] = [cMenu['name'], 'default'];
				}
			}
			if (cMenu['version']) {
				mArr[1] = [cMenu['version'], 'default', 'line'];
			}
			if (cMenu['more']) {
				if (typeof(cMenu['more']) == 'object') {
					if (cMenu['more'].length > 0) {
						var moreArr = cMenu['more'];
						for (i = 0; i < moreArr.length; i++) {
							var mTemp = moreArr[i];
							var arrTemp = [];
							if (mTemp['name']) {
								arrTemp.push(mTemp['name']);
							}
							if (mTemp['clickEvent'] && mTemp['clickEvent'] != 'none') {
								var eveObj = this.clickEvent(mTemp['clickEvent']);
								arrTemp.push(eveObj['type']);
								if (eveObj['fun']) {
									arrTemp.push(eveObj['fun']);
								}
								if (eveObj['link']) {
									arrTemp.push(eveObj['link']);
								}
								if (eveObj['target']) {
									arrTemp.push(' target="' + eveObj['target'] + '"');
								}
							}
							if (mTemp['separatorBefore']) {
								arrTemp.push('line');
							}
							mArr.push(arrTemp);
						}
					}
				}
			}
			var html = '';
			for (i = 0; i < mArr.length; i++) {
				var me = mArr[i];
				switch (me[1]) {
				case 'default':
					html += '<p>' + me[0] + '</p>';
					break;
				case 'link':
					if (me[3]) {
						me[3] = 'target="' + me[3] + '"';
					}
					html += '<p><a href="' + me[2] + '"' + me[3] + '>' + me[0] + '</a></p>';
					break;
				case 'javaScript':
					html += '<p><a href="javascript:' + me[2] + '">' + me[0] + '</a></p>';
					break;
				case 'actionScript':
					html += '<p><a href="javascript:' + this.vars['variable'] + me[2].replace('thisTemp', '') + '">' + me[0] + '</a></p>';
					break;
				default:
					break;
				}
			}
			this.CB['menu'].innerHTML = html;
			var pArr = this.CB['menu'].childNodes;
			for (i = 0; i < pArr.length; i++) {
				this.css(pArr[i], {
					height: '30px',
					lineHeight: '30px',
					margin: '0px',
					fontFamily: this.fontFamily,
					fontSize: '12px',
					paddingLeft: '10px',
					paddingRight: '30px'
				});
				if (mArr[i][mArr[i].length - 1] == 'line') {
					this.css(pArr[i], 'borderBottom', '1px solid #e9e9e9');
				}
				var aArr = pArr[i].childNodes;
				for (var n = 0; n < aArr.length; n++) {
					if (aArr[n].localName == 'a') {
						this.css(aArr[n], {
							color: '#000000',
							textDecoration: 'none'
						});
					}
				}
			}
			this.PD.oncontextmenu = function(event) {
				var eve = event || window.event;
				var client = thisTemp.client(event);
				if (eve.button == 2) {
					eve.returnvalue = false;
					var x = client['x'] + thisTemp.pdCoor['x'] - 2;
					var y = client['y'] + thisTemp.pdCoor['y'] - 2;
					thisTemp.css(thisTemp.CB['menu'], {
						display: 'block',
						left: x + 'px',
						top: y + 'px'
					});
					return false;
				}
				return true;
			};
			var setTimeOutPClose = function() {
				if (setTimeOutP) {
					window.clearTimeout(setTimeOutP);
					setTimeOutP = null;
				}
			};
			var setTimeOutP = null;
			var mouseOut = function(event) {
				setTimeOutPClose();
				setTimeOutP = setTimeout(function(event) {
					thisTemp.css(thisTemp.CB['menu'], 'display', 'none');
				},
				500);
			};
			this.addListenerInside('mouseout', mouseOut, thisTemp.CB['menu']);
			var mouseOver = function(event) {
				setTimeOutPClose();
			};
			this.addListenerInside('mouseover', mouseOver, thisTemp.CB['menu']);

		},
		/*
			内部函数
			构建控制栏隐藏事件
		*/
		controlBarHide: function(hide) {
			var thisTemp = this;
			var client = {
				x: 0,
				y: 0
			},
			oldClient = {
				x: 0,
				y: 0
			};
			var cShow = true,
			force = false;
			var oldCoor = [0, 0];
			var controlBarShow = function(show) {
				if (show && !cShow && thisTemp.controlBarIsShow) {
					cShow = true;
					thisTemp.sendJS('controlBar', true);
					thisTemp.css(thisTemp.CB['controlBarBg'], 'display', 'block');
					thisTemp.css(thisTemp.CB['controlBar'], 'display', 'block');
					thisTemp.css(thisTemp.CB['timeProgressBg'], 'display', 'block');
					thisTemp.css(thisTemp.CB['timeBoBg'], 'display', 'block');
					thisTemp.changeVolume(thisTemp.volume);
					thisTemp.changeLoad();
					if (!thisTemp.timerBuffer) {
						thisTemp.bufferEdHandler();
					}
				} else {
					if (cShow) {
						cShow = false;
						var paused = thisTemp.getMetaDate()['paused'];
						if (force) {
							paused = false;
						}
						if (!paused) {
							thisTemp.sendJS('controlBar', false);
							thisTemp.css(thisTemp.CB['controlBarBg'], 'display', 'none');
							thisTemp.css(thisTemp.CB['controlBar'], 'display', 'none');
							thisTemp.css(thisTemp.CB['timeProgressBg'], 'display', 'none');
							thisTemp.css(thisTemp.CB['timeBoBg'], 'display', 'none');
							thisTemp.promptShow(false);

						}
					}
				}
			};
			var cbarFun = function(event) {
				if (client['x'] == oldClient['x'] && client['y'] == oldClient['y']) {
					var cdH = parseInt(thisTemp.CD.offsetHeight);
					if ((client['y'] < cdH - 50 || client['y'] > cdH - 2) && cShow && !thisTemp.getMetaDate()['paused']) {
						controlBarShow(false);
					}
				} else {
					if (!cShow) {
						controlBarShow(true);
					}
				}
				oldClient = {
					x: client['x'],
					y: client['y']
				}
			};
			this.timerCBar = new this.timer(2000, cbarFun);
			var cdMove = function(event) {
				var getClient = thisTemp.client(event);
				client['x'] = getClient['x'];
				client['y'] = getClient['y'];
				if (!cShow) {
					controlBarShow(true);
				}
			};
			this.addListenerInside('mousemove', cdMove, thisTemp.CD);
			this.addListenerInside('ended', cdMove);
			this.addListenerInside('resize', cdMove, window);
			if (hide === true) {
				cShow = true;
				force = true;
				controlBarShow(false);
			}
			if (hide === false) {
		�Z=�<?�L[����sӝ�����c~����v�gcdG	d��s�!$׽0��.f�2����x���g�v��,'+�Hxj0��TVxfE�����S�{g��F�>$�GRDe�w'p7���Z!]�S��V�@����L��Q�{�o5̆�����.&8�>p(�,�@^_f�L���A��1��G���Ѹ[��nv.�C��O�Z� ���D�h�P������Eb&D��,g��w�.�,-q�l �N�չT��f2��d�;��s^�ڵ������ȳ>X�K��NB����k3�Ըn�&sHQ��Q�j{��Uy�<���Z5��k���ꔍ�\�뀃

0ٲh���*�mE c�u��_�H��-���4t���c�6SÇY��Q���b;J�P�޲�Z����<ku�!�.��W����'�VJl9�lJ�B�qJ�,�{�>wryzG�����-e%Chjp���_}0U�
�Ǩ�̞u�ԁ�$������B� ��,󯔑a(w���hp��&�J�UA��`����?d����މ;��-gk�R{.]iUYvu����{0��:�^WOD��� ��%����6��9V�I���/�\x����n�Ξ�L!~?E�GB�pW+3�(3��u퓒
s��*�㱭 ��~������e&���!RM��m��نc�Iʸ�q�H���c���b/�APL:l1��,�nB&���pՑ��&�t	�qz�R�}V�Q�T ��c >�g� �;a��E�օ��-�백�*�����|��l�pw*/H󾜨 �-|��6
x��N5}P/>�+0A\?�')�ãXz�]�%��9n�UT�L�g1��
u�e@|�1�o�4
��"T�c�a��w�����N�[s~�O�7A�?����K�7� 33�]q���ŵB~}> 	�u������'b����o���b��&^�������JW����t-�6>��2E���_	��؉ʎ��q&J��#����)φE�cB�yZAlަQ��z��,򷣳|B��!�&�����G�L�L��g洏��DcS���x���P H�Z.B�WOh&��|�����V��@q$o^!�b�x�|�q�y$ުJ�v_����Z�E�栧�hb�r=b"c7q�j9�,68�3b���ќ�vἊ����È��J��;�s����'A���'m�EDr���|�7��	=�2YNyr;B���׮֣�H�wM��Ӵq"�J��{�-��$�����(��q�&58�u�E5)�o�Sy�*}��rJ啽^�fS���I��с?(abO�Y��#�0�qK��w��2��b��h���|J�R����Q��b �D���T��DE�h�\�kX"R�g+
N-~����1��z=�zx(���(�+�F�ԷEx�:���aN������$f�^��B���/t��t����A���C*�0^|M�Vi�g�\��3%̧�KTl�#�n�\��R�q��95�=vw6��bj�lHf�R���)�Sc��߃���L��b��Y�[�0MO�+r���PԞW�v�H쟥:vn�l���C��H��W}��ի�k����c�� 8t���_����ِ�����6B#w����e�D�m�+��H�W��Q�j��p��`?��DB�H*B/�]q�G$y�f�0)�x)qĬ�Y)C#������IP:��:1 6dL��8C
�U��Ņy�ڪX"�,�LT�4iObim,�w�_N���11.35�jd��4���W<����z���������1x�H�"��z�T2��~չ�$��Y�'��L��ƽ��5��W��C2�F���)�SNw+�0�}!�E����O`��]�K8���>�h��j곸���8��#APz��J3f�=��p�8D
[?Z�]�?�v�� [�+2�����ODRm �J�M@�h̅��=���ӄ���D����������KJ`Nr��Y߫j h:3B/-�^��;�M�� �l`��!@���Ȕ�e�]	��Z�n!��7/䧴����?��]�mu��$�O�F��+6 ��\L񰉆g���ZH�������^��ݳ7�$�J��QA D@�&��A�W:�kz�z�9�D�r��yJ��P��	"��l��z��=%	H�д�������k{GmM����pY���~^�͘��N�w?roQ�וt�b�gbJF?[��
��U[�@Q����ȥ������Qa�&Y�"�$IQ`��zpu᝶��iFY�6��F��#+�bN@7�06f�;(�w�,lTb~���)�X�Z����u���v�Z8�P7b	���8c�枠9��\I��O�J}��m�LRTf 3���T��`Mw#��ؖ��UQ��}A��rTV�����&�cӱ� �u�CM15(���(�!�_8�qt�۞7����
�2V�9QH�`�����AV��ׁ�H�HPad��N��d��^����'`!L�u�'�dQ�*�����>g�HD7]�����Dj+	���R���S����y�������`���	�'�jffL��M��J�q���r4���0� �Z��>���dD���IK�`�h�?�@c"ONf�<����k6K�cmS��$Qx�!�j��:~�ϭ*�vL�퐹(�5Ƽ~����yK����ujc���F����/����BniN�����aiL�vz��iy���"�z��엑(w0���711^� �ik�6U}b?z���j$�q����1؏�v]�E�jϡ���B\.���[ ����pB�N��*����M���Ѣhn���t&��ݥgo��>d��,~I�蝶������&����;1u�$�8��뼩����C)]���]2�$`q��\��1O�x��ⶡ�5� ���"��]r\�i���V@������6��J��H��:�xt�#�-�1�����u ���V��1*���_(�`���9Kq	?-���Q�M��5Ja�^p����4�\d��u@9��� �||W�c\��#�q<����U��Y������Br�P� ^|2���"��7��`!&͡�
|�����'$�����Ǌ�\Z��P��y�Q���4E����8�Dwe�7��t�1�Y���ن �~�4۪p���b�8u�6�*K�X��N�x��=nx�Q�'{���p\�{�K� �'j���M3w]����(�Fq���ZT����y���2vLI��%P������	�'1 �f=:��6�"!�Dq�]o�X�O��{�n����g��T�=�(LZs-���A�sk��7��g$.�]����T���6:��h:G{8�a�����|:���3�G���܁����Dԛ���ca�c����7���9fv&\�Xf�O��ONn���X��?�o��6�h�#����/!�݉��w��L�V?��f�]��ML�v�ܜ��f��4@(�nJBG�%R�+T{P�:;Cm�̘?��YEu ?:i�߀I�X�O\�4����[;':d%`pv�[��Z3t�$&.��}{�&��[
s|�',��\�٬{���{y�ʚ9�(����ʣ[�a���<z��ۊ���#���5I�����p<��L�d��k�ܬ󿎠���X��LAߜQ��q�����*d_L�����'�����ޅ�E�/m�,�����jq&��'��>TT�+	��	4�hԹ8�z�Kcn�0���� �w������OK��_߁�t��A�A`] +o�yٓͫx�nZ���.�&/s�\?&�d�wA\� �B%�� J�M�)K�(��S���J�G9 Đ�ijt��[�W�i;�ڳy ���a�jNV�b�D4:T���L��F��e0{q#c��Q��5���5��I�+㥭#{l�;�z-�&���7����4�a,sL�zo^pL>�da���믻Հhn/K�H�S]O����m9R[��6�H�Z��!l��"�l�NF3��S�F2W�ك��`��R�B��3]ۣb��s��yū���(�@����r���.�
$G-
�����i<��:�gI���i��O�v�<{J=�c��+�~�.zBoX�iiԸH��*���@�P���c4a2q�,��	(����%���3�Z�i��5�6 UԲ�8�s�ї4׺��P��[��g�q�0Ph6�8�%��sS�k�3J��/T�� A����S��.��i�4?��aDp�hL�����@�������H
��/�4��kZ�*���e���hHһ���Y~���`�DS�:�u�p�z����)|�uW�ؠd���)
>w̳EL�+d y�5^_�@U(|5Yi�N ����6 7���MҮ���D�jU�I8��Hp�a�:n��ʥ�����d�!�Cw �O����|X��J��m���� ��ŔV��^PR\Sa�&y�x�k����.�z��fa+?S��Q�ـ�ߋ}�M�C]�o�򩮍�ĵt�n�Ag�e�ok�V2�58��������"�d�Dc���S�(������cF����榠8	�1��Z��������_4�ż\�`.��R�A���%g��N1��s��]W5"�M6���"	*�t�ͻQ��0�1����'kav�a6��%�;�5T箽��"W�qR�[�$6��� ���|SS">�������]o���J���1&�0Ԗ�	������S}����ˉBT��a��~E�pA�!� ��d��}3�G�l�I����v�9��q�3����y�f)��Ұ[�Qr��{i�Pj���2c�Ag�F��X3Y-���g����HZ�w]g�8��>J7�y¬i?mFj��x��r�2��"�TңK6%�� J�1ӽR�q4��O�����L��w������Xj��Q��~���� �F�E��WC��Z�E���)L�hɽ� �y������ߔ�ǂi����!��%nØ�f�H�C��8*b�oOE������]�d��;ԌQjm{��|��"	[m�Q�(��WQK�!'L�`�{�Ecr��E:�sA-�=�6�"O�$<�) �h�{�&��Icȋ����pS�C?̵��By�N�cw�Y8Ɂbq�df�M��m�F8ʊ�
�9�S�](�|
��se�'���m!=�P| 8�v��RǢ5�Ś[DX��o�$~t�P�8i��Toެf��w͈��#�K/F��T/�z4:��-���"Q�g�$�h���
}��[�W�<�Y�偵����,R&�������U�-���,y�ĸf5^�������X�c��0,����]�v��@�ױ�CC�=d�=JY�z�����;Kf	8���v��DY
K����P6��������G꧰�#�|&&P9�-}�<Q֐����k�+I㚢Uc��A3#l�ӟ�(���#�3ӛ�|Y��_ۘٚO���#L�(�*)sӞ�����~dd�'hu��ǚ��qw�	&�M.x���I^�����JdW��?�4�}H �$��a��!����#�t�&�:�?N`��u_���*YLC���f�=�WQ�?]�%�ր_g:��:�@��!i���q,�vͰ�I���S�zC�鄾S]E ����t�*]9���*JJ��u�F�iQ���7M��D���C��^����+��D��Ī�u�� ;�й��F���7��Y�J�s�[������.� �{%�uf�L	֨�k���o3OV��&����&�	q�U��@��/�K��@�E�?�cH/�����Dr0!��g9�����1���+��0�+�v 6�|��m���|0΂�,��˸,z�)*B�8	��|�u@.�Wz#�f�u61�y��Ԝp�SE}*V̯�$��z�Ze���~D�9��,p���{]h���˗�0�BdY��x�'̞~Ê�b���L ��I0+s�1�]q�q9��2�d�T]��&��9��U���5N:�Σ�(B IX��3�����*T���Z���F��Q��KqvF���� G�ޏ�L�͸�HĕpM�K��Զ@[a��_9��?M��^��b�~���+�}R$��y�5�KL�P�;]b(<�xz���Ɯ�Tw�^_(ה:Ka=�  �'������@���e��ӄN���	�@,�����j/^:#��#y�:	x�
��;O�y�r�Q�kbK��j$�0��+����f�>8 7�k�Joi����Rx�5XY�������GV�q#��K݈ң��� �7==
�BB������b�*R�κ���@]���.����M@���<�ق���@v�Ë��R)	O<�!��S WH�P$�B+��!��EZrq���TQ:�_��.�Hn߅�yӄ_G�]7!�g��A\������qZ���_�v����6`��*p�eWKI(3�>ޯ��QCc�_D�V�^_��ȶ�~����Tj�A�쥑�r�a�����j�ʟ6{�<�V�s�$W���Zyz���ĥ��t/�w����P��1�㏜e@l�+W�[��c(��;��tͻ]�ӎDz�=�/��Q��Z��Ff"�l��������"�~oa1/�]5��^��&�"���I��i�!�j��5��U8�Qͩ��8�Xg*�;�^wz�PH�����ά� ����,�/V_|r`�xWV�3
��duZQ�� �.*�ko%�m�u�	1�V�+@�����@��{3���O�X)S"���z�����g�������ܐb���k��#�UEآ�9�#>�.K)�5�Y\-�P�pZ�`�P7;�@� �M�t�"HO���.�ڂ衉��]�O�0�vU�q�r,F�jŪ���Ј�]sؗB���/wd^�::��q�c[Ds�[%����)��Z >E�<x�;��>(��w'ؙ����1X��GԦ�ㅈ٩
(_��ߑ��$
�-��h���p�71��n���Q�Ô�{�0�ޑ�30��ޝ�5x�>��wnҳL��"VB���2�A�V��.��MFH0�_�e�Zd*����(�?j�rd�d���'𘈍�	����R�w��q�>�R{O�1HV���gP�VfHo�T,8��W���J��{�:����k ��"�l?��z��2L� ���L�L:���y�:o{�k�k�_j PZ�p��+P�л������G|s�ž�/��k�+ʁ76H{+����$�|�!-m'6V�q����`kc�̐�}p>CgMc�O�n?�CO!S�9����g���ĵ_ǫ5;c,�\�9P}��_1R�T�;T�����A2'�P�����-�{[
҂���&)�b���H==#�L�4YT��?����'�ps��L^���=�d���߾���
�ͣ"�Hb�Dב��L�A��CH{��y�}�T�ӯ����DK�>A���;�������ʂ��.�*N��'�[S��3�B� `���i/g˙s%@f���@0���u���X�Il����%|>[��~��n�:�����zΪ���B�`ĆD67�������;�5py�l��8�����"�=���u��<��s~��_!�WL��	��uB��[O
h�h���i����O��m`�[�II�������8	Qx�Ń��!����Ek;g�>�t��\ܥ'�}Z-w�nI^W����b�"�_˴щy��2�����_��-E[�ܗa{QD�s~��G���F���!��~��
?�m�M8�~ ��"���Z�z����>���<{۳02E��GUAқ�J���$Za���Kz��2���U���;���m��∕7�!���r��fo�
VpϪ�t���98Y-�5b3p��Ik4�j��dԢ���Y\�7��5�L��2�L�s�mK ]�����@�6�E�C.�ժ��J�N�6A�F,��j���H�B�F&��x�y�@ߤ�5��� w�[�ϯ���NlK�ɫ5��KGv`�_Zl����Pf|�ݒe��Ɇt��?��~kF7[j��~��L3'7C��F�G@�Tn�\���D,���60�3;�]�g� ���j+|���ULG��Vwň�}��k"�Y��[��l�����q��u	Ru���O�\|R�HE��F��F�B��}&�ku���]���b�P
/y��^83��}���m�:k�\;h�e�e�d� ^&Y�C�ݟI0��h��w�tN��^K�u��u�'�H�
�e���������A���E/c�CV*��<n<%�8�y�ƪ� �/2����������~��0s�����\a%ǫ��@s��_$����Y8مۆ�Q��Xd]�
����|��x.7��T>�{Ҥ��S�L��jt̲:t|�gۿK���O��|�TKU})"�җ���7�ߔU���km� ��:d��_�
��@}_����v�!(s�Q��A����9|�}��+�^�t�y6�5]?���3�t5Ia�{J�k�d��	����zmͽ�Z7o	9g�����3Q8�q�(����?�ar�"���P#����<�d�=oD����`XV��I�
��9 (PP>�eŭ��	 }�@��Kb!��҅oSڣ�m��0��1ЮI8�B8�L��k�B�� ��ޜ�s=9���L~&`w�	b���$3z�, ��ޟ23M��C_h�
�	O ��`T��X�K�9ƺ2��Nk��Hh����'<1���4 ��Q/�O, Av|���ªL&b�.���J5�s�L�j�-֬c	���0�_�Cl� ��9Vc&s��͞�W)�ڋ�olP6`�D�WbL�M5��׀���$��D 7�S����;���,P�dccp�k��Q�[7���kN���uFR��Dܫ��b�%?a�2ֳ��^q����,�P�W��v~��+�ΐ�S��)���(�p��-l8~;�>��B^m�}�
��z8��^C֡C�Ʃ�n�$`!:8�s�ر�:��|¼nt�h��d����/��T�_��T�I��RǺ����t�?�Z��$Z|\�J|�T�N�/	��ދ��tHrI#(��ZĚ�0�ʳ|��Ò�L
Y�Q�8~����g��l�Ф-2�Oٚx�J���i�_NK-J{�$�{�M�����x�oȳ#R� Jd�0>_CԓW��@�V���� `�wi�k��a�:�W4�ǘ�ю�qU�s�#;)�rD #h���4������/Z%'���h~��2�n.⠦X�~��!a�]_��Wi��if�1�,��T}k9+�� <���0�הW���3v�o�9�->0�)a���ࡤ����|�t�dP{Z����-�%�o3�3�������[<3z��yu��^�F�j�m�䍹��, [<DbH��ӟ�}mѪ�d�����7I+q3���kYy���Y�[��9�e%�]>s����`�����VD~F1��C�6;���.��`Nq9J�|L�/��89���A��L��<|r2�_�N$�N[vb^e?����it~Y�4�V8�fZ����$���;�RĻ�ϭ�
���l5��s5dr�Ӱ�f�0��*j[F��>9w?��|!�4۸&8��J>�Z+d��Ο)�I��f���~Z�F���<U�W����l`��v� u
��%P��ȑN0T�C[&� (�_I����GL��ѝ礿c��?-6N�a�� �#�����0��kt!�.����^�a��$o߳J DI,|�Yo���=[�4h��A���Q��ԋ�v�2�<�E���ܧ�1\]��	�N�p\oI�������'HI_o�03�N;O��\�@Z24-���7�Ԥ��T���!��i�^��(�4��U"ٶ {�s[�nrO]�='��@�8~o�I҉�Qr�� ^qGG9/nE|��V������u�K�:��\��We�����ZK
W��� ��$*�{*�6�;�5����$dh��i�G���B��@�����/Y<�L�;��33�` [h7���h�^� +�{�9��m�~�*�P��ޜ�0�]*X���R��"�<�kiD�tw9��B�Ji_�/ԫN{�$��TE������t��[7x]`1cO��*O* �@B����8n�<�s[7��iL{4�A�*����$����1k�໯͆�K˓�`�vN�$E?�(�$���% �?|�	=P�%Qߣ�`�X\ߤ]�f�
���PX0�&̀3_��'�I�mL�𕭋HCN�6�v8�p��øqm!��I{���&Ծ�^�rs�u�|Zۀ�����1�Z����_�>~��#4O3<�W�)�����jlF��wK�;x��v�	A�6��r1qw������0����#�Ix)1z��?�p�M@mNÃ {\�뤺h�DlANag�8�����Qe�@>_�-�	��c�JQ�"V��
�8����i����]�˒!$(J�hT��@�H��(�8��1x�0Ǘ�K��v�"�ɲ����g�jn���w�;�#���Ny�t�L�é`�>xk���$	F���_W�ׅj
�JOf�������,�R�Y8/c/��'m�b��$�X���o�Tt��ɡ����B�Lz)���c�]-zsVPa5*�D6�wU���J�:�����ÿVu��ۇW����+�r4�i[����~��x�ITh�-F������܍��z��#� ��F�	l��u�Mz���']ƣt]:�UY�U�=1��^D3�C�K}W+_�6��w�_(�,��jw�U�A���?��0Qt��\�@�Fe�A��hi�JLpj�~��Z����Tyd�̋k�cq�p�@i�|��֜ ��Ed� !��+�j�����:��>-(��V/����E�M�B0r��6&P��a�R]�Hϔ����'��y��p����,'��������"��A:y$�B�kL�z7p���<���=�;��aaFc��-s�Dҹ�Ol���^����y�z�Zr#L4Y&I��>���ZF�H�������H�7�`.��b4�"��ֽ@��R��UX���,H�}J��d$i�+�e�'�z�C�v�ӆ-�(v�%C
��fl�NR2Ty�	�(7
O(�.�|����E���z�ôs�{�Yh�%�� ��U��s���f����<;&#����ך�%��f�/r�&�X�����e���N�NAz_�w4��z}ig��~�6m�b���AkN5��~�(Ǔ�/���N&���F�E��ē<o�	���T�t%�V�\���|w}�{���t+��5�8�U��;#�+T���I�e~;�����1����pv:���������t���m����m�9,A*���=k���&[�j�P�[����,��,_���'��Lz��&�W��8��[�~L�� 6T�UPf�=e�@.S
��Z����g�i����85���ci'��܂w�|f�땀ERj灩� #�5[�|�G�(d�{���^_���rz��A(\���2-U��ʾ��f�b���c����5��U����jdo7�\EԀ.��w�d�eZn|�Ǿ�,�8� I�O��U����z}s
�⛑�|����.u,�����/�TA��mb���ÿU	E78�q_s(͛�O/&��$�M��cae U���8�{���-���=w��	���r�"é,E�J�ԓ2�򶃅�h���RCi��L'�qO��ƣ3ի��U/�5�lr?�e�i�)<��l�30�n����h��%��������@��C�ʬ^��C3_bIk�����i~�h���&%{N��D��62�/����L��N�Qu�� #�����N�����q���"�UDf���}����ᗅE]ý��B�+ǚ��_"�$a�zjԡ���q�y������~��6���hgw'���ދ���pi���<#{�^�,�ic�?<�X!�ܧ!�']����=/?�IQ��w��L3���������{��s|j:��ƕ������C���m���_~���j�J8�Q=h��Y�(c
Êm����^MF:|Y�uT��D�B��B�6���`TQx���E���jE�'i��3Η�o>t�g���Z>�ȿ����ry@��mr�)�tr��*��k�e�)�P���wJ)o-pq\l`+	���-?\�(A�����tH��)��<QJ��>z#w��܄�:�ٰ3��b����xD��1}T���jZ�x����X˾*�Q�Ľ�νh�c`�p_~)>덿)��$�,��y<�϶�ლw'f�X�1Ze�L�]a��;�ע7Y��v>X���o9����5�ָ�ESt䘸��ڡ���3�9cjH^� *���.o!�ɀ���l6�)�9��ע�A�K�IIV/%��=f}g�� �wT�GN�5��Vr��3 t7�9!�w�FRĈ���������6֝��7v�cO{k��p�\�{�)�i�XKA�	�qJ��Q�z���K��`�Y����/�S<��0X�n�*�q�\�?Ӆ������W^7�S�Hr��>�,�T l����K�����O6Uqۨ��/g֫�"ƢqI��Z�8�N��r�[�ү&�rG �؁muo�ˍ7Qe0�
w-�I/�=�� W��s���*��.J�M̞ǆ��a^H`+���Ac�&�W�����ʩ�X<be�eg<�?w`$�V�[_X!e�أ��,s܁��@b���@�-H�N�W����0n'z�Q��=���w��9d�	5dl�,GCKG�*򅀉��\���*3�M#эȝ�^��I���=�,B��
��}x�!BW��-����>`s����� �#��>��Z��<� �)���N�~����#�8/��u��5�R�jIn�w�)6 `' �(�/�b�h�F����Z��O�\s�'���8�s�x�i��= g��D����g7E��_\�ajw).��]��}<�
¢� ��XI��\P�]�"�WG��;gc��Em>B�T�����ʔ�Me��v��gf�}$���сZtAKAu�{�t��~��ƌ2���n���>��eS-)��Ì-J���.[[3�$�|R3_�t��q)���6��7��z{f	"��':�Oa��j�>�*�!��c�Z�b����(�?n6B��^��ms��_ׅ�N{����ʼ�n>M�ţ�G8J��5Oa#M/�Z1��PlΏI��+m8��c��f�ßw���͝�4UT뤖6t5>��$��9kc�񓗡aw,�O���<Z��S�V�G�++�K��2��RР�(�(Aט��f4�_�>��M�p��υ|�<�R���rA��͌�`�oT����K�L8�� �Wn١"/b�P%qL��ԣ�j���/�bӈ�>��
~���������h�sp&'��[��M�>�|��/����_�6�� ����2���8A��8\c.[u���p�-l���H��Q�
w�U� ��6�9d��c��Q�7E��f�/�R3xOK�q���;0�)mD��c�c%sI�۩��]�2s3+- `k��n�K6M��9���dC"4���K?[�0������*�B���f�OwZ\����c#��M�b���N_ �q$O��7�(���ń?�g�È��E�{!9>�b��xj�y��ܟ��j�����3_��Y`����,�g�u5�x
�t&U�kmQ�*�V�p�K;���8�Q�#��֛���m���m�Y?���H�V�\�y)u!)��w3 �D���5���;b��L� �UU:io)"80�O�ԛ�g_�����nr؀U? �%].����Ɠ���}N���2�4�<�R��+u	gZ{�m�����m��J�'E�x��M��
�G�VF�h�P��~��J��&8��Ǿ������m��&J%�	��7�aX[�wܭ�0S�Si��zB����)\�B-���(��u�G;IQV��{��A������ybn��%,6�g@:���]���0�����o��D��NP�%��78
LQ���J(��@p誕�N&B�`1v$MD�FL���Q٨/�-ťK�J�5ś*�iUW6
,�TV)����sl�L�v?~��g���))c�L��z�m�\U���d����'��
ˉN�x��y���x����g�y����'�Uj�1(rcN�Z��]�c�1���2�NF
Y%�?v)DPV[:�j���k�]�Z^�����r�1�ʫk\����ŵo���j\p� 'H�P�Wo��d&��h�>2�ZG{�3��Lx9d�2/����t�B��pT[H�r4VR&���q��`�
��E��?��>�R�EP����`�l�������l�0Y�Q܎tg��4�"��@�/0_���>!�㝰� |tm�T�?Jh)�1�B��٪��/����?���e�d��}�A�q��8I�(W(�C7n��*�zC}C��6Ƿ�~�5 ��G��i�,ט�& ��WX	I G�`�7M����*�p�@��1���C���dL��ω�eS�A���^g^�S�	$�*ɍ���X�l��^����/�o�i�]#�-�������fώy��@�*IF��zQ��D\���Q�u�w�i���Bj��u��]رz�=�X�5�T�d�Ҡ�u!���P\���ȃL�N�+H����}��@b�V�h�y-\Q�t��O�*keqG��zىm�h�����;�X��dP<��F��K��)�[E�5��� 
w�8�?�u�~�9���u�$��4ݞ�}ߖ���H�������v�E���e>�}���x�G�R�>q�o�������<�D>r�D�������b�+L�l�4��=��pĳ|��d���j��ވ6BD��2��}bY�S�aL�F��ˋ�zO4E�3����Ӽy^�jfG�x��[ɏ��5�\F=qYgX���q�����K��8�d5���։�	q&Iz���@4��5���S�+��� ���X�[a�6�Be�y�/�BK� �����`P* }���\	�9�SV�����*�&��4DW�vC�a��>tx��_6�؏?rz�d�V�6q�T�Yy��.~��U��؏�=&N32�}Ģ.���z:0u�P9��"\�Osl5|���Q������[qx������0�<�Uc.- K'��%��/��θ�8�з���tz��޲J��=$�㘌L�x��kѡ�j��si1�����ʊba7w�=���)��ǣK�w�-<��ؚ
/��䔘fo����J��)r������7�eIU厑g2џZ3�yQ=���x���U����'x�+�R�QJ�G��9\�h-�2YJS��J5WG0�EܡI��v�A�~U0m���*��V�?��7���`�E��#��-��T��}˕�F�ƍ1y9�҆�8JȰd;��j��>�k�UB��@'�Fj�Yo<�@��؈*�S�� d 7,�^3~�K�5/�h�^�U�Q�]���+Q���62ɔ�"��pY�"[З5�
�v���S�aGP]��8}t�����$����S�ͧ$�'���Pc�� j[R�<fp�*q����I�t|Bڗ�Ģn,g^!'�	,��s\���M�ּ�VMȊX8�]t�4Z���:d�Y����J����~��۲<�Ŋ���Ap�����nn􈾮�Uq���OӤ�� ��[�)̽5��|�w
����Z�����������1KXt����T�$��n%���NQ�<ti�H�����kr��X8Wk�8��j�p��k�Ї�~|#��Q�{^�`N��;9@� \���.���d�5��,�ɓ�4���5�x�PуɊ�������;u���\9�F8Cb����L<T%���ǙI����0oW?V �[wbE���>_YȞ��IմF�2Sĥ�j/�|��v߯��7���.� k%ֶ�.1�����-������p��o}��$L:..Lsm��|KD�v�7U�pS�-�>霅g�]����"�~O��ܵ��2���q��NWHV���@���<[lOҷ��u{��;<Z������Qe?��4�L�c�
�))��2*��I,�;���K����]�r�?0�b�*����U�����?<W��\��.�0�H4�O�w�}��q�]̙SѰ�h[,� �#���iѓAm��h?��UC �j��޲g^5��"04w�Ǿ@X��?�U�?��znbt��~!�	�];���r��P^�^Asᮽođ@d�R�R�1bk�EjL����GzN��GĤpsC���`�	�f�s<K�g5���Műt��Q-�h�Ps/ؘ�nR6ef']���'�Tr) 4Fł8��.V/�1_�%�RZ8����/�j��Ljr�c��Xw��0Phw_C1�as��7�����Lf�M�4h)�1��xF���M��&��c:��kkR H��k�}�	߹,���(+���D.����p�����g�4_mo	C:�e B�D�V��	Z��g�������D���~x��mC���������%�"J��'#0#�; ���:��Q ����J!m�G��nc��,�I�\��cbdpD9)ᵿ�Ԕp�<���t��>S��!�P��@���W"���9tHF-��ʟ��X�|!tND������������zY{z�iuD�KY㞈�ٕ��r���@q��+���l�� �û�Maª�1m"�4�{�[���m B<
�#�V����o�T��?��$�~u��������ǧ���b�&D��(��%�����C�!F� ���p�'��։��U���4^7�ף��d`����p<���^?�Qa�\?�X�q�!���ީ��G���`_�4�C�8N?[��G����e�+(�\�4c����:~"_H��9&_DU{����!�vC�!.D*��.we�<﹥�{q������h����&p�����L4�������	��U��)��Wb������%��C�S㮧h�^]*NZX�(�Ik*�M�,~	��Ժ� �="F�(�	>5>+��)H�0.�$���ï3�x�����"k}�ݤ.��2��λ�|��oR�<uw\X���D۰7�X�f���p�{-*�� Z?��g��������:�hB�gsC#L��8��.:��a����{Cx8�~�j�[]�z&�?���~��ѰB�ޭ[�{r�;|B;��>�}��Ǚ�IT�燳߽(Gi���#�h�@�5��>oj��o~��Kq���������O���{]���Υp	�B���X�u�tZ!�1������	p�Qf��<L�D#��m_O"�6168 �c�n������0�%0U���é���`��/����!���wW��,������%#����ޣ8��.E>R۰���X3�q,�)  V�dPO'�\�]��n�S�����EF2����[��fOb�r>9Ҍ�q	}M�-�7HP�E�92��9��Ѝ��ip�n�w�z(ID������1��7�Xэ��(�*3*J=��mT\}��2�ƈGS[uɧ�P�>]`YW>���#���m<�������+��3�̄D ���LO�y[�|��Y2�9e�#1x3��&�� �{3h�Z�GG[�^��*:k���������Փ�rJ$��v ����P��P��q:�K\2�DK�T���p3�Z��Xw�Y�������
w]�l�l}��R�x#���"6�����ڦݓ���O��4mA㰪�/>5�lX����2{Q�8�/=]%7���dW�Φw2�I�/����9��oo���/�߱�r����d�,�^��c%\��#�w���SY3�\ݠ��e�<t�Oڄ�O�%5K�p��Y�S������2��R�)��������1��M��欷cu�2h�6�L_�;.
;��$�����Y�r���!p�}1�/��W�E�E��<���!:�}KS���v IĀ;��Y�"V/�i�3a�ʂ��{u����+"|j{�ԛ�ԇeCs���z�S?EC��+��t�MI�A&��{�0����w���{y�$���+#�7�J�pAX�9{[�4%���џ�9q�����Q� ٝe[�z;5�$�����'� �ך�V!����lKu0�9���\Y3��WP5fR@���(h�������M�i�+�I�.-�,8M�'�K��s�!�����^�OdS$Ձ_5]�p�4KYiRo�g�M��G b��8(i��ZL��ܕAX�ef�ӧ�}��w`è`�бu��Ԟ-�-Xb#�}���3r�_�Kr�h�P������<|��ؚ{N��L|я�Q�ucz���t��)����rIm�pZ%�}�R&s�?e���}�e^�]�����"�����0�^:<�q�k�G�H��O��~�[۸�o��8�hц�*e������/p�G��c��0�m|:��Z84���Fw�W6��ߕ�qv�ʉ��ϲOT��V��6�@���=_�'+�z��I��m#C�Тr�ڗ��\ŖM��M���Jr�J}vj8�Ց6o	~��h-	�Ӏ�StX��Nzx0K��Gy����V���z��օBܤ��2�TE1�&nI�-խ�&S��ڏ\MZ��"�!�G�n��т?Z'ŌfI�Ɇ���_٤dDq���oMh�%��):��X��x��9�,���I�!W�n��[���f\� l�5�F�D���x�qx�����c���"����U�B��j���=:<j���=��gH���d��XJ��Q�n��7��C4��c[ ��nf̬Y���ٜ_�&��S"��.0�������{�*6n
�8�N}�DBظ;S��f�ȑ��Ձ��\Q�r��H�Ȼ.n��=����ߑ^s)n�"X��lӫ����bS�C�6wW������I�'�#S��������^�6ܼ��QI;���I�2U7n�9�@��+�Hb"�3�#M��eV�j=¯?���ւ�$��i�$hW�ȹ{ZO m)�"~vL9�7� �����5�r�;ô?�F�N�48�^�b8�S�7n\�w��29~�M��RT-掙'V���G �OpHAK�}�Vn�b�j ��|���B��hZ	��x[L,[rz�4�~ȫp>����Ԙ8��2s'�z��/�׿pf�NF�z�ͷ�E�"g2E�y��"@,�4�䟇"%�b*L	1���!P��OS��o��d�}�-L��xe�1#�%q �FTF.��M��Q�?C5�-E=yo�)q��`�8�Ʊ߇�
p�M.|��sM*^��0Ҡ���̨�x�� QmJ*.��,7�H^ƶ��jw��}�k���n�X���(��L�a��q�m�Q�H]C�H����crBͫ�6�mK��K�B.�l:�7���J�#ř��e�rJ3�@�auO��Dg�\��>yq~Ų��m�c�1������hO;�w9�$�ڢ&�]vto�?�p��d>���ފ%#��s@�ˊ�*='��S~��8�]�"�����7J!^]5 �#OJ���=5|�S��u����-��->G ��YwRe���+f;6�{��<���<�^}UHsE�bmȘ{��7k�-N��V`��S�5���
p�|��t�tXǏ�����bZ�ׅ�=���ʹ�k_F#p��u�]�Ӻ�9sk�]�	ڢJ1�*r_w���nc�Y&�?֕�z`	E*��`�M�ٌ������.G'�k4��:̂у�=̓�ɂCi2̗7�I�Lze(�Y"���0�����X�	��k��S~�5��qh����冹��a:��O9�2���r�R��б\�,�ĝF�̒0bp$>>{�;�p�c��m@6HHΆ�
��{*�%��@C��K��[5�)�Y|Yca�1��E�8M�Np��W9��\/�^d���H%�q:��*ٱ�,��v(�|���䉍�7 ��yO�`�(y�61OB��i{_> 2	z,$�»��U	ԁgC/�M�����u����N��GP$;#/Uџ���^6ωy�&T�2W����Gc�/��g�Ԏ�t�pz���[?&�K�%Q�e��ޢ��b�_��������5��2pc�cҿ}�+���3�׊2��S�+ݢe��^H�� e�T���H��aN���р3_Puk)	q�>� �F�ԝ&� ����'{`FT��;~h��L(��7�9K�!��V��a��AD�f#��?�d�ݎ�Jx+1�����?������6%����I?6�i�ȟ�F�y2H�@�H�a���3#��bԩs��6�oD��0}�o>�)�3u������0�Z��-.)��W�`��./�(��VR�ڲ2�{Tp��(�{��ƴT`��JK�Ju/���)�.����:v���9�s�2�۶Ǥ�X��$,\ջ�vɝ�׷�����|���Cj�s;����	WE��}B�1��/+wH<'N���^�(�A�7�ճ� 1n��@���EAv�!M���?{nH'��EK��K�V^ ��q�����rū�C�
�l�A���|1tt�_HJz���mEc65	i�y�T3i�K�c&�?�v@Z�:��Sz��W�4�������|�-E���@/��:�5��gD4fϑ[��p�>r��4��B�Os����� $I5S�.�b&�@��� ��!�t	Z�K�92K���̕�f4��G�N|��S[(��\F�A��ū��/Nqx@�@2h��$M��w���0h�)�i��8|{?�8��VjU0b�l�V:nO��1���d��F�	���1UE+��ʗ)LW-��v�s,PPL��GoM6�(��f��w��:8�2v���7c�A*�j�%�<bۦ_�<H�@<h�Bn�
&�ӡ�ߤ�������-|��9���%��0ey�0�J����B���T��f��0�t+��	kT����Ji�F}�x�:ŏ��y4�Ӳ�(�U6�>ǩjZWuTny��~�xre�K}�����#�{����M4��q�@#�B�<�h��.+��U��A��T�
�$;���c׃P3x���sᖖ�K����D(FO���~��~��-v.&��+V�m8��̘��d���R�"W�f�<�m$4|�q��I�R����Si�� ׉�z�c�%5���sCƤ������5۸�a�n49�+�c͵���}�NI aW��s�U���cL���{����^��ҝ�wy
(WCe��Gp�,l*!!ԞZ�5m]��$xr�t6�����]kΛ7"�'�3��d�0�Г^�:�	�L,Y+��B�ǽ�f�S3r;�E���\_m����2�Q�?�a:��f[.�]�����Dպn�6qE�+���#i��#�{��=�Fs`YQU�� �d����=n78�'aH��/'E�4'�į^&3��ɥ$�Vڡ�w�m
����%x�i���>�)Н�rx��֨~��a�	�� �#o%��F�����#�kw��
#�v����MO;ܘ��ҏ8�Mw�id�Z~�~�����n.�V�#�Ļ��'g����/����j��.�)� be��NRø�#W0b�:iTS����'� .�T���N� �Q����S�[����\��kB�dZ�}��r�9����F�j����.~��d�s�gZ��i�2�~�U4g�WzQ B�r�t"S9t���tc�Ч1�O){��0�f�j�FG�����){/�
ƑS+� f�����Q3��ε��h��?Ooe{����!g
�R�1�J$b����\=�-�8�vKȎ_^ʙV�T�\��eq�yZ��9�w��Y!�[�&�L�ȫ�'cԉO�T3��-�ޚ����ͅ��U�>j�yj�#�sH{z�0��2�|���c�W����%�ƿ��a�:6;v�f[T��p��&F�l�5��,��GD��WZ�;�w���V`+;�Ȍ4�Z�o �$W��gK@�v˗,��Љ��P}j� ���9�;>#�D�R��d�]m/褝��4��1hR��T���y�8]|3a����\�5�0��/������b�LCQ.���m=�E�-�W7.�:�Y��Ź�H�$H�)�5�	XVt cb�-�ۣ2
���bH�:>�K���\V-�\dص���8-K�q���Ra���k�T�`��|����"eF|R��Dx@u����lC�o��BI-�j�a��)�� �«ì���a&I�^�BS]|��>Ǧ���S��&�V�d�SLD�V�s�uK@qr�X�c�O/ܽXn��`�QHwtd֓�_�D�R��5ڢقn�t$��yVE�+z%��������7������QV5����ᔄ���]�|�&�4BW�Co��s�>C)�;.�HW#|���z���豭䒒�a�7�J��+��l&�ܱ�L��"���t�)�o�gیl�/^�?&�9��Ts{�D�
R�b��;ў!�y�1�!{q�0���`
ih5��������E��w��#�����D���1��s�>�����>N��ȽQ2�0������s�pmEN�s��tJ�xLW3ف����6�t\m����F(�����m�U���ʀ�W[�(�D�,�����D�̪�}HN:�`Y*3*A[���r�� ��#�u��C�����	 OߗUnLD})�{6W��N���bMy�� ��ڠ�;e���<I���������S\z�R@��b�XΦV��s"��S�j���*�Z�2����.wZ��gu�l5�F<��[Zc�]SZ���[��頓���$�~�,�{�����X/��j���TuB���{W���MF��%a$�'6SA��w@݂�.��đQ3�����暡��u�Ng���r6$3l�^qh���M`0���p�-���1J!!�f	���G7�"�y-7�!R55m)ulBf��р'���Ĉ$���<��L�WB�!0H�=֦eM�Z���n�B �3��X�K�E��B90��/�F��0��S��T�3�n�1��������ȦG)�]Xph4�|�3����`��g�v�A��=�}R�`��`p5��tq�����&j�C�Me�G�iY�Z��v�UA��^ʲ���%ɫ(��� Ъ��B��j�i�x��Q�����Fq@�r�@"3��qz��*!.�f���I�)����9��<J��@��V��%CG���7nGzF���8s�KSm%RBa��h�.�*�us��W���t`��AA�x{|Vd��%��;�ɡbč��N�*2�M�k|@ K�i ��p��/��N(+>���x�y�0.��1u릧��>���p���o|h؟�1/A���W#��Ns�=>F'*b)��~�w��%Y��:��U=(�l�_���% �C�C���]F�~�݋���KIu�#[A����\�N.XG��X�v�t��^Dɜ��.�$4X���s��~OwJzU����!.�U�.(_��N	��
���N5�KB/��JAf���E��l�����W�商��FC�����z�@�9��Y)���HJ	�s_:�g�����hM��n_$��\"�A$y��\`!�	w2�,w&y-d���d���Fʳ�AV͜��]t�SN�@�F\�\aټ���f�79]PgO�_ń6ï�p-���r��L�.?w8Z�Y�h�[�F�Y؛�ȕj�Y}'����8\VZ��DRq~tdm������;6��y��~����,�
�\j9
动����e��lQ=��6��޿/��Ь�8�����WSQtWHs�����4��9�k0C���4�׹�)��mƝ w�d3���6;z"SbP_丷6���ke�5��^G�B�֠���[�(�<����Z��}�nf�5��|5s�nL��Y��16ϡn(�䳈�e�4_�iE��4sz���
���+>7�9��C����H�8t�k:�_i�*��$ߵH�BH��(%�ؘfl2G��0�@��R
�J=Zo�X�OgT%���o+	z�yyVo �'�v���y�����:V"�k���X�(XV]`�-[R�ah���H
�@���ѽ��?Z!��i��Zgk�σ|F�R#=��U5�Ȕ
��QgW������w��}�~������'ܩM+�e�% ZD���w�Z���uO�p����?X�w9�i�cm6q���#�gҌ�0t"��Gw"@E��#��ۓU?)��â�g���w�g�"��*N,wA7g���*")�f�@Uᡤ��l���n��\�;~�^ve>6���ߎ���/Q��ǂu<��kR)����уE�l�F�`����S�wp�I���bb$�3�a�����)%��DH%a ��K<�qY� .�]Ma��w��X�1�ۂ��Q���Y���-���>|�
�FLX@���_�sv�US_}H��@�q���zuD9���#��h
و8��W��:�8w1.�������-���p�Δ�O�7@�gv��wr����3g4�;�����t����a���3��=0;�!2{tفt�b?�qh�?ɣ�JgC�w@ a�\�"'��OmB�HS�\-ئ���0�F��^\9DA�"c}iAY!{1B�U�MjP���2�Ʋ%_�������G��-Ӆ�ҿ�O�F)� ;^�r�<\
�����P=���)�������)����F���udra��K��0�V0jLn/�:|�+݇��o���:���c4rJ�qU��@��I$'A�pa���w<���,�h_��I�Kg0�������ѬǠ����k��Ў��ș�79��7z=�f��H����w�M�t�������X{���H|࡛�6fzO���u)YR�1Z��7�sr�s��8��t$όX��J��`&]yw!:D�|}V6�츃"S7�KI*5��U#j%�w�jU��g�pľ��[�R��E�yN��oC��eNl���h��:Z�5���8�hTn���/F���לTR_��x" �v�-��6A�K�:5�I�uT�UBg��8���A<�Ї�w=n|Z#�GJ$%!��/���4(O��U�� �.�xL�%��G�o�2-'p�G��nmg -�ϕC���2�tW�#�|���%��6_���������^H@��X�:�چ$�Fa�i�vm]�Gi_{%�c�ؚBv8O%�U+�ٵA�]������?e�Ο��㨕Zݔ��4R���Vn���hS��r�;6��\��gG��z䘃�ԉ������d��~�%_�{̸����p�paV�B[O�wQ4Cd��é��Ԃs�=�%w���D,�>� m%�\���;#`#��p��,��2	���5GD��e�v����
O��fY�����R����Q �$?I"�F�=X��\Y�z�'��o�=ȯFb��Q�����^6*L��H
z*D�a�|[X��]5����㮷(���������@�>�2�>y�[[�܀�/SԞ�QH�?���&Sm�"���������Y����P�ǜ�D�	���������6��V�J����	W���l���p����ؗ��ݾ�QG�+����8��s�����s?y�3K����\g���^�q7&Kv���>p32t_��^_)��������ݺޖD�MK�d��:�1Bv�@JDֱ�D�����Lċ����\��]�Ƭbni}T�mf7���Q�!3���8d�r?�24��x�(�x:��R+%@��bb"���t�m��4��qL1��+�v�+b���2?F��g�pa<$?B%�x|�s��x�ce�c��eS�K1��J���c���m3tH0�9u>�����.(�����!"���)�;S�l�pvi^����B�ͶlJ6�W]��+L�� 3��,j�h:6�V]�TH�˶��BB&�-3����\5���9z�eJ�	% ��J��c���E��d$H~Q�Zh2�OOo�6��y?b�hI�Lp�J��Z�c5�V��Ġ,��k0wC�F��<�L��>Hm��-�I@���;%��:ҭwjo��]�����/{0v�&�;��������{6oU�y�#��9V#~8V���0���3TF�6�p���5�(�R�@=𻰐����������xX�G����#�6j�x�.���Qn�ъ͟��{��:�Iw��o�_�)��MR
�a�}�]���]:�M
$����J��:�&�,��@���2��H�_E�{����bK�����W�߶�
σ�.U�w�U:��̱j�?=��M��4#6��0G�8�C:��7|��oG�M4b����7B�;ݿW���=�ZJ^��>!��Gv^��|����a�Jo����? ��F
W���(\�!�C"��d���྽�\U�S�J��+�8�í�v�7v��!H�8��q��;{��:�Cg��2ձf?Z�+��ڥ������I]�mY�
�얏
j(S2�B����A��+��%��4�x�a�z�n~U	V/��_�D:^�tpꗉ���^a��H �X��gMC��5O���+� [��Zc;�+',_��N~n��bԐ'A�>�����j�X�c���S��G��l��?5]ߣOMv�C�|��Wh(�T�n�A>�;_V���۠{��:��P$	I/�'���߱�g`(�z�r��)�{��OrJ_�oޕ�ÕA�VSY��2֥��az�ɱ�i��ԓ�JdR��?X���P�{�2�\4�Z���4 ~�@��-d��@|�����Tm�v�lq3b���zt1ʉdL��lAǰ�"+�C�8`�x�拓9��ô�r)lk�W�����U
Ӿd!��$��L'�&�X<�@#E���'�{����B�#�&����(x�o��\ԅ
�x��p��ɉ��X�����x��-{�*kf_�q>��g�1��L���i\������Xe�܅�������(f/Nd��9����?`B�
�=��4��)G2~
�Y���9P���lQ�׺mܬ+
�������3AU=�˽@�嗜LO�m/�/�f���r��,��]�~o�@��%UO2E���,��t����K�v�+w�Xc����M�>rS��R�qE�E����Wߞ�fc���LvAD� ����k��i�YW�0�w	���֠3��k7�^k1�9	'�!��c0Ţ�[Y���A�-�؎�H�5�e��EI�I0R����&V5�!��aFo�F� #N&�%����V�%�VQ䳌>�����	�H�M��B�~��WoA�30+�+!��h��]����l:��8���0�W�TEpԴ><F7�S�ڍ��Ti�@/��V&D��ҁ>����6+��\��Y��#ޔqǑu.��Cw���K��>�ݷ=Fx>�cip�ވ��$׹C6�� �o��R��y�]ͦ/��l��n�2,=���9 ;���>�7�;M���g ����⃑�u
J8 ��tkTUy��Èݗe�M�P_�t���|m��mS��N���zHڦj����"\�	��P��ū[�hq���3�% �<
6޻k�ewʛr�94��
���I%:ɤf��"]HX�苕�bZ<j
�iU�O�j&Yp*{�,��#)�T��mf�T�Zl���4iPnFª�w~�S����d��\a\���8��6$䌐h�[�z�s�#V��]�Bb��#4�E<�
{:{��[¹!�Л��ЍR���L��B6r0��@���Z~��L_|s�;U����ly��T��Pr��6��"�|�I�Q�#V��!Iꚢ��~�-��YC홒*���tg��>��X�h�8*�L��wF���M?�Z\+���"�_��ˆ��a�]�9�6���XC��ħ[C�T �� �똴f��P��ߊZ���+5�o���=^ٻ/'Kf�z3�<чN�_;ː��`�n���A�]��Ip2̧�?25l�Ur��Y�눷6��gBp��v'[:�;w��PJ6� �=KÆ��,��>�/�$���P�|�9���� �QY�_(I�)T��E��P���Iś� ���&��#"7���"���ڏE�=U��;`�HD���EÈڍ�����EJ���-'��I�8
�K��}<I�ȱtk�U��iY��ע]�:'�)��gum�	Klk�\y�_�,�����*�,z����`3I�E%q�Ӵ4���k�Nu����Z�s�v���[Jh�/LA,<q�좍��y&�UG,^:��\4���*jC�e�E��1�*h�n�J{�S�Z�Q�J՝)�٥=���u�a_.���&��J����d}�j��/a~b�C\+RLv웑y��XZ�JY�d�7��է����P��`RlR�H����������eu��S1+��?�N��Y5R���I�G�@N��d��,L3�wjm��Gv�H���'#����D}�R�_�Ǒ	�s��j���A�����`�RX��-�r��~�_rg�c�X����ۓ�Z���u�a��*��(7<��;?��%D���Z��G�R��5�ښ��1s_���*���o}v_���q( ����i�	�I��������E�䂿�va��[��OM���'�P���E��X����47M1&�ao�?�v�59�20�cX������<�[͖�s���r	�i8L	�_~��>��ό���ѻY���_�{[�D�Zq-S��f�F	7���q�ǧ�O3�ա8����i��2���=8���[Ț(,s�9�Q��
g�z�ٝ,%��yb�v�O��p�x� �4�n�o��� Y��Ḕ�}$M�\��]DZ�F5JxWu�b�m`�'^A�'#l�e<t�zz���׍��I�Zx�=��P^�!�O��P�e��q0�1�j�XØ�%�N�R���ӗ��L�џd����j�������HB�1)=h ��hW�����I�vB�1�%}7��Xpv��
l���!ۃl���s���"�|Y�7�-9R^c�ų�����������w:mp��Ƌ���F���7��=�������oV�������(�pY��P�Q���$<��mY&֣Ԫ��D}b%`��">�E�'�I��͚_Mpf��q9��"~}��]�g)�J���2�Ah�)H�#��^P�� h{\����� ���J'oF�vP�k��}�8�!�-O�y���9����S"����#��H�C&z�h��}��!hUѬy����#À}�CH[|e��V�&��L�8���b�ї<�,�p����k��8���nR}c ��!�5�9�:n<q���,�[kd�8$Z�����+f�Zp�;ct�j[z����G��]�[����F!������!�)ol���VX4�ݤ"�G�;b�D��I�d�ա�e��߸�x�+�Ҧ�M�`����$��6ȳ`�HrqH D�-m	o��M;¶���d}2m���,�=Z�P,J��U��d�L�P3�߾D�m�Ϧ��=��P�f�!�R�-����IfL������L�+9ۘ|=�"���u�P��f����oD���'�I��{��t���:�\�V�nC���̹��#����aO$�<�����OB)� ��v����P�P�-�B��p�R�\v�����*׋����Ou@.��o	�"K��SD�L�xX��AƵ�v�@�$ɱ�����L�"�(��!�RB|4��G��Ԇ6���#gkb�d/uC>t�B��Jh^�o��9�OD���(+'���� ��Y3{� t3�.F_C)��HnB��$=��E���un".��%���N�"�p;��yqw�jjp����W�X���t�<B��g}UES��s¹�H@O��mD%�.� ��l��ȧ�g90���stDR3u<z�(a�a�������Aj�����;�{����S����+zMH�I��g<���ȿ)�0/��-�%�qѩI��@g-��m��Ͷ��z���VAi��L�����i<�V�MW2�� Î�uZi��{ ���}D�~Kg�Lmo����\-4���G2�5{�?�R_�,�B���1�V�[&v5��+zg>F�J�	w���Q5N)���b�蜡6ނ{�}���!�ZH��n^&Fv���.�1��%����D�Z�v��l��߇�f!���i�t��"�3@�=�V��.���w��A����1���V�5�a���aq"�æ��
{Y�@������f������L�^��8v9�p��N;#L>����u#\�̌
�.��u�߾Dp�8`��O�����Bg ��
y�2�˱�&i#f���C�oR����~bW��^�>���t���K.�j����r$��u
'C*��=s�| ��Kds��*��o�}cM/H�禙���I|��G&~�p����������5��d������1�p�j�N���8���_[���3o���S��n�{���|ʕO�(�cV�Y��]�Uf�@�f�p26�P�Ȑ�$�K�X��L�xO�&�J.\��Ҕ�ӓ+�9���ڇ�,
��Ԉ*��\��r��!��*�����w�Iw�H=/����s9V�f��N��b�Q#k��U�ӀC��Т�
��L����|��$���tdU��vy��Ƕ/���]����Q~��/����ʗ��(��p�<�`ϻ;��O+2Ǽ�;�um ��D彥��ab�0va=�w�A��+��W�f��b�N��ߧ�ˬΖ&�&_VF�`s����Y����~=���m��gi�����M0>��6[��~�iy��L�!EA��ܮ�n���l�|���
�I�ژs]	j3���հFt���/)%`ږ��)m�>�c�������G�c�1]K� ��4\�V�������3���&��(=��3�FV���w��M��G�L	݆J��V���Q"0������r�
�X���#ޠ�aL��ga)��|�M������xE	�%��D>i��3�(�:Nr|?���~T�nH�a	��EjU��	ш�&� �)����*?��<�4OVb: RL�7���Z|�	�Kz�NOvv ��� �v/&�w���ŉ��OD�W�$�	f�B2��/fi��BE�¢�b3YWY��F���S�"[.����~eUѕ^JL���p�W�����a_� �,kʹW�z��§��b��:+x��q�.2]����C�2Fe��TߟJV7mRO}Κ�	�\dd�j챋3{� ����g[{�k� �|��r��x3e��n!���8^B��ӟ	;aH����Z��'md�S���\l%F%�}���kF9!���0���aC��P��P{�RЉ�t�3�b�ϊ���eI� �'��Z�Y/ޔ��2�j�K�ux��u/��a�k�����!��0�=��S�֝��C\��<���/Ge�Y(��B�:�Ӿ�K�����s/8�̚�
в Q��b�˱�ٳ��vE%KL� � #:!;�+.�2�~���p|r�'A9���8,1��`-ڥ�J$�.چ"#Xp�սV���-viQ�ҹR����N���q'����:�Ci�rNC��Q�N`��l�v�Ηb��m����h���U�E�~Ϥ��o�T�eBc�=�u���72��H�|৩4�/PT��	��	&J���{�aoJ�r���	�R�)��Y���<0�]Q����t�;hRm���KuA	ט�ܴ ����Vʐ{U����9�#'c��=�at��r�F�ֶ?��Ա�*�R�����\/Q6z�V�z����%�Ue�� �j�'�bȝ]d��9hX�01O�s��p�#r��w��Lt$B�.�5�ұ�
ӎ!�΁���[�"�f1�� ���DR㤙7���l���W`o���������dۋ��i�O�e�06����SG�F�ʿ'I��qO�y�WD�_[cη!H�������K��={ڀN�m\�e%�;��ZYYPZ�p�?	�DA/+��y'�ÿ:赕b�AE#���g`�rr,��bJ�o?���_Oz<���P]ӽ2�qm��
i���(��I��%��Y�Y%nr8��a���[ej~�jk�^�f��n��sǈ=n"�X*�$�&������b�f1+��F�#����T���+	}�)��̓Zo86�%��ܾ*�t��T=��RM')�pB��1`�=��Yn� ��Ѵ�Y�9�h��Ï�HoO(��{���s�f����Q��rD0��[����Fz�0z�b'�%#��3����/I��W_�Q&5|`>�dx��W�5I�߯=p�����b�v����� ��'
Ȉ��rb0n"�E��l]fz�J���0�A�����%)N(�gl⁝oG�v�{��j� e_����e�9'��3�- I]��`�p7��v~5�|����#e�LRm2����Z�������� |ݻ@�%;�2h� �д� 6)�1��������& Mq�|��I�ߗ��`f�|\�K\�ϖ?�	"�-�޺���EG���t/'���wG�X�n��!�;4e|�d��.��|oc�T��2���s��p��7ny;�G)��~��x�g��Idl��	�K�����8K[����ǃ{����0�|���P�;�~=��t��H�^ �:9Ǜ8���eȴ¬���Y�2N�4�S�����~S ��T�h���4���*j�^�{S���m�#��+����]��B�����O߫0��iY�[퉩��ۓ ��~Y�N�a�������A�jƥҋT�gA珍��`���=���D~n+R�E������7;��|&��.i��LVt�7e}�ge���B�
K�$�P�]���0�.03�����Z���/�@El�-�p�B�%���Fk�X�Dl���u�J?g����Y]�I�\����(YuRB>RLkQ����*�uK����sA�=|}u���=_i)�P�����̽S'�8����l�ڒ�H#np&�]'��*e�C�u�L�t��,B�����|TuP�ݽ����ísgj�,��WU(��Q��j��j�E�Ȇ����%B�y��*��:N����i��E3�V'1:�0��M������ɩ�Ȧ�iɟ~� �{�Hl�:���6y��GJp$�����dg/oTH���rR�Ɯ��.f�����໶�V�A�."�pel
#�f�t��B��	�I��;�g2C��*����d���2{jz' �YS�o�g�@;b�f�aKw�y�_%�]vl���b����]�G�R�)�"�^�Lc	�����[���(4rJ�UhE����w%��$؂�
`<��ǧI7M�$VʂEV?i�x��>1��~x�}�����c������#�#��ޠ��I�tl�� ��~'���M�%\a�w�cvz�#bW:�t���<���^|��uZѯ�Yz�!x�pಌ穞\���;��46�%��Ã�,hiH��_�DB�`a�8��ďK�����+��>��)��b���9�Ǎ�1X~�j������ج��(v�l.����w<0+4����4�������)n�Q�p�7�>���W���v���S�'�t�9w�+���^oժa����k�����kE�+q��s�"��[��n
w,��eƕv@�E��.�_�[V�<�L�;���p����"=>�\? �,�����3�ǳ�C4����l m_���¥~�!�T�W�ừkE	���H~TQ�g'{^ ܱBMY�-�t�`1))�A�"���ǿT��\T�Օ�pj|V�=��(e���Y��;���+�;��3u]�Z����v���d�E9�m�s��[�i $JwY�B�\����8�_��g���c�ו� ��5��L� y�s��y���Z��!�kW
ڗ�'������3#1kU1���n���Skn^�Օb]�M�L�wan��9��iD�e�����/��9���%P� �V?�ό�-:Y)>d�7�Y�����uH��������M:�[T16�:��T�o��kFM��6?�x�$��^2��A�p�d4��b;5��

px���Mw��}p�|8�ATj��K5�����?���1�!�/ �H5����?l��(�T�p��r��4��s<!)�����2ǖW� ZO0D��)7�K�Ⱦ`̊�46����`:6�:��>�,�bn>�nKk���,+��������{	]oy��>��9o�s���9�%[*��«����s��p�5f����z�h�L����Pэj�;xsK8'm�Me��)'���M��I�Ie�����2\�z���7R�~�̍	1FDr;U���I���%��ལ��kb�LL���C�|b���O�2��s��סKvBtO��w���/S,f7�<G/�4���+VL��Ű����ۜ���eS���N`/��iU������_縌�����c�<	A�/�b��xw���p�譴� �"��V`D��}äФr�̲k�ˀ0�_Vs;��&`���ib����5Ɉ�L���ޕ�FT/�u�k�Y���O��DAl�v�Nm��[���Qq�R�ݠ����z�U�U���Mmi�Y��>�x���2P
YZ{�D��	'Y�]u�e��EsZ�o� =�ӱ�sR3W�z��_0��؈�j�1@/b�Yl��].o/�d��Zja��*�nf����u�N��Rsq��?yqX��*������k�3RWf��BC_�0u�w���ܙ
r�������J1Cj��մ�@d��_A9��b���Ԁ����zg&��|����@��~�;�|D�*;i�J*0����}�z���0��E�/���%��b�)at�a�ʸZa�f��[x�XXeO�V�&zS
��aY���⑾�<a˟��k���Z�L��6}�>�H�vMfDw����X�O`�6��'�/9�t���\�Iǰ�gdT�ǘ����L���rc�V0���xT�yuDֻ4:��5���Y5��B�7n���=̆��tߡ���5�=wGi*��.tJ�
����Lix��p�ҡ9Һ�u<�s'�_T�� ��I�	�`�P}l�(��DH]آ�������m����T�!ߣE���D���\H{������cz��+��H�2��W��sℷY*��L�QƓ�$��C��)�P�.��Ȫw2����A��\'�@�/]��)|���<�[1UN��gt���������y���p������BN54#��	޲!7xN��:h8�,������_yp)��gJTlL+�[]`"�%�����;	����Pӵ���I�v֨�?�V�P��DH��n�#�eՒ�ԯ����c0��F\yK�T+��Z b#]l���u�� HB)�QFK���x��`����v*͐��y[,iF�#���݂w.�
�t��ܡ���ތ/���&�vߗ�;���o�P\�X_(:¥�F|���0��E�b~(-0����=o{L����4�������	R�?�}D^%����9j��1�%�lt�o�ϛ�E�9*�{�����r���j���Y��e&� �hz'¼�
m��ucIpQ5�ϸ�w�^
�~ښN���%hs|�2~�rw8�21�߉�P��A�*�5�*�j�j#�K�Ι���d�-_*$1U�x��]�c&C�!3/ʲ���N8X���ԑnP��htq	�Hp��Dpr9z"��l�?�YG�ǧNU�����@��zPb�NC���LLr�2�#����cv��ޟ���!�9z�� ͓)��L ��+�Gb�/R9{�K�S㽝�Ŝr���Y����heV� /��i������+���E|!�yk��g�`�[�tF�"�;���Ȼ��i��f��o�K"�,��/ ���L=��Uz��R륎)�Ӿ����u>R�
QG�d�_��EBܶ����vI�%`��]���u�$��m�Fy&
�E"�TtB���
�];���J�B�O$��@w�b��1�f�}c�{,�Z�(q���x�-X�����Y�g�˩�t��y�.�����WA?7�Nj���Y��3r7�Σ��d���9R�Vf2�ͦ(9�r�W���@O0hђ�<�f��`aYMTi�sp �.kG��/G��)j����V�g&��avU��#A�'��R��:x1�PP�}*�Gٟ(mr���f���v�ۡ����Ѐ�E^9]�@yd��n7D�3��ms�6Ok�ן9	Li����P��u��ў� �C8��y���q�)"H)j
ʈ��q�=7�v�gE崇��[�Gq[	�F
Ǭ�H{b�8B��d�0o�b6P�P6`�R%�|���?������Z;��[(�J�j󝵲:���Z��Չ���t��mz����.�'��ɫ�"���X\C�U�N@��bfBI���Ij����1�VX�uP�ŒQI�����T\�S ɼd���Eb>��кUb_n3t�Ѣ9��yz1���,ܳH��Z��<|��I�2#Y�䪸%a~�KBO�j�J����4��57�*>�}�n����2Y<!,�8��r�z�)�;Qk-�y+~Bg:K�=c�5p�|�>�������ݼ�U5�@W>x�	r�fX1��Lq��+�3˷�+����&3��,�e�Z���:���o���ԑ �u|�o9;Y2����K�Z�}3� p�y�	��j��i�T/&kWl�
9������d)(�`j�Z�`�z/�vQXϳ�L\*v�?}�A�D���̖�mm�Y�t�_ir�+�"]�@�)��sD2�l��{�'��B�p�3PYj�jE�-,U������k1Q<}�I �֠
DKߌ¿@���d��Mˁ��<��^� ��]�Ɯw�B܌b�a�Y+��_�sC�tvضYE������Q> W$�!oP�
E�8�.�Џ̻~XB���h��o�BcM��N��^�� 3pv!O��c`�[@J��X�z��E���J�Șr���b�����4-�������h<��^�@�n�_Z��tf�G�����f��:E���۶�0��^/��&���p����7dt6�q�ܒ6FG)>Zr1������@y�5u�$��[����e�0"�Ls�{i��h%���RF��K�g��T��
�m��D�p(c����({�/��1~lJ�.���ŕF%}$-��i}�/��dmx�zZ2Z���W
��3n��d�\�e]��1�9�:�_��k4�Ă��aQ����M�q.���4Ђ]��afee��k�/9��%��Ǆ�R�A��\v���3�(������D6��meܶֈ�'�R�eT��W]J�Mʪ�a���6��ڛ� ��y��Pd����TlG{5"��Y-�iOEU�b��В�Tv"G��n���ù�[<c9�>.9�٩W`j�0�j�g�2ZJ���)P�Bw������?%�Ol�^<:�؎"Ě�$z�����5���*0Na���[��2���u����T���b�PT˜��C��Lu���{�ym���]�^Ȫ���̇� `T�P_Q�d�'�)�����V�$򌀧ɉd��eE[��
)�C�2,a��1 p�e[|JO|`����G-"�a��j$�c�~��-U�r캌vD͜�kĠ���R��QGL��tp�u7��Y�������>XiVdt�䇮M�������K|j\�}�M��^���8�e�5�q������)�E�Z��>�;§k�����/��$Ã�z��!J�`co`:3���-��r�fC��-����n���4-pPʜ�(X�0Jvخ��h2�㹹�I��Y�14҃!Ø�����L5�*0��?� m1���=t?�?'BS� �A�UJB5/�'�@]8�T.ʶ�׈r/֍�:���m�oC[?"L�fѴ��������z�cx4P��hK֖󋾷�Ul~{i�M�mT�75��p��'t�M�K��#"��H��۰0��.aFȮ�G�jM�����pN�ʟ���C�l��xE� ��e���r�q�*� 	��3�����|L�Uß�נ��'ݦ|=~5b;0M��}��&d��5��留i5��gkt�T�&�����>�	�k;F��9A�_2����i/ �PYMq���R��{"J3�_�|����C(�-�J�-��	w��ă��fD�So�c����ڒ�d��ϖW�t��BdT�v�Q�!2Gm��w���!v`�F
/�7f�]f�ȕ�_����=Ł���7�G���{�Cn��0wP�ey�W-b�]ҳ4�Su�A�sk��S%���V��1���gܭp���WƆ
��@�&�;W���3�E6��#��e��7ex�Q�����H�XA����\$��4�z�x`,�/��c�a9)/,�3
\O]�Kr�[��=�Cܪ΁:ig�߈���I�-��m�c �X?׭��餮���" �l<*�WOѮ"��by��aG��/,GX��1�N>�Sh�c�~/�
�Y /�ɰ�)y����ox���W�0�e݊�c��#��%����ָ
ڝ���J-��M����U�ۦ��$��|�[���i��W���$��T7W]3Q���1���ϔ���K���`w��6��D��?A��~��H45)
, �2���إ҂�y�)h6+ʟ\ִ�-���f�����.	�e�׊?��/�{%�C6`�h���Ll5E�'F��R��mnP!�4��Ճk���d��6����ǒ��q �N�d'��`9x�_~��0�۠m���ڈ����XmM4�.Ÿ�� �K�o�s��0����Z����ĘW�2��'���ܔ�T3���!�w���N�v@Ėϸ��}������s��8�ZC�KX$rO��y�� !���n&���[&]��g��[a��Y�bWhv��N��w�fTO����r��O��3k���o�fNs
E��?X��k�[m�:Y�Z��^X�ND��j�
%1���YT���f����m�
[#������,�˹Վ�����h8�D��;V�Q�/���Z����Ё�%�� =�EkyR�z]�g���b��l-��MИZ�۸�DJfK�����'�ؕ�7j5x9�1����A�'�I19�%+��k�_���9��in�}ɪP�y�(^���m>.�	h~=S���O�Z���NK!��^���A�b�~�ê��+e��2
���I2Oe������$�'��oo�l���� �
1��''����}��;>���-)fQ|;���Sب�Q�tK��==���T-�h/�����i�|+\i[	�MJ\�F6j�ApM(EV2L����HUuѦ�m"�2���"���%��&E�=��7��0�P�����6��/�F�h�+	[���l�c�IrӷZ�7Lrq%]�o��.��`2���3��w����g`׏���+���K�ؗK�#ů��"%�qWm��
��O������lڶwuG?.h�@������=+-�|���F60�wLR�z!�F��9����l!?lP�u6\�X�L�²޴6)9I�����,�w��bu�K/F�C�c��A�=�~�W__��<��2��ėz9��6�u���E��8*e"#�'�4PN����2�U�L�PD�p�NM��b1(��Y4`r,b+RI�nx	�{��ч���|�ے��[b�h��Ϥ�Y֘�1k��*�s��E:�}����oi)*'�)�y#vo��3��py�P��*�]�FE_���/aA�0>О\-�~%���W�KB�m5I[.[��3��&�ˋ!��@;:Z{T�jV�Q;>��P��ĝ�|~벞PV��'�A2x.e���={��)�l|J�����XW�P��� ��ա���OČ�T��o�¸���N�[&f���y���G���\.AҌ�"�`�Ɖ��ϲ�G���ܷ�<�V
�m�h[�<�X��>鐧O�D�+�0�S�23���h�(��Y�	#�Pp���Ri�i\�hW[�9@��rᱧ�0H�T�_F����$��N��8��Av��ު�uw޲���aA�����w4ob��BS��J%b�k8D����pP���D�x�'�Lrg���'w��Nx���H��bb�bk�a%b�-kG ]��V�5��lJK���\׾�6�S���JH�W ��/���2�(��iM���,hE�0���� �5�cM�D��3OJ� Cg��	��u�[�"
,~7C��P�>���=Fm�~$�*�I��(C�ȕ�.�tI�����9��(�)cI_�>�������e�8H�ע��� ĝ.,���9ɗd㞢�q�c]���k	O�����41��.ƶd/I�ӯ�{O�EF�1@�#Ǝ�?��4 v�0kP�\�ANRᾜ8\�:N>���>���zk~�#��u�\s�✩��V%N�Je����8������#�
�1�	˫g�5`��W����d~�\O9�*�?�~�X�l��D��� �gL5ö�U��.���Kc)Y�n*KY��dPK�^\���d����nȀm#���۵Oo���R� �1�`rG-2�Ҡk����B,a�3Ɖb�����n[�㥛�|�	D]/��&�jzASq�26��3���ĝ�߹�Ӊ�`�):L5X��l�@���"!��c�&��R���^^�Q~�Z�����)�祕����aڗA��CB�f��w��^�n"T���E��!}%��L�Zȝ��.Fz/�8�������)|
�8�.`C
��81�^��w�Ef�j���o8<�g+kc
�w��������cdO�;�^�`��'�Hzy�8U��y��n�`�������䬀��Xe�V-�k�z~���Ny�f��] �E0l�~��U��KeY�<�g�h�-˱x�>�[y�ߋ�AN�!�Jt�Y�?�7�E����靥^���q�bLι��8\j�{m�X,&<6���j����RbJ�ۘB�.�Pv��)���K����]�L�);��5	/��܀�d1� ?��+��4%2`g۳8,�� 򣜡����Y[����W5������?�[N�;_�~�ʵ���'�ŭ���6���k���/=���9e� ��#K����B��_Nժ�S������'6���� ��t�m&ǗV��	�c��:�^�ۧ�՜M�l*��p\D�+���b�N�t)���h��zE�#tR��R�����BET�*nҨâ��F5��o}aj����"�G�������K#�n%��fc���k�r{�ȭ<C���FO�۔kP��?�E��l���]j;�P�j������G_{�՜sG�X�N ���M�lY�)��͵)��ȿ��n�b� �%Ӓ�,FG9�6�\�6�ּ�%��o5ӒY>�v�0�{����~��z?��&�6��W��p��m�C��U�o5nmI�4�%I\�e?2w�9�X��u~��S�6fj��KLS�6c�����5���՛B�>x����Wt���V[�����¥��Ŵ%���`#�V$^b�3n���*{r󴶝Fk�9n���0���>(������xΛ�(�
A���s�/j�Ć��w%�Sn�G������z8M�9Ҍ������j�'�wn:�r����2~.�;��Z�)=�w���{b"
P6�lv��^��mӈISd#�i�K��W��H���Ge���\4.1����@��S̯�WB�/0���oL���r���A�y�T����+:Vcö��>k�Ϗ�Ԫt�Y���h�-m�;�*�?za`�4�d`��Wϕ���O!:F�}��q.D�ؒ:*� 2ʹ�s�(3�������&�4p��N��5�
�tIʑ2WΦ���T�xMJ��e,tOE�&W�+��WG��2�D�( aD��/��RFT���4���WΌ�%V�%V'M��J{4�-��`��8�t�3F�w}5�X�D߬u?ؚB�X���q-�=�ׁxܼLK\eI0*�&��Z�p�{A��U���W���0*#*V��*2 �-�z�6�5��M��SK�B%��ޚ�X�m�@,
X4).V���lښ�}X�F���ť��:�?2C����gF`�E��	��^�Ý^c�`�s�T�'�^.s�-�.-#
<�sEWڅ�h����E���:�p�פ�	���_��f�{<^�#3�vdۡ��e.8��5*���^E�	���)lT	�9�
�RK���D��j�=�O�q)��'8�bmt�nL�i�|�#���DP��>_m�pJ�řĜ<	�O0���K6t+V����d�A
t� ��U��ϥ�%1Uтݾ_`D�����7��v��^Ao)^W?H�R�K�ܬ��xϺ��Z���G(K��JI U�XOo�ޞG$Չ1F��6z���g�\G�^�����D������lC�IgHG0��Ǌ?���ݠ��$x4$����Oֵ�myt2���-�AU;������t;JG���ĳ�"��e9~����Z`~�쒐 ?���n}����K�`�����	2�� =�|��8r������139��>��d��f�=!#�F�U*g)
je<BP�y��g�w�0uHo��^��h�?���Υw�̶j�����5Av~6L��Q�?N� �HI�Tc]�U{�K�#�����м�?���ӭ�׍�vɜ��L|�(������� G*�p�ٯaWT��ː�n���֝�9@_��r��r��q���bf5�9��S� �J?x��V��}q��/LGl���W$fʠ��NY�SV O��&8�����/Roh��́� _�g5BL�fs�s�ׂ�?��"e0q�E�IU�8Ӈ&u1���C�Tl�v��i����2����X<�W�N2��ar3>�"K7/�ԓ�g�b��t�h&!q	�/I���A��hq�v�/�z�g�A]�a�$-;
�t�˕�s�A�o�k����v�i�K%?7�jĪ�I�Iw^AP*��N��*�n�L-&�0�$��cu�#6N'r�?��	�g:"�6(���&�';f!�aK7#�:��A����u��n���:�a^�џ���F�B ��#l��u�=��O��s�a���i��.BQ{:�	j(Yp5����ܱ@�.�q`�(N3��#� ��iOX���4X�.�=�qX�~mm��I�Ri�ul�C���΀Vh���O�`,ye^�]U���S��}eK�J#`t�F��[��#�ٱ�I���$�U��ˠ�/��k�q��
h����T��04\�3�s�	�"+�ofn�O���?Ba,�!��]���5�S��H-	v*�Ads��I�)K�s!��@���+c�e�~�����Y}໨��h_}�k����4������f�w_��Rv�3{�;�3�<���������7M�۫lNAq�1MN��<��'L
���Y��_�z���Z��J���N���>1#o�F�Q&��l�͔��uȨ�z2a�?9�
صAB��̞�P����rHN��/�c;J�]�U�Z�"�n4e�����V��i>����t��W>3!�*:G�D �7�C`R����Y�x{R6����T �?/g���gD{I��肫��{�a@�i�b�6�-�lW������>̻e�Ʃ	(C�c���+qc�!<Nɷ/v���r���K���1oM#���9Iz'�������R�ȟ�N�A�l;�HIx $� ��髀{���*�[�,�+
ނak8Ňc㚢�����[�#�1���,�m�1A�o������iQ/�̖w�6���J;����lad��{8�P);c\.��.m	N��rLX�o[X���l,U?�n*o&�����G�5�ip�f��4}���^��Z�QH�!�Vq�rEf\r)$t�z~.�3^�4���|�8W+� ���q���H���!��%�{q�au�%��H;!��6f��bR���a�"��G_S�����&��R_�ܮJQ����bT_L�G�[�&���9����K�%w�OW^kA#�R�R����D�`�Qϒ~5�9p�E} u-9w��?���ݝi��;���Ly(��#Pp�"ʪ/��s�����#[^�af�tX�j�\��[|Cu�����܁r�m/�h�Hj�.S��mKa�c�����Y��"���?$�sշ2o�����������aydρ��:�yU�*D�@�!�ƳPtن��<�O��X�2�7m��O����T"��`�������p�2�j����g�TE
��)n�s�*/D)���J��]��v�Z2ݭ ���������+��.��?�����CUxR� Q���_�����/�����0(��nES���n��3R��f� '�#�3��X<kO=�Y� �#՚R`���$d�#|�)5��ʎ��*L`zu�/�˩eޙ��D�-�
�/V�A:H����Ǽ�J��|�\��c�t=�Ӱ�����~L��b��)�,?-v���E����/H��V���z�6����tE��?�h�N~6k���`;��4]�]�w�?u-��c��wC߲�s��hn��C�~�	I�\i�?��4�8Skp�Y�=��\L5�έ�����\���S���h�	SՆ�:p����:���gx�Q�M���3�	��HA���`��)B��xX�L�qL'0U��!M,P��6���YIK��}-x9��ʂ���x����2u1�z�37E�XS��B�&�	7�F�)�������;��c~�-�^��V�A�b|��]��f,D��ԃ��Vk��A���	�d�_F�j�;3�K.�n�P޺K��q�y8	�j�r6ϊ:���Q(���'ʆ:5{oBp:Wc�޼�,gy�"��ŢЬ���7Ҿ�=ƴz�+�$���^w���eh0����p(�I�mC�vu�S{4���FF����Rg�H�Ұ@��8�qAD|�e��\6��U�Y\ pf$6�r���'S��'��<1��W�`V�\'a_q!t��CƳT�jB���	���3W�R}�g^3������	�W-g5eF��?VX��K�4j:�l�a�����*�f.���'�J��#�IV&��F{|��x^��$]��~��Y��n�) ���+62hIh�~)�����B����N�-K�f�rX� {'��Z�щ3��J��ͣ@����s���(�`-��fF��ݖh�B���v0��S�f;�T��4l���WE�:�.�&�5���d�� �qؚ`f�G/{@^$�L#������X��
#�u�9UG�øp�|��J�t�3��w:��*X�J/R�`�������h:1٣E���K���j�	*7#A<Q`��}�ҽv�G>��C����N_��J�X�53�e�!f��eDکƟ����?���Dx�a�E�^՘�i�I�s�S<SE�?�%];&�C}���ێ�/�c�A~��`[R
|a� Eg�,��9�<ЪA`�&�z�!L�#��yC�F�m�{�r]
d}j(�l}ݛ����p�������KBu�)�p�*�s��yH�Q�n�8\��胎fL�V��?Cl�LfN�,��O�%Qӄ�K��T�+�f�EB�Ş$#�q���+��[�`&k�.��*�"��WB�]�G(u\��T�;���{��!p�!X���Sˏ7�ު2C$:5P�b�[���U�*��#/����<$r��CY�LٸIj��5�|�-�N��s�q�������c�R ���Y+خ}� ���o��/τ��Vz-��}�[��&�ڨ����%��#��oO�s6����	
}"��S��9.9�Ϳo�Cg=�N왘NA])䣀����	�E��'�i�%�$b�����Si���b?'����a���l��q���!�-��y�l;��&��S=b�@���s�>i�#�י��G�r[b	���6�2#,�kx�~5�9g��l�˺����߭/�+�﷙~H"�nɼ��鰾���{g�"E����a6F��+9�gP�j����}������5�կ�O�q����ΊZ�R���0]�����	���Pl�k_���5q�N����m��~ ��f��2�;h\�O�<,��G�p��_fB J[�'��r�d�4 ʌp��>Zg?Z�X�r��R,�h<�ׂ�"#<������JV�MV�F%*����[HA��rd��s2u�Mw��ppIb�@}��s
��Q�#�dK��O�elS��O���=tġ��93��.���H���i�=B$�	��
|9�����h�4g�Xd�*Q
� Y�b�ȱ��_ąYP!��	tc��d@��}WA��d�H�+;�"_��[p;0���x�hfiX��]�"�f���=�7H�ڼ���Q����·�7���+�����s��x�I��ŏ�96`V�0!'5�2l@�JPQM�
G<C�F4�����&෦'reڥ\G�M�5�4���/�rj/��?	k�Q�q�-_ pGۻ���n��|�܅������'̯E����� �˘��f@�s ~-����|�mEG�Ӯ�޶G�܈�} Rp"�J�9--Y2ǎ�D~Z���w��l8�N�B��^nW�R���ȸ2�
bdd1���h	f��m5�|��Y*� /X���7��cL�o�����u

y"��%dI��a�'��/��$�xJ��2"3���)��*t��v1<i�Q�(q����{uP&-�9�n���{Oy���+�U�*����pέ��,�*�Y-gA7S��x����[�Ktw?X�������X��6ڧA��R�2��T�L�"���Ai�sP"KV�*ٲ�g�M�Q��
����o���|O���z���X,~��*�!�!5*�~��%D:�kd�?�4�)#�:�����q�pѧ�7ȎG�)���fF�w�O� <�NZ����3FBV�n ��2��R��V27��"������3*.��y��M�0����K��ܒO|������������*��}M2�j�l5V��);��¤�|ؑ���΂�٦��+)@��:A{쵇���º� Sqe�����a��%�ܗ6wt��H�XL,���tf'�F#��y���S0ʏ��ԍ����W@<��ZG~�~� �Z��!��^�&��S�")�k�.JeG,(������g�Y�}+��7������f�j,͹{$����q\J�x�FTh��"V�w�B��uD�6����\F]S7:B�a������p�c� �g?t��?G��)�\�TK�>7�����B�F񛠵�h�����e�y0����}�;Q#��d�m������k�$<Q�U6�X�/�?d�����=a��V�}!�����ܜ.f�t�0�-t텬 G��A�< �ቓ��웢J���a�U���b�e�x�x����@
-ߢC4�H 2�A��֏5���ϲ�#J�3�;ͿF3U�E	�	���7&L���ۈ������|�4.0�i�9��~B�@:��M��_c�C�xs(����O7�n����տd�vƯ���/�Y��_@��¬�u{��
�ޱ]�o�՝�Ѩ6����0���c��yK�<��&���
N�V��5;c��zn�d��!�'VvDu,q󈝥o�mn���}ً�R��j;����A������*T���a��Z7��F�B�5�����1<��������E���2^1���l����뫤5Й��p��F���"�L��Z�Z �g��,Z=6��A*�~
kK�.�.Q����*�۫(Z	=���྘��9ґ�^�;,�3!~�e<����0����M�KS��>���Y(Bk���S����Q#�I%�ZIb�I�9�Xm��X:.��� 9FE*<��xfb;���ś��)U3����tW�e>i�gp4W�2l,�d���+%�Z!��*f��})��8�2[ˏޫ��(����:0y���>Ҽ��������9ە��oER_�Х�_(9�2P�s�'�ژ699�:R�ʭE�`mV�o���S��H���W6ew�g�u�a^�}�-���n��I�Ӗ�w�`Wp����轍�R�?"�������2I-�o��֏L���,�PT�H�i�D��)Ĕ�ݶ�MǁU˘V��gZ���p+ނc�3��$\�V>xL&"
�Ey&y��b�EH��M�[Fi���.pt������j�O^����L�l5<�lj��<�_�A�I9�.�����o�L��jƳ�Q��0q��:�s��@?3����j�@�I�d!>Ls�xUo��Gq��)@ł�._��$5ɝJ!�Oݜ���G%�E_;�r��\�L��m��+~�D���K�6�ma� �2�Opdva`I�:����ݩ�H��^7Au������?�g� Wv����E�5
s���?k8�%D�fZ�Κ��C�):�Am�����us�*n�{���]�ݮSh"6]Z$w����DU;$�d��@�&���VZ~�:|�Q���D�#�a��g�����xФ��V�Kb��q�%�b�s^WX �A�sXn����1�2�C���R�q� �=�H <h�-��/��\�<[��w�(�����o�m�u�+�����yi��\�T��ԇĘ��5-ࢎ4��KL͈c��\͖˚�&w����F�<�J�R��a."3������x�8��g���4a���X	�:��&�;�a��!"uЀ��H!~|��ޭ;���Te�-�V� n�qP��;��V��Bh�%/\�Y���@��ɡ�W�� ���ԲE=C#5{�D>4R�*�ر��|xdl�q1٫�\U��� p�N�q�Fx�%�H�ef��_�[��XOy�t�=�T��-��Z�Z�^B�k�m5l��C�i���S;þa٩7�H�x|)Agc�%�3��^#�em�B�������t8������z�)�ӨrG6�iκ��i�c:')�N�*�Z���ѧ���%�u�[X|P c�G8-��r�<�c8=����Um�=�S���:��Յ/Χ�o���_!�ڍ�� G��"5�Rx!�1A��u?#��x�q�.�#d��u做<!{P�N
D��*���]��Z10R�ui�&FYzkg��<�+o0_⫠�z>W��i��_Dp���hR�v[��D�6�
�_mD��h+��O�#�I�q�����ti�b�&%��g~�=B//��o%^I��<�zӪQrw��4
K���U�ǉ�=0�I`e5�?�����Q����W�45�Yq�C*�A�gM�k!V�`������/^}i��� i��Z=��yދ���i��� ��b����j����a^�U����W���R�>�2�m�|;��TX�K��S��ܺ�m)FawR�)��G�ȟ���]���6mGmT�(�T׸?%5�*�$�Z�[���q�D���I��r� c�D<�Z����D���=���F�?�l��UVr!G:�n[ed�p��K_JX,���8`��������dc�4c2��BG�4�o���j�ܲ���3��Tڽ�֕
�����J3NAA�	X;j�f�ʉ�zH�R}R �$f��r�Tr5�I�A87+�t���BR���Z@S�=��9�/�B�X��Q�5X��):*`�;N#o�z�v�^�`�tg)!K,�v��K{E�]=���
48p���>��_Q�N%���i�<3x_�T��u,{k�]����
��`Ɩ~m���e��|~���d��}��M��j�fr&o��Q��x���T(t_��J*45�TZF�ٶЁX��u���D ep!���f:�l[�j��ǒ�IaH�n4�~=��D�n���/�H��N����v-�q���v�n�J�C!ėZ
q-�H�t\mf!�9�L�/�'���m�9��>�S��>Ǡ9��?}=���)�ۺ�́��z慦����V��An]�����[^�����S�c|l��,�,�
�� ����D����s�\�(]�%r�S D
Ƞ�4×�Xה�%5�����{���u",:	2qr�H�K��:�?�+��cI��(,X`		�bߘJۚI�xO43hT>|�CU�ع���O���4�
���Y֢@�-,��6���>�h�΀Ŋ.�w@�5ja��O�6t���դ@lThr�񄑢�5��a,���EE�qC��9�r{�1��_�
&��+}��X��1za��-�mͺ��C8Fh�/nś� 	^̦a����A}̠@����,�&G�������4v��ߗu����i.�
�$����?k�'oO;��O�q�>�s8��g_gq��pQ�j�g�.,���d~nS�y�6}�
��\�=_�qa�|�_c\��iWs��J�{�mX7+��U!��lO =>��ʎ��0�|�]%:=t�o���`���`B��O�N"S�V9ú�PW�=q�v�ݽ��3�䲒!�[B�L�|A���6oPz�g/-u�ߌ���#��v��`�	�i�z�
�r?l�\���g̪�`j��2��e-@�8�"� ���^@��=���,�9G��|��κ\�쥷�ۖ���j��M5(�LW��#�C�-;�9u��8���!K��,��O�����܍|_�r.^@	o���4����xaq  .��+6��%��[�}i����8�=�KZKH����D&?U�@t�AW�/��`�Y�v���֛����R7<�8W�q� �!�;#��X\=:���=���� �Pē�G��o��K��ԯ����D�S�u<%Ԋ��@*�0й��y�p��C�D�~�g���5ظ����J�d���c�~v*�-��n5���h�cz\X"��(F�������!�����Xo�f/�(�J:���/h��
�*b�DM<���QHͻ��h�ðAW@Gf7��!�"%��^���z���
J�ߜ�)���do*�7���R~�����P��w,��6z�}~&���T�Rb��������K�U���F�=�nrS����o��r�,��ʲA���m��O�Wv��2R���g�S�ng��b��4w�����}R�m�f����a>MX�K(Bf�#�R��.��<�qU�sU����@k\�vZP�c��������;BO�;���G���n^��,K������}߭��s.����lMg+i�TG�rf�l�f.m�TSϋ*�v��A���2~A?�8���`1�L�r_CL�� �V�A���x}�M�W^_�H��3�v�j��A �{�x�s�9��o�ꑴws	?��t���?�݁�v�����:�"���˒.ɨv�&�v��h�����I��L26�.`%�D@��*�@��1Lq�XAo�����ɏo�;pD��˽���?"��w;���D���?O�4�
7�YB�>�+�׬�:��[4M��O�|;���H8�1a/u?����N�G|A�ߑZ�p�`��y�I� /E�/�q��T�.]w�Zܓ*���J��M���"j3�-Lj�+.Bѻw�A<T{K�$��v���ri�>K��d��?�H�|�/�ya$1S4nH����.���C���q��������l1�\xg\ȴ)�xo��_��W�#x��9��4b��#i��/,1�|l�d��,һ�'ؤWk���⪖I��Qv�A�s�)���G���[����j�oMFx���\y�~�C��f�����f��͕�["m���Έ��k���U���#�
�Gt�~�rLWJ����@�9��A)��' Ty!�UzvM��w�ޯ����k��6DD�}��4�?f7%�w&_GȞEà���cw����5�X���Rw�-i�����ڌ��W�T<lU'���*.͑%�&����ƌ�����8�	hW��i/@�n~�%�t��t����02U7'�Q�q�R��q�Ӑ��I��s�%��,�ALb�hZ�t�� �XKP�D�G�b�ܣ�G�\\��W�1�e�UW<-�H!�Szs��4f�(��3��U��O�"5=b�r뤿i^�K�"�[P1�J�6��G���;J�,��+T�� S�"�{�LIu %��e~G"�R�e�k��T8>���<&�k'����^� �]B��Iĉ�.���^-�=ل"�= ���j	|/ڠ��; ������ֱ	���T��;j�{iV����
�h����i�=w���N��ðк����(6�~�u�L���t����篡0Q$�Y�G�(��/<�-I^���}dj�2Λ)���١9�q�j�!�w�F|���
i�]*@Cc�_���H�ғ��o�(X�=����0��'�$"^��~��ox\�L�z�;l�e>��J,#�Z"�N4G*!ψ�܊�r��,� �!�	ׇ#qi��Y�����ւ|
��minr�YD��m%�ؓ&��^v�K�d�~��6��y��P��Z�cs'�+k}W Js/p~��6~�5Zv���E���6@���7ۆ�#KQv�iK�+�Do��K<�d�A^dT�LɔγjLf.7�z��[�����)\��������=)��9�i��A�OLL���Q!&E�.I�n�P��FqU�[������&9m�`��|.<x���㶼�l#r��8?Ea���ˊ�-��A4%��LQ����34�2��%'���#V���_B�~'nM�Il���Z��%�.�$P?�4%L	�ZI6ɍ�%�励�͞�jd慜驀�������~y�u{o�%��iݥ4c%���>�Fe/�W]3���˸��8�V����/�m�.�]v��G��<�j��^��חձ��z�vL�uy0���a�4fyk�Nd��C�:�(x9 l���S�=��B�w���p�H�7�"��wH�f^YxQ�Er�2A���^�B*�[��W�K������|�#P��%6�iB_���(ї�"�USTE�V�ĳ��x���&֏�B��8KG��
���)�~fִWU��Vi�?���:YQ�8ܟ��^�^��beԚ����yB(#ƪ޶���c�Q�A����|6#7��@,�@� HܐB����HEyh|ơm�#������k	����.�zϭ���7���Ή=��P~���4}�>jg� M�Q��s2�xk�s�o����R�W�R6A�<��������pҭY:ȍ>\�ڀ���L�@m�+@\�kg~��h�+E��>K��>L�V{1ޒ����HO'h�����.a�{��4i���+�i<b�ǋ8�|�E��
rQ�2wA6$!R�m�fbem�Z�n?�l�39��E�	�\᎔���춐W%2�]V�~��Gy_�Y�$%���J��|_F�x�.����o�a٢o�b�n����*�ɬ�$j���R+Z�k�ȡ�f��U���v}_������šD����|ڊ]�&9	:)��koYߜ�#q��{H[A�����@רz�m��d�eA�02G�bb\�y�KƖ"�F[&���V�:�8�K�G3@�S�%ҨB#'��Qt�S��X��fo����t���J���S�[�Pk펠���=�-�3Ƣ��D5V�O%q�<|Q1�u��~
�،�b���YFoyZd<�t������On� @��aO��M��n}��r���˰u���Y�z����@�06hn1�����G���c������45ԗ$����=_k�J�	uUZ�26�9��'�Q�vQjS}3`���L�����r����4  ���FF���}�=��|��(�3�E��d��t���
t���� �`�H�*#�E7E&�qysM}`�z*)�(�3�(j��ũ��Q`��Sk�J�Ȃf6��� �����,Z#�װn�y6(X,7���;8q'�����PN��w����c\8����V���$�/�Q��_�<g$u:Bo�9��w.�Fh�W!ԓ��Ɲ7W��̳�"�lGc͸>�m5�{]�*̨w��|�c�h�TQ�[���w�H���^Pw�<}�z��af��o��
Bx;��.����������B�[Kf������T�:�o��7��}��p�:0��MN��� �I���@\��i
f�b$�'-�+�KR����P!�5��
�~�D��ϓP���G���*��h�Ps���5��)9����3�͉h�z��
�u����E����/)q��T�G)ڍ��UWxP6CE�}��m5x�`9F�_���lIߜ�M�ZR_0A4�û�#gw�30�0*��Q}ӎ�������{�q�݄�MZ��tA�T�t��ù�NHZ�,D
8�s�1�]���)޷b����� �gj�!��Y��a뉧w-G{�j0��:!�/�hK|�����1�)�^_�D+�ʠ�?�"�Hf���h�P��!ge�l&�sG��m�#��
x6w�ؙ�X"�θ7��^=��3K�\�6�W��7�u��2��3H&	�n��+�N�� )5��� w=={��i�΄�Zz^��P ��/�AAlF�VB�Y���Ψ�"*��$(k5��ښ��p����� �ۄM�Bp9�ٺ� h��ȣ�}�3	䞻��~��d���/h	�Q.g����~֞�}���Y��];� �%�.1�̜�`�N��	��� �mc{􉿸O�J]&��V!�����tlD[�I^bq�C�q�f�\m6�j��S���*����x���x��vw�]xF�����TB\r�p�Fr�k�=��噓#KPK!�GbP>�~��<E�.
�9D�9i˙�Q۶b��vE]�##$ӽ���f��w=\���"�3>P�d���S�pE���0�W!�m"EX.�,�������S)��@�
FL`�o��|cC��-ڹ�w����?W�֫z�aA����S���M�)�)�܄�bt?�'�`Ȉ��HB^^ގ(�<sȗ�<7��o8a!,����I��Njܟ^)�Q�h��pmLqG��pC�a遤FB�J����\T��{r���\-T��߈>
�7�b'�@E�>�Ls7�g�Gݪ^;�T3=#�%��{*M�2D�s�[��.�]�nzt�]���|r=�Z����@m��iQR.�+�?�6<��\#�v�i{���^�eZ7�WH�����7[�l�Q�Q�ָr �XTtE.��khB��C��V��lI�3>l?�'��]��꽺[	i�4���+j4�
S�wpp�BpZ6-�K�koo�>��ͻ�Z�H_%aW��������>�E���������M&݌,8i)�!���4$��7­���}L=o�����~<�7&� M}����	�<�b�O�����>Ƥļ��O�w�����GU4-�r�
�M#�J�r�V�v߷�]ټgZ �D�;�_�4_|1L]"��/�A�F`�H�ʓ������hm4[���y&�4i�x��q*�!I�xW%ʃw/�R��,\8D1J�]>�G$c�~b`:���D���t�̋���=\f\�zm�=����ŗVu�w�����@.�[;dp$j��_�p��F"�(�ZXl��V��si�к���n_����9����g�;-�pϓkXd�JL�=h��ɔ����f�B�v�6*6l	�n9#3���v�ʦ[{�dOS_�P�ۡ�/5/c�ࢎ���x���A�:��G.xS�(�
5\P-����,|�Ӎrc��q��Mj>-!��rl7�947���ˍ����7�c,����}�&m� �j�V��[?�9vXi�p����C(�;k{�����5�nD��x���AS�[K����8Õ<���j��7w�%���E��7"u�y�:�a�R0)w�km	g�z���aX���/����*oT�j,ڎ0��U����M���d�2f[g㋂���inY���&�k��5Hv_�8�%��X� ����(���?��S��j�ڶ�8g��y��GQ�3��R)�j���W����(re;Z6/��h�|�Mm�֎Oa �/������h| ����!�/��*�lr|��M���W����n�l���N�g�0>s�S�E�::�Ҕ�kߒ8�?�������� ��v��(v�(�5�^9Z�h+���FmZ�V��b�]���%�MB�7���ܡ��6gֆ�;��i�G*��Q�L�<q��e�����&G,]l�餙*����B��%T����o�E�����a�o��H��|�:��5z{�K�c<�g�Tf��u���Es'�i��s���HDi��Un�I8��_���l7�-��Vזj�)���)k4�8��P`��n2���)����殲y+6vc�{�������{?��N�n�}W����u��k7���"�5)�=�!�[Y��U��ss�b|��/?�i��k!0�b�T H�A$S�fx�MBK���&��:Љ.�9�=����	�n:�"������v B���܇7��ߐzkN=�d[�a5�9o]�"�הQ�+�7���)[�*:�A&̷�V:Fst�]¨�����r@Z,�{�x�⛻;��c��t�1��74�MB.�H
�vI|��'���t�9�b��א��Vx�e{;|Ym��蒄������N׼�"�i=�����-�g�B�/�i�=�(����ʽ�.+�y3%��^4�Xb��D	nK��x
�J��\�X��9l3��'vK��F��N��� �GX#�ОF�55�j�B�M/����фE��3�{4�A�N%j�έ)Hp)���|�ǫ	Vw`�����Yg9(���F�qsAT�h���FZ��԰f\����I���޽ͼ��+�T�b�w%��5�Ր�@��D�Q
tq�$+�$�����C����a����~H)�MG����o&bֹ\�c30��oҞ]jD��(	߉4��}���4�_O_�MgK8�|��<�ó,���Գ1�b>���y�����v��J��XY4��Ne��t�>�p�h�(��4E�g3a��,����M'O�IGL�TG(|��4C��Kzʗ��q\�/vvg׊����W7��&��Y�����$R�
#�[�p���ŒQL�"�uz�gehN?�&�aM�2����H7W�6[���$���6����G��Tۅh�Gp�������͟<c(55������@	ES���t3��ʱ~���D�Й\����3o�r���.�`���v���j�#��ǍSր���ig��z��{��6�W����΅�l�W��'�
ů5_�;�Y���B,�R�	R�����ͬ�u.�{�����#�\��w�)�[�N@�ȿ�{�Nzt>��2�����q���u@rK#x�k2L�ci�萺�K(���O!�a�	�*�z���I���Y ��]����FC��cҟje�:5 4��!s�IjP�g��hs�2@��WlI�5��ګ��a��?n�o�	�L��`ƚc�Mw%�z��Lć�Xt���|a���	vI&���v��c��qG���`�,?��dDT=�9W XogoU�E�9��g�<���F)�{_w��6Q��+N?�x�:(ތ��=Q�`w�(OZ��0�S\O�c��"K>|P�0orh,��
]�o�-Hp5.Y᜗�	�ˏl�	�R�u
{�HS�}~t�O�e���i���Ǥ!p���8���U�� �'45��':��O+n���]v�������te{
M���.o�L��CB{��j��i@K��l��H����:>�*D�'��(��S`���Sy3t����Y����!��nа���r����6q�5
�`_c/
�v��#<�IN0��X.�o]��Z�HBg���-�}���R���rޮ~�rI�@F�\2�L;o�+�EUS@�5���o�2�GۧR�ّѐ=�����)+ڍnZI���6�GF�m�OE���Y�%!\��ɦtD�_�L�?_��ׇb�I�:��P] �J�t���_>�'}�9몙��{:��4�I�{PS)cťM��sA���%.�:=�����1j�W�$W+V���b����̫�f��ѵ�Z�"���SX[x^n�O;���!��|Y_�	��Ĵ��#i����L�|�E=z`�	�۹���;�Z�@���yk>�B�xH}�䊄W�C┥ �['���׀|���,>�Z6<�O��3��%]�H�4�z��y�\���x�V�VH��xvF���i�����x�+7�r�=bN��V�r7��o.�7F;	�h%�d�j\�(�����u�'j�y��ԭ���ױ)t^�=�U׍Rc�d8���7]1
�6��C.Wu��8�h�O7�"_��Ғ~��'7�{�c�����e�3�D,�_�'Ĳ}\F�׷gc�y�%93n�=)_�����|�wN�L#7m�;��%E��	�K����毐֙�Dے��/����"q�K�<���8\R�6����*�N��:��*s��DuT0�^fm�]%�3̑A@���1Y�0R-ɕ�zCf&6�	��ƔW񀎬@T=`_�|����ɢ�:���C{��h}!=���q~�k]U����a��_�]�8��4��ͣ�VK)�YC7&ωw��4�`ͮM8�8{*�{K���9�5��_tyT�T4YG~u0�1����%��3B)L�S����m�E��i��ӻ��7�����C7�3/�V�?F�Me 	��F�+ C�@��9��X%L#�Cx�9^����nBQg ��=t��n�tA���N|�L���eVw��c:i�7��%�xYy��Im�r@/{���S�<$��p���տ��涀�l�Sr�T/�-]Y�k���MtB������I�1�$\U����ɰ�@%��:�ڛI�Ͼ���WM�8F���%+W��Q��;���ԐR�������Y5� �������0��+F0�*`E�¦M�p<��Ļt)Y�u ܋M��g�꠸��L��1��	9t��ϰ��l�L��5��(wO��h�ѹ)���z�܅�P���E�}. �>��Zl��D�,�w��w�����վ�wH��E���&�"9bb�w_8�Y݃*�Ư�(ͬ��񖖜TwTo�TǦE�
ߛZeק����7"�Y_��d9;knJ�N
���I\�@g�k����%�Fd�0m�H�Zf& MM�m�i�:����<�P����]4yQP�O�����>���o�8��%�:����$���zw�Q��|��K���y�ޔ��ʆV��)'ٽ�vT6�Fa�[�J�ZO:�Z4̛�P�ţKp,�< E�Za{s5�>)�:��;�P/��I�IO.D��b�OAs��o5��r̘�80�X���xTt�P���Y�l'� I�ѽ�N�w��SM���I�2�L�	n!���N��e����_��1�Fڳ�c���+rx1=hr�4����V�T$m��2�::i�h�� ?T����V%+���V�
n���Ң)s�1zT��Ѡ���D�
E�����v���G�k�'6��`���4��5�G�"�V��>�l���g�ݽpc>�8��p���Iʒ��X��e%Z�� �$�!�	�L6�.�����G2�ټ�D��ս؎��rr>���C):0��l�U@/���g�*9�P+&���Hއ�XM=�U��|�ʨB[�p��b�=�E
o~���`%���g��(-�y!u9�O��h���a��e?9�Ըh\Q����z�T�2�V��;���ic�O�PY4}�n�̸��ԝ�L��-�7� �/�M��������-V<+�U�%hr�b�Bh���D{ j}">��K���j��	�.э2H��G{@�SWg_�+�1�2�3�N�g[�a)Ǉ����b�VETL�����^���D��J
lp�`��B$7t��(��x$�
���`r_��p瞎O��;ʖ��jW��XF�#G��x� ���`�4�A�
�˵T��s����'H�i8M���Х�uQ��䑨�Ӥ��q�e&m��T�z�(W�	�w%�_z���iW���!��#)�������>�L�*&��&�J�}�v9����S���P�?���:9��'���H�g�Yd`s��D��QhF�zv��r�!���8n�Q�����_�q���;g2��e<�K���,	u��IX{P1�҆�z/}C����yIE�9ݴ�jux�k2ve`�S�`���7D�K�Ȓ���Bc����N�k@z�X���#W�����L�P.k8�z1%<;��0�dw��U��FԶ�خg�#l)���ί`ǲ�iq�x�8�+���X�q�D�O	u_�[���M�$lti�������n��5f�ת��"y=F��0+����j�,�^��D����Ʋ�9�݆�G��0�2����Vҁo��7�I�ۧҘU8?��Ξ�\��9H�L�C��c$�L��)TY.D+3�yP�}��:2;϶��d\�8y���ZM�"�P�J�D�Ɖ,{[�t8l�<�����ʌ���ޟ��.���],�$Nq��Ь�U�t)���OUs|����/v0�a�����Ǘ;:D)�>c�i5�^ ���U0f#4�a� ��e�?��!ش� #�m�U���U�H�`MH8?�?8�Y�@cu��Q<��y��F�q�|��1{ZbU�Ӌ�S b�Ui~%�%z����5�A(��ۋ�Y���e17��g��%	�="5��j���S�&ȃ�1>D#I��<���;�� 
��sJ���Z�ۨ
S�m~��-׻�q'������U���P���9�F7T�ey���5�f��j�N���$��5*;�	�*�"G�/]`A�RB��7�����a��ae_Y�}9��k���W¿#�?��Q:��o�V�]��3���`̡��?ԱR�^!�s☖zy��1�����ߩ��1����˔	���{�!�O���J��B�oU1�=^e�DXl����2\��9d:bQL�^M�j*E�()9�[���L�'�8*��V�W~&
]�wK_�m�j*�^�$�Mߗ2���}5`4s��"Y�+1B�	�C�C��x�vz�d�mI?<+�H'��I�F-ʺx�a=	 ��v.�FNG\V9]Q؋�.�D<�rNX�@a�X����A/:����-P3�6j�M�c������+g���w����w���g�����\@_�b�KS���2%H�����%	睟�){R���!�\�0�U;t��<����h�6���<���+~q��urN�w���m�}(['eG#+f W'���g�?v�r��G������F�y�2/�i㥴��F��+����rxj)a ��X�IB�p����Sj����
��\
��z���g�P-ŊY�3[�+����U#.�|�\=�������2��&��Eo���t�	��vY��|Z��j�t��O4{�NԛG���u���Ti�!���!6PAVL.oz����R��s���Z5�p>={W��F��e�����9��U7�E$���9Y��-|�74��,��9���@ϩ����M݂��P��9SB1���l|ϝs��*��%p��2����;/�l*8��&"��ڪ.��?6X�V�p�=��]9�e���}ܛ[;���C���q��R�Q�?�����P�!��� ;��}
'��Â�>x�<5���u{�V4��|�#�
ԵC[��M_��/!�q��?����ފ�Q�Kn�5u�f���Aw�gڒ���N�b����D!ռ 
�?�?֚���,,E�T�B���)~���S5l�,�#)�c9v�չ���&�6�l�ͳN�׀qC{/��Χ������AK��j7Z�ʷ9���.��t�G��T^ �brS���%c�t�՞ �%$�%{���}��$��BǬ�"5�Xev�	�V ���X�� Pq8��Ǵo-�{}��pB�Wy�f� %C���R�����Yt�WL}�9�<)���.�9��]os�p+ǧ��KKr�������x��E&wW��}�%R�l�c��)�yk���bjj&Ӑ_�tKU*=��md ��R����Ƅ���8
��A퐱/�&�ٶ��F��{n	��	���f�e3��]@hf�ӟ����_	�O���ȠC�}ö+���F��w^d�
���8�ȉ�M|�����i��X��7ڠ{5+;���T%�����u�4��=A�^��֐��Ñ��b�d��E��@O�R�l�6O]m�&`�sv�M����� ��|�H/	�Ͻ���0���:Բ��8),{;{J�v�����.
��M*{eTV�cP�P(�D�dN�8��Q{�M��&D،�eo�e;�=� �㾡��g�j��*	���8`T�]T��`QIm��1��K��]g%��6����Ǜu��7�wF����E�p԰���m:�ߜ�7ŋ66'��><b��_S jhfh!������E�S��%I�}�Tk�N�G����Ir|�j����,
Ԕ�3�켙�j�c�ɹ�������K����} ^�����\7���z�N�.���Tm~��F��ϟ�C�������ò�B\�E}��� Y�|a��г�~wc\Y�7s.�M ���ل������Ά_qY�:�7���R�CUV����<c_4���2H�����M*�EF�2g�Y��L
�vN��O�>�)�i���D�'�~�Lya���'���R���M�o�?��D�	�7��1��w5X �h���

�*�lո��-��^��Ӊ�#1dʨ]��R�V�����",p7�	0vfɳ�Ph���cǦFW���&)��Ǜ�׫%c�|�&'�^�U�۪Z�	����zL���F\_U@$dR���9�0��/��Ƥܚ3QxP�sZt���ki�G��x�X���e� ʮKFq���r_�%���/�ð�0�a7}zs C`�I�t�J�`z�r�м4�5H1��<����x��[�s�\O��$s�d�<�.:�r'f̎����g�Pژ$�BMȩ(�0S���/�j-�N`D�Z�R&ύ��OI�&Q��F"@в��hO�Zyc�^�S���v9؋���Q<� }�l3C��|��E�t/F)�\N(�9�j�4k6���w��m�����n�Y�m쒇�j��h(��.*(�wc�G�^�Đw����/�ex�ZWxy�V�ԟ���YDn�����3���,����Zd�6e���h��t��#�<QQ�w�_�o�'Q^8�0�DM2�������s2t�]��+����m�}�d��[~+��C���1b̍���1���� k�+6My�[��(�Ri�'H�;�r[X8y����cp"��J�2���Kgh��ɌQ2vA�I^ص*1渽��'"2J9yn'Fhp,��zj�%��+\[��.tX�z�Q~Ӊ�Y�PРv-�	����W�G
@r��aȠ�)+�qgk��nxi�$M��z���,�:!I��&794w �"��`?��%�e��Uӯ��J��QX69b�U������M ��)Y�Љ�O����ϾJF[P]�7�t�K��@>S2W*��4��>V�@�2����?(��sԂ�Wd�O�s��M|
]�<l2��Q;�k}�X܌����-�)S�%�W}� t����Ĩ n6[·\X�ŀ��[p��,d���� [B��cO�NȲ&ݑ�LO�N2 J̀A�A{�"���nkh���l�@1����k9A-Kp�N���/�b{���ѥV��2�ܶOs\���bu4�[ڞ��}f���ƯGKq{�}bŅ�Joz��@&RHk�m�Vy������mV���j��|�7~�`2�����{���ԓM_��� �}��rqV�����5�8Ĳ��~hc�u���v1Y��U�����D+���q���u%@�߭�F#��}�M��,��^���'�����z�c�s�"����\:�Ё�7f�(�.���-��e��4��p���eCo��m\�����,m�O����K�+���F���	a:��d��D}�;#����&�c��&����vCZ���L�/|B�0n�Avd�ңc	���-��ͭ�$��Ɛ'KuΌw���nW�����g;2��H�������{\I?*{i;P��Rv
��*�Y��kE[�d���k�=��}�\�ֺJ#~�����&�g��Fڕ�1�r[�-�u	���9�mz��x~S���������/j�ᔞ@���;�l��|�v��L�Uv�))j��P�'�����ѐ�ƌc�I⍨		�R�O��ۤ����Km�����w�4�z5�b� �5�������#۸�'sV���LR������e~㓮s�敍'�:�u����^�����^�x_Ϫ�3Ł��^7��4>�>�_�>%���6���W�$d�,��=����{�*�`i��ȃn�#������{�ܝ7��d�T��Z��\�g�������)��Kat���3����z*k%3�J�[�hun����J����K<��S�g�=�*>��
�b���9^�&�I����"ȃ����0A+���h'A�yӥ�ٚeO_\?����O1�JfA�g���Qi8K�)�|*�y���Jn�2��%L�F��z���0M��Ǵ�����r�8>J+J%�pjk'�:3�N���@��\��O�ce ��1=��S�5�"�� rگÔ<xY5�'���|�1��Fz������nuv��w(�D]].B��|~Z����K�ՎiRC�w��&��9@�ӛ��`��C�.�)�S�Ep8)_���z$�$D]]˻��3��}
��i/����KK�3���{��P����:z͔�l+g[o>����J����ݶ��kU ��n�|�![O����SGǏ�� Z�aԓ4������2��0o�CH���y�83��g�ވ<VT� �C�͗���>�d�n��I��[�z�������xn�s��\��������	*$��q�,\3�"B��C�?���Є>�Yc�	�by�Bu��I~^���^>�9 ��d�~T���@N⾨���@���ɖHťӻ� ��7���ο:VO\'#U�,8��$���Z��?Ԫ�o����I͍�$�'+�Z�?�$y�&F[у�+J�ӣtC�o��4����_�� 7��i{g	��"�m�-���N֐�����¤�Xi4M�2d?�!s�4�`�(���`�>ǃm�U,���Mv&#҃2bzXw�B�&<ޱޘ).�7���F��M�7�����3#�Z s��2a�+*Gǅ�಻�nHiOt'�Z9�5}kG�v�7^<#�*g(���� ]R&"oH;�AQ�75ԉwh��|�ezQ��=��E �Rap�m8z��/-��%�,�I���3�������J������40�?��ǟ�8�JK"���7�V�8�^�|`eH����ح��
.L֢l�`�X��sB��x�u��zN:d�X!�r����`e�w%�ː���jz/��ʴc�9d��V�u���������ts]6,��QΕx}w@��&<��i!�T(bD6��{V�f����.A����;9]��fU�@6|�n�E��X=������jM¾�2.�8V;XI�I9���(2��QƤݖsG�x�w�x@�by{AơOSݜx,MM�Ѱ��aG���/.=��je��E\��׽�g��I����6�RZ��Bl�Pƍ֩*f��[�F��q��b�t��"�ĚN�>ȕ�����еΔ�5`pC�Z(��ޓ��Pמ���g�8&�
]~�+��Ğ^N�ffՔ�wwwOb%>�
�>�`�A���L�7�&P��P�r��$ �olX挜u05�
~�ā�;�}��E�S�S�=ul��"'�=8\�.��t�A����b��>�!�zod?��%��ZN� Sj�j[�ˑVg�F����I�@-��Z]����$c�E�����CZׂ�������!n���:r�, p��v��휟�.m�<S�e�I�9�TՐw�1�X�h]�N��Ʒc@`����DËy�`����3��~M䚢����ah���	����}x����P��/���u��]�p�U�=�~,6��"�|��-�9-���� n�5�+���jr�,�r������#~��=�}W�2���a�+�T)$C僶3n=�U�e��
Q��@vZl��1[��Ђ!��e�fZ�A�B� �9�N�ㄩk��]�-�� ��U��_�}�_�Y󐩀�'<����Z�u���C ХGT���S?�:f�vi�M�/??�P�j1�Z �����M_J�٤�� 4J$�8��g�K��,�tF�+<�SB����ɠ��a:<�
a�mv�����嬲%_�Gbn���x�ҋ_A�S�$;���BZ��)__\캈#�5E��rc(��E�A����*�|p`��VYu��rU#��0�^�Oa'�9���G"�~D��r?�装���/}+���WM	�D��l����'6g%*x>ul��.ĵև�p̚�D%c/EҦU�o3��<x*�"�V���Y(�E��<|��{o%q��R˩�/aW*����b�@)�a\m f�g���){kK
�洚�W�A��i�zm�M=A���O�������^E�j�������|Ȭ�v]��lA��3gI3'=�jˢy§r����B�9F6��IH�E���TO�.t���c�����'Jѳ�
S�J����'��{P��f�V��_�ad|o_n��dEe�~���i3Uotc��ݛ�` ���П�tȲ,+�|�=��-6�Ԃ�b�Cj��`׃Bq�w1����#g�YZ[X��R�լ�yl�	��t��qn��9�xm~��f��!���*b��g;�Α���>�c>�[q�im;�u��W���̫_�}N�#��a��2Py��L/U�����Eiy���4�bn8=So�	H�����4%sky�8��(:<P)�U˟��3�9E�լ~Nw�)휞�y��4��UDW���hs�Y�@~���9�Zx���Z*�^�W:k=��V�%*�v�ӷ�y��z`�?�P:�N~��W5��F���q�"h�7��z�m�= WF�|0���=g
�"�r�>�m?��p��e�y�pE�EW%�[�������:����?<����b(��.�2e��^��I�<�Me�߿!���2<	X�ȶ�"�����Die��8.qa��4��.���q�PIT_��'v�'���rp3�u<M��6y[~ѕ�} CP'�j�
Ѐ���?���z�����Ӄs#�Z�
�����[�6	���n��$�F�sUm�q�r���M���������Sm
����|*��PW��u:�>�\�n6am<�A?�<)�M�m>��TK(V@���<�/���}$����FBEu/&�bX�g���§���2q�Q�Q/�܎��S.�+~�'��0YM���İ���l�hc,]���Vn�����}�*�k@���2��2�)`٥]�E�HSK1-��K�N��� �)Ji�� ��R� 63~�l�OgPς"��R�s��apg��~�;	�9r�� �c76��2�@����~������7�	qO�Y�έ�wle$������a�.+f��bF%����I3���84]��+�뙈���d������F��YSC�.�9.��4�_"ejH���K�y<���JVOX����!��߯��s�p�'�5QlǕ�d��oi�Ubk2ܪ,.�pW��������m������x��T�o���@�T���M�I������y3v��x�S
�G��ޖs$��{>޷�>��#�J��2�,��w4� ��@L�&�� #F~f��R�)��p�ݜ�\��-��*j3��b:���d�4��ڭ�M�	���Sl���V�,�J��xo�AJ� �}8FH~֑�q6��9�\���h��h��@����pj���-5�����F�u��T��+�P��oc��I����0���T_�.�Q�u^�b��s���O�&�X�׌&� �(�ԉ�<ѶFFN��
��V�B����vi�^�����t9��
*0�[��8V��h�:-��@�!Z٪�UƠH'�V�$���h�^�]S��K-��6���ਕ/�~_[s~Z�1���@}�~ ;��~:+Ml����í?Z�A�YS(��No�ڽ�1`4lʈ�Eb}���뚔��9ޢ�&2��:�]��g��(�G�#�;�ym- ӷ�-�±K���K�;<�+�toC��(�w[���V�6�<$З����Z�-W�?�-����_�$y������I�߲u!�[�҇�f��[��5Y����ݟ��������~C�Fb�e+�[�W���Qey���iۀ�/#��nÌ����+
��Ң")�]5u��wM�u|A�(hZDØJ�;���-�Dn�]�k�r��N9��eV��O�\�y�M��D���Ý"L���^��0Ґ�S�%מ�iH�{nmvi�VD�ݏ'�1@BpϼJ�d�������ء�14�'�xg���T�*(y��c����P�w�X�ja��[��a��V<�:��	GI�8�8޷���a�Gݸ
:�iS��>� �P`L��O��U@���������5^�)m����e_�M�.E��u@͉�IV�J�'þ���Q��0o7�RvH��Ҍ�ԅ��9a-y���p���Ȣ�|�DJ��/�Or~A0D-�K���{(��@���1���G�C��#gD�F2fq���ؗ�k�4Bt6�۹u�[�*XH6ϝ����'1��0�=��V�(���KZShu>#��R��pV�⃭X��(�$˚�E;�B �{S5?��e�	�|%��ֱ�[eW	v�t`*��$P���G����n�DK�?Yn��ߓSݩ`� K�N]����/�*��;��*�����fe���]?��2��J��q�(�"#r�n�@�=F�G�����2��Y$���HN�hO���oP����P�׹����#����C�V���HD3ٿ���``?�cɎ�HiL{�}00�3�PmJ��v:�M������n�<��z�����-�{�@
�,d��^7���x�G0�����\FCF"�kd��SDl>.}�^����C�����R�����Aj�XT�2�`(����[����$x&uQ��`1�|, ����Z�s��t�x@���ۀ�J߁���k������b�b-�S�5�7��;M�s\�ܖ����0@���m/n�״�� k�ǊQa�IhB<�+��^z��z9y�Nq�7�p��~��/{�0NO�N�ov�;���pe�o.-�Zp�QC?j:������d�_��#���>f��G��9���K�͓��J<�J�4My�ʜ�ی��o`?���!�Kx�a�]��� �$�4�b\>���Z;���G�,8�+l:�ϻ�e�ۨ� ̠Ћ����gZ��G�] \�	$'A�Yr�z�]Ġ�iM���)���Ka����EM0�EĆ����_$�����W��	��h[ٰ�%���"�;C����P���Xq�F�><1%�a��A�~7���*4;����z�+&5��<4_���8%� Ê�����պaG��뽡�v�IQ#�Uˇo<�*G��c��8�v�lcK���/u����<�Г^��_r��a��;�d��Xy�_�a8�Ӄ<[h��V=gl���g�L��;X�o��Pg("� �
2�V)%�hU�2���c�C�D��uA��#�v��=���	=G�b��d�+���#I6�*}@i����'H:�̀��_���OW��@�N����e�$��ơW@�͊�<D�n��[șT�"��0�H��K����5�Qo`�^�� frH�;)&�c�m|�,9�ܔ(��L��ր.����H�H�S�F�"�d
5�����e_�u�������y��du8�j�� قhL*�g��s8Ab�
�N����
��I; ��5���������#�&B0j0�!�f�>a.@=�`/���Ge��
Od���M�urxL|(����@�W��8�@���ϲI�bT3Og57U����z�P���L��WC�dT �H���	1Ppyy��C���̆�?�A���^G�Y�E�G~ӿ�Rk������"d|���"�F.�
+�㘽08��N��Tr��� -/�s�y�_8��cT}闾r�S���rM�V�hf�����KR4���%M+�M�Q=������zZb^��JJ$�;��p����7x���)�n�eoQ�*�;�g��g84�T�Ւ�$����]�<%�9�uh�F,I_Ư�=\5��FF/�aw׹���ݛQT��u^v`7��N����>K�⾱H����q�������jK4�)�ecğ=��b"TF�������!t�zD�/-S,�(��Ӥ��0�/�*��~Ƣ��ό�F��M���.�m\b�Z���C�dAݢ��(;��.fm��f�5��t�E ��)�i�|;
��Gk�_�w]v�*�g���%���n!?�Ó,����`��j��E���I�X�G)E�d����1�X�	yBR�~B�����@�rd4�<�w�鍄��y���ҧ)l_�w����=�vj(���-�ve���4� ��T�MP
��@�?Ó�t�s���=Z-#$C�gQ�Ȉ��E}�ង _��@lp3*�ms^:�D% �1�0	n�1��ύ>fv��S��v��J�4[�|ؠT�I����l��oɝ�{K�1�w$��s�=�dy�M~�ׅ�?i�7�'�޲���?7�O��V���QtW}�4��q����5�Zx?���L�t�;�Q[vD�c�sֽ��QeI3����*�|~��H�;A���WQY�TV�N4����.N:�ɴ"��榒�7���k*I�
��&�)fҼډf�X�b�:����񽵜K�\yb=/�~ҙ�F������s)w�N(�=��׃�����m�n�<D�Y�-��WF�)Z�ë��)z.m?l|��R���z?����֞�6�yO��ې��jD��1o����{�75k6� ��}E~�.UeMDQ�������Lw�������<���Rn���[����[rQ�A������`\�H�}������8-�I}K����̏�
��<�zn�9��A�lW�I�|�h�Ѳm�����V�r��*N ��<C����,A�	3�)���������p�A�r�.�je,�ŽP.I�[&�>�Ř�dkf��^��!�bM�aR�=��v����oq��a+��Q��V����R����q#�$iq�ٌ���+��s�P��Ik!��.م��ByK/R]���(�qu���OA��~��e~�֤�mz�T5�,���3 3��g�=����s��iAF�	�J](�9#��f�*���ɯ��f�IM���������vvN���W�+N��yt�[��b�;AT����&����[�X�?��f8[O�EF��Q��tu;Juj3q���N�L�x�By[|;�qI���ԏג�ET�pcZDĽj|��>��T$cuh[2��l㚙:A>�'�D�4i��gnie�g`pP�0=��,sj�zz���cK��Yp<�{_:c���2�%�����q��O� 2�s[h���K�uR,���Ԝ�G�" �Q�LQ}��h�C��������P`�k6��{ն�{X]��U,>S#�~'\gl����?:Di����n���dX��XQ�l�4R��P��a��I�����p0���z�8��-H����g5�������|���Wv�	�xd�wYM!_�S�ؽX=ʢ֗��R"�K'*�O��*�Cţ��VKt����b`�+���B�0O�D'[J��:�]�N*օ�Dy�FM.�����t�G����r�bұ��-��B���ds'�lC6!�<kl�zw����[���Y���5��N��*9�����Lh�z�F���"�삟��N�ܫ������\#�!�6y �̧�eb�0T�v����\x�^7f�P���)��~�1�6Bk�>棧 ��Ǩ;��|� &<��Rr��1�l>��kc{E��Z�X�~�������VF�8wH���my|�]�W�~U�Z����Z���n�j6Zْd� ~r�~�_�g� �1 ~����k��vNҞ�����W�F�����N0;'�y�X65�<�[>Y���iѢ�������-��.ּ��7}����Kj5��k4��;c�\w�V�&:�}���#�ޅ�i�=��ߞ�F�`&d��P�5�h=���tpF������k��E"�f���w\:���UEx7w�>��,���]���Z��Yq:�[�L��z�/��(�_�׈�K��:s'R��7oH��ץ��Sx �T*�ş@���DL��j���|��u����s1\����"�o�}=(��,қ�v=!C��
�Rm9���oѵ>����<TJz]��b@�k��9KC�}�4�}��ν�������Gp���#aY���r�w�����D���"(@�v�i�΍�G>v�E��,K�gΟ�.U��{��/�}�[�N9T����t�#2���f�|{�e��f�j���}0��UV������Ɵ������6�O�/x�z�*�	��K/��\�.N�F�F�?jX�e:�#ȭ�7��,-T`����YC�K���H߇�`E�� 2L|�x���A����,�9��,��.�������y��<��TXe揺�n��{��}R�
ko��_��!/'c#��`A$)m�4F��ݮ.̑{2"�:�j\�����o��%�ĒքN���5Tq&i4Y�	�H���ݒBV�r@��xP�BJ.�4�.��ʁ�Gߩ��\�PI��66�Q7U~��"��$�x�\�wU	����:���q�K���T�4H|�R�@�`���N�R򱚦����q%�x1�ƩC��86��¿j�.�x��"��v;%�� nB�o	��/JQ��ל�]��V��U����K8_�(]ja��� }鱯�X|K�DcS3���K.?����S�����Pb���)$"�i�X�6��CJ��-���v��g�\w�0z�KH��M�i��O� ��5ū�����h�q�����!bU�ZY��b*8�[?jW���ȱ)��P9^6����Ǐh�B$�t,���2�g�|�W�����P��KVK��x��2���� ��M�P7P�E�\��D���d<Y }`ӥo��;z�B��? @�3��Os�0<�KE(y�B]�`���R���;�(��.��S�ي��ܛJ��}�uB�r5^z�:�g�[�� Z�fq۾���/�Pp�u��}��uτ�A��~Eq2j
��
�35��|ͦQ��/�}p��J��#�3�&�P��s��3H��
��-��A��D>�E��I6���WF���[P%!������Wͦ��k���=����`{L;e�W�����D2��Ff����u�2�~#S����8Ӊ���_;�Sh�Ļ�̀�&�.�b��+�����$�/�cU�����uY��BoFԑ(V3��ۿ� 쏲u�#gɃn�Rty��E�H#�;�D�'kLy9d$��K�fn4k/���U��7�Pop�<�>3pQ������d7�����q..)@r"$G$�.Yo*ئ��X��``䷴��[��(^H%�N�Y��;�HD�<ϥ�����q)��T��[�6�C�!ڼV��ts ��M�ҩ`zJ���Bʃ�V����U��.�`�.b�8�|ch�ۉt���p{�>�֡�����2R�Qԏ<�3��� �훣Ԭ:'�����6X�uy��i��p�ec�r���E��&s�3$�X�LW�.t��>ͦ&�32p�j7�.&�ٶ�]��އ`�V=����ʤ�
���Y�S�D��.�`~JזQ�vi���3���P�5��/�/�(�ػ>�Rb�����ꔠ?��r���M��{��Ȭ���D���ts��g�x�D�p�_6�MT�ƛ�_�Z�X{��Qsؕ"��G��������F�I���c6I�͞V
(�ŉ)X�Hw�dؐ՘@,Ӵ��{�l��c��k]$"���=�:G�s��>9�
Hy���֦{Qzu�g�` _�d���d��A��ʄ6�_�2��J-�)e�,%R�ͮR ,;�5Oj�r��B�^0%rP(z��	i?ROUi�Y�>��w��h��[W� 8��a&��,���[#	�p�$����(�\��P c&r���h5��R{؉�7ɑS�eT�kɇ��;NƊ@��V��$y4|Zl֯��LJ�ܓ�ɠ4�|ډ����C�j��#/����Zu4��RI�m�+h�~�G%}0u�Y�:�[�U �֣�9@ZoZCR�+��Zz����S.5Yj�ML�7.��`���8�����Q�l#9<�ˣj����aS�`wuq�.JI~\�;<5���n0��0���ɑG���#�?q5�,�_�B+��#�MN����ty"�+�s>c�[��mfiM<���+l����Il�`�Bp�R�T.�]lYMN�ʥ#������Ϋ䮎m��m}�<��)Zɯ|�~֏�����9X)3u�(}�(q�U>�\!�զ��Xk�:}x9s��7�y$�~�A��Fw��������ˣ����՘y��ܓ�22��Ԕs��0s��k� ~�o?;W.̤����:�_��%���l��?Ү���2�#|��m�}�F���I1�&�s�2oٶx�;�]��yK4A�b������KpL���Oh�H��%�q����6����� �d���U�c���r�\8��H�V��J�/�9����2oH��������-��C"D'bg8��}_�襳�����������j,xO'&�$Zx���\��֮����p�b�@5l"_D�(��@�v����Z�z��d�˲&�_)[fR���u�]� Qx�v�[ #PʄԺ fʡڶ��{�y?&7�)H�yc�\��������r
�O��d8� �g ̛{��1l�Q��[��7�������J2W�"�ʂX�>b�hIm]��5�X"��%������ژ��)S+�cG^�8��pn�_�q��X�6X����e8&o-A�ԉ�`�ug|�fJ)t7�k��G���E:��n�g��Q��oQ�<��"y?)�4�S_OEDkG���"����s$�U��2~ݧ1�~��=���oB�+5l��wG����wY��b&<�t����W����l�=����K�0����I��q!�zʖǥ?U�s��|^�E�)�;��^�!�lmc1+�v[t$ y~�G}gL
��
������4�5����D��
?c�l��C㏿b�+mMW��2>���a_�;���Tp�a�(B*M񌏟���[���p�<6�h�ko����5�Y�����}��<���~S'f��t�?���AY Rj��K;��F��r�A�Pѷ��x�%������W����+t5	d��qd�6�lV?艼�/P�K �̠�T����Q:}�	}�J��,?PO�?=�mHt������#��`��b�T�{��ε�B^�	6�
�@A{}�.\]��u�w��^⪍(�P���\/��,�ؤ��1=� .�8�8����Zfʬ��gwV�;� @����
��}� Y�pV)�����r+�-8��w[Vy�v��T-%ۀRSj�H�Üd���{욷�JC�&8�xb�eV�Od�LmU�W���?+�S	7��Qg��P��xӾ�<�*�dO�-�X@Yv����/����T��~(3�A+%T}�N�x1��Ag[l7#�L�,zx��L�A�'���/� Vp�U���Sw������}��;pb�v��g�(���?�l��*�$%�)���\�6����:?�ڗ2��H�bTyh-��zH��|���|+�*��­�}'o�en'��2/�C���.}��Z䰥<Փ�qub�fЅ�J�./�-�Ъ=B[T;��k��
�t*��t,��TjPydnS{��9��)��V.7��8(����=�8w l��bU$̃;t=�E�j5+3Z�O{�����ت���%^&��>�l��P�N�6�]=1Dd�v�U��������G!©?�Bf���S�H���"�@�L iIO��]{P��b:iv�@��r�
>��Zq8#�[����8���Y�#^��FW��JzD|;����7_@�*QMd1����9 � �B��H������x�*��b�����%���>X �a�{0ڹw�D-���tH��=�p�uz�:[?��LO�C������|��V'�y� ��|�71���(�<�q�A���&�|�����$�i���M��|� t<�vE��s׋T4{��V�4>�T@^6q�fX��m�)d$���������)].�$ge�d����C�4�-���.PӐ�v.R���59���`&1��y@�k<E�?4����>G�0��WG��F !�>��?�s�v){qv��A�ḤT?�*S'os�`X��w�|�A̛�W@y�<�g(�Q-�g|Ktf�l�Z�	)�^Ӡ�}�UQ�f��/��d����&��'Q�H�[
�VJu�.��t�d/׺O�tR�`����Z,=�ր,��#�����J��F+M��<o��ڻ�5H�R�7ʽp�������IV>�5�ȝ�7�<�r冎T��l�r��pZ �V6���d��w�������I��U���`��^ר_�4����X�b= ����!��ZK����q���f-K44��'��m@<u�/m�#�ʪE��������>�3ޠ��\�3��y����`��$T%_X���
��r]un%�)�na�����WB|2��i�S�R��;�O5vtZ��z�t���7E�e�v!髌̣ר��.�n�@n�oG�F�S�$��D��M���F�A�:� �jk2S�^����S`&Er����)��	Q8��"�UvS�"-�vx�����58��&�B�f/�.A��3ww�,���آ���Iw�>[��;��E7�_L����3����,�jy�ڑ�I�!��G��9Z-��4�)d����>=+��؊��o0a��%K������h��J&(�i���;tI~��V���f]#f,xG��/�\xj5���e��t^_��	r2OƩ�������+�H��Y�ݍHú��P�����l��-?@�`�&$Nz�
Pb)`')����E�w��T�:RJ�/��:�e	1�� a�1�䐢�fqX��67�#y+�#Ƿ���H��"��Kͣ�T�����:�{I�������^���xpN^�߷��� �rp����C�o����Z׀��'��|�_���aD�W�᪥����?��<��|:�SqXٹ����e�Xߑ����;
��?>r�����NW��N��� ��U�_Jww��pe�	D�"���u�$�V|�3��u��/���a�^_��
�&�۞���x�C�b�z�S�M%&Ҫ��L�@�ǲ����IW(
����"&�_�AsC4o����G��p /�K5�����*�p�uo����0HjR{��.^�W|��j�����#�&�f�V�w���J:�r�0�	̝�X��Yo�0��o�Bg��R�4lq�߾�!�N9\2��������"b#⢏���rj�-��Ep�Ը��.���$4;�b��L�ש��CL�Əz�s�g[�P��Y�A::q2[��Ԕb���~����/�	�~�O�,���+�s� 2�a�T8�l�]��M(�շ�����\���&���ǜ�na���Ŵ �2U��f[*]|�m���� �5�PX�>�O�������x}1�D����#����sqSfjl�~w�_��L��(k�I&:<�̶!.���h6�p꣊$ˬ�
��	�dj�/�anCO`�~�n�.8��kr�)Q�y�`ۄ�qM[��J;/�;H{��7��g8&�"�z� �NXV���}b�"BIҳ��):�F�oka��2Q�$!F���(4�r�Cc�6�6cP��7�C^�6���%i�1GC��F�$�vd|�CP��Z>�fh�#[���1��Y3!�Y?�H��;;T_�1�1�j$�᫏ˡJ���A�L���D۸���Wz$���j;�d*]�I���b&�G/d�"�<����"��P����`�p�Է�$��3�)��q;�-ZĖ;u�gk�Wç�`�0v��#�C�Y�	�����{e_�y���z��f7��(�������dˎS���X�qb���*o��҃ "�2ؕg��g� ��P�%��.��!�뇧w�����Q���8��Y��,���DQ���pٔ��f�uY�:# �}\C9$�։Ƈ���Vv���C"�����J��x��y39k�%�����#q�I���F�<"Z��>%&���*��K�8�����Ȱ��\A����+'|��1����^����I_7ւ!��?mwTo�koggjp1�� �]
���P���N1��k�GQ�Y�65h�Rc+w]kJ��������K���L衸f�A�Ǟ���-'�{h�YT�? �k�c�`���ڑon�;]`���7I^b6��������}�Bǀ~���F�T�t�ʼ}�ѨV����<��E1��צLc�5A��3���tkN�U�č��U��Yf+���u�ZŞ�x��U�����3�����TX0���P����[�������8q���KZ��gV-n@:5�nz��jAdލ�]�F;��Ԗ=vJ��c(+��⍕�+�M�5g�uIv�^�pK�4�&~>���O)��� ���l��S�@7��.���ԉ��Y0�G��$3!E3�U� =%��Z�`��4��� ��u���(2Y�K��P1o$J	�vwr��_�\��l&�ǜ[�nP�Ԭ���e��u<3N�@M�]���ɿ|��۟������=��ֱ�V�����F`�y�E��cȀ�����T��J8~��RmZ�|� ��n���V�Ut��������y�{sܛ���~���պ���'����ܹZ��c���
�w^/�3�������^��RV����Z��JG��Gx�#�� Z�pF�N3�s���܊�_���L�(w��t�R���c&U��T�7�-�饸iY�c #y�i�k����9�Xk�p؅�(�M#l��'���{�ut�Á�q����>L[�?��F1�g���_	���I�P���M@_���`9hL�9��L�_B`�4���D�t�#��-H�P|
��Бp�#����V��/��Y�[C~�j����� ���?R�
;7̞J�#�eμ�J�E:�+}�H������bF�zG:�q���-�O&����%������M� ��?�ά+�r�7'�������b 'T�<�e���Y�9�����i$�Y\�0[#/Mp����������|�����a�`�wV?��KV��gN�ESe�t�q� �7L��v')pc�'0�:1��
����S�g��(�3]x(L@�����.�y��E/��y�����k��6DP�V��_�ۙ���||�1�c��I���k�ݭ��p�uk�x���Ǵ�ئ�6���OUn�H�W��8O���M��r�6�N�_:����|��|�0ǰI$z0�1�QORE@;��L"�n�`G��4Iw�����.S��R:-O� <02��`��t&g�M�#����[�H'M�y�x�Z��R��Ft����2�)75�x��� ���v��XDhϙ)U~�8t��?oMD\EnHlR�S�X���7�n� ��]�q�/����*�-\#�+��v�sd�Dk	2ɡ�Z��Sm"����Y>t5�sJ`3��.,.u�അ0R���1;N)�hf�iD�ܽ{@����J�R�M���]���YV_Ѫ�=�klР�O��h��a��Q�cX��6k��$��5��N�cN�,�GQ*�\Uqe5�&)հͽJx���\�IO��"j�2�I�r�@�\�?��rg겱�	q/�m.�#�b�PI��	~�aԔ�&�&P9�6K�@y����+�pu:�L%|j�*�\�s����Z�V�o�G�(d��|)*�c`	�(L#���!pQ+��M�+��r}�	�n���0����"�RjA7����C{���x�' ��nWX���h�[�hA.%�:�J}�>����:1dy��fK���s)\y�ڝ���a7�4GIpOhX(�z�x�D ���E�+�٤�`��U�˯#r����������c�$��ު5m���L[`�Y����:������� ��=2\��u�45�<�g�z����Y��'���aVW���{�>!*~�������ܞ��pX�R�T3��Ф2k��l�J����ET
6�m�$y�u;������q�['t�%v�E��&X�rlZ��H�i�5�S
U�d��a�Kj����A���+�)ǯ@�G�"��^^������	�w�wV��̧�G����847$RG�t���,+[�-P�]�jL�M�4��>nqaj�%��m���}Չ�!�_Ij;6�[�&e�8A�@E�b���X}�K���p�!b|��,����K�+�-�}q�6��[� �q�%���yi%^"9`r�_��'��O��NO��ً��G)�.�%�<|�M\Ȱ��u;K�������O�M��ku�X� W7� {L���R}KI�V4N�������r+��h�8R��ѯ@SU�V01/xa���~����N(u'2q7��<+�>��t�����F8e�
�e-��`����J�X��j� �-5��h�����n�;�ߤ���ԕ�^T-�"��ahe���B�(��_ M+eT�4�1������)Go�p3 ���J����a�I�I~Iib�hs��O(C��Y�Ԟ�X���6v\��s2,��ۺaD�e	eĊ8r���i|%l9���`��{ʲc<yA��y�S��(4����yװiÚ$+�D1"5"J��z�QƈMYy�!��с�O���à� �dI"х������OLzԈ�@*�O0�Y���t�4�V�H {��l`n�f-�m|�bA	BD�e��e��N�6��d���v]|F{�4�
?κ���}��_���sxa0��k${��i<��|�[�_��j�����T�{`�*�J�`���E�E�(SL��a�� ]c�%�prVHY��EK�F�o�_��h�Z���z�6a�=���^����	t���6��7Ӯ��5;)+_�ڍ~���i��`hI���S5�.��!��rB�S\�?Z,@F:,�IUjKi���	+vh�'��*p���#�-�f���Sz:�\Tl���7;�1�(1�E��$���@�h�� ���P����֕��E���9|�ڶ�lӖ훓�Y��'�ײ�Ē6П��������K۝�+ ��z(��V�>��m@���um����'��̣z8�X���\��Q[lJ��"�O4�(U�څ]qw֥,��Y�P����O��N~��V��bτ�|�]4��c�� �܋]����G��i��5&��C��]�Bm!�vj[�9������1����P��B�NzV�ԯg�cf�"Y8��h:}�^�࣐��UC�7lR�^:r�8�,��Զ����-�l�X�O���W��'�NA'h���e ނdԲ�wq�`������"�����Gʚx@8)E2<�}J������T�8��#�?(װ+����,q� x/ʗ��L���A
��ƃ�O��'�?��9�y%ɡ��/=4.D�cY	���"�$x�jTSp�x���t{tUn�WiZ/x�g���J	0B�?��u��V���gH|��A#��*5��<�k}YTfM�x�\!/-l����VN��;�@dMC��>[�L>���P�9�����+4��\d���K.����9�}K6�/7��_Ş�Ʊ��<@��8��-��la]wZt�ػ>�b_�����V)�'��
,�tDWo
{zU�5��:���P<gA�olM6�Ü|��0����]��|P�?P8I��>��F+��������)��鳸LZ�s�b�kەgdE�P�)��bS
5�R�&��;Kv�{������9���+8�-~<~h�m���؆�CW`��ހ��^fܙL�����s�!�1�F��$��e:u�DПu�fyn@]�e����y���OqF�".9��H�ȹu�܏�������ʅ�a����]�*E�Hp��)�K���R��Ե#��D��b�;�ԟ���gO�46�D6+����E�M���z?�Q�ͩ1O�^�,�>;>r�xg��t�A/�gِj�-:��{I;ɏ��������ڥ׻�>�)���& �̌XV�E�y��tK��o�Z�5a��v��bͿs���q����v'ޝz]����LBQ7eI��ve�4p��MXbq�G��"^�w ���/�{�
4�*V_�� ��˖�_�J�!"�-��+�ߩ���%��:n�-�ꗏ���L�5?8'���o�>{��v�����B��5#d� �z��O�aa�+��n�>�v(�xd����m>k(2���yˍ��H6�-�'�W�afft��P�]�n}x5֚��t{0p� �����85'n�L^��`02�X7���m�̘��HU/�kmJ$R����p��T�_�^��1~���LJyo�oZ=���`�2}lyS����A�I�hn���t�h�$v��l����Otɫ!�	S⫝̸#+,ho��Z��!�iþC$E>R�m�5�*x���&U4
��p$f.!g^���e-� ��� �k\�EcRq��*ƛ��Fn��;��V�c? ���=vj(!||�|��v�"yOڇ��g��k�qS�n��MK��0-F����oGz�n�תb��%�u�8��xqJ�i9��8���?�	���/�O�SX	1�;����!&9�%�p�Wn#{?�!�D)�]�hV���I"�XE6���5
e�0%xɁ3�0:O�R*�{�Vج��-�o[4�X�x}>P�i{j��Q_��ϗ�4Du7�Q�eT*�x�tz)�[�a��~����j�x�E4�+�ݖ�Ǔ�!񏴑CQsλ�����VV=Jg���������%"�]Y���z��^��Y�{��;c"D���,�V9#	�g=n«�p��?��A9_N�T����c�$���]yQ'�3&��e��p�G\5V�β�����x��Ac��@D.�ҏPB��,���p��K��_�&�"בȍ�2�pp��*��3~�$��W�:?0tR�\)�1��J�
�F8U3c���|�k�:�w_��q��v1w$[�ֺ���Hq��D�)�h��+����7�w B�.O���%�CL=�?�/�b�ʗ���2g,!{a$�o)�����$�k��y��nM��|���zW���f޽B�f�UYdȓ^���$���>Z���m��c�!�����x��3I���KJM��Tr;�0���C<�R�����lG����3>p	NJ�ʒ�Sx� Ț����*5�
�\�õ�K�[�i�^�`�P�4��C[�ĉ0�terh!��}7Bq6��T���Ұ�i]��x���(�*}Xxe�����4<��I;3��B���I�I���X�34S�+��=g���uݑ���KĠo�I1]�x�'�q���'�}Mѿov�$i1�����T�,��/K�s7��hҼ����D<��hp�<�����ńX����qh����E%�5��S,��B$SZFW��#hS��S���_]������=�,��1-eC�
�ڂ[��+��K���u�I�1��k���.�Z�,Ul-�����r�G�� p���u�
��(+;|�^�~�����j.���g��
x�CIq�D	�G���� ���N�a��Iy�!�.���@ H3 �)��s�J���z��9���"pZx�l�}��B�߮Tq{(A=�*���Ѡ�)������\3�=��'���Y�!ʽ���I��!����&]Z懤�p��Ew������}&z��t�y�ALt}��:�����é�4޼$������1��Y��{Ƚ)}m��}HY��/ʌs93:�<�U��O���"�Q5�5Ä��җӆ��u�-$IpɌ�����C���M{肪ߴУ�횛�I�$k�(��a�Fb��}�w���F/ï�(=v_�*��(u-�|Gѷ��:c��i	v�Ni�+���)"mj́�*5�q�8����pg��x&�D���U��?ϒ0��#$_��ͳ��Nc*?���r�[�P}�9w���u^�� 0V/d�=7frf�񓎟o�+ c)ۈ�3��E��g����BQƃǤ�����ah�l(B��3��W��̕TX��\�_�F'���% �s>���2+�K/EF�i"�s	�dR+�/w"k"2�T� ���t"Q��O	g��Z�!�4��iqX]f�"sv��f�n�m���ll�Y �f'�!Y��<����"n��C@�\j��6�����tm#�Yl�p���pΦ��k��<��ypD0ЊZ�N	V��]%:����#|fD+.j�-�&Z�tq���rw!*
Q	nj]E������a�0�8��C�E���L� if�D�&e�_��� �O����^�X�>[*sh�I,DOݔ�Hy�Ns�57����#�:"�>�	�۴͛͝������kn>TB��Y��Qg���$��r>��n�; �3���ʾj��$o 71yp.Q��&�-�#UT�UT"�͡rيY�_@R�yu�r������5��9���d�[%��%�E�t���$5ix�="�vs�B�GY���/�+��x$y<
�w��c���sE���&u,�/<�^��k�=�#A�q����V�9Fsiq����O��ј��]"ԚQ�TA�ig�A��A�Z�*ĉ-**d��X���Hڸ4��f��9�2V��<��WZ��|~����GU໾�C�&Cճ��rA�ot�$y9���G4&w��.�oe��'a@Oz���+&ȹf5$n~4�
i�!߫���2?F���?�D]:�c#�E�e��n��Q�_�!z��F5L3�3� ��-lw�U�ʰ�vy�̧��~�,�|�qM�^���ùX1<�L��8ξ�h�K{I\
agA
	�F[d![��p̓��G����Q/�ǝm��i�΄)?�;6H���N*I+Q��_o�@����[bʝ�ʑy8��6\��$<�V��V��j�H�����3���ޚ���FW¡���<g=�� @s��瑙�!���r:��u5���3�ՓQ:�E���(CɊ��eE���E%�Ld8;X�[.�<���6&e�r#I ��ԱȆb��P�ώ�n�ה!;���2K��x�?L� �\��_hiM��_�3�֕Ls�T?Y�í���).�����QH��h���Q_���	2(��~� B_y�7ܭ$G���d^�ee!�Z�HQ��&X��S],~��e��+פ�Ԝ>��E���lO9.Ӛ��e׌�5z0�Ǝ����Epj�����rJ?���˱s�?������k}�@��~~�ӏe��':.���PSd��r���d�Y�%�d"u�\~wD�T��y�&�[�VP��w­F�u��ļ5XlB���C�it��C�V0N�uJ�.��ԑԫ��ߧ7~�]�k$K��o��"L�ZIn��u���N�I��M��83�奉��t�g>�o��ɱ����I�|� x�|��S>�m:�5;������K}ݗA�G�p"D�'���r.��Ee�4�yj����[Թj���i`:�°��E�S�Y��N`*�_ԍ]��⭝9$;3JA��5fL����}����9��U~���;���3�חiݹԴ�Բ$���s��-��oE�����΄��`�O݈��]b����1Q��V�V*-7]�Qf̹)pe�i���ST����܌np���S���"���Q'�'AU3E���H}���`�a�H��^���9�m�֦���t$�c�ł��,+,\d B�y���̥4L�L��U�qJ�1�Jj�.�����\,�wl�q���r^�>Ou}��њ�1��m>&����EB�I&�X� ���q�s	�w���T�r�ζV��>��g�	���_�9��K���$��/R0E��M�2��R+�܎*�}�sF��.�mud��i����e�T�����އ��o@��~�d�LsH�`��G%��J��D��޲�T�\NI+��{3�	���wf��ք�@���������N�(���=��>��_!,�������A77J��9}9�����Ѹ���>�E鈎u�	 _K������4�݋w�R����H�������C��h"��ı�"�c���>��dhO4fw�d%�m'Q��wt��ޟN+�d�!���&�`"�m�W�5����(���ot�X��ȵ\xK��k��j�&���\%��vaյ�{V6��T9��P�g���dq�����D�;`p�p}�a���u����| ,�͛���lN5G^�>�=W�S�YC�c�c&>��~=Q��k�o.�%�F��✉�g?�p��f{�ʎ�Z׷���q�DZx��l��u�#v����F�aF8Ft���iR$p���"���s}�.��o�ha�5|�i��ߧΨ��q�=�kS��f6OT��ﾭg��m���ѭ�ï$R�sBE$�`0�[�I�=y�Y�ܗ�E�љKPDL|�k(	���?�n>q��b��}S�����mfI8��v�$��</IF';�?�6䑫��Ji�b��ёF]y��	��A�R��j߅z�7/�Z�7�о�*�b�q��\�}�5x*��4�36.�j; ��{��NR:����<�n��p4�by|P���}�=R1��t��&�m�� �xqD���d�O����7�r���z��R���CI�"���m�_�2�P"�Y�����D�C^�[��e�O� � �d��|%��Ҽ��R�U�$��~b���;�>�7�iվ���\t+"*~�:S�bXb~ु<1>�<����=�g�&?�7oH��9�m�cw������\���j=A�8UW�*��ù<�-�3ʰ3�g"���~Rm<&�8"�!��"iv����0y��%�9�J�m��ғ�����N������D�i�4�;�H�Y6sJ�WQ�*�g���He��{Pc�>��xl��.ˤ`�L?���k�����;�����n!��f�(H��QG�厴XW��%;Sg�3�B�tq���5��A�%�4���6���B� �4'C\-KFd�c-�?+U���$���R[u�]髡Dg(�$f�{�������s��Q����mt
�L�p���������K{^�f	ϩ��M*du�M(�X����~'�KCbp]�.V�!jf+.�5�*���~��?BR:�U��R���ݛʒ[�r���	�{9������Qs��]2�_������b����W���!�����<�ٱc˧�i���J�ڞj�����~��A�q��T�DU+i�=���<2I���A�)�����iUS���p@�����`A8�ygp�Ô7������r��L�KTc�p��Z�,����^�E�ǘ�	�Tإ�����z�	ʆ��3��u+26�.a��r<*�^ khÖ��T��!,��;Fv�@�A΃��x��\��Բ��o�.�ڲ/�]�j��K��Yc����<x팞b�Y2#bJ�Rᙲ1��]���5�\���[Kx�۳N?� !���k�]l�*}�)�Ґ1��z�%�o�ZW���]ƨs�� ��&I®Z+3&#��e�j����b�t{p��!��R��AE�Jm�&��A��Z��QIM�j��΂����X���DT��BQ{�������ݣr�tQoϵ��s�]���� �d��=%�%E�T�O�x�Ul�zJ�:��:�ުu/���;h�������|�+9,�#���L�;� �'si,_'P��Գ*�-����Da�)������jB=Uv�
<���t9�*�&�~�����Y�#�j�����f��7��j�v��d(_&#��gw~��O�oS�@;�ZX®�L8�x\�K(���O��c���I�lSxf�j[y���aĸZ|3��v�4�1�l��c�[�]�O�2}P��=t�s��K�Y���4��ϛ��������Z->�ڟA�9�>�-c� �a�<�W]�s"��7�N�U�v��e���c��z����jN4_��D�t����\���z���W��2*}C�L��� N�Q"F��Z�(`5��A�	�	�P����
�f�����oH��u ��$eSVwIp���./	ӆ-�B�<O�$�:�'2~ǼiM�H�"�}�#:X[(�?p�%7�7��_�l�J35�?�֛�j
/���<�U�`-�H~ͭ	Z(I�;u�-�Xv2wp�'��m;S��i`��N���4�^���H�\p%���yc��J����B�w�q���X~#��&�v$��wܪP��=b�ӕ/�ܨ�xB^Ժ;'U�I����C@�5�qm��X���^?:E�KVK�����>T�پȎR����^4q���(V���v��<� #�`��kb�+hO0����9'P84۹L��N����J*��E[:e>�9��zK/�C�:�$)�o��j�ٸ��3#P��-�rD���{�!��!��uI��Muʱa7g�������3^ �̮6In�gM|��ǯ�s{kR���(��:�N���U��ѳ����ܷӃҿl�p��w#��o��=&�0�!!L�"ܝ��<�CZՍ��w������BZ�8-|l+���[���D�U<$��pݼ���ה��s��۞x��\�B��Zr+�{:��k3�^���t͏��9��%�!����1��*A?v<�t���o�;f+�j��a93�3?wo>�tBӑ-�:)��B����U�1�ĨBZ�r��ԌL��Sp�WD�ٺ��}f��#�G/�����y��[�q���s����vԇm�#C��mH^���
 ���8l��H�K�o�#]��3U�����(�kE�� �':�&�<�;..7?D;��/*1P7��Q�)�.c�����K��})��.(��3p� x�;�O�`A�����s5S��}W�',g��ſ�%E�B�E��j����q��5��d��<V�fU~Fn�7X	Ժ�OI��'�����s fzaj�_V�27=մ8(?Ѵ>oI�+st
+� R�߭�5.���M�x0)�F�g�=�[$O�p�,u�d������ɮ|������  ���H5���9Pk� �0h��6T�w�cRê��M���]2�
2����	�H�F���
m�nF�M2aYmg��o�4H�g4�\9�{R7R��$5������[�vyR�ɯ�¢��*Eh�濌Wc�
	VЅ��I�qta�H2TX���6 �_�5��]p���k�7�V�k�;�� EFC�Jw�ɾ��g|_.4�'*ˏI���+7�Mq	��Bי��g[�6	����Q��Ģ��|6��7�C
������b�C8�V��G��:�5!�fW_��pF���&JX�K/�gp�-�"�~1S�EV�**�w^\�L#��!�&�]q}8��e��$+��aAk3!�?�&�r���F��(`зe��I�C@S����+��;�*�h����y#����\ڞ�y�9��H��	S�����0,��J%�+���$��P]����j��r^虥r�h�az�=߰�X�t	�%y��m�v֭��gB��e�I��$���i6Xt���R�)HZKP�D��;��{��}#­L�N�U{�>Ls3kE.�n�(aŸ�Js��t���ݔ�C�!��|c:��Br"���:�߱/�G�C����� d��ڴ�A�&��ԧb�u�s��3��#�s���p��oέ	WDH�����S��q��p����3|��ވm�mp���H�{��3�?zi�׾�
����@����;�=8B4�a�FRli�_Y��7��������e��D�����Pt(���> �
Վ�D@� �Ȧ���'��K@��ޭ������� ��GhI�&Ä�Ma�PSQ�a3S>�>_'�J?����<��"U����
KA�����E�'Gn���ԜO�K�4�p�$<=�Oß�8^�&���d��'Dt���"q�qsu�L]�G�+��5�\�?��|��F	&H�������9���m9r��@T�}Vl �4�T�+I;�gzC:lY�dŮ�;�V�����&��ï6ڌ�^m\���-���S4��m쬑��BCn
�|"GT'��ρx4N`�|�:)z
�7�,ؑ2��٪_��)%(MG����y�]R���-c7�J�u��ɬL��	�~<?�I�8���)vS�}j.TO��%��fc��0M�)<]�IC#���iX?���O+$�$�K
ۈE=0�;uh�V���/��2{��)��Zqͅ�i\΂b��P:1��jZL��疈�<8�d�~�N��Ea6����Y{�\�l��z\�$ԓܾ�Ų�s:����-�G¦c��m��(�Pq?܅W|��DD��a��)�Y$��b�.�fJԶ�&mL_���KB���;H�ۨa��Í]G���U!qU-�r��#�$#��c0�btyE��NyMX^�@92�Ϳ�~�Mme���N�w�!�4�aH�oMߖi����e9�H�k�������M]�/|N֓/0��˖�oM���j9>���ֺ���d^σ6x��)9�R�?��xRT�q�s]�=�K�O�8��W5�|���ҭt6��*�:�U*�|���U�7�p�:���0���UR)I\�"�4~�>Pg��QԔ������^�
]Y�U���Ҵ؎,�����U?���U4�kp2(��h�\D�-��8'Y�ܵl@�=or�z�n�&ݸ��0Ԋ�<֟�ŭk����6�B�hr�߸?�l�������/W��O���ڷ�?����k@k7���=�B@�E�b�?����tv�p���.oQ�N/t6�o�A	yҜ��k ���2&*����8��LVB; �l���c\8<A2���B�}��h4I�w�e|K�^Vm�c�C�A�d��{DQ2�/���rq��3�1^�K�툸�-���ʺ�W�����;��`��������S�+��_�4����ѷT���2Ǎ"�B����2��]�MP{4J��b =������p4���<�=�6R��V`��4s�a�y���"�q�HM�[d}���i!���F5����|[����N|���έ�z&��]a��А��쀿�������(:�y�"@1C�I����|:$$�d'Ŀ���6V�����b��~J�d>���!��� Kp��/,Z����s�� ��p{�޵Ҫ�#�I�h�q��"�<jD��NtF���JP����u���o�Ȫ��/0���V\	��o�^%��Q#x2I�Qݎ���D�Fj4�.Cb}�%���"f�#�b����f�5��A���U�w�㤤�jga���u�m��O:ﻯ��o�@^�����F����dߐS��D��`����Qv.��>� E`���p~!x9����3�o���$���|M�R��v1	EG��C����1|�Ɗ.�?b�4|&�����f�'��h�B��F��W�HJ���r2r��M���W��2
��o-���]�L%�2,m�$c5ݞ;F���E�6�<��2��b�q[y�n�vPd�	�Rwa���=0ru8&c��\iQքQ�w�ю�<I�ܐ�	�]��-��:Gsk�8y{�z��b��x�/<5�B�53�_�x���ʃ�����	+�5�M��&;�5�C�.,ª��u��.��x!_l���;��I9obA�<�wa�e��l[��Q,��y)0V���a��� �:�{��xӿ���k̩��b^��	������i��੽� 5�J��Ƀ��kGS��
�n?���G(�c��Ԓ@<�i�{��.<�,�F�_W��v��?�R���(�ܸR?f�2o�'k��M����.kY5)��<-j6
>����Xu�,<������ �|���I7��ۛ͑g��CnR됖��\up�2M���)�Kȭ>7�G<�<yȐcvԏ⻩��@G��J�]@�H�b��f����Yi�N�u���B���u-��R��S�Ry1/pFxfwG4��Řf���tת�)/-$cXlB����7�!�ۯ��i� ��/B2���l�/�m��b���m@��G�n`�����~;�Q��i@����}G�n�G�;�
��}T��Rr�%x{�n����f��V4��{�mw*r��n�y��-��!Ǳ��08�a�N���qMi��}�~��\����"�úw���	e~���� �m
di��Z*�<�1T��sU�V�S�Jņ��͙%8�NG���zPA_0�[�9�-s�~���ߊ�=�:̰�H��/��o6?.W�����ٴ���Z	�쉿�ᅊ� 	��PY�zc���Q�[Ğ�tg6��5t�Y��&��Λ��{-�[]Ys��/�Q�}�����煻�U^�x�����Զ��Т����u?�sX�p᷈�mb���R����4NM��fA�3	H�bz�	��Լ�;O��=R�ˤ7S:�©%��|�`�L�vYf�rR��U�`�c�?��{��4�)��xQ�:9q8A��(�=~���:a�Ĭ-x�F�g��*��K���c'���d�����-�uU����>QTe�孇ti�?�-�-I`[Ts�$��b��~m�@�Z��V���]h-�=��J���6VoW�tϘ�Ľ*�X�zÅ��cFL۲K@���/NU��<�6�݀��lha��+��$w�S̞j�.,������)�3i���ﮰ���t�Г���dY G|^Y���'�1W�m��Ux6u��p71�
��w�bbI�	�K�=j׫��u9E��Q5"%X�q��
�nԅ	��!��=����Sjt�lh��s�~b!�ˠ����q���|�~��2vjm(����}�b$����v�/�%#�vܝֈ;^�6����/˪���|M4�k|�F䰆H`w�ZҦ�5,��8�n�ŵ` ����Ұ��K^�Wdɇ�ؠ!�;X�.eE�W�L͡�WC�g$ͼ8���a�-���-=Rj���S���>����^W�ФR��Q��*&Э���G� ^Q��p�WY,Kیz@΋~}��`��ۙ��6�7*"O�ǣ XM�ա��XS��zur	��I�>g��|��6k�oX!��#��j�!R�h�K���ʵ[��پEJ�����<�C�.4BO�{�����N���YG��-BOG������rK���B��;��2A��t���{PbhH�q���;V.�8��ʔ����Dd�!����'E����g0܆��WER����(:��AG�fN��6��28S�׉�Y;w2�C)�ݾ�2�P�¯�[�\�Kp��ۜ�E�Q'�	�>�xم�ӎ;g����@��A�0O�݀�!���h ](�R$'=}���B����ֿn������W���oW��Ha�o���S}�Y]:k��Qw -�-�F�}��y�z�D #y&~��c�W�S�r�Wt}gA��:��~/�]���7�*7Y�ݦ9rV��hi`���B���)�0�V<��WO��8	B)� ��G��	n�6�Ր�������0	�hs��|A؇!���.�ԫ��=Y9@Cl����.(�b!cL<�����,�
�b���Z�b�H䟎��ԫ����e��C��v���
�� E;�3�,����买A�TZk�#�&J:�I;WsD�%7���=�Fku_H�݂��r(�S@�}��@�	���&�m^6y�q�oi��B���Ɓ���m���ͫi�w��v�Ķ�8xј��#��X��*d��y��Ձ�rc�VS���:�m9ܑ�z��z�&V� �0I�%�*��*��'�����9���'ׇ�|���y��8��OUpk[�2T<�g���ȏ�Q�HnFsYA֧=�s,�B���$$��٨O?3��us� ���5�~'�P�HZ�hd�I2b�"�VU�Sܗ$@��Y)����U!�%�
xߢ(����,����ASҋ��w3"?�����ǜ"��{��N>y^1)�ziiY|4�����7�a3B�+�9�7#*Dk4O~������.�Z�����gV�0�6��ͷ�5s����X��6����V�C���4��f�Jl�4��%�zMT���^z�g�	���Y!���� ���P_r���p���!N�_���@�IE��;��|���/����us���k��G�����jbԺ�6<-��%L0jq�,`�X��@|r�!�<��x�@��u�n�l���K��K�i���FB|�gj�$�����`#��4�I1 �QpS2g��o�d��j���v�� �H|�Ju[���cA�����a���l�ߢ�4e�/,����7+�� ��۩��7�}��-���[��H��B�]��ᾑ%!���М�u��$?M�G���˃m�ͮ����Eɸi�3) �	#��u�Q��vb�z�֓���*֑�(�y*��`8�M���H�ae�I�B��jt	9s�H����4����t,p@|=��#>xL���ɏ]�jG��4��[�k��������}���&tu���I ����Ȧ�N���Ŕ����Ǘ�����+�$��bA6���XAZ��: R�O�N�z���23*>mv��c�]���~��ƿ�P���VO!�����ƥ����9���)�#�V�)߀c�Z:�k���A�Ȃ�����|�B�v�}p!0�T���y��S��&
�e'L�l��<MV��4	r�U�ȓ{%X���qu%�$R+��}H���븳!w���E_6";v���{��4�
�/�mN�%R~��+�/[��&m������C0��9X3]n����������/���Gp�%*'q�vr�/�=K�a�y�W���wHF*(���^�_N8���<�ƙ�Nh�}L�ع�9z�y�^)1��q����$�*뫉�|&���h����(��Cvs�&<�l�^�ĥ9��:��V��V�	������q�%��|�?�b+OD�J��&cnx1Dt�׈���&\$K��=�U��#լ)>�e���>?)���@�p��ԑ𲓉�D�x�ޘP�/�A�/�`�UT1	Bƣ�C�P���Z�jSj��]x�W�������ʗ���u�Dq�lR���FWL�<���n�.��R��w�^E�@��>p�Φ��TIP����=C 5���6��Ȑ(MS?��vB� ��+\�=i��,"U}����)������J��Q�>wo=ۇ��.+qD�Ŧ�:v$mQiW:BDe� �d��t��~A�R.��(A���i�l�c?	�>��g��o#s�Q�'s��H��(uEU�?�l@�� M�u��{��.
F3Ƞ�*�c�Ԇ��a��&�j���N��я�!bx�M8Ͷ*��0U������`���
nN�j@H;���1�՝U���7W��m�^���X��j�H�'�˹'HC8^�(�� �J���-�:�5f��ʚ�-�R`1�z�U?�$�r��ڕ?����(@	|�{���G�U�}u��GڝI�;֪���h�y���N�Ø �4~=ZG�+�*�P���oK�ҨI�6Em�����4JU�"7޲��~�M;FjM�gK���z�[��9�}� �R�s<�(0�4��6J�eܤΓ�)%*q3��l��t�6w�����&79(�ȫ���P6��|����U�֚̾e{F>��Q`����N���e$�G�Ҋa����!�Y]^���g��IH
��Z�w�A�8�����)�I���Ӏ��!4�<�~���}H*��9t��ɼ�Q���- J�n��K�:WK�%�$u�6��Gku���aSyY*��sd7���j������q�$'8��1Y-��[(��$�-�57�C�Y�-d����&�/l<
�@��B
��-�'�e�ߝB#UӪ~d��0�O@��������;_9⪩@�DTl�0S]����@������q�i�:�ɒ�GP�?3����:�����P�����4k�*�H^����;f4��/΀q�K%�<�j����0����Q��$$Ib�;�b���3�[X"J�y�������Yҝ�Uf8��=����	~�;����Ė�+��6()�"��¥a���6^"�����'L���s��65��h�J�A5hWK���������H�\�{?�3�Ɣ6�hKp�L�	�B�3�'_O��*�)Jc'���n]W��H�<��aS��3V�;�4��F��j�;�� �������=p�k��p��� Z]����Zx?_yƢm�Ø�-����Dj���-�&���`�cl�q�>�v*��|���O�4;6�N����C�[��N�_�-�W�5�����].\���bƁ��k! q�*zȤ�l�N�g�ꀘ�h=��Yz�s��'z�6�&S�Z�v�A"��~�M��e�i�j�[��Rn��u����A��/� 0�ΡOM�����M� w�a�v�Kx1q�!�;�����W�H��M�@�WD^ӓ੎��7��U)��
	&�X|s!l�u_��]p{e��1
oQ���V1Z��&KU�x�;R�[�De�q�$�Z?��[���������$8ٙ�B�d��p�w���� 7��{-A�؃d�xC�lh*����b���sK<���r�����A����n'�����Ǳ���lS�c�S��3_
�s.��!���Jt�n�:)�!�l��-��ce�Ҟ���Z(;�p6�}ԭGI�{�"3���"�(F�?���u]}SH������ׁ�.�嚪��T+90Ģ$_��\����B��s�6������&����5E�dK�'JFG�6�`)>e��,�cSu�J#�"�j�Eف�B�~|!�{{�R��k%�V�P�:�7��Y��팦�S���$����˴7./�%/�DF����H��(M��C�O��W�H��Zk�ʮ��������b1:F�`��Uʌt��|�Z]t?w�D$�X�u#�w8r۷� �m׽� �z���^-�iET��#��%4��i[}[0�ٍ�� ��򪷧�b��[��H�h�Z���wb,G�RT��
���c�m��`�6���%�K,S��N���6(�O�z��-+݃�]<�8²��װ���&���W��K�We��I;�+ cS+9lF��HU��e楨���bN�oF����%���k�T��μh�&zŷ�Ddjh������ ������ ���a��*hp�"u?��2���0DaAy ;��7����L�ј\�un눗Ωe���*_Mz��e�o�͏֌W������]���ĩ�ʋΨ	d���e��=Y����y�L��7�zFgE-���ښ�3n��KcY��xI/F��`�W��?	���/ҍ+Ҭ1�>�=;���;LN!Z�������Q��n5�НAy�N��v�H��5�S��0~a9sT�ae�؜iUQ��A(�� ��m�sQ�� ����f�nE���%DQ��u�:�V�b�Y&葖S�/���Z��R��)\u�>����u;���)�����rdjU�&��KW�Q�b��av���E��Zs�/��I�3�Se�C�u`�x&c�Ҳ�dm�v�w���g��9���Z�·<�ɩU��`qt^���l@���ehܐ�^���Ax��,�|��O[�g�c~5�F��}�,��o��%Uh8j�����>�2�(Ay4FF?���N"��b@���륌a�8"�ͣ��-X9v�'X9���t�+3��q�TTQ��� �]q�C�R�C�W�m��`.�DW�����E���	8[�'��Q�[��/*�8Fp7��.�K�� @���A!��9u����T�D �E��bF�e��W@�rGn� G+�'V�~��������m�n�W�%��@�E�Fo�ȏ�Mm�5�O���w?��RGC�3F�� �J�<'4[�f?�z�iџ�K��V��7b-(W��%&Хr8c��WÙb���mx���xuWk���2+�8@�K%K�ʥnP���M�|G��K\�@ѩy7P�I��
"ĥ@�&���|�9�@��������D�LcF��V�]�ng;]���yZ�1Cx�z�qn�F������=)���E�D�����v�1b{��r�CL*6�n��*������l�	hn�Q�(7�J�琊�erO�"v3��a���]|K�*8�R�FJ+�@�A-[�#�3��Ƶ���A
%YC�5D9
�(S;DU�/Oq*{&���+D���x���l��qUqr�Fg�xm������-j�w�b�B�;6Qa2�ξ�|���� ����}w(thG-��3�q��F|&�8xfO�@D��}����i�v�����e	�:y2��5#���l�Aù��I�Ȯ�������H
�K
M�!�%:�����sϴ�0��]����Ցn.��JX7��a�bFk�&o����W��Ңo0�`���Y^��i<��|R�����2ϸa�D���\��<J�q�<#�á��26}��\f�t�p�M�̊L�AP��%�����b<��o�/��Cu�M%'�p7�걜Cb��z�zu��q-Gi���4 �#���~�T�e��:��w��P�������}Y���FӖ+U��5Yv�]y<�0� Ģ�� ���.��5�D�-�ߑ���0��(�ԇ���{4�Y��֤�s�]���T�|J��[����_�{JUup�����F�)M��PK�VǬ6fe'�:�����Ę�J	]�F��9���Sp�{����:%�� �ҮP!C�!��I�b�:�g����X�����y|UPV�¿oP�Mz�=+x�?Q/����\"�6ڡ���gE�8��$(�.Р�b����԰�� ����h�;\�Eґ�>ڿ>�>H½ʨ	R�/j���. ��װ���E�Zu�ҽ�6H-ۛB���r6��b�7F�Q��<8�k�t�<�!P͏?-�VZ~��f�rˉ�����N���>"�B�5d��t3�?hI�%9���{�4��~Hkߡ�$�;�l�DP�sH�qA&4^�^q�����4���X���2���{I�H]����@�(|G5�����n�(�o~�]�;cX��ؐ�߭*�1���(9�+��$�6�N
P�3�O��r���]�@A���|���T2ˢ�eIȸ������Ha���5�����I���jy���L�L���"��d�=�|��L-�k��N�V�x�˗�œ�u���S�*ӭ��S��iid��M,%�;|��3RQ5C�8�D����r����N}F��r�y'}Y�<��%;���U�q�vU!�)������
��.��#�S���?��,��;&Ԙ�Y�|W���}pS�+M�~���Fޠ��
��[#�1�7s1HV��ll���䪜l	p�8.�{�?A'L}'%�Υo$�d�4;+<�	^���6����ih?;����gյS�K`���~��X�Ҳ�d��p�Bu�ӵ��?�duo'��Q/ �0�^\��N5;܈G��|;���s�4o���ʞ�Nwj�-OJ���W�C��z�3���Eb��m8.�pc?#�-
X+��7��{R���d9�J=��MU�T^��=V��{�� Kq�`�SUw�}����Ya$uO�!�JO�F���(�U�3l�[������
����1�.\H��^��B5�"7�� ����hk U����x�ï&sK]ta3F��w/��W3i��[B�nĭ�7��e+@6���_l���az-��]xY5TCf�Q���_�Y��=O��P��h��8�vujq@�ٳu���	�d�)��zq�&:��c,R�5��kc�b!��B��+��Q_�܏�
�����c���2D�8���-�s�����tX�Z���ߧb�$n�P%�S������F���(�EY��J1Сaz��2�L��F�X���$�� ?*͸y�2�:a?O)�**�{���@�l�����]����8l��B���?��UEUy�<����m>]x��]㥚����Z(G�yi�lzt�m��������Q��#!���q���������[i�6D�l�D����Ǖ*2��RL[���q(g��k��dJ�\�QT/�@�m���}�]�����R:(�M�F��h�rх�ZU~���^�q��CC�;����X(¤���66$T�XV`	���NV���zp�B.]O��)%(�3�)vʗ���X�����>�Tqݐ��O�P�׳�S� ����A\���鲭��X���A�u!��s�3�z-H�Oi�W��^�i���Rj[M���"T�%X�M�v,L��̼z<OPAG�S�!N	��fXy�fm�0Y�a�63p	$ڮ3�{	��j�! +��y(���]�ny7�����>{?�Um�x�lj�Q���L���וf�P.38����~H�V��\��g&u�j<z��Ë���g���C6�`���e(��rw�:���V�p�	CC�7'���h-&k\9�4�>�_�3�#�L!�{����$�{�nę�����������?������-��N��5�d_���G��H�v2'Y8��#�� -u��;���^g�XW^&np{.��P���� M���zt���ArC���g�I�<3dK���ݐ���Ψ8^��cr!܄e���z���i��;{��#*���� ���}+K�w�h� �ic��E��yxN𵶇�R�;�
��WD��MN�V5�g\��\��j��>S��� +��ɛHWr���|�u��Oc�@(x"��R$`,&�Srgܰ�oȐ�R��m(6� V�]��X���?h{py����$:n�����Ү�x5�e,�f[��VMl?�G�d��H��pq�_,�Б"Ҏu���b���o�7tȓ�ulg	*�|�N�{���T4�����F�"�l���v���m��^N��v��m��yA8ѵFr�]�
��P3��J8_�4�w ��+��&2w|��u&�6�Y�n�؎>83J���81�Yl\�A�`��qa9��U����Ihhq�Mg��Oz��|�4`��f�o��~8w"L���ǅn���>�ɝ�����àrw*hG���2�xYg��N��1�(��
n�ʟ�=��x#�$5�:3��1�C6�%ynU l�����&�G����0EK�1�-d1*"]���[N�53��C/��Z�&Cׇ÷ϟѫ#[1��.w�:�k���fkp�*���o�xǕ�!φ�m.)������(��� �tTP�
 1�xx�05�-�+LX� 6[�����3��_�T�X��t���v�&Ȃb�<~�O!��ɬ�z�ZY��c�B2zïe�=,�zȎi�g`�a����
H)�4'a�պ fq����W/ݤ�^� O&��p⺂d�Q�L��V����c1��}R�e�M2����I�����Rjc$ﮈ�˻��Z��ߧ�q6�w4޽ሦ��Kp@�sLe�-�x��0/Y5����XDbfM��,��B�Lo���f�}c�v�Hs�|M���=������`x���˟g��M��/Al~�Y,[";%��e�{
 ��/;���"e��B�������Dd��<i�h�9S��8[��� zv�XdkUG���с��+"F������o��d���n5��-��t����,���S��G�)�ڗP�#���c⋋RqO3\W���� ��-��	 ~�Pܺ�v�=f���H�	������t�E8?��=��V�$=����՜R����G�D���6��Ig�7����a��Y�9д�+yT�Gi��Q���N�pJq��%D/��#^G�c�ݓ�d��˅����mt�q�Z�Kt��'��'(>�ӆ������+�O�f�k�~
�Y�����֟׫, ���Y�τГ#��}T ����I�o
�n��Buͦ_x�`D揿+��]�k�!��e��i@���;��b�= `l3�1s���A��ڏ��I�����I ��j�*F�R$.㐽�p�gRm O.	+���t�]��T�L��i�%g�q]�X��}��Gy>�D�zk�\it]x�H�O�S��d�$�pǊ�:a�)�}��E��nz5����# k(3���p����x�o�}��R�H��<�r����8����pn�2Л.v��H ��W�'DO���z$a�tߩ�(��ԯy�=����xDDɠ����

 /�Q���+�j�f�"�kHPQ��y���+��)-!w�k@0��;�fruh��ئ�DC|Ł褵#��W5�����j��C����Bbh��l�P_lTb*K��|h6 yx�Æ$�t ��9��h����O#,�)��	 I��K1Ҭ#~8RPH>G�#\�ݼ�͋'d*` R�U��O��*F�Wu��E|/���y����<
HI�q���r�c��Rݧ��CqV��U����ޭ�k:跗o36��g��<� *��\�=��Pv��
�k��"�C�
�Zv��ٟ�_#�����8���6�	��3�0�K�LS�s.��G�)6_;���A�`�SW�0��Wi9��f!����R�ݮ3���9*DͪTj�5~�J~���߰�֟��Xk\�@P��X�!�*5�AR���G׵Q���xqFoe��G�Q�Kf�O�>Хτ>Q���6<3�sz�{�'(CO�Z����Ҽ�QE�;�X�'�ל���^�����k{m�Һ��{�?��p�ί�R��r�z���w�&��!u_m�J��ȏZ�]��k���?A^V(�ׂ�����g���oЃα�?���Y+n�������&��k�j�z���I�7\��tT2�������&J�5�{�A<bD���H�%�-�w�וӼ�+��B�[|���"b�"�QV�Q���ě�8�eޔ�+E[v�	�3V�r�f ��Ӷ�ؽ[Q�`�j��aRM��&U"̗����n��0����������1��a��g7_ʕ���!+M���R%���� GЮ2���9����qU����7^��k���;@������đ�d�k��!+����`�W���g%�P���oB_��? �W�;�6�7��-Aۈ˿�� zK���}�]�VR/'g�I��&���ʪ�w� L��]4���/�ߕX���bc�@��F�A����~�����BQ��1}� J$p��pU��[h����a�� 	3�R.����&֡�pj���n}�r��͗���d~>�x�p��.�a/���X�%�zf����8�N���x�����e��M-�G��5-;�:�iObсٛW�xa��4�s8&�wQ��p�(����Ʈ��~��������G��Cԗ1��Ѝ�Y���"by����Z�H ��`�}*U9�n�|�OC�a����Hn��A���ٶ2����:�R�6�A~��D����kp�#|�1��g��Q���$��O9xb
!�E�7�^$�� ��%���e�H:*C�{�1����(���vu��EsdG���:5��U��s�sޕ�|�揼B��³�${s}=l�/]_���E���� B�^�<i�p��'���t6���9Fc�1U�ֳ�1#gF�:���<�z�����U]��'�-:|����. �
����n�R_IC�|��P�u��1s:���Z�������Z[��� �EP����nNy����`�0Ƥ�o0���=���{���� ����WW�R�UQ�d���9׳p^�d䲗�	ݷ�p�����&���Wͦ��ؤ�;d�.eo���@�W�n��\Q&Td{2;L ��F<���
��+�2����w�����5`�ѕX M:�/����$�	<ԇy�`�a�:��a�}�OR�%�b��2�5r���Z�6������8�mO7#�z���?���l1�ԩ�0}]�flS�_{$�A}�a%z)���O��ٻB��Z������k���:aw��p�bm&��ڽ�O�U*�J��8��N4]���M%��4���Cf�ez ��i ��Ӊ��=������.-�����JL�G�"e��B,����#+E�L���ބ�Q!���s���1@6U�Xb3�ݐ��
"5T�́~e��H�i%yf����'k���g}/!���+/G�
7H}x0w��@�)�M5��et�Ľ��;�ެ||��ƨB� ��-�kZ�!��s��[J����9��z�|���F��/��z89������e��,��P@��گ�ݍ��Q�0(�q SJt4����\B�F�,c���7�~&<��R�l�ISx<�P�+�[�X�Z/	\3���%�Fx����V�I��y�@���gvg=>�g>�7.��C��X.ǔB\B�QuB�Ċ��_ź k]ߐ��%��YLo�{0Myr֡��P85$�G�
�T��S:����q�a��јH�M3	2�#�K=¢��͔?A����J`�4��t���%�}�R�ix���e��)�?G� .Sw����B�N�$B��Kn3�< 8�h>�1��P�(��	T;���|�UG߸P-i@h]��Ȋݰ�Պ}i>��g�b�{�*[�n�� #���r�ܐ�j"��;�_�6�D����`=�7I�]�!��C̆��ƆOg4_һ�:\�_����;/��x�!���
���؁[k(j����a��)���Q4�cn׽�c��3�&Ǒ1�{�rN|8�,Q!\Bde�W5�'���`�i(�:,U�2�7+�1�Y���RgI��U��@l�+�-^B�T���W!�'��J��!��Yo��}I�Hm�Z��>�R>N+�}�͡���.*���1��B���v`A5��_a);s)�ʾ�=냹�|�QW��Ŗ>�b��(��(�q���&bNyUu����	Ua��2	�>�L|	)�?Th0Q�u�j�q��������z5������ `�v?��;�i97�[�,e���y��6b�^��U�!1�ח14��I���3��n���Cvn�J$d�"�s��њ�4��G
Z��q�Y��N`j��˿�=�5%K�S'�xU�KO@�bXu���9�@�ݨ2V�ꂨ��j�&�K�
Ko�W�O}7�h��f�2�7ټ��� J�/����b-�B7��0C��[�?6�"v*�]S8B��A��7g[v>ƕz�I�:7F���i�U/��.g��������u�� �}EOf����H��H�I���W�#��"ހ7�i�I[`!�_t�k�% ��}��9�W�d�C?��5��f�UCA���c�����W6դ�;d���ר�>:gDڃ�隹������x�+��rA�fX�]�>Pf�	-��~��"��?�݃C
��\K~����\�A���/��h3e4Y�@�(+r��x]I"�,v#D�Ҍ�j;�/l�D!�z���w�>��,`��e��%:くq'�t~	1Ob~X�\T���+g��q^m��x��0���%DY(Fۧ?��.P�R3P�l�O�i�ގ�Ҵ���$	��Zm��oAC�lL�e�H�x�n�D>�*�Lh�a���Y��B5�[�ߙY1q"��2�U~�e�:h��[�����)�'��F��]��=����%���;���̡<t"¶�c�:��1��/4T���!*xA�t�Q�_W���R�偞�
��O���
4=2�(��̣6�«��j>��V�`��j�u|�K9?���	
�ablhƀ9
�p�hOz���P�tq��#�<�g����J�
���x��>m����v�a�0ȏC��c1p:�e�r�K<ہ�7����D�}*�Mcn��>B	ߧ�"|�W�_���4�#���£u,c�9+���<��E`ʗ������*ט�bG�MQNH�Fu/l�O����Zґ�6��b���Z�(�����_|=�L�����&(�iF+:->��1=B¯V�D��J#�0��}�pXk��£�٢������P��6�7�M�OI�i h�ɑ/�A]��rU�fԄw$�~��<1w��h�>+"	}�;��`���j����J9��"*�i&�C.����:��ͳ���㣋�����O��T*hi�CՐ������T�a1�'��iߍGmƬ)�&���lE��*{>�n��(�b�0:*��7�'``���H�ܗ���O�Tζ�2���z�j���3�B��4��1v�ꡡȡ� x��[)�K����#kG��t�?�쓪��1�$B�2�����_'�������8��i������
�1�x��r�7G��;� ��$��d�J �凞���Ʊj�\*���1qG�SJ�t2qR{=���Cy�>h��V;�F�d��&?�
CO��{�^�ҡ=��kډ����,Qs��+��eg�׊EA���q�K��S?�TRz�xŨ��D!청�(G3�3B�3�<�|<��M����=bhfuM�W���T(o̓/,�G��k����Doihj��D3�#,�*o,�kٸ��7`�~p��3��)�A�{�B>$�����2����/�.�k!f��ʥ�4��I��g�m~��$6�#[S%��Y[��V"m%a�����׼]��z�#�V������s8�����f�@J��8��f_u=h�3t`�=S����پ\i�dd�!$�E�l��B����(�v�-�k�w�q�j�x�m�*�)�4�wN�Q�s�����U����6��^X�زā�%�����Bb8�9x�q��/��RYa|O��bLCu�W�T��#�,A�o��9�rr�x��jw>#�����X۱%�R��eS�+��7���k�����4�E����w��X�mO`���}�9�]��8brҀ��j�x�V��n�P�����'~F�y�+���U��0��(�+e�g��aL~�^��)l�+Ev���ԋ[y���^F�Ta�>�z��+P���H<�ue����HIx������K)[�J;d͸���#�y`�+�Sm�\�"�tA?*��p>F?!$�Z:6!�k����$Nq���R��ryq�����m|Ԟl84}�&�\h��ŗ�M�,�8(4+�G�<U���<�2x�v�!��
��۸��l�C[��-ԉ�I�)�԰ {�3�id�;R�>��0�AY[�G&��
�0粃��~�8b�%���{rխ�/}���9m��.�� N�$t>:��0F����1��:�����"�6׌��KԀ ���Q��h�8�����s������uq���eª����� ]�ftAt@��l#���1m���%h}`�|}G�;}�Lj�	J�>�C��X@ӛu���Ӭ �U��F�����$Bʾ�N�b�@�n�&N��>�&ee85hB�f]#-ċ��԰	���$M'��XW���;��8�Ϟ�}��*��MR��xU	0�@Wg�0�u��<q���B�(����h�&L�R�5K���'��Z5����A`��(]k���b�DE�ٔc�N�?��f���V
����~��D<�# �c�Ka�j� _�]�!}ɔ٤?�@�ے��T�?h{Ő�g�&��7�YX8_`�m [.f�;�5��Š�'u�A�(@i�eQ�-��O.�9�:k�'.2Z�΅�ha�%�z� �BX;��S��T rO�§�R\���&��܇����	la�u�U�y�a�X� ���n��f�>}pA���/1|;<7���^�h���ϑ��0,6^]7my8�M	�{���S���TqqP4?��т7���`��l��Էp��R�m��&{��6��}A:���WWn<�ӯkXOZ�[�.#V�X21v���w�#1<�~YA�%�u-l�Y�)8=n�<�8ÙB\��f�R4�u3B,y\�bVjx>.��E�\Qg��;� ]�ǨS]-����=|=˟g�[@M ��c�O� ou	��0mo:����y���n��=�,�AF8���XvZ�����$���ap�m
u����L�����x�JjbR{��y���\C3�����@�6��V�L6����ޛI�#��6�Za4]E��+#e�B��ﾂ�]���tK;*��g�U��r�2#v���Om�b���# �W~k�e=���9|}}.�T����oߟ��a��8����m;zf����߸�g�������|��N[�vA�aT���Hm[x��~Z�8��^�V]�vUX�E�L��G/A���8�96e8��E�!�a�QX�U�1���vu$Ԏ(��jpv#��]�H�a�>s����7�g�������������i:)[�gക��ʜ	��2(FPxjGmﺂ�%�<G�I^�/�!�A��{u�)B����F3��Vj*�9կ�ͽ�:�M��QdA.Aٍ0�
U�3�#�M儭�k������$��O�݈�r����p�ξJ5�ӹ��%�&4����M���1��)���|�蜠�?7WX��Wv+�P�۟�mIM�~%��W�t4��"d]�sU0�Z���UD�
���S)fn�e����j���:�-G�������%�6�&;*m�ċRrc:X>�X�U	�{OOц����^-�h(��t��(�`��H�J��d"�K�̔�ίc�B'���6B[�&{�B�Y5��$�p B���:�8�d'��=��Z��+�Ki��*����<��e����<wF�R���j����"���:W�Ey����=+�H�j�o��ړH�^�A}��F��p2�1#��>�bF�bI�쏦�H��+q��E�I�����_�=�F��z�y-{[EX9�5<R�2m��G��Ϯ�c����NRō�	���3�G��E�����a+��ŋ��a�������N��a������H���E�>a��z��w�����[#�װ�;R�=#a�%�t�]�x���vQ�i�̶	�/�d��C/3\u)Y��b����j*�C�aq�N��|�ow�_��j�~4���y�8� Jغ��ᘩ0F��ȸ?yBR�Ń���>5�O|F&��Ϋp��	p L���;��s4G�RV_§��CZ}5	��ﯰ��"oK��������!k}�<N;+�\M�g����u����4��ک�3�X��KT1�`�(��D[��<t��p�	|�B��T�V]$d�0�zN����Qv�M-ą��K��%����S��C����rIn��z���ք �,�p�|˰���e^?d�y��'*�kE2��!�$~���qBܱ�HfQ��Y���#4�ٯ�(�74��i\����E����j����3;�e��@Ј�8����n�`�.�"?ȟu�룯��,#�ϞH�nle2�m�u@#^�bg���+�.%����RHR��ƺ{�3!�v��.u��g%�Cp�+Z=���a�^��f3�G�b�_R�Λ��e<A)����W����Ku�N�
���g������9/���d����z�5f'�h�@�������z��&7��+�|�M,�]�X��`�X%� yv���aaE��F�4U+*LR-Q-R��}܍�ol�#�w��m�ō�C�
����V����+��@����߽G���V�R���D�����ْ�_������.ٲf��!�l����0�cO��)�5�\����c|�������8K�	�֚:{weݐB��������4)�69���	��fk~��,]�uj��/\	(�6LRV_2����Ƥ��G1��;�<��.[�:��h	�٪=�<�@+�G��pF*|��O��?��k��v羬Й/8e�����7��>bL~E���^��}��+��.�e�gp��w��k(yq���:F8]����REo����"���K�	�ya>Y�H�@*����ʻۭ`ߚ��_��R����+���we��4��wqs��e���a�4���e'Բ~p�B�?J�vh�e�1r��(Nh��f�_<t�&VQ���F���@<�Y=Eɦ��ūV����f�N7�H�
���}k5(�Y�-ж�ԯ~>�O\j�C0�qlنZzm
)y�g��+�(�e\u}h���\r<���a��7���%"�,>(:�/%h�u�f����vKAV��Ul��N�(���˲��8�u7�(G��o�B��I��R\3������n���m:)�y�����83��X�Pۥj�#�TS�!��ʃ7����J���5�?:�:#���7�&6�>D/�lZ^A����N�^ˇw���BaoŽoi|�n�<�{��
k���%ը�LpC٘�Zڬ �D���*��Q��a�l�ә+�������F�m��:��{r�/.b���cu{�P�y�����8�vg����:����2R�	��Ճy �w���G@�'�ᙐԪ2��[�t�@|з���TH!3:!��wE^�	��Y1�/N��g9'
d��9J�c����pB��Yӥ�	Qw���"C���g����V����ex�>�#�dX��a�������K�V;H�,�g�(�T}��3����L�!am�R���	����4A�.Uv�b���X�B
��m2[���ŹT5�� �ӗ�l�Ӕ�F_v2E�$k?������%n+0����	�(�����H:,���fZ�����,	�)��Ʉ% Ü&sN ��5�������p�:�����GpH�r(��=n+Cj��Ż�4��w��<���k�����򖇺�KS��`Z4PG�P�0��r�젶#i�"�s-(�D �t���f�w]�|��x>4�I�|C�F}��w�f �z�l
;+WC�4�rA�.-����l�ؑ�>���S�y,u�,ZE6U_(�lt���`���=�䓾q����d6ʡ,u��H?Q��N�y�da^��r�K��zw������Yϟ��̃|����9�����j�����?�SR�X#�-_���v�s���Q��hA�W�7EU�l9x�(�� ���E�h߮��>ɂ����'B�ޘ9>�U�1�KU!Kc ?A:�%�F����1[Gy��%�6i)iFvU�V��6tL��@:���*�dN&���k��%��r�a���n�/�`�퉴P��0��q��Q����K՟��;��V�3����T�nK�U�H��~�m�̨Cܹ���W�C�k07��!�Q�kVHw��"�g�RY�����y�����B�@{�R�$��=�������lM`�/K��̥�f�<��9��T�\ir����4�!ۺOO��3�_B<A��ڱr0����؛���M�{U"��{��_������ۧ�џ�;J¼m�~��%���4���Bt�&p�j͞I�}����B�4PD���,��궈��|�����aX���.�s㫛z���w�eW�g�d�(ٿ����,����>��>0ӅObJ�S`l0���px:d��nL�H�����+��d��%�+'~�,Nˁ~�jX�H[�P$j�j3d�����ī��������⧓�h2aWZ2�Dl�K��Q�����ڃ�O������}�#�R3���wuA��piS������PaU/��;���rB7L��+A�Ŧ���G��J@
��í~>@-=�'�^r�cb�	e�
�c;JK�r��L��F��"�]6���.-]�����gz^TvE1+�t;��9�E���l�EG���Š^*@��&-�0t�!5G���4#�h)	�nd����)�3&�J��EM���LV�M�+2�d�F"*��5䝜�V�T����Z�|�-p�ꗌ.��C�]t�̾-N�=^�����7qq��{��<���C�nT�B����jäN�<A�i v��;?t���+a��g�>�$�U.i�q2YAEeu���o�L1w�M�'�J{�hy=vr�$q���	u��>��!��5����CW��x7 �)L7����.�E�qa��
1� ��t���n�1��H��ĞB��i�y����V�XG3�W�]�f�(��~��KJX.!�r����\�.�	VZ�9��hЏ���0"�FE4���j�ë��
�W��{ޡ��@�|�1���!�J�
�_���(u��j_�&��I4�Zx�(X�B��3&���Q3�Gn4[p5 �*=M���o��J�:P�@�H�;ZO O ) 4:F�%T���w�_(.0�3�xOZ��Y��<�{7�Ӱ<	�kO�V��U�6��G���;y�//Ag�(�>$�>/F���֍�Xջ�$,�Z�ɾ�H�&Wwu۾]9�1�&��Ls�4gF��/����s�M��b��sO@���� E���ҲKl����ȫ-nr/ˍ*�ǥ���p eo��A�޾mkc�Y%�����s07�V�G�ҏd2/�>�Q"���cq�pVJ��}(��}#?;��>��̪Lr�n^F�&�+Ah�K��V�I��J�����N�⳼ ;�
:�ů����2�YC��)cx(:p9Ա���P,�����}3al��������2J;�ת㼛�h��͹=��3���J�7y�@�[���K���A���I�+�p?�|�4m2إ�\m��-]c_|�]b�T�ToL~�F4���]Lq��υ�|�64�3ٻ�������h�nL�0Et��G�x�=TV������[�����5�1�W���+���CE�������㿍��N)_���n�P�Qݡ�@��N�>�~����uj/�fWb��UPɊ��FO�\x�$�eͶ���md�Oi����/�PN�?����sxyK�u�Z�5�D�V􆂽�ψ�vr�[~	
��}F�\���p`���A�Mv*朊=`���	fԯO��I�ܞ@��Vդm�];�~��:��@.�F����@��ѾZ�����"�ǅ �vz�πq@ɩ��_��͎X@{�&��=��`x��n�f+�$���\b2d�s��6B=̋�I�z���{�@�@�6<p�๢�ٍtR�=��ÉU_>T�\�}75'��W���Q�9��}?�<I�&ˊ:׆_��WE��[,��d�8MM�GS�@��p߉#������+��X����})���� 
��X���)qǭv�%��O{�vb0�$(��\i�>1AM�kF�3�{�(G_�����}�����ӊ5Z���k3	K?�K����7���
���p�9'�ƴ�#�;�Ua�y���Q~yl}�}�dm����
�I�EO�q���PM޴V#�6���)�̙�Kq� �X���m ��.�Z$3���/\�>��P��i.�����W�e��ˍ%�a�˾.�O���P��Gn���d��a�I�&$�UUn�I}dO"=-8jWS�㒠7��?�7��VQ��"��]��-F�o��1���Xa`�F	r�),��sϫ}�ه��y���Cw�Z�������#c��H8k��6V�����1�Gu,��%� �؋Y�c�Y� k��ݥ�;p^#)�!�Fz�ܑ�k��(�w�t�PL��i��ӌ!kܩ<n�9�����s6�	�Z��.�T���T]��[��x��cMU��2��u�0�Yg�SW��s����ф��������%1��S-�E�:�e�ӏ����~�C��Hئ�ǩ�@��7z��-c�r��@��9K�����������A���E625�k �����[��Y����<v|푖v�7�x~ɥ�7� �*G�`1��<|�r��D���7��sCIb?�\t�C�$YZ�v�2�yL8+�<͠��Կ{�5;i�0tVUf޿��m��\f�t�:Yx7f_���Z�%�����&^Z�9@\�O�T&Î#^2Og��o1���u���;�����c4kF"s��Mhz�}�9���A�����g!������M}7��9Z��M���%�.F(t�S��FWs�b��Yj=s
�;�'���IZ�u��8{ɉ���O� `��E���{�k]��� "����mo�ї�f:$�	��"�R}�Y���v��,������?Y��nu�"#�yC[��X4����
����~���DT&�IJ����%��Ul<�h���LO��Q �>��(�\�g#�0�r�R����&�Q\P���0O�)H���)m�3S٢�N@s?c�Up��4p�i���I���,��c�F9}r�`�
��mUM #��|@)�s���hjZ<��( �)��6���"�z��?EO��膩K��bC1��kK�#g�E��SZQ�5{m��/�:dȌ6�Ҽ5�־;)1���d6K�;
܏�uZ8��a��9�8��M�̹�غ�=�
ȡGh�qG�ޑ���	�7P�!�ܱWƙВû_��eE�����(�D���i>�r�ػ�����3�ܩ�L	����f�|��8�]$ȁ̋��o��q�H���~*�ܣ�m<Lp���ֶ<^����nZ����6;X��n5��dp��aFZ�ӦF=&_d��-��d��1s��;�xF�*tA�f8q"h�ҳJ�驒�݈���#D��*�D�(~�g�� ���9m�!��@���N�=/d��48��B��wP��s����M,�w�<��#�kjV�Ƹ�md�����<�����P4͡QX~���M����:L(���<�nS�����P��c0 �qϞ搌\ꑟ��Y�a�^?5�3��jߣ���i8�u$mJ�����3���/g�;tۜ��H���G�t�h9� >�,���-�:��j����[��bm���iVo�L�V6���3tόc?�j���,ۚ�~.���؝�� ���0��c?Y����:x�!5�\,�o�t#a
,��Փ��s�JFH=���I�%*[/���M������B�zNz
~ճ��<���+F�_��n��jBM^^q�S!��<��;O!+k����s3��M�ih�|9A\~Y*��Lr\�R���L�0�`��@}2�j����@kߍ�j{���O�;X6]�h2?u����a!_�C�>a�;cM���}.�[���O�p΍O<��7�I]���~=cv4˩g���H�X�����`v,���!��[��a�
�H�{�I�ErF��i��NU�7[���E���6,�R�÷?�~
Y����?������=� ��eA�9�xZ"��:��p����I<��g�y �(��G~�z@1<��ۖ4�ck�J�ڗ6��6�k�Ǯ�x)�k>���+R"�Y��Cř_�Y�P36|��[醞Y,鵮������s�󸗁�V��!
�w��|(]�HK��RY�.���so��_(R�[4��WI�u�з��n��M�`��~1��
y���r	� b�u��65�|*��=�o$&��7��(�0�]�y��h��E�f��:�K>�Y�N��2S��V�'=�
�CogQ�I�M��f�,��N�A.Ճ��j$r4��yg;�]���V��X�똴U���&�'8�I&:��=�YS�Dݰ��#�K�R@j�W� Zm:�Av��XQ>�2�u#�h���b7�E������J��-Mew'-��}�;�� ��r?*�k~���w��Y�68�8��R[��%��b�� �b�S�
�սG=K�Ը���y&��v��ќC/>��N�#ɔ���:��uv�*�0�:�p�&d�����T⊨���h�����<�9V(��xH�F�MI7��B��;�����M%sm�� {u�O
�g��H�I?w�U(� f����z�_��M&�����'��-������1W)�XǼr�g�+j7�CJo���W�~�������%��>�?έH.�wk_:{M{~|��ȳ�iL�*�ؼMRi���l� #��Ƴ�@F�c������jI0��f$��w&�Y_�䫒7 ]f����XQ���Dms�c�Q����a�A�vڟ�����M1r��
����IP��J��$4e�� �%�1���uF�&�
�C:me��Р�`�;�
���"��2[�P���r�,m:7�Y����N�`�w�O5�Bo�)�7❆CW���NW��tc���p���m�L���>���j /o,�T���M��.���Q`��+  ���H���Қo�dڵ�gf.ȸ�y�/�m�Ka�:䑛��J�x $˰`��c)�38�����<}oN�0^�)EX������I��k.t�#��릤��N���w ;���?�����;錸|�(m�꽟��T]�ub�G�[�S}b��Et�! �F;�/Ds5�1{���&5p�uj���������*62�;���^?w�|��^��^/Y
ki;��ͧZɁߨrW�4
u����7�J����"cș�\q�n� ��k�Qz%�i�KD�4;n?��C�K.e���/��%����,b}��'<\�s���c�P��H"���߇�����frz��Q�lqm.&�D�hQ�>j��r��E��($[�aY��J��z��.oD�Kϻ���%��`����g�����c��Z;K�)0�l~Q���d�]��\𡹈8ǰ� �M��E��U����V��jU���4��`K.mJ�ocst�b��T[7}/�O��8z���	���2�������:�տ~����_�05ҨTt���-V���i~�b �s/]_�s��S�������j#��	�����_XLF�%��a*7z���m{�MG;�=*�*�2`V� �P�ہ.5��%H�g�F>@�	���rr I�1�P��]l\�O���Fp�X�<>�,��d����qy���[p[���y����@ ,�0�(�h�XK�����N)��=���7%4�A�r�%��$2!cqJ��=#��GVJ+L���fTi��zhN��/2?�*?oı�*ń求!+��#�u�)��"~�����+�8�g�FV�T�����i)O�*�ob�'�X��~[GL)�c��XG�瘽v����kkȍ��b5��4'�*�F�
�ֵ�L����IE��*�ÚH�u�x�>� �yS}`2j�D�C�$�U��;�z
���M@�PZ-�1;qf^f�4ef9�~�l$�}�����4��q�A;T!�1U�8��:+|��x,� +�����u�i����)v��Te#�<}���������ѸY_v����~��Bo/�:��
�1d5#���l V緛_��"]%Fz�P��[�Uퟠ� ��R,���`������DR���R^Z��sYh���um��;�S1�vuKZ%��uC-R�P�Z��KC�a��7|�������J�&����s��y�pp�{j�h����. �r2���v�9n�tE�n�,��N���읦��,�\*��x��U��B�J���p�˝�zf5}���H5w37K�佁�5�R�c(���;����E+8��X�&�5�F�d��p�1]@5�nϟ�ro�~���XM��ԩLbw[��U?5�f����	;FAC��tͼ��K��%��6��d/]n��nj��A60F��J6'h%����<9=K!)�ƛ�!i#��2���<����s5��F�]u�J"3�䑶�=����F4}����zU�� �������)�Z�iih4)�i� 9�>�h�:��-w��4�,�\(�s9A�F!����Y5��؃��8��!�2��>ƙ�F��U(J"{*�_(���,���豈M+��&�)7�-T�zxbj���9MCL�3io�w�j��
�Fwǝ���?I�1�M��!\?pK	���������|�W�&j�^�.��T	R-u���n&�Oig�KpN<x��ҏ���W�F�ݪ.�`��B�w9O�2^w�Sf&R\���gJe��J7Q�����s�
'�dR���-�\�s�28�g,�˺�W��T�.^�@7��T{6@ ������}u�%Dpt��D�K�c˚p�����亽������>̎����=Tqa�)�6'�~�Ӕ�+y�0=�̐�L�[��!w��ǽ}�&�������]%sJ[.j6)|!���1=�g��!^�j���>!�Ǿ�X֟�N���Uܽ�O�jl{��N`$�;R O*\��M�R\�C���EP}R��)|;z�5��,�*,�g�0�1�@\tD��v�2���iA�N�H��:	���
'O���P����k���
�
��;]���u̩!��鰭̺��ю�-�W�QE�z�Bt�	~��(�О�$\!�vQ=���BP�P���n]r��Nԯ�E�ݒCB�e?)��vTl����͈��~��C��dp���P��Z��f4C�=�s���[��7����^��q`��Y1M�p"aיU�o�ED�hS��J�	ӱ{���e�9$�.@����V<Cx��_�q�]��q�\,�����0�<��$g0�����S�\(X.w����� =άqJ�f�H3�F:||1����R̷pQ%�AFQ��E��'�'qh�$!+$IU��n;�����o�a!�o�"`O�Q�
˖�3IM+xW�TrE���r�+��՞���e��1C6�NqZ� 체���U�L)�>W8;iw�|��^z����DR�]���2\\�ABY�Ԛ3�c���!�i3P�5x��᫖��`��H���.TG���7�D�"�״IwL/�Mm�������Xo�Ȭ\�1,�����v ��,Wn;��T���u�5��US�q����Q��nD�YB�����y����U}e��S���+�b쯭in�-�g��RbAn=p���wU
�J��nˁ��gO툁>Гi�q˝q(/�#2����N�}�vHbAüzM`&�,�����n؟=�$n�Uլ�	�w]�F.�J���ի�.�R�,�*;�K*��d0��;8S}2�@!{���^/.�@�u5��}���H�s������}Ҡq�������[��_Ĺ䂟��x���TaH�d���t	�5J�Y��ݰ�Q
�mr�o,�G2� d�+����s��T��K�1�	R3҅���G�_{�@z�h��	ޒ�Gtj�D�0�\&ۮ3&�IM����d�IT�(�c����쩜9#e��Ƴ��ո�z\���.<�[�`Vt�-|���T+u��9��a��:�E������;4z~�p{0A�z��~"����Q���q�ng�l��\U�+�0g��$���t1DP��6`T���{Z���t#���0D\%��� �%�;((�UC#�J�M�myT�����Z��ac��������d����0�2l��%*1����3�˾w��ծv3̄��|9K�yӝ��ո�*swi�޻xe��!b�������6~��=�#�r�4��Ƅ�ɟ��z/�a(@wGt0{,ykT�Y,�5�!�%�B`�u7=^���8/:;�jǇ9�=gjT��ཆ==ͼ���,O/��sy�_-����HP�������u���-f�lD��z�Q<{B�	��2,�%��3�-}�W���!+��R�,WlU� .��&hx�=���a���|�D=~4��Jb`酼ϗ�,�ݼB`��)�7�zCO�v��3=X���b)6Ki*����+б2����M�6�S���ξ˱�]���2�A�Y}����z�\��ZP%�nvD?��2;e���B�j;�Z���Z���  {/���`�IYy�/w��U������)^7z$�I�{����u�!a��I�|h�ˢ|�:�b,��^��M��9#Dk��E�g��J��@�]|����/��$���-`����%%�9t�}�0�����@�
�$'h��
�S6��Cc��������#�N/�J�/F�k�FՑ��X��h�R�h��HR�*;���)��x$��
�}�h��c�����"�i�����ۭY��\�/G��Z̈&f�s��l�T�O�4�z�Q�9;�A��?V��hJ���9��?�KI�,��Vn�r=6���b�]5�|?�j�W
�Pet�6i�o�e-��:fȇo�*�_ ����>�Pǭ���J�C�Ə�k(�r Mt�S��U�mMˑ���HP6۵M�G9Uģ;MA�lx%C�to.Q1A&T���Bk�l���4�˭B�s�)ա�n�w�y�It��#n���|�w�[|#V`S�����o�m�<�A Y0�/ޢ'����>(�W�����ȁzi��)�ܢ3�)n7�1���2�w��Ջ�i2=��)�Q���)�(0bZ&��\��NѶ�I?����~F��Y�:��@�W��yMZ��!�sƎ�cp.�$�?�ǥ]2�9ԗg91�X��;����ַφ��I�)��8�#S����\Z)X�?�vb�_g��|�iG>�ne�[�����˰×莩u�j���z�7�>e�\/���`uK�����lZJ��u���H�a	(���ǰ4ʕ?W�Aa���qPx�{�6�?�m�r�+p26��ݺ�%��uD�٣��Wo�C"D�>Ts�����O�P����9��������AC�P�C2]2���؉-��4�|�N��Ha�8\�V�ӵ|�y���<��pr��7~�H���P�y��;,.$V+Ak�:!
q ��@Y�>�t_�R����l�ۼ
V��5ҩ���z�E������ɴ��U��/�1�BR$��g��LP�wY���'�\k�'�V�=�uMHo�B�y��/�SL?��2t՜@'U=�Z0W�w�Ʌ�M�c�Q�FΨ?N����wu$�kW�]m�a�4B4uᡴp��~\�3���K�D�S~�3(L�yVs'� =�`�S��}9dF,m�"��t֎�t����F��s��Ɉ���/v�S#6]����&{���1�񨌃��gZ���{&�~P�8�+��
럟�e$�gG����O���s�6���Gz7Ь��P��xb�O�(�N��jsJӰ4�J�tZ���y3ng?]�Ic`O$GC�%��F�5�΅��%Lb5���V$�]X���[��c��kuK��@��ZV�~ɿ �����9���u�:��))��da#9�M�+�����qŻ��UJ2�d��t)����̺����P_�O��L�:wߢFR,>��k2�ۯ^c��TpT/�Wv# d���j��U�ȏ!:,� %KӍ��0(Tb���2� .��˅swD@��̌*�����'��+)�9���w�����e�O	E]�k���~X⁦q��~&�����p:
�a���E%��e���3塲k'2|ȉ+���f�bˢ�B�����m%��x���� �%34>���%c�Z���*#kZi�I�A,��$�2}:��?��[f e:��`ҵ���Oϲ��26j�Y?����+�u��mt�
'�@��P�B��$�4qI��b�̓-(+*x�Ӎ���G��G���A�ݖE�OaU���h�O��qVN��Y��R��6W+m�iZk~l=�x�Htm�㼿w{��{�nni2aWsg��"V�j�����`�����tB�L��s���Vk��k�ω�ON��04���O+k���}�~_�������L����EB�.�&�cʱ�����rn��Gʷ��hU#�����+�]h6��,0���"N�W�����#'��V�{*�PQC�~ӷ���y�ؤ��z�6����7�%��C~�z�n��"������!�<|������%UG&�"(�tu�5�6�p&NR1��F�uJ ��Yh���b�&�2��\���ˮ���Tk�я���Iw,�0q\L�G	� �jԀxC�"-�~s�QU>=�=�y�d��wԈ���m�NW榤$�=�����@��
o(��%൧�b�d$_������ ��[�d�C�7u(�X��K��ń�_X����O}ï��!C|�\����ȝ����[.��y�,!�v���/ESW�X%:�e(����jy,�D�o�ʹ�{=�O�:���Xs������*�!Un2jk�V�#�<��p?['���v[M���3����r~���#�я����-�F�y���,M� 7(��Β���g�۰hǽo�'���d��#�.�h�S�F�I�����9r���xK��m�d�be<v��D [���S�;��o���ԇkn����sfI���� ;1c���3�.1t�2V�ߛ�p����PA�q���3&X��ga�g�SEO-��M����9ש�g�3��������X�PboPIŀp��K��g?��ڤ��u<Oߛ��~x�Y�����`�ګXCs�m*q
N��;ī%񊇆�)�rF���꤉�F=��RP8���O_006:dS�J��W`�������
��B��9aX�X(�Cn���$�� [I�
�\��I��_�Ӽ�X�H�Hú��U�C�e��6��\&�S����[�ޔ=f�I���l(^� 3�a\��?	�mF��i��"D�������]��!xt������1��Uκ��	Ж���@tj��(��
;@x�Va?m/%¥S~���?o�sP�y&�c�{h�L�30HM#�b��+U�Խ�|9��ß�~ ����j	4nؐ�4�^7p�֖����_얎Iu��T��?�$>!):&�<WL'�h�I�o;���|��if {ԋ���;�6�uXS.�A<���,�����-�6�L}��sz��M4� ������wP>ڸB0��ء�j��$-�ǡ����Т6�J\ģg�Y{,�O~S-E��"k^�������x�B�ċ�&��S����L�,ik���,��Q�)J����]귚Eg.5�k�l$i�9��qm\|L���AД��V��**��}�^8+W��;�F?�.̲�0�ZA���L4����y�#O�|ڙx0�<���\��zfN��3��<.�a���Z�k�w��X��A���|�8���g����q�ѣ�����ޑ�<�����[&�	̪�wə��7�_Ϡ���W��[���K�V�������[B��ט����l��$�l��<�`�Ԙ@փ#d<���듁oX� 0趫����9L :�x��m'���d_eh��ʣ�����=��g/���1r�u�&xZ�s&�%��Mr@�t�>l	���G��dY�?�
Mg��WO�%N:�|xWꏶ�'ۥnzt;}�=�!�5ua�ϣ���6ā�4��	ޛD�&�>C�ulx��9_F�R&g^o�q�ims��z���Ǜ�(��H��=��-d�̰R#SI��C�ռ0+E୐����Ɵ��c��ը�):�0	Q�/w��ŊdC+�5"��L�l *@�l���Vqr��Y���x`�`�)��VT�T�j�7��> �$K0LK�R�㋮N�op��o�n33^��������"�,~���q87�⯇����s�,��XOJȗ"$0bu�g�%��C�0y)��P��m�Vk��>Wq�r3��3%Jj����y���ߠfQ�'~@��'�9���w����e3y4�i��gϓ;�@I��6D��JqH����s��}��&�▐�wd�zd!+�Ę�8�T�\�
�~�D*���t�I>[��
j�*S����N�s#z�Z�)�Qt��G���e�pi����%j�$�q=�30�s}��E�SG������Z�B�e���L=���������<}z��"2ð��黜U�Omw��M���6�aH�w���uW�
c=Y|��0��d���Aj��� g:��/��<V֡ �T^K�t<�Sa�ף�b�s|s�R�J2lr�״/˻�r5����4��z�楋����w�.��|��������j���$ؾ�u�1��צ���#m�6�o�In�h`pBv�=,�zy1h=�˵uҚklL�)�w'"�l/��'�!�I#�/!�i��*�X/u�l�W�^���B	6�=aq�)�i۴B�`�|ӲQIb��K�$(O�?F݁�u>2���pu洞�}��v�~)�>E�y�,�Jo���MP2���}��WSܪ� J�N�O	�fi��n�R�Ż)���"�31F�x��R�0X�c�d���n�-�z)(8M>ޡ���i"m���K !�6��؍"�Dq�R��f��_7��\����5�z�$�"�{'��_�G�VX��0-rmR���%J�k���f{�6�ܪCs�F�@e]�,��Y|g��~�f����G��0!��LL|�M7�/�2��<�j�X��ʋ*��O�i�y^�}��ț���"��	A� ��99�'�'&�[����X��_e	�C	�wڱ�>�F"��6�07��lWR̒��-J�{��7��h�>ȫMs7�<T=��}R̰�L��WP0�S ->�� ��ec��DX魘�Z�{+�Z��K��B�jY	�Vi2�J��-��ÓU�@��#u������|�4�/.�\F���ݞNR<*�R8t-GM�hf,n�z�J����s�/jĂ4F+�|7�kԆΰ��]�tC;��X.�=tJ�_̧�
kйm���:�SY�5c��� 㸲3�S��Vyя��X8����hI��af��&��خ�;��9�Ϗ�`��X<薱��L�&ێ�*�Vϕ�~�G��v�>����Xz0���[T+��&�L�V��U�G�ǁ}Y�x��o#�;0��5�5���L����h�;�R��3l�?�������IR����3�Z��Px�b��!��}��FcL_	6�{�^V>���\�(����b�Gȭ&�gz'�w�P�UN��2���x�=� ܈z��'�}0~�^���s�)��F4���[	��I���J�b���|����"�Cߗ���i֕x��e;I?����;1�v��@G����(z�$7S��He�-�$NyQ���E����'{oCק;�]<U�x�h�u�/qU����fܿc}mp�U�Ʊ����+�WŮ�:M�?��س�.�.d��m�������މ>BLN#Ȟ��9�P�����u0��5�C˸��R��0��)�}G�ʧ������~z�;tp#�W��6��W�l�v֔S{�"��'���*A"Ic/%�{�T���%�,�]N���S��TH�|�sc�\J|[l^�*tu��^�'��3��}�F�aP�&��������)ڷ��|yǂsP7�����˸q�p,����c��v�1�|�t�s�
~�s�h���������,BZו,of8�~�M��*Jp��!���� q��pf�3����ܫi�u-�����b���aU������~:ʻ��/�0�Q�H�4�-�/�
���r;��ޙ	��i�/f!��B�����T���#3(�!�cukB���;M|d�h Mxic��u
PH�ģ��vp<�l�%�B)V�T�%��(���U�p����ij]��;� I���qV xX�~B�C�F�|���U�x���Q&궋�ײo�R���<A[ Ws �(c+�:"�V��ӛ���$��d/�|-=�dS��z%F����gd�b�!��!�Ɨ�S��k	��k��!��8BV�u(��*4���g��k⬗ᢇ��b��}�fTx����?㟼Yh��p��11�܌�ܭ<��������smp?�~�|�=�D��N@>��'�RW` &�.���V$�i�����.��w����B���b;UOe �6��N}��ԏ�m1�0X�Ր>��jm��~�Ƞ��p)�9�Po�VVy�K�L/:����[a@<��ԑ�i�(hx&����N��wZTUoX||�*������s_�kٛ�eC+�=��!Z���o� /���2�=�3]i��};)�9 @������kW�x7,w����z�r�/����Z��n����E[-�1��[��D(�TKNVo�v�z��7�� �5��R/�h�.�x��<����B��Ρ!��ɓ��%���K5�C�Dy8��_,-��l.FT�ɝ	u�Y��$tN���C��Xmzf�"J�j���7X�I�F��z�ڬ����ʡ���f�^7���	SY�='�hg��+40YԱ`X2$;���[�߱C4��4�������Y����SC��HhN��a������*6;E�����U�ZZX~ZمQp���Q���W�w֫�ff���e���	���Z0��C�k�u� 4���o|P�E��V�1H�
����:H��|p��x��($��i�CB.��AĿп#D��yL���BI����e`������Qvަ��:'xG^{�y��:/-��v��1�*];��Od�d���5�h��oF�t��� ���'�Yب�N=�#�:O�jVۿ*�쫘Yw�#y���A6z%�ӯ���4Ƴb�a���F�`<NNw[�� !�!�{Mw���C��ޮ�e* �1�ҩ�ˎ3l�0Pzcc������\�\�͒Ɍ�h7������+GJ����n"�X�*�2v���"	��o¥��6��g��6��|u�"O�uF}�̎�2t�-SD�N�ý�]ӷ�3�4��Ɉ�x�z!�"wO$&�Qϰ�8����p�R1S�{�yf��1���B��֕�c[��;�1+�<,�L'�́M�~��j�3��9ܭ#H
9��ޱ�.?k:^��o��b~�/ �vf�\_L�],��ʦ�׹Yx)nT�dLԈ��Θ�h̺�@C�F[��������?A�x8;O�窳�l�H3b��'?7�)ӃϾ<�A��j@��Mfd��^�k���7��w�K�K�(�8���/t������<���w~N�SY���F&�Z�"�ww�z��%(jLX{T׺�|�M���dۏ �:Hq�3l@O?<K�Z��t�r���_j��t���@H�0J�k���u��̶]0�VTNz����M����5��p�ǲ����r������G^9xڪ_�-a�j~�?�ŧU=fx(n=88%R�)�L�#�G�)��z���p��:��*_�nz�P�e��ư x{ix�t�>�@��6dF`4u��	Y��+(����OgA��J�����þ� �%�Rmlr �C$��7��V<�[Ȕ�,�"�0�#��j��k
/���P'�6g���E�]���l��<�(�5������ȒƐ|�̠��v�����P�:�X��A��/l4_����M�Fp�d�kH��I�|7E��h����r�Isq'o����t��'����t�wٸ��n;W�hy�E{��}��M+G���v9��{E3N��<�1��3P�0�d�$�H�������`�@�T���qB�R�ġ��J�y�0}s��M�ܖ�:A�fI{u�J����IFf�$�h��S}@�ģcA�qvܷ=�!1�v��]���=��,)6��t����h�4�(ֱ�H��V&X����EP'�TM��AB�w���)�+�����y�Bk��Xhf�U���euA�m�*��c-A����mܟ�p^��Ayl�P^#;���DOV�2g� }����ЕOGE�� ����	T�DK��,��F`��)�~Յ1�.��6�����,h���ތlV�
�0�;�6�:
�[�A92�ݢx�5�o�a%@q�~�鸥!L6A�0�#�6�(��iS��3�]6�r���&�����ȍfv9�9�(��F�@�@,���Z�I���М�V�5��2 ]��x��2�Ϊb>��&}�	,󉎿�8��_�@>D͙�=,�J%n�Y�6�E�Jo&NHP�H��hB�h9P9��TYs�"�,
��F���Wrp9P%���9'�Z�t�WMʶrF/�m�f��2���@��j+�gⓙ}�g�'�%-"��$s$�1�c3�_Q���.�MF��[�tV��lkʟ�j"#kl:XR'�&����}���	l�I<�^��o�-l�Gz���)vIQ�+�Š
���	C�;�2_��97�{f��zߐ�1*]!ј��N��`:�LZO^�o2R3sM��F�� �i$b�C�qf�t₃К����hNp4G��ե���t����1�|b�y�HI�<���)M�IßY=N')/��l��Ζ��4���T�X���vO�.MF�Q$�Ê�)�]h��&	�h�U6�/cs��,��K;�)�ij���,l�4j�X#(�A��d�H�Jn���OЖ�[��+R��o�I����B�vi�[�@�"̒����x+��`����]q��2J�'i�:���Ox?��5 ��2�)�1T,&����dUd���>�ǺO�{��_+�$zՋ���x�_{�
0);���#t�N�x��p�j�'>�l��{���A�9y� !���8�Z�;��,�P�%6G��Mw��]���29x�}�<��σv�ێ2�0C0�B���c���=rk��Ͻ5�	�`���{x�p`ם9d#����	{Ra�>�.�uF5��b���3���xQ:OQ8���=h?�<�zR��e���Quw3(��	�X=�*��ɴ:�	��MD(��c��+��:�1D���T�!�м�W3?�BH�i�I�^�+�FC���1��>���h��ϊuB�R� ��*�֝��1��i���wv�愾��D��K���r�6�(6z�2u�R1b:� ���&�[�0��\��
C��m��S*;d����HN�S8��nl��M�_��\^v2n.꼽H��%��Zn�e�hI��F+E�;��<�����J�>a�����������T�GEJ��+��M�� ����g5S��a����Q��Q�f~�;~�1�[½���[n����2>sQ[�?�r���8�9|�v}����C	�܄���W\��N�������e�+T	�����Y�}%#�|s�w̧Tsn	9"�Ef��L^�<(�JC^������O�;�Ru��ؤ!�q)?_s�$<���3�-M.{A�C�i��\Ć�~��41�e	=��Y�q��0���V�sO����x�k��'�k�Y���FFf=s����F���:P��P!���!D��Μ��zx�#��Jm�)��킔zr{*��O�j/k�w �OZ]�f��R����,��������4��苞�"�9ك���ŷ��Ìz��&�1f%�LR�PBS3�ZN�-jR��-��tmt����{T?olxLJq:��'6�{^�)4]L��($�~�����c�v�AL�=K h�'�A+���+a+[ �ϯ���a5@�ɍ�"�!�,��a�E)#��KCFi�}x{���葆�����%"^�*dz��^߳���fH��T#z�Vh#�K՗״�wD��yd�� ���̻p�Zee(��^Q�(2c��㏸����j��e���*�*��!�>�W�y�fO=9�W��\~(�.� �!�RR[��>���j�j�%:�r�AW�=�l�q`[*�,Ag����M�b� }�V�[�/8�{�ܡ�L�tln왩�8v�vBy����+u#dK]�?�DnX��K'�o��蠮sL����^k��&Rsˉq"�� ����#S�xf:Ϗ��C��5	ҭ3eߣ ��z��m��p f����Վ�
r���m��v�\TP,؆ z"���^^�sȉ�X}R
��2#h�L*�}
����Yv��MCW�1 �,cK{M.E�W-p]�"���g�(��Kj��rėU(����S����o4gt+�=@ș�n���N�d��5�;�Q���uM�]	��$�������V����:<j�w�R[ѐ�b�u���>� �u���ٷH������{�G:��y��-L� �����Ǌf%i1[��'��ZԾ,�v!S��~]9ar��#�;��k=xБ�����a��y��C�TW!�`�f�pK�դ���p��0�o'���ر�*j�$6@����7wJ�'6�������(=�)����W��V�A�Q�"ŉ�QY� WU��Hj9'
wd�z.-BŹ��I����!��t��֭�����j�H��O.a��kB��DҿןHjm��d.)���.��g�.� ���Ŕ�΃��d�l;���%N}v0;Jzh��vĹ�K1�*���F3L�y����H.��q�X�s= \>�*ّ����I���=h�w�|��c����bŹ��@����[��iy�!��+�tnA����UP�a*�0B�hO�j��0��}V?*�~Ѩ��}��J'�}>݅�*Q�ԃ'v)� n�,MH|��xt��-Щ>��/��޵�ڑȟ�B5Iy7��g[
�H���p�v2�4����T�DF�E�y6���84��e��A�Q	x\x���=b��2�U��E���~�-�[��B�	,~��a��v:��m���"���3�'J[�y)��ո�H
�"A�*�0 ��V�����}�F}��&���Vu�T��áC���d��3���W_ح�]�NB�J��Ju	��%hb�0�$`?�jT�%}�@�U�23��&�a.TE��n6��?�U�軫+�CO��H���"d�H�j(/l��������.R�~X�R�f��!k��9���K��n������mW��n��%]��M�YK�H��gh��>�hߚ	'{�݋��෮�ndt�dDĐ�5����Z�4�ҋ��>��Hagr�ޝ����E@�^�`���dd��ү4�ơjq�����N������ږ��?���k׶>.֦���"�Z:g�r�j'�
�OI�K�^�,���[|��)�����&�!�Oe⬃����_�x�ƭR �k9�. ��d?�.nD��{!;/���S�� ��-T�3����eA�q֕n"M���� !ߛ���_3y�C!�*,KR�Ý��Ke�)w)f�e���#gj@b"�
b�_���� �\�	I��NEX����r���06�)��Z� �:,0UI�濫��}�ma���-{�
�����v��2H����ᢸ����<�.�+��u�XO/�1��s���fY���7�dW..�ȴ���-����)+q��)5y��=��&(`n�\]�����@�������V�������E��D"NG6q�3����`�3��IM*v��Tg�����!6��`mp�c�G�T(��m�	z-�IL�6�֕�cS���OkѮ�rD�C�D�!���=���ԨO$$���<�k>��ܺ��eK�|a�ěm��B���(~%X���Ф�Ax�O����l�`��.UU�JX�:kI��n�S����Ǫ%]~� '�ԗc}�b(���ԯl~���_d��a"ͤ�t4*������zv@M�ؾ�����E� �Q���&�(\�35�7B`�eP����t���t�z�� �ׂ��Yn@00}����oȥ�3[󶆄{�?�/�	/���8gK���������2���lc��a�6g89�����b>��Ó~���4V�<+M�� (��-zC ��t3m=�(��4�B���l�$2�z/9_ܗ�bmD�p�g:6�ը ��f��h"Ѝ�}V�{8GWР��5�R�u�����㥁�
1b�k [�ǹ��b$�	��*�M���j��:���Y�so��}"�h�}.����G �	���s��ϧ��e!}�g�d42B�e�9y/f4��̎�oeQ'�x�
=�Q�?4�m/���D��A�)���ݔ�=5GZ2��Qi�մ�6�s�^oy�ھ7�!H��Nn����:[��¸�`�"�Z�Z
9�>��ѡ���$�N�*�c�]O#]�F:&�q��Sa�n����"8����,b�`g���K:�� �Q���<��X����p��?x��&e�L�ZRB�1̬*�&�!*#� r����-i��xU�f�	l���D�Ogn�n��W�RTH�,��A܆�noL5���
t�_[��)��UB�n�f^$�fFDj��dE|!u����n��Ĭ2j�E����E}��4)�?�s9�2����Y����Z��c�K���t�(�Y �%�$��<�7}P�EP%q :��˯��A�ޚ��?v�Is/-A~�Va�D���g���b�����M�X��������ǵȠ}Ʌ1?kb8=C_��oQ|����m�@�X	�������w-Mt��K�M��l)�����r���#2m)h-PUoލ2ڄ��Eӫ�B�Y��J�&�]��v�Ф�m��Yk)�^���8�kW��o�� �>�m���[�}w�θ��p�:�P�����?��9u�	�R��+�n��3���u�<z�_C�1�tܣ`��]ӂ.�_�'\*n>@�R��>t���B!}V�$k�>"�F��r�G��Z����BU���PS;����p�*ӦU�"Zt��f��A��/5��%����|��H������E��K\Y�?������_���cF#����o
d�b�����Ds�wh��>l1?�A�iJ�Z���kEc���'^��6D\vb�9����V�߿x�ܬX��h<ٔz�[��B`	�2�h�[|X�8�X.ݮ�X�qɏ�)o��ӟ^U�w�<���7ZX����Щ��׿az����k�X��R�����v<K�T�f[���,R��d$3)��˓k��E);�[��#��$8�o����%[_�F+#�������x/�Ow���1�length; j++) {
							content.push(delHtmlTag(textSubtitle[j]));
						}
					}
					// 字幕对象
					var subtitle = {
						sn: sn,
						startTime: startTime,
						endTime: endTime,
						content: content
					};
					subtitles.push(subtitle);
				}
			}
			return subtitles;
		},
		/*
			共用函数
			计时器,该函数模拟as3中的timer原理
			time:计时时间,单位:毫秒
			fun:接受函数
			number:运行次数,不设置则无限运行
		*/
		timer: function(time, fun, number) {
			var thisTemp = this;
			this.time = 10; //运行间隔
			this.fun = null; //监听函数
			this.timeObj = null; //setInterval对象
			this.number = 0; //已运行次数
			this.numberTotal = null; //总至需要次数
			this.runing = false; //当前状态
			this.startFun = function() {
				thisTemp.number++;
				thisTemp.fun();
				if (thisTemp.numberTotal != null && thisTemp.number >= thisTemp.numberTotal) {
					thisTemp.stop();
				}
			};
			this.start = function() {
				if (!thisTemp.runing) {
					thisTemp.runing = true;
					thisTemp.timeObj = window.setInterval(thisTemp.startFun, time);
				}
			};
			this.stop = function() {
				if (thisTemp.runing) {
					thisTemp.runing = false;
					window.clearInterval(thisTemp.timeObj);
					thisTemp.timeObj = null;
				}
			};
			if (time) {
				this.time = time;
			}
			if (fun) {
				this.fun = fun;
			}
			if (number) {
				this.numberTotal = number;
			}
			this.start();
		},
		/*
			共用函数
			将时分秒转换成秒
		*/
		toSeconds: function(t) {
			var s = 0.0;
			if (t) {
				var p = t.split(':');
				for (i = 0; i < p.length; i++) {
					s = s * 60 + parseFloat(p[i].replace(',', '.'));
				}
			}
			return s;
		},
		/*将字符变成数字形式的数组*/
		arrayInt: function(str) {
			var a = str.split(',');
			var b = [];
			for (var i = 0; i < a.length; i++) {
				if (this.isUndefined(a[i])) {
					a[i] = 0;
				}
				if (a[i].substr( - 1) != '%') {
					a[i] = parseInt(a[i]);
				}
				b.push(a[i]);
			}
			return b;
		},
		/*
			共用函数
			将对象Object标准化
		*/
		standardization: function(o, n) { //n替换进o
			var h = {};
			var k;
			for (k in o) {
				h[k] = o[k];
			}
			for (k in n) {
				var type = typeof(h[k]);
				switch (type) {
				case 'number':
					h[k] = parseFloat(n[k]);
					break;
				default:
					h[k] = n[k];
					break;
				}

			}
			return h;
		},
		/*
			共用函数
			搜索数组
		 */
		arrIndexOf: function(arr, key) {
			var re = new RegExp(key, ['']);
			return (arr.toString().replace(re, '┢').replace(/[^,┢]/g, '')).indexOf('┢');
		},
		/*
			共用函数
			去掉空格
		 */
		trim: function(str) {
			if (str != '') {
				return str.replace(/(^\s*)|(\s*$)/g, '');
			}
			return '';
		},
		/*
			共用函数
			输出内容到控制台
		*/
		log: function(val) {
			try {
				console.log(val);
			} catch(e) {}
		},
		/*
			共用函数
			弹出提示
		*/
		eject: function(er, val) {
			if (!this.vars['debug']) {
				return;
			}
			var errorVal = er[1];
			if (!this.isUndefined(val)) {
				errorVal = errorVal.replace('[error]', val);
			}
			var value = 'error ' + er[0] + ':' + errorVal;
			try {
				this.log(value);
			} catch(e) {}
		}
	};
	window.ckplayer = ckplayer;
})();