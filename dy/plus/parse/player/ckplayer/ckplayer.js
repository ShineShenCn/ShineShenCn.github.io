/*
	è½¯ä»¶åç§°ï¼šckplayer
	è½¯ä»¶ç‰ˆæœ¬ï¼šX1
	è½¯ä»¶ä½œè€…ï¼šhttp://www.ckplayer.com
	--------------------------------------------------------------------------------------------------------------------
	å¼€å‘è¯´æ˜ï¼š
	ä½¿ç”¨çš„ä¸»è¦ç¨‹åºè¯­è¨€ï¼šjavascript(js)åŠactionscript3.0(as3.0)(as3.0ä¸»è¦ç”¨äºflashplayeréƒ¨åˆ†çš„å¼€å‘ï¼Œä¸åœ¨è¯¥é¡µé¢å‘ˆç°)
	åŠŸèƒ½ï¼šæ’­æ”¾è§†é¢‘
	ç‰¹ç‚¹ï¼šå…¼å®¹HTML5-VIDEO(ä¼˜å…ˆ)ä»¥åŠFlashPlayer
	=====================================================================================================================
*/
function ckplayerConfig() {
	return {
		flashvars: {},//ç”¨æ¥è¡¥å……flashvarsé‡Œçš„å¯¹è±¡
		languagePath: '',//è¯­è¨€åŒ…æ–‡ä»¶åœ°å€
		stylePath: '',//é£æ ¼åŒ…æ–‡ä»¶åœ°å€
		config: {
			fullInteractive: true,//æ˜¯å¦å¼€å¯äº¤äº’åŠŸèƒ½
			delay: 30,//å»¶è¿ŸåŠ è½½è§†é¢‘ï¼Œå•ä½ï¼šæ¯«ç§’
			timeFrequency: 100,//è®¡ç®—å½“å‰æ’­æ”¾æ—¶é—´å’ŒåŠ è½½é‡çš„æ—¶é—´é¢‘ç‡ï¼Œå•ä½ï¼šæ¯«ç§’
			autoLoad: true,//è§†é¢‘æ˜¯å¦è‡ªåŠ¨åŠ è½½
			loadNext: 0,//å¤šæ®µè§†é¢‘é¢„åŠ è½½çš„æ®µæ•°ï¼Œè®¾ç½®æˆ0åˆ™å…¨éƒ¨åŠ è½½
			definition: true,//æ˜¯å¦ä½¿ç”¨æ¸…æ™°åº¦ç»„ä»¶
			smartRemove: true,//æ˜¯å¦ä½¿ç”¨æ™ºèƒ½æ¸…ç†ï¼Œä½¿ç”¨è¯¥åŠŸèƒ½åˆ™åœ¨å¤šæ®µæ—¶å½“å‰æ’­æ”¾æ®µä¹‹å‰çš„æ®µéƒ½ä¼šè¢«æ¸…é™¤å‡ºå†…å­˜ï¼Œå‡å°‘å¯¹å†…å­˜çš„ä½¿ç”¨
			bufferTime: 200,//ç¼“å­˜åŒºçš„é•¿åº¦ï¼Œå•ä½ï¼šæ¯«ç§’,ä¸è¦å°äº10
			click: true,//æ˜¯å¦æ”¯æŒå±å¹•å•å‡»æš‚åœ
			doubleClick: true,//æ˜¯å¦æ”¯æŒå±å¹•åŒå‡»å…¨å±
			doubleClickInterval: 200,//åˆ¤æ–­åŒå‡»çš„æ ‡å‡†ï¼Œå³äºŒæ¬¡å•å‡»é—´éš”çš„æ—¶é—´å·®ä¹‹å†…åˆ¤æ–­ä¸ºæ˜¯åŒå‡»ï¼Œå•ä½ï¼šæ¯«ç§’
			keyDown: {
				space: true,//æ˜¯å¦å¯ç”¨ç©ºæ ¼é”®åˆ‡æ¢æ’­æ”¾/æš‚åœ
				left: true,//æ˜¯å¦å¯ç”¨å·¦æ–¹å‘é”®å¿«é€€
				right: true,//æ˜¯å¦å¯ç”¨å³æ–¹å‘é”®å¿«è¿›
				up: true,//æ˜¯å¦æ”¯æŒä¸Šæ–¹å‘é”®å¢åŠ éŸ³é‡
				down: true //æ˜¯å¦æ”¯æŒä¸‹æ–¹å‘é”®å‡å°‘éŸ³é‡
			},
			timeJump: 10,//å¿«è¿›å¿«é€€æ—¶çš„ç§’æ•°
			volumeJump: 0.1,//éŸ³é‡è°ƒæ•´çš„æ•°é‡ï¼Œå¤§äº0å°äº1çš„å°æ•°
			timeScheduleAdjust: 1,//æ˜¯å¦å¯è°ƒèŠ‚è°ƒèŠ‚æ ,0ä¸å¯ç”¨ï¼Œ1æ˜¯å¯ç”¨ï¼Œ2æ˜¯åªèƒ½å‰è¿›ï¼ˆå‘å³æ‹–åŠ¨ï¼‰ï¼Œ3æ˜¯åªèƒ½åé€€ï¼Œ4æ˜¯åªèƒ½å‰è¿›ä½†èƒ½å›åˆ°ç¬¬ä¸€æ¬¡æ‹–åŠ¨æ—¶çš„ä½ç½®ï¼Œ5æ˜¯çœ‹è¿‡çš„åœ°æ–¹å¯ä»¥éšæ„æ‹–åŠ¨
			previewDefaultLoad: true,//é¢„è§ˆå›¾ç‰‡æ˜¯å¦é»˜è®¤åŠ è½½ï¼Œä¼˜ç‚¹æ˜¯é¼ æ ‡ç¬¬ä¸€æ¬¡ç»è¿‡è¿›åº¦æ¡å³å¯æ˜¾ç¤ºé¢„è§ˆå›¾ç‰‡
			promptSpotTime: false,//æç¤ºç‚¹æ–‡å­—æ˜¯å¦åœ¨å‰é¢åŠ ä¸Šå¯¹åº”æ—¶é—´
			buttonMode: {
				player: false,//é¼ æ ‡åœ¨æ’­æ”¾å™¨ä¸Šæ˜¯å¦æ˜¾ç¤ºå¯ç‚¹å‡»å½¢æ€
				controlBar: false,//é¼ æ ‡åœ¨æ§åˆ¶æ ä¸Šæ˜¯å¦æ˜¾ç¤ºå¯ç‚¹å‡»å½¢æ€
				timeSchedule: true,//é¼ æ ‡åœ¨æ—¶é—´è¿›åº¦æ¡ä¸Šæ˜¯å¦æ˜¾ç¤ºå¯ç‚¹å‡»å½¢æ€
				volumeSchedule: true //é¼ æ ‡åœ¨éŸ³é‡è°ƒèŠ‚æ ä¸Šæ˜¯å¦æ˜¾ç¤ºå¯ç‚¹å‡»å½¢æ€
			},
			liveAndVod: { //ç›´æ’­+ç‚¹æ’­=å›æ’­åŠŸèƒ½
				open: false,//æ˜¯å¦å¼€å¯ï¼Œå¼€å¯è¯¥åŠŸèƒ½éœ€è¦è®¾ç½®flashvarsé‡Œlive=true
				vodTime: 2,//å¯ä»¥å›çœ‹çš„æ•´ç‚¹æ•°
				start: 'start' //å›çœ‹è¯·æ±‚å‚æ•°
			},
			errorNum: 3,//é”™è¯¯é‡è¿æ¬¡æ•°
			playCorrect: false,//æ˜¯å¦éœ€è¦é”™è¯¯ä¿®æ­£ï¼Œè¿™æ˜¯é’ˆå¯¹rtmpçš„
			timeCorrect: true,//httpè§†é¢‘æ’­æ”¾æ—¶é—´é”™è¯¯çº æ­£ï¼Œæœ‰äº›å› ä¸ºè§†é¢‘æ ¼å¼çš„é—®é¢˜å¯¼è‡´è§†é¢‘æ²¡æœ‰å®é™…æ’­æ”¾ç»“æŸè§†é¢‘æ–‡ä»¶å°±è¿”å›äº†stopå‘½ä»¤
			m3u8Definition: { //m3u8è‡ªåŠ¨æ¸…æ™°åº¦æ—¶æŒ‰å…³é”®å­—æ¥è¿›è¡Œåˆ¤æ–­
				//tags:['200k','110k','400k','600k','1000k']
			},
			m3u8MaxBufferLength: 30,//m3u8æ¯æ¬¡ç¼“å†²æ—¶é—´ï¼Œå•ä½ï¼šç§’æ•°
			split: '|',//å½“è§†é¢‘åœ°å€é‡‡ç”¨å­—ç¬¦å½¢å¼å¹¶ä¸”éœ€è¦ä½¿ç”¨é€—å·æˆ–å…¶å®ƒç¬¦å·æ¥åˆ‡å‰²æ•°ç»„é‡Œå®šä¹‰
			timeStamp: '',//ä¸€ä¸ªåœ°å€ï¼Œç”¨æ¥è¯·æ±‚å½“å‰æ—¶é—´æˆ³ï¼Œç”¨äºæ’­æ”¾å™¨å†…éƒ¨æ—¶é—´æ•ˆå‡†
			mobileVolumeBarShow: false,//åœ¨ç§»åŠ¨ç«¯æ˜¯å¦æ˜¾ç¤ºéŸ³é‡è°ƒèŠ‚æŒ‰é’®
			addCallback: 'adPlay,adPause,playOrPause,videoPlay,videoPause,videoMute,videoEscMute,videoClear,changeVolume,fastBack,fastNext,videoSeek,newVideo,getMetaDate,videoRotation,videoBrightness,videoContrast,videoSaturation,videoHue,videoZoom,videoProportion,videoError,addListener,removeListener,addElement,getElement,deleteElement,elementShow,animate,animateResume,animatePause,deleteAnimate,changeConfig,getConfig,openUrl,fullScreen,quitFullScreen,switchFull,screenshot,custom,changeControlBarShow,getCurrentSrc,changeDefinition'//éœ€è¦æ”¯æŒçš„äº‹ä»¶
		},
		menu: { //ç‰ˆæƒåç§°æ”¯æŒ
			ckkey: '',
			name: '',
			link: '',
			version: '',
			domain: '',
			more: []
		},
		style: { //é£æ ¼éƒ¨åˆ†å†…å®¹é…ç½®ï¼Œè¿™é‡Œä¸»è¦é…ç½®loadingå’Œlogoä»¥åŠå¹¿å‘Šçš„éƒ¨åˆ†å†…å®¹
			loading: { //è§†é¢‘åŠ è½½å‰æ˜¾ç¤ºåœ¨æ’­æ”¾å™¨ä¸­é—´çš„å›¾ç‰‡ï¼Œå¦‚æœä¸éœ€è¦å¯ä»¥åˆ é™¤è¯¥å±æ€§
				file: 'data:image/swf;base64,Q1dTCrUjAAB4nKWZBzRc/bf3BwmJJEgQoo0SEd3odRA1iU70PjqjzYg6SESITiJatKiJMLroRIsuehC999FHveT/PBn3/p/33vu+71rG+pzf2fu7z3ef39nrzBorAFACgF0FAJBjAaRvkwMAAB/iK1cBAFFnMwthNWlZWjeonT1M+PxIjN4KDncU5uR0dXXlcOXhcHC25AQJCQlxcnFzcnOzn0eww9zt4SZu7PYwBnow7W8FaXMYxNnaEW7tYE97cWxi6uACF6On/0vWDer4R9YexmFi5mBqzgFxgHK6mThygji4OC90zoOEpZzNTeAOzhoODnZgyYsoWlk7E5gVrYqzg4U5DHYub2JHK6XOJ8r5X6Mv5ZtLn3/A3FwgbnYuAXZuIQ0QvzAvjzBIgJVLUJiL61LuvyL/lapoDjcxM4GbYJIv/ng0QHzCfOdpQpeT/1PsX+kOZtYW7v+rZEwkrSjnf+ne/7qfior/fUehUM6/o2FwNXOL/z4apuHuaM6pZg5zcHGGmJ+HM/x1RxQVhR/bw+Am9hDzx9Lg8wUOa2szYUkuLhnQIyFBWUleXhluEOiRAA+vlJS0AJ8UnwA/D8+j30b/c+rfatIOEBeouT38LzWz/wu1S6l/qyk7W1tan++Jf1AV4OLi5+PjluGTlBaSAYFAQtx80o94QYICQtz8/FJ/3Yx/lvhzrebO1s/NzWSdHaC/74KjiTPM/KJTYvR/t+qiTb/7K2z9720Skv2fjP1b6t9qZv9gSOh/MvRvqX+rOfz/tOn/KEH758Zg+vT/vKXNIH92qKOLs93vsWMG4TS3M7+oBjvfpaDfU8IMImzh4Aw1gYNNHB3trCEmF4KcbuwwKweIravJc3N2i4uJIcqJCfzHS+L8a/CBaQFS2OfjsJb05vl/LMDch4r5OCQtCAAQv75JfrFy9TuAC+A2spaI56XxbK+FKa4/7vFGNXGv/CO8q69or8TIBNHeEX7R4+l7hYsu4hH2FUnhhzJXtDQ0tVVJTu+SPPJ4CScpoP2YnULPtnk0weOQJDqh5K4uMZy4jR7r7qhyXuhM2K6uhXVVv/1uNh/3NjGU7X6dzqAYuwQ/zOal3cmynJmnq2sM8LCWaS2HYN8lW7C/ZWrylGlWpMzlHTuHQvQtahK6p4rOMeXMc9wicQNf9iYsnQdFDdbMf1Vc+f4kWHdEw7vXyGUmJm7qq0Ev1jAXkZs796YsQT4T0K0IMCxGOAy+q412HUsa3Zn2pwvScoUX3uPh1r1LnKrGY8GXcyIQGx6A0+dr9bNGzAd2ONfyKVVCh8l4hmgSyPOi2r/Os/0F4RB2gNEVGyOcsFqcD8grefqAPEPsGiGC/lXTjlnsp5UfhJKmNHX79Qer4gI6VE+HfGpwNqoa8mKKCuLi4gi/ucyaWVrqiW3U81PMVLpcL5jYlnVFJ1Kqn/heba2L6upoqcSWgfqinSSeX+MaoIydxVKA4z3wxOrD8XUvkHAX3lzmnVzkn6SHzMZsvHBQxpErxV45TBbn6Rdz1XzJNjzR2hYQHR7Q5iVGbbY9X+x4uL6i2rGQBTpLbhKMXSdUcMTihvqmchtfs/WTYfcrkfwilma94/GOfSZwqauQ13iBJOWQdHLnqK5yTsI64MQhY9TFo3Hot+Q3epzoUpHS56beieZ4IbB53QfbqNt2o46KaQtxzvOqSnVuV/sItDLp7FcjS64/sT+y8jROZ2/5QYvFSUwOe6odUhozxxzAj5UglyTO0ws5mHwYN3ahizd8x65aan9hP2TmOPmAvLPYlMQTrNbQaNXceIW0747RHvvrIvIc5k077ODqKN9jiy+M2O4othob7A6TI8tCbdsgJohCPYpXoeFaCVvzL+67OdUgMjfr4xLWvm8WCo/f/RzVRudvoSZ1qkJdF/EKO8h+fJncTZCTlbHhfdSAu4Rn3WB3l2kO5I2v5ivDrm37yXoV/U0j70fNS7OwGNHmrqKQVP3BiQ4JJYjsqBOFNIgCxd2nbLDw7fBF7Ykou91I+qujzwya4C8W3x+ZcYw7MOPG1Fdn3yns3R4a6TLc1pu55tAVzqxJT53i5SXJw6HMhLsY6aZS9ON4vdQrk9FdQS7JXHjLjqoFb+k63/R9kQhIaOyMi3WImKvdEkTLJ5aEy9mqOJowR4xonr4Ipj83DKMQDWadfOZF8nn6s0jhN3Xx/fh41+1pcsL3CUc2XmIv+nBMU/IZtRpY7NuTyiy8uGTx1cpPSGCdoSYT3BAT++LXt/aEBYJmGJhe9qUugdnWnaenBUo0fzpSzTN6o386lnVRH4ecsv2Ympqa1RM3qPG6h53zKTu7Zw6mdmAVHR/Psgob6koUqR4bG4Oj+XYZxpRkkbsoJn9CD+URpnU9t/G+k8Nd4mS5UTRkESZfHvOtO2etAu15gl7qy/IfkkBai/j4wH++HsjRCj7Kss3aWJakYOKe6/Qc32Q7AJyaP3PkzHv1VPXqhxs5G4Ix/WfctpKnubYaDYmUTWiwtbSqiD2BWSukbmtnApm7uL+LJpVS5ucAPjN6lnT+aUvi9Nrq1XKndkqIjSdunmNpfMJRUG/YbeLVYXHSZSwaMtTfKGszLdSmZYFbVYkMEOXt0dlaeMjOwvISK22jSi+GwyBkSqoDF4Gs6Mqy7ZmrfKRZgg6jA78C23/P5pzy7IFNWfY0R/RY1W4mvUFqLZcsbjuAgLzz5LBTRGsLtKph2eCBvVRPL4XbuQnbH6oPb4R/s0WpSotPOLJuoZttM7qVqk+O7OZb0ApSQXEWbN6zXaHmSy02MSHaXOIrS7X7i710BdZvyYGEhIRy5fpKob+Uhx5EmtD96hvJZGsDbn4ns7QEIVrNQzreTG7t6dTrf5ARar3pwzFOAW1HSUJf4gu0lHckvKW3JlAdrR6wnN1WO0gBqQmCewsOj3U/32Zo3pQcMl/1DEQ+Www3bd5F5x1oM89EkADJagK0/WiugD+YlW7dabGfIdI0DA1csJnS7SiQDJFmQ0p+++whjRRGbWS253gjmB2u2XdvQzyItLTiEsBuxuFKJpIvXqhNsLJ9n3Dt/brTj+xWtm1r0kxntgGTU/J4ffUYvh8aZmZjmuvUZfSh09EqcvVTmQNKW7aGaQ/m1MG4Q23gJW8iRQaE3/oGij+8w8N2ur6LoqsiMCigB3F6E04JSlQw8zXfGWdNHcd38a9lMmXvvQt7w6fXEaDic6vJfL9dDXr8sRaVWEbWOcRf52PNRxLMkqIPJ6lh6woy0An4urBCzuASqI+4w558dLCXhK7GJ9tRunl9k8edm5OZg95toTTkCkcXPXWrRQVvQ0yC34f5JlN2xphwFQaxeyv56enRHTrKP7RiJmyDY/xbtmrSQgkPw1455dd4N3n1uLIx4pIcZXOAFyv8T/psEfvaRsccO3oGoPcRWMKGQ+jXvN97Toi3U0NTa9uozPlL/ZUM5NKaKnCLRzY/6fIEEgrskdd8wS3oHjqtv+Z57Kqi0xk4y1H98Dn3frWYvkbQVmHNG33wI2HuhvAlPAiExfatzjpoMHLGD25W3OkPwzG7XmAfNW0mVcNAZeQ+cXvb5Cbl9PYtdEiNaJ3aLmvqxBsdUpvcPFvSJM4qgtTTwPIffDRLvdyIjW1a7diOgYXYiQ7qxZKZ+9PaVHPF+Y/eumrQ2bizm2r2f7w+k9YaJHyFIzeeen9f9b1+wnqeGouhp7kbt9bCR9HEadZpP2dYPMM9iKsAWes7xQQSB0fRBxNl0oghcn4FlC00RDeKEHHzGkJTK4RxVktw/NpGCTj0nYdD8QCShsRTN2l4TjOhhI98r1nHRVTGKxu/fDjoINArDHLfTGe3/mBpJZogLGzksHXxF/Iscu3Mw2H/M5lR2PXwQK55inhpXLTBIUvlvSw6jZXE2a4tOGkZmLE9KcfSSXhrfPRX6BafOppoyL9kwL5jTirm7MlaADLHJgcSrJggew1N1qL9SOxu+K3mQYniubuEOMB3MUiVYyjF6w1wQD0y2f9zNnbQN3wX7/XadPwpNgHCBfLy9drFtP7JWMHEid0+HfX8mkORVWFUw254l2FHMlhEayk7kRHK72Q3dF9JXF6kWWTCoC/qU5yej2zn942h17+KysWkdpmkKuC1BykHjcO6cfzgnaVgcDJfhlLWhi6NBviROQcYeKQ8Eni8XysdHqP8TTKN2p4C/Kjdtn+XtbZwWSuq+f3P0eFFhbCsLEIaPydPcMtOWTfEfE6mCrHeAnOgzltDaetqMQ9NLy1/1FWLGkB+ESwa+nhMt4Texs0QSxDJ3z7+YNk733lvmI/pqCC/vGjGfBsW/0sAvMiH/uiYUIN+eVQfwLxrYOAVQbMcVPDK4/5gZ20Q4aGB4YRhauFLS3WzPiam7/RS0WcFyaV93jbTJWQ78RSJLUCpk0iXpcWzFv6aCSa7j6Neox93AEkih7fau8PrvSWv6r/yyj8WtdPphIbLAF1DFOwzNiq71oXsqGRPttkOz2Z4+9KKYnfXr34R9Ihcat0/0y5ebqIFGvm9nTwdHx9PysvLIygtLW0+LM2YYTVRoAspYwYOkFreaw/IEzS0OQkSVx7yfNxa778famlErmfdp/B0zFb9wCp7PTesAHnKdRDu9c6NNm1iGDXqfyQu2jMTvr0kNOD26ugT9Ff/lDLy020B2Bz167HF6gyCnJxaGZJ2Hqq7VKpDyOznc+q6/pPmA++ygOHff87lqXzeQTRfxWEyg2zVdHMZD93bGXcKmjvK4vItiNqdX4h13WxnDd4Htiv4sEgl45azkAQZ+/j4mDY2/fypMzU5OWnn4LBh1tJxzahIw5uDyjKjnyd0TmoIVVF64yQxr0UlVAkf+OjuAeTV6WdFTnYnZOgcpKlw0KY2A5UIf0mxsbLzwcvoazLvZOdQ32kjkc9NlIRsy6aoyhmcxqkZWNRarsyRuSoUTLbMUXRc+bpJiwrYb0Ug5mjNN0cvoqfwcGBhyAytHJrw5s3ZIZUfrxd81AM70fCAhJofEdRS9kGiNjFr4+aEy/Sv1Aw9CLZUiTcynRILDAaPr6+v03BwcDQGt7W2vtkil4p35lyurDgcepYm8JoQwadscEKuhxf9LYDr/TSEDWVb8GaBLKNjZinnqvyUH/DIXxZ0u+np7NBsXzrntNvTbDpRYHGiwPLb0usQPtOwsF8rQl7Md4GHFAmUNVJ1vSyChcd+Cw3BqKna9PikmGJq4b4eM7muCVklaVxI2sLeW/mJ53cM+IFyR4otPc4IBrUhXloXKMOIg+jr4s4WpFj5Jw+1I3BDI+zhzsvBzAjvr8zRT3qJTP3g0k86XDjn8VxAGexdd5KUT1PCVU2MpvkeVBwQJUGsvP3Bb/uFRFNpFhN4fvCJW2XvsdPoNe4r4gOntR93XEdSj5hyb7nSAU3XG/V/8NsA0Ypjvnx8Mfknfe2bet9QkgXRT28n+2k0FH210a30ZriFnu9o4WlOwYOk/ZKdTokUo5HKuRUS6nJL3lA9vHFgN9DoWbjFaiS0dnvxcESZxujA2dRYOiQf2EuQRGgo8rCGHnyzSXt6bEBt5SnciXEPCHVnrU6OIIaWMKHcWBhrektwpYYOwQivQFuiinnUDlq0VlNrDOlmrz/qEtuGB7REOd1pkjdlQEyeGJEBp73R0GSVNRu9GfOq/Z/KywdtNZPXWvDmFr9c5QaL4ou32pzN0kp5dazzm1FV2AuFkTTjgCIr3tsy2waG497PtZGgn/Gbp7XmSAp7o6Pq2Q49PVLOAA9KcQTulpy/MYe+c38MtXVnKwCrxoQvC0/0lwPOr2thrDPXaCnIB56bwAvnvBmXN/KaBHygL2WVTja7kQ4sVqbyQY2p0JjiA/Gqmr98mz9szz7a02rM+xLwCzuMMNoCatrD3Rse1Lp2SCAAR86Lg5yD4glN6eKa1Bpl2nSVROR5orTTXMLSGRrlrwQviM7TZN9I2HxUbKSSrSL+cJ9oS1JIeCmg/yr7vg2ikt/oTh6SaKj2Jrow70DGiIbBEIJ0MMgHoWKHhzIGM9IHE5pWVm+hJHUlwE/QhRFXR2RLGNtEDkQlY2v7bEfkhISS9Tb59CHo4U9U2r5bQcGCJw0OVl3NsFGvW8Av5TEa9MVVd5MYo/3XAhRiKOchhb6EYbdsOrNzp2jeRGay2t7Wh+/Y1K36RGfuJX/Od3UkmgeaguVFDg7aVEIlRscKM3yAGew0Uwjl1aFjh9hGW+03NxC2m+mz6JHDjG6WY4N3/cf6omQf2eUiPjKO7PT1WA404W20p9+qerOSTyKAOlb50DSUcyB7fG1BImQO8gZRhiqDTQj5cXpXhHF0lEG3CXNc/A6M9Wmrql57nxVUdzZyS9W4a4lfscvehUCrPSiX5O+3O3ltgW3kP5yqHW0enAVC14obtbxCtWy8drVGGo4rtU3EOu/wjXqak/Dc5pkul0R5J1HC7L4qOofnNJQNTbXn1M4saSk3vF7Cm6PhiD8kza01BWlC9dfb7fEzemmB4Q4ipwtjUonBvIVjaWHWzZHJfvOriJq1HioBS//BGnmmQMJU781tYPNyQDThjAL5W7D8SvvZk6eRaNlEr+IDxQ8VXtTq+4kBXvUmD8meWe2k4at2D6S0to1MnASL25FFx35GIqfHiedTRkuJ2ZRspWHvfYr1lUt+4fKaCIU4jKcezsZx7spb9akafZjPU/uUXdPeoj19PBZL1dgWACduDlYbzDlDxiZ0jLtrbQbeqdo+f0REG+MKpqoi9CCPasWzhHYPBlyuMSN/9gvbptagKr8SzqQdDc7YPNDNtQzJd2P5kj49FDGG4IRTGRBNTs1BFz1WeYW+N9gQMgDf5ZAfHt04y5E9jc1djH1R2DBh3B3Hek1XNzfP5BMvn6FuZUK+rkH4iVDmbMNByrVEH7us9I1Gqt1juZVbLT12MtQv8QmonyZWz8RpWotldKy586ACrzm5EhI+d8YnfP78btl3FX96FgUOVy0dNNfQq+2J6cOc6CBxPZHRyQOgJ1Q05ERBqpcfGMC2kR9PaG7i74G43qmj8ovZQ2bNNjfznTo4JTe5qZpp/uNMcDJ9YfGWhfRpfa5BC5ncVdyAJz/8AokytvxwHj8ekIt6m0MgYP2tJDb2c8OPH9HJ0rJqOWJPkNVVwsWejrCIgDhCZlvnU7JO9fnsMWoum+v8AwbfVk+M6lJ9gwusCBqLZh9O69gnFr4HFWZOae70BhUwK4um5YYVP0CYYnnhEyTbJ1XaHqQpizLulgE5up4/P/NS5MBbXQVYWkpkYJPg17Ved3ScLB0dURP5Ke/yPkBa/IFy0nH+puQuCyvlSGjzftZaVIXxDmVWfunyHVPNQUnDulz19NofEtvLGsE2XZ2Q46j81ZmaN9QVb2CRj61PAhzWwNZO2w+c3qit5Ofhex5Fzz1hnJzCOjgAGBqOwVxd65qupiAab/J5Hun0iYnlnrm22eyPHpvj75elPfiisUDXvSp8K0tGrh8V/SQxC0bR64FI88g1aRt5bTTznjq+d7rV5LVNzeGXx+kJo3mJ6aSN0sa0kys33DwnzF/N5wTetqGhcYne2ytQ7Z0IP7hbe1dAPU9v2X1kXHmZT15Ma6JEe2t7u4XC81bFegxoKGXFC5JncOydORbgvYdK9N4oyiUQ2jBI0ZeitkRRTOtp5uaNlv4czp5Pb6poFnFiZdkHR1VXQBXUWHIZ3nlUG9o/mYuNrK8n44w4Iyaur5eQqEtGp8geMXeZjtp7uCvGpai1du5ApvghXuqrDO+nv5MA+aLNoVXkDf5CM68+ga27SlYq8dSOJezWufGaPCawyskPm4XOX3x0T/Y/PZbS5w1RyVNacbLuFM5Vz2qZ5QutlUF+/hkZGf026X3UHZrVjY3z7wvWYOW8N7++ComTxbxrjIhYtUahFrqJbsyemZhIWD3Moj6fiOIPMz8iFBNqdi0cHfNrExM/zZSCvBYrwzPDEipqjJgRscIWlNOj2uAd6+/VX3ERyaNjG/Uk4O93ZsEmJZFFpZC6HMv+lewPN8Kz0SmZxgWadVE2u8eyAWThqTOZuOmrX33lBKgaTlvwjo/KeibVW0aK3V2NspRESjOzHH4OV+6zcmZkUI9N1JxYZkVF2RswnTFNEF7HMjUF6HZLjNwmaURNbXSDppda52aLxdjX2rtNIUDP/vb2MUH5BOSE7QnXLFlm44PMsOT5LZNlbfuH/DwPZHmbythJjVCD7aD1yPaCJryI0rkrL3Xsu5Bzcy6Nnk58aoP9H9feq8t771J+iVPDvd+M7fRFRgYWL+GtfKrkrRxqKCfrrK8SHDgZliZbRXTD29s3h1XC9sT6LN+k9mTs88DXH+vrzc6p7WWdKCbYNL56rZF6sfLysHXe87hvX/nFuBcqi+EdzAPNwsUeW7oKSwHLfGXFBO0ZixwMO2WkA7WqRvtCuOxjoRujxVhRCdhrI1i5ejjsetjFhnRCcbaPH0t4iRJRthfc7iQPCpomn+R7Bffn9RtOObXornGpdt3wdz89zTw10lPfVofOhAihBoyaAvKGe8dE2zTO316EMr28YeQCclLfGbOES4GO7OkHiFccSNVuv01EOekzidId9a8cX+rWG7vYlPMthet4aekiZz66w1JkbqyDGK9aDYYs3RglI2sBPfIiIksn02gpKVv4SisrG4o9mNvQGRLCyKiqytHVfEZNDD21CyGIfXtjvP2gjSSPLdIndvsem44fjz/h08H6YlBUE3xWb8P9aDIL7UObt7M/88SGVs+JgthjYfJ1x/ttKCWlPTjcRukdRL1K2ok42W8bddco5iNkSdRmp0pPwHjbYnJ3CGlEzWVcf1wnEf0WZUdOTBYX5ROrPlRFNpNVDqkVcg9OrdmhtlxfEODb59qt7LcUW4svzoFT116niZ8gbXufKNHWn3jQ1nmUF25ry7ugCCLmiweSbTBp9va9uEXp2yw7PTPWGkbNE+DpKTLcpsCP8JIPRSpMrRkOuire42S/TakTz/N0ABCKsn46iITrqFMiJ10METDvZ+zC6WElz9PTJwZuIUICKeeW00lvkGEHEOLEcGABEfAFWc1BVk70Yam1yemZZ37jcfI7qjNvVGowDOasqn48emeXFTJu9OSD3eruBCv4uz6U6sMhumzZAy69cHNMg+UrKhmpjCogHrCwXn9Jg9blmKNDHALm5iQMqDdnwuuiWetSpSSe76WeBYfRvD//crPGURR4L76IS068I1HgfVv+pxLlTyfya0Ztsey7PNoVpbY3k99/2aAolDeSW/hEbPAMbxy1d4oS+SwZeaa+FkROzoMbC8L53o3X1ubLrufrh/ei7UlKDY3bEZSWc2Pan4Da0LPpF2KRljJBYiLgSACoWRQ/vGgk6F7+cxhup+zjQ0tr3DI4PKwMllcCuxZCRzc495Zd1toi6IbyQihcdgNuM3AgBmrPWpu7Eq1PDm+s6Bu0hL5vVXtrBf0YfSNHbHjvbKIQJVgLYAIAANgAq4sfjLEmAVhSWICfEoCr54sAIlJkCg1e4U2qApyCHSokAPAaFxfrPBZQC6A9P43zO0k+SskXC3B2dgYguoVMua9ceJOC5TnYT7YOEIgri30edK5VCyg/j78CcAQQpgAACAA2UfkOXg+BQSPi/GQcoEPQogMQ0gEADJ51AM7e49f/Pn0Tgdfzj2cBtKRdnhRf+qC9Go0Akg4uLGhuCf/4qO/1AHlArPWDUbWo3EoxAElRHSBKTZGZmRGA6ykPsCz9eT9o8HOJbuZo+qdAAHOsMfaong20ugxATBCBxdWrWJrBqPfcA8Bs6Yt1Pz1eTe0J4OZeBKAbWvgYcHadCHBhA+tfDbgCAEicH59dHzo3hwt4Bgi6WL0KoMQFXJwJxL2KBaC8tonhG5MYJujB8O1LTFKHYbJ8DFOkYJg6AsO0vhhmcMTwg0vMbIxhNhUMc0pgmJsLw3y0GBYkwrDIJQZf8ihxyaPUJY+yl3w9vuRL4ZIv5Uusdsnjs0setS951Lvky/CSL5NLvswuseUljzaXPEIveXS85At2yZfLJV9ul9jzkkfv3x4DLvgeju8fvG78Bwkl/iAp7R+kxCAdRuHB5B9kq/uD3Cl/UBBTAowpIY3BJ5hqKpgSmpgSepgSJpgSlpgSUAzCMNXcMSV8/pQgw8fg3T8lyOj+6JKxY1DojxiZDCZNFZOmj4m1wsTC/8SSAv6skpL/SSPlxKzKYVYNMavP/6wSU2LwKQY9LvD1Bd5W+5sIjX8/3G9wcXHOn+27AIZJ8Wvn2wqA92fYYRPlRmD74dDdr7v4Hfl88v0elXmO2H4G+Y+5Lq0BaC8G4lqa5ZWpj1k4tCK4kvRyMkrXG2S7cC+K4eKei/4u9h8UUd6/',
				align: 'center',
				vAlign: 'middle',
				offsetX: -100,
				offsetY: -40
			},
			logo: { //æ˜¾ç¤ºåœ¨å³ä¸Šè§’çš„logoå›¾ç‰‡ï¼Œå¦‚æœä¸éœ€è¦å¯ä»¥åˆ é™¤è¯¥å±æ€§
				file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFcAAAAUCAYAAAD4BKGuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAVTSURBVHja1Fl/aJVVGP4cw/mH5tUWi3I53cA0WbeIzMgaq6lQoVawm0S6glHhIKM/TELICotqCxMSGWQRdFfRLEhc9mMxqA0rbdS2wsV0GkZXuaKUWlHvgeeNh7f3u1du3Ft74eGcnXu+c873vD/Pt0nZbDZyZL2gWZAQTBH8IjggeEjgPZASPIB+g/P7EsGT6J/BfHfjHFIv2Jpjj/+dlDskvCm42Jk7X3C7YJOgw/z2oOBGwdEYRW0RVAjOCZ4ugNggqwU3CTLRBJFyQ+xuwVRY14igB78tE9QKpgmeEHwkGKRnq9AeMesHRWwEsYGUxwSdBZ51ecweE4Lct0DsOVjaZvptA8jfC4JfghWpXIJ2jMY+EDShf1pwh6DvX5x1GtpDE43cNFlfhyFWpQ9xd5FgFo3fRi++C+2nCBNBRgU3O6RsEyyEQv4QLMb4CcE9RlFBLqS1WZ6BZ83A35ofVhuvfE5QJrjWebdgCJOx51qM1QgewbMzsO57MDQrB9DeC8ObHd5Xyb2eiNiQQxmtgkZBr+OuZwV7BIcF1RgbF1wTE2MbEccX48VY9sMzBilhTke/m+b1Q9lefpgruI7OsYhIGzPJuAnn3+6EM7vu1YKl5vkrYRSfCGZivCxoMklk7M5j6eFlXyRNRSAvAoFf0Fo/CC7LkbwuQjsZsf0qwbuI9wlYgIqGl6NEzDYibJ/gbmAfxpKoMDRcaSK8xZzjZbK+NMhSYoNSngV5e+ksKXp+JdqZwDDmdpSbsqa9gNAyi5JalSGv3iQ+dtNK9HvI+sNBh2AhvNYVaH+msRtAdsa4ehoKCuQsoP2PY8+kCSkJ5IRWjD2FZ4/BOFSWYv9KhI40eUKQ31CqdnLM1c1OOnHufKSS+iEZvgHNhji8g1yT5VZKdCnHO+ajvrYK/I7GkuSWjwvq8Mzl5M79NF89aCHaBNXmWv0sQVUUZEDwsDnbr2i9s31lKyGuFs7kITEBC+snJaToRYIFrRN0CeYgoSUxJ23WUm85eB41b4IUuIvGtyIMVMY8lzHGMoYworF7J/onKYk10/wVQL6zXYr+Zq9aOEhuXZPDel8Q3If+HMzTeHPKlForEK+mws3SMfH2UMxNLIJbasKsoIQZwVLbKFkN4T1C3HxUMM+EkCAfgjwNV40Y304KriOP+jIHqa+jvYsqnH/kqzKaGCFZxWnoTqooxky8+dHUsOGwr6Jfi9jmlVVTHGLnot9L3qGWqCToWYYRF5fDa96mtb93yI2g8B0IWxlTHWmi/hOG00D4mEJfJ5WhQX7ySCsDUaNkJeud6+sgXCgs3OLEG2/xdZSh10JBeiB1zQU0HuQdSib60rOdm9kFToIL8hmFiRHzm1YM0ylet5k579OFpcUk4I0oD0/QuJ7tcBy5ERY6ixdrh5uNwN3bUV7pd4E+J958HmPxbRRydqK/in6vxj5aH9din/udEPKtuU1GqBL24xJwBInQWiHLcbQVKBXTzkVpHP0tWHsIpZUqPeWcrScXuX2ImRkqlufBhdQl15ig3WLKH0/SeAmtD+uprBqGx1ThhlWN5LKG4lcNKbDblFDjVDU0wWK7yLLqnPNk6cKzKsfXt1GQmQQXSuwymhd3tr9lkvPJMUV152kc2PsmUEMxtzdPRk2SNX2DQ3Vhr02Is18LXjHVAz/bG0NEK8johus3UBiwyfkYlDkQUyLaWrwZBrbHMaB8Z3PJLaYk8IIVKKPSJdxbv3ecynNzLNr33GKLV1YVW4IyfycXfq0UxP4X5HJdXCqX4Wv0AKqYkkipw4LG6WxMNi+GhAtH+M/K8wVe7wuWvwQYAFT+UsGCXmX3AAAAAElFTkSuQmCC',
				align: 'right',
				vAlign: 'top',
				offsetX: -100,
				offsetY: 10
			},
			advertisement: { //å¹¿å‘Šç›¸å…³çš„é…ç½®
				time: 5,//å¹¿å‘Šé»˜è®¤æ’­æ”¾æ—¶é•¿ä»¥åŠå¤šä¸ªå¹¿å‘Šæ—¶æ¯ä¸ªå¹¿å‘Šé»˜è®¤æ’­æ”¾æ—¶é—´ï¼Œå•ä½ï¼šç§’
				method: 'get',//å¹¿å‘Šç›‘æµ‹åœ°å€é»˜è®¤è¯·æ±‚æ–¹å¼ï¼Œget/post
				videoForce: false,//è§†é¢‘å¹¿å‘Šæ˜¯å¦å¼ºåˆ¶æ’­æ”¾ç»“æŸ
				videoVolume: 0.8,//è§†é¢‘éŸ³é‡
				skipButtonShow: true,//æ˜¯å¦æ˜¾ç¤ºè·³è¿‡å¹¿å‘ŠæŒ‰é’®
				linkButtonShow: true,//æ˜¯å¦æ˜¾ç¤ºå¹¿å‘Šé“¾æ¥æŒ‰é’®ï¼Œå¦‚æœé€‰æ‹©æ˜¾ç¤ºï¼Œåªæœ‰åœ¨æä¾›äº†å¹¿å‘Šé“¾æ¥åœ°å€æ—¶æ‰ä¼šæ˜¾ç¤º
				muteButtonShow: true,//æ˜¯å¦åœ¨è§†é¢‘å¹¿å‘Šæ—¶æ˜¾ç¤ºé™éŸ³æŒ‰é’®
				closeButtonShow: true,//æš‚åœæ—¶æ˜¯å¦æ˜¾ç¤ºå…³é—­å¹¿å‘ŠæŒ‰é’®
				closeOtherButtonShow: true,//å…¶å®ƒå¹¿å‘Šæ˜¯å¦éœ€è¦å…³é—­å¹¿å‘ŠæŒ‰é’®
				frontSkipButtonDelay: 1,//å‰ç½®å¹¿å‘Šè·³è¿‡å¹¿å‘ŠæŒ‰é’®å»¶æ—¶æ˜¾ç¤ºçš„æ—¶é—´ï¼Œå•ä½ï¼šç§’
				insertSkipButtonDelay: 0,//æ’å…¥å¹¿å‘Šè·³è¿‡å¹¿å‘ŠæŒ‰é’®å»¶æ—¶æ˜¾ç¤ºçš„æ—¶é—´ï¼Œå•ä½ï¼šç§’
				endSkipButtonDelay: 0,//åç½®å¹¿å‘Šè·³è¿‡å¹¿å‘ŠæŒ‰é’®å»¶æ—¶æ˜¾ç¤ºçš„æ—¶é—´ï¼Œå•ä½ï¼šç§’
				frontStretched: 2,//å‰ç½®å¹¿å‘Šæ‹‰ä¼¸æ–¹å¼ï¼Œ0=åŸå§‹å¤§å°ï¼Œ1=è‡ªåŠ¨ç¼©æ”¾ï¼Œ2=åªæœ‰å½“å¹¿å‘Šçš„å®½æˆ–é«˜å¤§äºæ’­æ”¾å™¨å®½é«˜æ—¶æ‰è¿›è¡Œç¼©æ”¾ï¼Œ3=å‚è€ƒæ’­æ”¾å™¨å®½é«˜ï¼Œ4=å®½åº¦å‚è€ƒæ’­æ”¾å™¨å®½ã€é«˜åº¦è‡ªåŠ¨ï¼Œ5=é«˜åº¦å‚è€ƒæ’­æ”¾å™¨é«˜ã€å®½åº¦è‡ªåŠ¨
				insertStretched: 2,//æ’å…¥å¹¿å‘Šæ‹‰ä¼¸æ–¹å¼ï¼Œ0=åŸå§‹å¤§å°ï¼Œ1=è‡ªåŠ¨ç¼©æ”¾ï¼Œ2=åªæœ‰å½“å¹¿å‘Šçš„å®½æˆ–é«˜å¤§äºæ’­æ”¾å™¨å®½é«˜æ—¶æ‰è¿›è¡Œç¼©æ”¾ï¼Œ3=å‚è€ƒæ’­æ”¾å™¨å®½é«˜ï¼Œ4=å®½åº¦å‚è€ƒæ’­æ”¾å™¨å®½ã€é«˜åº¦è‡ªåŠ¨ï¼Œ5=é«˜åº¦å‚è€ƒæ’­æ”¾å™¨é«˜ã€å®½åº¦è‡ªåŠ¨
				pauseStretched: 2,//æš‚åœå¹¿å‘Šæ‹‰ä¼¸æ–¹å¼ï¼Œ0=åŸå§‹å¤§å°ï¼Œ1=è‡ªåŠ¨ç¼©æ”¾ï¼Œ2=åªæœ‰å½“å¹¿å‘Šçš„å®½æˆ–é«˜å¤§äºæ’­æ”¾å™¨å®½é«˜æ—¶æ‰è¿›è¡Œç¼©æ”¾ï¼Œ3=å‚è€ƒæ’­æ”¾å™¨å®½é«˜ï¼Œ4=å®½åº¦å‚è€ƒæ’­æ”¾å™¨å®½ã€é«˜åº¦è‡ªåŠ¨ï¼Œ5=é«˜åº¦å‚è€ƒæ’­æ”¾å™¨é«˜ã€å®½åº¦è‡ªåŠ¨
				endStretched: 2 //ç»“æŸå¹¿å‘Šæ‹‰ä¼¸æ–¹å¼ï¼Œ0=åŸå§‹å¤§å°ï¼Œ1=è‡ªåŠ¨ç¼©æ”¾ï¼Œ2=åªæœ‰å½“å¹¿å‘Šçš„å®½æˆ–é«˜å¤§äºæ’­æ”¾å™¨å®½é«˜æ—¶æ‰è¿›è¡Œç¼©æ”¾ï¼Œ3=å‚è€ƒæ’­æ”¾å™¨å®½é«˜ï¼Œ4=å®½åº¦å‚è€ƒæ’­æ”¾å™¨å®½ã€é«˜åº¦è‡ªåŠ¨ï¼Œ5=é«˜åº¦å‚è€ƒæ’­æ”¾å™¨é«˜ã€å®½åº¦è‡ªåŠ¨
			},
			video: { //è§†é¢‘çš„é»˜è®¤æ¯”ä¾‹ï¼Œå½“è§†é¢‘å…ƒæ•°æ®é‡Œæ²¡æœ‰å®½å’Œé«˜å±æ€§æ—¶é»˜è®¤ä½¿ç”¨è¯¥å®½é«˜
				defaultWidth: 4,//å®½åº¦
				defaultHeight: 3 //é«˜åº¦
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
			javascriptéƒ¨åˆ†å¼€å‘æ‰€ç”¨çš„æ³¨é‡Šè¯´æ˜ï¼š
			1ï¼šåˆå§‹åŒ–-ç¨‹åºè°ƒç”¨æ—¶å³è¿è¡Œçš„ä»£ç éƒ¨åˆ†
			2ï¼šå®šä¹‰æ ·å¼-å®šä¹‰å®¹å™¨ï¼ˆdiv,p,canvasç­‰ï¼‰çš„æ ·å¼è¡¨ï¼Œå³css
			3ï¼šç›‘å¬åŠ¨ä½œ-ç›‘å¬å…ƒç´ èŠ‚ç‚¹ï¼ˆå•å‡»-clickï¼Œé¼ æ ‡è¿›å…¥-mouseoverï¼Œé¼ æ ‡ç¦»å¼€-mouseoutï¼Œé¼ æ ‡ç§»åŠ¨-mousemoveç­‰ï¼‰äº‹ä»¶
			4ï¼šç›‘å¬äº‹ä»¶-ç›‘å¬è§†é¢‘çš„çŠ¶æ€ï¼ˆæ’­æ”¾ï¼Œæš‚åœï¼Œå…¨å±ï¼ŒéŸ³é‡è°ƒèŠ‚ç­‰ï¼‰äº‹ä»¶
			5ï¼šå…±ç”¨å‡½æ•°-è¿™ç±»å‡½æ•°åœ¨å¤–éƒ¨ä¹Ÿå¯ä»¥ä½¿ç”¨
			6ï¼šå…¨å±€å˜é‡-å®šä¹‰æˆå…¨å±€ä½¿ç”¨çš„å˜é‡
			7ï¼šå…¶å®ƒç›¸å…³æ³¨é‡Š
			å…¨å±€å˜é‡è¯´æ˜ï¼š
			åœ¨æœ¬è½¯ä»¶ä¸­æ‰€ä½¿ç”¨åˆ°çš„å…¨å±€å˜é‡ï¼ˆå˜é‡ï¼ˆç±»å‹ï¼‰åŒ…æ‹¬Booleanï¼ŒStringï¼ŒIntï¼ŒObjectï¼ˆåŒ…å«å…ƒç´ å¯¹è±¡å’Œå˜é‡å¯¹è±¡ï¼‰ï¼ŒArrayï¼ŒFunctionç­‰ï¼‰
			ä¸‹é¢åˆ—å‡ºé‡è¦çš„å…¨å±€å˜é‡ï¼š
				V:Objectï¼šè§†é¢‘å¯¹è±¡
				VA:Arrayï¼šè§†é¢‘åˆ—è¡¨ï¼ˆåŒ…æ‹¬è§†é¢‘åœ°å€ï¼Œç±»å‹ï¼Œæ¸…æ™°åº¦è¯´æ˜ï¼‰
				ID:Stringï¼šè§†é¢‘ID
				CB:Objectï¼šæ§åˆ¶æ å„å…ƒç´ çš„é›†åˆå¯¹è±¡
				PD:Objectï¼šå†…éƒ¨è§†é¢‘å®¹å™¨å¯¹è±¡
			---------------------------------------------------------------------------------------------
			ç¨‹åºå¼€å§‹
			ä¸‹é¢ä¸ºéœ€è¦åˆå§‹åŒ–é…ç½®çš„å…¨å±€å˜é‡
			åˆå§‹åŒ–é…ç½®
			configï¼šå…¨å±€å˜é‡å®šä¹‰ä¸€äº›åŸºæœ¬é…ç½®
		*/
		this.config = {
			videoDbClick: true,//æ˜¯å¦æ”¯æŒåŒå‡»å…¨å±/é€€å‡ºå…¨å±åŠ¨ä½œ
			errorTime: 100,//å»¶è¿Ÿåˆ¤æ–­å¤±è´¥çš„æ—¶é—´ï¼Œå•ä½ï¼šæ¯«ç§’
			videoDrawImage: false,//æ˜¯å¦ä½¿ç”¨è§†é¢‘drawImageåŠŸèƒ½ï¼Œæ³¨æ„ï¼Œè¯¥åŠŸèƒ½åœ¨ç§»åŠ¨ç«¯è¡¨ç°ä¸äº†
			adSkipClick: 'javaScript->adjump' //h5ç¯å¢ƒä¸­ç‚¹å‡»è·³è¿‡å¹¿å‘ŠæŒ‰é’®è§¦å‘çš„åŠŸèƒ½
		};
		//å…¨å±€å˜é‡ï¼šæ’­æ”¾å™¨é»˜è®¤é…ç½®ï¼Œåœ¨å¤–éƒ¨ä¼ é€’è¿‡æ¥ç›¸åº”é…ç½®åï¼Œåˆ™è¿›è¡Œç›¸å…³æ›¿æ¢
		this.varsConfig = {
			playerID: '',//æ’­æ”¾å™¨ID
			container: '',//è§†é¢‘å®¹å™¨çš„ID
			variable: 'ckplayer',//æ’­æ”¾å‡½æ•°(å˜é‡)åç§°
			volume: 0.8,//é»˜è®¤éŸ³é‡ï¼ŒèŒƒå›´0-1
			poster: '',//å°é¢å›¾ç‰‡åœ°å€
			autoplay: false,//æ˜¯å¦è‡ªåŠ¨æ’­æ”¾
			loop: false,//æ˜¯å¦éœ€è¦å¾ªç¯æ’­æ”¾
			live: false,//æ˜¯å¦æ˜¯ç›´æ’­
			duration: 0,//æŒ‡å®šæ€»æ—¶é—´
			seek: 0,//é»˜è®¤éœ€è¦è·³è½¬çš„ç§’æ•°
			drag: '',//æ‹–åŠ¨æ—¶æ”¯æŒçš„å‰ç½®å‚æ•°
			front: '',//å‰ä¸€é›†æŒ‰é’®åŠ¨ä½œ
			next: '',//ä¸‹ä¸€é›†æŒ‰é’®åŠ¨ä½œ
			loaded: '',//åŠ è½½æ’­æ”¾å™¨åè°ƒç”¨çš„å‡½æ•°
			flashplayer: false,//è®¾ç½®æˆtrueåˆ™å¼ºåˆ¶ä½¿ç”¨flashplayer
			html5m3u8: false,//PCå¹³å°ä¸Šæ˜¯å¦ä½¿ç”¨h5æ’­æ”¾å™¨æ’­æ”¾m3u8
			track: null,//å­—å¹•è½¨é“
			cktrack: null,//ckå­—å¹•
			preview: null,//é¢„è§ˆå›¾ç‰‡å¯¹è±¡
			prompt: null,//æç¤ºç‚¹åŠŸèƒ½
			video: null,//è§†é¢‘åœ°å€
			config: '',//è°ƒç”¨é…ç½®å‡½æ•°åç§°
			type: '',//è§†é¢‘æ ¼å¼
			crossorigin: '',//è®¾ç½®html5è§†é¢‘çš„crossOriginå±æ€§
			crossdomain: '',//å®‰å…¨ç­–ç•¥æ–‡ä»¶åœ°å€
			unescape: false,//é»˜è®¤flashplayeré‡Œéœ€è¦è§£ç 
			mobileCkControls: false,//ç§»åŠ¨ç«¯h5æ˜¾ç¤ºæ§åˆ¶æ 
			mobileAutoFull: true,//ç§»åŠ¨ç«¯æ˜¯å¦é»˜è®¤å…¨å±æ’­æ”¾
			playbackrate: 1,//é»˜è®¤å€é€Ÿ
			h5container: '',//h5ç¯å¢ƒä¸­ä½¿ç”¨è‡ªå®šä¹‰å®¹å™¨
			debug: false,//æ˜¯å¦å¼€å¯è°ƒè¯•æ¨¡å¼
			//ä»¥ä¸‹ä¸ºå¹¿å‘Šç›¸å…³é…ç½®
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
		this.vars = {};//å…¨å±€å˜é‡ï¼šè¯­è¨€é…ç½®
		this.language = {
			volume: 'éŸ³é‡ï¼š',
			play: 'ç‚¹å‡»æ’­æ”¾',
			pause: 'ç‚¹å‡»æš‚åœ',
			full: 'ç‚¹å‡»å…¨å±',
			escFull: 'é€€å‡ºå…¨å±',
			mute: 'ç‚¹å‡»é™éŸ³',
			escMute: 'å–æ¶ˆé™éŸ³',
			front: 'ä¸Šä¸€é›†',
			next: 'ä¸‹ä¸€é›†',
			definition: 'ç‚¹å‡»é€‰æ‹©æ¸…æ™°åº¦',
			playbackRate: 'ç‚¹å‡»é€‰æ‹©é€Ÿåº¦',
			error: 'åŠ è½½å‡ºé”™',
			adTime: 'å¹¿å‘Š{$second}ç§’',
			skipAd: 'è·³è¿‡å¹¿å‘Š',
			skipAdTime: '{$second}ç§’åå¯è·³è¿‡å¹¿å‘Š',
			adLink: 'æŸ¥çœ‹è¯¦æƒ…'
		};
		//å…¨å±€å˜é‡ï¼šå³é”®èœå•ï¼š[èœå•æ ‡é¢˜,ç±»å‹(link:é“¾æ¥ï¼Œdefault:ç°è‰²ï¼Œfunctionï¼šè°ƒç”¨å‡½æ•°ï¼Œjavascript:è°ƒç”¨jså‡½æ•°),æ‰§è¡Œå†…å®¹(åŒ…å«é“¾æ¥åœ°å€ï¼Œå‡½æ•°åç§°),[line(é—´éš”çº¿)]]
		this.contextMenu = [['ckplayer', 'link', 'http://www.ckplayer.com', '_blank'], ['version:X1', 'default', 'line']];
		//å…¨å±€å˜é‡ï¼šé”™è¯¯æç¤ºåˆ—è¡¨
		this.errorList = [['000', 'Object does not exist'], ['001', 'Variables type is not a object'], ['002', 'Video object does not exist'], ['003', 'Video object format error'], ['004', 'Video object format error'], ['005', 'Video object format error'], ['006', '[error] does not exist '], ['007', 'Ajax error'], ['008', 'Ajax error'], ['009', 'Ajax object format error'], ['010', 'Ajax.status:[error]']];
		//å…¨å±€å˜é‡ï¼šHTML5å˜é€Ÿæ’­æ”¾çš„å€¼æ•°ç»„/å¦‚æœä¸éœ€è¦å¯ä»¥è®¾ç½®æˆnull
		this.playbackRateArr = [[0.5, '0.5å€'], [1, 'æ­£å¸¸'], [1.25, '1.25å€'], [1.5, '1.5å€'], [2, '2å€é€Ÿ'], [4, '4å€é€Ÿ']];
		//å…¨å±€å˜é‡ï¼šHTML5é»˜è®¤å˜é€Ÿæ’­æ”¾çš„å€¼
		this.playbackRateDefault = 1;
		//å…¨å±€å˜é‡ï¼šå®šä¹‰logo
		this.logo = '';
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦åŠ è½½äº†æ’­æ”¾å™¨
		this.loaded = false;
		//å…¨å±€å˜é‡ï¼šè®¡æ—¶å™¨ï¼Œç›‘å¬è§†é¢‘åŠ è½½å‡ºé”™çš„çŠ¶æ€
		this.timerError = null;
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦å‡ºé”™
		this.error = false;
		//å…¨å±€å˜é‡ï¼šå‡ºé”™åœ°å€çš„æ•°ç»„
		this.errorUrl = [];
		//å…¨å±€å˜é‡ï¼šè®¡æ—¶å™¨ï¼Œç›‘å¬å…¨å±ä¸éå…¨å±çŠ¶æ€
		this.timerFull = null;
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦å…¨å±çŠ¶æ€
		this.full = false;
		//å…¨å±€å˜é‡ï¼šè®¡æ—¶å™¨ï¼Œç›‘å¬å½“å‰çš„æœˆ/æ—¥ æ—¶=åˆ†=ç§’
		this.timerTime = null;
		//å…¨å±€å˜é‡ï¼šè®¡æ—¶å™¨ï¼Œç›‘å¬è§†é¢‘åŠ è½½
		this.timerBuffer = null;
		//å…¨å±€å˜é‡ï¼šè®¾ç½®è¿›åº¦æŒ‰é’®åŠè¿›åº¦æ¡æ˜¯å¦è·Ÿç€æ—¶é—´å˜åŒ–ï¼Œè¯¥å±æ€§ä¸»è¦ç”¨æ¥åœ¨æŒ‰ä¸‹è¿›åº¦æŒ‰é’®æ—¶æš‚åœè¿›åº¦æŒ‰é’®ç§»åŠ¨å’Œè¿›åº¦æ¡çš„é•¿åº¦å˜åŒ–
		this.isTimeButtonMove = true;
		//å…¨å±€å˜é‡ï¼šè¿›åº¦æ æ˜¯å¦æœ‰æ•ˆï¼Œå¦‚æœæ˜¯ç›´æ’­ï¼Œåˆ™ä¸éœ€è¦ç›‘å¬æ—¶é—´è®©è¿›åº¦æŒ‰é’®å’Œè¿›åº¦æ¡å˜åŒ–
		this.isTimeButtonDown = false;
		//å…¨å±€å˜é‡ï¼šç”¨æ¥æ¨¡æ‹ŸåŒå‡»åŠŸèƒ½çš„åˆ¤æ–­
		this.isClick = false;
		//å…¨å±€å˜é‡ï¼šè®¡æ—¶å™¨ï¼Œç”¨æ¥æ¨¡æ‹ŸåŒå‡»åŠŸèƒ½çš„è®¡æ—¶å™¨
		this.timerClick = null;
		//å…¨å±€å˜é‡ï¼šè®¡æ—¶å™¨ï¼Œæ—‹è½¬loading
		this.timerLoading = null;
		//å…¨å±€å˜é‡ï¼šè®¡æ—¶å™¨ï¼Œç›‘å¬é¼ æ ‡åœ¨è§†é¢‘ä¸Šç§»åŠ¨æ˜¾ç¤ºæ§åˆ¶æ 
		this.timerCBar = null;
		//å…¨å±€å˜é‡ï¼šæ’­æ”¾è§†é¢‘æ—¶å¦‚æœè¯¥å˜é‡çš„å€¼å¤§äº0ï¼Œåˆ™è¿›è¡Œè·³è½¬åè®¾ç½®è¯¥å€¼ä¸º0
		this.needSeek = 0;
		//å…¨å±€å˜é‡ï¼šå½“å‰éŸ³é‡
		this.volume = 0;
		//å…¨å±€å˜é‡ï¼šé™éŸ³æ—¶ä¿å­˜ä¸´æ—¶éŸ³é‡
		this.volumeTemp = 0;
		//å…¨å±€å˜é‡/å˜é‡ç±»å‹ï¼šNumber/åŠŸèƒ½ï¼šå½“å‰æ’­æ”¾æ—¶é—´
		this.time = 0;
		//å…¨å±€å˜é‡ï¼šå®šä¹‰é¦–æ¬¡è°ƒç”¨
		this.isFirst = true;
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦ä½¿ç”¨HTML5-VIDEOæ’­æ”¾
		this.html5Video = true;
		//å…¨å±€å˜é‡è®°å½•è§†é¢‘å®¹å™¨èŠ‚ç‚¹çš„x;y
		this.pdCoor = {
			x: 0,
			y: 0
		};
		//å…¨å±€å˜é‡ï¼šåˆ¤æ–­å½“å‰ä½¿ç”¨çš„æ’­æ”¾å™¨ç±»å‹ï¼Œhtml5videoæˆ–flashplayer
		this.playerType = '';
		//å…¨å±€å˜é‡ï¼šåŠ è½½è¿›åº¦æ¡çš„é•¿åº¦
		this.loadTime = 0;
		//å…¨å±€å˜é‡ï¼šbodyå¯¹è±¡
		this.body = document.body || document.documentElement;
		//å…¨å±€å˜é‡ï¼šæ’­æ”¾å™¨
		this.V = null;
		//å…¨å±€å˜é‡ï¼šä¿å­˜å¤–éƒ¨jsç›‘å¬äº‹ä»¶æ•°ç»„
		this.listenerJsArr = [];
		//å…¨å±€å˜é‡ï¼šä¿å­˜æ§åˆ¶æ æ˜¾ç¤ºå…ƒç´ çš„æ€»å®½åº¦
		this.buttonLen = 0;
		//å…¨å±€å˜é‡ï¼šä¿å­˜æ§åˆ¶æ æ˜¾ç¤ºå…ƒç´ çš„æ•°ç»„
		this.buttonArr = [];
		//å…¨å±€å˜é‡ï¼šä¿å­˜æŒ‰é’®å…ƒç´ çš„å®½
		this.buttonWidth = {};
		//å…¨å±€å˜é‡ï¼šä¿å­˜æ’­æ”¾å™¨ä¸Šæ–°å¢å…ƒä»¶çš„æ•°ç»„
		this.elementArr = [];
		//å…¨å±€å˜é‡ï¼šä¿å­˜æ’­æ”¾å™¨ä¸Šå¼¹å¹•çš„ä¸´æ—¶æ•°ç»„
		this.elementTempArr = [];
		//å…¨å±€å˜é‡ï¼šå­—å¹•å†…å®¹
		this.track = [];
		//å…¨å±€å˜é‡ï¼šå­—å¹•ç´¢å¼•
		this.trackIndex = 0;
		//å…¨å±€å˜é‡ï¼šå½“å‰æ˜¾ç¤ºçš„å­—å¹•å†…å®¹
		this.nowTrackShow = {
			sn: ''
		};
		//å…¨å±€å˜é‡ï¼šä¿å­˜å­—å¹•å…ƒä»¶æ•°ç»„
		this.trackElement = [];
		//å…¨å±€å˜é‡ï¼šå°†è§†é¢‘è½¬æ¢ä¸ºå›¾ç‰‡
		this.timerVCanvas = null;
		//å…¨å±€å˜é‡ï¼šanimateï¼Œç¼“åŠ¨å¯¹è±¡æ•°ç»„
		this.animateArray = [];
		//å…¨å±€å˜é‡ï¼šä¿å­˜animateçš„å…ƒä»¶
		this.animateElementArray = [];
		//å…¨å±€å˜é‡ï¼šä¿å­˜éœ€è¦åœ¨æš‚åœæ—¶åœæ­¢ç¼“åŠ¨çš„æ•°ç»„
		this.animatePauseArray = [];
		//å…¨å±€å˜é‡ï¼šé¢„è§ˆå›¾ç‰‡åŠ è½½çŠ¶æ€/0=æ²¡æœ‰åŠ è½½ï¼Œ1=æ­£åœ¨åŠ è½½ï¼Œ2=åŠ è½½å®Œæˆ
		this.previewStart = 0;
		//å…¨å±€å˜é‡ï¼šé¢„è§ˆå›¾ç‰‡å®¹å™¨
		this.previewDiv = null;
		//å…¨å±€å˜é‡ï¼šé¢„è§ˆæ¡†
		this.previewTop = null;
		//å…¨å±€å˜é‡ï¼šé¢„è§ˆæ¡†çš„å®½
		this.previewWidth = 120;
		//å…¨å±€å˜é‡ï¼šé¢„è§ˆå›¾ç‰‡å®¹å™¨ç¼“åŠ¨å‡½æ•°
		this.previewTween = null;
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦æ˜¯m3u8æ ¼å¼ï¼Œæ˜¯çš„è¯åˆ™å¯ä»¥åŠ è½½hls.js
		this.isM3u8 = false;
		//å…¨å±€å˜é‡ï¼šä¿å­˜æç¤ºç‚¹æ•°ç»„
		this.promptArr = [];
		//å…¨å±€å˜é‡ï¼šæ˜¾ç¤ºæç¤ºç‚¹æ–‡ä»¶çš„å®¹å™¨
		this.promptElement = null;
		//å…¨å±€å˜é‡ï¼šé…ç½®æ–‡ä»¶å‡½æ•°
		this.ckplayerConfig = {};
		//å…¨å±€å˜é‡ï¼šæ§åˆ¶æ æ˜¯å¦æ˜¾ç¤º
		this.showFace = true;
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦ç›‘å¬è¿‡h5çš„é”™è¯¯
		this.errorAdd = false;
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦å‘é€äº†é”™è¯¯
		this.errorSend = false;
		//å…¨å±€å˜é‡ï¼šæ§åˆ¶æ æ˜¯å¦éšè—
		this.controlBarIsShow = true;
		//å…¨å±€å˜é‡ï¼Œä¿å­˜å½“å‰ç¼©æ”¾æ¯”ä¾‹
		this.videoScale = 1;
		//å…¨å±€å˜é‡ï¼šè®¾ç½®å­—ä½“
		this.fontFamily = '"Microsoft YaHei"; YaHei; "\5FAE\8F6F\96C5\9ED1"; SimHei; "\9ED1\4F53";Arial';
		//å…¨å±€å˜é‡ï¼šè®°å½•ç¬¬ä¸€æ¬¡æ‹–åŠ¨è¿›åº¦æŒ‰é’®æ—¶çš„ä½ç½®
		this.timeSliderLeftTemp = 0;
		//å…¨å±€å˜é‡ï¼šåˆ¤æ–­æ˜¯å¦è®°å½•äº†æ€»æ—¶é—´
		this.durationSendJS = false;
		//å…¨å±€å˜é‡ï¼šåˆå§‹åŒ–å¹¿å‘Šåˆ†ææ˜¯å¦ç»“æŸè®¾ç½®
		this.adAnalysisEnd = false;
		//å…¨å±€å˜é‡ï¼šå¹¿å‘Šå˜é‡
		this.advertisements = {};
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦æ˜¯ç¬¬ä¸€æ¬¡æ’­æ”¾è§†é¢‘
		this.isFirstTimePlay = true;
		//å…¨å±€å˜é‡ï¼šå½“å‰éœ€è¦æ’­æ”¾çš„å¹¿å‘Šç±»å‹
		this.adType = '';
		//å…¨å±€å˜é‡ï¼šæ’­æ”¾å¹¿å‘Šè®¡æ•°
		this.adI = 0;
		//å…¨å±€å˜é‡ï¼šè¦æ’­æ”¾çš„ä¸´æ—¶åœ°å€
		this.videoTemp = {
			src: '',
			source: '',
			currentSrc: '',
			loop: false
		};
		//å…¨å±€å˜é‡ï¼šå½“å‰è¦æ’­æ”¾çš„å¹¿å‘Šç»„æ€»æ—¶é—´
		this.adTimeAllTotal = 0;
		//å…¨å±€å˜é‡ï¼šè‚–å‰è¦æ’­æ”¾çš„å¹¿å‘Šæ—¶é—´
		this.adTimeTotal = 0;
		//å…¨å±€å˜é‡ï¼šç”¨æ¥åšå€’è®¡æ—¶
		this.adCountDownObj = null;
		//å…¨å±€å˜é‡ï¼šå‰ç½®ï¼Œä¸­æ’ï¼Œç»“å°¾å¹¿å‘Šæ˜¯å¦å·²å¼€å§‹è¿è¡Œ
		this.adPlayStart = false;
		//å…¨å±€å˜é‡ï¼šç›®å‰æ˜¯å¦åœ¨æ’­æ”¾å¹¿å‘Š
		this.adPlayerPlay = false;
		//å…¨å±€å˜é‡ï¼šå½“å‰å¹¿å‘Šæ˜¯å¦æš‚åœ
		this.adIsPause = false;
		//å…¨å±€å˜é‡ï¼šè§†é¢‘å¹¿å‘Šæ˜¯å¦é™éŸ³
		this.adVideoMute = false;
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦éœ€è¦è®°å½•å½“å‰æ’­æ”¾çš„æ—¶é—´ä¾›å¹¿å‘Šæ’­æ”¾ç»“æŸåè¿›è¡Œè·³è½¬
		this.adIsVideoTime = false;
		//å…¨å±€å˜é‡ï¼šåç½®å¹¿å‘Šæ˜¯å¦æ’­æ”¾
		this.endAdPlay = false;
		//å…¨å±€å˜é‡ï¼šæš‚åœå¹¿å‘Šæ˜¯å¦åœ¨æ˜¾ç¤º
		this.adPauseShow = false;
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦éœ€è¦é‡ç½®å¹¿å‘Šä»¥å®ç°é‡æ–°æ’­æ”¾æ—¶å†æ’­æ”¾ä¸€æ¬¡
		this.adReset = false;
		//å…¨å±€å˜é‡ï¼šæ˜¯å¦åœ¨æ’­æ”¾å¹¿å‘Šæ—¶æ’­æ”¾è¿‡è§†é¢‘å¹¿å‘Š
		this.adVideoPlay = false;
		if (obj) {
			this.embed(obj);
		}
	};
	ckplayer.prototype = {
		/*
			ä¸»è¦å‡½æ•°éƒ¨åˆ†å¼€å§‹
			ä¸»æ¥å£å‡½æ•°ï¼š
			è°ƒç”¨æ’­æ”¾å™¨éœ€åˆå§‹åŒ–è¯¥å‡½æ•°
		*/
		embed: function(c) {
			//c:Objectï¼šæ˜¯è°ƒç”¨æ¥å£ä¼ é€’çš„å±æ€§å¯¹è±¡
			if (window.location.href.substr(0, 7) == 'file://') {//å¦‚æœæ˜¯ä½¿ç”¨çš„fileåè®®æ‰“ç½‘é¡µåˆ™å¼¹å‡ºæç¤º
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
				//åˆ¤æ–­è§†é¢‘æ•°æ®ç±»å‹
				this.analysedVideoUrl(videoString);
				return this;
			} else {
				this.eject(this.errorList[2]);
			}
		},
		/*
			å†…éƒ¨å‡½æ•°
			æ ¹æ®å¤–éƒ¨ä¼ é€’è¿‡æ¥çš„videoå¼€å§‹åˆ†æè§†é¢‘åœ°å€
		*/
		analysedVideoUrl: function(video) {
			var i = 0,
			y = 0;
			var thisTemp = this;
			this.VA = [];//å®šä¹‰å…¨å±€å˜é‡VAï¼šè§†é¢‘åˆ—è¡¨ï¼ˆåŒ…æ‹¬è§†é¢‘åœ°å€ï¼Œç±»å‹ï¼Œæ¸…æ™°åº¦è¯´æ˜ï¼‰
			if (typeof(video) == 'string') { //å¦‚æœæ˜¯å­—ç¬¦å½¢å¼çš„åˆ™åˆ¤æ–­åç¼€è¿›è¡Œå¡«å……
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
			} else if (typeof(video) == 'object') { //å¦‚æœè§†é¢‘åœ°å€æ˜¯å¯¹è±¡æˆ–æ•°ç»„
				if (!this.isUndefined(typeof(video.length))) { //å¦‚æœè§†é¢‘åœ°å€æ˜¯æ•°ç»„
					if (!this.isUndefined(typeof(video[0].length))) { //å¦‚æœè§†é¢‘åœ°å€æ˜¯äºŒç»´æ•°ç»„
						this.VA = video;
					}
					this.getVideo();
				} else {
					/*
						å¦‚æœvideoæ ¼å¼æ˜¯å¯¹è±¡å½¢å¼ï¼Œåˆ™åˆ†äºŒç§
						å¦‚æœvideoå¯¹è±¡é‡ŒåŒ…å«typeï¼Œåˆ™ç›´æ¥æ’­æ”¾
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
			å¯¹è¯·æ±‚åˆ°çš„è§†é¢‘åœ°å€è¿›è¡Œé‡æ–°åˆ†æ
		*/
		analysedUrl: function(data) {
			this.vars = this.standardization(this.vars, data);
			if (!this.isUndefined(data['video'])) {
				this.vars['video'] = data['video'];
			}
			this.analysedVideoUrl(this.vars['video']);
		},
		/*
			å†…éƒ¨å‡½æ•°
			æ£€æŸ¥æµè§ˆå™¨æ”¯æŒçš„è§†é¢‘æ ¼å¼ï¼Œå¦‚æœæ˜¯åˆ™å°†æ”¯æŒçš„è§†é¢‘æ ¼å¼é‡æ–°åˆ†ç»„ç»™æ’­æ”¾åˆ—è¡¨
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
			å†…éƒ¨å‡½æ•°
			æ ¹æ®è§†é¢‘åœ°å€å¼€å§‹æ„å»ºæ’­æ”¾å™¨
		*/
		getVideo: function() {
			var thisTemp = this;
			var v = this.vars;
			//å¦‚æœå­˜åœ¨å¹¿å‘Šå­—æ®µåˆ™å¼€å§‹åˆ†æå¹¿å‘Š
			if (!this.adAnalysisEnd && (v['adfront'] != '' || v['adpause'] != '' || v['adinsert'] != '' || v['adend'] != '' || v['advertisements'] != '')) {
				this.adAnalysisEnd = true;
				this.adAnalysis();
				return;
			}
			//å¦‚æœå­˜åœ¨å­—å¹•åˆ™åŠ è½½
			if (this.V) { //å¦‚æœæ’­æ”¾å™¨å·²å­˜åœ¨ï¼Œåˆ™è®¤ä¸ºæ˜¯ä»newVideoå‡½æ•°å‘é€è¿‡æ¥çš„è¯·æ±‚
				this.changeVideo();
				return;
			}
			if (this.vars['cktrack']) {
				this.loadTrack();
			}
			if (this.supportVideo() && !this.vars['flashplayer']) {
				this.getHtml5Video(); //åˆ¤æ–­æµè§ˆå™¨æ”¯æŒçš„è§†é¢‘æ ¼å¼
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
			//å¼€å§‹æ„å»ºæ’­æ”¾å™¨å®¹å™¨
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
				this.PD = thisPd; //PD:å®šä¹‰æ’­æ”¾å™¨å®¹å™¨å¯¹è±¡å…¨å±€å˜é‡
			} else {
				var playerID = 'ckplayer' + this.randomString();
				var playerDiv = document.createElement('div');
				playerDiv.className = playerID;
				this.CD.innerHTML = '';
				this.CD.appendChild(playerDiv);
				this.PD = this.getByElement(playerID); //PD:å®šä¹‰æ’­æ”¾å™¨å®¹å™¨å¯¹è±¡å…¨å±€å˜é‡
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
			if (this.html5Video) { //å¦‚æœæ”¯æŒHTML5-VIDEOåˆ™é»˜è®¤ä½¿ç”¨HTML5-VIDEOæ’­æ”¾å™¨
				//ç¦æ­¢æ’­æ”¾å™¨å®¹å™¨ä¸Šé¼ æ ‡é€‰æ‹©æ–‡æœ¬
				this.PD.onselectstart = this.PD.ondrag = function() {
					return false;
				};
				//æ’­æ”¾å™¨å®¹å™¨æ„å»ºå®Œæˆå¹¶ä¸”è®¾ç½®å¥½æ ·å¼
				//æ„å»ºæ’­æ”¾å™¨
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
				//åˆ†æè§†é¢‘åœ°å€ç»“æŸ
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
					this.V = this.getByElement('#' + vid); //Vï¼šå®šä¹‰æ’­æ”¾å™¨å¯¹è±¡å…¨å±€å˜é‡
				}
				if (this.vars['crossorigin']) {
					this.V.crossOrigin = this.vars['crossorigin'];
				}
				try {
					this.V.volume = volume; //å®šä¹‰éŸ³é‡
					if (this.playbackRateArr && this.vars['playbackrate'] > -1) {
						if (this.vars['playbackrate'] < this.playbackRateArr.length) {
							this.playbackRateDefault = this.vars['playbackrate'];
						}
						this.V.playbackRate = this.playbackRateArr[this.playbackRateDefault][0]; //å®šä¹‰å€é€Ÿ
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
				//åˆ›å»ºä¸€ä¸ªç”»å¸ƒå®¹å™¨
				if (this.config['videoDrawImage']) {
					var canvasID = 'vcanvas' + this.randomString();
					var canvasDiv = document.createElement('div');
					canvasDiv.className = canvasID;
					this.PD.appendChild(canvasDiv);
					this.MD = this.getByElement(canvasID); //å®šä¹‰ç”»å¸ƒå­˜å‚¨å®¹å™¨
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
				//æ’­æ”¾å™¨æ„å»ºå®Œæˆå¹¶ä¸”è®¾ç½®å¥½æ ·å¼
				//å»ºç«‹æ’­æ”¾å™¨çš„ç›‘å¬å‡½æ•°ï¼ŒåŒ…å«æ“ä½œç›‘å¬åŠäº‹ä»¶ç›‘å¬
				this.addVEvent();
				//æ ¹æ®æ¸…æ™°åº¦çš„å€¼æ„å»ºæ¸…æ™°åº¦åˆ‡æ¢æŒ‰é’®
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
			} else { //å¦‚æœä¸æ”¯æŒHTML5-VIDEOåˆ™è°ƒç”¨flashplayer
				this.embedSWF();
			}
		},
		/*
			åˆ†æå¹¿å‘Šæ•°æ®
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
							//å¯¹å¹¿å‘Šè¿›è¡Œåˆ†æ
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
							//å¯¹å¹¿å‘Šè¿›è¡Œåˆ†æç»“æŸ
						}
						thisTemp.getVideo();
					}
				};
				this.ajax(ajaxObj);
			} else {
				//æ ¹æ®å¹¿å‘Šåˆ†æ
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
			å°†å¹¿å‘Šæ•°ç»„æ•°æ®é‡Œä¸æ˜¯è§†é¢‘å’Œå›¾ç‰‡çš„å»é™¤
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
		/*åˆ†æå•ä¸ªç±»å‹çš„å¹¿å‘Š*/
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
			å†…éƒ¨å‡½æ•°
			å‘é€æ’­æ”¾å™¨åŠ è½½æˆåŠŸçš„æ¶ˆæ¯
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
			å†…éƒ¨å‡½æ•°
			å»ºç«‹æ’­æ”¾å™¨çš„ç›‘å¬å‡½æ•°ï¼ŒåŒ…å«æ“ä½œç›‘å¬åŠäº‹ä»¶ç›‘å¬
		*/
		addVEvent: function() {
			var thisTemp = this;
			//ç›‘å¬è§†é¢‘å•å‡»äº‹ä»¶
			var eventVideoClick = function(event) {
				thisTemp.videoClick();
			};
			this.addListenerInside('click', eventVideoClick);
			this.addListenerInside('click', eventVideoClick, this.MDC);
			//å»¶è¿Ÿè®¡ç®—åŠ è½½å¤±è´¥äº‹ä»¶
			this.timerErrorFun();
			//ç›‘å¬è§†é¢‘åŠ è½½åˆ°å…ƒæ•°æ®äº‹ä»¶
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
			//ç›‘å¬è§†é¢‘æ’­æ”¾äº‹ä»¶
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
			//ç›‘å¬è§†é¢‘æš‚åœäº‹ä»¶
			var eventPause = function(event) {
				thisTemp.pauseHandler();
				thisTemp.sendJS('pause');
				thisTemp.sendJS('paused', true);
			};
			this.addListenerInside('pause', eventPause);
			//ç›‘å¬è§†é¢‘æ’­æ”¾ç»“æŸäº‹ä»¶
			var eventEnded = function(event) {
				thisTemp.endedHandler();
			};
			this.addListenerInside('ended', eventEnded);
			//ç›‘å¬è§†é¢‘æ’­æ”¾æ—¶é—´äº‹ä»¶
			var eventTimeupdate = function(event) {
				if (thisTemp.timerLoading != null) {
					thisTemp.loadingStart(false);
				}
				if (thisTemp.time) {
					if (!thisTemp.adPlayerPlay) {
						thisTemp.sendJS('time', thisTemp.time);
						//ç›‘å¬ä¸­é—´æ’å…¥å¹¿å‘Šæ˜¯å¦éœ€è¦æ’­æ”¾
						if (!thisTemp.isUndefined(thisTemp.advertisements['insert'])) {
							thisTemp.checkAdInsert(thisTemp.time);
						}
						//ç›‘å¬å…¶å®ƒå¹¿å‘Š
						if (!thisTemp.isUndefined(thisTemp.advertisements['other'])) {
							thisTemp.checkAdOther(thisTemp.time);
						}
						if (thisTemp.time < 3 && thisTemp.adReset) {
							thisTemp.adReset = false;
							thisTemp.endedAdReset();
						}
					} else { //å¦‚æœæ˜¯å¹¿å‘Šåˆ™è¿›è¡Œå¹¿å‘Šå€’è®¡æ—¶
						thisTemp.adPlayerTimeHandler(thisTemp.time);
					}

				}
			};
			this.addListenerInside('timeupdate', eventTimeupdate);
			//ç›‘å¬è§†é¢‘ç¼“å†²äº‹ä»¶
			var eventWaiting = function(event) {
				thisTemp.loadingStart(true);
			};
			this.addListenerInside('waiting', eventWaiting);
			//ç›‘å¬è§†é¢‘seekå¼€å§‹äº‹ä»¶
			var eventSeeking = function(event) {
				thisTemp.sendJS('seek', 'start');
			};
			this.addListenerInside('seeking', eventSeeking);
			//ç›‘å¬è§†é¢‘seekç»“æŸäº‹ä»¶
			var eventSeeked = function(event) {
				thisTemp.seekedHandler();
				thisTemp.sendJS('seek', 'ended');
			};
			this.addListenerInside('seeked', eventSeeked);
			//ç›‘å¬è§†é¢‘éŸ³é‡
			var eventVolumeChange = function(event) {
				try {
					thisTemp.volumechangeHandler();
					thisTemp.sendJS('volume', thisTemp.volume || thisTemp.V.volume);
				} catch(event) {}
			};
			this.addListenerInside('volumechange', eventVolumeChange);
			//ç›‘å¬å…¨å±äº‹ä»¶
			var eventFullChange = function(event) {
				var fullState = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
				thisTemp.sendJS('full', fullState);
			};
			this.addListenerInside('fullscreenchange', eventFullChange);
			this.addListenerInside('webkitfullscreenchange', eventFullChange);
			this.addListenerInside('mozfullscreenchange', eventFullChange);
			//å»ºç«‹ç•Œé¢
			if (this.showFace) {
				this.interFace();
			}
		},
		/*
			å†…éƒ¨å‡½æ•°
			é‡ç½®ç•Œé¢å…ƒç´ 
		*/
		resetPlayer: function() {
			this.timeTextHandler();
			if (this.showFace) {
				this.timeProgress(0, 1); //æ”¹å˜æ—¶é—´è¿›åº¦æ¡å®½
				this.changeLoad(0);
				this.initPlayPause(); //åˆ¤æ–­æ˜¾ç¤ºæ’­æ”¾æˆ–æš‚åœæŒ‰é’®
				this.definition(); //æ„å»ºæ¸…æ™°åº¦æŒ‰é’®
				this.showFrontNext(); //æ„å»ºä¸Šä¸€é›†ä¸‹ä¸€é›†æŒ‰é’®
				this.deletePrompt(); //åˆ é™¤æç¤ºç‚¹
				this.deletePreview(); //åˆ é™¤é¢„è§ˆå›¾
				this.trackHide(); //é‡ç½®å­—å¹•
				this.resetTrack();
				this.trackElement = [];
				this.track = [];
			}
		},
		/*
			å†…éƒ¨å‡½æ•°
			æ„å»ºç•Œé¢å…ƒç´ 
		 */
		interFace: function() {
			this.showFace = true;
			var thisTemp = this;
			var html = ''; //æ§åˆ¶æ å†…å®¹
			var i = 0;
			var bWidth = 38,//æŒ‰é’®çš„å®½
			bHeight = 38; //æŒ‰é’®çš„é«˜
			var bBgColor = '#FFFFFF',//æŒ‰é’®å…ƒç´ é»˜è®¤é¢œè‰²
			bOverColor = '#0782F5'; //æŒ‰é’®å…ƒç´ é¼ æ ‡ç»è¿‡æ—¶çš„é¢œè‰²
			var timeInto = this.formatTime(0) + ' / ' + this.formatTime(this.vars['duration']); //æ—¶é—´æ˜¾ç¤ºæ¡†é»˜è®¤æ˜¾ç¤ºå†…å®¹
			var randomS = this.randomString(10); //è·å–ä¸€ä¸ªéšæœºå­—ç¬¦ä¸²
			/*
				ä»¥ä¸‹å®šä¹‰ç•Œé¢å„å…ƒç´ çš„IDï¼Œç»Ÿä¸€ä»¥IDç»“æŸ
			*/
			var controlBarBgID = 'controlbgbar' + randomS,//æ§åˆ¶æ èƒŒæ™¯
			controlBarID = 'controlbar' + randomS,//æ§åˆ¶æ å®¹å™¨
			timeProgressBgID = 'timeprogressbg' + randomS,//æ’­æ”¾è¿›åº¦æ¡èƒŒæ™¯
			loadProgressID = 'loadprogress' + randomS,//åŠ è½½è¿›åº¦æ¡
			timeProgressID = 'timeprogress' + randomS,//æ’­æ”¾è¿›åº¦æ¡
			timeBOBGID = 'timebobg' + randomS,//æ’­æ”¾è¿›åº¦æŒ‰é’®å®¹å™¨ï¼Œè¯¥å…ƒç´ ä¸ºä¸€ä¸ªé€æ˜è¦†ç›–åœ¨æ’­æ”¾è¿›åº¦æ¡ä¸Š
			timeBOID = 'timebo' + randomS,//æ’­æ”¾è¿›åº¦å¯æ‹–åŠ¨æŒ‰é’®å¤–æ¡†
			timeBWID = 'timebw' + randomS,//æ’­æ”¾è¿›åº¦å¯æ‹–åŠ¨æŒ‰é’®å†…æ¡†
			timeTextID = 'timetext' + randomS,//æ—¶é—´æ–‡æœ¬æ¡†
			playID = 'play' + randomS,//æ’­æ”¾æŒ‰é’®
			pauseID = 'pause' + randomS,//æš‚åœæŒ‰é’®
			frontID = 'front' + randomS,//å‰ä¸€é›†æŒ‰é’®
			nextID = 'next' + randomS,//ä¸‹ä¸€é›†æŒ‰é’®
			fullID = 'full' + randomS,//å…¨å±æŒ‰é’®
			escFullID = 'escfull' + randomS,//é€€å‡ºå…¨å±æŒ‰é’®
			muteID = 'mute' + randomS,//é™éŸ³æŒ‰é’®
			escMuteID = 'escmute' + randomS,//å–æ¶ˆé™éŸ³æŒ‰é’®				
			volumeID = 'volume' + randomS,//éŸ³é‡è°ƒèŠ‚æ¡†å®¹å™¨
			volumeDbgID = 'volumedbg' + randomS,//éŸ³é‡è°ƒèŠ‚æ¡†å®¹å™¨èƒŒæ™¯
			volumeBgID = 'volumebg' + randomS,//éŸ³é‡è°ƒèŠ‚æ¡†èƒŒæ™¯å±‚
			volumeUpID = 'volumeup' + randomS,//éŸ³é‡è°ƒèŠ‚æ¡†å¯å˜å®½åº¦å±‚
			volumeBOID = 'volumebo' + randomS,//éŸ³é‡è°ƒèŠ‚æŒ‰é’®å¤–æ¡†
			volumeBWID = 'volumebw' + randomS,//éŸ³é‡è°ƒèŠ‚æŒ‰é’®å†…æ¡†
			definitionID = 'definition' + randomS,//æ¸…æ™°åº¦å®¹å™¨
			definitionPID = 'definitionp' + randomS,//æ¸…æ™°åº¦åˆ—è¡¨å®¹å™¨
			playbackRateID = 'playbackrate' + randomS,//æ¸…æ™°åº¦å®¹å™¨
			playbackRatePID = 'playbackratep' + randomS,//æ¸…æ™°åº¦åˆ—è¡¨å®¹å™¨
			promptBgID = 'promptbg' + randomS,//æç¤ºæ¡†èƒŒæ™¯
			promptID = 'prompt' + randomS,//æç¤ºæ¡†
			dlineID = 'dline' + randomS,//åˆ†éš”çº¿å…±ç”¨å‰ç¼€
			menuID = 'menu' + randomS,//å³é”®å®¹å™¨
			pauseCenterID = 'pausecenter' + randomS,//ä¸­é—´æš‚åœæŒ‰é’®
			loadingID = 'loading' + randomS,//ç¼“å†²
			errorTextID = 'errortext' + randomS,//é”™è¯¯æ–‡æœ¬æ¡†
			logoID = 'logo' + randomS,//logo
			adBackgroundID = 'background' + randomS,//å¹¿å‘ŠèƒŒæ™¯å›¾ç‰‡
			adElementID = 'adelement' + randomS,//å¹¿å‘Šå®¹å™¨
			adBarID = 'adBar' + randomS,//å¹¿å‘Šé¡¶éƒ¨å€’è®¡æ—¶ï¼Œè·³è¿‡å¹¿å‘Šï¼Œé™éŸ³æŒ‰é’®å®¹å™¨
			adSkipID = 'adskip' + randomS,//è·³è¿‡å¹¿å‘ŠæŒ‰é’®
			adTimeID = 'adtime' + randomS,//å€’è®¡æ—¶æŒ‰é’®
			adLinkID = 'adlink' + randomS,//å¹¿å‘Šé“¾æ¥æŒ‰é’®
			adMuteID = 'admute' + randomS,//å¹¿å‘Šé™éŸ³æŒ‰é’®
			adEscMuteID = 'adescmute' + randomS,//å¹¿å‘Šå–æ¶ˆé™éŸ³æŒ‰é’®
			adPauseCloseID = 'adpauseclose' + randomS; //æš‚åœå¹¿åœºçš„å…³é—­æŒ‰é’®
			/*
				æ„å»ºä¸€äº›PDï¼ˆæ’­æ”¾å™¨å®¹å™¨ï¼‰é‡Œä½¿ç”¨çš„å…ƒç´ 
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
				å®šä¹‰å„èŠ‚ç‚¹çš„æ ·å¼ 
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
				åŠ è½½èŠ‚ç‚¹åˆ°æ’­æ”¾å™¨å®¹å™¨ä¸­
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
			if (this.vars['live']) { //å¦‚æœæ˜¯ç›´æ’­ï¼Œæ—¶é—´æ˜¾ç¤ºæ–‡æœ¬æ¡†é‡Œæ˜¾ç¤ºå½“å‰ç³»ç»Ÿæ—¶é—´
				timeInto = this.getNowDate();
			}
			/*
				æ„å»ºæ§åˆ¶æ çš„å†…å®¹ 
			*/
			html += '<div class="' + playID + '" data-title="' + thisTemp.language['play'] + '">' + this.newCanvas(playID, bWidth, bHeight) + '</div>'; //æ’­æ”¾æŒ‰é’®
			html += '<div class="' + pauseID + '" data-title="' + thisTemp.language['pause'] + '">' + this.newCanvas(pauseID, bWidth, bHeight) + '</div>'; //æš‚åœæŒ‰é’®
			html += '<div class="' + dlineID + '-la"></div>'; //åˆ†éš”çº¿
			html += '<div class="' + frontID + '" data-title="' + thisTemp.language['front'] + '">' + this.newCanvas(frontID, bWidth, bHeight) + '</div>'; //å‰ä¸€é›†æŒ‰é’®
			html += '<div class="' + dlineID + '-lb"></div>'; //åˆ†éš”çº¿
			html += '<div class="' + nextID + '" data-title="' + thisTemp.language['next'] + '">' + this.newCanvas(nextID, bWidth, bHeight) + '</div>'; //ä¸‹ä¸€é›†æŒ‰é’®
			html += '<div class="' + dlineID + '-lc"></div>'; //åˆ†éš”çº¿
			html += '<div class="' + timeTextID + '">' + timeInto + '</div>'; //æ—¶é—´æ–‡æœ¬
			html += '<div class="' + fullID + '" data-title="' + thisTemp.language['full'] + '">' + this.newCanvas(fullID, bWidth, bHeight) + '</div>'; //å…¨å±æŒ‰é’®
			html += '<div class="' + escFullID + '" data-title="' + thisTemp.language['escFull'] + '">' + this.newCanvas(escFullID, bWidth, bHeight) + '</div>'; //é€€å‡ºå…¨å±æŒ‰é’®
			html += '<div class="' + dlineID + '-ra"></div>'; //åˆ†éš”çº¿
			html += '<div class="' + definitionID + '" data-title="' + thisTemp.language['definition'] + '"></div>'; //æ¸…æ™°åº¦å®¹å™¨
			html += '<div class="' + dlineID + '-rb"></div>'; //åˆ†éš”çº¿
			html += '<div class="' + playbackRateID + '" data-title="' + thisTemp.language['playbackRate'] + '"></div>'; //å€é€Ÿ
			html += '<div class="' + dlineID + '-rc"></div>'; //åˆ†éš”çº¿
			html += '<div class="' + volumeID + '"><div class="' + volumeDbgID + '"><div class="' + volumeBgID + '"><div class="' + volumeUpID + '"></div></div><div class="' + volumeBOID + '"><div class="' + volumeBWID + '"></div></div></div></div>'; //éŸ³é‡è°ƒèŠ‚æ¡†,éŸ³é‡è°ƒèŠ‚æŒ‰é’®
			html += '<div class="' + muteID + '" data-title="' + thisTemp.language['mute'] + '">' + this.newCanvas(muteID, bWidth, bHeight) + '</div>'; //é™éŸ³æŒ‰é’®
			html += '<div class="' + escMuteID + '" data-title="' + thisTemp.language['escMute'] + '">' + this.newCanvas(escMuteID, bWidth, bHeight) + '</div>'; //é€€å‡ºé™éŸ³æŒ‰é’®
			html += '<div class="' + dlineID + '-rd"></div>'; //åˆ†éš”çº¿
			this.getByElement(controlBarID).innerHTML = html;
			//æ„å»ºè¿›åº¦æ¡å†…å®¹
			this.getByElement(timeProgressBgID).innerHTML = '<div class="' + loadProgressID + '"></div><div class="' + timeProgressID + '"></div>';
			this.getByElement(timeBOBGID).innerHTML = '<div class="' + timeBOID + '"><div class="' + timeBWID + '"></div></div>';
			//æ„å»ºè¿›åº¦æ¡å†…å®¹ç»“æŸ
			this.getByElement(pauseCenterID).innerHTML = this.newCanvas(pauseCenterID, 80, 80); //æ„å»ºä¸­é—´æš‚åœæŒ‰é’®
			this.getByElement(loadingID).innerHTML = this.newCanvas(loadingID, 60, 60); //æ„å»ºä¸­é—´ç¼“å†²æ—¶æ˜¾ç¤ºçš„å›¾æ ‡
			this.getByElement(errorTextID).innerHTML = this.language['error']; //æ„å»ºé”™è¯¯æ—¶æ˜¾ç¤ºçš„æ–‡æœ¬æ¡†
			//æ„å»ºå¹¿å‘Šç›¸å…³
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
						this.getByElement(logoID).innerHTML = '<img src="' + logoFile + '" border="0">'; //æ„å»ºlogo
					}
				}
			} else {
				this.getByElement(logoID).innerHTML = this.vars['logo'] || this.logo || ''; //æ„å»ºlogo
			}
			var pd = this.PD;
			//CB:Objectï¼šå…¨å±€å˜é‡ï¼Œå°†ä¸€äº›å…¨å±€éœ€è¦ç”¨åˆ°çš„å…ƒç´ ç»Ÿä¸€æ”¾åœ¨CBå¯¹è±¡é‡Œ
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
			//å®šä¹‰ç•Œé¢å…ƒç´ çš„æ ·å¼
			//æ§åˆ¶æ èƒŒæ™¯
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
			//æ§åˆ¶æ å®¹å™¨
			this.css(controlBarID, {
				width: '100%',
				height: bHeight + 'px',
				position: 'absolute',
				bottom: '0px',
				zIndex: '990'
			});
			//ä¸­é—´æš‚åœæŒ‰é’®
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
			//å‡ºé”™æ–‡æœ¬æ¡†
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
			//å®šä¹‰logoæ–‡å­—çš„æ ·å¼
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
			//å®šä¹‰æç¤ºè¯­çš„æ ·å¼
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
			//æ—¶é—´è¿›åº¦æ¡èƒŒæ™¯å®¹å™¨
			this.css(timeProgressBgID, {
				width: '100%',
				height: '6px',
				backgroundColor: '#3F3F3F',
				overflow: 'hidden',
				position: 'absolute',
				bottom: '38px',
				zIndex: '888'
			});
			//åŠ è½½è¿›åº¦å’Œæ—¶é—´è¿›åº¦
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
			//æ—¶é—´è¿›åº¦æŒ‰é’®
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
			//åˆ†éš”çº¿
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
			//æ’­æ”¾/æš‚åœ/ä¸Šä¸€é›†/ä¸‹ä¸€é›†æŒ‰é’®
			this.css([playID, pauseID, frontID, nextID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'left',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			this.css([frontID, nextID], 'display', 'none');
			//åˆå§‹åŒ–åˆ¤æ–­æ’­æ”¾/æš‚åœæŒ‰é’®éšè—é¡¹
			this.initPlayPause();

			//è®¾ç½®é™éŸ³/å–æ¶ˆé™éŸ³çš„æŒ‰é’®æ ·å¼
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
			//éŸ³é‡è°ƒèŠ‚æ¡†
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
			//éŸ³é‡è°ƒèŠ‚æŒ‰é’®
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
			//æ¸…æ™°åº¦å®¹å™¨
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
			//å€é€Ÿå®¹å™¨
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
			//è®¾ç½®å…¨å±/é€€å‡ºå…¨å±æŒ‰é’®æ ·å¼
			this.css([fullID, escFullID], {
				width: bWidth + 'px',
				height: bHeight + 'px',
				float: 'right',
				overflow: 'hidden',
				cursor: 'pointer'
			});
			this.css(escFullID, 'display', 'none');
			//è®¾ç½®å¹¿å‘ŠèƒŒæ™¯å±‚æ ·å¼
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
			//æ„å»ºå„æŒ‰é’®çš„å½¢çŠ¶
			//æ’­æ”¾æŒ‰é’®
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
			//æš‚åœæŒ‰é’®
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
			//å‰ä¸€é›†æŒ‰é’®
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
			//ä¸‹ä¸€é›†æŒ‰é’®
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
			//å…¨å±æŒ‰é’®
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
			//å®šä¹‰é€€å‡ºå…¨å±æŒ‰é’®æ ·å¼
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
			//å®šä¹‰é™éŸ³æŒ‰é’®çš„æ ·å¼
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
			//å®šä¹‰å–æ¶ˆå¹¿å‘Šé™éŸ³æŒ‰é’®æ ·å¼
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
			//å®šä¹‰å¹¿å‘Šé™éŸ³æŒ‰é’®çš„æ ·å¼
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
			//å®šä¹‰å–æ¶ˆé™éŸ³å¹¿å‘ŠæŒ‰é’®æ ·å¼
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
			//å®šä¹‰æš‚åœå¹¿å‘Šå…³é—­æŒ‰é’®
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
			//å®šä¹‰loadingæ ·å¼
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
				cLoading.strokeStyle = grad; //è®¾ç½®æè¾¹æ ·å¼
				cLoading.lineWidth = 8; //è®¾ç½®çº¿å®½
				cLoading.beginPath(); //è·¯å¾„å¼€å§‹
				cLoading.arc(30, 30, 25, 0, 0.4 * Math.PI, false); //ç”¨äºç»˜åˆ¶åœ†å¼§context.arc(xåæ ‡ï¼Œyåæ ‡ï¼ŒåŠå¾„ï¼Œèµ·å§‹è§’åº¦ï¼Œç»ˆæ­¢è§’åº¦ï¼Œé¡ºæ—¶é’ˆ/é€†æ—¶é’ˆ)
				cLoading.stroke(); //ç»˜åˆ¶
				cLoading.closePath(); //è·¯å¾„ç»“æŸ
				cLoading.beginPath(); //è·¯å¾„å¼€å§‹
				cLoading.strokeStyle = grad2; //è®¾ç½®æè¾¹æ ·å¼
				cLoading.arc(30, 30, 25, 0.5 * Math.PI, 0.9 * Math.PI, false); //ç”¨äºç»˜åˆ¶åœ†å¼§context.arc(xåæ ‡ï¼Œyåæ ‡ï¼ŒåŠå¾„ï¼Œèµ·å§‹è§’åº¦ï¼Œç»ˆæ­¢è§’åº¦ï¼Œé¡ºæ—¶é’ˆ/é€†æ—¶é’ˆ)
				cLoading.stroke(); //ç»˜åˆ¶
				cLoading.beginPath(); //è·¯å¾„å¼€å§‹
				cLoading.strokeStyle = grad3; //è®¾ç½®æè¾¹æ ·å¼
				cLoading.arc(30, 30, 25, Math.PI, 1.4 * Math.PI, false); //ç”¨äºç»˜åˆ¶åœ†å¼§context.arc(xåæ ‡ï¼Œyåæ ‡ï¼ŒåŠå¾„ï¼Œèµ·å§‹è§’åº¦ï¼Œç»ˆæ­¢è§’åº¦ï¼Œé¡ºæ—¶é’ˆ/é€†æ—¶é’ˆ)
				cLoading.stroke(); //ç»˜åˆ¶
				cLoading.beginPath(); //è·¯å¾„å¼€å§‹
				cLoading.strokeStyle = grad4; //è®¾ç½®æè¾¹æ ·å¼
				cLoading.arc(30, 30, 25, 1.5 * Math.PI, 1.9 * Math.PI, false); //ç”¨äºç»˜åˆ¶åœ†å¼§context.arc(xåæ ‡ï¼Œyåæ ‡ï¼ŒåŠå¾„ï¼Œèµ·å§‹è§’åº¦ï¼Œç»ˆæ­¢è§’åº¦ï¼Œé¡ºæ—¶é’ˆ/é€†æ—¶é’ˆ)
				cLoading.stroke(); //ç»˜åˆ¶
				cLoading.closePath(); //è·¯å¾„ç»“æŸ
				cLoading.restore();
			};
			cLoading.fillStyle = bBgColor;
			cLoadingFillRect();
			//å®šä¹‰ä¸­é—´æš‚åœæŒ‰é’®çš„æ ·å¼
			var cPauseCenter = this.getByElement(pauseCenterID + '-canvas').getContext('2d');
			var cPauseCenterFillRect = function() {
				thisTemp.canvasFill(cPauseCenter, [[28, 22], [59, 38], [28, 58]]);
				/* æŒ‡å®šå‡ ä¸ªé¢œè‰² */
				cPauseCenter.save();
				cPauseCenter.lineWidth = 5; //è®¾ç½®çº¿å®½
				cPauseCenter.beginPath(); //è·¯å¾„å¼€å§‹
				cPauseCenter.arc(40, 40, 35, 0, 2 * Math.PI, false); //ç”¨äºç»˜åˆ¶åœ†å¼§context.arc(xåæ ‡ï¼Œyåæ ‡ï¼ŒåŠå¾„ï¼Œèµ·å§‹è§’åº¦ï¼Œç»ˆæ­¢è§’åº¦ï¼Œé¡ºæ—¶é’ˆ/é€†æ—¶é’ˆ)
				cPauseCenter.stroke(); //ç»˜åˆ¶
				cPauseCenter.closePath(); //è·¯å¾„ç»“æŸ
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

			//é¼ æ ‡ç»è¿‡/ç¦»å¼€éŸ³é‡è°ƒèŠ‚æŒ‰é’®
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
			//é¼ æ ‡ç»è¿‡/ç¦»å¼€è¿›åº¦æŒ‰é’®
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

			this.addButtonEvent(); //æ³¨å†ŒæŒ‰é’®åŠéŸ³é‡è°ƒèŠ‚ï¼Œè¿›åº¦æ“ä½œäº‹ä»¶
			this.newMenu(); //å•ç‹¬è®¾ç½®å³é”®çš„æ ·å¼å’Œäº‹ä»¶
			this.controlBarHide(); //å•ç‹¬æ³¨å†Œæ§åˆ¶æ éšè—äº‹ä»¶
			this.keypress(); //å•ç‹¬æ³¨å†Œé”®ç›˜äº‹ä»¶
			//åˆå§‹åŒ–éŸ³é‡è°ƒèŠ‚æ¡†
			this.changeVolume(this.vars['volume']);
			//åˆå§‹åŒ–åˆ¤æ–­æ˜¯å¦éœ€è¦æ˜¾ç¤ºä¸Šä¸€é›†å’Œä¸‹ä¸€é›†æŒ‰é’®
			this.showFrontNext();
			setTimeout(function() {
				thisTemp.elementCoordinate(); //è°ƒæ•´ä¸­é—´æš‚åœæŒ‰é’®/loadingçš„ä½ç½®/errorçš„ä½ç½®
			},
			100);
			this.checkBarWidth();
			var resize = function() {
				thisTemp.elementCoordinate();
				thisTemp.timeUpdateHandler();
				thisTemp.changeLoad();
				thisTemp.checkBarWidth();
				thisTemp.changeElementCoor(); //ä¿®æ”¹æ–°åŠ å…ƒä»¶çš„åæ ‡
				thisTemp.changePrompt();
				thisTemp.adPauseCoor();
				thisTemp.adOtherCoor();
			};
			this.addListenerInside('resize', resize, window);
		},
		/*
			å†…éƒ¨å‡½æ•°
			åˆ›å»ºæŒ‰é’®ï¼Œä½¿ç”¨canvasç”»å¸ƒ
		*/
		newCanvas: function(id, width, height) {
			return '<canvas class="' + id + '-canvas" width="' + width + '" height="' + height + '"></canvas>';
		},
		/*
			å†…éƒ¨å‡½æ•°
			æ³¨å†ŒæŒ‰é’®ï¼ŒéŸ³é‡è°ƒèŠ‚æ¡†ï¼Œè¿›åº¦æ“ä½œæ¡†äº‹ä»¶
		*/
		addButtonEvent: function() {
			var thisTemp = this;
			//å®šä¹‰æŒ‰é’®çš„å•å‡»äº‹ä»¶
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
			//å®šä¹‰å„ä¸ªæŒ‰é’®çš„é¼ æ ‡ç»è¿‡/ç¦»å¼€äº‹ä»¶
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
			//å®šä¹‰éŸ³é‡å’Œè¿›åº¦æŒ‰é’®çš„æ»‘å—äº‹ä»¶
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
			this.timeButtonMouseDown(); //ç”¨å•å‡»çš„å‡½æ•°æ¥åˆ¤æ–­æ˜¯å¦éœ€è¦å»ºç«‹æ§åˆ¶æ ç›‘å¬
			//é¼ æ ‡ç»è¿‡/ç¦»å¼€éŸ³é‡è°ƒèŠ‚æ¡†æ—¶çš„
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
			//æ³¨å†Œæ¸…æ™°åº¦ç›¸å…³äº‹ä»¶
			this.addDefListener();
			//æ³¨å†Œå€é€Ÿç›¸å…³äº‹ä»¶
			this.addPlaybackrate();
		},
		/*
			å†…éƒ¨å‡½æ•°
			æ³¨å†Œå•å‡»è§†é¢‘åŠ¨ä½œ
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
			å†…éƒ¨å‡½æ•°
			æ³¨å†Œé¼ æ ‡ç»è¿‡è¿›åº¦æ»‘å—çš„äº‹ä»¶
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
			if (!this.vars['live']) { //å¦‚æœä¸æ˜¯ç›´æ’­
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
			å†…éƒ¨å‡½æ•°
			æ³¨å†Œè°ƒèŠ‚æ¡†ä¸Šå•å‡»äº‹ä»¶ï¼ŒåŒ…å«éŸ³é‡è°ƒèŠ‚æ¡†å’Œæ’­æ”¾æ—¶åº¦è°ƒèŠ‚æ¡†
		*/
		progressClick: function(obj) {
			/*
				refer:å‚è€ƒå¯¹è±¡
				fun:è¿”å›å‡½æ•°
				refer:å‚è€ƒå…ƒç´ ï¼Œå³èƒŒæ™¯
				grossValue:è°ƒç”¨çš„å‚è€ƒå€¼ç±»å‹
				pd:
			*/
			//å»ºç«‹å‚è€ƒå…ƒç´ çš„mouseClickäº‹ä»¶ï¼Œç”¨æ¥åšä¸ºé¼ æ ‡åœ¨å…¶ä¸ŠæŒ‰ä¸‹æ—¶è§¦å‘çš„çŠ¶æ€
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
			å†…éƒ¨å‡½æ•°
			å…±ç”¨çš„æ³¨å†Œæ»‘å—äº‹ä»¶
		*/
		slider: function(obj) {
			/*
				obj={
					slider:æ»‘å—å…ƒç´ 
					follow:è·Ÿéšæ»‘å—çš„å…ƒç´ 
					refer:å‚è€ƒå…ƒç´ ï¼Œå³èƒŒæ™¯
					grossValue:è°ƒç”¨çš„å‚è€ƒå€¼ç±»å‹
					startFun:å¼€å§‹è°ƒç”¨çš„å…ƒç´ 
					monitorFun:ç›‘å¬å‡½æ•°
					endFun:ç»“æŸè°ƒç”¨çš„å‡½æ•°
					overFun:é¼ æ ‡æ”¾ä¸Šå»åè°ƒç”¨çš„å‡½æ•°
					pd:æ˜¯å¦éœ€è¦ä¿®æ­£
				}
			*/
			var thisTemp = this;
			var clientX = 0,
			criterionWidth = 0,
			sliderLeft = 0,
			referLeft = 0;
			var value = 0;
			var calculation = function() { //æ ¹æ®æ»‘å—çš„leftè®¡ç®—ç™¾åˆ†æ¯”
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
			å†…éƒ¨å‡½æ•°
			åˆ¤æ–­æ˜¯å¦å¯ä»¥æ‹–åŠ¨è¿›åº¦æŒ‰é’®æˆ–ç‚¹å‡»è¿›åº¦æ 
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
			å†…éƒ¨å‡½æ•°
			æ˜¾ç¤ºloading
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
			å†…éƒ¨å‡½æ•°
			åˆ¤æ–­æ˜¯å¦éœ€è¦æ˜¾ç¤ºä¸Šä¸€é›†å’Œä¸‹ä¸€é›†
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
			å†…éƒ¨å‡½æ•°
			æ˜¾ç¤ºæç¤ºè¯­
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
			å†…éƒ¨å‡½æ•°
			ç›‘å¬é”™è¯¯
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
				//æå–é”™è¯¯æ’­æ”¾åœ°å€
				thisTemp.errorUrl = thisTemp.getVideoUrl();
				//æå–é”™è¯¯æ’­æ”¾åœ°å€ç»“æŸ
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
			å†…éƒ¨å‡½æ•°
			æ„å»ºåˆ¤æ–­å…¨å±è¿˜æ˜¯éå…¨å±çš„åˆ¤æ–­
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
			å†…éƒ¨å‡½æ•°
			åˆ¤æ–­æ˜¯å¦æ˜¯å…¨å±
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
			å†…éƒ¨å‡½æ•°
			æ„å»ºå³é”®å†…å®¹åŠæ³¨å†Œç›¸å…³åŠ¨ä½œäº‹ä»¶
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
			å†…éƒ¨å‡½æ•°
			æ„å»ºæ§åˆ¶æ éšè—äº‹ä»¶
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
		üZ=„<?î£L[ëÇüèsÓéÂùÚÎc~êëÖvÊgcdG	d¦¥sœ!$×½0ò‰ğ¼‰.fÖ2İ¶¤Ôx…×gçv¶á,'+–Hxj0í«TVxfEıÑÿ™ S±{g¯ËFÑ>$ÅGRDeÉw'p7¾»éZ!]îS—ïV×@¡ËñûL§Q{øo5Ì†Á·Áàú.&8•>p(û,ü@^_fíLŒøÃA©†1ûŠG°¿Ñ¸[˜”nv.öC¼¾OäZ© µŠDÆh½Pö²¥¡“¢Eb&D”ò,g›¡w®.×,-qšl ¶N«Õ¹TÿÀf2–ôŒ¬dı;²¸s^İÚµ÷Ç‹Ô¿ñÈ³>XšK¦áNB†ñòk3ÌÔ¸nŠ&sHQåÎQ’j{˜Uyı<“ò†œÅZ5’Økú“ê”†\çë€ƒ

0Ù²h”¢·*ñmE cÏu¼¨_×Hç¦ï‘-ñô£4tªõ¢c”6SÃ‡Yß÷Q”ìùb;J³P–Ş²©Zº²›ó°<kuş!Ê.¶·WÔ±½×'ŠVJl9¯lJÚBâqJÕ,Ÿ{ô>wryzGª¹‡¡íµ-e%Chjp¥åá_}0U½
şÇ¨«Ìu‚Ô°$Ğîéú„êºB¼ ª¦,ó¯”‘a(wŸ›hp¹&âJñUAÅæ`–¶…É?d‰»„ìŞ‰;…‹-gk´R{.]iUYvuäìê{0·:œ^WOD‰ì ƒş%ÍÅå¶ë6ö¥9V¡IşéÎ/ñ\x´êÚÎnğ¨Î”L!~?Eë—GBpW+3«(3åóuí“’
s…Ø*êã±­  °~×Ëò«“ŸÖüe&şş·!RMÓ­múìÙ†cîIÊ¸ÚqH¹âÜcá¨èb/âAPL:l1‚¬,ÿnB&è¹¶pÕ‘ÓÅ&Ót	”qzŸR¹}V×QÿT ¬c >•g† İ;a©ˆEÖ…å®ú-çë°±*Èı‘“Î|ÍÙlúpw*/Hó¾œ¨ ñ¥-|¼¢6
x¾éN5}P/>í+0A\?•')îÃ£XzÃ]¦%¹Ô9n‚UTŸLôg1ÿ÷
uŸe@|í1oø4
†µ"T©cÂa‰Ùw±©¸òNæ[s~Oğ7A±?Â÷ì‡ùKæ7Ş 33û]qõùÅµB~}> 	¯uÈõÄİåÍ'b¯¨µåoÌÃíb¹ì&^Á†âç€ßèÔJWùãƒ×Ût-ˆ6>×2Eé›³_	ŞíŸØ‰Ê Úq&Jö²#÷ï×ã½)Ï†EËcB³yZAlŞ¦QÂÄz¸ğ,ò·£³|BşÁ!è&Šö¾®GµLÅLãêgæ´“ÈDcSöº˜x–úP H÷Z.B‰WOh&„Ï|ÇÛà˜ıV „@q$o^!İbĞx£|‚qy$ŞªJ…v_†¯ÏúZ€Eîæ §ÜhbÒr=b"c7q‰j9Ù,68¿3b™šƒÑœÎvá¼Šƒ¯ˆûÃˆ•ÊJ¬Ò;ìŠs•ü¢—'AËÓÔ'm½EDr¡‰™|ü7”¾	=Œ2YNyr;Bâô­×®Ö£¬HwMÔÚÓ´q"ÀJ«‚{Ë-¡ô$ˆŸ÷¨”(£ƒq÷&58ŞuÉE5)œo‹Syó*}¡ÜrJå•½^ûfSı•êIÂÕÑ?(abO“Y®¯#Ã0±qKÏÓwÇØ2ëŒåbÕÅhÌüæ|JãšR“÷İçQ¿Œb ãDÕâÇTüDEÃh·\•kX"R´g+
N-~¼´æ©1¡‹z=ôzx(¾¯ã(±+FèÔ·ExŞ:ªÃãaN´áÌÆñá$f­^æëBì´¹/t÷ç–t£´¶ûA„¶à£C*›0^|M©Viüg«\¸ü3%Ì§´KTl¹#¸n¥\³ûRõqóƒ95ˆ=vw6ùbj¿lHf¤RöÒì¥)¶Sî­¦cÌî·ª½ßƒƒ¹ëLªÚbÒÒY[Ç0MOŸ+rˆÂùPÔWŒvâHìŸ¥:vn¨l£ş…CåÑH€ÓW}ÉşÕ«·k—À²¬cƒè 8tş¸Ÿ_ÊÏğÂÙõ²ìşî6B#wª§Â’¿¨eëDmô+‹»H™W¿¦QàjôpØà¥`?‘İDB¼H*B/§]qG$y¨fù0)„x)qÄ¬øY)C#¶¯½§±İIP:‘ƒ:1 6dL‚ 8C
§UäùÅ…yšÚªX"Ä,¦LTµ4iObim,èwå_N“Œ¨11.35Ãjdô±4ºƒÆW<‰‘‘³züäù•²ÿ®1xòH÷"ô§z‹T2“€~Õ¹½$—öY³'œL…«Æ½Ç5´…WüâC2ÖF”ªÇ)ÄSNw+ƒ0¬}!ÓEàÛìáO`†İ]½K8¥á…ë»>üh¡×jê³¸¤Æ­8¤ì#APz»‡J3fÓ=óŒ¡üp“8D
[?ZÁ]€?úv’Ÿ [«+2íªø·å§÷ODRm »J¦M@ühÌ…Øş=‹³ËÓ„°•ÕDŸ«ô…ÿ’ë€†¾KJ`Nr•ë›Yß«j h:3B/-‘^•î;±Møü ²l`ÒĞ!@‘ĞÈ”¥e°]	¶ŸZ”n!ÅŞ7/ä§´ªÃ–?Òò°]èmuÿÀ$O¦F¢È+6 ÌÀ\Lñ°‰†g­º×ZHïŒŠÚùé^¨¡İ³7Ö$»J¡õQA D@ª&ÕáA‹W:ãkzízó¸9‹D¿r—©yJŒĞPØô	"ŸÑl®¹z€ş=%	HŸĞ´ïÓİÎ‹åk{GmM±ğòpY¢¹¸~^¿Í˜õ–N¼w?roQ°×•t“b¸gbJF?[ÿ¤
ŠU[Ú@QÛù­€È¥˜¯±ˆ²ŠQa¼&Y‘"$IQ`Ü¥zpuá¶şûiFY·6‘ÙFşğ#+ëbN@7Ì06fÁ;(İwæ®,lTb~±Œ¾)âX«Z¿ÏçşuÀËúvìZ8üP7b	‰ëš8cïæ 9·Ã\IÍÅO‹J}ÛımÕLRTf 3¥ÌT“¥`Mw#äàØ–¥üUQóÏ}A¡¶rTVşÉıàæ&ªcÓ±Œ œu·CM15(’­î“(È!Ñ_8‹qtÒÛ7êÀÍ
ö2V¡9QHî`­çõÃò¦AV‚ÿ×µHòHPadù¦N•®d™Ô^­Áí'`!L×ué'ÎdQ÷*¼†Œ§å>gêHD7]«ı‡ïÏDj+	™şİRÛøšS¯í“…yÆËøºğñä`¹ù€	ó'¼jffL—úMı Jöq•¶‡r4ıˆ¹0¸ ÏZ>’¦¦dDº¹˜IKÂ`ùh§?ï@c"ONfˆ<¸›Ö•k6KğcmS­‘$Qxÿ!¾j£”:~ÔÏ­*å—vLÊí¹(õ5Æ¼~ÒäÄÒyK¡´’Îujc–¦ÀFœ©™/¶âBniN®µŠøáaiLŞvz«ûiy·¾«"ñzŠèì—‘(w0ˆûˆ711^• ×ik¶6U}b?z±—äj$”qªèÀ·1ØÅv]ˆE’jÏ¡îúİB\.Üö›[ ·ÇŞåpBÓN­ñ* ¯ùêM©Î°Ñ¢hn˜¶¬t&ìÔİ¥go½Ê>dî‚,~IÆè¶´ÈÌöÄ&Œš¹î©;1u$û8õ’ë¼©Ëú¸C)]»¤ò]2ı$`q¦å\¨ƒ1O¬xÌÙâ¶¡Ù5› éŒñ€Ü"âù]r\ßi˜ÇÆV@§ŸÚñùş6ß×JìŞHİğ:‡xtÍ#ã-£1µ«°ö‹u ë‰äŞVÿò1*›ÿí_(á`ãıİ9Kq	?-’¯õQ—Mö5Ja˜^pš™™ø4ğ\dœòu@9œŞÄ â¤||WÂ‘ƒc\õÀ#×q<‰¡áU×ÿY¡Œ¾Î™ÁBr¬Pô ^|2€Âü"­7á”Ä`!&Í¡¦
|‚œö®÷'$Úãëô’ÇŠ•\Zõ‰Pâ©şyĞQ£ƒ‚4E«ÚÑö8€Dwe¡7‹¦tı1Y¢ˆ«Ù† ˜~ş4Ûªp¦ÌØbù8uê6‹*KİXüÖN›x´ˆ=nxÃQ´'{Ùğêp\–{ŞKè ë'j©ğM3w]²ï(óµFq½€œZTç®ù©—y ‹ù2vLI¼ü%P’ù·’¦¤	°'1 ›f=:œã6‚"!ãDqö]o½X„O‚€{Ûn§¡õŸgäñTª=ã‹(LZs-ÉÇçA§sköö7¸g$.©]¢µ“T»ÖÅ6:ÒÆh:G{8¯aåğä‘|:–¾·3ÏG±ÆäÜÿ—èØDÔ›üıcaœcı½„í7íëı9fv&\ƒXf•OÁÉONn˜œ˜X‘â?o®ı6Áh´#À¨Äè/!‡İ‰¼Ów“§LÙV?ÕÇf›]ÀÚML›vŞÜœäèf³4@(¸nJBG‰%R—+T{Pó:;CmÈÌ˜?YEu ?:i½ß€IáXÉO\€4ŸüŞÕ[;':d%`pvî[ŠÆZ3t¾$&.Úã}{à&³ò[
s|î',¡â\—Ù¬{òèé{yÔÊš9¯(ùµ¡ÔÊ£[Æa•‰Ú<zªò¦ÛŠ·²#©Ÿ5I¬¬°‰Åp<Š©LÛd˜êk”Ü¬ó¿ íÆĞXĞåLAßœQœšqØå©Áî*d_Lëêû­'›„ÀîÉŞ…øE´/mé,¼ÀğÀƒjq&Ïë'‚Ú>TTö+	÷§	4hÔ¹8©zïKcn«0ù¿·è çw„™ª¯‡OK—¥_ßét ŸA´A`] +oôyÙ“Í«xùnZËÛé.Ç&/sé\?&ídÅwA\¿ åB%¿Â JˆM)K¦(ËSô¡®JËG9 Ä™ijt›µ[WÔi;ûÚ³y Æ¼öaújNV€büD4:T€ôûLËóFâ‡e0{q#cŒùQ¸ç5‡™Î5ìêI„+ã¥­#{l±;z-é&¾ÿò–7‚¾²Ã4ƒa,sLÉzo^pL>Öda··†ë¯»Õ€hn/K¼H‰S]OğšÃû»m9R[Éñ…6şH½Z¾ø!l‡˜"¤lƒNF3‘SÍF2W­Ùƒ¸`áò’RèBùÀ3]Û£bàòs ›yÅ«ñûı(ì@º€íÕrâÈ.§
$G-
½»Å³å¢i< ø:ÚgIö¼iŸìO·vÊ<{J=úcû–+Ü~Û.zBoX±iiÔ¸HğÛ*ƒÜÉ@µP¸Òc4a2q¢,»³	(ö«Ï%¹ÕË3´ZûiØ5æ6 UÔ²é8ÕsâÑ—4×º„PÇÈ[ß–g•q”0Ph6Ó8ö%–sS¯kË3J¯ç/T Ò A­¼¯†SÆÄ.½²i€4?«›aDp®hLåÖõ˜É@şÚóúñÁŒH
Œ¦/ì4ÑÃkZ*ŠªÏeô²¡hHÒ»Ş‰Y~“˜•`½DSí:‚uõpËzûîÉõ)|÷uWÚØ d…½Ò)
>wÌ³ELå+d y­5^_Ñ@U(|5Yiì—N ¾š6 7ÒêÊMÒ®¸¢÷D”jU¶I8ÖHp±aÜ:n æÊ¥êô¼óÁd!–Cw ³O¿Ÿ®Ó|XÊƒJ†å¢mÇæÊÌ –áÅ”Vºê^PÂ—R\Sa²&yÖxŒk´¤â¤.šzù‡fa+?SŒ´Qã“Ù€åß‹}šMƒC]æoÁò©®®ÄµtónİAgßeËokÿV2’58®•Ñïƒè§"ªd„Dc¢ËüS¬(Â¾ ı•ÿcFææèëµæ¦ 8	Ø1¢†ZïÔùƒÉó‡´è_4´Å¼\»`.¬àRåA‡ƒá%gÀƒN1ù¦s“ñ]W5"œM6¬¡ë"	*ÕtéÍ»QÌÙ0ğ1‡ş«³'kav‰a6Ÿ²%•;ÿ5Tç®½¡¸"WÇqRĞ[³$6¿‰á¤ æÉè|SS">¢¸„‰§°¤]oú îJ¨íó1&â0Ô–ª	ÏÕÀ°Ìï–S}€ïïçË‰BT¡î—aøë‚~EÇpAË!¥ ˆšd»Ó}3¼G€l¿I¹¾¸Óv­9íĞqâ3‡±”õyÒf)ğÏÒ°[ˆQr„{iPj¼ƒ•2cªAgò¢Fı¦X3Y-Ê›¬gÍ‰ŒìHZÜw]g“8Ûí>J7ŸyÂ¬i?mFjäx÷Úrï2£ò"TÒ£K6%³ J¢1Ó½R‘q4ÃÂO½¼„­ LŸ»wéì„±¡ÅXjˆÙQµÏ~ëà¥õ ßF²E§´WCÙóZÄE¾Ãí±)LˆhÉ½¾ ½y—ÚÉÌšß”üÇ‚iıåêÈ!ˆñ©%nÃ˜ÇfñH×C„î8*bàoOE¦±´³ş¿]d‰»;ÔŒQjm{ø—|ªæ"	[máQŒ(ƒ¤WQKİï!'L©`å{ÕEcr¯½E:õsA-ß=ñ6"OÈ$<¬) öhÏ{æ“&àæ”IcÈ‹À†îÏpSñC?Ìµ¦ÕByÏNÚcwÿY8Ébqç¦df”M÷ömµF8ÊŠõ
ü9‘Sï](¯|
ºâ†se¬' Œÿm!=ƒP| 8­v–úRÇ¢5ÉÅš[DX’ôoĞ$~tŠPò8iƒ¬ToŞ¬fãÜwÍˆÈÎ#ÛK/F¶ÃT/Ëz4:”­-úØ"Q­gË$h—¨Ü
}õ„[½WÚ<µYôåµí„ÿ¥Ë,R&÷¼è‘ßåé¹ÕU—-¸Ù,yÄ¸f5^™àÇÅöÑÌXîcâ0,­´¼ñ]Õv±’@ç×±ÆCCŒ=dŸ=JY®zåÛÀª;Kf	8ßé¦v±ÆDY
K¼ĞÓèP6ŒÿƒŒÙÊÊGê§°ñ#¹|&&P9È-}Ì<QÖòë¸ğØk¢+Iãš¢Uc¼A3#l‹ÓŸ›(š•…#¹3Ó›¢|Yœ×_Û˜ÙšOÊ÷†#LÂ(™*)sÓ¿’¨Š‰~ddé'hu‚ôÇš€€qwÓ	&¯M.x³ÂéI^¸ñÅúÁJdWØ?ˆ4é}H ¬$àa„„!ÃûŠÏ#Œt´&ƒ:ê˜?N`ì¤u_õÜñ*YLC·óØfïˆ=ò¨¸WQ?]×%ˆÖ€_g:ŞÜ:ç@Äè!i–ÛÑq,ÚvÍ°¤I¢ç™S–zC¡é„¾S]E ¤ğöt›*]9ğá¡Ş*JJÙ¤u¡F£iQ˜çÖ7MüD¢‚–C©ö^ÃãüÚ+“D´ğÄªßu·ã ;ÔĞ¹ÄıF®„7—ÜY¬JĞsñ[ğÿÂšæúä.Ğ Ó{%‘ufâ¬L	Ö¨æk–ğıo3OV—&˜ºÚú&§	qUÌª@·/™Kèâ@ÃEŞ?®cH/»ûˆ÷Dr0!Ÿ‰g9ÀìÏó“ä1¼º“+¢Ö0Á+úv 6Ñ|²‘méáö|0Î‚€,åùË¸,z)*BŞ8	âç|¼u@.ŸWz#ßfÂu61şy¢¼ÔœpõSE}*VÌ¯Í$ìÊz‚Zeşúè~D¶9èì,pÊÌè{]húµƒË—Õ0ôBdYİ£xÒ'Ì~ÃŠ¯bº€‹L ±ìI0+s1Ø]qšq9Îò2†d T]¸Ê&9š½Uòúµ5N:¦Î£–(B IXÕÏ3åööëô*TçæñZŠµÄF¾©QŸáKqvFÁ½íê G¬ŞÓLÍ¸HÄ•pMœK´ÕÔ¶@[aıôŠ—_9õğ?M´Š^ØëªbÙ~¸ŠÈ+ò}R$ùãyÀ5ãKL‹Pì;]b(<ƒxz¾ˆëÆœTwö^_(×”:Ka=™  ‘'ÌñÎäÙÛ@š—æe¿¯Ó„N‡˜”	@,‹”ì‡êüj/^:#€¹#yö:	xÍ
Çá;O¿y€röQÚkbKäšÊj$İ0Á²+ÊÉûšfã>8 7™kßJoiÁ”¥Rx‘5XYï¢üˆÉŞÊöGVšq#‡KİˆÒ£êÏ ”7==
øBBœ¯„’ÿÉb˜*RüÎº³¡œ@]ø–ÿ.’ùûÀM@‘ü¤<—Ù‚öŒ¤@vŸÃ‹•¥R)	O<Û!ÔS WH®P$ìB+¦¹!§¾EZrqáóŒİTQ:€_”º.¾Hnß…µyÂ”Ó„_GÇ]7!˜gÿîA\ûÁÁÍËÉqZ¯¨¸_ÿv‚¼Í™6`»á*p”eWKI(3È>Ş¯ÓÍQCc®_D©V÷^_£È¶¾~’ŞÚØTj÷AÒì¥‘ŞrĞa´”§šjñÊŸ6{¤<ÅV…sÃ$W®¯ÀZyz¢ËÖÄ¥­ˆt/Ãwîä¦œPÄæ1”ãœe@l‹+W¥[Ác(Âç;çôtÍ»]¤ÓDzà=ç/·QšÙZ ŒFf"ãl¯ª¦“ ¶¨ "¶~oa1/ë]5 Æ^‘ì&ş"ĞÎëI·å«iö!µjüñ5ƒêU8ÛQÍ©¿º8ÒXg*‘;á^wzÆPH Å‡øÎ¬© ª¡ÛÎ,½/V_|r`ÖxWVã3
ÊõduZQ°š ¤.*ûko%émÄu³	1ÎVª+@ĞÈ¡ÃÂ@ÏÅ{3ï¯çˆO¶X)S"Õè¬zõÒ™Éøg—ŸŒş Í×ÜbáÕk»ä¶#çUEØ¢â9å#>³.K)€5Y\-­P¾pZê`üP7;©@Î ë‘MßtÃ"HO‘ÉÅ.ŒÚ‚è¡‰¦€]ãO0ÅvUÎq‰r,F†jÅª¾µşĞˆà]sØ—B¯ê¶†/wd^¹::€ßq˜c[DsÉ[%´¢™ğ¿)ÓéZ >E±<xı;×™>(úÒw'Ø™úöÈà§1XÆGÔ¦€ã…ˆÙ©
(_‰Òß‘äÙ$
Œ-…¼há¹ÇàpØ71úİnÂÉ£QÃ”Ù{—0Ş‘Ã30·ÄŞû5xÇ>ğáwnÒ³Lÿ"VB°‰ş2üA”V«¸.ÖäMFH0‰_e¥Zd*ÆùÏâ(«?j”rdëd®˜'ğ˜ˆÍ	¢‚ìR¡w’q¡>R{Oê1HVÙáñgPâVfHo‰T,8®ÓW…şJÎé{Œ:¿¥âÆk ¯ì"l?©óz§Õ2Lí ËòŒĞLãL:³ÃÓy›:o{’kékº_j PZ p¡+PéĞ»ÉàØùêÿG|s½Å¾ø/ôÑkô+Ê76H{+¨ƒ„Í$¨|‰!-m'6VÆqº»¤ã`kcòÌ—}p>CgMc¤O³n?ÙCO!S§9ÇÕğ½gÊÍëÄµ_Ç«5;c,Î\”9P}©ì_1R¤T¶;TŒ½ÖúÙA2'–P’Åşï-Ô{[
Ò‚¹¾©&)³b‚¬·H==#ÔL¶4YT‡¤?´ÂÒÒ'­psôÚL^Ÿ=Şdœòçß¾Êùß
™Í£"úHb˜D×‘ÊøLùAÛÜCH{ŠÃy÷}úTÓ¯½÷«ùDK–>Aø¥¯;¹³¤†˜Ê‚“ª.Ø*NÊ'½[SÜ¢3ğBú `’µİi/gË™s%@fÂêù@0Èãñu¢öÛXŒIlœ˜ñó%|>[¾³~…n‡:ÜÈşöézÎªö˜´Bö`Ä†D67¹ğù¹‘¼¾;É5pyl¤ğ8ƒŒÄß¨"Ÿ=àğàu€ö<÷Äs~•‰_!ÖWLô	ŒøuBÃÂ¤[O
hØh‹œiÚÿûÙOÆÆm`±[¢II…Èò‰ãï¶ò8	QxéÅƒßË!€¡ÈEk;gÊ>átãç£\Ü¥'İ}Z-w¿nI^Wş«‰àbø"º_Ë´Ñ‰yûƒ2ÀÙÕÛç_‹ì-E[‹Ü—a{QD s~»ÃG¹”F‹À!¡ß~œõ
?ÚmëM8‚~ üÒ"©ÑæœZØz ˜>‚¸î<{Û³02EğúGUAÒ›ğ˜J¦—ı$Za¨¹àKzŠğ¿2ùñÔU„«ì;ª™µmòÜâˆ•7!˜§örÄî©foø
VpÏª×tÆí¾ó›98Y-Ã5b3púÅIk4êj‘dÔ¢Õ€Y\ä7øÒ5“L‡Ö2•L¤s×mK ]Ÿ¦…§‹@˜6ùE·C.ŒÕª“JáNş6AéF,¡°j´ı¨HÀBó¸˜F&úãx…yÂ@ß¤Ï5üŸ w¼[Ï¯ìïçNlKÓÉ«5ÄÁKGv`_Zlñ­ĞÅşPf|Äİ’eƒ˜É†t‹?¡ˆ~kF7[j…ú~üğ£L3'7Cğ¾ıF•G@ËTnÛ\òÒ×D,¨„ì60È3;È]Ígù £ ¥j+|üÑã•ULG¼“VwÅˆÕ}ºÿk"ŞYş­[²ålÖşåôq–Òu	Ru½û¸O°\|RHE½îFÅÓF‡BÀ}&¼kuÆ‰•]æÍñb‚P
/yŒ€^83‰À}‡“àmê¼:kš\;h‚e¨e›dÕ ^&Y¶CäİŸI0ããhùõw¬tNŸõ^K¤u²öuß'H£
îe‡ôÆŠù÷ïÕá¤A½°ñE/cŠCV*Ùö<n<%›8»y°Æªô Ø/2Ûõ‡¼©œ™ßĞ~Ó0s‘º©ØÖ\a%Ç«ûÍ@sµó_$¢­ÏÄY8Ù…Û†•Q¢ûXd]ê
«È»|çßx.7–ÎT>„{Ò¤€SÏL¿ôjtÌ²:t|ÕgÛ¿KõºÅOõä–|®TKU})"¯Ò—ä–½7âß”UÄñ°km­ Æí•:dœá_Ã
œ®@}_àæÚÿvè!(sêQÉûA¡»¥Ã9|}Ÿ“+Í^§të§y6è•5]?Ùæì3’t5Ia°{Jìkäd¿	ŒóõÏzmÍ½¯Z7o	9g¹‡‹´·3Q8óq´(…¥ºŒ?¤arº"›ü‰P#‚Šğß<Ád¬=oD“µ²`XVğøIŞ
Ûï9 (PP>ˆeÅ­£ã¡	 }™@š‡Kb!‡ùÒ…oSÚ£½mô·0˜É1Ğ®I8B8¿L½ãk÷Bº€ ™‡Şœ×s=9‚ˆ‹L~&`wŸ	bÛŞÏ$3z¹, ¤ÂŞŸ23M­İC_h‰
Ü	O ıÀ`T˜§Xç•K¨9Æº2üNkÍíHh§¦¶™'<1Œö©4 á¯ïQ/¿O, Av|´½œÂªL&bú.©®¥J5Â˜Âs–Lèj§-Ö¬c	„„Ü0ö_ÜCl× áê¨9Vc&s†‰Í‡W)ˆÚ‹›olP6`íD“WbL¤M5–ƒ×€Àı²$éé’D 7àS˜ğŠÏ;¯¹,PŒdccpœkª‰QÌ[7º£àkNÔÙÎuFRÓÜDÜ«°½bô%?aø2Ö³Ë³^q–£ô´,ÁPŞW¨ï™ª³v~¿°+ƒÎã’S„±)ğÿ´(îp‘ -l8~;Ã>ßÙB^m±}˜
êêz8– ^CÖ¡C€Æ©Ànº$`!:8¾sØ±ğ:ÁÕ|Â¼ntëhƒšdâÓÀÔ/éT½_ÙT•Iš«RÇºêô¢çt?¨ÂZ–Œ$Z|\³J|ıT¿NÍ/	§Ş‹š„tHrI#(¸ÒZÄš—0ÃÊ³|‰ÅÃ’íL
Y¿QÛ8~—‡Ég€lÚĞ¤-2¬OÙšxÿJ·ßi_NK-J{”$ç{ıMúñßõ¦xáoÈ³#RË Jdá0>_CÔ“W“š@V½ÿÜÆ `wiŸkªıa®:ßW4­Ç˜¬Ñ»qU©s¨#;)‡rD #h»çõ4–çÔüà¡î/Z%'³×h~Öë2®n.â ¦Xô~¸ê!aæ]_ºˆWi—¬if²1¯,ËT}k9+šİ <–èÆ0è×”Wéùò3v»oˆ9Õ->0¹)a…ñ‚Üà¡¤¶µü“|Ít¶dP{ZŠƒ¿İ-Œ%«o3‰3¡±œŠÉÑ[<3z”yu‘í^ÌFˆj°mßä¹Ò™, [<DbHõÛÓŸÊ}mÑªÈdÄëç¶ø©7I+q3¾½¨kYyà¥“Y¯[¢å9–e%¨]>s “Üú`˜‘¹¤VD~F1¹ÒCÂ6;¤Ä.»Ó`Nq9Já|Lİ/Áæ89»ú¡A¢“LÊÈ<|r2_õN$¹N[vb^e?¬½³Ïit~Y¬4ñV8fZ˜ş€Ò$ßŠ‰;ÎRÄ»¯Ï­»
Œ¸°l5íás5dr«Ó°¸fü0á*j[F®´>9w?·…|!ë4Û¸&8³ÂJ>°Z+dÜìÎŸ)´I«Íföä¢~Z²Fíë’¥<UĞW­®èâl`³ˆvÑ u
´ß%PıÿÈ‘N0TøC[&Ÿ (ß_I¿õ¾ÕGL¾úÑç¤¿cøé?-6Nìa©£ #ÁğûŠ´0â‹Äkt!ä.¤µ±^Ğaµƒ$oß³J DI,|ºYoğÔÈ=[ò4h•˜AÚşÜQ¼ôÔ‹v¬2<ä¯Eş—±Ü§Ê1\]µÎ	ˆN®p\oIëß‘ÍÙÁó'HI_oï03öN;O§í\À@Z24-Œ‘µ7…Ô¤ÊÉT¢ˆê!¤ƒi¥^ı–(º4íØU"Ù¶ {ös[µnrO]ª='©ì‚@‹8~oIÒ‰í«Qrıè ^qGG9/nE|·ÏV¶À¤ª‚ u¦Kû:‘ô\ûãWe¯ëöØÇZK
W›ÙŞ Ï$*ƒ{*¼6²;ê©5¬ù¹Ê$dhËiËG© ‘Bµß@Ñÿ÷´Û/Y<´L¨;àØ33¾` [h7êéûhõ^À +—{î9§Âm¬~õ*§PÚĞŞœ0ñ]*X¡ÃR¿Ä"€<†kiDÀtw9ûäBÀJi_/Ô«N{‡$‹ÉTEçıÔÍ¶t«[7x]`1cO«ó*O* ó@Büî8nô<Äs[7§ĞiL{4ñ’ªA…*›¶Øä¯$…²ƒ1kÛà»¯Í†ÇKË“`ïvN²$E?ğ(’$†û‡% Ë?|ó	=PÓ%Qß£œ`ÙX\ß¤]ñf™
÷ÕÉPX0Ç&Ì€3_²¬'õIßmLïğ•­‹HCN6Áv8€pü‹Ã¸qm!‰I{¤ ş&Ô¾Ï^¿rsÏuá|ZÛ€û‚òü½1†ZÜô¦ñ_‡>~û‘#4O3<ÙWÓ)½†£ÙàjlFßÊwKÉ;x„Ëv‹	Aï6¹™r1qwô¡¹õáÜ0çÄ÷’#èIx)1z»ä?…pûM@mNÃƒ {\Šë¤ºhîDlANagã 8†Â‰×ãQe±@>_Ï-â	­c—JQ¦"V·¾
ÿ8Ä¢•ÇißÅÇó]ËË’!$(J¦hTñ«ñ@±H‹Ú(¯8•¨1xÊ0Ç—ôKú…v"ºÉ²Á½Æg¸jn–¾°w‚;›#³¶üNyõt‹LÁÃ©`—>xk ÆÔ$	F…ŒŒ_Wô×…j
ó½JOfı¾İ©˜‘í,œRæY8/c/ö›'m…b¢Š$ìX“õÑoøTt„´É¡õõáòBòLz)ƒ™Şc˜]-zsVPa5*âD6¨wU½€J‹:çÓÓå£ÿÃ¿Vu—Û‡Wú‘°Á+ç¯r4òi[”òÕÕ~ÿŸx˜IThê¾-FìÛÎù’…ÜÀ‰z·ò#ô °²F 	lÜÂuåMzˆÆñ']Æ£t]:’UYóUº=1Ô¦^D3ÔCK}W+_§6ßáwš_(œ,ãÓjwUúA…æä?ı§0Qt´ó\Ÿ@şFe¤Aş¯hi»JLpjİ~ÿ¿ZŒğÆØTydÜÌ‹kœcqÈp‚@ií|âíÖœ ¬EdÎ !âõ+ j™ªÖÚÍ:ˆ>-(é„ÎV/®ñı“E²MˆB0r‡î6&Pªõa£R]“HÏ”³Á•'ºÄy¾íp‰€ïóœœ,'Ä×ş²ù÷õ¨"“‘A:y$®B©kL‘z7pÒùá<¯ù=ç¾;³°aaFc‰ä-sßDÒ¹ˆOlşñâ^™ñç­Öy§zèZr#L4Y&I’½>Š³ÑZFıHÆúºÁ±¯ìHß7ì`.ÁÁb4‚"¿îÖ½@¸úRò’ØUX¡ü³,HÜ}Jüd$iâ+Ñeá'³zãC«v¼Ó†-ú(vø%C
µflÿNR2Tyˆ	Ï(7
O(Ù.È|øõéE†ä¨zÙÃ´s‚{çYhí%Œ¢ Š©U‡õsÆôöf·åÁ£<;&#í±ë÷¤×š%–°f¥/rœ&´X÷€»Òóe‡ªN‘NAz_İw4¹èz}igãİ~¢6mê´bèíAkN5øå~¢(Ç“©/’‹ìNÂ—&³ú‰FåE—ÓÄ“<o¢	´ÑıTÄt%ŸV–\şİş|w}™{²ôĞt+’²5Á8·U÷—;#+T£€”IÕe~;€ï°¼1ó§¦Åpv:¡ÌñøÃ¡’ë³tƒæ£m€‹çÆm„9,A*üÀè=k¿”§&[Êj„Põ[ÌÚí¦ô,©Õ,_†óÒ'—ÇLzù¦&¸WóĞ8ÉÕ[¥~L‡± 6T‚UPf±=e @.S
Œ¨Z£ÑŞÚgÆi§ö¿â85À¦äci'€ôÜ‚wØ|fÉë•€ERjç©à #Ö5[İ|ÑG(dè{ó€Úø^_„Î÷rzıâA(\ãæê2-U©ÙÊ¾İõfÊbó“Ş£c¤ãÕå5”™U„ºµ¦jdo7©\EÔ€.×ĞwødÅeZn|ÂÇ¾Ã,Ÿ8’ I™OæíUöï¿ïí£€z}s
Øâ›‘İ|ø·É”.u,ŒÛÍøÈ/ÄTA¦mbëş™Ã¿U	E78Øq_s(Í›÷O/&—Ì$‹M»ücae U¦ËÌ8³{ÊÇû-¶¥÷=wô‰Ö	û÷írã"Ã©,EØJ‹Ô“2¾ò¶ƒ…£h…ª²RCiáïµL'‡qOéúÆ£3Õ«ÂÇU/õ5ƒlr?•eì–i“)<àõlœ30nº§Äh„Ş%»•÷¯÷¶¤ñ@ˆÇCçÊ¬^ãáC3_bIkèÂÆêõi~Ùh°¯§&%{NêğD¯62 /ø°‹éLİè²NŒQu†· #©­¹¬ïN¨ÁŸ…±qËïæ"œUDföŸ¹}õÛÚÑá—…E]Ã½ˆËBÉ+Çšøà_"ò$aûzjÔ¡·±±q¤y†÷§öÙâ~××6Ûåàhgw'¢÷•Ş‹Ø òpi¿ˆŒ<#{Ï^…,ëicÙ?< X!¬Ü§!ö']Œ‘Ãè=/?ŒIQ½åwÇ—L3÷èÈÀ§°»’¨{Œ„s|j:ÄÙÆ•·‹ìñªÉ‡Cş âŒmòõÃ_~ºÃjóJ8æQ=hè¥Y¸(c
ÃŠmÅØÄÇ^MF:|Y×uT“ÉD™BÂÂBË6Òßæ`TQxğ°ÚÓEŒ‹¬jEñ'i¨“3Î—–o>t­gõ¼Z>ûÈ¿‡¶‚±ry@»ğmr¡)€trãÄ*ÇÏkåe‹)ñPşõƒwJ)o-pq\l`+	§´Ä-?\­(A¼¼‹tHãÌ)£ˆ<QJœì>z#wñŠıÜ„¼: Ù°3¹ôbÓÆôxD÷1}TŸÉójZÿxàû´šXË¾*»QĞÄ½µÎ½hºc`êp_~)>ë¿)¸¬$ã,Œãy<ôÏ¶Ñáƒšw'fÿXí1Ze©L¿]aÙÉ;·×¢7YŠ‹v>X—o9À‚ŞÓ5ÚÖ¸‹EStä˜¸²¥Ú¡’¥Ã39cjH^Ã *’Ìú.o!ŸÉ€ÜÃl6ƒ)„9‡×¢‘AñKŒIIV/%ìÙ=f}g¤ï îwTŠGN»5õ°VrÂÖ3 t7â¯9!¼w•FRÄˆ“‘¥ş­œÅİå6Öáç7v­cO{k”üp½\È{í)ôi‡XKAâ	®qJÀÉQşz‹©æKø©`·Yß¿ÛÌ/í«S<æ¯Ü0X§n¨*àqğ\Ô?Ó…©»Œ”Ø±W^7æSïHrõ >ã,ÀT lšüÊå¿KûÜèO6UqÛ¨„›/gÖ«İ"Æ¢qI€¼Z8”NÁ–r×[¯Ò¯&ÕrG ıØmuo‡Ë7Qe0¾
w-ûI/Ù=³ W—ûsÍıİ*Ü.JéMÌÇ†®—a^H`+ÿ¡ÑAc©&²W¶„†ĞåÊ©ÛX<beÃeg<Ã?w`$ˆV‹[_X!eŒØ£Éº,sÜ¼È@bØô@¤-H–NíW§°—Ã0n'zQ’º=—‘Öw³ñ9dÂ	5dlåµ,GCKGß*ò…€‰Õÿ\äéä*3ßM#ÑÈÍ^“İI«ŠÄ=ò,B”
¦}xç±!BW°¯-ã¶ùñ‚û>`sÆóÒô´ ¾#µ÷>¾»Zû <Ú Û)ËÎúN°~‘üÑÒ#§8/òá™uıó5õR€jIn°w‚)6 `' ¶(³/ébÓhíFö¾êòZÍïO“\sÚ'†‚ë8î‹sàxİiüå= g¡çDú¸—ág7E˜ç_\€ajw).Ô÷]ôÂ}<Œ
Â¢ˆ ö¨XI´›\Pñ]¨"‰WGŒ;gc¹üEm>B›TÀ£¤êÂÊ”ªMe‹¸vñøgf²}$ÒâÛÑZtAKAuí{ºt³“~®¢ÆŒ2ºŒ¡nû—>Ñé­eS-)ï¤çÃŒ-J’Ÿ.[[3$÷|R3_Št½ëq)¼·Æ6—ü7… z{f	"½û':ªOa¿‹j¹>á*ğ!€ßc’ZøbŠÔÕ(†?n6B¿ı^Ç÷msÍÿ_×…N{†«‘Ê¼în>MÅ£³G8JÄÆ5Oa#M/ÃZ1½ÖPlÎI¯í+m8Ë•cÅãfÌÃŸwù¬¸ÍÌ4UTë¤–6t5>°£$ùª9kcüñ“—¡aw,½O€ùÔ<ZÉä•SÛV¥GŞ++ìKí‚ü2·RĞ ¸(ğ(A×˜«×f4Ï_«>¡®MÂpÏÏ…|Ç<—R§Á¬rAæÜÍŒİ`ŞoT¿ğ„ñK”L8“” âWnÙ¡"/bÚP%qL®¦Ô£âjİà„/ˆbÓˆæŸ>¿·
~ÌÅÅÖîùØèãhösp&'¹[ëÍMÆ>ü|—Õ/™•’§_„6³¡ ³®¥ô2£Íû8A³8\c.[u¬ÜÎpµ-l¶òâH©²Qğ
wÉUâ ğş6ë¾9dÁ·cğÅQ±7EÂúfò/«R3xOKÛqï‘Á‡;0¶)mDã˜ùcÃc%sI°Û©Òä]°2s3+- `k´•nÆK6M¤ˆ9ª‚²dC"4ºõÓK?[‚0”ŸõÊÜç*—B†Áòf­OwZ\ÍæÜéc#íÄMÛb€ßN_ îq$OÍÉ7(¿—¾Å„?·g—Ãˆö—EÍ{!9>ŞbŞæxjÔyÑÁÜŸ«ãjª¿Šì3_õŸY`­³ÓÖ,÷gÀu5Şx
à¡t&UäkmQª*¬VàpÏK;¿ì·á8ƒQı#¹âÖ›êüÏmÀ” mĞY?·†€H±Vİ\“y)u!)Ìûw3 ÄDÁ²Ç5¼Õå;b†¸LÇ ä£UU:io)"80©OĞÔ›ëg_¬á—’ÅnrØ€U? Ø%].ğÁ›ÉÆ“ı³Ò}N™ š2ò4â<¹Rü¾+u	gZ{šmŠ›Éõám»±J¥'E÷x°ùM“Ø
’G¦VF—h¼Pç~¡JŸ±&8ÚåÇ¾åÜÏ•±İmê“ö&J%ç	³ø7§aX[™wÜ­•0SºSiãŞzBÿãåâ)\óB-¨Û(ËËu£G;IQV£ÿ{´¸A‘©ˆ­­éybn†¸%,6Ñg@:ş…]ÅşĞ0˜ˆ¥’o´×DÆöNPíŸ%‘é78
LQÇÊÈJ(‘Š@pèª•ÉN&B`1v$MD®FLêãQÙ¨/²-Å¥KòJ–5Å›*õiUW6
,ËTV)õ•·ûsl»LŒv?~¢ô‡g”¬ú))cŞL„½z¯m§\Uç¿»Åd×Ëõ'ıÜ
Ë‰NİxãæŠyùûåxª÷»g¨y…ãÎ'¬Ujë1(rcNâZãá]”cã1ºÔí2ùNF
Y%¼?v)DPV[:±jºüák]œZ^‚™Š§àr¸1œÊ«k\à£ßÅµo¸—j\pÇ 'HÂP°Woœ©d&¶ìhĞ>2‚ZG{Å3±‚Lx9d“2/Ÿ«£ëtÏBÔÈpT[H‰r4VR&„Üßqùû`º
¿ıE¾œ?¢±>ŠRå„EPÁï¬‰¸`ûl§š¬šò”—lÿ0YÂQÜtg¯â¥4å"şÌ@/0_ÿ™ç>!ûã°ö |tm¡T–?Jh)£1Bñ×Ùª–Í/¬¡öâ?œşæe³d’}½A”qˆÄ8I÷(W(…C7nÜó*†zC}CÄæ°6Ç·~Â5 £©G½ôi¡,×˜ı& ÔÙWX	I Gî`ç7M‘˜†ˆ*„p›@ïî1¼ŸC¼ ¥dL©§Ï‰eS°A§Ç˜^g^ÌSÉ	$Û*É°¸ÀXÉlü ^Š¬ş/·oŸiÂ]#ş-†Èğõ•öfÏy¤¦@–*IFÃÄzQëğD\Ôª±Q÷u‰w—işÙìBjŸ‰u¿–]Ø±zê=˜Xò5‡TdşÒ Şu!€¡ÄP\‰“ÊÈƒLĞNµ+H‘ı©°}‹µ@b¤Vºhò¡y-\QÅt¿O•*keqG““zÙ‰mìh¹¦ÜëË;‹XŠâdP<ÖäFü±K¦â)Õ[Eõ5­‚® 
wŠ8Ó?Æu‹~¿9‡›†uâ$‹Á4İ}ß–ÑüáHúòãÛ†²àvğ¡¡E—§óe>Ú}­âx‚GœRå>q‘o‘Œà˜˜ŠÜ<–D>r•D–¢¬°éõ§bŠ+L²lˆ4ˆÛ=îÅpÄ³|dŸ³µjù£Şˆ6BDã¼Ê2ù‰}bYÿS³aL‹FŠÒË‹ÏzO4Eœ3ëöùËÓ¼y^èjfGÊx©ø[É»¿5•\F=qYgX‹îÁq•£ÍôK×á8õd5±ÁÖ‰‡	q&Iz‰½·@4£Õ5²æ­…S‘+™…’ úŠãX©[a¾6ôBe¼yÖ/ôBKƒ °ºûÙŞ`P* }ƒ«Ñ\	¶9ò»SV»çÚÀğ²*£&¢¢4DWŞvCÁa¿›>txú„_6½Ø?rzÏdöV6qùT˜YyŠ½.~´¾U“–ØÁ=&N32É}Ä¢.äz:0u‚P9àË"\ÛOsl5|†¢…Qé­çê×Ò±[qx€¢³€ö¶0¨<”Uc.- K'½Î%Í×/ü¸Î¸š8ÖĞ·ùÇÇtz›±Ş²Jô”=$çã˜ŒLxííkÑ¡Ÿjº„si1‡­œÏÄÊŠba7wÜ=ßÛÌ)ê³ßÇ£Kw£-<íÂØš
/‡¦ä”˜foµ¢‚ëJ½Ã)r®µ©»íÈ7£eIUå‘g2ÑŸZ3ÚyQ=äá¸x€×âUìùİ'xó+¬RÀQJ¡GåË9\Ñh-Î2YJS¶ÎJ5WG0½EÜ¡IÅÂvíA§~U0m§æ®*‘“V”?¦¬7ÁÙÃ`˜EÇà#ÃÀ-şT·ı}Ë•ôFÉÆ1y9œÒ†÷8JÈ°d;¢”j¢€>k¢UB¬ã@'îFjîYo<ö@ƒ•Øˆ*¤Sî¿í d 7,İ^3~—KÒ5/ûh™^òµ†UàQ¦]££ï+Q¡ªó62É”‰"ØèpY§"[Ğ—5°
õvÕô–SÁaGP]üß8}tµÛ­¹ø$¶üSÖÍ§$Ğ'°éÿPcŠî j[R<fpğ*q”š›ÈI‚t|BÚ—üÄ¢n,g^!'œ	,›­s\ö…ÂMÒÖ¼±VMÈŠX8š]tç4Zœë­ø:dÙY¼“•àJì …ğ~À”Û²<®ÅŠ¹ÇíApÜâÕ°ùnnôˆ¾®úUq”—ÄOÓ¤¤ç ÏÙ[ÿ)Ì½5—ğœª|w
ãİÅÙZ–©øŸ”’¨Ô™Œ«1KXtêâùÎT†$àÄn%ä²ñ¸NQµ<tië´HÊş¯¿¬krİËX8Wk»8œÂj×p ÔkäŒĞ‡à~|#ÄÚQë³{^í¤›`N•¶;9@ \…‘Ä.¢‡›dó5¾ ,ÕÉ“º4ã²æ²5ÊxˆPÑƒÉŠ¨œÂçã£ÕĞ;u»äÅ\9íF8Cb›‹ÀL<T%…ÜêÇ™IÏíñ³â0oW?V œ[wbE¥§Â>_YÈî´İIÕ´Fø2SÄ¥j/|©ávß¯ñÌ7¯’Ì.€ k%Ö¶Ñ.1™ñï¹îô-ãÆáíõ«p“Òo}™ñ›$L:..Lsm³è|KDáv®7UşpS¹-µ>éœ…gÓ]ş£ƒ®"Š~OøªÜµ´µ2±çqä±öNWHV™ÑÓ@ÍËá<[lOÒ·Àÿu{³;<Z‘¶¢§º—Qe?º4ÇLŞcÉ
™))‰Ò2*‚éI,„;ˆåKŒÕï¬ë§]çrÇ?0ÊbÒ*ûø¯²U¶”·ªà?<W‹É\©İ.‡0¦H4äO”wæ}ëñqì]Ì™SÑ°²h[,» ‘#¯ÂiÑ“AmËÊh?œå¦UC jÒÅŞ²g^5ë€"04wîÇ¾@Xßï?èUê?·„znbtø¹~!İ	ø];óÄÉr¦õP^^Asá®½oÄ‘@dÈR R–1bkòEjLìœı¿÷GzNŸ‘GÄ¤psCÚæ÷`ê	†fÈs<KÕg5µÆûMÅ±t¥£Q-÷hÄPs/Ø˜ßnR6ef']øßÁ'ØTr) 4FÅ‚8’.V/š1_ %£RZ8œ‡€Â/îjÊÉLjrŞcŒòXwŸ¡0Phw_C1¤asÉà»7¹ÚşLf©MÕ4h)ó–1ˆ¹xF¸ùŠMÀÇ&‰¿c:úškkR H¡ğk©}ƒ	ß¹,£ä(+ÑİúD.³ùúÁpÖÚïÇÙg“4_mo	C:§e BıD»V§	ZÄêgÁ®³ªáÀ§D™îÕ~xÔímC®­²Àçà„%Õ"Jéß'#0#Ø; „º²:™í„Q ó§ÓJ!mêGÕĞncüƒ,Iû\ûcbdpD9)áµ¿ÖÔ”p‡<¾›Ît¨¯>Sı!«P»İ@²µW"õºì9tHF-“í¿ÊŸÄøXî|!tND–‰Š¹‡Õëõ™ŸzY{zÜiuD¹KYãˆ°Ù•£ïr¿ñÄ@q¨+½¦çlƒ ¦Ã»©MaÂªæ1m"Ì4Ú{ë¹[˜ü¡m B<
‰#ÒVÕÃë¼ÀoT„“?Çò$Ù~u™•Íçèù¶ÑÇ§Ô™¯bª&D»¤(†%³Ìÿ¬¾C²!FÒ à•şpÎ'ê¸Ö‰–÷Uëó²Ö4^7¯×£¬Šd`’¶”…p<¡şº^?‚Qa¡\?ò¼X¬qÜ!¢Ş©òG©âò`_Ö4‹C8N?[íñGş½Ñøeš+(×\ä4cşü”Š:~"_H¾ò9&_DU{ş¥±Ä!ãvC…!.D*Ÿ×.weü<ï¹¥ñ« {qµ›ñ€ôŸœh­¤²à&p’¾˜òËL4“¾Ü×Ó¥Ÿ	¥ºUÊü)¹ÎWbã»Ë¤â™Æ%Á¼CŸSã®§h”^]*NZX¦(‚Ik*¯Mà,~	¯Ôº… ="FÓ(é	>5>+ Á)H›0.á$¨˜ÑÃ¯3–xŸáãõÊ"k}İ¤.İÖ2¾¢Î»Ç|¼ìoRÕ<uw\XƒíñšDÛ°7ßXÑfŠ·pÒ{-*ìé Z?»˜gàËúü‹Òş:‚hBºgsC#Läí½8ÑÚ.:„çaº¥ıí{Cx8à~‡jü[]µz& ?ÜÔÊ~’Ñ°BâŞ­[{r¦;|B;¤Ç>×}ƒŒÇ™§IT¯ç‡³ß½(Gi›Œ#ñhï@Î5äÂ>oj¤‘o~œKqãóú’ğÈâû”OúÒÓ{]‡›ÃÎ¥p	şBŞøXßuÈtZ!«1”ÿì—üŞÄ	póQf½<L©D#ëİm_O"ş6168 Êc¦n‘àÿ¿úÇ0%0UÏØÓÃ©ø³®`ìà/Ñê¸ğ•!ª¨‚wW°¨,¡ÆõËæ×%#ü³üÓŞ£8îŸ.E>RÛ°¢ ŠX3áq,ª)  VõdPO'˜\Ä]¿ˆnŸSà÷¯€EF2å®Ü†Ÿ[‹ÙfObí±r>9ÒŒÛq	}MÌ-â7HPèEë92«–9ğïĞ­ëipÆn»wçz(IDÈü‘Ÿš1¦À7ìXÑÜÂ(‘*3*J=¢mT\}µò¿2ÙÆˆGS[uÉ§ÁPÊ>]`YW>ñË÷#ôm<¡Ñı‰’ªØ+çÒ3“Ì„D ™ŸşLOÉy[¹|üY2¤9eí§#1x3´Â&Îğ Ç{3h„ZáGG[¢^Š›*:k÷¸¬û¹¹Úù›Õ“¡rJ$­ıv ıˆÁÇP­¤P•Ñq:¬K\2ÆDK«Tüáïp3üZ×ÄXwç§YËÄÃÃëÚÛ
w]´ll}‹˜Rµx#³”º"6ö—¤øÚ¦İ“ã†÷õOƒÓ4mAã°ªœ/>5lXâÀÁëº2{Q8¼/=]%7Œ¯â¹dWî‰Î¦w2åIè‘/È×éü9³¡oo³Ôğ/·ß±‰rÕóæ­dæ,î‡^‡†c%\‡¯#êwÚÜâSY3 \İ ÿâe‹<t¡OÚ„ OÁ%5Kå p“ÉYáSµ‡¡½õŞ2£…Rÿ)ÍÀ¾¾À·íØ1†ÍMâäæ¬·cuÛ2h¯6ëL_•;.
;µæ$Áì¤ªÓY÷rîóñ!pù}1/ÃàW²E§EËÃ<¨üš!:†}KSÕ€øv IAÌ„;†ÈY»"V/ià3aùÊ‚ºæ½{uˆ¤üÀ+"|j{‘Ô›ŸÔ‡eCsÂƒ€çé·zèƒS?EC‘š+°ët›MIúA&À{Ü0ş¾®©w××Õ{y§$×¯Ú+#¾7©JşpAX9{[Ä4%©†©ÑŸÅ9q¢›¯ÚÓQì Ùe[ñz;5Û$Œ“ Òí'Ó ‚×šˆV!ùÎúëlKu0–9»¼Û\Y3¹ğ–WP5fR@ûùŸ(hÉÿÊÁ¨†M§iÂƒ•+¹I”.-š,8Mı'•K…Ñs!ÌèÙáÛ^ÙOdS$Õ_5]·p4KYiRoïg½MŠÜG bŠª8(i¼ZLåÖÜ•AXıefÉÓ§ø}âİw`Ã¨`«Ğ±u»å¯Ô-ü-Xb#ï}ÿ‡3rØ_€Kr“hÀPıà¤­û§â<|¯êØš{N¾×L|Ñ Q±uczÓÇËt–ˆ)€·ÿrImpZ%²}„R&s?e¯¸½}à¬e^£]«ãó³¦"çı†0™^:<‘q§k·GèHıªOÿ˜~á[Û¸o‰ì8ÔhÑ†æ*eÀ¸»â´İÕ/p²GØÖcäó¹†0ôm|:œ†Z84ƒ´ØFw¨W6ÈÓß•ÃqvÊ‰óàÏ²OTöİV˜¦6¾@¡«=_Î'+şz–ïIò›ím#CÒĞ¢rí¼Ú—ÎÂ\Å–M»»MŞøÏJrÉJ}vj8¶Õ‘6o	~Á¾h-	ÃÓ€¢StXÜËNzx0K¿¯Gy‰™úïV§ÌòzŠ‡Ö…BÜ¤Œ†2šTE1•&nIë‰-Õ­Ö&SóÚ\MZŞô"˜!«GÂn‚‚Ñ‚?Z'ÅŒfIóÉ†‰¶¨_Ù¤dDqö‹oMhğ%ìğ):‹è¥XÎÎxÖÔ9Ó,íë•ØIÉ!Wùn¤ÿ[—“˜f\œ lî5ÄFøDÕáûx–qx„©ÛêĞc¢ºĞ"éêöÙUØB›†j¯÷ª=:<jŸ»¡=Á¯gH“ ıd–¹XJ„ìQŞnº7®èC4¿œc[ ¡³nfÌ¬Yä¸ÔÓÙœ_ç&³²S"«ô.0”¹íñÔ{õ*6n
‹8¤N}ëDBØ¸;S¸ôfÊÈ‘”ÇÕÛÍ\Qr¢ÆHµÈ».nãô‡‘=şÚÙÿß‘^s)n¥"Xª÷lÓ«È´»øbS¥CÍ6wW×Ş’’¾ÂIÛ'é#S­—Ùÿ¹±é¢^Ó6Ü¼ï×QI;’ƒÔIü2U7n»9ğ@üí+¿Hb"×3Î#MôŸeV½j=Â¯?“á’ùÖ‚«$Ëøi×$hW€È¹{ZO m)ğ˜"~vL9œ7î ŸŸŞßí5õrµ;Ã´?æFÃNæ48ò^ñ¯b8S·7n\ıwàî29~öM¡ˆRT-æ™'V¦’ÜG °OpHAKí}²Vnöb›j ¹¥| ÅıB×ÑhZ	°Ëx[L,[rzÃ4×~È«p>»‹ışÔ˜8»ô2s'÷zµÂ/õ×¿pfÊNF÷zÁÍ·ïEç"g2Eèy¹¿"@,Í4£äŸ‡"%İb*L	1¢·Ì!P¢ÙOSğ¥İo³™dÄ}¢-Lò²xeÉ1#¾%q ¡FTF.¸…MòåQ°?C5Ü-E=yo»)qš®`È8ÙÆ±ß‡©
pÙM.|ÃësM*^È0Ò ’«Ì¨áx»ú QmJ*.Ÿ,7¯H^Æ¶•“jwïï¯}Ôkõ™ÕnïXè÷í(ÿ’Lªa˜ñ¢qÙmŞQ‹H]CHÎİûƒcrBÍ«ó6ämK«¤KÕB.–l:Â7ù­éJÈ#Å™İáe‰rJ3@¦auOˆ´DgÒ\åç>yq~Å²ùmÇc‡1âÙı³ÀhO;íw9Ú$ÁÚ¢&¦]vtoª?ıpÑèd>’è×ŞŠ%#ês@ËŠş*='ƒíS~Øß8ç]˜"Ÿ†Ìø²7J!^]5 İ#OJ£ÄÇ=5|·S›‹uÜ¹ª-öë->G ÷ÇYwRe”×å+f;6Õ{ƒ§<»õ…<æ^}UHsEãbmÈ˜{½€7k²-N©ÉV`ÔÑS‹5ñâ
pÚ|àòttXÇ¾™ŠõÓbZè×…¢=¬ÆÛÊ¹Œk_F#póƒçuÇ]ªÓº—9skû]Ñ	Ú¢J1*r_wï‚ÜÖncÌY&–?Ö•µz`	E*çæ`•M±ÙŒ‚¾š®¿ƒ.G'Äk4Àû:Ì‚Ñƒ£=ÍƒúÉ‚Ci2Ì—7ÃI¨Lze(ÅY"»±à0Ñİù„ÉXƒ	§Ök†ØS~®5’qhäÈà˜å†¹°Óa:¿²O9Õ2šÈr£RğüĞ±\ó¹¨,ê¯ÄFóÌ’0bp$>>{å;ãpÖc…‰m@6HHÎ†ı
µÒ{*²%÷Ø@CıïKƒı[5ù)™Y|Ycaé1´ĞEÊ8MòNpÖÕW9¦\/©^d€–’H%Ÿq:Ñ*Ù±‡,áv(’|ËúÊä‰Õ7 ÔÍyOÅ`•(y®61OBÇÆi{_> 2	z,$Â»¾U	ÔgC/ïµMë÷´ñ‰åu¦…ÓÅNµæGP$;#/UÑŸÿ¥¯^6Ï‰y¶&Tÿ2W¹›©†Gcº/½ÁgÎÔĞtŸpz•ìØ[?&ÙK—%Q…eçËŞ¢œâb¨_¯‰·ù…¯´5”2pcÃcÒ¿}×+Ç˜ö3¶×Š2•íSı+İ¢eõé^H»™ eğT¨ì×HùaNï¶ƒÑ€3_Puk)	qı>á  F×Ô&û ¯¸’'{`FTÖú;~hàL(µã£7¹9KæŒ!Œ»V­”aïÓADÔf#°¸?§dîİ¡Jx+1àèëù?¶›ü¾»Ğ6%È‡¼¦I?6€i“ÈŸ§Fîy2Hú@¸HåağîÇ3#€bÔ©s–À6£oD’¾0}Äo>ï)ñ3uùª…Á‰ñ0ÙZ…é’-.)÷W¹`¥·./Ş(À²VR¼Ú²2¶{Tp¦À(ÿ{ª×Æ´T`úJK•Ju/å÷”).¶Òİê:v‹Œº9ƒs¦2áªÛ¶Ç¤ÀX“$,\Õ»ÔvÉÖ×·æÁ”âÑ|ÊïªCj”s;¤’¤	WEø—}Bß1ÿƒ/+wH<'N¡²É^¶(¼A˜7øÕ³ã 1nîá˜@Öİ×EAv¨!Mğº?{nH' ™EK€àKâV^ –ìqñÔÄİÍrÅ«ÊCŸ
Öl½A®¿ı|1ttÔ_HJzïàmEc65	iyÈT3i¨Kê·c&çˆ?”v@Zë“:†”Szü²W 4Òù–ˆù¡|¬-Eıû¼@/¦‰:Ç5’gD4fÏ‘[ü¤p­>r¨ç4±ĞB£Os½ƒ¸¾ $I5S .Üb&è@¶“¦ «ù!Ğt	ZşKï92K²ˆ³Ì•f4ÙÙGöN|Ö«S[(£¨\FÀAÉéÅ«åë/Nqx@Û@2h»ê$MÍ×w€÷æ¹0hˆ)“i÷â8|{?û8©—VjU0bÜlƒV:nO›š1‚–ÑdëóFò	«áØ1UE+ÔêÊ—)LW-î‡Évãs,PPL»GoM6Ä(×fºĞwÈè:8¸2v ­Š7c¦A*ò‘j¾%¬<bÛ¦_Î<Hô@<h¹Bn†
&ÒÓ¡„ß¤ªÆŠÃœÖß-|¶†9ûƒÌ%‘û0eyÏ0úJ®‚ìáB½‹îTéÄfŠ0ƒt+ù”	kT¼„¤í‘JiÈF}–xò:Å½ìy4ÇÓ²½(êU6•>Ç©jZWuTny¶¸~¥xreè€K}´«Åı#¢{³Ë€œM4‰q–@#åBÉ<úh¬ğ.+š—UØÀA›îTØ
®$;ÖÍå¶c×ƒP3xƒËÇsá––œKı¸œÄD(FOîÆú~¡û~ô…Ä-v.&Ú×+VÎm8¬ÖÌ˜¢ˆdöÏ‡R‡"Wûf†<ˆm$4|ğq°ØIŠRíÚÓòSi‡Î ×‰®z¼c­%5€ÜúsCÆ¤º¶ŠøŞ5Û¸â²aÒn49+’cÍµ¦Œ}ËNI aW™®s¤UùÓæcLø†Ï{ùÚïú^ŸòÒÃwy
(WCeƒÀGpè,l*!!ÔZ—5m]’ç$xrët6™İãÈÜ]kÎ›7"ÿ'‹3êåd…0ÁĞ“^ä:—	ˆL,Y+™BëÇ½ÒfâS3r;‚Eºâ¸Ó\_m¬æ´Âİ2ìQ£?úa:‡Úf[.âŠ]ËËÔèÍDÕºnç™6qEØ+€‰á„#iÓÙ#‡{©ã=®Fs`YQU¨ë €d’«†=n78ø'aHıíª/'Eé4'ıÄ¯^&3îĞÉ¥$·VÚ¡Íwüm
ğü˜¶%x¾i“»Á>†)ĞÒrxÌÖ¨~ÁõaË	óá Ê#o%ÒÂF— æßÃ#‘kwµ
#ùv•—æ¡ÁMO;Ü˜ú°Ò8˜MwÃid¡Z~¡~Œœ§´În.Vß#ÈÄ»•ó'g½ı“ì/ª©ØàjÄÇ.ƒ)œ beéëNRÃ¸Ü#W0bÛ:iTS´·£'âŠ .ıT¯€´Nø åQºâåŠSô[øúªˆ\àìkB¨dZ‡}Óærí9ÓÿâÚFïjøêœÀ.~¸¹d„sÇgZÏºi‘2¢~‹U4g¯WzQ B‘r«t"S9tÛÀÉtcí¬Ğ§1ìO){¸™0¥f¼jÚFGÔÀ›»Õ){/ö
Æ‘S+È f»ñºöQ3™ÙÎµå½h™?Ooe{Äìõ¤!g
ÕR«1J$bûå‘æ\=Æ-ò8¶vKÈ_^Ê™V¡T»\ÇîeqÕyZÈ¹9îw«ë­Y!£[¯&LâÈ«½'cÔ‰O·T3‚´-ÊŞš–³ÀÇÍ…ó’ÑU÷>j”yj…#ƒsH{z¥0¨³2‚|ÅüÒcŸWÔü‹%­Æ¿€¹aà:6;vúf[T•ËpçÅ&Fƒl¿5¦¨,÷ËGD¸ìWZÆ;–wËÅÖV`+;äÈŒ4ZÅo ”$W‡ïgK@övË—,ÕÜĞ‰ğ®şP}j™ —£«9Ã;>#ºDªRˆşdã]m/è¤ù’4´ğ“1hR¾ÃT³¸İyÕ8]|3aäùÂ\ñ±5À0µì/ºşô’¢bƒLCQ.·§m=øEÁ-¹W7.š:‰YâÂÅ¹éH˜$HÅ)è5Ó	XVt cbŒ-¶Û£2
®¹§bïµH«:>îK Ã\V-Î\dØµıÀ8-KïqòääRaÄÌíkùTì`¶ã|Æùàí "eF|R±¥Dx@uÅüúlC—oBI-ÊjÚaµ³)ùÃ Â«Ã¬µóa&I©^ÿBS]|¦ø>Ç¦©ˆşSæğ&²VÊdÃSLDÀVês¢uK@qrÛXùcÍO/Ü½Xnêä`éQHwtdÖ“Î_ÀDéRÀş5Ú¢Ù‚n†t$³ˆyVEÛ+z%°úŠÎÍÿ¥7‡õ¶”êûQV5“şøÚá”„óÏÁ]…|Á&¶4BW—Co™sÅ>C)ÿ;.à¤HW#|ÁózáíŞè±­ä’’ºaç7ìJ½Ü+ú¸l&ŠÜ±µLÚã"Ÿ˜ÎtÂ)â»o‡gÛŒlï¦/^¬?&‚9§Ts{‡D£
Rúb†‹;Ñ!¡y›1Ú!{q0ù¢`
ih5ˆ›©‚·İâÎE‚wÈğ#öúòäËD½Àó·1´½sš>™Œ–¨>NÍâÈ½Q2‘0…Œ¼µ»sŒpmENísÓâtJÅxLW3Ùéış–6µt\m­ñ†˜F(·Şùº•mÁUââƒìÊ€¦W[ì(ÄDÒ,„ÄËæê’DñÌª‡}HN:®`Y*3*A[•âÒrå ù“#¸u«C’•½¥œ	 Oß—UnLD})¹{6Wï‰ÅN½‹èbMyöğ ©àÚ ö;e‡”Œ<Iï´ú’®­ŸÃÉéS\z–R@¡”bÉXÎ¦Vşs"¸S÷jîæó*ÜZµ2Š’¡—.wZ¤˜guòl5ıF<öÚ[Zcª]SZ©‚ß[ªóé “À$¯~ğ,õ{”éı•ÈX/£ j™€¼TuB³‘¨{W¹¥MF¨ã%a$×'6SAİÊw@İ‚Ñ.â„Ä‘Q3…˜½¥’æš¡™åuªNgº°•r6$3lÃ^qh×ÓÍM`0…ïápß-—Ñİ1J!!Ìf	çÎòG7‡"íy-7ó¯!R55m)ulBfŒéÑ€'ÿãÄˆ$êê“<œî‹LÀWBâ!0Hë=Ö¦eMğZÀÉøn¼B Ã3àXñKÂE¼ì´B90¶ÿ/«F‹õ0ÖàS°T¨3£n«1øµõ¶¼˜†œÈ¦G)ş]Xph4Œ|¢3°ë‰óÂ‡÷`À£g¨vÈAßÊ=ÿ}Rü`œà`p5şÈtqûŒÈåî&jÂCÖMeÕGÀiY×ZìávıUAôü^Ê²äËé%É«(š¢‡ Ğª¸¯B´jixÃøQ¾åöã¾¾Fq@úrÑ@"3¹òqz®„*!.óf¿‘I°)€ıÍÙ9’Î<J„×@‰ÕVÀ›%CG¾éé7nGzF­úŠ8sĞKSm%RBaçÈh….¾*­us«à«W½Åãt`ÕßAAçx{|Vd±Ò%Œ·;¨É¡bÄöN¡*2©Mük|@ KŒi ñ×pš¡/ŞğN(+>ÛÆÔxùyàµ0.Ğü1uë¦§›—>š”Àp¸Ûœo|hØŸòµ1/AÑ÷¡W#õ…Ns˜=>F'*b)¾ò­~ˆwŠÓ%YÕá:÷ÈU=(÷lÔ_æèÿ% ÆCÚCôí·]F~£İ‹ÀÓÂKIuÍ#[Aîúµ¯\òN.XGƒêƒXÚv…tÎÀ^DÉœ™ä.˜$4XŒ®Ës  ~OwJzUÂßÆÎ!.ÈUì¶.(_·øN	¦Í
Ü’åN5äKB/ßµJAfÉıŸEËæ¤l‚¥¼­áWúå•†ÓÏFCªÓÃõƒzÆ@ëª9ÔØY)¨éáHJ	Äs_:ÓgáÂÅ„¤hMô¿n_$Ûà\"°A$y‘À\`!£	w2ô,w&y-dÑöd±¦ŸFÊ³øAVÍœŸ¥]tøSN§@òF\\aÙ¼½Ëåf79]PgO‹_Å„6Ã¯Üp-ì«Ôår¬L­.?w8ZÃYÇhç[ŞFÆYØ›ÅÈ•j’Y}'Œ½ÒÆ8\VZ»ªDRq~tdm‹†ßåİ÷;6–Õy´ì~‡òô¢,Á
Ü\j9
åŠ¨ßû±Äeí¦ŞlQ=ùû6™Ş¿/Ú£Ğ¬ı8Ïïôı·WSQtWHsüŠ ºÏ4¢™9“k0CŠ¹¤4Å×¹)‰¼mÆ wÉd3áµÒ6;z"SbP_ä¸·6óóœke•5½¦^Gë‰BéÖ ¥ô·[ú(÷<•–ñZì“}nfå5¨÷|5sĞnLƒÒYÎÓ16Ï¡n(´ä³ˆùeö4_²iEµâ4szƒ’›
§şš+>7ì9íÀC¢ÉüÕH­8t²k:ƒ_i *‚¡$ßµH¼BHßİ(%¹Ø˜fl2G•œ0ò¾@œ†R
–J=ZoX‘OgT%±¬o+	zÀyyVo 'ŠvùÎíy‘ÀÓÿ¾:V"Àk¤ÊXÏ(XV]`ó‰-[R™ahã ‹ÈH
¨@„È×Ñ½²˜?Z!„‰i»ĞZgkåÏƒ|FæR#=–äU5­È”
ÈèQgWû“Ì†éèwê}¹~§‰¿·×ÿ'Ü©M+ÊeÉ% ZDùÛwìZ’—uOœp©¯§İ?X…w9Ôi§cm6qÆœÎ#çgÒŒó0t"‰¼Gw"@E³‡#ÙñÛ“U?)ˆÃ¢‚gïå‘äwîgö"¡“*N,wA7g²÷ö*")Ìf¼@Uá¡¤Àöl’ÿÇnæÛ\ë;~Û^ve>6¯¿Èßğ¶˜ÆÒ/Q¢¿Ç‚u<˜ôkR)øòëøÑƒE¬lœF`©ÒúÈSíwp¦I”àÑbb$£3ÏaŸ•œ£Ó)%’ÅDH%a ®K<ƒqYŒ .Ù]Ma…ÔwİáXö1Û‚¼ÉQàšİY«©‰-ŒØ°>|¼
ØFLX@ØÑŞ_¡svïUS_}H‡¸@‘qÌÌëzuD9°Ğâ#€¦h
Ùˆ8àûW‹ä:ƒ8w1.öÛãåò³ù§-ÊÁºpÍÎ”ŠOÌ7@ÛgvŸ¹wrÛıªÀ3g4ı;‹èô¡Ætû¦™a°åû3üà=0;ş!2{tÙtŸb?›qh?É£±JgC²w@ aË\£"'ÃÉOmBµHSœ\-Ø¦š®0ªF„¹^\9DAâ"c}iAY!{1BŞUèMjPâ½ÿ´2îÆ²%_™ƒŒ¬ø…ÀG´ú-Ó…’Ò¿ÌOÙF)Ï ;^ºrñ<\
ˆÄùÖÆP=û÷ˆ)ØğËù’ïí¯)‹ÌøĞF€²ˆudra¾ôKòÉ0»V0jLn/»:|•+İ‡Æäo»¡ü:’«‘c4rJíqU´“@»ıI$'Ašpa™ïw<Ïé¸Ğ,‰h_Á›IŞKg0´”Çú‹½ÌÑ¬Ç Æƒ¥Ñk¸óĞ¶ÏÈ™£79‹ñ7z=×f‚åHèİ¨·w‡Mòt®ÃôëæÒX{¡°ÇH|à¡›¾6fzO¼ƒÕu)YR½1ZÁğ¨®7Ösrœs‚Ç8†ñt$ÏŒX®óJ°é`&]yw!:D¶|}V6¨ì¸ƒ"S7æ±KI*5‘éU#j%åwjU¼¶gŸpÄ¾ İ[€R‚¸E£yNÅÎoC¦ŠeNl‰Æİh›ö:Z‡5€Ç8hTn ›…/F…€×œTR_´°x" ¶v­-í¼6AóKî:5ÈIéuT«UBg²¢8–±ì©A<Ğ‡¶w=n|Z#å‹Gî‹†J$%!´/ÇóŸÍ4(O¯îU†å³ Ó.“xLÛ%ìÈG‘oé2-'pìG¤ënmg -ˆÏ•Cš³î2ÊtWƒ#Ù|¬§%¢‹6_åöõúÔœØ¶^H@÷›XÜ:–Ú†$ÂFa»iÕvm]ÓGi_{%“c¡ØšBv8O%¡U+óÙµA€]ÂãßíÜ×?eóÎŸ¡‘ã¨•Zİ”‡Ú4RÇÙúVn“£‚hSäÜr‡;6ÉÀ\×ÌgGÈ¸zä˜ƒÚÔ‰”¨¾ùÆÂdœƒ~%_ˆ{Ì¸¨®ªüp¢paVÁB[OÍwQ4Cd¤ÂÃ©“„Ô‚s×=»%wªŒ¢D,õ>Œ m%Ö\¾¢ú;#`#©¦p ,º2	œğË5GDÒĞe—víÅüë”
OÚÎfY½àûÒRæäÙùQ Ğ$?I"úFÉ=Xû÷\YëzÓ'˜ˆoÜ=È¯Fb¢œQŒ™…çå^6*L‰ƒH
z*Daß|[XÍİ]5•ùÑâã®·(„è÷¹³²Ìú³@Õ>Ù2¹>yÂ[[ñÜ€¤/SÔåQH“?†¦ê&Sm÷"§¤€Ÿœ’ÊÈôY„‘„ PçÇœ DĞ	’‚íñê¦œ±ñµ6êÅVJŒ£¿ƒ	Wáø–l¬ˆÿp‚ŞìÇØ—ñ÷İ¾¶QGèˆ+êúşä8Áôs·ïşóİs?y—3K¥‘î¤\gÙµÀ^æq7&Kv’•à>p32t_£ ^_)¨šåÖÊÊÖàİºŞ–DìMKçd·ú:³1Bv¹@JDÖ±åDÓ³ú±ÆLÄ‹Ãİïó\Üğ]ĞÆ¬bni}T«mf7úôÛQÖ!3­’8dâr?Ã24¢xÁ(ä”x:ßÖR+%@çìbb"ˆ ótªmïù4­ŞqL1†+Ñv€+b£†2?F…gpa<$?B%µx|çs¨Şxƒce‚cÉ×eSËK1÷²J¾æãc”ÈÊm3tH0ï9u>Ÿ¿¾ãæ.(‰šˆéŒö!"ªšæ)¢;Sálpvi^šîœßÉBÍ¶lJ6°W]…Ù+L©ò 3°â,j§h:6öV]ˆTH¼Ë¶×èBB&¨-3‚½û¼\5´Œ¬9zòeJĞ	% –ıJæùc ÜÉEäÎd$H~QÛZh2øOOoœ6â»ğy?b§hIàLpïŠJíÉZ­c5òŠVğìÄ ,ñ×k0wC‚F‘æˆ<ì¬L£…>HmÙØ-üI@ëù‹;%¸í:Ò­wjo·Â]ˆÀéÈû/{0vÓ&ä¾;Ñì§÷ãÃõ{6oU¡yÆ#ŞÖ9V#~8Vœ™Â0ŞáÖ3TFÕ6Ğp²ï5(”Râ@=ğ»°­„™³¾€¤ş¸xXÄGÄÖäÔ#»6jõxÖ.„ªQn¨ÑŠÍŸ…’{¡”:˜Iw·²oÅ_“)ŠçMR
êa¼}‘]“œ¯]:ğM
$„‡¤J˜î:&á¦,ŠÜ@‹èï2øóH¶_EÂ{ğ‹«øbK„œş®ÚW¿ß¶ñ
Ïƒ„.U•w®U:ò ÉÌ±j¨?=ã—MÊ4#6††0G¶8éC:¸Î7|µoG™M4b¹—á7B’;İ¿W¾“õ=©ZJ^æà>!‰çGv^ì|£Á–„aˆJo³›©á„? ÕF
WôäÇ(\¸!“C"…ä¸d§¥ªà¾½\UÿSJøâ+£8„Ã­³v¶7vÎá!H’8³°qº•;{ıÚ:øCg®Ì2Õ±f?Z½+‘³Ú¥ı÷“‡¨­I]ÈmYğ
¿ì–
jî»(S2µBô®ÈëAº¿+˜½%¶“4©xéa•zûn~U	V/ˆŒ_çD:^Ætpê—‰¾€è^a ÑH üXşægMCôç„5OÈûÁ+ß [îßZc;³+',_ŞöN~nàòbÔ'Aª>ÎÜ¶âjëXĞcõ×ˆSÊÙG€ÿl¶Š?5]ß£OMvC´|¦©Wh(·T¹núA>;_V¸Ï–Û {â:Ì»P$	I/¾'Òƒâß±‰g`(€zÔr‡ã)Ì{¢ØOrJ_íoŞ•ÂˆîÃ•AĞVSY«2Ö¥½ŠazõÉ±àiïŞÔ“¸JdR‰“?XÀì®•Pìº{½2°\4€ZÛş™4 ~ù@®À-dšÄ@|¶íÒTmÒvÅlq3bÛë›zt1Ê‰dLâ¡ílAÇ°–"+İCŠ8`®x’æ‹“9§óÃ´ûr)lkÚW…ÍşéèU
Ó¾d!™Ä$­ùL'„&ĞX<í@#Eøñ'Õ{¯¼Š°B²#’&¬Õãåµ(x¸o§¾\Ô…
½xŸ‹p“ÊÉ‰¶÷XÙÿ÷ûœx°Ì-{*kf_«q>óÜgÕ1ŒÛL¸šği\³êêŸ¾ĞüXe´Ü…‰Ä„ù®çú(f/Ndƒ9˜šµ€?`Bß
ß=¾Â‘4ú)G2~
ËY¼äş9Pƒ±ïlQ€×ºmÜ¬+
²º ®´›Ì3AU=¾Ë½@ğå—œLO¹m/¿/¡f“ª§rìï’,úÕ]¥~o×@©€%UO2E²í†Ş,³œt÷ÆÙKçvÜ+wÚXc‰‡éÛM†>rS‡±RÛqEE´¹êùWß–fcşÁì‰LvAD‹ ½ú k–‡iÜYWØ0çw	ÚÿßÖ 3½úk7ø^k1è9	'½!¸ëc0Å¢Ú[Yôì÷Aª-¯Ø¬HÃ5Êeº¹EIŒI0RÕ÷¦¯&V5ì!‘ÉaFo•F¯ #N&Ò%Ê ˆğ™VÌ%ùVQä³Œ>òıŸ‚‡	–H£M•„BÄ~¦·WoA…30+ì+!§îh¶Ø]‡¹ÿ§l:—Æ8§„ú0å’W†TEpÔ´><F7ßS£ÚŸ†TiÍ@/‹¯V&DˆËÒ>¯’ô6+œ®\œëY¼»#Ş”qÇ‘u.ÆÇCwíôÇK¿Ö>×İ·=Fx>úcipâŞˆÒê$×¹C6«µ ÊoâÌRíşy]Í¦/‰ÍlÍÛn«2,=½ïÖ9 ;ÎÓÏ>Å7Ã;MÜúg £²Æâƒ‘Õu
J8 ¹¤tkTUyÉÉÃˆİ—e¶M±P_¡tàÛã|mô·mSõÏN¿Ÿ¹zHÚ¦jşÎÕÑ"\Ô	“ÛP°ºÅ«[»hq¾ş3ï% ®<
6Ş»kÉewÊ›r·94–
û¶I%:É¤føé"]HX¯è‹•bï‹¢Z<j
šiU˜O j&Yp*{¹,î‘à#)µT¸ÉmfØTäZl²Œ°4iPnFÂªÍw~ıS›¾¯òdö\a\ØÇ8€ñ6$äŒhÖ[Öz s¤#VÓƒ]ºBb—à#4¤E<”
{:{¡ì[Â¹!ÄĞ›¸ŞĞRô†ú‡LåÉB6r0‹Û@£ÌZ~³ÕL_|s¬;Uƒª£ìly©ÕT çPrƒ×6Ùƒ"Æ|IŒQ¶#VÒîŠ¹æ!Iêš¢Íá~¯-ø¦YCí™’*û­Øtgàå>ìÛXÑhÄ8*°L·ğwFÎÀ»M?”Z\+§£‡"_ÖßË†—aË]à9Ğ6†°XC–ÉÄ§[CT •¡ µë˜´f§æ®Pñó¼ßŠZÌËçŠ+5Ñoú©=^Ù»/'Kfæz3éµ<Ñ‡N•_;Ë‰Â`Èn…‚üA»]ğàIp2Ì§³?25l™Ur¬´Yëˆ·6¶¦gBp›v'[:;wàíPJ6‹ ¨=KÃ†¶İ, ß>µ/Å$¤Á¬Pƒ|õ9×ùóé »QY_(I¾)TÇıEö‰P¶½ÄIÅ›İ ˜ÊÖ&Á­#"7ôÉÿ"ÑêãÚEµ=U®½;`èHDôïùEÃˆÚ›„­¥EJÛÂÈ-'²òI™8
úKš˜}<IÀÈ±tkĞU ¹iY‰Ï×¢]¯:'´)°÷gumû	KlkÒ\y×_ø,¿–à•ä*ã,zñ÷‘Ú`3IÏE%q“Ó´4µ§kç‡Nu“ÎÀ‘Z·s„vÅ£÷[Jh†/LA,<qÅì¢–Şy&†UG,î–ª^:ó“\4¨ÊÊ*jCÆeìE¹Ğ1…*h‘n¦J{…S§Z°QâJÕ)ÜÙ¥=—¯«uáa_.ŞÁæ&ó—ÌJşˆÑàd}Ûj•Ï/a~b¦C\+RLvì›‘yÕıXZëJYÔd×7àÎÕ§½¡¤„P‰Ã`RlRÄH«Ìììôí‰÷é½eu‚°S1+ÁÍ?•N“¢Y5Rôù‡IîG˜@NÒüd‹,L3ãwjmÙãGvÚHÍëÙ'#ÜÅØ×D}ñRÊ_ÎÇ‘	÷s„ñ¼jÆÜíŠAïÛÀ×Ç`íRXÿŞ-±røò~_rg¥cÈXÑ·İíÛ“±Z¥ÁÒuå•ağÎ*š“(7<Èû;?¼¦%D½¨ÚZ§¿GÕRö5šÚší–Ê1s_ÛÁĞ*İæ²o}v_µ¤¥q( ´›¯µi©	ŠIŒ»¢¢ÒE·ä‚¿vaã˜[„âOMÙïŒó„'‹Pëè¥E½ÄXØãÔÄ47M1&¡ao¶?ºvô59ˆ20õcXù«ú˜ƒ<ü[Í–õs§æër	ùi8L	Ï_~ÈÊ>¼ÈÏŒ¨ÇÑ»Y›¥Ø_İ{[ğD¶Zq-SçÒf›F	7¿”qşÇ§ŠO3‚Õ¡8Ëáí i˜2ıüø=8½ë§Ä[Èš(,s9«QƒÆ
gÒz¿Ù,%Îñyb»vÌOÔšpİx‡ »4¹n½oòŞá YşÈá¸”ş}$M•\¨ğ]DZÈF5JxWuìb¼m`é'^AË'#lí‰e<t‡zz—İÛ×—†IÃZx¸=—âP^°!àOê±PŞeó‘şq0Î1­jöXÃ˜æ%°NÍR—ÀòÓ—¡ÜL–ÑŸdùÚÍj’‡˜¥…ÀêHBã‘1)=h ËhW‹åü÷ç¸I×vB–1é%}7°¥Xpvõ 
lÄƒè!Ûƒl¤Ù¸s›ö¨"Ì|Yœ7¤-9R^cœÅ³èÃà²‘ŠĞÎİw:mpÄÓÆ‹ãŞ¬F…•É7Áó=Šš“ş”¯ïoV½Š´çò¿÷Â(´pYøŠPäŒQ°ç$<¼‹mY&Ö£ÔªŠD}b%`¿„">˜Eì'ÊIü•Íš_Mpfİìq9ú¤"~} æ ]g)øJ©ÃÆ2AhÙ)HÚ#õÊ^Pãå h{\åäáøâ¾ ƒºÉJ'oF¬vP¬k´â}¿8“!Ÿ-OÓy°›9•Âè›ñŒS"Š²¿©#÷•H£C&zÂh„¯}¨à!hUÑ¬yµ‰¡¼#Ã€}ÅCH[|eÈÅV¸&ÃÆL±8ãå§Îb£Ñ—<Œ,¶p—–õ˜k­8ÏîßnR}c •!Š5§9Æ:n<q¶Á¦,±[kdÉ8$Zş¯ş÷ÿ+fÁZpË;ctãj[z—å“Á—Gñè]Ş[’€…ìF!™»ª“£Û!Š)olÀ÷¨VX4Úİ¤"şGÈ;büDÛıIdšÕ¡îeæºÒß¸İxÆ+æ‚Ò¦ŠM¨`•ûíñ$€6È³`ŞHrqH Dñ-m	oã”M;Â¶ô³£d}2mÆô™,’=Z®P,JÒçUèá d—LõP3›ß¾Dğm¢Ï¦Í=œøP±f•!ñR›-ÓÅÚğIfLĞì†ëó¾ÚîL²+9Û˜|=ÿ"ºŠƒußP„ÒfıÇŞÂ–¬oD¶¿ş'üIÁ³{€­t®Ùìª:×\áVénCıñİÌ¹ÅÚ#»£‹aO$±<‹ÁıŒOB)€ »çvçÊí¼øP†P—-Bèp§R¢\v®½çåÎ*×‹˜³ÆÅOu@.¿Üo	å­"K±ÙSDLxXÄêAÆµëvó@ÿ$É±«ºªƒL±"ä(ùÖ!RB|4ŒòG†¨Ô†6¹´¦#gkb…d/uC>tóB‰ÖJh^ño¦ô9áOD÷úÂ(+'ıè¢û ¹ÒY3{í t3â.F_C)¥ÁHnB÷$=±§E±çñun".‡¬%†ÚÀN–"öp;¸ˆyqwjjp™€İÜWèX¿°³tê<B’ˆg}UESŠÈsÂ¹¹H@OëÿmD%‚. ¢ÔløöÈ§Ãg90œƒstDR3u<z£(aõa—÷·”Ü¶×Ajû®×Êı;î{‘¢ßöS®ÃÎÙ+zMHãIäğg<µÌÈ¿)Ñ0/¦ü-‹%qÑ©Iêƒ@g-‹êmÍ¶ğŞzµîıVAiˆüLü‡‘ö×i<¤VÊMW2¸Ì Ã„uZiñç{ ·ò}D¥~Kg†Lmoé¯Àúş\-4–åöG2î5{í?ßR_å,´B…Ñ1ùVî[&v5ÿ+zg>F J¶	w£ÄÆQ5N)‹¿bîèœ¡6Ş‚{í}‚÷†!“ZHàä˜n^&Fvëç….„1ş %¿°¼áD‰Zv¨ñl÷µß‡ùf!­ÕÃiŠt—Æ"Ì3@=æVå.ìÇÒwÜæ¬A·†‘¦1ìé©æV‘5šaÄÑØaq"Ã¦´­
{YĞ@Áßõ¨î¼ØfìşÉÕÌüLáº^÷Ì8v9ºp˜ÿN;#L>½ûãñu#\ÌŒ
‰.ôüuÍß¾Dpÿ8`ŠÄOåïÍçÃBg Ó¯
yË2ÆË±ó&i#f¡ÍCãoRÅÖá‰á~bW°¦^ï>”°õtÛàç²K.¬jİÁ«ßr$¤‰u
'C*Çü=s½| ÌÍKdsŸĞ*İôoø}cM/H³ç¦™õÑI|“îG&~Àp‚­¤Ô÷´ÁåğĞ5¾¢dœµ¥ˆ©ô1ìpÿj¥NõÂÔ8„»_[‘Éå3o—ûSŞnë{„éß|Ê•OÌ(ÃcVçYœ›]Ufˆ@çfİp26½PãÈÓ$†K°X¢ÑLñxO¹&œJ.\ŞÒ”‹Ó“+ı9º™†Ú‡å,
ÉùÔˆ*Ïç\¥Ör¼“!§™*Ÿè»à¡ùĞwèIw’H=/ˆÿÚÊs9VšfÃÔNÑöbÇQ#k‚UüÓ€CûõĞ¢
ñáL¹…Âä|ŸëŠ$Òê©ç­tdU é¯vyØÕÇ¶/üÕÕ]„§‚®Q~°‡/”º†ĞÊ—¹Ö(¤”pÿ<­`Ï»;´“O+2Ç¼Ì;¨um ”ûDå½¥ˆ…ab‰0va=ÀwÕA§Û+‡W¦f¤ÜbŒNÊòß§ÊË¬Î–&&_VFº`s´ëÏşYÌô³ó~=Œ•Ğm•®gišÎş¨àM0>ÜÓ6[œ„~Çiy¼Lù!EA¸ÆÜ®¬n‚ˆ¦lá|°İç
áI•Ú˜s]	j3ô›ºÕ°FtÓä™ù/)%`Ú–âï)m®>Šc¦ş¨ÊÜÖèG´cÇ1]KØ ªÕ4\üV·‹ç•£Óãµ3¾‚³&´(=Çõ3ÃFV“û™w¢ˆM´GÖL	İ†JºV™›¨Q"0şĞà’ä‚ërá
ßXï‚‰#Ş aL¼ga)ÿ|ÅMö¨ÛñÕôxE	¡%—¿D>i—û3¤(ø:Nr|?¸³ä~TÒnHğa	¾ãEjUóê	Ñˆ¥& œ)•ƒ³ö*?Òô<Ë4OVb: RLµ7àœ²Z|µ	åKz†NOvv À«Á ¬v/&ÆwäüĞÅ‰íÈODÔWÖ$˜	fŒB2¼÷/fià¢üBEÂ¢×b3YWY»âFãÀõS³"[.‘ê£é”~eUÑ•^JL¹òıp¢W£¿úîa_™ ş,kÊ¹WÖzÊêÂ§ã÷b˜Œ:+xÇÑqñ’¿.2]¢û©CÅ2Fe³ÍTßŸJV7mRO}ÎšÅ	“\dd’jì±‹3{Â şÍé¿g[{½k¿ ×|«rÊúx3e†¡n!ğƒõ8^BûÁÓŸ	;aHÕÈ‘‡ZÜß'mdáS“ıÕ\l%F%ï}’èäkF9!Äõ0àÚÖaC¡ºP‡ñP{µRĞ‰ãtñª3Ãb¼ÏŠ°¤ØeIı Î'»¿ZÙY/Ş”¢§2ìjÏKîuxõ¹u/Åğ“a¿kàÆ÷—¬!ìÌ0—=ƒäS¼ÖæÈC\¯”<¨ñ/Ge¢Y(¸Bş:·Ó¾ç†Kõ»¬°s/8ÊÌšù
Ğ² Q¶´bäË±«Ù³ßàvE%KL÷ Ê #:!;–+.Š2Í~×â÷p|rü'A9Ë…´8,1º`-Ú¥ÖJ$ü.Ú†"#Xp¬Õ½V”¡û-viQÇÒ¹RÑÉ¾áN‘ßÛq'„¨é:·CiªrNC›‘Q¼N`ŒªlòvüÎ—búŞmÅêÇàhõÚéU§Eû~Ï¤äëoŒTåeBcš=™u¿¾«72Ù¡Hï|à§©4¹/PT’‰	Ë	&Jœ§{«aoJärĞÕå	·R¹)»¹Y°¥Ê<0›]Q‘»×ét¬;hRmÁŠ—KuA	×˜“Ü´ ±ÅÜó°VÊ{UÌµì¶9—#'cŠµ=•atù¥r’F’Ö¶?ÈÔ±á*ÓRéÏã¿îŸ\/Q6zVÓzŒö¦Ğ%ªUe­Ô Áj£'ÅbÈ]dğú9hX01O¼s±ópŠ#rÆÕwÀ®Lt$B.©5úÒ±Ê
Ó!›Îªœ[Ó"…f1Ïé ‰ÏğDRã¤™7‡öÕlõ’W`oğõÀı¯÷»­dÛ‹—’i¥OÕeË06¢ü¢óSGšFØÊ¿'IœçqOœyÑWDæ_[cÎ·!H£íèÿîK’¾={Ú€Nëm\e%é;¸òZYYPZçpë?	ôDA/+‡öy'³Ã¿:èµ•bÁAE#šâÂg`ˆrr,¬ïbJ«o? ³£_Oz<…ÒP]Ó½2×qmª
i³¸Â(ÈÜIÈå%ãÓY¹Y%nr8¸šaú™Ú[ej~˜jké^fú÷n¾úsÇˆ=n"áX*À$ƒ&øˆû„şÏbŞf1+¡éFç#©”­éT°‡Ì+	}È)ıñÌ“Zo86õ%ªüÜ¾*tÂéT=öšRM')úpB­½1`ï†=¿£Yn— îÑ´˜YÄ9†hòÃÃ°HoO( Î{ØøësúfğöâÑQ¶úrD0Š¦[„—ôÓFzÉ0zŠb'â%#íû3‰ù”Î/I¡˜W_ùQ&5|`>å±dx–ØWæ5I±ß¯=pÄÉúİ£bÙv¢¡„Æ –É'
Èˆ”€rb0n"„Eòºl]fzä§J½¢Ï0«A§µªøï%)N(½glâoGœv¾{¥•j¦ e_£¨ñÀeÌ9'åå3Œ- I]ùÅ`şp7§Âv~5¾|–—ëÀ#eLRm2ˆéÚøZ÷¬•¨˜ŒÛç |İ»@†%;2hè …Ğ´× 6)È1»ß´ÿûı€¼& MqÁ|§ğIë¼ß—“å°`fÚ|\ÇK\ÿÏ–?³	"³-öŞº’ğÔEG½Ìt/'ÓúûwGŒX†nˆ¯!ôîŒ¨;4e|Ñd«».¿ÿ|oc›T´º2µîsÌòp–«7ny;ßG)´½~ÍÃx—g£ºIdl²Ÿ	ÉKÁ­ÇÏ8K[¬—†ŞÇƒ{ıóïÕ0|ºÃPÂ;¦~=¿…tÙğHû^ Ì:9Ç›8ùÄæeÈ´Â¬òóùY¥2Nå4îS»ñ”àíÓ~S ™T§h¸¯ë4ª¾¬*j“^“{S üëmÖ#½·+µş¢·]ÜùBñ¸ÑÑü«Oß«0í—ÚiYâ—[í‰©ªÛ“ İÎ~Y˜N°a‡ŸíÄÛÌøAójÆ¥Ò‹TìgAçÆ`»ˆæ=°­ÌD~n+R‹EÇõ‰×êÀ7;…ô‚|&Š.iÁìLVt¿7e}ge‘ı§B
Kñ$ÎP]²†İ0ƒ.03Ìäçé’Z›–±/’@El·-épÍBŞ%œ½¹FkéXÜDl äæuğJ?gçìóÚY]¼IÈ\©½·(YuRB>RLkQïÿ¨ñ*µuKÖöšÏsA¦=|}u¦—ä=_i)ÿPµÁù¾ÕÌ½S'ç8°‹´ˆlµÚ’„H#np&…]'ª’*eÉC•u¾Lt‘Û,B‹ØÕºÎ|TuPóİ½ÊÀ¹–Ã­sgjë,‡”WU(ªQš†jÿªjâ¤EæÈ†˜Üè%BªyæÍ*€Ô:N•ô¼ÕiĞÚE3ıV'1:ã0ÁâM…¯ËŒ©øÉ©µÈ¦ŞiÉŸ~½ Å{üHlí:º´Š6y²×GJp$ÍÎÿ›ìdg/oTH©¼ØrRŞÆœÃ¥.f¢•ùßà»¶•VÕAÇ."¥pel
#Ôfõî“§tÀ’BÿÃ	®I¥Í;ˆg2C¡•*ı–€Šd•ï2{jz' ÔYSƒo×gË@;b¢f¯aKwç·yò_%Ù]vl»b½¸—Š]¯G¾R‚)õ"Á^ğLc	’¤ßÂì[÷îÏ(4rJßUhEŒ²Ï¸w%ƒ¡$Ø‚è
`<åÖÇ§I7MÖ$VÊ‚EV?iìx¸>1ûŠ~xÖ}‚û–šëcÒÆÎ§Ò#Ø#‘Ş ™ŸI°tlô³ ŸÄ~'ë…«MÁ%\a²wÉcvzƒ#bW:Ït÷ûĞ<†ÔÏ^|©ÅuZÑ¯–Yz…!xípà²Œç©\û»Õ;¹µ46é%øÃƒş,hiH¨¬_€DBç–`a“8¥¾ÄK¹Œ—âù+öÛ>š)İÄbø®Ü9©Ç1X~Åj¨‰ÿ”ÕØ¬÷±(væl.®–½w<0+4“²©ë4ı­ù“¨½)n•Q©pŞ7€>ö…ÜW´ü±vƒS 'ëtı9wÓ+À“„^oÕªaáÏÊíkê§ÊÍÓkEÁ+q‘çs€"†ã[¨¿n
w,ÂØeÆ•v@üE°ì.µ_ø[V¢<®LÆ;â×ÁpŒ”´"=>Ò\? Ù,’›”€Ã3”Ç³ÜC4é­†èl m_Û¡§Â¥~â!æT¹W£á»«kE	šŸ¦H~TQÜg'{^ Ü±BMY-t¸`1))ôA³"¯›òÇ¿Tí£î\T—Õ•­pj|V™=è™æ(eÊãßYÇè;ı±·+Ù;ù×3u]¹ZÁ…ƒÑvŠÄådáE9ÔmôsÃé[ìi $JwY½Bõ\°›¥ú8Ü_ë×gõÈØcÁ×•ğ ¾Ú5¥¢Lİ yæs‰«yÁÄî¥ZÁ¦!ô…kW
Ú—Ø'´êûöÀ–3#1kU1¦é²n¦¥ôSkn^²Õ•b]í‰M LÎwanÀ­9¾–iDÓeÊŸ÷£Å/İµ9ãåº%Pí ¶V?©ÏŒ¡-:Y)>d„7ƒY¨”ˆ£ÀuH…¢ÂÜÈù™ÀM:Æ[T16°:•äTšo¾‰kFMÜÃ6?ûxÙ$´š^2ªµAípd4¤“b;5»¢

px–½ŞMwöÜ}pù|8êATj”’K5ãàááŞ?«¿Æ1ı!ò/ ëH5ÏÑÕŞ?lòË(‰TÈpüÄrŒ§4ÿs<!)“üï·ô2Ç–W© ZO0Dóæ)7ËK³È¾`ÌŠƒ46şœ¹Š`:6œ:…ö>£,±bn>ÁnKk¼¿²,+ŸçÆÁ¤¥³Í{	]oyğ®>®Ñ9oûs”™Ş9ˆ%[*‹äÂ«ÁÖÊs¦’pç5fˆ“áÖz­h»L¼‘ŞÈPÑj¸;xsK8'm“Me¹ğ¶)'öé—MÛÌIñIe±÷ÚÈÉ2\±zçÏä7Rú~şÌ	1FDr;î»¤Uø½ÄIèåù%ï±äà½£Ìà°kb¶LLì¸ûûC˜|båÏÏOÃ2”ºsô×¡KvBtO®ÍwûÖá/S,f7¹<G/Œ4şâŞ+VLíãÅ°’¨üóÛœ‰åêeS¡ÜĞN`/¨«iU„ıà¬û³ä¯_ç¸Œôó½˜¥àcš<	A¶/ëb‡àxw¤ûïp´è­´ó™ ‰"îÄV`D‰ï}Ã¤Ğ¤rìÌ²kÜË€0˜_Vs;³º&`İ°Øib÷ŒÀŠ5Éˆ¤Lêº¾Ş•“FT/ìuík’Y•ííOÔÉDAl¢væNmÕõ[²ˆíQq÷RÜİ ª–ù×zèUËUõ¤©MmißYãˆ×>£x·ÉÃ2P
YZ{ĞD˜Ú	'Y]uÄeçŸEsZÆoí =ÙÓ±ÒsR3W¢zÔö_0‹šØˆ×j¾1@/bæYlŞù].o/îºdÏËZja…©*ñ‘nfĞÂèuèNçõRsqŠ?yqXß÷*¦³èµÀğ—øk›3RWfõBC_ä0uºw§ÍöÜ™
røü£ôÑ²J1Cj“ıÕ´Õ@dó‹Œë_A9ŒûbÜÀàÔ€’íşìzg&éÆ|ˆ¼•Ñ@¸È~¾;Ò|DÒ*;i‚J*0ª¿í°Á}Ùzúò–Ö0’í¹Eâ/…¯‘%¯ğbÊ)at½aãÊ¸Zaòf¢¯[xõXXeOŸVì&zS
­ŒaYüĞâ‘¾µ<aËŸëkµ óZÚLêš6}¼>İHƒvMfDw§…ÓÁXŠO`ê6üá›'Û/9øtºÑÚ\ñIÇ°ågdTîÇ˜¦üåLˆˆórcV0ã ˜xTöyuDÖ»4:ïü5îœé¼ï¸Y5ËÍBÕ7n ı´=Ì††ìtß¡–ƒ5·=wGi*şÏ.tJŒ
ÓÒÜùLix¹çpòÒ¡9Òº‡u<Ùs'€ï†_T’’ ŸI²	·`ÁP}lö(üŸDH]Ø¢ÏİºŸ“ÌmöÿšëT¿!ß£E¡“øD…úù\H{¨¢¶ŒŒ¿czŞÜ+¥¦Hß2±ŠW÷Ôsâ„·Y*â×LÅQÆ“Š$›öC¼‡)¢Pô.¥îÈªw2»ğïç›A—Ğ\'¥@£/]Ÿ )|ƒÍã<ø[1UN‡½gt­á€¬¹Ÿ©êü yäƒÕÉpüù¨´÷×BN54#ƒÃ	Ş²!7xN‚:h8Î,ï§ÃÈğ²ÌÈ_yp)¶†gJTlL+…[]`"„%ÇìËÈÆ;	´¯PÓµş¨I³vÖ¨ë?ºV¸PîÒDH¹ê­n®#øeÕ’´Ô¯¦‚c0‚¡F\yK‡T+û×Z b#]l÷û¤u±æ HB)áQFK‹¶Ğx½é`…¥ˆùv*ÍËÉy[,iFÉ#¿î§İ‚w.÷
õt„ÊÜ¡ÆšµŞŒ/‹æö&¹vß—™;€õÁo§P\æºX_(:Â¥ËF|›é›Ü0ïÖEŒb~(-0½—ñ·=o{LóÙıä4ëÕíÔ—êì	RÏ?İ}D^%õ»®9jç˜1Ï%ƒlt®oÓÏ›öEú9*‚{•·©«ªrØøĞj“áY‘ıe&ñ Ÿhz'Â¼¦
mâÙucIpQ5’Ï¸·w»^
Ÿ~ÚšNõ†%hs|”2~¹rw8ß21æß‰»P‹–A›*Ï5Œ*“j…j#¦Kê…Î™ˆØd“-_*$1UÏx–Ã]‡c&Cç!3/Ê²¶¢ÄN8X²ø¬Ô‘nPÄíhtq	ÑHpïèDpr9z"·¿lÒ?¯YGÓÇ§NU…øÉó¾¾@›«zPbÇNCòÃ÷LLr¶2Ï#»ñÍá·cv¼íŞŸøëê!æ9zÏî¿ Í“)âíL ÂÓ+¥Gbœ/R9{¾KÑSã½áÅœr°Âƒ“’YŠ´ıßheV‘ /õüiæÓîú…ë+¨½E|!‘ykàÁg´`à[tFô"ú;—áÈ»±òióÇféëoÑK" ,ÒŞ/ Ôí×L=Ü×UzÜÒRë¥)èÓ¾ ‡±¸u>RÖ
QG–dà_˜ÇEBÜ¶•óÊüvI%`üÔ]ñòÒuÀ$¯¼m¡Fy&
ÅE"–TtBÆò”ì
ö];ŞëİJºB¦O$Èé@wbï1Ùfì}cü{,ØZ¬(q¨¯xò-XŸöãYØg¥Ë©ßtüŠyÎ.µ»´èµWA?7ŸNjìÚÉYÔì3r7Î£¬ÇdÂàñ9RäVf2ìÍ¦(9ñrŒWµ•Ú@O0hÑ’ä<•fƒí`aYMTiµsp ¤.kG”¡/Gƒç)j¸Ú³ÎV’g&¼ËavU™»#AÇ'ÛèR¼ÿ:x1ÑPP”}*ßGÙŸ(mrÒáøf“—¯váÛ¡¸âıÕĞ€¼E^9]œ@ydŒÔn7Dô3ˆíms6Okı×Ÿ9	LiØËü±PŒÑuæĞÑã C8¡áy¯ Œqµ)"H)j
Êˆ‹üq§=7©v…gEå´‡¿Ğ[üGq[	µF
Ç¬³H{bó8Bğ¨ğd0o²b6PàP6`³R%í|ş™Û?ÅçÖç¼Z;Òœ[(ºJ”jóµ²:ïöÖZ‰ÊÕ‰×ÕútòÄmz¶´ôÀ.¯'¡åÉ«¡"ıíÅX\CüUÔN@ÌøbfBIıåÒIj°®ø—1ÎVXùuPÊÅ’QIº¤¡ÃØT\ÅS É¼d¯ÚúEb>•ëĞºUb_n3tŠÑ¢9ô•yz1ùü…,Ü³H•Z¨Â<|ÇÿIò„2#Yäª¸%a~›KBOåj‡J£ãµïÖ4’†57*>‰}”níÚŞü2Y<!,ß8´…r»zå)Ã;Qk-“y+~Bg:K÷=cŸ5p­|˜>ÿ–ãı˜«àİ¼­U5@W>xÄ	rfX1î¬Lq²ª+¦3Ë·¾+×ÎñÜ&3ø³,áe‚ZİğÁ:¢Îão£¡ëÔ‘ ·u|õo9;Y2íıĞİKZ‚}3 pîy³	âæj€ıiÿT/&kWl÷
9´÷ÙÜ ‰d)(`jŠZÇ`í±z/‚vQXÏ³¡L\*v›?}ÿAŞD˜ºÌ–ÓmmÕYÿtï_ir¼+ "]Ó@ô)–ŠsD2l³Ÿ{ğ'İB¯p‰3PYjıjE®-,Uïçÿ³”¿k1Q<}ÈI ™Ö 
DKßŒÂ¿@ı£ˆdï¤MËë¢î<ˆÉ^À Æê®]×ÆœwÓBÜŒbàa‹Y+¤°_ŠsC–tvØ¶YE‚ıµ¤éÅQ> W$ó!oPá
E 8Ÿ.ŸĞÌ»~XB´‡h³¶o•BcMãöNÀö^»Û 3pv!OÔıc`é´[@J¨ñXõz’÷E”ÜèJŞÈ˜r‘¿‰b¢ˆ“¥Ì4-‘ÆÚÈ’íâh<ÎÊ^À@¦nÃ_Z¥œtfËGİ„›»†fÑÈ:Eâô³Û¶Í0¥Ê^/éà&ÇÅpÛÆáë7dt6°qÊÜ’6FG)>Zr1Š«’­ “@yò5uÄ$¹á´[şöêßeÅ0"˜Ls¦{işh%†¤ûRF¤ÉKûgˆ¸TõÂ
‡mÑõDøp(cÕêù¡({‚/ºÈ1~lJÄ.ˆ¬åÅ•F%}$-ˆ°i}ß/­·dmxœzZ2Z÷ÿšW
»»3nˆÁdÂ\˜e]²ï 1ƒ9Ö:£_ÒÂk4·Ä‚ŒaQµ”©ËMŸq.ø°ë4Ğ‚]˜œafeeÖükÃ/9Ñ÷%¬’Ç„¼R–Aº¼\všÁ’3Ğ(ÓşÔú÷D6‰ämeÜ¶Öˆİ'¶RåeTâÕW]JÿMÊª©aı®ğ±6§ØÚ›Ù ”‚y¤ãPdñøĞTlG{5"ö±Y-ñ™«iOEU³bãÂĞ’ÌTv"G’înı¦µÃ¹Ì[<c9ª>.9—Ù©W`jÇ0İj¹gØ2ZJ§“…)PÇBw¿‰¨Ÿ?%êOlÇ^<:Ø"Äš”$zı­åÙÅ5ø©È*0Naô§˜[¶à2Â–“ÍŞu†œ¯¡T¯ÁÎbÜPTËœ®·C¨ÕLuÜôçª{÷ymÁ¾é]Ü^Èªò€¯õÌÌ‡Ş `TşP_Q²d‘Âš'Ä)”ªûÕĞVù$òŒ€§É‰d¼êeE[–œ
)ÒCù2,a¬û1 pİe[|JO|`£ºàG-"ˆa¶ìj$ócÛ~µõ-UrìºŒvDÍœäkÄ ïõ”RõQGLõ¹tpu7„ÓY¶š¥ğâ÷>XiVdtÄä‡®M¢ÜóˆÅÀßûK|j\ı}×MíÖ^ˆŞ8òe®5íq¢¦Ÿ‰º)‚E„ZâÊ>å;Â§kûïÚüâ/êî$Ãƒûz‰Ü!J—`co`:3ğşŸ-ÓÿrëfCĞÇ-ÇÃñßnş×ø4-pPÊœÔ(X´0JvØ®¹Íh2¶ã¹¹­I²YÊ14Òƒ!Ã˜ËöˆàëL5è*0¯¹?š m1¥ÿ¨=t?Ó?'BS æA…UJB5/¹'ã@]8ĞT.Ê¶¦×ˆr/Ö†:©—ÅmêoC[?"LùfÑ´õ˜å©ÉØı…zˆcx4PƒÉhKÖ–ó‹¾·æUl~{i­MëmT¶75¢ıpšİ't½MÈK¹˜#"¨¿H…ò¯–Û°0Ã.aFÈ®ºGñ‹jMğûåäÑpN…ÊŸ´ÑÁCİlõ¿xE¯ §ğe¹›rÚqÛ*í 	3ùö‚ˆ™|L°UÃŸ¦× ™—'İ¦|=~5b;0MÜÒ}Ûå&dâÏ5‚¬ç•™i5ÑgktŸT·&¯ÏÇ†³>ı	Ük;FñÖ9Aó_2¼‡òòi/ óPYMqÊÈŒRÛ»{"J3×_ê|‡´‡¾C(¥-òJ¾-¶„	w˜ÁÄƒëöfDªSoÛcÿÌÜîÚ’¤dé¸‚Ï–WŒt—£BdTÙv…QÈ!2GmÀw¸ŒÂ!v`´F
/¤7f×]fËÈ•›_¥Àİß=ÅŒ²Ö7ßG°ÉÒ{ïCnÎô0wP…ey›W-bá]Ò³4ˆSuµAŒskùãS%èÆÇVø¬1™ºÂgÜ­pÀÕÊWÆ†
Š§@¥&ÿ;W•Âšƒ€3ïE6°®#˜ñ©e™7exòQ›øàÇõHêXAŒ›¥¨\$ñá4ôz„x`,Õ/¾Ìc€a9)/,è3
\O]ÚKrå[«œ=…CÜªÎ:ig¯ßˆ±ÔÂI”-ëòmê€c “X?×­Ãçé¤®—§Ñ" Ûl<*ï…WOÑ®"¸ëby¡œaGÿã/,GXŸ1ÜN>ê°Sh¼cù~/Œ
°Y /£É°®)y°ª‹ùoxäøÃWë0‰eİŠ±cÔ‘#‹³%ƒ€—Ö¸
Ú¡ĞÀJ-ÛMÚûÊÿU®Û¦—ˆ$¡É|Î[äØçiéW³¨ô$¢T7W]3QÜØÁ1é†”Ï”ÅÜKÇÜ`wŒ„6ïãD§¿?AÈç~ªH45)
, İ2à×øØ¥Ò‚µy¹)h6+ÊŸ\Ö´‡-¤ãƒåf™ƒ’¢Ô.	¤eÿ×Š?Ïú/â{%¼C6`ğhÌí¤ÖLl5E¢'F¾®R°¼mnP!4¤ÇÕƒk£½÷d–‘6£ã¯âÓÇ’½›q €Nµd'éÉ`9xŸ_~•á0Û mïµßıÚˆ¢¡˜«XmM4™.Å¸İŞ ôKİoøs“Ù0ûÊÓÄZÿÖÀ›Ä˜WÚ2¶¹'¾ûòÜ”èT3íéÓ!á¥wùªÂNòv@Ä–Ï¸¥§}•¥ı””çsºŸ8ØZCèKX$rO®²yÌ• !Á¿ün&’·¦[&]ÄágŸõ[aŠÒY¥bWhvİÏN¦ØwıfTO¯ÂÔÆr‚óO‘ˆ3k˜Ãİo£fNs
E•?Xšè‘k…[mõ:YÈZùæ±^XûND…Êjí
%1ú®ÃYT¬øfÚËÈñmÿ
Âš[#ÚüÚõÀ,¬Ë¹Õ‘‹Òƒˆh8îŸD·ı;VùQÈ/¢¿ÙZš³½Ğ‚%ŒÑ =–EkyR z]üg¿™ÌbŠÀl-¢ï½MĞ˜ZØÛ¸åDJfKÉøÀñ—ä'îØ•†7j5x9Ñ1¡‚ÅîAö'ˆI19Ş%+•ûk_’•¶9Š‰inç•}ÉªPËy˜(^àÄÔm>.›	h~=SŸ‡ŸO•Zªƒã°NK!—Ô^÷šAËb¢~‚ÃªÀ‡+eú¬2
¼œäI2OeªÄøàò—æ$—'ÈÙooÔlã°°İ Ë
1¬İ''ÙèĞ÷}¦¦;>•¯Û-)fQ|;ÕşµSØ¨õQ¸tK²==†ğ®T-×h/õ£Ò÷¦iÖ|+\i[	MJ\›F6jÛApM(EV2Lóè¥ÇÒHUuÑ¦äm"ù2ëØ"¨†—%Şø&Eí=°×7›Ñ0üP™Çê6¤µ/­Føhš+	[ÄŞólÆc§IrÓ·ZÈ7Lrq%]—oÎ³.¸û`2¶­É3Åw„¼³g`×°õ+‚ÉÑK¸Ø—K¢#Å¯»ˆ"%ıqWm³
ú«Oğ‹î„„ÈlÚ¶wuG?.h£@§¹“–ˆ=+-¶|•œÆF60˜wLRµz!öFŸÔ9î×ûîl!?lPÍu6\îXÿLïÂ²Ş´6)9I¿ÓÕŞ,ßw¿àbu¡K/F‘Côc¤©Aÿ=ñ~šW__Æ€<éä¶2ƒ»Ä—z9İí6¼uô©EóÖ8*e"#ª'ÿ4PN¥¤×…2³UÎLÁPDÿp‰NMŠ­b1(›âY4`r,b+RInx	óªª{ùáÑ‡ƒ¶ñ|›Û’Òİ[bÁh”ËÏ¤ìœYÖ˜¬1k¦ä*ÛsêÉE:Ó}…àöoi)*'é)·y#voŞó3„¨py‚P¹ø*]˜FE_œŞÒ/aAÙ0>Ğ\-Ğ~%†æèWåKB¸m5I[.[¿¤3­Í&¢Ë‹!±¼@;:Z{T´jVÊQ;>ª¬PÀ Ä|~ë²PVÏ'âA2x.eŠÿ£={èĞ)İl|JŠ‰†XWßPÅØó ıîÕ¡´Œ¸OÄŒTÄá¥oİÂ¸—ÆÿNï[&f¬éáyåìÓG¡ôè\.AÒŒ³"Ÿ`ğÆ‰‡¸Ï²½G÷Ü·à<¸V
æ«mÂh[ä’<îX®º>é§O©Dô+õ0âSš23­¥Òh¸(Œ†YÈ	#ıPpöÃøRi…i\€hW[µ9@®ërá±§Á0HçT„_F¥øìê™$ı«NêÅ8ëÛAv÷¼Şª×uwŞ²ãË¦aA÷ƒ™™Ìw4ob¥BSœ¾J%b×k8Dú‘øçpPû¤DÃx™'Lrgı±Æ'wñ³ëNxŸù»HœÖbbê”bkëa%b­-kG ]¦V¬5lJK ©Œ\×¾µ6âSİĞÑJHÊW ¦·/ûœé2«(–‰iMÙÏî•,hEÍ0„úú Õ5cMå¼Dš­3OJ³ CgÁÃ	Ñõu¢[¼"
,~7C¯âPò>ÂıŸ=Fmˆ~$Í*ËIÅ(CÈ•ó.¯tI˜û¤àŠ9½œ(ş)cI_¡>ˆ©ÿº³Éeó8H¾×¢ĞÍÅ Ä.,—¥Ä9É—dã¢‚q™c]¤ ¾k	O¸¶ö•±41Æß.Æ¶d/IüÓ¯¿{OEFœ1@í‚#Æç?…Ú4 v³0kP¶\¼ANRá¾œ8\í:N>´ÂÎ>¼”Ázk~Æ#òéu½\s‹âœ©øÍV%NâJe˜à¯ÿ8êÓßÏÒ#¬
Ö1é	Ë«g§5`õØWû–ÓÖd~Î\O9Ù*Æ?¿~ÁXÀl§èD¨•¨ ÌgL5Ã¶ÍU«ƒ.ô÷Kc)Yòn*KYñ¥‘dPKÅ^\şäødñÔü‡nÈ€m#Àø¢ÛµOo‘ªÍRï Ã1š`rG-2°Ò kó°ç·ÄB,a 3Æ‰bÄİùìßn[éã¥›è|·	D]/ í«&¹jzASq·26ú3ŠÈïÄßß¹ŒÓ‰‡`è‡):L5Xš‡lÑ@òıÄ"!Ècú&ø RÒÁ‚^^şQ~¸Z´ŒÀğ¡ş)Ìç¥•Æî´âaÚ—A÷ÀCBÏfô€w•Ô^Ÿn"T›İÕE¢!}%ÏÃL©ZÈ‡á.Fz/÷8òº¾şßÁÚ)|
Ú8¥.`C
ıó81‰^™ÅwøEfjäƒìäo8<ög+kc
ÑwÍõÔñ²ĞÚÔØcdO£;^`¬Ô'›Hzy¸8U»•y§n`‹ºû‡…¼Ïä¬€íËXe­V-õkÓz~º­ïNy‰fİì] ÖE0l–~óÉUüÔKeYŞ<ûgˆhô-Ë±x“>ß[y¼ß‹¤ANó¬!äJt“YÛ?‘7»E¯ë¥ğé¥^àëq¼bLÎ¹Êğ8\jÿ{mİX,&<6‰ºjô¯¡”RbJ©Û˜B–.ŠPv¸ò)¡ıÒKñæó¤ö]§L…);ª5	/ŠÉÜ€Õd1¬ ?·³+›³4%2`gÛ³8,«‹ ò£œ¡Ú÷ÁY[©ëÏÒW5¢ı÷¥®?Ç[NŸ;_Í~÷Êµù°â'ÄÅ­£´À6¦éşkİêó/=²àÙ9e§ ÛØ#K¸³ÿä™B”–_NÕª¸S©Şÿ¡ú‹'6Ëúœ ù¶tşm&Ç—Væğ	¯cÀ‚:ë^¿Û§·ÕœMÉl*”—p\D¤+¦Ó«bäNt)åİÜh¢–zE‚#tR¯®R¼ä÷üBETÉ*nÒ¨Ã¢ÅãF5™åo}ajõ³ËÜ"´Gª ¢ªªÜK# n%ùÆfc®»èk«r{”È­<C­¿âFOÙÛ”kPğ½?—E‘àl¡ÇÕ]j;µPÿj®ŸØİÔüG_{êÕœsG™XªN ‘ªæMá¿lYÙ)ˆäÍµ)´å‰È¿¾ÆnËbØ Ï%Ó’‹,FG9¶6ë¬\û6ŒÖ¼•%’üo5Ó’Y>˜v0­{ÕëÑí~ÑÃz?»…&ó6š„Wê—èp™şm‰CûèUƒo5nmIó4¦%I\æe?2wÑ9£X÷•u~ÚâSŒ6fjùßKLSÌ6c¦µµÌÌ5íü²Õ›B²>x‰õîÜWt×÷õV[ìŸ©ùÿÂ¥ÑÅ´%ı‚`#V$^b©3nâöØ*{ró´¶Fk¬9nëòğ0Íğ€>(ÏééÏÌêxÎ›ç½(
A—às/jêÄ†ÓÉw%—Sn²G”–ÔüŞğz8M©9ÒŒ»¢™¤ã‡ÆjÓ'·wn:†r§¿Î2~.Û;ÙZ­)=õw˜Çİ{b"
P6îlvîî^¿‘mÓˆISd#Ÿi¢KäòWÆÕHâ”­Ge¢Èê¹\4.1Øàê×@íŒ°SÌ¯šWBÎ/0¤šoL®Ìór´¤¥Aìy×T’ØÇÚ+:VcÃ¶Çá>k¾ÏÔªtªYÖïéh´-m•;Ç*È?za`½4Æd`®óWÏ• ïÂO!:FŒ}Ğä©q.D¢Ø’:*ó 2Ê¹üs‡(3€ãŒ»¹ÆğÇ&Ø4pı¥Nï¸ç5õ
òtIÊ‘2WÎ¦ö†ÊTâxMJ®‚e,tOEÅ&WÒ+¦¤WG´ß2éDË( aD¦ /éè¬RFTó÷®Â4®½ìWÎŒ‘%V¿%V'MÀ±J{4Ø-ìü`Åö8ÃtÁ3F‹w}5ÀXõDß¬u?ØšBÑX™­Ÿq-˜=Â×xÜ¼LK\eI0*è&ŒñZ‹p°{Aí¬ŞUÀ¼¤WøéÑ0*#*Vª‘*2 ²-Éz˜6Ô5ÍM®©SK•B%—öŞšÁXímÚ@,
X4).V¼¦lÚšÑ}XFğç¼õÅ¥‹©:ß?2CªìüÓgF`ÎE²Ò	™é^¥Ã^c`­søTÌ'Ô^.sè-º.-#
<¢sEWÚ…óh¨µş”EÔôœ:àpê×¤¯	Ûô¸_ÎfÁ{<^Ô#3ÇvdÛ¡Ïõe.8×Å5*›Ñ³^Eî	§ÆÕ)lT	Ã9‰
ãRKÊù‰D§‹jÂ=ØO²q)'8Ìbmt¬nLÔià|ì°#ú¯óDPÁ²>_mpJÑÅ™Äœ<	ÂO0Üî÷K6t+V‡óû¬dÙA
t€ ØÅUüÚÏ¥ô%1UÑ‚İ¾_`Då¢ôãøì7ËvöÎ^Ao)^W?HìRĞKİÜ¬ÅíxÏº·ôZ´äÔG(K®™JI U‡XOo³ŞG$Õ‰1F´ú6z¶Òîg‰\Gá^šÅÿ»ëDÄÛÓûì‹ÖlCÊIgHG0¡“ÇŠ?øİ ½š$x4$íŠñ÷OÖµô‚myt2¼‚á-ŞAU;ùƒ¥…št;JG·¯Ä³„"„üe9~ô¸«á¨Z`~îƒ¨öì’ ?Òéòn}°…Š§Kê`£Åñëø	2“‹ =¥|­Ö8r§›‰Úîú139•½>ŠúdµófØ=!#»F­U*g)
je<BP»y¥ÊgŠw0uHo³^•€hª?ÁÍÎÎ¥w¶Ì¶j÷¦‰‹è5Av~6LÃêQÁ?N¤ ”HIĞTc]‚U{şK‡#ˆ®›øŸĞ¼Ù?ëèÊÓ­ñ×ÍvÉœµìL|Î(îÔëÓëõ G*ÕpÓÙ¯aWT‡ÎËônÁôßÖ¢9@_…™r¹r€³q‘û¤bf5ğ•9–ŒSî ›J?xøVñ†Â}qîç/LGlí­ª”ŒW$fÊ ™âˆNY‹SV OÚ×&8… ÙÇé/Roh’ÍÍ‚ _½g5BL³fsÍsê×‚Ì?¸ñ"e0qÆE¼IUò8Ó‡&u1òÉıCØTlüvã°à¶iğœéæ½2Ÿ÷Ò·X<ÆWöN2İó¡ar3>ë"K7/ÆÔ“‡g„bäétÙh&!q	Ï/I£øA£ºhq®vò/ËzgËA]‚a±$-;
Ót¦Ë•ŒsñA•oëk¶°Òàv¥iıK%?7åµjÄªI¨Iw^AP*ÍÄNšµ*€nŒL-&Ÿ0ô$äÃcu°#6N'rÂ?ºñ	Ùg:"Ø6(º’ë„&ë';f!³aK7#µ:ŸŠAìİì²õuŞnŠÜÈ:¾a^¿ÑŸ€Œ®F²B ã§Ì#l¹âuÆ=’ğO½s‹aÒ·Ûi³€.BQ{:ô	j(Yp5”ÔÉÈÜ±@‡.Ëq`Ä(N3³Ş#¤ ü¸iOX ì²4Xö.ä=ĞqX²~mmŒßIŠRi½ulÔC“øĞÎ€VhãÏËOÅ`,ye^]UÛâÖSù¼}eK•J#`tFò¬Ã[ÎÄ#éÙ±™I¨–ï$—U²”Ë ¨/ö¡kÆqö¨
hßÀğÉTÖâ04\¢3§sŞ	¡"+µofn‹O–¡í?Ba,Û!ÄÏ]‘‹Ê5îSÖèH-	v*²Ads·¡I¥)K‰s!îÈ@èêÂ+cğ´e¶~œ¶‡’–Y}à»¨î÷h_}™kÎÅóë4ôçÄéÙÙfÀw_ÏæRv®3{“;×3¦<¨”Éƒ´¬¡7MÖÛ«lNAqÅ1MN³Ç<©å‹'L
¦©®Y¼_†z×ßûZâùJ¥îÅNøüœ>1#o½FêQ&›êl¦Í”ÔĞuÈ¨—z2a×?9²
ØµABÈè¬ÌPœƒ‰árHNõî/„c;Jö]ñUîZ„"şn4eÃÏûŠ•V¸Ñi>õ‘®ÎtŒàW>3!‡*:G›D ˜7¶C`RÁ˜ïšY¼x{R6ôÏï“T ¾?/g¯¦ãgD{Iº®è‚«‚î{a@Œi»b´6Œ-šlWßíÛÖÕÑ>Ì»eÅÆ©	(CĞcÍûĞ+qcı!<NÉ·/vª€ÿráçƒĞK³¼Ó1oM#…ı¨9Iz'éö·¯óİÑR©ÈŸ›NáAïl;ÜHIx $ä ‚¶é«€{‚ª“*Á[Ÿ,¹+
Ş‚ak8Å‡cãš¢ôÀ»ğÙ[º#¼1º¿õ,±mğ1AËoğëáù›úiQ/ĞÌ–wØ6¼ö†J;©°ladä³Ò{8ØP);c\.Ôí.m	N¯»rLXŞo[X¡ÃÂl,U?Ón*o&Ãïû°”Gå5¾ipİfİÈ4}›¨×^•ZÁQHç!àVqƒrEf\r)$tz~.3^„4—¥‹|´8W+€ õ¯®qÍÓæH­¡ä³!ü %è{q‘au„%»ÄH;!½Û6f¹®bRç¹aÌ"¯G_S¦ºêÂœ&”¬R_øÜ®JQÆãÍÔbT_LåG˜[í&ˆùÙ9…ñ¦‰ŞÓKı%wÔOW^kA#ìRÅR«é€ÃèD˜`ËQÏ’~5ç9pêE} u-9wìÛ?Â”Š®šİi¦Ä;²›£Ly(ëÿ#Ppğ"Êª/®§sş­½´–#[^¾af¼tX­j‹\[|Cu´ÿùË¦Ür m/•hÒHj”.SªÏmKa«càìÏÑÁYÀÅ"ÆæÑ?$òŸsÕ·2oó„Şú¶“¥ïà–µùaydÏ‡:ÚyUî*Dö@í!ÈÆ³PtÙ†îö<Oª‰X¸2Å7mš€OÛü©÷T"ÏÏ`§ğ©ş¯ÄpĞ2ñ«j©†ôg•TE
Óä)n¯só*/D)·£ Jƒú]ª§vŠZ2İ­ ğ Ëõú¥“™¥Ğ+‡¸.Ğñ—?ı¾ø÷•CUxR… Qçêş_áìôä/ö¡ŠÄÒ0(¶¾nES»îÿn3RªfÎ 'õ#’3ÏîX<kO=êY– ò#ÕšR`¡Øú$d­#|€)5¦ÊæÌ*L`zuİ/ÒË©eŞ™‚²Dø-³
¤/V°A:HÂëÈêÇ¼åJŒô|¿\À¹cšt=ŠÓ°¾ìÌùî~L—¦b¸¼)µ,?-v›°¬E»À’ë/Hï›VñÈázƒ6‡¨’ÌtEÁ?˜h”N~6k²ñë›`;Ğ4]û]“wª?u-‹¤c¯wCß²±s›¹hî°£n¦˜Cò~Ô	I¿\i£?…Õ4Á8SkpÔYÌ=·Ä\L5‹Î­ÂœäÓ\½—ÛS•–ÀhÅ	SÕ†°:pöœ†¨:ÃÔÇgxßQúMÌÕ‘3‘	õ°HAíøç`šœ)BŒxXğL‰qL'0U¨Ô!M,P™Í6İÌÔYIK¸š}-x9ÿÊ‚¶ÎØx«”İš2u1ìz§37E™XS…ıB…&í	7F‹)’¨íÍ…±À;¼ï±c~ª-™^ÆìVÍA°b|Œ]ßÇf,D¢şÔƒ£÷VkÈA¦˜œ	Šdº_F¦j™;3òK.ËnÖPŞºKçğqæy8	Áj¨r6ÏŠ:­œÌQ(›¢®'Ê†:5{oBp:WcÒŞ¼İ,gyä¾"’¯Å¢Ğ¬ªá˜Ö7Ò¾¥=Æ´zë+í$†…–^w‹œ±eh0ÌÌÈép(äI÷mCÙvu–S{4ı¢FFù°¬àRg¿HÄÒ°@‹’8˜qAD|–eÍÆ\6¬•U˜Y\ pf$6r„–µ'S¢î­'õ<1›Wá¨`VË\'a_q!tûCÆ³TşjBÿ½ğ®	†Âİ3W„R}âg^3€°ë÷ÿ	âW-g5eF¬ø?VXÜ«KÓ4j:lÄaéüÖú‰*–f.‰…Ï'ÊJ—#øIV&ƒœF{|†§x^ğ$]’˜~¼òYÒÁn¿) óçô+62hIh²~)ŠÙøŸ‰Bùƒƒ˜NÄ-Kùf×rX¬ {'ÀêZÑ‰3¿–JİåÍ£@¸šÜÕs“˜š(à`-¹ófF»²İ–h­B£ƒ»v0•»S¢f;àTçá4l¸‰øWEïš:¢.‘&Ó5¤˜dÁ£ ¦qØš`fıG/{@^$şL#‘¶©ú“˜Xš¨
#§uŒ9UG»Ã¸pÎ|İçJ¤tŒ3©Ÿw:¦€*X«J/RÌ`ÿÒı‹òìñh:1Ù£EØßÎK–½«jª	*7#A<Q`°}¨Ò½våG>îîCø‘ŒÕN_ÊÂJêXƒ53ée›!fÓŞeDÚ©ÆŸ¦½¼ß?¥ô“Dx‘aæE‘^Õ˜Çi°IœsÆS<SEÆ?%];&óC}õÕÙÛæ/écî¦A~§’`[R
|a€ Egò•,Çæ9Â<ĞªA`Ú&´zà!LŒ#¼½yC£F…m›{ár]
d}j(ªl}İ›«„à•p¾—Şéü¼³KBuŠ)»pƒ*às‘ıyH§Qçn¶8\ØÄèƒfLşV‰Ø?Cl–LfN™,‡œO®%QÓ„¢K€˜Tñ+øf£EBğµÅ$#Éqé…ˆå+ÉØ[ÿ`&kÓ.°š*å"šßWBˆ]’G(u\¿öT¢;áûè{ÅÌ!pÛ!X¹ÜÌSË7¶Şª2C$:5P£b€[÷µ÷U«*ìú#/ıœ¾¾<$rà•CYå–LÙ¸IjÁ5€|¹-“Nùà©sœq˜ğèÂğÃc®R ¿ÄüY+Ø®}ìˆ Çã¢ÖoŒô/Ï„– Vz-×á}÷[½ğ&ÓÚ¨¿øÏõ%³æ­#òÛoOús6±€×è£	
}"€ÆSå¬9.9Í¿o‘Cg=ËNì™˜NA])ä£€µü ¨	ÆEàä'ği›%®$bçôÎùÚSi‹¹·b?'˜•‘Àaƒ¸ºl¹‰q†¹‡!–-¼yÙl;Û&¶£S=b’@â×âs‚>i¥#¥×™õåGÛr[b	¤šä6§2#,˜kx¶~5’9g¡´l«ËºÀõ‰ïß­/Ì+ûï·™~H"ÃnÉ¼„Íé°¾‹¡{g¤"EµÀ‹é›a6FÔâˆ+9ügP©jàÙúæ}Ö×Òù–5¶Õ¯–Oq Òö®ÎŠZ×RøÂã0]Êì¼™œ	®ĞÓPl«k_‰²î5qÂNˆ‰±Šmì~ ¿ºf‰2®;h\ÅOñ<,çGıpƒ¢_fB J[ı'’¡rdç4 ÊŒpæø>Zg?ZŸX„rÌïR,Áh<›×‚¿"#<‹î¦ËÄïŞJV”MV²F%*¤®ƒá[HA‘írd¿s2u°Mw™¥ppIbĞ@}ˆ”s
¡Q×#ëdKş”OäelSú˜O€ØÙ=tÄ¡Šò93À‘.ªÂíH©û–i†=B$Î	®
|9‚êñæì°hê4gXdŒ*Q
  YÏbéÈ±¶¡_Ä…YP!™«	tcëÑd@¾å}WA‡²d—Hı+;ò"_ÔÈ[p;0åĞöxğ³hfiXªë‡]Ø"ñf·¸=¿7HóÚ¼ô”–QàŸ¾»Â·ò½7âöú+Œù…ös‘¥x©I·Åœ96`Vä0!'5¥2l@÷JPQMß
G<CáF4«¯ÎØ«&à·¦'reÚ¥\GÒM¶5Ø4ı·¾/¬rj/…?	kÊQìqÅ-_ pGÛ»ªÈön¹å¤|ÉÜ…ñğûÓÑ­'Ì¯E­†ÖÍÃ æ¯Ë˜Ôáf@Ís ~-ŸçÚ|ámEGñÓ®ÁŞ¶GñÜˆÛ} Rp"ıJß9--Y2ÇãD~Z¸Æğ“wÒël8¢NıBùŠ^nWÃR¼šäÈ¸2õ
bdd1ø³Íh	fÿ°m5à|áõY*á /X·ûÂ7ÌùcL±oßşœ¢ˆu

y"¨%dI­»a'·½/¨…$²xJââ2"3²ÃŸ)Ã*tåüv1<iùQÉ(qÿÿæÂ{uP&-ö9Ònîİ×{Oy¨ÀÎ+ñU¾*°²¿ÜpÎ­¨ó,Õ*¸Y-gA7SÖ†xı‰İø[ŠKtw?Xåâ†Ñğ¢ïïXÊ…6Ú§AÊõR·2–TëLç"©ÜÂAi¼sP"KVÍ*Ù²ãgÔMÙQ€›
¨àèoáÜ§|OªäÈzÁ„¿X,~ªŞ*¦!·!5*Ú~Å%D:ÔkdŒ?¨4)#â:©îª¡¸qëpÑ§‚7ÈGé)ÏĞíšfFÜwàOè <àNZù®ù×3FBVæœn ›2Ùñ¥‘R¨V27†Æ"‚Ï‡ƒèì3*.Òßy“ M”0äõÄüK Ü’O| ™¸ÄüáŠôÖÓİö‚*Âü}M2šj½l5Vùä);‰î¨Â¤Â|Ø‘° Î‚ÕÙ¦Ôâ‰+)@åß:A{ìµ‡Š¾Âº¾ Sqe¸Å÷ŠşaÁ®%ÎÜ—6wtãóHãXL,‹èêtf'F#¶y²µ“S0Ê©¥Ô®Ïş¯W@<Ã÷ZG~Ö~ ŸZ±ş!”û^•&ÅÄSì")ÃkÅ.JeG,(ÙÁÌÜşıgœY¯}+öÒ7˜¸úÄüfíƒj,Í¹{$¯Ô›òq\JœxËFTh¡ï’"VšwïBçuD†6¸’Ø\F]S7:B»a±âÆïÖp÷cù ï’g?t„†?G‘Ã)Ñ\ÿTKø>7‡€ÀÕ±B…Fñ› µhÁ™ìÙeŸy0£‹Èİ}‚;Q#Öîdñm¦™ğ‚½Ûk‘$<Q’U6êXé/ ?d·ıÿ×ä=aŸàVç}!ªß³ÂÜœ.f¶t‚0Û-tí…¬ G»ŞA< á‰“„ˆì›¢Jƒê©Äa½UŞÊëbîe§xûxª¶²‰@
-ß¢C4´H 2ñAŞ—Ö5ı‚Ï²å#Jş3‚;Í¿F3UôE	Ñ	ÈØê7&Lı¸èÛˆ©‹ª÷ğ|¿4.0ÊiĞ9§Ñ~Bû@:¸×M¾—_cŠC™xs(¯©ÉñO7ÌnµŸ©Õ¿dÔvÆ¯”/’YüÎ_@ğŠÂ¬òu{•š
ÃŞ±]ùo¸ÕåÑ¨6¹õ­0¤¤àc”õyKÔ<õö&…–Ò
NıVÑÀ5;c°Øzn¢dêÕ!Ò'VvDu,qóˆ¥o«mnì×š}Ù‹ÚR›šj;©¯Œ™A‚‰ŠªùÈ*Tüœ„a§‘Z7«åF“Bµ5¿¥Çö1< ‡¢êŞ‡ÚEãüé2^1«ìÃl¼ïßËë«¤5Ğ™âp±åF­ÿİ"©L¯¯ZZ ©gÓÓ,Z=6²üA*Ú~
kK¤.¸.Qã¶Ïåª*œÛ«(Z	=ĞíÆà¾˜ä…9Ò‘º^À;,¸3!~ e<•ùƒ±0áÌÒêM KS¿Û>õˆ›Y(BkÒİSÁ™ª¹Q#¡I%šZIbâI÷9ÆXmõX:.®÷Œ 9FE*<òøxfb;›ëºÙÅ›ÓÉ)U3ÌÂçätW†e>i¡gp4W³2l,Ÿd®—è+%áZ!˜¬*fƒú})ÉÄ8Å2[ËŞ«Ä×(¬ÆÀéµ:0y¥”ù>Ò¼ÅæÛü“•½9Û•™çoER_•Ğ¥¦_(9‘2Pæ‚s‡'ğÚ˜699«:R•Ê­E®`mVÛo’ÍÄSÅôH¶ªíW6ewígˆu·a^¨}í-ù“nåíIİÓ–Êwö`WpË×ëğ¶†è½áƒRè?"»şõ¦¢ «2I-æoõúÖL¬î‹ò,ÁPTŠH±iÓDÁÀ)Ä”İ¶‹MÇUË˜V˜ùgZëáp+Ş‚cŸ3éì¥$\õV>xL&"
»Ey&y‚¦bà»EH»¿M[Fi•úå¸.ptğŞş…ĞjO^ßö”LÈl5<ªlj‚¸<_ÔA¥I9Ï.¥¨™äâoªLÓõjÆ³ÖQà0qŒ¢:ÖsõÅ@?3»ñıÏj˜@ÁIêd!>Ls±xUo·ÃGq†Û)@Å‚¬._˜õ$5ÉJ!¤OİœÎÀËG%E_;®r¸æ¹\–LÜşmäÔ+~ÊD¾º§K¥6×maÿ ¸2ŠOpdva`IÕ:¦Ğÿ¡İ©øHßŞ^7Auêİ½”ˆ?§g WvÄ›™ëE‡5
s»µò?k8å©%DïfZ–ÎšC§):¤Am„Ü¬¡«usØ*nŠ{›â™ä¶]Íİ®Sh"6]Z$w‰åˆ²æ‘DU;$ªd¦ş@Š&ß÷è”VZ~Ô:|–Q¨óÃDõ#aØógéÓÊ³xĞ¤²µVKbû‰q‹%°bÄs^WX ëªAÆsXnüËÇ1Ã2ªC„„æ­RqÀ ë=çH <h¤-ôŸ/š–\§<[òî½wƒ(•§îÎÏoÈm²uÍ+¢ˆ„—yi­Æ\½T‡îÔ‡Ä˜•ë5-à¢4ÁKLÍˆc¼š\Í–Ëšò&w¢µİ‰F·<ÈJíRãÑa."3¯èĞÜÇæxö8àÖgõÓÂ4a·ŸÔX	¶:ù§&æ;¯aÖ!"uĞ€ÊàH!~|³ÿŞ­;íÂé—Te-ÇV’ n‹qPöö;¡ƒVÕèBh‰%/\ÃY¸ÙÅ@¸ÅÉ¡ŒW«ˆ •ŸÔ²E=C#5{íD>4Rö*×Ø±Àì|xdl£q1Ù«Ö\U«°Ş p§N»qÙFx¸%øHÛef´¹_£[’İXOyátŠ=ôTœ-ôZûZè^BêŠkÿm5lßñCúi…ãá‚S;Ã¾aÙ©7µHíx|)Agc‡%Ô3ñå^#°emùBıû¾ˆ¿’t8àñÅĞğÅz˜)üÓ¨rG6·iÎºÊëiûc:')»Nß*ûZ›ÍÑ§•õş%ğu[X|P c™G8-ˆêr <ò—c8=™«·ñ£Umí=­SÅáè:öæÕ…/Î§ÉoÂÑÂ_!äÚåİ GÎï"5¹Rx!¨1AË‚uî©³?#Š§x“q³.ò#dªõuåš<!{PìœN
D’­*·À]úùZ10R“uiü&FYzkgó¨»ê<ï+o0_â« z>Wši²½_Dp£şÈhR¿v[½ÏD©6—
ˆ_mDÜ×h+ÚÅOÜ#»Iêq‚Æûˆõtiòb¥&%ıåg~­=B//¸o%^Iœæ<ÓzÓªQrw€Ô4
K²ºõUóÇ‰=0ÜI`e5³?´‰¹æÇQİÓôÚW²45ÒYqâŠC*ßAšgMï k!Vó¢`Çı×óŞò/^}i¶äĞ i­¯Z=èãyŞ‹ÔÌâiš¬ƒ èÇb×´j²®®Ôa^—U“›®åWì±ÿRÂ>…2ómü|;²î©TXÜK¥şSçÄÜº­m)FawR®)şG¥ÈŸ³ÈÈ]ùËı6mGmTæ(²T×¸?%5ö*Ñ$¼Zÿ[­°ÔqÁDååûI’ãrÍ c¤D<ÖZø“«DËÿ—=¯ÕßFÀ?ŒlÈÌUVr!G:¤n[ed„pŠüK_JX,õÌô8`·¸—ğˆ‹Ùdc˜4c2ğ¹âBGÂ4óoæğ¤j÷Ü²–™«3«ßTÚ½îÖ•
¶±˜¥ùJ3NAAã¦	X;j¢f˜Ê‰‚zHÃR}R ¥$f­Ìr€Tr5…I—A87+‘tÊÅä©BRÒñZ@S•=¿Ã9¹/ÇB­XÆQÁ5Xì‰ç):*`Œ;N#o¦záv^„`½tg)!K,Öv²¸K{E½]=ÌÕÇ
48pı¥·>”§_QÑN%‚¬£iã<3x_öTÒã«u,{k–]û—ªÒ
–¶`Æ–~m“ş¥eó|~¨Áä§dÙ}êÓMæøj‡fr&o‚ÁQ ªx´ôT(t_ÂõJ*45ñ–TZFÿÙ¶ĞX’ûu¬¨D ep!ÅÃíf:ÿl[jª—Ç’©IaH¯n4—~=äDónîÉõ/êH¼¤Nü“„§v-œq—¸âv­n‘JßC!Ä—Z
q-ÖHât\mf!…9àLè/í'ˆ«‰mé9çï> SŒ­>Ç 9¢‹?}=ÌÎÜ)ŞÛºÆÍ—Šzæ…¦íşÜÆVŒÚAn]™ş‡¡[^†íıÜÓS¨c|l«¾,ß,¦
‰û ÷èŒ×ÏD¢×ëûsó\(]¾%r’S D
È š4Ã—œX×”%5óíŠŒç{ˆúëu",:	2qrÛHKàÁ:Î?ş+ƒêcIš´(,X`		Ôbß˜JÛšI‘xO43hT>|°CUşØ¹›²OáØĞ4¥
È‡YÖ¢@›-,îÿ6ş¦ı>è©h¤Î€ÅŠ.w@•5ja­½Oˆ6tı¨´Õ¤@lThrßñ„‘¢£5·ßa,ğ›â—ìEEôqC–½9í¼µr{«1Ã_ô
&’Ó+}åâX™Ö1za¶—-â¥mÍºåÉC8Fhü/nÅ›¿ 	^Ì¦aù¶¸†A}Ì @ÆíÆ÷,«&GÒÙ©ç¢åÉ4v½ìß—u¾‹¦Şi.Ó
İ$¢£‰Ì?k¥'oO;±Oqó>ùs8½Åg_gqÖ­pQæ”jµg©.,‡‚‘d~nS†yá6}Ç
ü©\§=_ùqaé|–_c\…iWs‚³Já{şmX7+ûŸU!«ılO =>ËŞÊ·0Â|º]%:=tßo³½ë`ïşÈ`BğÛO”N"SÛV9ÃºÒPW“=qv’İ½ˆ·3Éä²’!œ[BŒL©|Aèæç6oPz÷g/-u±ßŒ¯Ğ˜#“¨vµ `È	àiÆz
ôr?lÍ\¥¿ÔgÌªü`j÷ª2Œ¯e-@ä8È"Ê Üãò¤^@¼‡=£’Ã,å¯9G§Ÿ|ˆ’Îº\®ì¥·ıÛ–€ö´jŸM5(éLW¨Ö#×CŸ-;ú9ušµ8¤ù³!Kâ­òŒ,ÑO‰…†¯ìÜ|_ñ§r.^@	o› Ò4™÷”xaq  .³Ş+6ø„%âÏ[å}iŒ¸¬ø8Ç=æKZKH²ÇêD&?U±@t”AW¬/Ñë`»Y°vûƒıÖ›¿ˆ²R7<¡8W¶qş Ñ!Ş;#İÂX\=:µ¶ˆ=‡É³ø ãPÄ“ãG€oÿÂK¤ßÔ¯§üõñD³Sğu<%ÔŠñó‘Š@*½0Ğ¹‰„yípÊC³DĞ~›gõïÑ5Ø¸öù€ÔJôd²°Äc”~v*Š-˜×n5ş™Üh‘cz\X"à€(FõÃÕôÄú×!©ôÿİÌXoÑf/©(šJ:¨²ñ/hö
—*b¼DM<ı¶°QHÍ»¦ÒhçÃ°AW@Gf7¸º!‚"%„Ğ^²§â·z´ÂÎ
J²ßœõ)‘Íødo*ö7šµ—R~´·øú¾P£Áw,¾ê6zï}~&™ŠóT…Rbÿ„‚‹øô•ıK¼Uğ’ıF¼=ÁnrSˆù–ºoæ rÛ,¿Ê²AÓÿşmäƒâOúWv˜½2R¢¼ôg©S…ng†íbËø4w¦Äíáè}R¨mìf‹º±«a>MXÀK(Bfì#—RÔ˜.³ï< qUï€sUåîÖ@k\ìvZPäcŠ¼§Ù²”¨;BOË;¨±Gõ¥¥n^ùµ,K¯ä•Ñù¿÷}ß­µ¢s.´ãğ÷lMg+i“TGŞrf‚l™f.mœTSÏ‹*ÖvŒAõ¾±2~A?È8¼‡¸`1ˆL£r_CL¦ ËVµA¡üòx}„MÀW^_¢H«æ3şvÎjÆóA «{ƒxßs¨9Àoñê‘´ws	?À•tÎÕò?ƒİûvö»´”ˆ:¤"ÿ‰Ë’.É¨vÜ&êv¯«h¤ªĞıƒIÆÈL26Ø.`%íD@´*È@—­1Lq³XAo³ë÷ÁºÉoÓ;pD¶°Ë½Ìû?"Êw;¡ª¿D‹Šä™?Oü4¶
7ÂYB¸>˜+Ã×¬Ù:ü—[4MÙÜOí³|;äÆİH8â1a/u?úŒ½şNåG|Aøß‘Zôpü`“ÜyİI /Eº/ qõ”T‰.]wã»ZÜ“*¤óğ£Jà M‹"j3ç-LjÛ+.BÑ»wæA<T{K’$¹Ÿvù¨Ùriå>K¦©dö?¦Hà|Ó/Óya$1S4nH¿ş¡….¯óCıÈqìÍÁüä´´l1ğº\xg\È´)’xoü£_ÌËWê#xŸÛ9–4bœ›#iÉÚ/,1Ñ|lõdÉÜ,Ò»ì'Ø¤WkÄÚâª–I°‚Qv‘Aîsé)ŠöGš¥Ë[ñÇ¼ÜjÎoMFxÎïÀ\yá~³C‡Œf‡€ƒ€fÒéÍ•´["mğ¶šÎˆñ¯k¡ŸÅU÷¦›#ª
•Gtí~…rLWJßşéÕ@Ñ9³ÔA)Š¼' Ty!÷UzvM¡ïwä˜Ş¯êôÊêkùŒ6DDÉ}õî‰4è?f7%Õw&_GÈEÃ ˆ‡õcw¹ù £5èX‘™—Rw­-i¥ä¸û³ÊÚŒøèWä‡T<lU'¹¿Î*.Í‘%å&¬‰ÆŒ˜¹’È8©	hW³¸i/@…n~©%Št‹—t´Şì½Å02U7'·Q°qíRèİqÈÓ‰‚I½ésë»%‰©,½ALbähZôtÑí áXKP¨DØGıb÷Ü£şGÙ\\¦öWı1Â…Ée´UW<-ùH!SzsÆà4f¥(³ª3à™Uë°OÅ"5=brë¤¿i^ÌKœ"Ë[P1ÇJ6ÃGî–À;JÌ,£ +Tùç Sş"ü{ LIu %Õe~G"ÒRŒe¯kæ—ùT8>™­Ì<&ê¶k'œıÒé^¼ Œ]Bğ IÄ‰í.Ïƒ^-=Ù„"Ü= ƒ„şj	|/Ú ´; ½á†œçëµÖ±	–û­TûÕ;jœ{iVÆïÅ
ğh©åú²i‡=w®¤ªNáÿÃ°Ğº—Ÿ›ÿ(6×~²uœL¯—Ót¥ˆâëç¯¡0Q$ØYGŠ(˜Ã/<Ì-I^à§ıÔ}dj2Î›)œÈÙ¡9îqÑj›!×w›F|««è
iÿ]*@Ccµ_‘­æHÔÒ“œ¤oŒ(XÍ=œ¼çú0œÃ'µ$"^ôğ~çñox\¸Læ‰z;l˜e>âöJ,#°Z"¥N4G*!ÏˆƒÜŠİr·ô,÷ º!†	×‡#qiªİYÙ×ó«üÖ‚|
¨áminrYD¥øm%ÉØ“&ÃÈ^v­KÕd…~ö®6áıyàéPœÇZò¢cs'º+k}W Js/p~ò±•6~Õ5Zv“şûEùäé6@®§ä7Û†‰#KQvÆiKÊ+DoÿK<ÏdœA^dT”LÉ”Î³jLf.7Úz‹Í[úúäÒë±)\ÂĞºÓ²±Ñø=)ï„Ã9Ài¶›Aá³OLL”ÆÜQ!&Eä².IõnÉP¦öFqU³[ë×ĞÃÕñ&9mŞ`ïÃ|.<x•åÙã¶¼‹l#rÏ¡8?EaÑ˜ïËŠí-İŠA4%ÇÿLQ œüœ34È2¤ì%'„Äé#VÏíÇ_Bç~'nMïIl©²ë²Z¬‹%ê.»$P?Æ4%L	ƒZI6É%ÄåŠ±åÍûjdæ…œé©€Ÿ‘ÄüŠÏü~y€u{oÜ%òÂiİ¥4c%®Öì>ãFe/´W]3»çıË¸«8…Vô¿°É/Ëm«.Û]vîóG†Ÿ<×jÿ¾^ÓÅ×—Õ±ñãzÁvL°uy0§£ÏaÜ4fyk–Nd±C™:(x9 lêĞÒS¾=—ÈBÈw·š¢p™H¯7ô"’¨wHìf^YxQ‡ErŒ2A‘ŸÆ^ÄB*Š[èñW¯K—¹û„îÚ|¯#P¿Œ%6áiB_ÈàÉ(Ñ—¿"ôUSTEÌVŸÄ³‹‹x‹şß&ÖÇBã³Ğ8KGå
ˆªõ)¤~fÖ´WU×Vi‚?±‘ê£:YQı8ÜŸŒ ^¿^ÿÇbeÔšİöËèyB(#ÆªŞ¶˜­¹c‡Q¶A‰­¨|6#7ÿò˜@,Æ@ğ HÜBÅ¼¿€HEyh|Æ¡mÔ#Åæ„•š¶k	úçìø.zÏ­¿—7¨íä´Î‰=ØÿP~¬ƒ¼4}”>jg‚ MÏQßs2×xk¤so‘¸êŠïªR°WôR6A<ööŒ®ÊÉñpÒ­Y:È>\íÚ€ßşÀL²@mˆ+@\€kg~´h„+E²ñ>K‹–>LÚV{1Ş’çÒÈÙHO'hˆó ïÑñª.aÏ{öı4i¬ +îi<bƒÇ‹8“|²E›
rQÛ2wA6$!RÍmçfbemZ²n?Œl39§óE½	„\á”åıòì¶W%2Ú]VŸ~ÇğGy_®Yé$%ô¹ÜJŒÀ|_FÆxİ.°ÙòıoĞaÙ¢oşb¤n¦Éºí*´É¬œ$j“Ÿ±R+ZÖkæÈ¡İf¤ÃUøŠ»v}_àş¤€™¹Å¡DËÿ¢|ÚŠ]ß&9	:)¤ÁkoYßœ¥#qİÆ{H[Aù»ìé@×¨z“mŒ·dëeAê02G¡bb\¶yíKÆ–"íF[&«îØV‚:ó8õKÅG3@•Sã%Ò¨B#'©üQt³SµºXÖÇfoµÑêtñ«°©Jı¯ÃSñ[üPkí Ûõà§=Š-ı3Æ¢îD5VO%q²<|Q1åu…à~
ÈØŒb¸€YFoyZd<Ÿt½¨¡ áOnˆ @°ºaO÷¹M‚Ên}ØÒrŒÛË°u©î§ÙY£zü…àÍ@Ô06hn1€€íüƒG¿÷÷cøø¤ª–ß45Ô—$»°–«=_kJ¡	uUZÿ26á9ÄÊ'âQvQjS}3`²¢ÃLûìîÖÿrï²³Ù4  æÍÏFFõªı}Î=•¿|šÇ(ö3³E¿àd”çt™‚
t”›×ô µ`çHÎ*#ÈE7E&ÄqysM}`ñ²z*)ç(Ñ3Ó(j÷äÅ©•ÃQ`ÊÄSkÈJ¿È‚f6‹Ûü ø½î™ºş,Z#Œ×°nùy6(X,7…¬Ó;8q'ôêéÜ÷PN»ˆwúúü§c\8Ğû…éV¼µ$ß/£Q´–_ó<g$u:Boí9ïÃw.ä¼FhW!Ô“§Æ7Wª·Ì³Ô"»lGcÍ¸>ñm5ç{]Û*Ì¨wÚ|“c³hÊTQ[Š„wÓH…ò^Pwå<}ÿz·„af’¿o‹®
Bx;‘¾.‹©ù¾³ÊÜòÏÒBæ[KfÑÿÜèºÌTë:æo¨’7øâ©}ğ£äp’:0™ØMN´‰Œ …I«œÖ@\¡÷i
fíb$ş'-Š+äKR£å†ÁP!š5ç¨Ğ
•~å¾DİÉÏ“P—ûÿG¿˜ˆ*¼æhöPsô¨¾5·£)9«¤ãã3âÍ‰h÷zêÒ
åu¥¶½şEªˆìò/)qıîT­G)Ú×ŞUWxP6CEŒ}²°m5x¡`9Fï_Á™ÄlIßœ¨MŠZR_0A4ÎÃ»û#gwÂ30Ç0* şQ}Óšå‹„ä’ö{ˆq²İ„ÄMZ§ÕtAâTÄtîÉÃ¹€NHZç,D
8ÀsÙ1í°]—³Ò)Ş·bŠ•¨’Ç ôgj€!ÂùYˆ’aë‰§w-G{ïj0©:!˜/¡hK|¤¦ÔÏÖ1…)ã^_´D+¬Ê å?‹"çHf‹hªPçô!geôl&êsG¡÷mİ#»
x6wèØ™ÑX"¶Î¸7ôÚ^=¾¶ï‰¹3K¶\6°WèšÚ7‹uÈÆ2Ú3H&	™n¯³+ÏNŠñ )5›¤ı w=={şÚiíÎ„ÖZz^ÏôP Å/ºAAlF­VBÛY¬ÚËÎ¨Ñ"*¬Ì$(k5çˆìÚš±Òp³éÙø³ ¿Û„M²Bp9ÆÙº¦ h²‰È£í}–3	ä»Ì¥~‘›dìşâ/h	³Q.g…ÚÂ¶~Ö¾}š…YĞÿ];¾ İ%Ú.1ÒÌœ¶`áN”	·¤ò ƒmc{ô‰¿¸OíJ]&‹´V!ƒÉÀÆÙtlD[×I^bqéC«q´fÜ\m6²j¬ÖSª½ñ*è´ÅŞx¹¤äx¤Óvw‡]xF˜Ğû‰´TB\r¡pFrÕkú=¦Úå™“#KPK!ÙGbP>¤~‹¤<E˜.
¢9DÑ9iË™óQÛ¶bêÀvE]##$Ó½‹¢¥fÌËw=\ÀäÜ"ƒ3>PˆdºôËSpE–Ÿ¸0ØW!Ôm"EX.Û,³œëÉèßS)ŠÁ@„
FL`Ğo¼˜|cCäÆ-Ú¹¦wàˆ˜òª?W£Ö«zğaAû¹ª¢Sÿ™MÇ)Š)íÜ„Ëbt?’'ğ`ÈˆšŒHB^^Ş(§<sÈ—µ<7üîo8a!,òùÓßI®¡NjÜŸ^)òQÊhõ–pmLqGñôpCÓaé¤FB«Jæ„ıÒò\TÎÀ{r¹´ù\-TÓÆßˆ>
İ7„b'œ@Eå>Ls7‹gãGİª^;©T3=#¬%¢ï{*Mœ2D·s©[ƒ­.¶]nztå]œÃ|r=ÕZòï‹Á“@mß÷iQR.ç+ˆ?Ç6<áà\#‰vşi{Îäè^eZ7¯WHÊçğ7[ülQ‹Q²Ö¸r èXTtE.êøkhBóšÛCÏøVšÊlIŠ3>l?Î'”î]µöê½º[	i´4õåÜ+j4Ò
S¨wppÁBpZ6-®K€koo’>À±Í»Z£H_%aW›ü´­Éâ¯Ë>ÄE”´òÌô¢¹Õ†M&İŒ,8i)ä!›„4$¯Ç7Â­èû¡}L=oõú¿¸®~<»7&€ M}€éõ¦	ü<òbµOÓ÷¥æÍ>Æ¤Ä¼ûŠOËw›™âèò·GU4-Úr¥
’M#æJŸr™V“vß·Ş]Ù¼gZ ÌDš;_¨4_|1L]" •/“A‡F`íH€Ê“ïÌ”êhm4[û‰y&Í4i—x›èq*İ!I¤xW%Êƒw/îRåı,\8D1J”]>¸G$cß~b`:£ÙÍD£¶ùtïÌ‹¿ûñ=\f\Ázm™=„©¶óÅ—Vu›w˜îâÂã@.ì[;dp$j´Ø_ËpÀ³F"¸(³ZXlšäVˆ×si‰Ğº©‰Ân_ªŠ£‹9íÌÌgÎ;-çpÏ“kXdöJL=h‹ñ´É”®”«ófÍB»vğ6*6l	ìn9#3²ßÊvÈÊ¦[{™dOS_ïPğÛ¡°/5/cñà¢½“¡xàíÎAÃ:³¼G.xSñ(ä
5\P-©˜¦‹,|´Órc›…q’ÅMj>-!¨Ürl7Ò947§’ËòÆÉ7„c,öÀÙç¬}¦&mÀ £jîV”®[?‘9vXiŞpµ‚¡ñC(;k{º”„¥Ô5ænD¸€xÄËèASÑ[K±¦ÏÒ8Ã•<›å«ój·èˆ7wÿ%‚´‡Eªµ7"uìyÉ:ÕaŒR0)wÛkm	gçµz´«ŒaXóïÈ/õ¿ïæ*oTÙj,Ú0ÖUÊâİÊM±§dÎ2f[gã‹‚‚inY“Ñó¬&•káÈ5Hv_¹8ù%ûXˆ •†ı¼(ÏåÇ?Ÿ×S±‚j‰Ú¶·8gèœê¤y¹­GQ”3êÌR)¸jªöãW³µ…æ(re;Z6/ãèh¡|£Mm–ÖOa Ë/š§„»„ƒh| óü–¡!›/÷»*‚lr|£¤Mõ”êWû®î³nñlèĞÂN¥g’0>sƒS®E¥::æÒ”õkß’8Ù?Ï¬“Á³‹§ —ñv“á(vì(˜5 ^9Zìh+™ŒÏFmZÆVÂñb”]ë%úMBÒ7ÎäÇÜ¡à6gÖ†£;Æøi†G*§çQ“L¦<q¯¹eúÿº‹ä&G,]l¡é¤™*…ùàšBÿË%Táø¨ûo›E¿£†Æşa·o„HäÓ|æ:±š5z{Kïc<ÆgÑTfÙàu±ç°Es'‹i¸…s¬¨¾HDi±ÀUn®I8Öä_—Úæl7ì-·ÈV×–j±)îˆ©Í)k4Š8ÏÊP`ÉĞn2ıèé)ˆ­¨Øæ®²y+6vc€{Â™ü‘ı¥ú{?ş…NÕnå}W¿µ¦œuªˆk7à›"Ú5)ã·=®!˜[Y‡àU›Àssæb|ÑË/?ºi¿àk!0‘bÈT H‡A$S§fxñMBK ±Î&†Ú:Ğ‰.ñ9‘=ãòÄÎ	¦n:¼"›ûÔêÊ—v Bñ¶ ÄÜ‡7­®ßzkN=¨d[©a5ä9o]¢"Ç×”QÏ+Ï7ö´)[ä*:şA&Â‡Ì·ÂV:Fst£]Â¨ôâÎŒÁr@Z,¬{x­â›»;ä÷c÷–t…1Œª74ŒMB.ä›H
îvI|´Ğ'½Œtò9„b‡××…¿Vx˜e{;|YmûÔè’„ù–±ÁíN×¼û"İi=¾ô°œø-œgŒBÓ/ßi¥=·(ÛÁêìÊ½.+Åy3%^4í²Xb‚ßD	nKÁ°x
ÃJÜ\¶XıÉ9l3é¸â'vK®•FóåšN½‹’ œGX#§ĞFì55¾jÖBÿM/ŠîÊáÑ„EÓ×3Ò{4ôAÑN%jõÎ­)Hp)İà|Ç«	Vw`Àä²öÃäYg9(£ŸÏFqsATîh®ßÀFZ¹ÇÔ°f\ˆä¡ÄIŞõ›Ş½Í¼Í+ÚTşb…w%•ã5çÕ´@­“D‹Q
tq¤$+±$ıŒíÄCüñ¼‰èøa¿›†Ñ~H)úMG÷‹Ìşo&bÖ¹\¤c30‹²oÒ]jDáÃ(	ß‰4îì}ş…•4µ_O_÷MgK8|µş<ªÃ³,ÙÓèÔ³1±b>èùöyŒ«Ğóõv€™J¸í‚XY4’ĞNe¦³t>ïp·hİ(õ¯4E×g3aú×,™¤ÁáM'O±IGLŠTG(|Ä4CÊĞKzÊ—ÿåq\Ğ/vvg×Š¸³õ÷W7Úã&·”YÏÙÿÌİ$RÒ
#[êpÌáùÅ’QLÒ"€uzÖgehN?È&¤aM£2ƒ°ŸóH7Wİ6[Ã¸„$„½Œ6› ÀÂG×è¢TÛ…hˆGpÖÚÏ÷ô«õÍŸ<c(55¨Úë‰ÙÅÅ@	ESó°¶ıt3–ƒÊ±~›îŸ¯ºâDçĞ™\³¿àş3oÖrÆíì.‡`Õúv…ò¢äjª#ú¹ÇSÖ€¢İ§ig¥Œzÿ{™ê6´W‡ÆöÏÎ…Œl°Wïâ'Å
Å¯5_¡;ÍYŠ¢B,öRÛ	R© ‚ÁÄÍ¬œu.Ü{¡ÖÈøì#í\½“Âœw÷)¸[¯N@È¿ƒ{ÈNzt>†×2ñï‚ãğqş‹u@rK#xÇk2L£ciçèºúK(‹¹æO!ƒaÃ	â*Šz„ÃøIü¦Y ]§Ô­FCîÍcÒŸjeÌ:5 4°Ê!sŠIjP‰g»ó‡hs2@úWlIÊ5šÚ«¤ãa»¬?nêo®	ÊL’–`ÆšcçMw%z×ÿLÄ‡ç„Xtîâú|aÿÿ÷	vI&£Ÿæv¾Äc´½qG‚îÇ`ü,?ÀºdDT=«9W XogoU“EÆ9ÀÖg™<—¶ñF)Å{_wâå6Qª¬+N?x›:(ŞŒü»=Q©`wá(OZ¥¼0­S\OÏcªÒ"K>|Pş0orh,æî
]óoà-Hp5.Yáœ—›	äËl×	ÂRùu
{ÎHSë}~t×Oöe¥‚…iìÇ¤!p‘¿†8şÌÓU†å í‹'45Şç':£¾O+n¥šÚ]v¸ìÚÀˆ÷te{
MÓ˜÷.oLëƒCB{Àj‹i@K…³lÿİH”ôğÈ:>ß*DÃ'Á¾(ŞÊS`ìÁúSy3tú›ô³Y÷éú‚!”‰nĞ°ô×êrÓÿÇ×6q˜5
®`_c/
Øväê­#<âIN0»ÍX.İo]ªZ¹HBgêßà»-ì}˜ÉëRÜû…rŞ®~órI@Fª\2®L;oş+·EUS@‰5‡ÉÃoÏ2ÑGÛ§R‚Ù‘Ñ=¾ûŠ  )+ÚnZI›¦Ì6×GFÀmƒOE£‚ÓY®%!\ÆùÉ¦tDÉ_±Lç?_±û×‡böIë½:”£P] üJ®t­Æ_>'}«9ëª™Á¾{:ÀÇ4™I’{PS)cÅ¥MºësA›£½%.•:=“õó×÷1jW‰$W+V†¯ÊbÑÙØíÌ«Èf´ÕÑµ÷ZŒ"¸Š–SX[x^nıO;˜†ˆ!™„|Y_î¹	¯“Ä´é²İ#i™¹¼¼LÛ|ùE=z`à	¶Û¹Ùî«ì;ËZõ@ëƒìŠyk>ÉBüxH}‰äŠ„WÏCâ”¥ °['êîè×€|»ˆ‚,>ÌZ6<ßOŸ¹3¶%]“H4¹z‹…y¦\ø–’xúVÅVHùÆxvFªêâi–éßåúxê+7¦rß=bN ÿVêr7³o.Ô7F;	´h%dÜj\‰(¾éÕíÃuÿ'jÆyâêÔ­ÌŒñ×±)t^—=ÂU×Rc°d8ªë½7]1
®6÷C.WuŞâ8’h‚O7©"_ÿÊÒ’~Óæ'7Œ{ c¶ ´ßeœ3Ğï…‚D,™_±'Ä²}\F×·gc÷y¨%93nİ=)_àá‚÷¦°|«wN…L#7mïª;ê­%E İ	çK©î¢Õâæ¯Ö™‡DÛ’ÖŠ/“àç"qÎK‰<÷şò8\R¥6¥µá€¦*ÍNÒ:ÁÈ*sªŠDuT0ç^fmƒ]%Õ3Ì‘A@¨®Ü1YŒ0R-É•­zCf&6µ	ş²Æ”Wñ€¬@T=`_Ä|ÁíÛôÉ¢î:“ŞäC{æÌh}!=‚ºq~£k]U±™æğaÇ€_æ]·8èÕ4»ÉÍ£ªVK)éYC7&Ï‰w»4­`Í®M88{*’{K®ò9¼5‘¥_tyTòT4YG~u0ù1¯İòä%Ùá3B)LÒS¦¾úšmöE¿Æiœ‰Ó»­ 7°ö›ø¹C7İ3/ØVî?F£Me 	¾ÂF·+ Cé@ä§í9¦óX%L#€CxÔ9^¿¤¿¯nBQg âÊ=t¶nêtAş·îNïƒ|ÁL˜ÔıeVwí£c:iÄ7ëì¸%xYy³ŠIm§r@/{ÅÈØSğ<$£êpçæÕ¿îğæ¶€¤lSróT/º-]Yk¼°¥MtBµ«òáüÕIİ1¢$\U²¾øüÉ°È@%Õ×:ÔÚ›IÀÏ¾ƒ’±WM½8FÀø±%+WºçQÄŞ;ÚãàÔR¸åÛğù“´Y5· †Éö—½À™0ˆÊ+F0•*`E›Â¦M¤p<Ä»t)Yèu Ü‹MÕgÈê ¸æùL½À1Ší	9t²ÇÏ°²ã¡lÜLú5ìÃ(wOàhìÑ¹)¥î”zÿÜ…âP³şEö}. à>ËíZl®œDÌ,ùwŠßwİ†êöÏÕ¾ÖwHìüEú”Ì&"9bbàw_8ŸYİƒ*ÁÆ¯Â(Í¬åÙñ––œTwToÌTÇ¦E“
ß›Ze×§¬©ĞÒ7"¸Y_“ d9;knJÁN
«³ I\Ô@g¤kÌœšº%˜Fd¯0m”HàZf& MMämái¥:ÛïêÃ<™P†à‡¬]4yQPÚO±úå»ñ¿Ï> “¿oÏ8óÌ%‡:é¢ÊÅ$Ö’Èzw¶Qö¦|µ‚Kıó³èy…Ş”ØãÊ†V‹ç¹)'Ù½½vT6îFaó´¢[ÎJ˜ZO:¬Z4Ì›öP®Å£Kp,ê< EÈZa{s5³>)¶:ØÉ;ĞP/·şIÿIO.D•ğbÅOAsœ¤o5ûíŠrÌ˜ 80îXçæöxTtªPËÕåYÙl'Ó I×Ñ½®N…wí†SMŞúõIì«2ºL»	n!Óé›ıNí ±Ãe±Ñ×Ê_õÁ1åFÚ³„cÊûí+rx1=hrŞ4µ«ªV¼T$m¯¿2ó::ih‹¤ ?TÁ´ÿí´†V%+‡ç‰Vû
n°ÁÅÒ¢)s1zTòîÑ Áö»D›
Eõ‰ÇëøvöúŠGÈk‘'6ñæ`ö¢”4­¼5ÛGø"ÓVÑÙ>’lòŸg•İ½pc>Ğ8ú¬päÇÈIÊ’‘¿XÀ¨e%Z¥Ã Ç$¿!É	ÆL6.°ˆùğÔG2éÙ¼ĞD­ÅÕ½Ø²‹rr>ˆ³°C):0¥ËlÜU@/º£gû*9ƒP+&ÉÀ‰HŞ‡“XM=ùUìÆ|¾Ê¨B[Ípååbü=×E
o~Œ¦Ù`%ŞõÕg™ğ(-ï»y!u9ûO©¯hÅëÂˆ„aÅÜe?9èÔ¸h\Q²“¸zÏTò2VŞ;¥ñåicşOàPY4}ÇnµÌ¸ç¾Ôà¹L½§-¯7ğ /şM´¸¢«¯‡„‡-V<+Uú%hrËbóBh»ÅÀD{ j}">¿ÛK™¶­jïÜ	ø.Ñ2HÃÿG{@øSWg_Ü+€1Ë23åNÁg[ãa)Ç‡ŸíôîbĞVETLòºù»Ş^«ñşDÿÜJ
lp¡`±ÔB$7tŠÉ(¿Üx$–
¸±ú`r_­œpçO¿ö;Ê–«äjWÓÌXF#G¨“xÒ ¢±ñŠ`ğ4“A¾
×ËµT§«s—ğÅÅ'Hçi8M­ÄöĞ¥ôuQ’ÿä‘¨’Ó¤¸¥qùe&mùµTºzâ(Wƒ	£w%_z¥ì÷iW»‡ì»!Èó#)¡€½£•öÛ>”L™*&úå&ÚJ«}Ñv9ı‚ÂSşéßP¥?œ†Â:9çâ'÷ª¨H™gÒYd`sïĞD©´QhFÌzvår½!´—•8nÖQøüÓ_¥q¾ú¬;g2ˆÄe<¶KˆÂî,	uùšIX{P1ÑÒ†z/}C÷ŸğÏyIE¬9İ´Šjux³k2ve`µSä“`’ßì7DŞKÿÈ’ÙøœBcã™¼NÚk@zİX—ßÕ#W‚œˆè¬LŸP.k8£z1%<;±à0­dwÚUÁÉFÔ¶óØ®gº#l)ÍŠ£Î¯`Ç²áiq¸xá8ä+—XëqêD²O	u_Ö[æ§ùM¬$ltiÀ“±­¹nŒ¢5fô×ª‹´"y=F•€0+æÏÏäjñ,ï“^À”DÆÿš´Æ²ø9«İ†ŞG«»0Õ2¢ĞİóŠ¢VÒo¿7â§Iá¼Û§Ò˜U8?ÉÎÏ\…Í9H‘LâCØà c$ÛLÿŠ)TY.D+3ıyPï«}ãà:2;Ï¶ĞÏd\Ë8yı¼¤ZMñ"üP¢J¹DÆ‰,{[ìt8lò<ü·¶üÊŒŠ„ŠŞŸ¯ª.ıæ“],Ö$NqçİĞ¬U©t)¬ĞĞOUs| ‰ÜÜ/v0¯a¨Œ¤†¯Ç—;:D)©>c¦i5ÿ^ ¿¦ÄU0f#4‘aä ¥Óe´?¥™!Ø´¹ #ûmîU–³•UH¤`MH8?ÿ?8•Y™@cu§×Q<áÑyÀÆF¸q´|ËÏ1{ZbU°Ó‹úS b³Ui~%¡%zì¤÷®–5ì®A(ôòÛ‹ÔYÃÌe17´Àg«œ%	ÿ="5Ö°jĞè¤ıS°&ÈƒÈ1>D#IÏë<¦ù”; 
ÍÅsJı«ıZ–Û¨
S­m~Øõ-×»Âq'š„êÅËßUÎÄÏP¼¦ì9òF7T‘ey±›Ê5Ÿf¦Êj§N¨ƒÛ$ñø5*;ª	¥*œ"GÛ/]`AÿRBšñ”7£öàäÚaü¨ae_Y’}9·k¥¿•WÂ¿#İ?¦šQ: Ûo§Vâ]‘3Šª¥`Ì¡ø¶?Ô±R¿^!sâ˜–zy¶¥1ÅÙñÑß©À«1€¯µñË”	æäªä{Ì!ƒO¥êJ›ÑBoU1Í=^e¸DXlÂÈôË2\ş9d:bQLæ^M¡j*EË()9›[µ—ÇLË'˜8*½ÂV´W~&
]êwK_şmğj*‘^š$›Mß—2ÀÊş}5`4sä”Á"Yä+1Bû	Ãîƒ–CÂCƒÙxÚvz§d€mI?<+›H'“‘IºF-Êºx§a=	 «ßv.FNG\V9]QØ‹ë.ğD<„rNXœ@a¤XˆùÎúA/:èàèÜ-P3ˆ6júMÄcºÇõ¹ÜÃ+gú¬Ëwññ¨ãwó§ëàg§¢ßõö\@_b§KS–ø2%HÀ‘¨‚¢%	çŸ½){RÇ–è!©\È0»U;t£ò¾<»œ›¥h·6‘ÃÊ<ˆ¿ü+~qœÀurNõwœ¡•mç}(['eG#+f W'”õºg‘?vçr×ùGµ—ÛüİìFyş2/Ûiã¥´©áF…+‰–£rxj)a ëµØX—IBıp„€í¶şSj¹“®•
°ó\
àõz¦ŸìgåP-ÅŠY¯3[³+‡–˜‡U#.à|œ\=áö¯İÍô–2ßô&ø†EoØå×tš	óÀvYÓÆ|î¶Z–šjt‰¡O4{¢NÔ›G”“ÈuŠìƒTià!êÁ™!6PAVL.oz—¾‘ÇRÇØs«ƒ•Z5¹p>={WÔë³F‹e¿´Ÿ “9‚U7ÈE$¶ıê9YÄñ²-|‘74¹éš,¶†9°Õ@Ï©à££ğMİ‚ìåPüá9SB1û ²l|Ïs¥£*¯®%p„¼2†­‰¼;/±l*8¼ò&"„äÚª.­Ô?6X±VÓp«=¿†]9˜eü†à}Ü›[;öì¤ÜCÅÆqŸ½RğQë?¿ÑÑãPÂ!…ïä ;œƒ}
'ñİÃ‚á>x‚<5¨¯—u{ŸV4·|Å#½
ÔµC[˜úM_¨˜/!ÍqÜ˜?”ãİŞŠ±Q°Kn³5ufšÂ°AwÊgÚ’¾ÎÎNá€b™ÇÖÜD!Õ¼ 
õ?Ë?Öš½ê†ì,,E¼TØBÄÕñ)~ÌåêS5lî,•#)ÿc9v×Õ¹„ğÆ&Û6øl×Í³N·×€qC{/­Î§¢ìÔô´ßAKÙşj7Z×Ê·9®¶³.°ƒt’G€·T^ ò›brSˆñ%cã€t«Õ £%$‰%{²íï‰}Åã$âÓBÇ¬Ê"5¡Xev®	¡V ¶ã™ùXŒ’ Pq8çûÇ´o-Œ{}âİpB—Wyçºf” %C¤ÜRøâòöîYtWL}¤9ä¶<)º¸÷.©9ÎÉ]os—p+Ç§ÕÌKKr®‚¯’â›ÀxÒãE&wW‚š}ã%Rlìc æ)Ãyk‰¼àbjj&Ó_ªtKU*=¿Æmd îĞR½ßüŠÆ„¸˜8
ßAí±/Â&¯Ù¶ˆFºŸ{n	â÷	š·øfİe3ëØ]@hf€ÓŸÁ´ÊÒ_	ßOõ¿øÈ CŞ}Ã¶+‘”ç…F ¢w^dŠ
­ ë8®È‰¼M|õŠ„·i—ˆXÃÔ7Ú {5+;¡‚¦T%‘¼àõƒu“4° =AÃ^ıÃÖ½ Ã‘Íìb˜d¥ÅE¦³@O÷Ròl‰6O]mã˜&`ésv¼MšÿŸ™È Š|H/	ªÏ½–‰‘0ËÑÀ:Ô²‰€8),{;{Jüvş‰Ÿóå.
ï×M*{eTVàcPÌP(©D×dN“8èë¤Q{íM‡Ê&DØŒòeo–e;®=è ¶ã¾¡¦ög¥j×â£*	…ó¬ü8`T¹]Tñ‘`QImüô1Á´KäÔ]g%©6Â‰éìÇ›u¾Ö7»wFµ¸úEë¦pÔ°Şöm:¦ßœß7Å‹66'âê><b¡†_S jhfh!‡¶İù– EŠSÊ%IÍ}íTkN¾GçŸîôIr|öj³‘­ñ´,
Ô”û3¿ì¼™ÆjÌcÊÉ¹»úô›…»KÿÚõß} ^•×ïõ\7–”–zªN¿.ìÓTm~½ƒF˜ÏŸ”CğÕçÜ…ëÃ²óB\ÙE}ı¼˜ YÉ|a´‚Ğ³ş~wc\Y’7s.ªM çÀ·Ù„¦äÖÓâôÎ†_qY:ª7´˜ôRŠCUV‘“í<c_4“ã™Õ2H£à…áM*ŞEF‡2gâY½L
©vNşòOÛ>ş)‡iüú®Dú'ê~„Lya±í ¶û'´«õR£ÉMÇoˆ?†ÚDÀ	’7³™1ªĞw5X ëh¿¿§

®*ÒlÕ¸ñë-ƒØ^öïÓ‰ø#1dÊ¨]»™RÏVÅ¹¦ˆ",p7¬	0vfÉ³¼Ph­¥ûcÇ¦FWÆö•&)õãÇ›Ù×«%cš|é&'Â^ÑU«ÛªZĞ	áŸÁ÷ÛzL¶³ŞF\_U@$dR¢¦¾9ø0èç/ğòÆ¤Üš3QxP›sZtõÇÎkiŒGÜşxÕX¯Áªeº Ê®KFqº¤´r_ÿ%‚Âï/íÃ°ß0§a7}zs C`‚I§t­JÒ`zÖr›Ğ¼4ç5H1—Ğ<Ã÷¾âx—°[Õsœ\Oˆ¿$sûdŠ<Ç.:“r'fÌı†‡ögïPÚ˜$øBMÈ©(÷0Sòâ/ôj-ŞN`DÑZóR&Ï‰òOI&Q¦ŒF"@Ğ²ıøhO½ZycÕ^ÇS†“¿v9Ø‹İÉõQ<Î }í¯¹l3Câü|°¨Eƒt/F)Ø\N(®9Şj©4k6´É¦w¢ÚmÍáÀº¡n…Yİmì’‡äšjÿh(çí£.*(³wc¸G±^»ÄwòµßÍç/åexõZWxyçV£ÔŸ÷µ«YDn•öØà3’öí¦,½“’ZdÑ6eòçØhŠ t£#Æ<QQÅwÌ_ŠoÎ'Q^8ó0±DM2ºõƒ”°Ÿs2tü]„­+—”Àm°}Ád‡Ã[~+–äCßää1bÌÿ·Ú1áÜí† kö+6MyÃ[Âğ(¢Riã®'HÀ;Ör[X8yı¡—ˆcp"¦µJÿ2òàµüKghÀ’ÉŒQ2vA™I^Øµ*1æ¸½”Ô'"2J9yn'Fhp,Ïñzjî%¡í+\[ü•.tXz“Q~Ó‰£YîPĞ v-ì²	¼®¬ÔWìœG
@r¾²aÈ ş)+şqgk™»nxié$MÕÌz¨û¸,œ:!Iãœñ’&794w æ"ƒø`?Á¥%œeäìUÓ¯’ÂJ¯QX69bÁUùúÑñßÒM ‹†)YÿĞ‰¬O¼øÉÏ¾JF[P]7t“KªÎ@>S2W*À¡4ıˆ>V¡@íœ2ÓĞ‡à?(‘¿sÔ‚ßWdøOúsº M|
]ÿ<l2°êQ;Ík}ØXÜŒàô™û-İ)S­%ÛW}° t·ØÿäÄ¨ n6î…¶[Â·\XµÅ€öş[pÛç,d£Í‚¹ [Bö£cOÚNÈ²&İ‘äLOÄN2 JÌ€A¹A{¬"öŸÿnkh®ı‚l•@1äÙÜk9A-KpÎNëÇÁ/ˆb{–ï’îÑ¥Vê’2œÜ¶Os\“´õbu4[Úõ·}f¨¨ëÆ¯GKq{Î}bÅ…¹Joz¬†@&RHk†m¥Vy•²îÄçÂmVí¶¶—†jÅÙ|›7~Ú`2¡ŞØÉÃ{áÒÜÔ“M_÷Éæ” ¤}¶ïrqV°˜ÓÆ5¦8Ä²óÜ~hcëu–Ä÷ï‹Ÿv1YêÛU·ÿŸ…D+ĞÊÇq«ŞÌu%@¶ß­F#´}MÁ¦,ÿÛ^ŒÊì'ÿ˜Èóå’zêcûs˜"ü°”¯\:Ğö7fó(ÿ.·Î-äée»Š4ŠËp™ø¯eCoãîm\‰³ŞÔÄ,mşO±œ»¿K“+ã°ŸF§ä	a:œÚd¢ÅD}×;#‚ÉÒÿ&²c›ó¸&‚†ƒºvCZïÀËLñš/|B©0nÙAvd­Ò£c	›ÀÈ-…«Í­í$ˆ´Æ'KuÎŒw°Õì›nW¢§ØøÆgÍ¾2àÔHÁø…àÙäå{\I?*{i;PµäŠRv
’¬*ÌY¸œkE[Äd  k—=²‹}ö\§ÖºJ#~Ø”Ò×Ã&ágÈè©FÚ•ó1µr[¹-™u	“şÎ9—mz«x~S•íËŞ‰âßıÿ/jêá”@¦§å;“lÜ|ŞvÏîLÿUvî))j—¯PÄ'¥®Ä”°ÑÇÆŒc÷Iâ¨		´RƒO¤±Û¤”ØÅ¿KmÄßÇ“Úw–4Íz5™b« ”5™Üõ–›­¶#Û¸Â'sVøŠ•LRÃÖ’ğì©e~ã“®s¡æ•'î:Çuû³©Ÿ^³áû¸Ë^ıx_Ïª—3Å¹ï†^7±©4>í>ù_¥>%ëø6­ÏâWÊ$d»,¡òŸ=èÙ{ù*Î`iªÁÈƒn–#ÔÁ½–åÁ{½Ü7ÒîdÒTæâŒZãÀ\gÜİíêô±Ş)ØêKat’øŞ3èà²Àˆz*k%3™JÎ[­hun Ïô¿J…ö”¾K<€ä§SÚg¿=æ*>¡Ô
¡bÜî9^Ã& Išöıû"Èƒ’š»À0A+´„h'A“yÓ¥¤ÙšeO_\?ÍÉı«O1—JfA°gÉÄÔQi8Kí)¢|*ÿy†ÎJnÈ2…«%L£F²ì¯z¼¦0MòËÇ´Ëã‰Îù»rÄ8>J+J%¶pjk'¦:3éNöª‚@¬\±£O¦ce ¢õ1=ºSí5É"äğ rÚ¯Ã”<xY5½'Úı„|Œ1±·Fz“§¸š„nuv­›w(ÃD]].B€Ù|~Zø¹üK·ÕiRCwíò&ıŒ9@ÎÓ›Ø×`ºÜCã.Ç) SÈEp8)_šú‡z$$D]]Ë»ûá3ïÛ}
¢âi/ûªÁîKK3Ÿ£¤{„ÃPô”³Å:zÍ”ıl+g[o>«À¼ĞJ½„á÷İ¶èØkU ïÔnÑ|œ![OÓÿ· SGÇÓÉ Z£aÔ“4ğ³şäêö³2â0o‘CH¢†Äy™83´ğgÀŞˆ<VTà ŸCÄÍ—şğí>ŠdßnšíIº[¤zğ²–¡š‹Ÿ€xn”sö¨\–¿«¤ûúŒö	*$ëªq,\3›"B™˜CØ?°„ƒĞ„>ğYc	‰byŞBu“„I~^’º¹^>†9 ¯òd~T²ëÖ@Nâ¾¨öª‘@Óú³É–HÅ¥Ó» Äõ7ÜÙÂÎ¿:VO\'#Uê,8º¨$ûËZ’È?ÔªØoŒ˜ú‰IÍ¬$»'+ËZ²?ù$yÕ&F[Ñƒ+JÒÓ£tC´oêø4ÈàíÒ_³Õ 7ôœi{g	êÓ"õm-¼ÙóNÖÛÁÀÂé­Â¤øXi4M†2d?ƒ!sğ4¹`˜(ËÑÏ`œ>Çƒm–U,ó©öÁMv&#Òƒ2bzXwÓBá&<Ş±Ş˜).Õ7ı¿FßœM 7áä±¸ª3#èZ sšÏ2a’+*GÇ…Íà²»‚nHiOt'àZ9¼5}kGÊv«7^<#Ä*g(£¶ëÒ ]R&"oH;¾AQµ75Ô‰whÀÍ|¹ezQÙÀ=áîE ¿Rapøm8zúø/-Æ©%,²IÀ—è3‰“Üë›“ÒòJ¥Œïå»¬40è?¥ÌÇŸ˜8ÄJK"®üØ7ãV8«^½|`eHéÉŞèØ­¢äŸ
.LÖ¢l¾`šX©sB§Óx¢u– zN:dŞX!ïr¬èÖå`eåw%„Ë³ñÉjz/ãëÊ´cŞ9dõê‘Vñu½•æ‘ñÅöÛts]6,ºïQÎ•x}w@÷ş&<¼™i!ƒT(bD6·õ{Vf±şÍ.AÎáé¸;9]± fUµ@6|Ën¦EÆóˆX=†é©ûöÅjMÂ¾ü2.îƒ8V;XIåI9ÅåŞ(2¶ÏQÆ¤İ–sG¢xÿw’x@·by{AÆ¡OSİœx,MM¾Ñ°ø×aG½¦ş/.=™je‹E\¥Ó×½Ãg‹ÓIÄÊû¥6ÎRZù‡Bl PÆÖ©*fßş[ßF…×q¶ìb»tğÓ"‘ÄšNÕ>È•Ş÷ö÷ŠĞµÎ”ã5`pCÎZ(“ÛŞ“¼ÀP×•Ÿ±gáº8&­
]~ã+ûÄ^NØffÕ”ªwwwOb%>é
ğ>ñ`ØAä´ùªLÏ7¡&P„¡PòrÃó$ °olXæŒœu05¸
~ÜÄè;¯}ŒëEƒSÓS=ulÑò"'İ=8\¯.ÂôtìAü«€„b‡î>ğ!®zod?éŞ%æÙZNü SjŞj[ÆË‘VgïFƒƒ­×Iˆ@-ü›Z]¹€Õø$c­Eıõû¥CZ×‚·‹‚—£×Ò!n¬«’:rÈ, p’Ÿvó×íœŸİ.m…<SºeïI³9ÁTÕwÛ1ßXğh]©NœöÆ·c@`Á’ÃåDÃ‹yš`îßÁÀ3¨–~Mäš¢Äö÷²ahİîÎ	­èÁå}xÁûæïPÅÉ/áİÑuÆ×]¦pûUé=µ~,6‡ã"”|ûã-ö9-º¡¤Ñ n5™+»­jr±,œr®áúîˆı#~½è=ë‡}W¼2·ñ´ña¿+’T)$Cåƒ¶3n=«U¬e¡£
Qö«@vZlÙä1[Á¡Ğ‚!›–eËfZ‡AíB¦ –9–N¡ã„©k‡ø]­-¸é ‚ÅUşµ_û}â_ØYó©€Ğ'<ò‹Öé™êZè¤uí™‹…C Ğ¥GT•×ÇS?ª:f·viÙMÈ/??ÆPÃj1şZ ¼Œ¼ñÅM_JñÙ¤¡á 4J$œ8ŸgäK¸’,ètF+<äŠSB¼­àÍÉ â¼óa:<ì
aÕmvòï‹¢½êå¬²%_éGbn¥§Êx‡Ò‹_AäSş$; ’æ±BZ°º)__\ìºˆ#5E¼rc(ÆÍE«AãÊòí*¬|p`ºVYu³ærU#Êá0“^ÕOa'È9ô”ÚG"Ê~Dî§Ír?Íè£…´ìÃ/}+¤©WM	ìD«›lÈğÂù'6g%*x>ulø›.ÄµÖ‡¯pÌšŠD%c/EÒ¦UÓo3»ÿ<x*Â"ÈV¦¾êY(˜E€î<|’ì{o%q‡…RË©¼/aW*çû‰bâ@)âa\m fÿg¿†Ÿ){kK
ï´æ´šøW·A€Ôiüzm‘M=A†‡ñOÊşä¶¨Ôÿ^E¦j¶™„Á†°ª|È¬ôv]ÿlA¶˜3gI3'=’jË¢yÂ§rÍı…öB9F6¬ÃIHÿE³ìÀTO±.t¼ÇÇc´á†İû½'JÑ³ó
S˜JÛÚñá'íŠÀ{PÄĞf°Vò¾Šç_ûad|o_n‘ÿdEeÇ~­¼i3UotcĞäİ›` ‘šÑĞŸõtÈ²,+|Ü=¶-6ÀÔ‚©b÷Cjåõ`×ƒBqËw1±êœÀ#gºYZ[XÃRóÕ¬óylç	§¡tÍÎqn¾§9xm~÷Õfõç!âÏ†*b½g; Î‘Òïÿ>á‚c>Ç[qüim;Ÿu·¼WøÿçÌ«_«}NÈ#ÿa¬¿2PyÄÎL/Uúæ©ÃÅEiyâ“Âî4”bn8=So³	H§«Ñ·À4%sky›8úŸ(:<P)üUËŸšš3ò9EËÕ¬~Nw )íœãyıò4ÿËUDWğ´”hs«Yí@~ş¤Ğ9æZxàüúZ*£^ØW:k=şÔV‰%*®vŸÓ·­yàİï“´z`ó?áµP:N~›šW5˜¶FÕÀ™qŞ"hè¼7Éüzöm= WFİ|0’üä=g
ü"Ír¸>İm?¼Ép…èeùyúpE¸EW%â[ƒ†¤Ÿ÷Øí²:ïŞ½…?<ı«Ÿûb(è–Ú.2e”š^¤¼Iµ<ªMeé·ß¿!…¬ì2<	X˜È¶”"ÖØÔïÒDieŸ´8.qaŠ…4¢“.ÚïşqÀPIT_¥Ğ'vú'Á¾¿rp3Ãu<Mïó6y[~Ñ•€} CP'Æj¹
Ğ€—Àä?æ’ûz ²Ëâ‡ßÓƒs#Z¶
ÀøúòÔ[ñ6	ş²¥n­’$«FµsUmÀq¾r¸œóMÓŞÑçÿ ÷½ÑSm
ø¨Œ¬|*îîPWÎúu:¢>ú\ön6am<°A?¿<)‹M³m>úêTK(V@À°¿<’/ö§ê}$ŠÈÇè–FBEu/&æbXšg¨ıéÂ§¸¢ò2qéQ“Q/ÑÜ‰S.¥+~ş'¾è0YMÁ¡ùÄ°·÷í±lÜhc,]€ØøVn—Òüÿ}ïƒ*“k@ñ×Ô2¤ˆ2áŸ)`Ù¥]õEëHSK1-¦ÚKN¨½è é)Jièğ ãÿR˜ 63~á½lûOgPÏ‚"ìêRæsèĞapg‚Ò~êš;	‰9rèØ “c762Ä@à­ê~½¬ó›ÂÕÃ7„	qOïY£Î­ºwle$ô„â±æÂa¦.+f½”bF%‘©ÜïI3¼åÇ84]õÆ+Êë™ˆ’²dÑèïº¶µF»ÑYSC.¿9.ä¥4é_"ejHçÚÀKØy<¬¦¼JVOX¤ıú!û‰ß¯ÃÅsó¨p¦'õ5QlÇ•şdâïoiÍUbk2Üª,.ÏpWËÈèáßëÖÖm­²÷ßÑÍx¶TµoëÈî@Â›“Tø±MÛÂ€I’¥Œ€‚y3vˆíx±S
¨G†çŞ–s$ëí{>Ş·°>Âş#–J¬½2ô,½«w4§ æî@Là&€İ #F~f‰ÄRí)˜÷pÉİœÙ\üú-òŒŠÃ*j3»»b:Æê–ñd‘4ù»Ú­ïMı	¾‚óµSl¯ìîV¿,‘J›xo‘AJÑ µ}8FH~Ö‘ëq6í9„\×·£hà€h¥„@­¦ÿpj‘ùò-5¯ÈÇüÓFíu™ëTºÖ+…P°ìocûÔI©ÖÈ¨0‹™¼T_ä›.ÇQ…u^¸bú„sö‰şOæ&¥Xê×Œ&× â(‹Ô‰î<Ñ¶FFNòÃ
õV†BìİÙí‰vi«^¶ÚÖ¯ßt9‰‡
*0×[ğÏ8VÖæhÎ:-èÔ@«!ZÙªàUÆ H'çV†$¥…íhï³^]S—ò“K- Ò6‡ùà¨•/‡~_[s~Z™1ƒŞ¾@}Œ~ ;åã~:+MlïØÒÃ­?ZˆAÙYS(œëNo°Ú½œ1`4lÊˆİEb}¹°Œëš”²‡9Ş¢Ç&2ˆØ:“]Ìågÿí(¥G”#Â;Æym- Ó·-–Â±K‰ø KÍ;< +¯toC°Ñ(ów[—§ÉV‘6ê—<$Ğ—³Şâ×ZÏ-Wü?ı-¢ôÊû_²$yêø›¿ş¾Iÿß²u!•[äÒ‡Ïf†ø[³ê5YÙû¦ÕİŸµ÷™ú¹÷œÑ~C¥Fb¤e+œ[ÙWş£°QeyÅúùiÛ€€/#ÎŞnÃŒÄÕĞç+
ú»Ò¢")€]5uˆâwM˜u|A¿(hZDÃ˜J‘;ŠÒİ-ĞDnÜ]åkør„N9æşeVòÅOÁ\yöM ŞD¥ÂÃ"Lì„­^÷ß0Ò«S´%×ïiHœ{nmvi¥VD¯İ'1@BpÏ¼J’d³ü¹²—êĞØ¡›14®'İxgÎ£ëTé*(yıºc–¡÷¢PùwøXûjaÇã[˜£ağëV<ñ:¿í	GI÷88Ş·şé¿Îa¬Gİ¸
:©iS¶ë­>Ø öP`L€O¡ÖU@½éœù”¸”˜¤™5^³)mÀ¬Šïe_»M®.E§Íu@Í‰¥IV„J»'Ã¾é·ÏïQ×²0o7‰RvHÚÚÒŒàÔ…Œ9a-yÜ÷åpŠı´È¢¶|ÀDJ¢¤/æOr~A0D-˜K³ûñ{(èö@ÿŒñ1´¢ó­G®C–#gD›F2fq‡·°Ø—™k¦4Bt6üÛ¹uƒ[ñ*XH6Ï…’ªà£'1¦×0º=ä¢áVø(»ÚKZShu>#ëØRıÈpV‹âƒ­X­ò¶(ö$ËšºE;â‹B ã{S5?ĞËeø	ÿ|%¸˜Ö±Œ[eW	v“t`*×Ä$P±ıËGˆÎÅïn™DK›?Yn¡ì¸ß“Sİ©`© KòN]œ€/£*³â;ÕÅ*¦•õŞfeø¨å]?ˆŞ2úöJË­qÃ(ù"#r£nø@÷=FÜGˆ½óğ™2® Y$½ÂÈHN»hO•ô¾oPŞğ²•ş¯PÇ×¹ÑñÉì#ü—õC¶VÈáÔHD3Ù¿ª…Ê``?şcÉêHiL{“}00»3”PmJ¶Üv:ŞMîúîÁÁ“n†<Ëìz¡ãİöÄ-™{¶@
©,d¥ï^7‰ÉäxÒG0¤¹±­İ\FCF"ékd§¨SDl>.}^¹ÒñßC÷´ğÍR‹¤AjèXT2·`(½èÈú[ü¹È$x&uQîÉ`1Î|, ë à›îZšsìÜt–x@Ÿ§ıÛ€ûJßÆÒÚkıÎğáb¦b-òS®5™7Êş;M‹s\â–Ü–í‹¢´0@ÀÊám/nÍ×´ÁÌ kÕÇŠQaÀIhB<¤+š¨^z±z9yÄNqƒ7²pšë~˜î/{Ò0NOºNĞov€;ªÏpeo.-ãZp•QC?j:ºı°ú¸dğ_›û#ÿå—Í>fü‚GÁÀ9÷ùƒKÂÍ“Ì÷J<ĞJ€4MyÎÊœáÛŒâÎo`?œÒä!‹Kx¯aÇ]¹ûø î$Ì4£b\>ı„¨Z;„ßà¯G,8ñ+l:õÏ»Ÿe¦Û¨½ Ì Ğ‹¸ôîÛgZÍâGî] \ö	$'A›Yrİz–]Ä iM§³™)ğü¦Kaù¶óæEM0ôEÄ†‘àèË_$™Êà¶ËûW‡µ	š©h[Ù°„%œ¬§";CşíªœÒP‡½ÃXqòFÕ><1%úa°‹AŞ~7Âßê*4;…¡Æz˜+&5ºá¾<4_‚ĞÁ8%Ş ÃŠ¹©ñÑáœÕºaGÈÏë½¡şvúIQ#õUË‡o<­*G®íc—½8ôvÙlcK½‰ñ¡/u‡¹ù<ºĞ“^ù_r¢¸aÎÄ;¶d¥ÇXyçˆ_ña8ÒÓƒ<[h÷ÂV=glñÿÃg‰LÀ•;XÃo²ÂPg("» Ø
2âV)%ÎhU½2¦¡óc›C¼D˜ÇuA°Ä#äv®ç=»ÌòÂ	=GÜbÆád‚+ƒÌÊ#I6µ*}@i‹€ÀĞ'H:ûÍ€¿â_¢¡ŠOWìÎ@£N˜ëùıeÍ$¸ã‰Æ¡W@·ÍŠê<DÔn¾[È™T"ÄŞ0“H£½Kï¼ßÒÆ5²Qo`ƒ^»ƒ frHå¥;)&Ñc¤m|Ù,9½Ü”(ë÷LŠÖ€.¤º”ÅH HÂS–Fı"ød
5ñú¼×ùe_ßuƒ¬´ƒ¿¿’yÌàdu8ëj†É Ù‚hL*Èg¡·s8Ab¨
…N¹Ö¶‘
šåI; ¹¾5¶ò—ˆ­¯ï¦#&B0j0¹!šfœ>a.@=®`/ö”à·Ge™È
Odà˜M†urxL|(åÿª¹@¥W€ä˜8÷@´·”Ï²IæbT3Og57U‰˜Ÿçz‚PÙÑLõ‹WCŠdT öHûÏ	1PpyyáC¿ùîÌ†î¦?´A¼¼è^GYñEİG~Ó¿ÅRkÙ“•³´Í"d|Œ±£"ÿF.ù
+ïšã˜½08ñèNƒğTrãÄî -/‹sÚyÒ_8ÆìcT}é—¾rúSÚÑõrM¿V‡hfğÕÌûKR4¦ö·%M+ÄMÆQ=Š°™¨¨‰zZb^ƒŸJJ$Ù;ŠÔp¥ú¾Ÿ7xòì)¾næeoQœ*½;äg…g84ğTÆÕ’…$Œş½¾]ë<%ù9¦uh†F,I_Æ¯–=\5µÔFF/Âaw×¹™–Èİ›QTÖu^v`7ÖçN®ºµ“>KÔâ¾±Hä“œ›qµö£Á‚ÀØjK4Ò)ÖecÄŸ=èúb"TF‰ˆÏÜôØÁ!tÿzD€/-S,é(‡‰Ó¤õœ0•/ƒ*ñ~Æ¢¯ÒÏŒòF—åM¬ã©Ø.İm\b¾ZÏÍCùdAİ¢Òè£(; Û.fmÇÈfç5±ÅtE ™Ş)›i¡|;
ü´GkÕ_Íw]vÌ*—g¹²¡%‡òòn!?ÈÃ“,›°ç`™Ïj‘½E«‰¾IÂXÓG)E§d¼®Éù1ÑXî	yBRã~Bûøğ™Ì³@Ùrd4ğ<äw—é„É×yşúØÒ§)l_Üw”µ¨ª=”vj(ÇÁ–-şveĞÿë4ï¼ ù¿TÉMP
†@¶?Ã“Ôt×sèÑ¦=Z-#$CÄgQÃÈˆ€ÔE}á„ _È÷@lp3*Ùms^:ÛD% ò1á0	n¥1ŠõÏ>fv‘ç´S¼ÃvşJ·4[è|Ø TœIşĞÙÃl›oÉ¡{Kú1¯w$…°sˆ=ëdyûM~Ê×…ë?i–7’'¹Ş²“ö?7¶OßŸV¬¥ïQtW}Æ4èqÍÙÆå»5–Zx?ÌÁŠLë–tÑ;ñƒQ[vDÖcÔsÖ½›ÃQeI3«²ÓÌ*±|~Ÿ·H;AİÁÇWQYüTV®N4½àö³.N:şÉ´"ËÎæ¦’Û7¥¹ºk*Iî
âó&Ş)fÒ¼Ú‰füXí¸bö:ÔâšÅëñ½µœK\yb=/~Ò™»F¸´“Íàs)wê³N(…=ª½×ƒü»ş•Öm‡nº<D˜Y•-¬ËWFö)Z¾Ã«³¢)z.m?l|µ½R¤Á­z?…ŞàÀÖ6«yOÍÄÛó—jDÉç1o¯Ÿæ‡ó{Ü75k6Í •†}E~á.UeMDQ°• °´€çLw¡´¾¨”Ñã<¸ÉRnÜÂ‚Ö[³‡Èÿ[rQ¶Aí—¥‹íŒ`\ÊHı}Ÿ§ãèÒ²8-°I}KúÊŞëŸÌ¹
ã<·znâ9î„ÊAlW©Iá|›hòÑ²móàäºêã¦V¥r»Ş*N •–<Cö±²‹,A¾	3à)±ü‡Íù®–Íêp„AÙrÉ.Šje,ŸÅ½P.Ià[&à>¿Å˜½dkf è^ªã!¨bM¬aRÅ=“èvÖÛ÷úoq’—a+©ÍQşVí‡ÛÄRú·ğ®œq#ë$iqºÙŒäÜÎ+úŒs°PàÖIk!¾í.Ù…ÍÏByK/R]Ëäºÿ(ïquì«êçOA”‡~ˆãe~õÖ¤ùmz‚T5Ã,¦ûè3 3×Ågµ=´şúĞsƒÁiAFİ	ŒJ](ø9#ãÆfÒ*ó½şåÉ¯¸ÔfêIM’ÜÛé¥ÊõòªËùvvN”ü¯Wá+Nı¸yt›[¬Ïb;AT·‡“»&®„®…[”X…?¹‹f8[O EFÊéQÂ×tu;Juj3qäÿNäLÓx·By[|;ìqIÑÜóÔ×’ÒET„pcZDÄ½j|Ã×>ÁıT$cuh[2İÀlãš™:A>û'æDñ4ió½âgnieåg`pP—0=Ÿ¦,sj¿zz¥”ï cK•ñYp<{_:cµÇÈ2û%¬ ¦³ìqÊO‹ 2˜s[h’ø¥KÜuR,ˆÙÔœıG" üQ›LQ}ûùhïCœ‰Œ¦¶ĞÅP`ˆk6Õî{Õ¶¿{X]ø£U,>S#~'\gl÷†ôÆ?:Di¹ä³ünêóùdXÆËXQÒlÓ4R˜ÑP‡›aóÛI”¤€éî§p0¦Ÿz£8„Ü-H÷³¹¥g5¨õÿ’äá£|ü¹ØWvá	êxd¶wYM!_ßSÏØ½X=Ê¢Ö—ÿ›R"øK'*øO™¿*àCÅ£µîVKtññü‡b` +œ½‚Bà©0O™D'[J‡Ø:Å]±N*Ö…ïDy„FM.ˆŞöòÉt¶Gø²éŒÿrŠbÒ±äË-´éB£†ds'§lC6!‰<kl¢zwì‡Ÿ¹ù[†ãYÛØä5‹™Näí*9²¢«ÑãLhƒzí«Fô÷"¸ì‚Ÿø¡NÕÜ«°•öÊí\#Â!Ù6y Ì§éebì¡0T¢vâ÷ÄÛ\xæ^7f®P³Ä)¢ü~À1†6Bkåµ>æ£§ •ÛÇ¨;Ôÿ|× &<ìí¼Rrª¾1¡l>ÊŞkc{Eë®ëZëXş~×ÎÆÌéÑâ‡VF§8wHÑáçŒmy|é’]ŠWõ~U±Z¤Š«°Zİı½nèj6ZÙ’dŠ ~r¡~İ_ûgó¢ „1 ~€ßÊâk§„vNÒÁ­’ÊWFÚâàØıN0;'ÍyÙX65€<«[>YÇËÓiÑ¢êâş½‹‹×-Ğİ.Ö¼›È7}ÿŠÆÅKj5õ«k4êØ;cæ\w´VÒ&:“}ÿ»“#ÍŞ…i£=¤–ß¤FÃ`&d”P¸5úh=˜’¹tpFøÊôõ €kÎÕE"åfâà˜w\:‰›ğ­UEx7wÑ>†µ,ÆÑõ]‘ÎıZ…Yq:Ü[±LÅòzË/ö–(¡_ö×ˆëKüÛ:s'R’¼7oH­š×¥”½Sx ùT*ÕÅŸ@· òDLğ´Âj¬Ê¨|ùu™³Às1\‡‰ú®"óoŒ}=(Î,Ò›‰v=!Cï
ÂRm9 ²„oÑµ>û¤üçš<TJz]èÑb@¨kŸ 9KCÙ}È4‰}‰‘Î½¾“ñ¦¤½äÖGpë¢Ìğ#aYãˆ¥r²wëçôŸDù¾õ"(@ÙvéiƒÎèG>vîEÎø,K›gÎŸº.U¦¿{ ç¸/€}[’N9T Ììó¦tœ#2›°õf­|{Íeòä²fÍjõëÚ}0Œ…UVûşõ´‚•ÆŸòÕşı¸ô6şO´/xòºz¬*É	˜ÇK/ğ±\“.N£FÎF ?jX©e:É#È­¹7¸Å,-T`ª´“†YC¾KàöHß‡¯`Eš 2L|ùxª¡–A¨éò•’Æ,®9¸­,è.¬î¿ãú´îîy¨š<ËïTXeæºìnÂş{‘¯}R
ko»ò¥‚_ğå!/'c#Çš`A$)mº4FÒàİ®.Ì‘{2"ñ:Æj\À¤¦¡ào¨°%è‰Ä’Ö„NÂıœ5Tq&i4Y—	æH“†í»İ’BVır@“”xPóBJ.Ñ4©.„ÊïGß©Ñ\æPIÚ³66™Q7U~ÇË"€“$ôx¼\³wU	ºè“çÖ:«±qÕK³ÎøT¯4H|©R@Ğ`°›ñNªRò±š¦û†Õ²q%’x1ËÆ©CöÔ86³óÂ¿j™.Óxœ–"ı‡v;%åİ nBµo	œÈ/JQÕ¼×œ¢]òÉV©Uì÷ÇÑK8_ßÂ‹(]jaâòä }é±¯¼X|K÷DcS3§êŸK.?‰ŸöS¯‰ÖòÅPbñÄñ)$"áiìX¬6ÚöCJº-®›Övšgı\w§0zKHø„MÈiŒ¹O® ¨Î5Å«˜ãÄÉhq¼‹…ÉÍ!bUZYÆÉb*8÷[?jW¸»¸È±)Ù³P9^6ƒ´®¬Çh¸B$æt,ı é2•g¸|ÍW¡Âì×ÏP€üKVK‡ÙxÚÑ2Ïİáø ßÿMÉP7PƒEè\‚ÀD¯àõd<Y }`Ó¥oÑ;z•BêŸÿ? @û3‚Os0<ÀKE(yİB]º`áë¬íR‹ö;Š(Åî.¦¹S„ÙŠšÇÜ›Jõø}êuBür5^z :¢gí[»Ş Z˜fqÛ¾°°¸/¢Pp‚u€Ê}¶¦uÏ„´Aç—ç~Eq2j
É
îš35êÂ|Í¦Q´™/ê¸}póÅJĞ#3&¼P²°sæØ3Hùï
„«-ü·AŠÃD>ÍEş†I6 ‚îWFÃÍ”[P%!êĞĞø˜ßWÍ¦”Èkëù‰=Ìëú€`{L;e†W”Éâœ¦íD2³®Ff¤ÃèÃu²2Í~#SÍù“ø8Ó‰ˆ «_;ôSh¹Ä»ÓÌ€Ú&¹.Êb–é—+à‡½ı½$»/êcUŒáùçâuY°ˆBoFÔ‘(V3èØÛ¿† ì²uƒ#gÉƒnÓRty·EèH#‹;Dó'kLy9d$ø¦Kÿfn4k/ö½óU¥Í7ÌPopÈ<‡>3pQª¡â®ÍÆí™d7À¸‰‚q..)@r"$G$â.Yo*Ø¦“ĞXÂÎ``ä·´ËÉ[·Ñ(^H%î“N…Y»;ˆHDİ<Ï¥›¨óõºq)ÛùTñŠá[±6·C¢!Ú¼VÜıts éşM÷Ò©`zJ¡÷·BÊƒÑV³²çïUÖ×.È`¸.bƒ8Â|chôÛ‰tËï¦p{œ>ÛÖ¡«‰çñõ2RÈQÂÔ<†3ã¨•§ ¦í›£Ô¬:'ÿõĞÕĞ6XÅuy´—iáçpÎeî¬cşrö³íEû¸&s¬3$†X“LW.tšÎ>Í¦&‡32p„j7—.&‚Ù¶æ]áñŞ‡`òV=üÿ‡½Ê¤
½YîS×Dé§Õ.‰`~J×–Qëviï¢€Â€÷3ïÍˆP‹5¤Ğ/€/è(ÉØ»>”Rb„¦·‘±ê” ?„àr¡•ĞMÙß{ûìÈ¬†¦æDâÅã¹ts£ÉgñxáD™pÕ_6†MT…Æ›™_¢ZÕX{ÕÖQsØ•"æëGé¶àİÏÎıÂFâI¸§¦c6IøÍV
(÷Å‰)XÃHw¶dØÕ˜@,Ó´ºú{ñlãåcºšk]$"ñû»=é:G·s×å>9©
Hy‡°‚Ö¦{Qzuåªgú` _­dˆ‡ŸdúÕA²ÉÊ„6Û_2°¸J-¦)eÔ,%R„Í®R ,;Ä5Oj›rŠæBµ^0%rP(z½É	i?ROUi¢Yõ>…¯wÄãhµ[W 8ÆÔa&ÏÉ,‚ûÅ[#	ßp¦$°ä¤Ûé(İ\üÿP c&r­¢âh5‡‡R{Ø‰ôˆ7É‘SóeTÂkÉ‡ú¹;NÆŠ@ù…VÚ$y4|ZlÖ¯¼ÃLJ¶Ü“¤É 4ê|Ú‰ÜíôñCµjŒñ—#/®ªåğ¯Zu4ßíRIüm¢+h…~¦G%}0u‡YÌ:ğª[ÕU ŸÖ£‰9@ZoZCR°+Óğ¤Zz‚¿üS.5Yj§MLÖ7.ôíŠ`Šà8şÇãÄç¾Q‡l#9<³Ë£jşÍôğaS£`wuqŒ.JI~\‡;<5¦üın0¨Ù0¼¯ßÉ‘Gˆ—Í#ù?q5Ó,º_áB+“‘#MNÿ ÖÇty"¦+äs>cÇ[¢mfiM<¢µÔ+l‹ôÁçIlè`àBp§RÈT.²]lYMN–Ê¥#Ÿù‡áÏÎ«ä®m„”m}Ø<ëŒ)ZÉ¯|Š~ÖÛşøã¯9X)3u·(}¨(qĞU>‡\!ÍÕ¦ŸçXkæ:}x9s¬®7æy$Š~ÙA¢¬Fw¢”’Ÿ±‘³¯Ë£ƒ•ÃİÕ˜yşÜ“–22Õ®Ô”s÷Ú0s…kÌ ~±o?;W.Ì¤‘™õ:ö_Ôİ%—ÌlÎÕ?Ò®ŞÓõ2³#|’ËmÆ}µFåÓÜI1Ä&Ôs²2oÙ¶xÛ;í]ğÄyK4Aşb·õ±²á¼KpLõÚÏOhHÎÍ%ßqµ„ªŞ6°îáÇã Àd‰š“UĞc¸¨˜rë\8•éH§VËÆJ/¸9ı‚Ğä2oHõË»º×˜Ïî-÷ıC"D'bg8¿‹}_úè¥³â €‰ÀÈòòÁõj,xO'&Í$ZxÂêú\íóªÖ®Ÿ²ÔÈpµbÖ@5l"_D¿(ùç@‘v¯”¿Zğ°z¯ÉdÊË²&˜_)[fR¼¯¸uŸ]Ó QxÅvó[ #PÊ„Ôº fÊ¡Ú¶ÒÃ{ëy?&7é)H•yc¡\²úƒÉËü´r
èOÙì€d8¼ ¢g Ì›{1lŠQŠí[ôù7´Ñæô„×õûJ2W"½Ê‚Xî>bhIm]‹5ÊX"š¥%·½š÷·ñ™šÚ˜°‹)S+å´cG^ö8éç—pnÔ_ÃqŒ½Xª6XĞı“ée8&o-AçÔ‰ÿ`Íug|ÉfJ)t7”kºÚGœé·ïE:“µn¼gö®Q‡¬oQÎ<Éİ"y?)À4–S_OEDkG£®ò"µ¹õ™s$¸UÜË2~İ§1–~¹£=³Ù¦oB•+5l…ÆwG½åÂËwYşŠb&<•tü·‹Wì€÷¬³lå–=‡‡ù·K€0à†‡ƒIşq!§zÊ–Ç¥?U˜s›â€|^‰EÌ)ã;½ä^ò!¿lmc1+òv[t$ y~øG}gL
ŒÂ
•½¸£4·5Ûÿ¸ıDóŸÿ
?cûløÅCã¿bí+mMWë§•2>‰©Ğa_€;²˜æTp°a‡(B*MñŒŸœø…[ùîüpü<6éhªko‘Ø‰ø5÷Y·ğİøÂ}Á<¡ë‹~S'f’ıt²?¬ßåAY Rjû¤K;¢ÍF•rÍAPÑ·Ëùx‡%‘áàÙØèWĞğ€Â+t5	d¼¸qdæ6ÏlV?è‰¼ó/P™K òÌ ÁTªÍ¸¤Q:}â 	}Jœ¸,?POƒ?=mHt©ù”˜ËÛ#Úå`¸¨b…T´{Ÿ•Îµà³B^‰	6ì
É@A{}Ï.\]Š¡u·wğú^âª(ûP³±Ì\/€ô,™Ø¤´ƒ1=³ .µ8ø8¿¦×èZfÊ¬ïÉgwVù;é´ @æáşò
²“}Ê Y‘pV)æ¶öŞÑãr+ª-8½w[VyÊvö³T-%Û€RSjÈH§ÃœdŒä«Ğ{ìš·­JCÙ&8”xbÿeVºOd°LmUÂWŸš?+®S	7ŸÀQg¡ğPèØxÓ¾±<Ì*ï¹dO¶-ÅX@YvÑòî×/õõ’ÄTÁà~(3ŞA+%T}ŒN¥x1¢óAg[l7#‹LÂ,zx¤‚LAÇ'¦òü/œ Vp“U’õ­Sw¸¤©µî}´;pb¨vËgµ(ùğÆ?¨l™­*§$%)®•‹\ÿ6°¿€Û:?ÍÚ—2·­H§bTyh-ò¶¹âzHŞç|€‚‘|+Á*îÅÂ­™}'o®en'Ôï2/…C®õ¡.}š¡Zä°¥<Õ“ğŸqub¹fĞ…íJ¯./â¸-£Ğª=B[T;÷¢kÙ
‹t*š³t,‰üTjPydnS{»Í9•›)ÉÖV.7±ó8(ğİïÆ=Ñ8w lÑ¹bU$Ìƒ;t=ÃE‹j5+3Z¢O{±§€ÍıØªĞÙó½§%^&®ø>ëŒl¤P‡Nú6›]=1Dd†vÎU§º¢•„¢âG!Â©?²BfĞáÇS¬H¸•ÿ"¼@•L iIOøŠ]{Pş—b:iv‘@·ìrö
>±–Zq8#§[Ÿ¸ è«8‘ÁÚY#^ÌßFW±§JzD|;®úÍâ7_@ü*QMd1§©×«9 Ò ÎBÜûHıŠ˜èÕÅx“*ºĞb‹—ªßÙ%ØŒô>X úaäµ{0Ú¹w­D-¥´ÃtH›Ë=­p‰uzõ:[?ñã¬LO—C°ÿ£»µµ|½éV'Óyş ÎĞ|Ø71İíÏ(Á<¦q‰AÒòì&é|½û©™$äi½Mà¶‹|¬ t<¹vEô™s×‹T4{“¶Vƒ4>šT@^6qÎfX‹Ûm)d$¹¯¡ÎàçéÏ“)].ô$ge·dôºãÈC°4ä-³Œš.PÓïv.R¼¦¿59˜½`&1¯y@”k<EÃ?4Ú÷÷Â‡‰>Gí0ÍÆWG’ïF !‰>„—?²sàv){qvšèA„HÌ£T?›*S'osˆ`X«¢w‹|äAÌ›ó°W@yÀ<’g(ÜQ-“g|KtfĞl•Z¾	)Ò^Ó ë}€UQÿfèØ/íÅd¤ğÿá&ıá'QÇHÑ[
VJu—.ºét‹d/×ºOŞtRñ`•­ëôZ,=®Ö€,©ë±#ªŸøşíJ—F+M™<o‘ÉÚ»—5HÚR‚7Ê½p’ŞÀç¸×ßşIV>ô5óÈğ¢ª7ê<ârå†TÌêlürØïpZ ¡V6ÚÓıdèÒwœ¦²Èö¬èI‚ÅU´öø`‚^×¨_´4¤›Á³X¾b= ¤ºÙ‘! ²ZK©ôÿq­šŸf-K44¤¸'şm@<uá/m‘#¼ÊªEĞÓğ¼ÿŠ>í3Ş ÏÊ\¶3»íyº—¾‹`¾Ú$T%_Xãùƒ
«¹r]un%ö)Ëna¾í•÷ı‹WB|2«Ïi—SÖRóú;¾O5vtZÔåzÓt’îü7EîeÆv!é«ŒÌ£×¨»§.Énø@nÍoGñFÿS”$»ŒD”M¼¢òF—A­:¹ Ûjk2Sê^£ö¶ÏS`&Er‚»ƒ)û—	Q8µ¨"áUvSø"-îvx¢¥¿ş58½Á&ôBÛf/ß.AúÚ3ww,™‰²Ø¢âÉóIwÓ>[—©;ùÛE7Ø_Lø Òû3ãÒíŞ,ŠjyœÚ‘ÄIø!ıÛG¡í9Z-¹¯4Å)dãß§Ä>=+ÁíØŠïÆo0aüÓ%K…ş™¾„h¾‘J&(ßi€Òø;tI~óÜVšÜã‹f]#f,xG/™\xj5Ÿ™÷e‘Ñt^_êæ	r2OÆ©•¼©³âÄ˜+ÚHööYóİHÃºØéP¹›”²¨låü-?@Â`„&$Nz½
Pb)`')ßÿƒĞE¬wÖÜTí:RJñ/ƒá:¢e	1•² aï1Üä¢ëfqXØÃ67Î#y+Ø#Ç·øÕôHŞåš"˜ÎKÍ£ÛTóù‰Ûê:Õ{I‡İÓÃÃŸ™^üÿxpN^äß·¬òæ Ârpı’³§C‡oç÷èZ×€ş¿'ìÂ|Ú_³º²aDÍWœáª¥•áøò­?–î<½Ğ|:»SqXÙ¹¬Ï„˜eÕXß‘‡›êû;
ùÈ?>rÛûêâßNWÛó°ºNîßÛ üUù_Jwwñ³‚peù	Dğ"ÆêÀuñ$·V|×3ëì…u—Ô/™‘™a®^_½ò
Æ&³ÛÊûóxëC‘bêzóSÆM%&ÒªûŞLÖ@êÇ²¢õ„ñIW(
á¶¡ó"&ƒ_ÀAsC4o•çïãGßÛp /­K5ı›‘„õ*Ópëuo‘ÙÜÄ0HjR{¹°.^ÒW|²ëjğ™şíø…#Ì&ÅfĞVŸwøéğ©J:í¡rŞ0Ï	ÌãX÷ÆYoœ0¥âoç˜BgÁÀR°4lq´ß¾ú!ıN9\2¿¨ñ“œâùõà‘"b#â¢ÓÏîrj¾-œİEp†Ô¸ÎÀ.„ş$4;áb€¤LÀ×©”¿CLìÆz¬sg[ïPÁYåA::q2[œÁÔ”b­~…¼Ôë·/î	è~úOÊ,Á‰Ò+Øs 2ŠaÚT8Şl¿]ÿãM(«Õ·óæà’”\ï&åìßÇœñnaĞú¾Å´ ¨2U´ôf[*]|œm±ãš¶ Ğ5éPX¯>ôOõ¯†õ¬¸x}1²Dµî®œ‚±ğ#£ÌìsqSfjlı~w§_”¬Lø„(k¯I&:<£Ì¶!.³ŒÂh6¹pê£Š$Ë¬©
Èñœ	³dj /anCO`~én˜.8¦èkr°)QyÍ`Û„ìqM[ıÖJ;/Í;H{Üö7ÑÔg8&«"®zÁ ›NXV†Ì}bó"BIÒ³‰‡):ÙF‚okaÿ‹2QÈ$!F²ÕÃ(4•r×Cc±6º6cP“•7ŸC^×6ÜãÑ%ió1GC¤ÊFì³$‰vd|ùCPƒ‹Z>òfhÃ#[±¦İ1îşY3!ŒY?”Hı†;;T_ú1•1Ùj$•á«Ë¡J·ˆäAÈLëÆüDÛ¸°Ì£Wz$‹óÔj;d*]ıI¹‹áb&çG/dó"ï<ÂŠêüà"ÖóP¡¡å`¨pİÔ·Ü$Ò¤3Ø)Œ«q;…-ZÄ–;u”gk¸WÃ§‚`à0vŒä#ñCÄY™	òÔŞç¸{e_¢yÉİúz·Úf7‰Š(Å­ÄÔø‚ÑdËSØÓåX„qb¬„*o’ƒÒƒ "¬2Ø•g¤™gÑ ¿³PÅ%‡¬.×Ú!Øë‡§w–é¹ÿš«Q‚ÿç8ÎëY«,–ÕïDQø–pÙ”ñófÉuY»:# Â}\C9$õÖ‰Æ‡¥¡üVvµôÖC"»Å˜ÎJô®x¿Ôy39kŒ%˜›ˆç#qÏIæ°œFË<"ZàÒ>%&‘¥À*”ôK„8ıİÚÓüÈ°¼É\AÖÌØİ+'|´‘1—¸“^àğ¶û°I_7Ö‚!û¼?mwTo÷koggjp1ìÈ Ÿ]
œÍóPúÀõN1ş¢k¦GQûYê 65hûRc+w]kJ„ˆ³‘ÔßîK¡¡ËLè¡¸fïAÊÇ„ş„-'«{høYTœ? ¦kêc‹`à†‚Ú‘onÌ;]`ÙÌ7I^b6ûÊÛèà¹íù¹}‘BÇ€~Ÿ˜¡F­Tát¼Ê¼}ºÑ¨Vı¥œº<èñE1‡×¦Lcÿ5Aİÿ3®»’tkN‹UĞÄª¢UğğYf+›ÈÖuÊZÅóxš¾UÆçüÕŠ3Á™à‡üTX0³£ûPÍ°ÇÆ[š¹½¯ì8q”£ÓKZ¤ÿgV-n@:5Ğnz˜‹jAdŞ]üF;¬—Ô–=vJÁµc(+îÈâ•à+M·5gœuIv–^üÂ‚pKŒ4ã&~>èµÓO)‘øç ‘º×lŸáSÎ@7¬Ë.æîÆÔ‰îáY0—Gò$3!E3şU¦ =%èûZ°`Ş4…–Ç ù´uŒ´(2Y¾KêP1o$J	vwrâğ¦_\¾ál&ÕÇœ[¶nPüÔ¬òÆêe‚ºu<3Â•Nò@Mú]³”ÇÉ¿|ãßÛŸ¯·è¡ÏÇ=¯ñÖ±ÇV¡ĞùÉF`ÇyñEµ×cÈ€ÍøãäÖT¶»J8~§£RmZÑ|É Äın¨ùÃV¬Ut‡ïøÖÕÃğÆy¦{sÜ›¸¸ê~³È‰ÕºµĞ'±‡´ñ€Ü¹Z¦Âc‡ÍÓ
áw^/å3–æÈÖËè•^ºúRV¬ÿ‚ÄZû§JG™¤GxÙ#ª ZËpFêN3ÆsñÅÅÜŠ¸_ôŸ¡LÃ(w›ÚtëR¨»Êc&UÆ‹TÍ7œ-òé¥¸iYÛc #yæ’i‰k‡àˆ½9øXkÓpØ…²(ÒM#l€ƒ'õ£®{îutÄÃÏq¦ïÕä>L[·?‹…F1ŞgÕóÓ_	û“÷IÛPªƒÃM@_šêè`9hL˜9øóLû_B`‘4‡´±DëtÙ#‰É-H¹P|
äÊĞ‘pö#ôšíV•/ñùYÛ[C~ñ©j¸˜ÑÈ ÷¼ó?R¼
;7ÌJƒ#ˆeÎ¼êJÔE:ÿ+}–H‡ÙûšºÚbF¥zG:Òqÿ•£-ÕO&âŒôì©%‹´´¤ÊàMİ „í?ÖÎ¬+ßrÄ7'¹‚¹­ÉÎê¢b 'T´<ĞeÀ½ÇY…9¤©ÈäĞi$¨Y\Š0[#/Mpƒşˆ„Ã·äîïğ|€“Çø¤aˆ`©wV?šÑKV˜™gNÉESeìƒtÁq´ Ô7LóÓv')pcï­'0Ğ:1Ãíƒ
×¿¨ÍSgôæ(˜3]x(L@‹¾úìâ¢.Ÿy©ºE/³ûy†ôçñëkµğ6DP”V¤»_âÛ™§»ƒ||ï°1…c»÷I¾©Ãkİ­İêpûukÁxæüùÇ´£Ø¦6¹¤µOUn¾HºWÆÃ8OÑú¦MıÂrñ¦6¨Nø_:‰—¹ï|ÙÖ|Š0Ç°I$z0à1ã­QORE@;½í‘L"“nš`G¶»4IwÛù‡Ñı.Sß‘R:-OÛ <02èÂ`Œ—t&gMÃ#¢íóÑ[ÓH'M¯yçx°Zà™RÜÑFtİÅûˆ2÷)75×x“”  ƒ‡å­v¾¯XDhÏ™)U~ş8tø¹?oMD\EnHlRÆSñXÂÔïœ7ınŒ õ]Õqâ/êŸî‡Å*ê-\#“+¿ƒvÃsd—Dk	2É¡ªZ¶„Sm"»éÀ•Y>t5ÛsJ`3ú¡.,.u‰à´…0Rõ²1;N)ìhf iDºÜ½{@æâØ·J•R…M‹ û]ŞşYV_Ñªş=İklĞ ¼Oøâh¼ëµaôQÅcXµ¸6kÑÈ$÷É5ÏğNÏcN—,˜GQ*¥\Uqe5Ê&)Õ°Í½Jxíåö\¹IOµû"jâ˜2‘IØrğ@û\ğ?ƒÆrgê²±ê	q/ñm.ê#Öb²PI³Õ	~ÈaÔ”Ö&á&P96K×@y§Œ‰Œ+»pu:åL%|jÚ*€\”sÆäô˜Z¢VâoßG–(dØÁ|)*‘c`	Ä(L#åÅÚ!pQ+ÑÊM½+ºïr}á	¦n‘¾ü0á¯àõ°"œRjA7ÕèÌîC{ÕõÏx½' —¾nWXàİÄhö[ãhA.%‘:ƒJ}Õ>ÓÑÓÅ:1dyúõfKÏËé¹s)\yŞÚŠa7Ä4GIpOhX(¾zÜxàD üE¦+•Ù¤Ñ`…˜U²Ë¯#rú™°¦êéÄû¿ècÂ$İæ¢Şª5mê£®òµL[`ÍY¥µŸÆ:ïÀÁĞâİå ´ì=2\ÿĞuÙ45ş<ügùz’ËÇøY±'°ÄÕaVWÅªî{Ş>!*~µíˆìÅªèÙÜÖê¹pXáRõT3ÌİĞ¤2kˆ…lJ÷ì¯ÅÌET
6·mÆ$yşu;á†ôÏ¤Öq['tº%vÄE­˜&XÆrlZ³™HĞiñ5S
UŞdïİa‚KjÚµ½éAøş¡+è)Ç¯@ÈGè"Œ¬^^¾çöŠ†Å	İwäwV×ÍÌ§™G¬éÏä¼847$RGútæıû,+[«-Pè]ÃjL†M­4ÿÜ>nqajÜ%¤şm»üê}Õ‰ª!†_Ij;6»[¨&eŠ8A®@Eíb¨‘ÈX}ÔK¶¾½p—!b|èé,€´ÖÇKì+å¾-†}q¸6…£[¾ ´q˜%•¡yi%^"9`r¦_¤Ä'„™Oá‚NO·´Ù‹ªë»G)ÿ.ø%è†<|šM\È°‡®u;K›ÿ¤³‘Èá°OM®¹kuŠX– W7È {LÒîøR}KI¹V4N½¨‹¿‡İr+ÔÉhâ8RÄëÑ¯@SUßV01/xaÜğÆ~¯”áâŠN(u'2q7ş•<+Ø>åâtßşÿÀÖF8e²
®e-ëğ`®ÆæìJ„X•ëj¸ ²-5¹Àhº÷åÆnŠ;ïß¤‰—ÃÔ•ã^T-ı"àÜaheäŞåB­(×ä_ M+eTĞ4ÿ1îî‘À Ÿ)Go¦p3 œ„JŒš½µaóI I~Iib»hs²O(CØËY¶ÔXœË6v\‚ös2,ô²ÛºaD¤e	eÄŠ8r°³Ëi|%l9äò`èá³{Ê²c<yAŸäy¾SŒ§(4ØÁ€y×°iÃš$+íD1"5"J¶İzí–QÆˆMYy¯!ãÊÑÖOÀ§úÃ — ıdI"Ñ…¤Ôÿ‰´OLzÔˆ£@*’O0áY»›Ít™4‡V„H {Œ­l`nåf-¾m|bA	BD»eÁe¢ıN˜6¹Åd¼·§v]|F{Î4Ñ
?Îºà‰}—_©¢ßsxa0¢òk${½¥i<œÓ|Å[–_ŒÙjá¡ûñëËTÀ{`å²*½Jâ§`½ú–E×EÂ(SLÁ¥aŠ¸ ]c€%‹prVHY†·EKÇFèo_–¬hâZêÈï¨z­6a¢=Ÿ’µ^¹Ùë¬Ä	tÂİî6¬í7Ó®ß5;)+_Ú~›öi Ì`hIõøâS5¶.–Ø!õÇrBÎS\Ã?Z,@F:,ÒIUjKiü·	+vhù'à¿å*põŸü#Æ-ğfƒº”Sz:•\Tl•’7;Ú1‰(1èE¥¨$Õ³åœ@•hıÕ ñ€À˜P³ õÖ•ÑæEèÃÇ9|ˆÚ¶ŠlÓ–í›“æY±Ü'›×²ùÄ’6ĞŸÚÕ‹œ¯ãªéªKÛ+ ÂŠ‚ãz(³VÔ>˜«m@ßİøumºàï–·'³íÌ£z8ŠXïõĞ\Ó˜Q[lJ®Ç"ÀO4ï(U°Ú…]qwÖ¥,º‚Y©PéƒÈòŒ¦O³N~¾­VÔØbÏ„âº|ı]4»‹cÅà¾ îÜ‹]ùÙÍİG€ûiâó5&®ºCäú]ÛBm!˜vj[ó9æ‹ªñà1Èß›†PÎúBòNzVıÔ¯gƒcf’"Y8 ‹h:}¸^‘à£ğ™UCè7lR÷^:r8‡,¿¸Ô¶ëùœö-l»XˆO³šƒWŒ¤'áNA'h†še Ş‚dÔ²Àwq¤`¬Äí‹û˜"÷—´°üGÊšx@8)E2<¿}JˆúìÊ˜êT¼8à´#Ã?(×°+ñ¾»Î,qˆ x/Ê—…ÎLÂïA
ù÷ÆƒêOºü'Š?–ô9¹y%É¡åÈ/=4.DócY	„¢ù"–$xøjTSpÿx‰ÜÇt{tUn¼WiZ/xÆg™»J	0Bâ?ø€u…V ˆ¦gH|ÂşA#ÿï¤*5ÇÍ<Ëk}YTfMùxó\!/-låĞñ­VN³ÿ;õ@dMC£ï˜>[ÃL>¿œŒP‚9Œ»º¬Ô+4¼“\dãı¹K.Š½ğÁ9Ü}K6„/7…‘_ÅİÆ±Îè<@¸²8”ÿ-µÍla]wZtéšØ»>­b_Åû…³ÁV)è'¨×
,ÁtDWo
{zUì5ŸÌ:œ¬¤P<gAèolM6é³Ãœ|ëí0ù˜¤]¼ı|P—?P8Iíú>õÌF+“ò£€œ²Æ)­Ğé³¸LZŞsçb¾kÛ•gdE·PÏ)¶¿bS
5£R&ƒŠ;Kv‘{î¨µŒìößŞ9´ò³è+8€-~<~h½m¬…Ø†ÀCW`ò°ãŞ€Ìè^fÜ™Læÿû‹ÖsŠ!ì1şF£µ$¹Õe:uDĞŸuãfyn@]Ìeğƒ—ĞyöõíOqFÎ".9ÅÀH®È¹uäÜ›®àê™°À•Ê…ça­åàÂ]Ñ*E­HpÁó¬)ÿK÷ŞïªRôáÔµ#ûüD“Õb¬;ÔŸ‘®gO×46…D6+™§‰î¯EÅM†¾z?§Q—Í©1OÜ^¥,ä>;>rÍxgÏîtÙA/ÚgÙjú-:°²{I;ÉÅûÕ­Œ¸Ú¥×»·>é)¾˜Ô& ÎÌŒXVéEÍyÄÒtK¾²oÜZ®5a„¦v€ÁbÍ¿sŠõµqÃÙŒ«v'Şz]©ÜLBQ7eI Ãve£4pìèMXbqüG™ã"^Òw ÖÏÃ/˜{Š
4™*V_˜¸ ¨ğË–Å_¦JŠ!"®-‹‚+óß©ÂëÔ%˜Ô:n-°ê—õÙıLÂ5?8'‡¼èo“>{¹Èv‰ëØÙïBÄŞ5#dØ ÇzƒOÈaa¢+„òn¸>ğv(½xdüŒ‘´m>k(2ç•ûµyËŸÁH6­-õ'éWàafftæéPª]¶n}x5Öš”¤t{0p¥ ´•ÒÁÂ85'nşL^ŠÆ`02õX7ü¶Ãm‰Ì˜ú†HU/ékmJ$RÀø«ÿp¹Tî_ë^ƒ1~é»î§LJyoÄoZ=‰ùÂÇ`¬2}lySÖñÄÅAÆI hnÊò›ét¼h´$vØà¾l›´ôOtÉ«!ë	Sâ«œ#+,ho½ıZ‚!åiÃ¾C$E>Rñ¯må5ß*xˆ‡Ú&U4
Œ‡p$f.!g^©áe-© µ” Ík\üEcRq¾š*Æ›£¸Fn…•;ÄêVİc? ÿ†=vj(!||ö|›­vı"yOÚ‡“‹g¸´k€qSón“¦MKÒü0-FÏËğƒoGzÉnÒ×ªbèŒÀ%·uìŸ8ÑâxqJİi9‘Ì8š£ñ?±	ËÉÜ/¸O‘SX	1ÿ;ÙÑÇö!&9Á%¬päWn#{?À!ÚD)´]‰hV­ÇéI"‰XE6ıÀ‰5
e±0%xÉ3§0:OÂR*˜{šVØ¬¬Å-Åo[4X€x}>Pƒi{j‹ïQ_ùÕÏ—º4Du7ûQÓeT*ãxÔtz)À[Ÿa¦Ä~—ºÄûjßxE4â+ñİ–ÇÇ“á!ñ´‘CQsÎ»÷¯…§ãVV=Jg Äˆô¡¿%"§]Y¤åòzª¨^÷„YÉ{¢Ç;c"DŞÊó,³V9#	ßg=nÂ«·pàœ?¥×A9_NTéÜı£cŞ$‰§Ñ]yQ'Æ3&Á›e±ƒpG\5V’Î²şÑËãÓx¬°Ac½è@D.ÒPB‘ü,‡àép»ÒK¼í_‡&ˆ"×‘Èî2øppïı*êı3~ª$š«WÛ:?0tR„\)1™ Jı
øF8U3c¿©¾|Úké:§w_ÇÅqˆ±v1w$[ûÖº“™ŞHq‡çDå¡)Àhßæ+‡í7„w Bû.Oöãƒ%ÜCL=Ã?›/±bÔÊ—ÊÑş2g,!{a$Ûo)¶™®‰$ÑkŒƒyœÚnMıÒ|‰‘¯zWâíâfŞ½Bâf€UYdÈ“^¬Ôÿ$ßÅÈ>Z¡½ˆm¼ºc¯!†…€¯ÆxÀ3IÌÆõKJMäëTr;š0»•èC<ŸR€È¨éÆlGÏ÷‡ä3>p	NJ÷Ê’ôSxª Èš¼ÿ„³*5Ş
Ÿ\ÑÃµ¿K[Øi¡^€`¸PÀ4õ·C[áÄ‰0µterh!Ï÷}7Bq6ğ¹şTıºøÒ°ßi]şÌx…¡¤(µ*}Xxe¨½Îà®Á4<¯ïI;3¾êBÅó²ØIIëäXß34Sõ+æÜ=g§ãuİ‘Ù×øKÄ oœI1]êx¡'©që×Ñ'„}MÑ¿ovï$i1¹—¬Äò¹T ,±à/KÆs7ŞóhÒ¼¨½ƒÿD<²€hpÜ<æúõëçÅ„Xœÿ°ƒqhêÿ‘ñ½E%¥5–°S,›B$SZFW½å#hS‰¼S»½Ú_]•öûñŞ=ø,‘–1-eCĞ
«Ú‚[®Â+æñK—ñôŠuµI¶1¦ök”™Æ.ZÆ,Ul-ÀŠ¤À•rÄGòÈ p”§Ïu¬
ÌÂ(+;|í^±~¨ŒğÖĞj.‰Œ·g·å
xòCIqøD	äGÿå¢ô ğœNÎaÿÇIy‹!î.¥¬Ò@ H3 ô)îÏs¯J‰âÚzèÓ9’Ÿ"pZxËl†}İÁB‘ß®Tq{(A=¸*¡µÚÑ Š)éÑì‹Êñƒ÷\3—=ìß'áàYï!Ê½ü‘„I»—!åÄÏ¼&]Zæ‡¤âpêşEwüËÒ¶‚}&z­út¤y¡ALt}íµğ§:˜†·ÜÃÃ©§4Ş¼$ı–º¯¯‚1Ü˜Yò‚Õ{È½)}mØØ}HY¹ô/ÊŒs93:ú<êUò¶ıO²ğë"¦Q5¨5Ã„øâÒ—Ó†ıÌuˆ-$IpÉŒ‚˜æ‹æŸæƒCú–®M{è‚ªß´Ğ£»íš›„Iê–$k‹(Òè¤aİFb®Õ}âw™‡µF/Ã¯ú(=v_æ*©­(u-Ğ|GÑ·¡å:c‘úi	vÌNiù+¤ª)"mjÌŒ*5ÖqŒ8üÛåÏpgÇÄx&ßDìÁ¼U¬³?Ï’0Ú±#$_’¹Í³Ô‚Nc*?‚®­r’[ÌP}ˆ9w§õ®u^œ 0V/d=7frfâ¦ñ“Ÿoè‡+ c)Ûˆ•3‹¢E«´g”œ„åBQÆƒÇ¤–úàŸÑah´l(BûÑ3èşW€ñÌ•TX´Ù\’_²F'„¸ˆ% s>¡­2+öK/EFi"±s	ÌdR+/w"k"2ÆTé ®„¤t"Q›‚O	gñóZ´!Ò4ö³iqX]fÌ"sv¥»f¥nÍm€¸ãll¼Y ‰f'Ó!YâÉ<Êçˆ™"nÃC@…\j‡ª6¶ïËıÖtm#úYl›pµƒ•pÎ¦À£kİÑ<ªÆypD0ĞŠZ‘N	VÂÔ]%:´»ÿ#|fD+.j³-ó&Zãtqô»‰rw!*
Q	nj]E‡²¼ÌÂäa¹0á8²ìC¦E†´ƒL£ ifÃDá°&e‰_ĞÓú ÄOöÙÚË^X>[*shòI,DOİ”ĞHyâ™Nsâ57®ì÷å#Û:"Í>—	¨Û´ÍÍ›š¸¬”ıkn>TBïÌYöûQg†¼È$¼—r>Š²nı; ¡3œ•ÆÊ¾jŒÜ$o 71yp.Qóè&ú-õ#UTœUT"ïÍ¡rÙŠYë_@Räyuërè ’ï5‰9²¢ÏdÀ[%ÜÛ%ÌE€t¹·Å$5ix†="’vsÏBÜGY¼²ç/İ+÷¬x$y<
ÃwàÙc¾æ»sE“í”&u,½/<—^ŸÕk®=‚#A—qŒ¤¹V 9Fsiq‰Ÿú‰O¦­Ñ˜ùí]"ÔšQÊTA‘igîAñ©ëAìZô*Ä‰-**d…ŒX³ôÅHÚ¸4 ó­f®Ä9æ2V¸’<¸äWZŠ¶|~»ï§äíGUà»¾C&CÕ³‘ÌrA˜otÌ$y9®ÎıG4&w¬È.§oeÂÁÅ'a@OzªåÕ+&È¹f5$n~4µ
i‹!ß«¼‹ª2?FˆİÎ?ÆD]:µc#ïEôe®ÿnæ ÎQ™_ä˜!záÏF5L3ê3í¿ íŞ-lwèŸUïÊ°ÚvyåÌ§²‘~‰,Æ|¢qM^å©³Ã¹X1<±Lœù8Î¾Ÿhñ¡K{I\
agA
	¬F[d![·‰pÌ“ÊÈG‡ä¦òñQ/úÇmøŸi¿Î„)?é;6Hñ¶»ªéN*I+Qô•_oê@Îùáä[bÊ²Ê‘y8óæ6\—Ú$<ğ¸V ÅVøØjıHğ‚²3¨­îŞš¤°·FWÂ¡¹à±ÿ<g=²¢ @s“î¨ç‘™ı!¯r:ˆ¤u5ªöñ3¹Õ“Q:±E¬Æç(CÉŠœ™eEö©·E%åLd8;Xà[.ş<£³á6&eµr#I £ôÔ±È†b·âPĞÏÇnÃ×”!;•¹Ñ2K€µx‘?LÁ ¿\®©_hiMºÏ_•3­Ö•LsÏT?YğÃ­„­ƒ).ÌÕò•ÎÚQHçúhƒƒÀQ_‡¼Õ	2(ÀÂ~ä B_yÊ7Ü­$GñÅßd^»ee!‰ZşHQİã&X«äS],~„ıeöë+×¤ØÔœ>†ëEü÷àºlO9.Óš¼Íe×Œµ5z0øÆÎîÔ×Epjƒäõ½rJ?¹‰©Ë±sá?€¬ßúïk}ô@×Æ~~àÓeÓÔ':.´‘ƒPSd¨…rœÅäªdÅY%¯d"uâ”\~wD­T¯Éy±&ç[ VPæã³wÂ­FæuşâÄ¼5XlBöÑÒCí‡it¢÷CâV0N‹uJÈ.„îÔ‘Ô«çíß§7~†]Ìk$K•‘oœğ"L‚ZInöºuœš£N³IÕğ½M¦ò¯83“å¥‰¾àtög>o§èŒÉ±ÚÚüœIæ|æ xø|ì¥öS>’m:ê“5;Ç‘ƒçìK}İ—AğGøp"Dú'Ú«•r.‰ïEeÎ4øyjËèòÙ[Ô¹j²‰¡i`:™Â°¸ÑE¨SêY ÎN`*…_Ô]›æâ­9$;3JAŞí¹5fL»“•«}ÇÊ9ÎíU~«¦¸;êôà3’×—iİ¹Ô´êÔ²$„ãås‡ˆ-´»oEç¤şèÏçÎ„ÉŞ`ªOİˆğ†]bú”Øî1QßßV±V*-7]øQfÌ¹)pe‰i ÃÚST¾ó™çÜŒnpĞàÙSĞäğ"¦¨ôQ'š'AU3E‚ÁH}¨ıÈ`òa€H¤î^„9ªmÀÖ¦’¸Št$‰cĞÅ‚éƒÖ,+,\d B„y„˜®Ì¥4LLşˆUşqJé1é¾Jj°.ƒ®è÷ì±\,Ôwl³q‘ì¡r^Æ>Ou}»ÒÑš§1¦îm>&¥·¬EBªI&ôXê ¢£qÔs	şwÃˆªTšrñÎ¶VŒñ>ÑÕgº	±´÷_Ò9¸ÈKÌ§Ş$Ê/R0Eµ¨MêŸ2“R+îÜ*§}“sF¾º.ñmud’Şißã¸Ò÷eõTª²õ›ÄŞ‡²¯o@¬Ô~Éd±LsHß`ÖÕG%û‡JĞúDäÃŞ²šTí \NI+Œã{3å	ŠõwfüùÖ„ú@ªãÊåµıˆçÆíN·(¨¢ë=£»>ÇÊ_!,§ƒ´¦‚‰A77J’9}9…¤‰ˆ¹Ñ¸‡µü>Eéˆu³	 _K´ÿ§ºôï4Êİ‹wR©›—ğH´²ƒ—¾×¦C¿°h"¾¥Ä±¢"úc¿ûà>ò“dhO4fwÅd%ôm'QÈwtŠ«ŞŸN+Êd¯!œ©Ï&ê`"ÄmøWá5ÑùîÛ(¹¥·otÜXÀÈµ\xK¸ök¼§jÑ&ØÀş\%¢úvaÕµˆ{V6ùÌT9ĞPé¿gÖø«dq®‰À†ğDã;`pëp}ÊaÂß³u÷¯¼Ÿ| ,Í›”†lN5G^Ğ>õ=WüS—YCˆc£c&>¹à~=Qäko.ã%ÓF‡íâœ‰üg?Ëpf{ÄÊßZ×·›­çqşDZx©‰l¼ÿu°#vïİøÉFÓaF8FtŒ¸òiR$p’ÈÓ"›Æ¬s}Ñ.—Èoùhaˆ5|ó©iêòß§Î¨Àëq›=kSñÖf6OT‚Óï¾­g§òmï§şÑ­«Ã¯$R—sBE$¹`0Ø[ÂI=yÔY²Ü—ÃEå“Ñ™KPDL|åk(	ö»–? n>q€æ£bÿø}S‹œ²¨ĞmfI8¥®vŞ$¸</IF';™?æ³6ä‘«çıJibş”Ñ‘F]yãÛ	ãçA®R±ã“jß…zÎ7/¯ZÛ7Ğ¾ô*âb¼q£í\Ú}Ä5x*„Ã4î¸36.ßj; ³Ë{Úï¡›‚NR:èÕõ<‡nñÙp4ÿby|PŞÿã}=R1ÒÃtà‹&‰mÇÇ õÂxqDèú‘d›O»İêé7ƒr‹õ§zÕëRº¨ñCIº"Ôßm¿_»2ĞP"ÂYõ‘ ÂÉDC^§[¾£eÀOÎ — ¾d®õ|%¯ÊÒ¼¸µR™U‹$Ùó~bÂÈß;†>í7iÕ¾«×Å\t+"*~»:S’bXb~à¥<1>Œ<œïèÚ=šgı&?œ7oHŞÂ9£m¶cw¼´ú¶šö\ÈÕò‹j=AË8UW×*×åÃ¹<œ-ë§3Ê°3Ñg"øª³~Rm<&¯8"£!…İ"iv¯›¯è0yœµ%ı9ùJ×m¤ê™Ò“„±ÄÍøNµŠ­ÕõDŠi¸4Ü;™H§Y6sJüWQÿ*òg‡ˆÓHeÈô{Pc‰>‹îxlº›.Ë¤`LÂ„? ¬·kşô›¼×;¬¯İéÍn!¾÷f«(HìóQG³å´XW÷%;Sgğ3ÃBätqòìô5®úAä%Á4À‡»6‰íúB“ «4'C\-KFd—c-Ç?+U†¿š$ÌÎëR[u¡]é«¡Dg(Ö$fş{ÓÔéà›ÍËs ´Q¨èåëmt
ÄLùp††¢œªŒ¹K{^ìf	Ï©Œ“M*duœM(¦X§¤¯Ù~'¸KCbp]¸.VŞ!jf+.«5â*·¸À~½¢?BR:±U¸´R¶ƒ¦İ›Ê’[×rİø±	Ò{9Šˆ æÿØQsÈ“]2£_Àô·ı¿bßğó•œÒW•ı¡!Ã×ôş<ğÙ±cË§ŒiñœÌÂJ˜Új¿ğÿ‰î¦~à»A†qøäTµDU+i´=ê¨<2IæÛÆA¬)²§ÀíiUSÌÃáp@Éú³ãÍ`A8¦ygpì«Ã”7ÒøÀÖÃ´r†¥LåKTc–põ¹Z™,¹×ãÕ^‹EñÇ˜Ú	¿TØ¥÷·¬ÀüzÊ	Ê†„®3¥ïu+26.aÚËr<*¡^ khÃ–Ä÷TªÔ!,¡‘;Fv¶@„AÎƒ‡”xˆ”\şÿÔ²Â©o´.Ú²/÷]œjµ‰K¹¾Yc¡Š‘·<xíŒbÂY2#bJâºRá™²1³¹]¯­Ò5\¨¾¸[KxŒÛ³N?ê !é¯¢ŞkÇ]lß*})ìÒ1ú˜zÌ%“o‚ZW¹Şö]Æ¨sôË ‚&IÂ®Z+3&#Œúeßj·Öò÷b‘t{pÈç!™áRŠ›AEùJm¯&†½AØòZ·áQIMÒj›˜Î‚ú÷ËøX´¦µDTş˜BQ{‡ş€ÈÀ¶İ£rútQoÏµ‘Âs½]¹œ°î Ïd³æ=%…%Eè¥T‡O­xóUlèzJÁ:ñâ:ì–Şªu/³»;h´Æúãæµ|×+9,Ï#È¶ÄL…; š'si,_'P¢èÔ³*Œ-¢ğğàDaÍ)ºù®«æjB=Uvû
<ô¸Øt9²*·&å~¼’çÅşYû#½j™’ÇúéfàÏ7·îjév‘¦d(_&#şğgw~£ÑO›oSî@;¢ZXÂ®ÓL8ôx\àK(ÇĞûOˆcÇÀIÍlSxfŸj[y™ù¡aÄ¸Z|3“•v³4…1•lÀ¨c”[Á]¶OŠ2}PÊÏ=t©sÿK¸YÑøã4©¿Ï›¯¸†‡‘Z->¢ÚŸA×9ç¦>É-cÅ ëaı<¾W]Œs"©ı7ÉNUïvÆıe“ĞécãÏz£¬jN4_²D¢téÍÌÙ\Òşšz»ÅêW³Ê2*}CôL¶‘ó NÄQ"F¢ëZƒ(`5‚½AÄ	Ü	‡P‡İí¬
¾fÑıìæ oHŠûu ¢Û$eSVwIpÜ¢‡./	Ó†-½B§<O„$®: '2~Ç¼iMÅHŒ"è}Ÿ#:X[(¿?p­%77º_l”J35ó?¨Ö›‹j
/áıı<¥U`-ÇH~Í­	Z(I¦;u‚-²Xv2wpØ'’“m;Sïíi`ëúNîÿìŸ4Ï^‰’¹Hí\p%†´àyc¤‘JÈéıBãw½qÏãÜX~#æÇ&Ñv$æwÜªPŒ”=b¡Ó•/˜Ü¨‘xB^Ôº;'Uæ‰I×ïÁÿC@¾5Éqm¾¥X‰˜^?:E˜KVK³·öàÇ>T˜Ù¾ÈR±ı’^4q¯Í(Vù¤óvƒÛ<  #Ø`¾Ïkb¼+hO0ñÁ·”9'P84Û¹L‚€N”ıøŠJ*ÆÍE[:e>Ğ9¡™zK/íCñ:Š$)ßo›·j³Ù¸÷¨3#P€Ä-õrDï‡€{á!›«!ÂÕuIÙåœMuÊ±a7gîÔøñóÀ‡3^ ñ¨Ì®6InÑgM|ÏÇ¯à¦s{kR†³Â(¬­:³N–¸ë³UÔÇÑ³ ¨…€Ü·ÓƒÒ¿l‰p¡¦w#¾¾o•Ü=&Û0«!!Lš"Ü‚ğ<ôƒCZÕñÌwãÀ†“—¡BZ˜8-|l+´ã‹Ó[ÈåõD½U<$½ípİ¼—¶—×”¢÷síÂÛx³ä\å‘B±âZr+±{:Õ‡k3À^†ÕÃtÍ¸Œ9Õå%Š!§ÖıŞ1© *A?v<¨tÏÈßo;f+©j‹…a93‚3?wo>ëtBÓ‘-é¬:)¢âBáÑÒôUî1ÊÄ¨BZÚr¸ŠÔŒLãíSpïWD´ÙºŒ×}f¥ô†#½G/³®Îõ¬y¢Ø[ôqÅäËsıŒÂívÔ‡mÙ#CµmH^¬µß
 –ğã8lÚHêKÖo#]–ï3UÇâßÄÙ(¡kEƒ… À':›&å<Ê;..7?D;’ÿ/*1P7©ÆQ¥)Ä.c”ÚààÚKıø})ù¿.(äó3pç x·;·OË`AÊÅñêÒs5SÌÒ}Wˆ',g¾±Å¿æ„%EüB‰EŸîj’à˜q©°5¾Údï<V½fU~Fnó7X	Ôº»OIÁ²'§‹ìıŸs fzaj¦_VÉ27=Õ´8(?Ñ´>oIß+st
+Å R÷ß­å5.¶ûÛMÖx0)ˆF‡g×=ß[$OŠpå,uÀdÎÍÒıÕÉ®|‰€¾÷«¹  å¯ H5†¤§9Pk˜ æª0h…ì6TœwãcRÃªªÏMƒ¡»]2Ó
2£º¼§	 Hæ›F¿Åô
mÏnFˆM2aYmgÎîoà4Hág4ï»\9´{R7RÇ$5«æØáãó¨[ÙvyR­É¯ÿÂ¢Ö’*Eh»æ¿ŒWc
	VĞ…¡¨I•qta¼H2TXŞÿÍ6 ô_Í5ÊÊ]pà“¡k‘7VÈkî…;“Å EFC×JwÃÉ¾”Êg|_.4¼'*ËIú¬Ú+7ÙMq	®…B×™ßĞg[í6	½Ğø¿Q·¨Ä¢ö|6²§7áC
ş°õƒúØb¥C8ÖVŸıG¯§:˜5!¥fW_©…pFãÕĞ&JX‹K/ßgp-ó’"ù~1SˆEV**Šw^\ëL#æå!È&ø]q}8›e ‰$+‹õaAk3!œ?ã¨&¼r¡·¶FÀå(`Ğ·e›°IªC@S–Œ¬–+û;¨*óœh–âòy#€°äÒ\Ú‰yá9ñåHøƒ	S‹‡ƒ‹ä…0,„ˆJ%ñ+Øø¾$ò³P]ÛöÎÍjÊÕr^è™¥râhéaz®=ß°ãXŠt	%yÄÀm¬vÖ­×ÎgBÅıeŠIß£$Ëâûi6Xt”ïØR‚)HZKP…D­â;ÉÚ{ŠÑ}#Â­L¢NœU{ı>Ls3kE.ò„n¤(aÅ¸ÎJs ëtç¹æÑİ”İC¶!å|c:äÍBr"š›Ù:‚ß±/ƒGÓC²Ûşì  d™®Ú´İAÙ&†ïÔ§büuãsÀ3öß#€sÕàpŠ¤oÎ­	WDHõ ÆıÑSéÕq´àpª‹Úİ3|§ÙŞˆmŞmp®¤ÛH³{Ûë3É?ziÖ×¾ú
˜†é÷@½´ºÕ;‚=8B4›aêFRliÜ_Y‰ú7ª˜á–ÙÓ‚†e“™Dä®ÔØı÷Pt(¯ºœ> 
ÕŠD@² ØÈ¦±šÔ'ÄÍK@²¨Ş­“ºáŸ¥Å ¦ÆGhI©&Ã„ëMaíPSQÌa3S>¹>_'„J?«Œ´<ß×"Uõ‡òÄ
KA¦åîÁEœ'GnÖıÒÔœO«K¤4ÿp$<=éOÃŸñ«8^®&äòĞd½¦'Dtå£ˆ÷"qÜqsuüL]‡G¥+÷Í5¾\Ú?®±|òÕF	&Hªìü²Áîè9ÚÒğm9rÒé@T‰}Vl Á4®TÒ+I;ÜgzC:lYdÅ®ç;ÛV˜ºÁ»Ö&÷‚Ã¯6ÚŒå^m\ŒÜ-¦—ºS4¡Õmì¬‘ËÂBCn
Ö|"GT'¥åÏx4N`|â‰:)z
Ä7µ,Ø‘2ùÙª_‘³)%(MGƒ²ñ³Şyß]RØõº-c7¥J®uèŒûÉ¬L˜±	í~<?“I‰8©ù‡)vSó}j.TO¸²%îèfcæÕ0Mš)<]IC#˜­±iX?¦ÑÊO+$¢$şK
ÛˆE=0…;uh©V€Çû/¶Å2{İÁ)µZqÂœÍ…ûi\Î‚båÚP:1î÷jZLÌ•ç–ˆ®<8”d×~ÍNˆEa6š¿÷ÑY{Ì\»l‹Îz\¹$Ô“Ü¾­Å²·s:ª¦ØÂ- GÂ¦c¢Ôm¶Ô(ÜPq?Ü…W|£œDD°¿aèï)êY$²óbƒ.ë‘fJÔ¶ïª&mL_‰€ùKBƒ¸;HıÛ¨a™ÜÃ]G¹ÙÜU!qU-ÒrÆÛ#Ö$#Ü­c0¨btyEéùNyMX^¶@92ŞÍ¿›~Mme¯’ˆN¹w!·4éaH¥oMß–i££¸ç©e9·H²k¨˜ªøˆ¯M]ˆ/|NÖ“/0‡Ë–ˆoMÀÍÛj9>ùûéÖº¨ø³d^Ïƒ6xïö)9òR³?…¦xRT¯qús]²=°KO¦8¸àW5Û|˜¥‘Ò­t6üÏ* :’U*¸|éÒæU¸7Üp¯:’ï­0³ìÔUR)I\ï"Ş4~û>Pg÷QÔ”™ÀÏÂÉ¨^á
]YôUµñˆšÒ´Ø,·İÁ³ãU?¯ ×U4Õkp2(°ºh™\Dœ-ö™8'YºÜµl@Ï=orªzn‚&İ¸ŞÊ0ÔŠ»<ÖŸŞÅ­k€‡ğ6©B„hr‘ß¸?ılØõğí³à˜/W™ùOÉÛáÚ·ê?¹¯Ğçk@k7ÿ¥ˆ=ÏB@ĞEŠb¸?—§…Ætvöp§©.oQ×N/t6§o£A	yÒœß›k °Ãş2&*‚ùËï8ûˆLVB; öl£…Üc\8<A2èçÄBÇ}Åÿh4IÔwÿe|K®^VmÓcÓCAŒdÔü{DQ2¼/â×årqñş3Á1^ìKñíˆ¸²-ÈéëÊºğW¾°Áÿõ;œÉ`î¶Ğ¯ÓÔÂûSê+ˆş_»4İ‡ÿéÑ·T¯÷±2Ç"«B­Ø¢2¥·]¶MP{4J­‚b =ôÑø¸§Ãp4°Áò<Ê=¸6RÌØV`¸ª4s¹aÍy£ôö"ÎqHMÄ[d}§æìi!ìá§F5¢îİ|[€­ªñN|›‡ûÎ­æz&°]a¥éĞ§ì€¿œ„öÂÌÁ(:‹yš"@1CíIúâ…|:$$d'Ä¿€ÿÌ6Vªêî…ò¸÷bø•~Jµd>ƒ§!Øè Kp‡´/,Z ¸ø´sÀã ä»p{ÅŞµÒª¨#æIìh†qâ³÷"’<jDÕ¶NtF¸¦ËJPãÓ×şuÜÚo®Èªû/0´ŸèV\	¢ûo£^%¬ØQ#x2IQİ†»ïDò¨¹Fj4ß.Cb}Õ%Œ£"f½#ùb‡Ğçfå5À¼A¥—Uœwã¤¤ôjga…‘Êu‹mæûO:ï»¯˜¡o¼@^¯¹¡š½F¢„…«dßSÂÖDŒó`Œà‘åQv.ã÷>± E`«…‘p~!x9÷ãÜÉ3o¢à$Æî|MRúÆv1	EGÎ‡CŠäõ1|ÏÆŠ.Ó?b—4|&¬º–ÑÒfÃ'Å‚h›B™æFú´WHJœ‚œr2rÄ¯Mÿş¸Wìí½2
¼÷o-ÎÛ”]»L%Œ2,mõ$c5İ;Fı›ˆE¶6ª<‰Ò2¼ˆb÷q[yĞnâ»vPdû	íRwaşÒ=0ru8&c˜¶\iQÖ„QÆw¾Ñí<IÓÜ—	…]©¬-‰º:Gsk¶8y{Ìz³¸b˜ x´/<5ıB”53Ü_Øx¥ëÜÊƒ¶•Æêİ	+™5¡Máÿ&;­5áC§.,Âªšáu¼.‰ÿx!_lĞÃĞ;²ŠI9obAœ<–waáe§Îl[€”Q,øĞy)0VÙÊÎa›““ ñ:ƒ{ÜÃxÓ¿©ìÌkÌ©à—b^”ú	¥„¸¢•iª¿à©½ 5°JËöÉƒºıkGS†¬
˜n?Çå™ñGÂ(ècâÔ’@<»i‹{ëÍ.<¹,ÂF½_WŠêvƒä?ôR¨µİ(¦Ü¸R?fã2oª'k¶¨Máãˆßë.kY5)Äâ<-j6
>ÕåñÔXuë,<°‹•—£’ ­|×ø³I7ĞßÛ›Í‘gÏÀCnRë–ÜÀ\upÙ2MœÇñ)ÎKÈ­>7ıG<é<yÈcvÔâ»©³…@G±ÅJ¯]@á§H³b»åf»ı¨YiƒN–uõİÓBáíÏu-„æRÒâSĞRy1/pFxfwG4‚ĞÅ˜f„ô€¥ò¢t×ªü)/-$cXlBÔÿÜÇ7Ù!ñÛ¯¸İi… Èø/B2±ÿÜlõ/ómÿbŸÃøm@¼ÅGûn`Á²Á²å~;îQôÄi@ìÅç}GºnûG¸;é
ŸÑ}Tô¯Rr®%x{€nŠıÑf­¼V4²á{¼mw*ràny¸›-®©!Ç±ˆú08‚aúNàûÚqMiÑŞ}€~¼°\ÅÌàÛ"™ÃºwÊ¾è	e~”¸”ò šm
dióÓZ*<–1T¨©sUÓV¦SìJÅ†ÉÀÍ™%8èNG²ş¹zPA_0İ[Ú9Î-só~¥Â€é²ÒßŠ•=¨:Ì°âH“ë/æo6?.W»ª¹õæ½Ù´œœZ	‡ì‰¿á…ŠŞ 	‚¸PYºzcÉş°Q[Ä˜tg6ë¨é5tÜY±ˆ&á÷Î›‹›{-ğ¦[]YsˆÆ/¼Q¢}“ªÈç…»¹U^Êx¢™”êÔ¶¢¬Ğ¢¥‚´u?ÙsXÁpá·ˆÑmbˆíıR€Ò¨ö4NMÈÄfA²3	H½bzèµ	ûÀÔ¼Ş;O½Ø=R÷Ë¤7S:ÒÂ©%¶í|ı`‹LœvYf¬rR˜²UŞ`âcı?§î{öö4¥)ÙáxQØ:9q8Aá½(î=~ ‰‘:a¬Ä¬-xç´Fëg®Ù*€ÆK¤‡îc'¯ªˆdı«ªä-¡uUØúÅù>QTe¸å­‡tiÓ?ï“-Ï-I`[TsÎ$çÏb¬ü~mú@ÕZœĞV®µÌ]h-è=¯ŒJ®İû6VoWÈtÏ˜ŸÄ½*™XÛzÃ…ñÙcFLÛ²K@™°±/NU×À<‹6Áİ€–ÏlhaÙÑ+÷$wSÌj‚.,œ‡¤³¯ò¤)’3iú£şï®°±ÃÚt…Ğ“¤İÍdY G|^YƒŞó'¼1W—mÎÓUx6uñ•–p71¶
 æwêbbIô	óK€=j×«ÿĞu9Eå²Q5"%XÉq¸
ònÔ…	âÄ!Áş=±­¶ëSjtÛlh¹sğ~b!üË ©€‡˜q¹óË|ì»~Ìë2vjm(ùÍçì}ßb$¥¤şãvÕ/—%#ŒvÜÖˆ;^Í6œˆ­ğ/Ëª’ıõ|M4áµk|“Fä°†H`wîZÒ¦Ò5,•ğ8¦nªÅµ` ƒ‡Š´Ò°¦ï’K^×WdÉ‡Ø !À;XÔ.eEÄWLÍ¡ßWCÑg$Í¼8ö»a±-¯¶“-=Rj§·SŠïÛ>¿—èš^WíœĞ¤R‘Q–ì°*&Ğ­Û™µGı ^Q±Œp‰WY,KÛŒz@Î‹~}¶á`¡Û™›¡6Á7*"O˜Ç£ XMÉÕ¡³ÆXS¨ğ¹zur	§æI‘>gÊş|‚¹6kÏoX!˜“#Ñğjç!Rh¼KŸŸ¦Êµ[ƒ×Ù¾EJŠ²ö°<ºC©.4BO‡{ùƒ£áóNÁôÏYG£©-BOGˆ¬ïşğ³¾rKîµÿúB¡ˆ;¨2AÃït’•ë•{PbhH†q”±‚;V.Î8è¹Ê”¡€ÒDdØ!ŒËéí'E©¶îg0Ü††¢WERÈÁÜÃ(:óÒAG—fNà6ò‰»28S½×‰æY;w2¶C)…İ¾„2ÆPŒÂ¯¼[§\úKp¦âÛœ»E¹Q'²	…>•xÙ…ÆÓ;g‡ä@ÚíAŸ0OÚİ€òš!¦¬¾h ](R$'=}Äı“B¾±ûçÖ¿n„Øı˜ÑèWµ®úoWšîHaãoå“öúS}„Y]:k§–Qw -½-¤Fô}ÇØyå™z“D #y&~ŸûcıWğ¯Sr±Wt}gA¤î:²º~/«]€–ñ7é§*7Y¸İ¦9rVêhi`’˜«B›Õñ˜)ä0çV<šùWOüæ8	B)Á •ôG¢Ÿ	n†6Õ²²·ÄÁëÇ0	öhsëã|AØ‡!ŞÁñ.‡Ô«¤æ=Y9@ClœÎïÕ.(Şb!cL<ŞÄÙÂĞ,×
ÿb£¦£ZÉb¼HäŸìÔ«™’ğŸeªŸC·ÜvõøĞ
å™ù E;ñ3’,¨«£æä¹°A´TZkÊ#ë&J:ãI;WsDˆ%7¾÷ü=ïFku_H§İ‚’İr(¾S@ñ}»§@á	µ»ş&â˜m^6y×q×oiéŒÎBˆ—ÆÁ´×Â’mç×ğÍ«iîw™ÒvšÄ¶Ø8xÑ˜£²#ÿßX½ü*dâÜy›éÕürcŠVSú®:™m9Ü‘zÍİzÍ&Vò¥ ™0I¤%ü*…ô*Øİ'¤“ 9¾ÊÏ'×‡İ|±ôÎyö¦8õ÷OUpk[ö2T<ÃgîŞÇÈå…QËHnFsYAÖ§=‡s,”Bó–ù$$ı¾Ù¨O?3Æòus÷  «¥5½~'‚P½HZšhdàI2bù"óVUÚSÜ—$@öıY)Îù§µU!‰%Ì
xß¢(íó±×,‰½ÁASÒ‹³’w3"?’³‹¥õÇœ"›{¯ØN>y^1)ŒziiY|4Ùï‚«­7â–a3B+³9ƒ7#*Dk4O~ïÎ°£’·.ÏZ³¡¿¡úgV0×6æ×Í· 5söÍïÔX¡Â6ÉÕÛĞVÉCµöá4ŒÇf…Jl½4İå†%ŞzMTƒÜ^z¨gÚ	¾±üY!¾²ñò ÑÏÍP_rÂóòpùÙñ!N_ôÂÖ@¸IE·×;¾Â|öØÁ/ôöÏüusÕÒàk¿áµGşãü­ıjbÔºÛ6<-ş‡%L0jqá,`¥X–÷@|rŠ!¥<»xÉ@œêu’nôl¼óìKã÷Kği˜¡‘FB|›gj§$¢ôü­Ä`#šä4¬I1 —QpS2gÙÈoşdçşjØÂ“ºúvğŞ ÈH|„Ju[³…»cAİ¬£‘ÿa©ÿñl†ß¢ë4e¯/,…şßÆ7+Àõ ©¯Û©³‚7³}•–-’Æç[€şHÃÃBÃ]ôüá¾‘%!ÖÎÌĞœâ§uİÎ$?MìG²»‡Ëƒm‚Í®™ŸŠúEÉ¸i±3) ‰	#¼Òuò¿QâØvbz’Ö“”æé*Ö‘Ì(±y*ÏØ`8ƒM¸šİH†ae¹IÓB¡èjt	9sôH«×Íô4¼öî¦Ãt,p@|=Ò×#>xL‰ó°ÃÉ]å…jGÙÙ4£[°kèüî¦Çøšµñ}Ÿƒ&tuê»ßÕI ÷ôšÈ¦³N½ŒşÅ”¼Òü†Ç—¨§îİğ+§$ô¥bA6Şı†XAZİÚ: RÆOÒN•z†õæ23*>mv±òcÈ]ë“Şã~ÿ‡Æ¿´P°À¥VO!Şÿ¯ÜÕÆ¥ıü£ƒ9´·¥)õ#ŠVä)ß€c¶Z:ã kİæÉAñÈ‚œØÑîµú|ŞB÷vÚ}p!0òTŒ£yäSØÈ&
Ğe'LŠlúˆ<MV£°4	r¹UìÈ“{%X‹»‰qu%è$R+ü°}H¬¶Ûë¸³!wæõŒE_6";vÛèÿ{èê4¼
Ÿ/ÏmNÅ%R~¯Í+ë/[£&m“ü›ÓèÇC0­Ø9X3]n¿û˜í±˜¦ı¨/œğî‡GpÜ%*'qävrŞ/ğ=KaÙy•WĞä¶wHF*(‹ø¥^Õ_N8á„ÈÃ<¤Æ™øNhî}Lò©Ø¹±9z€yº^)1´éqÇ—“Õ$à©*ë«‰Ó|&ˆ©©hÁŸß¼(‘ÂCvsı&<ˆlô^°Ä¥9åÈ:ğêVèÛVÎ	ˆ˜’›»úqÁ%ãé|º?ê b+ODïJÍÓ&cnx1DtĞ×ˆµÄó&\$Kûš=‰UŒŠ#Õ¬)>ùe®­ >?)¢ùà@ÕpíêÔ‘ğ²“‰ªD‚xòŞ˜PÛ/ Aã/Œ`ÚUT1	BÆ£ŸCÅPÜõÜZî²jSj´—]xÚWë¼¶©º±ççÊ—ĞòÕuòDqÍlR™¾¾FWLÅ<—¡“nÔ.‚ÌR Üw^Eñ@êÄ>pˆÎ¦‡íTIP¶Áæ€Ô=C 5¬’ë6Âç¹È(MS?„ëvBœ ˜Î+\á=i•´,"U}¬„“Æ)ø¸ÊšãìJºõQæ€>wo=Û‡ˆœ.+qDµÅ¦Ó:v$mQiW:BDeÈ Œd‹°tö¨~AıR.ƒ­(A‘—Èi¬l¬c?	‹>ı¸g¾óo#s®Q¨'sğ‚HÏâ(uEUø?Æl@Äÿ M–u²×{ö¸.
F3È Ù*ä¿c»Ô†·éaòº®ò&¿j­ÍÙNú×Ñœ!bxªM8Í¶*˜¶0U’¥Ğı×`°Èş
nN—j@H;Ùúó1¹ÕU¿™7Wˆ¤mİ^ÍîğX™Ôj—H‹'¬Ë¹'HC8^‹(ûÚ ŞJ™¶˜-Ä:ö5f…éÊšà-¨R`1ÃzÂU?¼$ñrı’Ú•?™àÆÇ(@	|Å{Ñò¹GğU÷}u‘ƒGÚIå›;Öª¬™h®y¡¾™N‹Ã˜ Ò4~=ZGÒ+Ÿ*ò±¡PÈóßoKİÒ¨I“6EmõÇÍÿ4JU¾"7Ş²úÅ~“M;FjM…gK‡Àz[à£İ9µ}Á ÒR‘s<·(0æ4ÄÌ6J‘eÜ¤Î“±)%*q3Àßl‘•t6wˆÜÛôƒ&79(ãÈ«Éƒ—P6ºÅ|¸½õUüÖšÌ¾e{F>ºÁQ`ìôšëî‹N•Ùêe$õGéÒŠa–šÄÛ!†Y]^—ŒğgÒæIH
ÁZwAî›8éÌêú—)„I÷¹©Ó€áß!4Ò<Œ~®æˆÖ}H*©Ò9t®‰É¼è‚QİÉÿ- J†n‰õKû:WKÈ%µ$uÍ6ïÉGkuû†“aSyY*ÊĞsd7ßëõjı¢§çÉĞq$'8‚Î1Y-Ïá[(Êô$‹-Œ57ÑCÿYï‡-d¶¸¨—&©/l<
Ü@ÃB
ş-é'ÉeïßB#UÓª~d£0ÂO@úŠËËêËıé;_9âª©@ğDTlì0S]ªš¯‚@£ÊáÂ¤ÿqi±:’É’‚GPú?3í¥‡ö:àıíîP®×äÎÉ4kÉ*„H^½ë;f4¼¶/Î€qÃK%Ë<©j¶çÿí0öØñ•ãQ¼‘$$Ib†;æb£ş3¶[X"Jøy„è½ÎÜÛYÒÒUf8ûø=›à›Ç	~ó;ïÅÆäÄ–Ÿ+›6()­"»ãÂ¥a¶óş6^"µÆÏÍØ'Lêßôs‰65Á¬hÑJˆA5hWKÌè–îÁ…®ˆğH®\áŠ{?›3ÕÆ”6àhKpïL¨	ñBÏ3–'_O…ğ¸…*á£)Jc'¯Š«n]W‹ÚHµ<¸íaSŞù3VÃ;Ù4«€F€ùj³;µÖ € «±áØà°=pÖkğ™äp«âú Z]®§‡Zx?_yÆ¢mÃ˜š-½ÄçêšDj»³ñ-¸&¡Ô`·clãq”>ëv*öà³|ˆßò‘O£4;6õNï†±ü’øC®[¹÷Nø_Û-›Wœ5ï™ğ¾ÃîÉ].\ª±›bÆĞók! q§*zÈ¤ÕlµNøgœê€˜êŒh=©¢Yz˜sÕÜ'zÁ6Ñ&SôZÉvªA"‚«~ŞM³ÁeÙiášjì[”ÂRníñuÎÌé‰A™ü/­ 0ÕÎ¡OMô”ÕÁ¾Mæ wÛaÙvÓKx1qÏ!ÿ;…¢§ğ‚WòH³¹Mé@WD^Ó“à©ˆô7‚ØU)†Ù
	&ÀX|s!lÜu_ƒ…]p{eÃî¸1
oQªôV1Zı®&KUĞxª;R¡[èDeÄq¬$ÙZ?ñ¦[Çõ×ÕÕøØÙß$8Ù™¶BÅd¿«pªw’µ÷ 7„ö{-A×ØƒdÂxClh*¬´ËÙb™ÁsK<‹µrÁ¦ûø©A¶œñn' ¡¸áÔÇ±·óÈlSĞc€Sşæ«3_
çs.³î!İÊãJtØnà:)™!µl€¡-ìceÃÒı”ÊZ(;Âp6ø}Ô­GIª{À"3ÜÃÍ"è(FÍ?Ï·ßu]}SHÜÀğÊìí×™.ìåšªÊÈT+90Ä¢$_ËÏ\ ‡¸èB÷æ¥s›6Œ‹÷õ«&ÈîªËÛ5EûdKø'JFG¶6ä`)>eâÿ,ücSuÅJ#Ú"ƒjåEÙàBÓ~|!¢{{íRÿ£k%«Vê»P :Â7îí°Y™éíŒ¦äS°¤¶$Éë÷ĞË´7./í%/âDF¼ŸñH©(Mş¤C¾Oô£WH‹ğZk¿Ê®¸¸œ…ŠÃóşb1:Fõ`æöUÊŒtêä|Z]t?wé¦D$°Xu#Öw8rÛ·ó ‹m×½á ìzÊãÌ^-…iET¼¾#Ñé%4µ€i[}[0şÙ¼å ‹Çòª·§±b«‹[µğHÇh¼Z¥wb,GÂRTÇÅ
ğõñcm³æ`6öº¤%¯K,S ˆN­àç6(ó†O€zŸ¦-+İƒ´]<‰8Â²û™×°ˆ›ï&Ú÷¹WÍåKĞWe–ë˜I;ø+ cS+9lFãÙHU¸êeæ¥¨æÁÉbNÆoF—¿ÿó%Š“…k‹T§‘Î¼h­&zÅ·ÒDdjhŸ¶÷¡ÅÏ ü©áŞ üÆÌaÚÌ*hp½"u?§“2¿õ¶0DaAy ;Öó½7¹¨ÀLôÑ˜\¦unëˆ—Î©eäåç*_MzˆÿeäoêÍÖŒWØÖæÜı]À«¶Ä©‡Ê‹Î¨	dì–éÃe’ô=Yìàşìy¨Lí7ÚzFgE-ëœô¦ÚšÊ3n”ÆKcYÛˆxI/Fİ`ç¶WùÁ?	¹ğ/Ò+Ò¬1ø>á=;ëÙÂ;LN!Zğ÷‹ÜïóµQ›÷n5ñ—ĞAy•Nª–våH÷Í5ÚS¢€0~a9sTøaeÊØœiUQëûA(õ‰ “ÔmªsQ˜ ãı‡f£nEš¹%DQõÖu°:ÂV–b…Y&è‘–S÷/áì–ZÌÖR›Î)\u€>àƒáêu;¸ÑÎ)»üÛÂÆrdjUİ&¬©KWóQšbÍÅavÛÜíE¿ĞZs¿/çÅIÖ3äSeßCÕu`òx&c‚Ò²ßdmşvèwåÒñgóÉ9ÛÃşZˆÂ·<¨É©U®÷`qt^ôÑ¢l@Ô£÷ehÜ·^ƒ½Ax¦€,ç|ù®O[¦gíc~5üF–½}€,©ôo­à%Uh8jş’øÛä¨>Å2è(Ay4FF?€æñ‹N"Û±b@ñòıë¥ŒaÕ8" Í£á°ã-X9vù'X9şúñtÆ+3»òq÷TTQ‚©Ô ³]q¬CˆRC‚WİmĞÈ`.àDW‡”„À¯EÑòê	8[Á'¢ñQÓ[íÔ/*è8Fp7íû.âK Ğ @¹¢²A!«Ï9uÌŒÎñTèD ÖEù¿bFôe¶²W@¾rGnÆ G+à'V‡~•½««ì—¸ÑmÑnòWú%°ö@œEùFoıoÌ‘¯MmÛ5‹OíÕw?©§RGCá3Fª” J•<'4[Ÿf?Ñz¹iÑŸÇKëüV¿’7b-(WåØ%&Ğ¥r8c”µWÃ™bÿÛmx†ĞÎxuWk§Ÿ2+º8@ÓK%KôÊ¥nP“²ÏM¨|G ë¿K\÷@Ñ©y7PÑI¤¦
"Ä¥@™&Œ­|‘9–@ÿàöÿå™ş°øDèLcF–‡V°]¢ng;]êÜÖyZ¬1CxÓz¿qnÓF¦æºìêÅÙ=)¥§ÜE»DÄ‘å®øÁvÊ1b{‘ór™CL*6ìnıç¾*ˆÎÑåãılİ	hn×Q‡(7°JÅçŠØerOÊ"v3í¬ïa¢•Ï]|Kú*8RÄFJ+¯@ŒA-[Œ#â3Á¨Æµğ ’A
%YCï5D9
í“(S;DU®/Oq*{&˜ğŒ+Dû±‹xìüïl«âqUqrˆFgÓxmÂÖ´êÚÛ-jìw¦bµBø;6Qa2ÔÎ¾î|ƒƒèü ­›à“}w(thG-£3òq„»F|&Î8xfOé@D…·}à›µ×i«v¦˜œñ°e	¿:y2ÜÑ5#Õ¹¾lìAÃ¹ç±´IìÈ®Áƒº§èÚÕH
ÇK
M’!ğ%:·–°úşsÏ´ 0ª¦]¤·…şÕ‘n.¨ÆJX7ïâa”bFkî&oÖ“±àW¡âÒ¢o0ä`÷ËâY^òêi<•¥|Rÿ¨¤·ÿ2Ï¸a•Dàùı\ù½<J³qØ<#šÃ¡â26}û¹\f³tßpåMÄÌŠL’APˆÔ%òåóú®b<Ğäo¦/ÿåCu¥M%'êp7Åê±œCb´öz×zuº“q-Gi®Ñ4 â#²ş£~şTîeÀó:öÆwú´PŒˆ¯û³¹£}Y¡¢ÍFÓ–+U²5Yv½]y<ª0Î Ä¢ûà á†Ş.¹•5šDˆ-ìß‘Àä­È0óÚ(¿Ô‡±æş{4©Y„èÖ¤¿s ]‚¿‘Tı|J½¿[€–ŞŞ_ô{JUup×¡ÑĞFş)MÆåPKìVÇ¬6fe'ä:ˆ¸¼öœÄ˜„J	]ÒFè°é9¡ûÄSpü{ÈÁ° :%ÀÅ ¾Ò®P!C‰!èÓI†bŸ:ˆgÚô²Xı‚œÛÔy|UPVÑÂ¿oPçMzß=+xÍ?Q/—¤¤œ\"³6Ú¡Á½gEõ8æû$(Î.Ğ  bËµû˜Ô°ı… ‘µ¹·h©;\ŒEÒ‘•>Ú¿>İ>HÂ½Ê¨	R­/j‹šî´. À²×°’úâEİZu—Ò½6H-Û›B¸ıšr6§b´7FñQ—°<8–kÿt©<Ÿ!PÍ?-ªVZ~¹ÁfÏrË‰Ş›ıƒ‘N¥åŠ©>"Bà5dÀût3ˆ?hI”%9“‰Ê{É4¶é~Hkß¡œ$;ël‡DPøsHãqA&4^í^q‰½²‚¬4åù¤XíØÊ2‚ÁŞ{Iå³H]ªû«á@ú(|G5«œºÿÄn˜(ào~ñš]ï;cXòåØÿß­*¢1±êèŠ(9+„õ$€6âN
Pã3O¦År¸ÔØ]Š@A­×ï|­¯›T2Ë¢†eIÈ¸µ‚Õù°ıHaçÃÕ5ö†é—ô›I×î¤õjy¨§ùLùL£Æİ"údô=¡|ëŠØL-ÂkŒãNÁVİxşË—àÅ“¸u¾ÎÅS”*Ó­ĞŞS™¹iid¡÷M,%Æ;|Æâ3RQ5CË8¨D¿…³ÌrŠ ñ¸¬N}FÒör²y'}Y¸<´£%;œïë£U§qævU!Ì)Œƒˆœù
Şß.œ“#ÌSÿÿ²?½Ñ,™ñ;&Ô˜ÍY´|Wÿ±‘}pSÖ+M’~û¯¥FŞ åï
ÙÁ[#ª1ö7s1HVŠ¯ll¹Ûüäªœl	pº8.ş{á›?A'L}'%çºÎ¥o$Îdå4;+<ï	^–ßñ6†¢°İih?;¹¨•×gÕµSØK`ò¶Ä~ºäXÂÒ²Òd‚³pôBuÄÓµñœ‹? duo'­‘Q/ ä0Ì^\â‘ñN5;ÜˆGË|;‘ò„sµ4o¯áÃÊ÷NwjÔ-OJ‹¸ÇWÿC»zÀ3¯ªŒEb³Èm8.Ùpc?#÷-
X+„ş7°Ì{R®üïd9ÊJ=ˆˆMUâ®T^£º=V¥Ì{£ Kq„`¤SUwò}ÏÚÿíYa$uOÈ!óJOÖFãşê(ºUñœ3l¿[…ëÖöÿØ
âÕÂå1«.\H„„^ìİB5Á"7Ö¬ »ÏÌÜhk U¬¤•ªxÃ¯&sK]ta3F ôw/¬úW3i—Ù[BnÄ­à7áÑe+@6ıÀâ_l•ãå’az-ÏÍ]xY5TCfùQ–¥ß_âY–Ú=OÆãPÀ‚hô¯8¸vujq@ë¼Ù³uô©¦	—dæ)“Ğzq•&:–âc,Rä±5ÍòkcŸb!¡­B›ê+üìQ_êÜ™
®²¶¸c¬‚À2DŒ8Á°•-ësÿ÷İöàtXƒZ®ĞÇß§b–$nœP%ÈS€³¥«ıÜF’Çñ(¸EYŒÌJ1Ğ¡azÆÁ2‘Lš™FúX†«»$ú¿ ?*Í¸y•2È:a?O)ì**¸{Óùÿ@ºl¤¬šœÃ]‹åõ‰8l×ÇB±Óú?¹ÂUEUyä<æçåëm>]xÓŞ]ã¥š¯ºàZ(G”yi¼lzt—mø€ÄĞ¡ÿ‰¨Q¹Â#!˜¶é–q£ô³¨çõëâ[iÕ6DælãD¼³´ÎÇ•*2âÔRL[àœ¯q(gƒôká‡ìdJ×\â®QT/ş@è½mö×î}©]ğ‚ÓÿûR:(ÑMÖF­h rÑ…ğZU~¬ó^q¨÷CCó;Œşš÷X(Â¤şÑñ66$TÍXV`	´œ†NVºˆµzpB.]O‰À)%(¤3Í)vÊ—‘¬ÈXµª¤¹á>ÉTqİ°ÔO§PÄ×³úS® ÕĞäÙA\ëÿ²é²­ı†XÉëíAÿu!ùÿsæ–3‹z-H¡OiW¹Ú^ïi¿ĞĞRj[M†¬Ü"TÃ%Xé•Mæv,L¿ªÌ¼z<OPAGœSë!N	ÕÀfXyfm±0Yaî63p	$Ú®3ò•{	„ğj¡! +íy(–÷æ»]Šny7“ƒƒåß>{?ãUmÕx›lj²Qø¿¯LúÓ×•f¦P.38«¦¬Ò~H–V¤Ù\Æşg&u€j<zŞèÃ‹õµ›g“œ‹C6Ñ`â¯èò«e(àrw¤:áìñVğpÿ	CCÇ7'£ôöh-&k\9Í4Û>ë_Ñ3¯#¸L!¯{Ëä¥·$˜{ïnÄ™†’ÿ°µÁ•¾¯‰à?ıºÆöÏ‡-ËâN¦¸5…d_Èë˜şG¹¨HÉv2'Y8åÂ#½ò -u·©;¾±^gXW^&np{.·ÜP¿±— MÑıœztœŒóArC»ñŞgÊI“<3dKìšİâ¼ÿÎ¨8^²Ácr!Ü„eœ»ÚzÆÉçiÉÌ;{º¡#*¢”ò¢Ú ¬ŞÊ}+Kë´wúh· Èic›âEã¬ÄyxNğµ¶‡ÿRô;¢
°é»WDæMN©V5ªg\Ìğ\òÔjñõ>S‚‡ò +Á¬É›HWrêêò|¬u†ëOcµ@(x"ÈìR$`,&ÁSrgÜ°‘oÈéR²m(6™ Væ]ùèX¦‹û?h{pyŠËãâ$:nÆúı±ùÒ®x5ôe,‚f[ÑøVMl?­G—d÷ÁH°Üpq¡_,’Ğ‘"Òu«”™b¸ˆĞoƒ7tÈ“†ulg	*Á|±NÉ{×ÚäT4“Á‚êÂF»"²lŠ‡v…Ïå€mßá^Nã²vğèmôÊyA8ÑµFrê]½
’ÔP3—–J8_š4ë·w ÎÁ+˜…&2w|æşu&©6ØY nºØ>83J©·ë81¸Yl\AÊ`âÅqa9Š¶U™› ÇIhhqËMgİïOz·—|£4`¼œf˜oÍî~8w"L¦íÇ…nŠ±‘>ôÉòäÕåóÃ rw*hGŠº¥2ÈxYgğì‘N¬1¤(ôÜ
nĞÊŸü=ˆÎx#ğ$5œ:3§ã1©C6¦%ynU lŒ¢Ÿ &ŞG„ìö0EK÷1“-d1*"]¯ª±[N¨53ô“C/ª¾Zª&C×‡Ã·ÏŸÑ«#[1±¬.w¾:£k±ÑÆfkpú*Ô×oáxÇ•š!Ï†Ëm.)©ºğ†¡’(§Œï½ ˜tTPñ
 1œxx²05Î-õ+LXò 6[‡¦¡†3ø‚_ˆTÙX®ÕtÂäv¸&È‚b˜<~äO!…ÄÉ¬³z·ZY˜ç›cÇB2zÃ¯e­=,ázÈig`a‚¸
H)È4'a›Õº fqä³îİÄW/İ¤Ô^ø O&¾pâº‚d—QƒLóÈVãÿ¨³c1®É}Rñ»eì“M2·ş­ÖIàî´ºŠèü‡Rjc$ï®ˆ™Ë»æ“ûZºöß§Íq6Çw4Ş½áˆ¦¸ËKp@ôsLeô- xÕğ0/Y5ŞÛçÀXDbfM§’,ŒÕBüLo…Ôüf¾}c»vÅHsú|MƒëÀ=ıÌÛ›`x’×ïºËŸgáÙMçÊ/Al~›Y,[";%¶‰eº{
 æä¯/;½±‡"e‰¸Büšö¿÷ïäDd–˜<iğhã9SˆÆ8[ÛùŞ zvîXdkUGø”±Ñì+"FÒÂ™±„İoåÑd›Ğìn5‰ -±Üt‘›èÄ,Ã÷”Sô¡GÈ)ŸÚ—PÓ#í•ş´câ‹‹RqO3\W‡ÍÈ† š°-®È	 ~ÅPÜº„vó=f¯’ÒHœ	ÊÁ›ÃôÍtÈE8?ÖÓ=¢ƒVè$=˜«õğÕœRƒÆİÑGøD—Š¸6«´IgÀ7ÏË—ï¾aŠ‘Y¡9Ğ´Ü+yTØGiÁÚQ¾à™N¬pJq»·%D/¼Ã#^GŒcÕİ“¹d‚“Ë…ûĞçÂmtÜq’Z–Ktƒó'İØ'(>Ó†¯„ŸÃ+™OfÏk‰~
íY‘· ¦’ÖŸ×«, ´ÕY•Ï„Ğ“#ø‚}T ´›…üIào
§n¯šBuÍ¦_x­`Dæ¿+û½]×k¹!Íıe˜ˆi@çğı;®¡bã= `l3Ì1sàœğA‹ÃÚóûIÏÓúâ…ÌI ó ƒîjæ*FĞR$.ã½®p¦gRm O.	+À“³tÜ]ƒªTL´³iø%gŸq]˜Xó¾ˆî}–„Gy>õD¿zkì\it]x÷HĞO¹S²‘dÁ$†pÇŠÔ:a³)ß}İáEöÉnz5¿Ûó# k(3ÄŞp©å¦é¨Êxõoà}¯¬RìHñæŒ<úrµ½üÃ8œİà«pn«2Ğ›.väùH ‰…W‹'DO¦ÉÊz$aŒtß©Ÿ(ë÷Ô¯y¼=¨­¿¬xDDÉ  ªÿš

 /âQ¶ıÊ+®j³f¸"•kHPQ†ªyš¸Ã+µÎ)-!wk@0¶â;àfruh³ÃØ¦±DC|Åè¤µ#ÔÖW5š¶¨äÆj©CêíàıBbhâ¢l¦P_lTb*Këñ|h6 yxºÃ†$á„t à‰9î½æhêÔÈéO#,Ï)ÚÁ	 I¢òK1Ò¬#~8RPH>G¨#\õİ¼¨Í‹'d*` R·U¸‘Oœâ*FÓWuşğE|/¹™y‘<
HI›qÛÉêrıc‘ÉRİ§ËşCqV¬U£°¾¦Ş­Ïk:è·—o36Ããg²ÿ<Œ *ãæ\¬=³‹Pvñî½
¨k¡‹"÷C
¬Zv‡ÙŸÙ_#Şñè÷è‘8»ˆ›6ê­	†Ù3à0ŒKÆLSÙs.ÜÙG¬)6_;®”…A¡`¬SWÜ0¸ÒWi9ïf!Ğ»ûÚR±İ®3âäá¡9*DÍªTjÃ5~J~á’ŞÕß°´ÖŸ²Xk\ø@P§©XÂ!¯*5ÁAR‘±îG×µQ¯áÄxqFoeÚıG³QƒKf¡O¸>Ğ¥Ï„>Q¥×À6<3èsz¼{•'(CO“Zìáï»ì¬Ò¼ÖQE˜;·X‡'À×œ¹£Ü^™„‘œ¦k{mìÒºüÑ{”?Šá‹p¶Î¯úR´Îr™zÅ÷Äw§&Œ¤!u_mJ®¿ÈZ¢]°k²Áş?A^V(ÿ×‚ËËù£ìg€ğoĞƒÎ±µ?•«â§Y+nü¦ÖÿƒÅ&‚€k¨j¼z¸ŞI¬7\€¬tT2–Ú÷£ÊÇÒ&J‰5ñ{“A<bD·ù×H´%ó-îwà×•Ó¼+ÉêBÁ[|²±‡"bŸ"ÖQV»Q¦ªòÄ›ü8äeŞ”Ü+E[v°	3VÍrÇf £ÄÓ¶àØ½[QÚ`Ûj§aRMÍÓ&U"Ì—õÖËó¬nªî0Æêß”ÛèÃÏûÛ1ºıa˜äg7_Ê•Öú¶!+M¶œœR%²ŒöË GĞ®2ÿé¼â9…²ÃŞqUŠãå7^Òk¾À™;@ôÏò˜×ìîÄ‘±døk´Ğ!+¥ª¶È`¡W­Æg%ÅP”«¼oB_ÿ£? °Wå;Õ6—7Ìó-AÛˆË¿Å zKµ­Ş}Ú]ÕVR/'g¦I®µ&¢ÕÃÊªØw— L¯˜]4¾®/…ß•X±bcÎ@ä÷F‚Ağ®õ®º~¿æãÛİBQ£1}ù J$pòäpU†í[h§¿óÒa¨ì 	3ûR.½˜¡ç&Ö¡¦pjé±n}ÙrœäÍ—şÁ‡d~>»xñp•‡.‰a/ÁÃñXˆ%ôzf™Êüú8ˆN§°˜x½çÉå×eù½M-§G‹Ó5-;û:ç–iObÑÙ›Wºxaµê4øs8&ãwQ³Øp£(Äİ÷×Æ®ÒÍ~¼†©—öÜÂG€¥CÔ—1µğ–Ğ Y÷½Ü"byà±ÛŠZŸH Âã`ª}*U9è¾nò|ÓOCŸaåìøÕHnªùAÁÛİÙ¶2èúœı:»R’6ÆA~ìùD¨™¥Ækpˆ#|Î1š„gî•ñÀQ¶ŸĞ$¾ƒO9xb
!ÄEƒ7Ê^$ï¡ Óû%¾š²eì‚H:*C¼{«1Ğí««(ê–ö§vuŒøEsdG¤êé:5ôÚU‚Ùs¿sŞ•ì|¹æ¼B»íÂ³ô${s}=l/]_¶…E‡–øáš BÛ^Ï<ip€ˆ'Á¸t6‡ ş9Fcå1UÍÖ³×1#gFÖ:¸ƒ‡<Šz ÎöÂõU]½û'Œ-:|‡Êñ½÷. »
º½ÛînîR_IC…|æÊP·uÚß1s:çö«Z·Š·“×ÖÖZ[û£ÒîŠ şEPåÕğnNyôÒÀà`Á0Æ¤ìo0ßÌè=ãñå{¦ëÛÈ à‚æéWWùR–UQÆdƒàÃ9×³p^Òdä²—ñ	İ·†pëÃĞ°›&œ´†WÍ¦şèØ¤ˆ;dÂ.eoÍş¾@ÄW¾nìñ\Q&Td{2;L ÒòF<öäú
‹æ+¦2™¹œwÏğáÙ5`ÓÑ•X M:ï/¸º•ï$	<Ô‡yĞ`˜aÖ:ÌàaÅ}’OR¡%öb¡à2ñ5r‰ˆ²ZÓ6ƒ÷ø¼Ã8ÎmO7#§zÿ³Ñ?¬£İl1–Ô©˜0}]’flS÷_{$½A}àa%z)´ıO÷°Ù»B³íZåßãÀºkİÅà:awƒp·bm&—¬Ú½©OæU*áJ‰å8ÎßN4]ˆÕM%òå£4ÿ‡Cf–ez ¼Ši íó—ªÓ‰Šò=óÄû’®æ.-ˆòÃöJLËG·"eÍ†B,ÔÃÜä#+EÛLµÜØŞ„šQ!“­s´ö1@6UÌXb3Øİ§Ø
"5TÎÍ~eÀ„Hßi%yfÕú¿'kú¨™g}/!¶ É+/GÍ
7H}x0w¾ñ@Ø)ßM5º™et”Ä½¢ï;äŞ¬||§Æ¨BÃ šª-¸kZ!¢÷s™Ï[J©ŒŠŸ9­éz¯|•ÿèFÒå/ıƒz89š½‹™¤ğe‘ë,ú¬P@áéÚ¯¿İö¡QÇ0(ìq SJt4¦ĞÂÂ\BëFé,c­•á7Æ~&<’ãRõlòISx<¾P×+Ä[çX®Z/	\3¼”%ˆFxŠŒáVØIÌáªy€@Éğêgvg=>g>ò7.Ø¡CµêX.Ç”B\BÜQuBîÄŠ„õ_Åº k]ß€%ìùYLoÓ{0MyrÖ¡‡P85$¾Gù
²T®£S:Ÿ¿ı¿q¸aåğÑ˜H¸M3	2×#ßK=Â¢˜óÍ”?AçªàˆßJ`Ÿ4”‰t›Òï%¶}ôRÌix«ÀİeÒì)Ç?G® .Sw©—„—B®N¡$BÈKn3‹< 8äh>á1¯ˆP«(óé	T;£ùÏ|İUGß¸P-i@h]í³‚ÈŠİ°õÕŠ}i>Š‰gìšbš{œ*[µn¸Ä #‡°rÍÜ¬j"ù;ˆ_ƒ6ÊDÖîØã`=ê7I²]€!“»CÌ†×ËÆ†Og4_Ò»•:\¢_¿ĞıÎ;/ğŒx†!•¼í
ıÑÜØ[k(jú˜¦ğa¡»)€ˆëQ4úcn×½ácõ¼3‘&Ç‘1ˆ{ÅrN|8û,Q!\BdeüW5§'ûğÊ`ìi(·:,Ué2Ü7+¶1ÆYƒí¯RgIÄêU§@lò–+˜-^BºTëõÒW!°'¿çJ’Æ!§ğYoé˜Ä}IÔHmƒZ“¶>ÿR>N+™}õÍ¡©Îñ.*¤ÑÜ1ÜBğÀñv`A5‘â_a);s)áŠÊ¾¨=ëƒ¹|ÈQW–îšÅ–>àb¢(ª÷(€qÀ†õ&bNyUu“§Ñò‹	Ua¿¥2	¥>ŒL|	)‚?Th0Q—uÖj¹qŞßÀ”˜­¼z5·¨ºäêé `İv?¹;™i97ö[î,e‰€yÔß6bã^ä–ÈU®!1†×—14‹®IôÒÄ3äÔn—ßœCvnÿJ$d´"ÒsßÃÑš›4¤G
Z—ÏqÀYÍÑN`j¬èË¿İ=Ø5%K×S'çxUúKO@øbXu•Ñİ9®@ İ¨2VÂê‚¨€ìj&ÆK†
Ko«WÒO}7ØhğfÛ2‘7Ù¼§×æ JÑ/Šà…®b-ˆB7ÇÕ0CäÆ[ğ?6œ"v*Ö]S8B¾ºA–´7g[v>Æ•z¢I :7FÙÍ÷i¸U/‘Ô.g¤¶ü¢şŠÄu¦æ£ Ì}EOf’¤ƒHæíH®I—øØWÍ#Éâ"Ş€7æiÇI[`!Â_tåk% Ìê}ÒÄ9ÀWÀd«C?Ï5òçföUCA­’ˆc¨¼›§ÔW6Õ¤§;dä¬ØÑ×¨Â>:gDÚƒ©éš¹ë§ÁóöÖx‘+ş…rAšfXë]÷>PfÀ	-òé~€ç"ÜÈ?¼İƒC
­å\K~«ğè\ÀA÷Ã‚/½‡h3e4Y¦@‹(+rûìx]I"ì,v#DùÒŒäj;/l¥D!œzïıªw–>îÉ,`çÙeû–%:ãq'·t~	1Ob~X£\Tû¼è¤+gğĞq^mãxêµä0™¥%DY(FÛ§?¯‡.PµR3P£l€O³i…Ş€Ò´ø•›$	ëÜZm¾ÙoACÑlL€eÍH§xÅnD>ı*«Lhüa„Yñ×B5¬[Şß™Y1q"úñ 2æU~ªe:hä¬ğ[ÇÀøæÇ)•'¹ÿFº÷]â†û=²‚Œİ%–ÒÁ;úœ„Ì¡<t"Â¶c:öÏ1û¼/4TÅéÂ!*xAÊtñQ_W½š¤R½åš
³öO¥Ñ
4=2–(ØÂÌ£6¶Â«ÎÙj>ù«V¢`­ò•j©u|èK9?Àî€Â	
àablhÆ€9
Šp´hOz¾˜Ptq†#Á<Ëgü´Š„Jˆ
ÒûÅx€™>mÁ şØv“aë®0ÈCÕc1p:œe¢rà»K<Û 7…ÔËËDˆ}*•McnØò¥>B	ß§ó"|îW’_ öÏ4ô#ƒñîÂ£u,c9+çÏà<ò´E`Ê—Œ²ÇŞæ*×˜ØbGÔMQNHöFu/lO§ï—úè¹ZÒ‘Ø6Âã«bŠ–°Zû(õÔÜÕ_|=‹Lˆ¡ıİÊ&(²iF+:->½1=BÂ¯VÉDêJ#ñ0¤}ÈpXkı­Â£ûÙ¢“¸£ÇÁøP²67÷M·OIƒi hœÉ‘/îA]Á²rU¬fÔ„w$ê~–ô<1w¾ÆhÎ>+"	}½;Œ…`£®ÙjİæÃÁJ9ñù"*¯i&òC.¿ÍÀ¿:æåÍ³æõ«ã£‹Âÿ‚˜ÏOáÒT*hiƒCÕšıï·º˜ì–T¥a1–'àÀißGmÆ¬)ˆ&½ŸlEÏø*{>˜nº–(übª0:*‰Ç7Î'``ŞêîHíÜ—·–ÙOıTÎ¶…2Œ…Ûz‘j¾å„†3•BµŸ4ÌÕ1vëê¡¡È¡§ xê®Ó[)ëKÂ›‡—Øè#kG÷t¦?Ôì“ªÔĞ1ë$BÜ2œ†œ¼_'îâŞ˜µ ˆ8ÿiÎöÒÎá±×
û1Øxê rá7GäÄ;‰ õ“$‹dÑJ Êå‡§æøÆ±j¢\* ÖÍ1qG¦SJñt2qR{=ÒÖÏCy¼>h¨ïV;ÔFµdìë¶&?÷
CO±¶{ƒ^ÂÒ¡=ÙåkÚ‰ÌõàÎ,Qsüê+æÆegŠ×ŠEA›ğ²¾ÄqåK¹øS?¢TRzŸxÅ¨·D!ì²­(G3ò3B˜3Õ<¾|<ÃŞMıİÓá=bhfuMõWŞØÏT(oÌ“/,ÓG±ªk›«¶ÑDoihjšÙD3Å#,Ï*o,àkÙ¸×Æ7`·~p—×3¹ó)±Aø{ŠB>$Šáòû…2úöºá/ó.¬k!f•éÊ¥æ4ñœçIÑŸgµm~Óç$6ñ#[S%šY[–»V"m%a¡’ïà°Í×¼]®Õz¯#ùVš‘¸ü£ûs8³¯Áî‹¾­fÉ@J‹ï8é×f_u=h’3t`‚=S¢°ÏÙ¾\iddã!$ÛE–l…ÀBàóÔİ(Ãv½-•kŞw…qËj“xÉm„*æ·)¦4ÒwNùQ³sÙà™U¶Ìó–Ğ6è^XğØ²Äª%æÿéöÃBb8©9xæqÌÏ/ŒŞRYa|OŒî°›ØbLCuÃWÖTŞÑ#‡,AÆoí9ŞrrxæÀjw>#°™»­×XÛ±%òR„¦eSË+õÈ7¸Ÿ™kù¤Ÿ¥¤4áEŒˆ¤¥wßÊX¸mO`û‹}£9Î]²î8brÒ€–¬jêxÆV‰nâP×Êı‰ï'~Fäyè¯+›åÅUı±0ºù(ë+eºgª†aL~Í^—Œ)l½+Ev¾¶ÙÔ‹[yõ û^FÜTaÑ>«z¢+P¾’ËH<âue†›³ÄHIx”½û“£ˆK)[¢J;dÍ¸¨¿‚#y`÷+öSm‰\ÿ"tA?*—ıp>F?!$ÓZ:6!÷kÍÆç $Nq§äÅRüŒryq¼ «ÈÆm|Ôl84}ƒ&˜\hãñÅ—÷Mû,¤8(4+»G<U¸¹ì<—2x¸v»!­Œ
îõÛ¸ÔlåC[§‰-Ô‰ñ·®Ié)ÙÔ° {¯3Âidê;R¶>¢½0ãAY[íG&ñˆÙ
‰0ç²ƒì±~Õ8b–%Ÿ´Ñ{rÕ­ó/}ßÏß9méÂ.èë N­$t>:ûŸ0F¥¸”º1•½:”†ÌÎâ"ú6×Œ•ĞKÔ€ ŠßõQÚh¼8®ğùÚ¹sÅÛõö¼uq®öìeÂª„‹¢•‹ ]ÅftAt@„‚l#“÷Î1m‹Èê%h}`”|}G¬;}ÃLjÇ	J‹>ÅC´ÒX@Ó›uËÀ¡Ó¬ ÓUÑÈFåÿ‰ñ½ï$BÊ¾‰Nİb@¸nä&NüÄ>Î&ee85hBãf]#-Ä‹ÕãÔ°	ùåù$M'»°XW©§®;³Œ8Ï­}×à*åòMRÉxU	0ö@Wgë0æˆu ş<qºôøBÇ(„Åî¼ùh¥&L™Rœ5KÒö'ˆZ5´˜ÚöA`‹ª(]k…›øbDE¿Ù”c¯N¶?ô–f¶ƒ›V
øåú™~ø®D<Ó# ¢cÃKa÷jâ _‹]â!}É”Ù¤?ï@ÈÛ’üÕTë?h{ÅÁg›& ÿ7‰YX8_`¿m [.fÚ;è5ÈÿÅ ²'uìAÍ(@iœeQÇ-—‘O.«9ú:k©'.2Z¹Î…êha¦%œzê‚ áBX;‚ÔSğØT rO»Â§ïR\ÑÈÖ&¡ˆÜ‡Éé ÜÈ	laúuÊU³yêa…Xé ã‚ònçÃfõ>}pAĞæ·/1|;<7â÷ğ”^Õh•ğúÏ‘ ä0,6^]7my8÷M	Ÿ{¬×ÑS–áòTqqP4?‡ñÑ‚7’’Î`™õlóªÔ·p¶îR½mÀŒ&{€ñ6ïŞ}A:¨¢ãWWn<ÑÓ¯kXOZ°[í.#V”X21vÁ¥–w°#1<Î~YA‡%‹u-lÀY¿)8=ní<ú8Ã™B\¬óf£R4şu3B,y\·bVjx>.ş£EÓ\Qg­í;„ ]àÇ¨S]-’àùª=|=ËŸg÷[@M ıòcıOÓ ou	•0mo:ö…ûyÎëŸÿn¤û=ë,AF8µÒÄXvZœğ¢óßè$¡Àùap°m
u…—ÁÂLàœ‚ıxŒJjbR{Ëy“¦Æ\C3¢…½ù@¥6ÕÖVÓL6´›¡×Ş›I´#¦œ6ÿZa4]Eª¡+#eŠBõ¼ï¾‚ú]ıºótK;*‘¤g«UÚÿr–2#vßÑÙOmÔb·ò# “W~kÂe=ÛÔ9|}}.¦T³¨·¦oßŸ¢a’…8‡¯ï¹m;zfÁ´–°ß¸—gı±™ïìÌ|î¾õN[ÜvAñaTßı°Hm[x±¼~Z8äî^õV]™vUX EñL¯G/A´°¼8Ö96e8¾•EÀ!”a®QXÎUÛ1¶ˆ©vu$Ô(ú«jpv#‘Ó]êH¾a>sµÿ‰ó7øgïÔÃ¬åŸ¯‚ª€˜Øúi:)[Ègà´•–æÊœ	ÈÁ2(FPxjGmïº‚â¯%¼<GÈI^ä/æ‘Âœ!ÔA¸´{u…)BÜ¡ûF3ˆìVj*ó9Õ¯ËÍ½•:ÆM£‚QdA.AÙ0ƒ
U´3ã#àMå„­Ïk¤şûŸİ$õ½Oğİˆ„rèÁ»pªÎ¾J5â„Ó¹¯Ë%À&4ôóŸú¿M»ÀÎ1ÜÚ)ÔòÉ|Ÿèœ ?7WXìëWv+ÚP´ÛŸ¸mIM‚~%øòWºt4Èÿ"d]øsU0ÈZÕÚùUDï¬
¹íS)fn¸eßéüçjâ¼üÈ:ô-G¼¤ÚÂæäß%6¯&;*mçÄ‹Rrc:X>•X„U	¨{OOÑ†·Óİ^-şh(‰§tåâ(¾`ÊğHçJ‚Ùd"ÁKÁÌ”ŸÎ¯cöB'óÄ“6B[Ä&{ŒBçY5¼¬$Ôp B™•: 8d'ğ=òîZöÖ+¢KiÊÅ*Ãû‹®<†eÛæ¦Úû<wF·Ršğ‘àj´ Ù"½›Ê:WæœEy¹¸ˆä=+šHjë…o„ÇÚ“HÖ^ÕA}–éF«Şp2à1#ËÕ>ÅbFübI«ì¦H˜+q ŸEÄI·½µÏ_=šFÜòzÇy-{[EX9·5<R›2m·ùGÆëÏ®¨cí•ñîîNRÅá	‹û¾3¨Gğ–EÏü¬‚ıa+÷üÅ‹ŠÙaòù²æá´´N ®aº‡•¦µ³Hö³‹E¶>ağŠzğÂw˜„‚Ç§[#±×°ç•;RÚ=#a„%Ñtî‰]ïxÇÒŞvQœi¡Ì¶	Õ/ŠdìîC/3\u)Y¶ébÜÒéşj*îC•aqşNÑô|ãow¿_“øj—~4”€Šy¶8¸ JØº‰­á˜©0F·È¸?yBRŸÅƒñù€>5çO|F&ŸœÎ«püíº	p L¸‹;¶şs4GÆRV_Â§¦éCZ}5	Æôï¯°¸Ã"oK¿Ùú¨àœô!k}<N;+¶\MŠgˆˆšíuëÙÔÿ4ÛÇÚ©Ú3£XóÎKT1°`Ø(‡æŠD[¬<tÿépï	|¦BŠÂT¡V]$dù0³zNÀ†ËØQvŸM-Ä…„K÷Å%öÙÓÚSü‡C¢½œrInÎæz‰ıêÖ„ ¿,›pÈ|Ë°û¨e^?díy´Ş'*»kE2Úÿ!ã$~º«ŒqBÜ±µHfQ–¡Yƒû¦#4ìÙ¯Ä(Ó74ãi\¸èğÜE§ºô¬jâõ­ë3;ŞeÊÖ@Ğˆ8š¥Ôn°` .½"?ÈŸuçë£¯ş¡,#ÍÏH‰nle2Èm¯u@#^ıbg˜‡ô+Õ.%÷“¢¦RHRŒ«Æº{3! vã¤.Âƒu¿ëg%×Cpğ¸ +Z=÷ña^ÉÀf3”G³b¯_RÛÎ›¨µe<A)á…ùÂÑW¸§‡°Ku¾N
ìãÅgÕéñÜîû9/İü¨dµ«Ğåzö5f'‰hŒ@¶šØê—ÚÄzûš&7“·+‰|M,Ö]ŞX–Š`ªX%ö yv°°aaEÙ FÀ4U+*LR-Q-R§ï}ÜÓol#ÿwòÃm÷ÅŞCŠ
ùØÀÔVü¶Ò+ÊÒ@€±öß½G¶§ÃVˆRãÍD¡ø”Ù’³_Ÿ¿›ş¾.Ù²f‚é!Ålüğûä0cOäÅ)ƒ5»\ù°³Éc|¹ÚÓçùÎå8Kç	¾Öš:{weİB°ù¬ËôÄˆ×4)ú69Ùì¶É	²¼fk~ú,]‡ujãİ/\	(Ü6LRV_2ááÅ‰Æ¤ºõG1ú—;Í<Æ¶.[Ç:à‘h	ÜÙª=®<ì°@+¾G„úpF*|¨í¿î•¯Oší?Òøk…Õvç¾¬Ğ™/8e‚‹õè½Ö7¶ï>bL~E·“Ë^Óë}éí+Ÿ•.ÿe¥gpŒ­wïük(yqíö¢:F8]Ş‚‹³REoÔÿÁå"ê‚À Kí	ßya>YÒH®@*œ ®ˆÊ»Û­`ßšÄÙ_ÔüR£¾·+‘”Æweõ¡4Îèwqs›øe±«ùaû4àöÜe'Ô²~pĞBÁ?JvhÛeø1r„ü(Nh¬¦fÄ_<tÃ&ÂVQ¨ÆF÷ĞÆ@<åY=EÉ¦ˆøÅ«VÀº¤ f¤N7İH
•üÙ}k5(ëYÆ-Ğ¶åÔ¯~>ÕO\j”C0ÿqlÙ†Zzm
)yğg«¾+Å(«e\u}híù\r<©Óaµ€7åÿ%"Ø,>(:¸/%h§uf´‹ĞvKAV±‚Ul°¤NÖ(°•Ë²ºĞ8öu7¼(G¯¹oğB¦¬I¨ÌR\3 Ÿ¨ªš–n¹ÑÎm:)éyÓ‡¿ñ83å‚XÎPÛ¥j#ŠTS¼!·ıÊƒ7ÌÃæJ¨£€5ü?::#®ìË7¡&6“>D/¹lZ^AğÕôÍN¾^Ë‡wÛí™ßBaoÅ½oi|Ínö<{ËÌ
kÆ×Ã%Õ¨€LpCÙ˜¸ZÚ¬ ‚DÅè¸Ï*’ØQŒşaålÀÓ™+øó£ ¶Fımâò:ş¦{rß/.b·«©cu{ÚPóyí‡ùÀ•æ8›vg£Ä÷‚:º¨Ù2R«	çËÕƒy êwÂÙÖG@à'œá™Ôª2Œ«[Çt«@|Ğ·ŒšøTH!3:!©‰wE^¹	•™Y1ƒ/N‹ìg9'
d–‰9Jºcí•êÛpBë»ŸYÓ¥¡	Qw¹öß"CıÌúg–¡»V¤‡÷Ïexã>†#ÉdXÆï©a•¾š‡‡ùKåV;HÑ,åg…(T}–³3ªª…÷LĞ!am¸RíÇø	â¢è¹Ğï¥ñ4A¯.UvÍbÄü²XB
Áùm2[íŞøÅ¹T5–÷  Ó—ô‡lÌÓ”œF_v2Eç$k?¿Š˜ºÓ%n+0·„±Î	(¸¸¥…ŸH:,Ğè…fZ··›‘ô,	º)ö˜É„% Ãœ&sN ˜€5ÕÀ«¹‚ùÏp·:˜å÷ïGpHÅr(éò=n+Â’Cj’¶Å»Ç4û„wüš<¬ÊÆkãšö›±¨ò–‡ºÈKS³Ò`Z4PGÌPò0¬Òr±ì ¶#i’"Ïs-(ÑD ƒtÀf¿w]™|”ßx>4àI‘|C©F}ŸçwÀf „zÑl
;+WC›4ërA©.-…£ÚùlËØ‘ê„>®ôá«SÆy,u¨,ZE6U_(„ltŠ¤†`»¤êš=³ä“¾q¥®ÒÀd6Ê¡,uç‡ë¢H?QƒæNáºyûda^¹’rıKùúzwÚîŸœõ¿YÏŸ¾¿Ìƒ|ÍÙ¦ó’9Şú¿Íğj¦©†µÉ?»SRîX#ê-_ »¿vÏs¿åQƒõhAëW¼7EUñl9xìƒ(òæ ¤Œ¢E½hß®®Æ>É‚åø´ğ'BºŞ˜9>”U›1ÄKU!Kc ?A:×%F†õû—1[GyØÜ%»6i)iFvUìVô6tLè‘ø@:ÉÇØ*ØdN&Á¸÷kÓä±%¼Œra‡Íön­Âš/å¢`°í‰´PŒå0âÿqĞî–Q€äöğKÕŸı¿;ÒÍVº3§•–¬TİnK±U¡HÊÆ~¯m¹Ì¨CÜ¹ÆÜïWC¶k07µ‹!¶Q¯kVHw›“"ÕgƒRY‘¨õÀ¬yäú¿íÍB‚@{ÚRİ$Êş=£éÕñğÀ§lM`Ä/KçáÌ¥¬fõ<ØÔ9›±TÉ\irôœÚÕ4–!ÛºOOšº3À_B<A–ÜÚ±r0®ìæ·¦Ø›¨¢õM—{U"ªü{ˆ_¦´áÜñ›Û§ãÑŸß;JÂ¼mà~Ÿü%•ş¦4ßÕBt &p‘jÍI™}áıŸ»B¹4PD®ïÛ,‰°ê¶ˆŠï¹|€¿ÖÂaX¶¾².ªsã«›z©ìîw¦eWgÛd¹(Ù¿¿Ü°é,°œ¡æ>ÌÂ>0Ó…ObJÑS`l0˜©™px:d›ÇnLÓH’ëãü„+€àdáÀ%å+'~æ,NË~ëjXšH[²P$jj3d×÷æıîÄ«»ÿ¾¼©¼°â§“h2aWZ2¨Dl®KáìQ©í«ÕÎãÚƒÄO¬Œ•‹±}ô#ìR3§†²wuAÃÂpiS­°ğ‹¬àPaU/š±;ˆ«rB7LÉñ+A¨Å¦¾§ÛG­ÔJ@
İŞÃ­~>@-=Ñ'Ú^r¹cbó	eâ
Íc;JKÁr¿çLãæF©†"ï]6ä¢ôì´.-]ı†º€gz^TvE1+ò¼t;¯š9ò‘E¡ŒülÚEG‡ãáÅ ^*@¨¢&- 0tÑ!5G˜¤4#İh)	Ónd‘ç‚îŸ)¹3&ıJ­¤EM™ˆÄLV M•+2Ådá¶F"*ÎÏ5äœÇVˆTğéîèZ¶|©-p¯ê—Œ.ıC™]tŸÌ¾-N©=^Õçèõ¡7qqÎË{ÕÏ<¸‹ÇCĞnTBÒ•÷äjÃ¤Nä<Aˆi và”;?tÕù+aŒ’g£>¹$ÿU.i±q2YAEeu„şºoâL1wâ§M¶'åJ{Áhy=vr¯$qÀ‘ß	u³>Á£!½5¹†º¼CWx7 Ú)L7áö´.ÛEèqa•§
1  ù¡t¾üÀná1™ıHã‚ÛÄBâòiŸy«æğÏV”XG3ÕWì]•fŸ(ªä~£ÒKJX.!ïr®şºŒ\Ú.ÿ	VZü9––hĞ°Á 0"àFE4•¹ùjõÃ«î…ì
áWéÇ{Ş¡ïÇ@À|ë1…¢ò²!ÑJù
Ù_«¯Ş(u”Şj_Ñ&¹I4“ZxÄ(X÷BëÏ3&ÊÀ¼Q3„Gn4[p5 ª*=M·¥åo‘µJ³:Pº@”HÕ;ZO O ) 4:Fä¥%TÁÛÚwè_(.0Œ3çxOZªŸYµ‡<¾{7Ó°<	·kOˆV‚ˆUå6–¹GÇÙá;yÈ//AgÔ(ı>$ô€>/F–ÄÇÖ¦XÕ»¤$,ÈZÑÉ¾ËH¨&WwuÛ¾]9«1ø&‹ÑLsİ4gF‘¡/İõ üsõMÖb¤sO@îæ¦ü E½ù‰Ò²Kl›  „È«-nr/Ë*¬Ç¥çãúp eo«ÌA¹Ş¾mkcïY%µ’ìÁÖs07¨VêG»Òd2/¾>ÙQ"¹˜õcq®pVJªœ}(¨ó}#?;Ñş>ì¥ÜÌªLrçn^Fò&í+Ah…KËÔVÓI¶JğôåÄNñ—â³¼ ;ñ¤´
:üÅ¯Òò¼ı¶2êYCüò)cx(:p9Ô±±µëP,¢ç•Íòû}3alÅë¿–¼°×2J;ˆ×ªã¼›ªh‡Í¹=“†3¨ÏÅJ“7yå@İ[¼ŠØKúöÔAÁ§êIæ+×p?³|®4m2Ø¥á\måÎ-]c_|œ]bÄT ToL~ÊF4°˜ù]LqŒÏ…é|64´3Ù»ğÃü§ºù²hŒnL‘0Et¶à¸G‡xÇ=TV½ˆÔû‰ [¬ù´°º5¥1•W”›£+ö­ÏCE¿æ‰ŠìÊã¿îÚN)_ıÚón‹PëQİ¡ä@ÔÑNß>¶~ÛÀ—¶uj/ÒfWb³ÛUPÉŠ”ËFO—\xÙ$òeÍ¶¯ÕmdõOi÷şˆš/±PNå?üÔÎäsxyKî€u›Z5ëDîVô†‚½’Ïˆ®vrÆ[~	
áÏ}F—\—ô—p`¦‡ëAí™Mv*æœŠ=`»õé	fÔ¯OœÃI¨Ü@—îVÕ¤m¼];~âÇ:úÂ@.ÂF¿º”@ƒ£Ñ¾Z†ğù©ˆ"—Ç… üvzÏ€q@É©‚Õ_ãò»ÍX@{®&ßä=Œ†`xƒşnğ¶f+ñ$»¥âˆ\b2d™s²œ6B=Ì‹®I×zª©ì{§@À@ü6<pªà¹¢‡ÙtRõ=­Ã‰U_>TÖ\š}75'À†Wîù×Qæ9¢î}?Ç<I£&ËŠ:×†_¤½WEÑÃ[,Ôådå8MMñŒGS—@©¯pß‰#¦ îô›+ÌÔX¢¬Áæ})òøöÁ 
¢ÛX©Ûù)qÇ­v—%’â§O{Óvb0œ$(¸\iá>1AMkF¢3”{Ğ(G_¯û¬Œé}ÒèùïÁÓŠ5ZÕûêk3	K?«K™Ñôµ7õœ†
º…ŞpÉ9'›Æ´—#¬;”Ua¤y“ŠæQ~yl}Õ}Êdmèû—€
êI¸EO’qµÀPMŞ´V#«6€Ëê©)ğÌ™‹Kq² øX§ÜÊm Ûå».‡Z$3“¦Î/\™>‡İPàØi.Ÿ²ºÑWÇe¤Ë%–a‘Ë¾.ÌO™àPëåGn´¶ºd»aÒI”&$ÌUUnêI}dO"=-8jWSÖã’ 7Èë?è7‡ªVQ²"ÍÌ]é€ôŠ-FñoÒ1 ÈòXa`ĞF	r·),•‘sÏ«}ê Ù‡ÓäyóôïCwªZœùúˆÑ#cëïH8k¹•6VÔÂñõ§ó1çGu,ë×%ù —Ø‹Y±c„Y¤ kªşİ¥˜;p^#)í!¸FzïÜ‘Ökö¹(ÆwtÂPLä£iùíÓŒ!kÜ©<nÌ9˜‹«Ós6¾	áZÏÿ.»TËĞÚT]¶Š[âøxü‹cMU÷ø2ŠÅuŸ0YgSW³Ïs¿ËõøÑ„Öñ± ¥’Á%1ĞÇS-¢E»:áeàÓÿºüÁ~ãCèßHØ¦ğÇ©Ö@öù7z¿Š-càrƒ†@¯Ê9Kù™¸îãûóãüœ×AÚíÏE625ãk “µ•²¯[å©ÕY„ŒÂ·<v|í‘–v²7¦x~É¥‹7ß È*GÂ`1ºî<|Îr˜—D½ìÏ7‚‹sCIb?ë\têC$YZÒv·2ÆyL8+¦<Í äæÔ¿{â5;i0tVUfŞ¿×Çm¬è\fÙt:Yx7f_ˆŠßZ°%†ÍòĞÿ&^Zé®9@\¿O¼T&Ã#^2Ogˆ¤o1¿Ï¾u‹•Ÿ;­äÌçßc4kF"sÎê¶Mhz}·9ŠêÈAŸ§µ¬ó”£g!ãŞëÍ›İM}7Áô9Z£íM²™å%».F(têS¹İFWsœbĞÙYj=s
Ñ;å¤'ûàïIZ¨u‰º8{É‰Âíöò€Oè `°ÔE­œ‹{èk]üö "Ë³›ƒmo¹Ñ—•f:$Í	“ƒ"¦R}†Y­ÜŒv­†,òñÖòóŠ?YÑänu»"#İyC[ÃéX4üø„½
ûù³~ÛŒ­DT&¿IJº²ØÇ%ÍÊUl<îh­·öLO–šQ —>–(÷\g#ê›0±r«RÀ“òÚ&éQ\PÂ·ú0OŠ)HÃŸ™)mè3SÙ¢âN@s?c†Up•å4péiÏâ¸éI×ÿî,¯şcêF9}r–`Ğ
–ˆmUM #÷Ÿ|@)µs¹»ñhjZ<±Û( ñ¯)ÖÍ6§ŠÁ"´zçé?EO¬‚è†©KöÉbC1êÕkK¾#gĞEéÓSZQò5{mİ»/½:dÈŒ6øÒ¼5Ö¾;)1îÜd6Kâ»;
ÜÆuZ8ˆa”¯9Ò8œÄMöÌ¹½Øº¨=¥
È¡GhˆqG¥Ş‘õÅï	û7P¤!õÜ±ÂƒWÆ™Ğ’Ã»_«ÙeEŞı²‚(‚D´œi>år¾Ø»²ãœÿ…Ã3ƒÜ©³L	Éï½è÷f“|³ğ8‚]$ÈÌ‹äüoĞäqêHŞÛ~*‡Ü£Ûm<Lp©§æÖ¶<^Úó©ğnZ¨õõÑ6;XôÏn5´…dp¤”aFZç¯Ó¦F=&_dğñ-…Öd‡±1s¤©;ßxFı*tAõf8q"hèÒ³Jé©’ëİˆşÇÒ#Dí„‰*éD±(~¯g‚« ¸—¯9m÷!ªà@„®—N§=/d®ì¢48•BøåwPª£s¿·î‹M,‚wò<Êã#’kjV×Æ¸¤md…çÀ»Ğ<†¨€ïòP4Í¡QX~µöMŒ¼±´:L(Éî×<înS›ı½·‘Pâå¯c0 —qÏæŒ\Â”ê‘Ÿ„ûYĞaô^?5Ñ3“¤jß£”Ÿi8Úu$mJ¸µ¸ÈË3ŞëÖ/g…;tÛœËĞH–úŒG¦t„h9É >¨,¤“-¡:ç ×j²úİÈ[Õê¸bmĞêüiVoÚLúV6‹‹£3tÏŒc?×jëğ†,Ûšé~.¹…¿Ø” ¥€Õ0¹şc?Y‡ªÊé:xÂ!5õ\,´oùt#a
,€ÉÕ“•¾s¡JFH=‘­ÏIô%*[/ƒ¹¦MÇù“õ…€BÑzNz
~Õ³ºĞ<Çõà+Fè_ÍnõájBM^^qğS!Áâ<ÖÚ;O!+k°†öé¹s3»œM‘ihŠ|9A\~Y*»µLr\ÙRêÄÁL¬0€`»“@}2œj‚¹úĞ@kß’j{ŒŒ‘OÆ;X6]¾h2?uòğãìa!_‹Cæ>aÃ;cM§Äè}.[ÅõOpÎO<¼’7ÖI]¾²¿~=cv4Ë©g›„ˆHäXÇÓÉÿ`v,·Äà!öš[ŒºaÒ
H™{İIõErF¼i¼¨NU›7[£¤—Eü˜”6,¹R»Ã·?Î~
Y”½àù?š¦ıêõÉ=Ä ƒ¼eAæ9²xZ"ş°:÷ıpËää÷I<¯Ígƒy ô(ÆÉG~øz@1<ùÛ–4âckáJ­Ú—6Ø6€kÌÇ®îx)Ãk>à£õ+R"ñY‚ÃCÅ™_¢Y–P36|¾‹[é†Y,éµ®–ææÑÅs¸ó¸—ëV›ğ!
êw‚÷|(]ÎHKÄıRYë.À·so¬Ô_(R†[4ş‹WI¨uÔĞ·ûçnç¬Mò`ıã~1’
yÓÿ–r	× bûu™‘65¼|*ı=o$&ÑÅ7«“(»0İ]¡y™ğ½hôØE“f‚‚:ÏK>õYNš½2SÉVø'=ä
âCogQë¥I½M¥Ïf×,éÎN¶A.Õƒ°Òj$r4©Îyg;Í]·…ËVŸ§X§ë˜´U÷©œ&¨'8ªI&:ÿĞ=šYS¹Dİ°ùØ#‘KçR@jç¿Wù Zm:”AvÕøXQ>ô2±u#ñh¡û°b7ÕE³£³õªêJ±É-Mew'-°„}œ;½î ºÂr?*ƒk~ƒ·wˆêY®68Ï8€±R[¤î%±Àbşè éb÷S’
ÆÕ½G=KêÔ¸ã÷–y&¢¶v¶ŠÑœC/>ºšNü#É”’”:¸˜uvĞ*Ÿ0ò:»pú&dÈ‹ ÚTâŠ¨Ò÷¯hÍÏ×ôŞ<9V(·±xH×FšMI7è¸åB¼µ;ßÍïßŸM%smóÊ {uîO
ºgşôH£I?w‘U(™ fƒø­ÈzÚ_•ĞM&´­ˆ†‰'©Ô-”óµËüñÛ1W)XÇ¼rÁgğ+j7øCJoø½¹WÖ~íä–±ü§Û%Ïç>?Î­H.µwk_:{M{~|ğêÈ³—iL°*“Ø¼MRi¨l #Œ£Æ³³@FûcÈÀÁÂİjI0Ş¦f$ò‡Úw&ÑY_Êä«’7 ]fŒÇ×XQçàåDmsŸc¢Q¢×ËaÜAÜvÚŸŸœûĞŞM1rÌö
±‘Õ÷IP¥ JÜÉ$4eçÛ Ù%â1ÚóuF&â
ıC:meİĞ ¸`;Š
†øú"ıÎ2[˜PƒÁrÄ,m:7‚Y‡½¨¯NĞ`w×O5Boä)Ì7â†CW¾¨†NWÖê²tc¢pƒá˜mÙL‡…à>±œ²j /o,ÿTôĞÓMÚí.´“Q`š³+  ©»ÈHèÌçÒšoÄdÚµ¹gf.È¸üy´/æm—Kaï:ä‘›ì¤ØJ‰x $Ë°`µ¬c)„38ÿé«ÔŠÈ<}oN¸0^µ)EX’³ÑËÊI¼™k.t#µêë¦¤›ĞN¥şw ;°çà?¨‹£êå«;éŒ¸|´(m”ê½Ÿî£ßT]çub¿Gˆ[¥S}b“äEt! ìF;Œ/Ds5’1{Îİ&5p÷uj‰¬ÊÄØËÛ‹§*62€;¶ãË^?w«|²ÿ^Àá´^/Y
ki;±¶Í§ZÉß¨rWÛ4
uª£›‘7ÙJ­‹„"cÈ™Ğ\qÓn‘ Ÿ³kQz%«iKD¨4;n?€¾C–K.e‡ˆÂ/åÎ%öÅáí,b}®‰'<\És‡¸cÉPùÅH"„öñß‡–ËúàífrzñçQµlqm.&ĞD“hQ«>jäár÷ì¶E£×($[ÑaY†ĞJ™Ôz»È.oD­KÏ»ØéÓ%¸å`·Ñğñgö¸™£c ÌZ;KÊ)0Ïl~QÀ‹Ädá]şÑ\ğ¡¹ˆ8Ç°Ä ½M¼îE­‚UÌü²ÈV‚ÍjUÁšò4ÔË`K.mJÄocst†b¥“T[7}/°O¦û8z¤ºç	º¹Ğ2£¿õòş° :îÕ¿~Š—¦ì›_º05Ò¨Tt§ëş-VöÉi~Ğb ãs/]_ãsˆ·SÇÃş¤ÀŸïj#åÉ	î«‚à_XLFÄ%¼èa*7zÕìèm{òMG;ø=*«*è‡2`Vß ´PÿÛ.5¶ç%H‡gìF>@¿	£³ørr I1éPş†]l\ÚO–›°FpÔXÀ<>á,Íïd™·Äæqy¢¿[p[€¾¹yû÷ƒÎ@ ,0›(hÜXKôµÓÛÛN)ÛÁ=ÎÂ7%4ëA‹r¥%‹Ú$2!cqJüÌ=#Œ–GVJ+L¿÷ÙfTi’ızhN º/2?¬*?oÄ±à*Å„æ±‚!+×À#«u°)ÚÉ"~Áóı£ï+ö8ÌgéFVºTÎú‚è«Çi)O“*úob¦'X‚©~[GL)”cšòXGÄç˜½vÈâÎó¯kkÈ…üb5Ø×4'³*ïFŠï—¹
®ÖµëLºà‘áIE¢¹*¢ÃšHÆuòxÀ>õ ‰yS}`2jàD¦Cã$úUı«;‚z
Ùÿ—M@¨PZ-×1;qf^f¯4ef9˜~é©l$Õ}¸ĞğÚÀ4›qÏA;T!£1UÜ8ªñ:+|€Æx,ƒ +—­­‚îu³iØÿ¨â¬)vø°Te#É<}ÿ‚€÷¹‡ßëõÑ¸Y_v”êÙö~ŒáBo/ÿ:‘ù
Ã1d5#¼çâŸl Vç·›_¼õ"]%FzßPóá[íUíŸ ò âëR,›«¨`¹„é¾ñÇÓDR¨‡–R^Z¬·sYh˜ÛumÌ÷;ÔS1­vuKZ%ãÍuC-RP Z²¤KCêaÉçµ7|ßù”ëà‚ÁJ•&“óÇçsë…yÛppâ{j¦h²÷™æ. œr2ÁÇóvİ9nÖtE½nÕ,¿¯NüŒÂì¦’,Ó\*§ÄxÃùU¾–B JØÌìp¿Ë±zf5}áú¼H5w37KÅä½‚5·RĞc(Êå;Óú´‡E+8±X“&£5‡Fd‹Àpš1]@5ènÏŸ§roø~¸ÎXM¤ÏÔ©Lbw[†¼U?5¹f°ÓÄ	;FACãåtÍ¼ÉËKÔÌ%ù»6œé¬d/]n‘njö¦A60F˜ÜJ6'h%Ë™˜¹<9=K!)‘Æ›Ú!i#§2†ü§<™òˆ¹Çs5õŠFß]uµJ"3ôä‘¶¼=£àŞĞF4}¯ÂŞ†zU¹Ë üµŠğ†¬)ŠZÅiih4)©i• 9ñ®>èhŠ:²Ø-wä§ÿ4,ó\(²s9A¦F!†ÇìùY5°ÑØƒ°Æ8¦Ã!ç2Â¥>Æ™FµƒU(J"{*æ˜_(“¯–,©«½è±ˆM+&Ç)7À-Tâzxbj¡­9MCLº3io‹w€j›®
çFwÇ™¶ê?IŞ1²M–¦!\?pK	Éúö„û–ä‰Îä|ÄWë&jê^Ú.©§T	R-u¡„ùn&‡OigªKpN<xä¤Ò‹„ÚW÷F’İª.À`›ÌBw9Oâ2^wıSf&R\©àägJe§£J7Q›¾¶¸ãs©
'¨dRÄÁóŠ-û\às28¥g,¾ËºïWÜßT¤.Â^@7¡æT{6@ ö´ä‹ë·Œç}uŠ%Dpt‰D•K™cËšp§£¼ßäº½£¦÷«‘>Ì–§ÓĞ=TqaÕ)°6'š~²Ó”á+yã0=…ÌêL[¦Ã!w»ÚÇ½}Å&ÿŠÚ÷Š‹‚]%sJ[.j6)|!ı±Â1=ĞgŠâ!^şjŒ±ì¯>!äˆÇ¾öXÖŸÌN§ÈıUÜ½œO•jl{ø N`$¶;R O*\¤ÜMí‰R\¶CÇÄåEP}R“º)|;z½5Ÿ²,”*,âgß0µ1 @\tD³¯vÙ2ëéÿiA€NüHùì:	’îö
'OõâÙP·ôŞ¥kÈú§
÷
ğş;]ÑôÁuÌ©!ÿ¯é°­Ìº¢‘Ñƒ-´W±QEzâBt­	~Âü(ÉĞè$\!»vQ=ÿóùBPæPáÆÉn]r¥ˆNÔ¯éEÏİ’CBÒe?)¥•vTl»­ ˜ÍˆÙØ~áó›Cš·dp‰·†PÌßZ‹ˆf4CĞ=üsÚÜØ[²™7“éïõ^·èq`ºÖY1MÒp"aÂ“×™U‰oşEDúhSÇÿJ¸	Ó±{‚‡e¿9$ã.@ÊİÏV<Cxş_àqú]º¼qˆ\,œ•‘ñÅ0ø<‹$g0‹Á²€şS‚\(X.wúóÚí¥í¨ =Î¬qJ®f€H3·F:||1‰¡ü²RÌ·pQ%ò‡AFQ‡¬E¶¥'Ï'qh‰$!+$IUÇân;ä×ı¤Œoóa!àoÿ"`OÃQê
Ë–Š3IM+xWÄTrEˆÓór—+ˆÒÕäâeîİ1C6ŞNqZó ì²´½­›UÅL)Ø>W8;iwª|äğ›^zıèè÷DRª]¤ù2\\×ABYëÔš3†c˜ìé!êi3P5x¦³á«–ÀÎ`Ìğ±HËôº.TGƒË¶7ºD¨"€×´IwL/§Mmëüà½ä¬®ÁXo‚È¬\Î1,êö¾ÒØv Œú,Wn;š¨T²‹±uş5²”USşqíëàQÑénD¥YBÁŠ­ğÊyŞõ§•U}eÓîS£ô×+—bì¯­inÿ-„gæãRbAn=p·œöwU
ÂJ«ìnË¾–gOíˆ>Ğ“i©qËq(/Û#2››×ÒN©}ĞvHbAÃ¼zM`&×,’ÊĞ©¸nØŸ=Õ$n‰UÕ¬ã	šw]ÖF.ñJ‰ÓÕ«ª.úRÓ,¢*;½K*Ùéd0‚¹;8S}2¥@!{ÔôÖ^/.¤@u5’ì}ıàHës·äáÕÆó}Ò q™…ï½î„óÁÑ[‡Ñ_Ä¹ä‚ŸŸ×x±ŞéTaH‹dñÉùt	5JäYññİ°åQ
ämrşo,§G2ş d¤+–šİÏs ¦TÉ‡KÂ1–	R3Ò…¬‘‘GÁ_{–@z‘hÂî	Ş’´GtjĞDà0µ\&Û®3&ÏIMâ§ûÁÆdêIT–(ñcºÿäçì©œ9#eåõÆ³ú²Õ¸áz\’î.<[¨`Vt—-|ŸƒŞT+u­“9ÈÈa‡È:ŠEïÁ‚–¿Ä;4z~øp{0A÷z†¡~"œõêQÆóğ¢’q—ng½l‹½\Uø+Â0g“×$Ê°Öt1DP“Ù6`Tú¦İ{ZèŸÌøt#ıõòŸ0D\%°Ìğ ‚%ÿ;((÷UC#ÑJºM‹myT…¡†İZ²ac¼œ‚½¢ºdôö¨‘0§2lóÆ%*1øşŠ3ÄË¾w“‹Õ®v3Ì„‡™|9KÄyÓƒıÕ¸Š*swi²Ş»xe‘¸!b’¬é¶âéê6~çî«=–#»r÷4ßåÆ„ÕÉŸªz/ƒa(@wGt0{,ykTáY,È5›!İ%ÍB`Ñu7=^èïÑ8/:;“jÇ‡9Á=gjTÉãà½†==Í¼Œ¸½,O/¸ïsy³_-Èõìã–HPº‡÷ÜÁ§íuÁˆÜ-f¸lDèızìQ<{Bã	ö2,íœ%ÊÂ3Œ-}¤Wà‰É!+¦¾RË,WlUğ .şÉ&hxÊ=Øçó˜aŸ¥å|D=~4ÛÜJb`é…¼Ï—€,Øİ¼B`¬š)ˆ7¨zCO—vÉü3=XÌÀb)6Ki*Üø›Ö+Ğ±2ˆ’£ºMª6õS±¼Î¾Ë±©]¬¿¥2ïAÂY}ºá¹Çz¬\İçZP%–nvD?„ô2;eÓş‰B©j;âZ€…ğ±Z¢‹“  {/îæò¼`áIYy«/w¡×U¸ˆ©ô¯‰)^7z$ÅIÅ{„ú™°u !aÉàI“|h—Ë¢|Ù:öb,ì^äÒM£è£9#Dk¶‚E­gúÑJ©æ@‘]|¡ÿğú/‹±$òÒà-`¦¨è%%9t”}á0ËÜü²ğ@©
Û$'hóô
æS6‚æCc­Œôñ”ûÆ›#°N/†Jÿ/F—k¦FÕ‘½ÚX•ÛhÈRhû­HRë*;º®Ô)’ßx$Šõ
¯}‹h®®c¸ÌĞí"Æi°„¬ÿ›Û­Y·æ\Ú/G¸íZÌˆ&fÕsıûl±T‡O¼4ĞzÏQŒ9;ÀA»è?V¢hJ¾ÃÆ9ù‚?»KI¦,¤VnÁr=6­¸—bÁ]5£|?ÑjÜW
İPet’6iço’e-­ª:fÈ‡oñ*²_ ŸÓğÜ>‘PÇ­ÿ¥¸JÕCöÆük(Ær Mt¿Sò€ÅU”mMË‘·ıñHP6ÛµMÏG9UÄ£;MAlx%Cüto.Q1A&TÑBk¸l¯ô4ØË­BŞsÔ)Õ¡÷n´w£y¯ItÄÊ#nİÂÁ|€w’[|#V`S¢¤Ôñ‚ÄoÄm‘<ÌA Y0‹/Ş¢'÷’é¾>(†W®…™£êÈzi Â)¹Ü¢3Ÿ)n7ê1üì›å¶2Ôwï¡Õ‹Ài2=ì«)®QÊËÃ)µ(0bZ&çû\“˜NÑ¶íI?¹¦™“~F‘ºYä:ĞÙ@¡WßşyMZú·!sÆÂcp.Ò$š?×Ç¥]2†9Ô—g91œXÒõ;Îş—‹Ö·Ï†—†I’)ÚÂ8‰#S¬ û©\Z)XÚ?‚vbÚ_g¤¼|œiG>Şne‡[€«ÃÙÍË°Ã—è©uòj—à€zÄ7³>eÉ\/Ïæ¦€`uK›Éó‘ìlZJéÄuåıÌH«a	(çÇÕÇ°4Ê•?W­AaëèÆqPx¹{²6â?ñmÃr +p26Õïİº%ÒÎuDÙ£îÚWoæC"Dà>TsÆÈÀ¤ÄO‚PÑŞÁ9ø¿«·Åô­×ACÕPÂC2]2åìåØ‰-Ãú4|äN¯€HaÔ8\î¸V³Óµ|·yŞáÔ<íöpr¡â”7~ÅHùœøPày÷Ì;,.$V+AkØ:!
q ÿ²@Y¥>§t_ë¯R½õŠ´léÛ¼
Vò5Ò©»³Îz•E¾Åà¢ÅşÉ´†õUêãœ/Ó1ŒBR$ğ·ºÇgº‚LPášwYĞşî'ü\kû'×V¥=ÅuMHoÉBëyº‚/£SL?Õë2tÕœ@'U=äZ0W°wªÉ…ôMÎcËQ§FÎ¨?N±üÁ˜wu$kW€]ma–4B4uá¡´p«É~\ñ3âú–K¼DëS~Ú3(LÔyVs'Í =Ï`­S¤ª}9dF,mí°"¬ìtÖâ¶t‹ã©ÿFŒŒsìîÉˆªıè‘/v¬S#6]³âîÚ&{»Š™1ñ¨ŒƒòïgZ›ÀÄ{&·~P—8ã+ò®
ëŸŸ™e$ëgG÷™™ÑOãÛĞs¿6³…ŒGz7Ğ¬¹šPöxbÍO¿(ÁNŸÏjsJÓ°4ÊJ®tZ¯®Çy3ng?]„Ic`O$GCé%œ®Fã5İÎ…Œ%Lb5û»¤V$ù]XÑÒÌ[Ùİc‚ökuK£“@îZVÅ~É¿ Ÿê»¬ƒ£9´¿ÿuÂ:İ))¤¨da#9˜M›+±ö½ÑñqÅ»•ßUJ2¤dŠt)±´¼ò³½ÌºãÒùP_ÂOèÉL»:wß¢FR,>Ğk2©Û¯^còªÔTpT/øWv# dŠêìjõõUüÈ!:,° %KÓ¼ø0(Tb›ÁÄ2€ .‹ÖË…swD@°ïÌŒ*£ù§ü'›+)ì9õ¯ûwãûà¬eÌO	E]ûk€¶ˆ~Xâ¦qòÌ~&‹ìÏ÷p:
î¤a¼öÍE%Šªeò«3å¡²k'2|È‰+ÎïåfœbË¢§B½Âºéàm%ëŒÒx²£Ãï %34>óöğ%cÙZóˆ¿*#kZiøI»A,“ƒ$ğ2}:ñ¥î»…À?øŸ[f e:®§`ÒµÈé®ãOÏ²½ñ26jÉY?ÂèâÎ+Ñu»ômtä
'@İ÷PœB£Ë$ñ4qI·ÿb„Íƒ-(+*xŸÓûúÎGìÔGó–àA¯İ–E¬OaU™öÅhñOïôqVNüõY¬ˆRñğ6W+m¢iZk~l=»xÊHtmîã¼¿w{”è{¸nni2aWsgªß"VŞj²ş¨°¼`×ş›íŒtBÎLùâsÎÉÖVkº’k’Ï‰ºON÷æ04¿éŒO+k¾„å}~_–™¨•÷–ÅLÈÂŸéEB .Ä&±cÊ±—’’»ürn¬äGÊ·ûğhU#»¯ƒÒÿ+•]h6–±,0–°¡"NüW¿ĞÖëé#'¥•VÕ{*ºPQCã~Ó·õ·Ûyò¥Ø¤ÅÄz†6ıÑıĞ7Ç%ÛéC~‹zßnãæ"ˆÕì±û€Æ!ñ<|°®èãçÛ%UG&ä"(Ôtuµ5§6ëp&NR1çßFá»uJ ¢¨Yhùÿƒb½&Æ2®ú\£ËîË®ŠïçTkËÑùšÔIw,†0q\L—G	¼ ¼jÔ€xC‰"-Ï~sœQU>=›=Êy·d»»wÔˆ½¿ïm½NWæ¦¤$‹=½£ıæ@­Ñ
o(Á¾%àµ§ğbÅd$_ƒ‚›İÀí ¼×[ädİCú7u(öX¼ïKÌğÅ„–_XåçáøO}Ã¯˜ !C|Ö\›ÖëÈ¨ÊÖÑ[.‰…y¥,!¹v§áâ/ESW±X%:òe(ø¾˜jy,‡DĞo‘Ê¹ö{=ÄOÏ:Ïñ£Xs›÷ùøÒÉ*¿!Un2jkİVĞ#›<ÿ‚p?['¼âáv[MæŸ3½‹Ğê™r~š–Ü#–Ñı©„Æ-¢FyÈé™,M„ 7(¹²Î’òğ”Äg¶Û°hÇ½oÿ'ôÁÑdæÀ#Û.œhÌS°FèIµûªÕó9rÁ÷•xKŸ§mÿd¨be<vã›İD [ÙØÇSƒ;ª¢o‰«ÜÔ‡knºÿïsfI ¨ùå ;1cö«Ù3¾.1t°2V‹ß›Îp»ÄÿîPAé™q•ëìº3&Xà»gaÀg”SEO-şğMŠéÕì9×©æg€3”†ƒç„¥ªçXˆPboPIÅ€pÔ¨Kô¼g?ŠƒÚ¤ëÌu<Oß›Ïå~x±Y¢£±¯×`âÚ«XCs¥m*q
N’½;Ä«%ñŠ‡†«)ûrFÕ¿Ãê¤‰äF=Œ–RP8ğù…O_006:dS‹Jø¡W`İñ€•ï©Ï
ÇÿBŞõ9aX‚X(ºCnù²æ$‚¶ [Ió²
‹\´£I‚«_™Ó¼˜XóHôHÃºŒ UÖCìeã‡®6·¿\&¤SéğïØ[ˆŞ”=füI¡él(^¦ 3„a\ĞØ?	åmF™­iÌé"D®õ¾·ÈËõ]¡ñ!xtµš°ÖäÑ1¡UÎº¼£	Ğ–Ğ¥@tjˆÇ(›•
;@x…Va?m/%Â¥S~òİÎ?oÕsPìy&òc³{h¥L¦30HM#Óbş—+U§Ô½ş|9½ğÃŸ®~ øƒ—§j	4nØ€4Ÿ^7pƒÖ–˜Ÿ‡Ü_ì–IuŸ§T‰â?´$>!):&š<WL'“h¤Iğo;‘¼â|äıif {Ô‹ş™£;ï6½uXS.ÂA<Œ•ã,†ıÄÏı-î6õL}—õszĞâM4ş »öœ‡Ç£wP>Ú¸B0²…Ø¡jÕñ$-—Ç¡ŒíÔÿĞ¢6¨J\Ä£g¤Â‹Y{,†O~S-E§—"k^ĞäÃ÷Ú‚ÊxíB‰Ä‹&µâS¦ÎÙõL¦,ik„îú,‡†Qı)JÓËØı]ê·šEg.5±k²l$iì…9ş²qm\|LÌÀ‰AĞ”§ÿVûñ**À×}ô^8+W·ö;ãF?¨.Ì²è0»ZA©‚—L4ÇÌĞŞyê#O­|Ú™x0”<£‚¥\ÿızfNÅö3Šá<.æaµ‚†Z¬k¼w½½X¦ØAèÉä|ı8´ãëg»³µàqòÑ£ÖÀ•ñ±Ş‘ç›<ò×ãåÇ[&î	ÌªÇwÉ™ÜÍ7“_Ï “¥§W³‰[ë¹¢KëV¤ÎöœÚÖì[B —×˜·´²²l²´$ülÅ<¨`»Ô˜@Öƒ#d<¶èÿë“oX‘ 0è¶«¸ø±·9L :âx®Šm'¿¥îˆd_eh×î”®ĞÊ£Òá§Çá•Í=¥¶g/ª•1r©uâ&xZŠs&£%±ÈMr@¸t­>l	âæÀG›ĞdYŸ?õ
MgÀÂWO‰%N:Ä|xWê¶ó'Û¥nztÍ¾}ä=Ÿ!í5uaèÏ£°†™6Äé4œº	Ş›D²&™>C¡ulx§Š9_FğR&g^o·qùimsøÔzƒïÇ›å(»ËHÕä=æ°-dàÌ°R#SIÖÌCõÕ¼0+Eà­¤æñğ¶ÆŸÃËcıÚÕ¨ã):ä0	QË/w«¼ÅŠdC+Õ5"¡ğLâl *@—l¨•VqrßóYÀš‰x`Ö`Ê)®ÒVTëTÑjŒ7‡Š> ş$K0LK”R¥ã‹®NéopëĞo×n33^±İÿìà™â"õ,~Á¼¹q87—â¯‡—‹±sš,½ŒXOJÈ—"$0buägö%†ÅCÎ0y)şªPùæmŸVkœ½>Wqr3âÀ3%Jj•í”¦ÌyçÀò„ß fQò´'~@Ğà'í9™ŸwÚóñãe3y4ài¢ágÏ“;“@IÚİ6Dƒ‡JqH½ö”ès …}Õè&ıâ–àwd¥zd!+ÈÄ˜ü8®T‰\¢
Š~¿D*îú×tËI>[„
j¼*SĞö¯×Nâs#zŞZ»)÷Qt‘˜G´œeîpi¬èğØ%j£$áªq=“30ús}ùÿEİSG˜œøôÊéZÑB e—ÊL=çÛö»š¼ <}z¿Ä"2Ã°õé»œUêOmwüM²ñÓ6ŞaHÃw¬äÎuW¯
c=Y|á½æ0—“dÇAjŸ¹• g:˜‹/Š¿<VÖ¡ “T^Kát<ÎSa²×£÷bís|sÇRJ2lrê×´/Ë»ãr5º€ùÆ4ÏÙz„æ¥‹ºı“Áw÷.ÇÀ|°¼‚ƒŞåÌüj¹çÑ$Ø¾¬uğ1¥ôŠ×¦«„‡#mà6ĞoıIn²h`pBv›=,ë‹zy1h=¸ËµuÒšklLæ)«w'"¡l/¯¡'Š!×I#ß/!ùi³ *æX/uŒlÌWÃ^úüB	6ôƒ±=aqÇ)ë«iÛ´BÁ`ì|Ó²QIbÖæK¾$(O’?Fİ°u>2…·puæ´”}™ÛvÁ~)š>E‚yş,ùJo™Ÿ€MP2ùü}œƒWSÜªÇ Â‘J°NÆO	ãfiš„nÿRæÅ»)ëŞ÷"ú31Fx¦‡Rò0XÚcİdÆànï-½z)(8M>Ş¡…¦çi"m—•­K !é6”ÖØ"¼DqªRÁÕfæ€Ğ_7äÕ\â½À”5˜zü$±"ı{'ÈÚ_éGÜVXÀÉ0-rmRÿá%JªkÃâˆf{æŒ6ÙÜªCsúFÙ@e]ÿ,ü×Y|g±~Éfµ·óšâGôÓ0!°½LL|šM7²/Û2ûÖ<ñ©´jÿXİà¡Ê‹*—¸Oµi’y^¾}²ŒÈ›‹İş"ÇÉ	A„ ü›99 '®'&Š[èó›¸X”û_e	ÊC	¬wÚ±>”F"¡Ÿ6ÿ07äïlWRÌ’™á-J¼{·é7œñh‚>È«Ms7ê<T=Ë}RÌ°•LâĞWP0ıS ->€ä ÕÀecñ´DXé­˜­Zì{+Z‹ÔK¥…B´jY	ïVi2÷JÒÙ-ÿÂÃ“Uá¹@ëË#u‚Àù·–Ó|²4¬/.Û\Fù‘°İNR<*ÍR8t-GMÓhf,n¯zÒJªÒïæ­s’/jÄ‚4F+|7ŒkÔ†Î°¥ƒ]tC;²X.ô=tJ¸_Ì§²
kĞ¹m»ù¸:‰SY«5cÁÑî€˜‰ ã¸²3ùS»öVyÑš¬X8†şšµhI ‡af¤™&’ÂØ®ü;ğÂ9©Ï€`â’ĞX<è–±‹ÂLí&Ûì*VÏ•‹~ÓG¶ÿv€>±›ÄßXz0ÿÍç[T+òª&öL˜V»¿UäG²Ç}Y¾xµo#ñ;0à®Â5È5³¤¥Lú§·Çhú;¸Rò¿ˆŞ3lú?…†û¶ğİşIRè¸š­3æZ‚íPx¹b‘Õ!„ã}ÓõFcL_	6{Ğ^V>½òÔ\Ø(û˜·òbŒGÈ­&øgz'éw³PñUN›º2…„Ñx—=ó ÜˆzæÚ'¬}0~Î^‘Ÿsâ)€áF4¢üÔ[	¥‚IŠ°JÓbªòÊ|Ëêü½"ÎCß—ğüíiÖ•xöe;I?Ò×Á;1ğv©ô@GÊæúÒ(z«$7SƒêHe²-»$NyQ‹½ÖE³ü¶Ş'{oC×§;®]<U¤x¼hàu/qUÁ›‘¸fÜ¿c}mpŞUÆÆ±š¹õÒ+ˆWÅ®«:Mé?µŠØ³§.ì.dµ¹mùçØ‘¬¬ºŞ‰>BLN#HÌŒáê9ÕPÀ€æ±ÄÅu0‹®5„CË¸•¯Rƒõ0×)Ä}G˜Ê§Á‘”§½ã~z¸;tp#ŸW‹Æ6ÈWØlÙvÖ”S{‹"€Ò'¤¸Â’×*A"Ic/%Â’‰{‡T¾»ñ%ƒ,Ø]N¢çªS÷·TH”|Èscö\J|[l^¼*tuàÄ^½'£€3Üò}õFÜaPÉ&´İã’ÚúÕù )Ú·®®|yÇ‚sP7ùñ±õšË¸q—p,¸òØÌcö•vë1æ|ŸtısÊ
~ÁsŠh§½¥ÊËïùš,BZ×•,of8›~ÕMöä*JpÛ!éäç® qùÖpfŠ3àçş›Ü«i™u-÷¡ÔÁb÷ÙøaU™—üîÍÁ~:Ê»îÂ/¢0œQâHß4ˆ-õ/Â
àÔ°r;·¶Ş™	İåiĞ/f!¿ÃB‰ƒ¸ÀÖT´³‘#3(‰!œcukB”ˆâ;M|d«h Mxic°”u
PHÌÄ£´ìvp<ål®%B)VŸTÂ% ( ÒU¹p…ƒ°±ij]¹ä;¾ Iÿ²ëqV xXú~BêCİFŸ|ø†„U¾x™ªøQ&ê¶‹ö×²o€Røí<A[ Ws ò(c+Ï:"ºVàåÓ›ãÙğ$‚d/©|-=î‰dS€åz%Fıëøéªgd¯bµ!ı’!˜Æ—·Së×k	²ÕkÍÙ!åÜ8BVÅu(÷í*4×ş€g¿•kâ¬—á¢‡Çêbƒ…}†fTx˜ø¦Ò?ãŸ¼Yh¾ñpæö11üÜŒÆÜ­<±Êâä£©ê“smp?“~Ğ|Õ=®Dø®N@>‰Î'¡RW` &Í.‡”¾V$éi’¾õ’ê†.èãwàñÒñ´™B¯¹Îb;UOe š6³ÆN}ˆ‰ÔÑm1È0XˆÕ>ò øjmşä~‹È ŠÊp)Ÿ9Po¢VVy„K²L/:‡˜òÂ[a@<ÓÔ‘Ûi¯(hx&˜ªáNßÛwZTUoX||š*½™¿¡²îs_™kÙ›ªeC+=ŞĞ!ZÃÅõo– /ÏóÊ2¢=Î3]iş­};)ï9 @„‘…Î¦ËkWä’x7,w„õ×óz¿rÓ/æ‘Å¤µZ¾èšn¤ä×ÅE[-­1¤¨[ºÏD(½TKNVoÖv¢z¹»7“ü Õ5‰òR/Úh‡.ôxÆØ<Á¿•ó Béã›Î¡!õ†É“‰¸%²´K5ıCÒDy8ı‡_,-Áäl.FTÇÉ	u±Yóİ$tN‡§çCƒöXmzf"J”jö›Ø7X©IÍFˆ¶zÚ¬ƒ‹¹Ê¡¨øÌf½^7£®Ş	SYÚ='…hg¡–+40YÔ±`X2$; ë¬Å[Àß±C4í4éæÊ×îãíYª‘ÕSCöòHhNúåaƒîÑİ¹ƒ*6;EÍÙ“›ÆUÈZZX~ZÙ…Qp“ÜÿQú“¥Wç“wÖ«…ffº£¼eÃçÿ	 èñZ0ºØC¤k u 4ƒ÷İo|P´E¤¨Vª1H½
ôÃô—:HÎÛ|p£¯x½©($¨æişCB.Š–AÄ¿Ğ¿#D“®yL£ÅÓBI„»Åùe`÷£ó£¢ —QvŞ¦èè:'xG^{åyßÏ:/-™âv™š1®*];±ñOd©d¼—ö5¥hòÊoFµtÁ É îûê'ÌYØ¨¢N=§#¯:OÅjVÛ¿*±ì«˜Yw‡#yŠŠğA6z%äŠÓ¯†õÅ4Æ³b–aÉüF›`<NNw[Æé !‰!ö{Mwµ´£CÅÔŞ®üe* å1«Ò©éË3lË0Pzccƒÿğğ²éğ\Ù\ªÍ’ÉŒ­h7®¸‚ÁÒ+GJõ­”î§n"æXï*™2vş„"	™üoÂ¥•´6ñÕg¹Ã6ÊÔ|uş"OßuF}ĞÌ…2tä„-SD„NÕÃ½¶]Ó·Ğ3à4İÇÉˆøx¹z!º"wO$&QÏ°£8ÃÏÖÍp‚R1Sğ{ÿyfğÊ1–Ÿ«BÚüÖ•“c[­Ó;Ø1+å—<,³L'ùÌMÂ~Ñjó3”Ä9Ü­#H
9„íŞ±Ò.?k:^Ïêo¼Üb~Ñ/ •vfÑ\_Lç],åËÊ¦‹×¹Yx)nTîdLÔˆ³ŠÎ˜ÍhÌº²@C“F[¸Ï½‰ÃùØó¶?A¤x8;Oçª³®lÿH3bÂ¢'?7ß)ÓƒÏ¾<A¡Ëj@Œ­Mfdøö^Ükêåè7ı‘wÆK†Kà(×8¹üª/tÆşÉÓì<›··w~N‘SY‰™ÚF&¡Z"¦ww£z¦û%(jLX{T×ºã|¡Mø÷èdÛ ²:Hqå3l@O?<KîZŠt¥r™ÿÄ_jÌótÛş“@HÓ0JÓk†§Ãu¯Ì¶]0”VTNzéø”ñM±õ‘Â5ÒópñˆÇ²çæèâr¬ùÉÎ“¡G^9xÚª_Ó-aêj~»?—Å§U=fx(n=88%RÚ)ÁLÇ#îGù)¾§zúˆşp‹Ï:ìğ˜*_©nzÒPÂe¥ñÆ° x{ixªtÖ>ï@€ü6dF`4u„é	Y¤Ä+(óòšğŞOgAÂéJ¨ôÁ¯•Ã¾º %Rmlr µC$áı7”ôV<ø[È”ú,š"Ù0Ì#ƒøÂ“j Ñk
/ÊØñP'Õ6g‚ïE¢]„ÖlÉä±<§(ÿ5¿“ìè‰úÈ’Æ|‰Ì ÉvºäëÍîP:ôXµA—ƒ/l4_†üîÕM°FpšdÏkHùÍI¢|7E¾h¿ü§£rè„Isq'oú®´átêÇ' ¸ºtêŠwÙ¸İòÂ‹n;WÜhy½E{üÕ}İÇM+Gª¸”v9¨¥{E3Nøù<ı1ú3Pô0¬d¥$ŸHëÕ÷ùãµÔ`»@›T’ıÕqBºRÄ¡ş¦J•y¼0}s†M¤Ü–›:A¹fI{uÄJÿ’ÈèIFfÒ$ºhˆÊS}@ÓÄ£cA›qvÜ·=À!1¯v¿Ö]›Ëê=ú¥,)6®õtÁ²“¢hŠ4Ÿ(Ö±ïH‚ˆV&X‹ñ¤²EP'‚TM£ŠAB¿w¹½¸)Ú+À•¡§£yæBk»ØXhfë UœÒíeuA‹m•*º³c-A©¡§¯mÜŸ¯p^÷›AylêP^#;¿‹¥DOVò2g }®ÎÂĞ•OGE©Ø £şòØ	TšDKÙ„,ñ¬F`éÙ)¯~Õ…1—.×î6³‹‹‘”,h ôÊŞŒlVì
û0Œ;ªÂ™6ê:
è[ßA92¡İ¢x5—oßa%@qî~­é¸¥!L6Aƒ0ó•#ì6ì(­ôiSçç3ğ]6Úr˜ëÂ&Š“°ø÷Èfv9¬9Õ(êÅFæ@ˆ@,¯¤Zï¾I€ğĞœÛV†5Š2 ]¶¶xŸ”2êÎªb>³ê&}ö	,ó‰¿¯8§€_óŠ@>DÍ™Ô=,¯J%nîYù6ñE±Jo&NHP’H»©hBëh9P9ñ„TYsú"Æ,
ÅİF™„Wrp9P%„ˆÒ9'±Z¯t WMÊ¶rF/ÏmœfÀ»2’‹ò@ºåªj+Şgâ“™}˜g¹'Ş%-"œß$s$Ï1ıc3›_QÎåã.´MFĞ[±tV´¯lkÊŸ„j"#kl:XR'&™ŸŒò}µ´Ù	lµI<‰^´ÛoË-l¶Gz«Ø)vIQœ+±Å 
¶£ÿ	Cò;Ÿ2_¨ò97¬{fÍózß¥1*]!Ñ˜±²N²‹`:‡LZO^÷o2R3sM”ÊF¸û ÷i$bCéqf¼tâ‚ƒĞš¸ú†¾hNp4G—ĞÕ¥åàtşíŠãÜ1é|bßy¹HI—<Ïÿ)MåIÃŸY=N')/£ÚlŠîÎ–ö°4‰£TñXèî¯ğvOÑ.MFÔQ$‹ÃŠä)ª]höë&	‰hU6é/csÎ¥,œ†K;Ü)£ij“¡,lô4j“X#(ä’AÇÒd¹H½JnœÚøOĞ–¥[¥£+RıñoŸIŞúBîviğ[Ê@æ"Ì’ÌÀ™úx+’õ`ª®ï]qè€Ù2J«'iğ:â’‰ÏOx?¢¢5 åÉ2É)ã1T,&„ã‡ùdUd—öÉ>ÄÇºOä{Ûäˆ_+¿$zÕ‹¾Éáx¦_{ƒ
0);šÄ#t›NĞxû™pÔjê'>¢lá™ß{‚ÚĞA¿9yÚ ! š8•Z˜;¡€,šPâ«%6G˜€Mw§è]œÀç29xˆ}‚<·×Ïƒv­Û2ç0C0ŞBŒ”¶c™—˜=rkµ¤Ï½5Ú	ß`©ÑÖ{x‘p`×9d#ê©µ÷	{Raò€ƒ> .õuF5¦¼bÉÚà3€‚¹xQ:OQ8¾‡¡=h?®<„zRäùe¦ÜãQuw3(¤ä	‘X=Ê*ïïºÉ´:õ	¶ÂMD(²øcøÂ+Íí:¾1DëÿßTÃ!›Ğ¼ÏW3?ûBH‚iâI—^¶+‰FCºƒï·1†ÿ>ØÉ…hĞÇÏŠuBéR¬ ¢á*¿Ö ²1÷ğ¡iìÉÖwv€æ„¾˜ÊD•èKû­Ÿrñ6Ê(6z½2uÖR1b:ã¥ ¢Ÿ°&«[0Åâ\·•
CÃİmÿõS*;dèù‘ÚHNÙS8ñœ›nl‹ùM¡_¼Õ\^v2n.ê¼½H‡Ù%Ÿ†Znœe¥hI°íF+E‰;®ª<—®ÅõÏJå‘>aÁ´ãìü‰”µ¢ÉTÓGEJÛ+É×MùÄ ¢©ÌÙg5SŠ¸aöƒ»ƒQ¿£Qîf~ñ;~¡1ã[Â½ö°[n’»ö¼2>sQ[é?±r¿ıí8„9|Àv}èæÿÜC	èÜ„¿ÖŞW\¥ŞNİ’óîşĞÃe¤+T	ìì†èÇYÿ}%#¶|s‡wÌ§Tsn	9"´Ef·ØL^ù<(ÕJC^¦„ÀìÖüOŒ;µRuá°Ø¤!q)?_s‰$<ÂáŞ3½-M.{AâCÉi§ÿ\Ä†²~£™41Ìe	=ÁìYqªá0Ÿõ¾VÈsOúó¦ÿ×xæk˜ú'ßk¬Y«ı£FFf=s†¼¦’Fı÷Š:PÊĞP!¡èÕ!DƒõÎœµŒzxò#’ñJm•)¿åí‚”zr{*à¤êO£j/k†w ÀOZ]Íf‚ãR’”–®,é†çÇ‰«‹¬á4ùÛè‹ı"¼9Ùƒ¶ÆğÅ·×íÃŒzĞê&Ú1f%œLR£PBS3âZN—-jRìú-†ætmt×øĞ{T?olxLJq:¥×'6ğœ{^±)4]Lç•Î($à~ÎêÛîÅcÊvİALæ=K h‡'¡A+†ÜÜ+a+[ ›Ï¯›šÛa5@ïÉû"¤!ª,±ªaíE)#‡ÜKCFiÑ}x{”ıòè‘†‹šõœ%"^…*dzâÅ^ß³ôëÀfH¼ÑT#zä¥Vh#åKÕ—×´úwD²yd¥¦ ÉÀ‰Ì»pªZee(Šı^Q‚(2c¯Øã¸··Šÿjöóe´œØ**›µ!å>ŒWÉy¹fO=9…WŠÎ\~(Ü.Å Ä!ÊRR[êÁ>ıÌşj«jÑ%:Ær²AWë=Ÿl‚q`[*Ê,Ag¡¶ªÎMÄb÷ }£V„[Å/8ï{”Ü¡ºL“tlnì™©’8v˜vByÑÒÓù+u#dK]Ã?®DnX›K'²o¢ıè ®sL¨ÇÁ«^k±Ì&RsË‰q"ù† ‹÷‰#Sªxf:ÏŒòCõè´5	Ò­3eß£ ‡¾záŠmŸáp füÎÕô
r»¬˜mÏívÇ\TP,Ø† z"íúÂ^^úsÈ‰”X}R
¹—2#hşL*ú}
¦…úóYv©ÏMCW”1 ê,cK{M.EáW-p]Á"š³Ÿg¼(ŒKj¤ürÄ—U(——çëS™—ıëo4gt+¢=@È™ñnÖòƒìN¡dŸÆ5î¤;‡Q’àuM·]	«à$¦õà­÷¼ éVôÑëÔ:<jÖwºR[ÑïbäuĞÈé>± ˜uëô Ù·H„‚’¯şÓ{¯G:Ïyãè-LÙ ¡¯Š¿‰ÇŠf%i1[ã•'ºZÔ¾,ªv!Sıá~]9arÈ#Á;á·ñk=xĞ‘ù¡´ÙaöÑyˆ¹CæTW!™`è‡fÎpKõÕ¤±÷§p‹Ë0ó§o'·Ûì­Ø±¼*j°$6@¢‚öÓ7wJŠ'6Š§±«ŠÊÛ(=¢)­îÂıWÜÜVAæ£Qæ"Å‰•QYú WU§Hj9'
wdÚz.-BÅ¹ñûI«Æàî!ŠÚtŸîÖ­ªÃã‡€j‡H§»O.a«µkB¬´DÒ¿×ŸHjmã¹d.)Óöã.Œ©g.É »¯Å”ÌÎƒ“°dål;Ø²%N}v0;JzhüùvÄ¹®K1ğ*»øûF3L”yïøğé®H.ÒÆq¹X¼s= \>¯*Ù‘¬®÷±IãÜ‹=hÆw‹|ø˜cò„Æ÷…bÅ¹«@”¼ú–[œäiy°!¾Õ+ÖtnA†„ÆÅUP³a*0Bê‰hOÅjŠ0ı¾}V?*Å~Ñ¨óÃ}¼¢J'õ}>İ…ñ*QÓÔƒ'v)ò nÿ,MH|Æxtÿ«-Ğ©>®º/¹ÅŞµ´Ú‘ÈŸ°B5Iy7…÷g[
òˆ¥HËËİpëv2Ş4™´ë­óTºDFÚEy6—ƒè84À‡e–ğA‰Q	x\x‡Öş=bÑ®2®UÙóEöåÆ~·-í[®¶B‡	,~ôÅa÷Åv:øºm¾§¿"”Ïå3·'J[Éy)˜àÕ¸H
ü"AÙ*¶0 ñ­ñVÁ³©˜è}ºF}Øñ&µ–Vu¤Tàæ•Ã¡CĞòÇdäã3„ŸW_Ø­›]ÌNBäJñÄJu	´Ÿ%hbƒ0”$`?ÅjTâ%}×@ŸU»23çâ·&¾a.TE¥Æn6ÙÃ?Uéè»«+¦COıÁH™´"d›H¤j(/l’ëåÙÚÃ×Ñ.R§~X¯RĞfŸ»!k‡ê®9öØÓK›å…n§ÕœøßmWµán¡ô%]¼‚MşYKúH­Ígh„‰>hßš	'{¾İ‹ÊÜà·®”ndtÖdDÄ¬5ĞõĞZÖ4¨Ò‹‰É>×âHagrõŞŸ—ñãºE@Ñ^Ü`’õÑddµ®Ò¯4ÃÆ¡jq¶šòÇêN“—Éü¶ÃÚ–²ˆ?øÜûk×¶>.Ö¦»ĞÁ"Z:g“rî½ˆ…j'õ
åOI°KÁ^¿,“À[|¿)°øçÿË&ü!İOeâ¬ƒ·ŠŠ€_¬xîÆ­R ük9ê.  …d?¨.nDÀ‰{!;/¼ÀÌS‘ô À-TÛ3ü óğeA·qÖ•n"M­·Şï¤ !ß›àÎø_3yÊC!†*,KRşÃÅÉKeË)w)f‹e»Ùïª#gj@b"Ç
b†_¯¨éó İ\Ö	I»ÈNEXÿ‹írµÏ06¥)—Zô º:,0UI æ¿«»ú}œmaÀ‘â-{¢
ÏíÆövä2HÿŠÊËá¢¸Ùíëû<Ÿ.û+ßÄuæXO/ñ1ËÊs–§ëfY¦¿ã7İdW..‹È´³‚¯-ó©‹üØ‘)+qü)5yÛÊ= Ğ&(`n¶\]©ÿ†âØ@æàËüËö¼VÇú„ıæõŠEıD"NG6q3¦ô˜¼`·3¢˜IM*v¨Tg–şøÒì!6§È`mp§cíGÉT(ë®ÔmÒ	z-»IL6€Ö•ÃcSÁ áOkÑ®²rD²CD»!§îÏ=Á•·Ô¨O$$¾‘¡<Ûk>òÅÜº­ê­eKÑ|ašÄ›m»B¸·½(~%XÂÍèĞ¤ÒAxğO“İîÎlÁ`íï.UUì¯JXô:kI øn´SÃÍŞÍÇª%]~˜ 'çÔ—c}Úb(ïÎÔ¯l~ˆÍŞ_dÈÅa"Í¤Ôt4*§ª¹³‘½zv@MüØ¾—–®ĞÜE• ÙQ¢ëá&È(\ü35×7B`¥ePƒ¨û¿t«ÔĞt zÁÎ º×‚­ÔYn@00}’™»oÈ¥â3[ó¶†„{¨?©/ê	/í¨8gKéí‹¨º…ª2ôßÀlc Æa”6g89‡ˆ»›é…b>ÒÂÃ“~ğ†4VÍ<+Mø¤ (Û¨-zC ÜÛt3m=µ(’Ø4ØBüŸ¢lß$2°z/9_Ü—ĞbmDºpÉg:6ˆÕ¨ ÛŞfı¸h"Ğ€}Vî{8GWĞ ç¸Ì5ÓRõuà»öîîã¥Ş
1bªk [øÇ¹¬ìb$½	¥¼*¤M¯İôjÕÁ:â÷øYÊso‘é}"ªhÿ}.¿’£G ‘	»íês ã’Ï§öÎe!}®gÈd42BøeÄ9y/f4ÏÄÌÖoeQ'Øxâ
=­Qê?4¨m/—…ıD­´AÊ)‰ˆÃİ”ó=5GZ2ÊğQiˆÕ´¼6¦sÜ^oy½Ú¾7ç!HÓNn¥Äº®:[›Â¸ü`ö"ŸZ«Z
9š>’êÑ¡› í$™N™*¤cÔ]O#]úF:&Ëq÷êSa’nãöÙì"8ï×ıä¢,bì`g¿âåK:Úğ ìQ¦Çæ<ÃòX©…ìÉp¬?x›®&e¨LåZRB­1Ì¬*š&áœ!*#± r„•¦³-i³ÌxUã‰f§	l£æ DÔOgn–nÖ¨WÀRTH¦,ŒˆAÜ†×noL5½Àî
t´_[€Ô)•‰UB¸n„f^$èfFDjúØdE|!uşóóùn™ãÄ¬2j×E¯ºĞêE}¦À4)ƒ?‹s9Á2½¢¿¦Yõ“½ŸZËÚcíK©øt(€Y ¯%Ê$£Ê<ò7}P¡EP%q :öªË¯ÅÎA¤Şš‰æ?v½Is/-A~Â¯Va¸D»Îág¹—äb™¾‡êÓMÓXÿ‘ªæ€ì½û†¸ÇµÈ }É…1?kb8=C_šæoQ|úü‹åm©@áˆX	™ùã†şÈ×Îw-MtÀûKßMóÄl)ÅöãèÂrŸÙÃ#2m)h-PUoŞ2Ú„ˆœEÓ«¢BÀYÄå¯Jø&¢]ˆ»v§Ğ¤›m½¢Yk)í^§º¯8ñkW´Èo¦ã ¡>îm¥–‚[¶}w±Î¸¶pâ:ºPà•‰Âş?œÆ9u‡	—RÌÁ+ËnŒ°3­·åºuî<z…_C×1‘tÜ£`Şã]Ó‚.µ_ç'\*n>@åR²“>tşĞå«B!}Vñ$kø>"÷F½r®GíµáZ˜¾‘ãBUÁ¹PS;ğ²¼Ûpâ*Ó¦U‰"Zt­ôfíúA¤Õ/5”¥%¦úç˜ç¢|ìH¦œÍææóEìÓK\Y?“Ú‚®Éÿ_×ô¿cF#úÜğôo
dİbÒÒ¤÷—Ds•wh‹¸>l1?‰AÍiJ‘Z”³kEc‹Îß'^ãŸ6D\vb9ÊÈæÒVıß¿xâÜ¬X¸Ûh<Ù”zú[şøB`	Å2ñh„[|XÁ8íX.İ®«XĞqÉ·)o™¾ÓŸ^U¬w£<ïÏê7ZX¯ŸÙÚĞ©Çé†×¿az®¤ºƒkæXÃÊRÆÁŸñv<K«TÅf[´ë¼á,R‘¥d$3)¼ Ë“k´ˆE);Ë[ˆô#¶º$8°oßèÁ%[_ßF+#¨‚ñœŒ¢Ìx/ÍOwÍ€ú1length; j++) {
							content.push(delHtmlTag(textSubtitle[j]));
						}
					}
					// å­—å¹•å¯¹è±¡
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
			å…±ç”¨å‡½æ•°
			è®¡æ—¶å™¨,è¯¥å‡½æ•°æ¨¡æ‹Ÿas3ä¸­çš„timeråŸç†
			time:è®¡æ—¶æ—¶é—´,å•ä½:æ¯«ç§’
			fun:æ¥å—å‡½æ•°
			number:è¿è¡Œæ¬¡æ•°,ä¸è®¾ç½®åˆ™æ— é™è¿è¡Œ
		*/
		timer: function(time, fun, number) {
			var thisTemp = this;
			this.time = 10; //è¿è¡Œé—´éš”
			this.fun = null; //ç›‘å¬å‡½æ•°
			this.timeObj = null; //setIntervalå¯¹è±¡
			this.number = 0; //å·²è¿è¡Œæ¬¡æ•°
			this.numberTotal = null; //æ€»è‡³éœ€è¦æ¬¡æ•°
			this.runing = false; //å½“å‰çŠ¶æ€
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
			å…±ç”¨å‡½æ•°
			å°†æ—¶åˆ†ç§’è½¬æ¢æˆç§’
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
		/*å°†å­—ç¬¦å˜æˆæ•°å­—å½¢å¼çš„æ•°ç»„*/
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
			å…±ç”¨å‡½æ•°
			å°†å¯¹è±¡Objectæ ‡å‡†åŒ–
		*/
		standardization: function(o, n) { //næ›¿æ¢è¿›o
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
			å…±ç”¨å‡½æ•°
			æœç´¢æ•°ç»„
		 */
		arrIndexOf: function(arr, key) {
			var re = new RegExp(key, ['']);
			return (arr.toString().replace(re, 'â”¢').replace(/[^,â”¢]/g, '')).indexOf('â”¢');
		},
		/*
			å…±ç”¨å‡½æ•°
			å»æ‰ç©ºæ ¼
		 */
		trim: function(str) {
			if (str != '') {
				return str.replace(/(^\s*)|(\s*$)/g, '');
			}
			return '';
		},
		/*
			å…±ç”¨å‡½æ•°
			è¾“å‡ºå†…å®¹åˆ°æ§åˆ¶å°
		*/
		log: function(val) {
			try {
				console.log(val);
			} catch(e) {}
		},
		/*
			å…±ç”¨å‡½æ•°
			å¼¹å‡ºæç¤º
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