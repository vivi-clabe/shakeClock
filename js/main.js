$(function(){
	$(window).resize(function(){
		if ($(window).width()<320||$(window).width()==320){
			$('html').css("font-size",($(this).width()-320)*0.195+62.5+"%");
		}else{
			$('html').css("font-size",($(this).width()-375)*0.166+62.5+"%");
		}
	});//字体大小

     var intDiff = parseInt(60);//倒计时总秒数量
        function timer(intDiff){

            window.setInterval(function(){
                var day=0,
                    hour=0,
                    minute=0,
                    second=0;//时间默认值
                if(intDiff > 0){
                    day = Math.floor(intDiff / (60 * 60 * 24));
                    hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
                    minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
                    second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
                }
                if (minute <= 9) minute = '0' + minute;
                if (second <= 9) second = '0' + second;

                if(second<=10){
                    shake($('.s'));
                    shake($('#hand-icon img'));
                    if(second==0){
                        //$('.s').removeClass('shake-constant');
                       //$('.timeout').html("本轮红包已抢完,敬请期待下一波~");
                    }
                }
                $('.m').html(minute);
                $('.s').html(second);
                intDiff--;
            }, 1000);
        }
    $(function(){
        timer(intDiff);
    });

    function shake(t) {
        t.addClass('shake-constant');
        setTimeout(function() {
            t.removeClass('shake-constant');
        }, 470)
    }
})
