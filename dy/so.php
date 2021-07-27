<?php 
include './include/class.main.php'; 
include './save/config.php'; 
$skin=array(
    'color'=>'#50b2c8',  //皮肤主色
    'input_border'=>'#6599aa',  //搜索边框颜色
    'input_color'=>'white',  //搜索文本颜色
);
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="renderer" content="webkit"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <script type="text/javascript" src="./include/jquery.min.js"></script>
        <script type="text/javascript"  src="./include/class.main.js" ></script>
        <link href="./include/jquery.autocomplete.css" rel="stylesheet">
        <script src="./include/fundebug.2.0.0.min.js" apikey="9845312071255b74860e62474d659ba64129cc7f05110d60a77c3bdd4f425244"></script>  <!--  用于BUG收集，请勿删除 -->
        <script type="text/javascript" src="./include/jquery.autocomplete.js?ver=1.2"></script>
		
		<!--  打赏CCS，请勿删除 --><script type="text/javascript" src="./include/jquery1.min.js"></script>
		
        <title> 省心资源-智能影视</title>
<style>

html,body{
overflow:auto !important;  
width:100%;
height: 100%; 
margin: 0;
padding: 0;

}
body{
   text-align: center;
  background: #0f3854;
  background: -webkit-radial-gradient(center ellipse, #0a2e38 0%, #000000 70%);
  background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
  background-size: 100%;
}

p {
  margin: 0;
  padding: 0;
}

#clock {
  font-family: 'Share Tech Mono', monospace;
  color: #ffffff;
  text-align: center;
  color: #daf6ff;

 /* text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0); */
}
#clock .time {
  letter-spacing: 0.05em;
  font-size: 60px;
  padding: 5px 0;
}
#clock .date {
  letter-spacing: 0.1em;
  font-size: 15px;
}
#clock .text {
  letter-spacing: 0.1em;
  font-size: 12px;
  padding: 20px 0 0;
}

#word{
background: #fff;
color: #000;
max-height:170px;
overflow-y:auto;
overflow-x:hidden;
}


h1{ color:red;}
h2{color:green;}
h3{color:#a7e9c3}
h4{color:blue;font-size:50px}

*{ box-sizing: border-box;}
		
 div.search {padding: 5px 0;}	
        form {
            position: relative;
            width: 300px;
            margin: 0 auto;
        }

        input, button {
            border: none;
            outline: none;
            color:<?php echo $skin["input_color"]; ?>;
        }
        input {
            width: 100%;
            height: 42px;
            padding-left: 13px;
        }

        button {
            height: 42px;
            width: 42px;
            cursor: pointer;
            position: absolute;
        }

       /*搜索框6*/
        .bar6 input {
            background: transparent;
            border-radius:3px;
            border:2px solid <?php echo $skin["input_border"]; ?> ;
            top: 0;
            right: 0;
        }
        .bar6 button {
            background:<?php echo $skin["input_border"]; ?>;
            border-radius: 0 5px 5px 0;
            width: 60px;
            top: 0;
            right: 0;
        }
        .bar6 button:before {
            content: "播放";
            font-size: 13px;
            color: <?php echo $skin["input_color"] ?>;
        }
 
    /* 搜索内容样式 */    
   .list_btn{
     display: inline-block; 
     text-decoration: inherit;

    /* 内外边距及宽高属性 */
     margin: 1%;  padding: 5px;
     height: 30px;
     min-width:31%;
     max-width:95%;

     /* 文字及边框属性 */
     color:<?php echo $skin["color"]; ?>;
     font-size:13px;
     border-radius: 5px; 
     border: 2px solid <?php echo $skin["color"]; ?>; 
     
    /* 文字剪裁 */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap !important;
    outline: 0 !important
    
  } 
    /*  移动设备自适应宽高  */  
    @media screen and (max-width: 650px){.list_btn{min-width:95%;}} 
      
    /*清除浮动代码*/
   .clearfloat{clear:both} 

  .resou{
        padding-top: 15px;
   }
  .resou a{
      color:<?php echo $skin["color"] ?>;
      padding: 5px;
      text-decoration:none; 
  }
 
  a{text-decoration:none;}
  
  
  
  <!-- 打赏CCS  -->
 .content{width:80%;margin:10px auto;}
        .hide_box{z-index:999;filter:alpha(opacity=50);background:#666;opacity: 0.5;-moz-opacity: 0.5;left:0;top:0;height:99%;width:100%;position:fixed;display:none;}
        .shang_box{width:540px;height:540px;padding:10px;background-color:#fff;border-radius:10px;position:fixed;z-index:1000;left:50%;top:50%;margin-left:-280px;margin-top:-280px;border:1px dotted #dedede;display:none;}
        .shang_box img{border:none;border-width:0;}
        .dashang{display:block;width:100px;margin:5px auto;height:35px;line-height:15px;padding:10px;background-color:#E74851;color:#fff;text-align:center;text-decoration:none;border-radius:10px;font-weight:bold;font-size:16px;transition: all 0.3s;}
        .dashang:hover{opacity:0.8;padding:15px;font-size:18px;}
        .shang_close{float:right;display:inline-block;}
                .shang_logo{display:block;text-align:center;margin:20px auto;}
        .shang_tit{width: 100%;height: 75px;text-align: center;line-height: 66px;color: #a3a3a3;font-size: 16px;background: url('/dsimg/cy-reward-title-bg.jpg');font-family: 'Microsoft YaHei';margin-top: 7px;margin-right:2px;}
        .shang_tit p{color:#a3a3a3;text-align:center;font-size:16px;}
        .shang_payimg{width:165px;padding:10px;border:6px solid #EA5F00;margin:0 auto;border-radius:3px;height:165px;}
        .shang_payimg img{display:block;text-align:center;width:130px;height:130px ; }
        .pay_explain{text-align:center;margin:10px auto;font-size:12px;color:#545454;}
        .radiobox{width: 16px;height: 16px;background: url('http://shineshen.cn/dy/source/images/radio2.jpg');display: block;float: left;margin-top: 5px;margin-right: 14px;}
        .checked .radiobox{background:url('http://shineshen.cn/dy/source/images/radio1.jpg');}
        .shang_payselect{text-align:center;margin:0 auto;margin-top:40px;cursor:pointer;height:60px;width:280px;}
        .shang_payselect .pay_item{display:inline-block;margin-right:10px;float:left;}
        .shang_info{clear:both;}
		.shang_info p,.shang_info a{color:#C3C3C3;text-align:center;font-size:12px;text-decoration:none;line-height:2em;}  
  
</style>

  


</head>
<body>
<div id="clock">
<div id="main"></div>
<div class="clearfloat"></div>
<p class="date"></p>
<p class="time" id="time">00:00:00</p>
<p class="text" id="text">2018-08-08 星期一</p><br>
<div class="search bar6">
<form action="./" method="get" >
<input id="wd"  type="text" name="v"  placeholder="请输入视频链接或名称" >
<button type="submit"></button> 
<div id="word"  ></div>
</form>
 <div class="resou" >
    <font face="verdana" style="color:<?php echo $skin["color"] ?>;"> 热门搜索：</font>
    <?php $arror = explode("|", $CONFIG["resou"]); foreach ($arror  as $key => $val): ?>
    <a href="./?v=<?php echo $val; ?>"><?php echo $val; ?></a>
   <?php endforeach; ?>

 </div> 
    
    
<div>    
<br/>
<font face="verdana" style="color:<?php echo $skin["color"] ?>;">视频支持：优酷、爱奇艺、腾讯、芒果、乐视、搜狐、MP4、M3U8、FLV等等</font><br/><br/>
<font face="verdana" style="color:<?php echo $skin["color"] ?>;"> 专属播放地址：</font> <a style="color:<?php echo $skin["color"] ?>;" target="_top" href="./?v=https://v.qq.com/x/cover/brq7blajvjhrcit.html"><?php echo $CONFIG["ROOT_PATH"]? $CONFIG["ROOT_PATH"]:GlobalBase::is_root()?>?v=</a> [后面加上视频地址]
<br/><br/>
  
<!--  版本信息 
 <font face="verdana" style="color:<?php echo $skin["color"] ?>;"><?php echo $CONFIG["play"]["all"]["ver"]; ?></font>
 <br/> <br/>
 
 -->
 
</div>
 
</div>
<span id="sitetime"> </span><br><br>
<div  id="footer" ></div>
   <!---打赏码开始 -->

<div class="content">
    <p><a href="javascript:void(0)" onclick="dashangToggle()" class="dashang" title="打赏，支持一下">打赏</a></p>
    <div class="hide_box"></div>
    <div class="shang_box">
    	<a class="shang_close" href="javascript:void(0)" onclick="dashangToggle()" title="关闭"><img src="http://shineshen.cn/dy/source/images/close.jpg" alt="取消" /></a>
       
    	<div class="shang_tit">
    		<p>感谢您的支持，我会继续努力的!</p>
    	</div>
    	<div class="shang_payimg">
    		<img src="http://shineshen.cn/dy/source/images/alipayimg.png" alt="扫码支持" title="扫一扫" />
    	</div>
    		<div class="pay_explain">扫码打赏，你说多少就多少</div>
    	<div class="shang_payselect">
    		<div class="pay_item checked" data-id="alipay">
	    		<span class="radiobox"></span>
	    		<span class="pay_logo"><img src="http://shineshen.cn/dy/source/images/alipay.jpg" alt="支付宝" /></span>
    		</div>
    		<div class="pay_item" data-id="weipay">
	    		<span class="radiobox"></span>
	    		<span class="pay_logo"><img src="http://shineshen.cn/dy/source/images/wechat.jpg" alt="微信" /></span>
    		</div>
    	</div>
    	<div class="shang_info">
    		<p>打开<span id="shang_pay_txt">支付宝</span>扫一扫，即可进行扫码打赏哦</p>
    		<p>Powered by <a href="http://shineshen.cn" target="_blank" title="省心资源">ShineShen.Cn</a>，有的不仅是技术，还有资源！！！</p>
    	</div>
    </div>
    </div>
    <script type="text/javascript">
    $(function(){
    	$(".pay_item").click(function(){
    		$(this).addClass('checked').siblings('.pay_item').removeClass('checked');
    		var dataid=$(this).attr('data-id');
    		$(".shang_payimg img").attr("src","http://shineshen.cn/dy/source/images/"+dataid+"img.png");
    		$("#shang_pay_txt").text(dataid=="alipay"?"支付宝":"微信");
    	});
    });
    function dashangToggle(){
    	$(".hide_box").fadeToggle();
    	$(".shang_box").fadeToggle();
    }
    </script> 
	
	   <!---打赏码结束 -->

</div>

	
	
<script>
var week = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var timerID = setInterval(updateTime, 1000);
var sitetime="<?php echo $CONFIG["sitetime"];?>";
updateTime();
function updateTime() {
    var cd = new Date();
    $('#time').text(zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2));
    $('#text').text(zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()]);
    SiteTime(sitetime);
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}
//网站运行时间
function SiteTime(time){
var seconds =1000;
var minutes = seconds *60;
var hours = minutes *60;
var days = hours *24;
var years = days *365;
var dateBegin = new Date(time.replace(/-/g, "/"));//将-转化为/，使用new Date
var dateEnd = new Date();//获取当前时间
var diff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数;
var diffYears =Math.floor(diff/years);
var diffDays =Math.floor((diff/days)-diffYears*365);
var diffHours =Math.floor((diff-(diffYears*365+diffDays)*days)/hours);
var diffMinutes =Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours)/minutes);
var diffSeconds =Math.floor((diff-(diffYears*365+diffDays)*days-diffHours*hours-diffMinutes*minutes)/seconds);
document.getElementById("sitetime").innerHTML=" 已运行"+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒"; 
}

</script>

<script>
updateInfo();
function updateInfo() {
var wd= _GET("wd");
var url= _GET("url");
if(wd==="" && url==="" ){
//w="...请输入视频地址...  ";
w='<br><br>...<font size="4" color="<?php echo $skin["color"] ?>">视频地址</font><font color="<?php echo $skin["color"] ?>">不能为空</font>...';

$(".date").html(w);
}
if(wd!=="")
 {     
    var xyplay=parent.xyplay;
    if("undefined" !== typeof xyplay )   
    {
         if(xyplay.data.success)
        {   	 
	     var v=xyplay.data.info;    
	     var w = "<br><br><div style='text-align:center;'><h3>搜索到相关视频" + v.length + "个，请点击访问</h3>";
             for (i = 0, len = v.length; i < len; i++) 
		  {
		     var href="./?flag=" + v[i].flag+"&type=" +v[i].type + "&id=" + v[i].id + "&wd=" +v[i].title;
                     var title=removeHTMLTag(decodeURIComponent(v[i].title),true)+"(" +(v[i].from)+")";
		     w+= "<a  class='list_btn' target='_parent' href='" +href +"' title='"+ title+"' ><strong>" + title + "</strong></a>";
                  }
             w+=  "</div>";
             
       }else{     
	       toggleCenter(false);	   	   
	       var w='<h3 >很抱歉，未搜索到相关资源</h3>';     
		$("#info").html('请修改影片名后重新搜索');
     	
        }      
         $("#main").html(w);
		 
    }
}
       w="<?php echo $CONFIG["play"]["all"]["by"]; ?>";

       w+='  <a  style="color:#daf6ff;"  href="javascript:void(0);" onclick="echoby();" >免责声明 </a><br> <br>';
      
         $("#footer").html(w);
         toggleCenter();
	   
}

    function echoby() {
        
       alert("本站所有视频均来自外部引用，本站不存储不制作任何视频！\r\n 如有侵权问题，请与站长联系,谢谢合作！ \r\n MailTo: shine1916@163.com");
        
    }     

 function toggleCenter() {

  if($("#main").height() + $("#clock").height()>$(window).height()){
   
      $("#clock").css("position","static");
  
  }else{
  
     $("#clock").css("position","absolute");$("#clock").css("top",($(window).height() -$("#clock").height())/2-20);
  
  }
  	
   if($(window).width()<=$("#clock").width()){$("#clock").css("left",0);}else{ $("#clock").css("left",($(window).width()-$("#clock").width())/2);} 
	
}

 $(window).resize(function(){ toggleCenter();}); 

</script>
<script>
(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
</script>
<script language="javascript" type="text/javascript" src="http://js.users.51.la/18759442.js"></script>



</body>
 
</html>
