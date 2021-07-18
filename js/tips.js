// JavaScript Document
(function($){
	$.fn.extend({
		"tips":function(value){
			
			var docthis = this;
			//默认参数
			value=$.extend({
				 "child_height":"40",
				 "time":3000,
				 "movetime":1000
			},value)
			
			//向上滑动动画
			function autoani(){
				$("div:first",docthis).animate({"margin-top":-value.child_height},value.movetime,function(){
					$(this).css("margin-top",0).appendTo(".tips");
				})
			}
			
			//自动间隔时间向上滑动
			var anifun = setInterval(autoani,value.time);
			
			//悬停时停止滑动，离开时继续执行
			$(docthis).children("div").hover(function(){
				clearInterval(anifun);			//清除自动滑动动画
			},function(){
				anifun = setInterval(autoani,value.time);	//继续执行动画
			})
		}	
	})
})(jQuery)
