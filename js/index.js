$(function(){
	//h_t_r_shopCart动画
	var $h_m_r_s_hide=$(".h_m_r_s_hide");
	$(".h_t_r_shopCart").hover(function(){
		$h_m_r_s_hide.stop(true).slideDown();	
	},function(){
		$h_m_r_s_hide.stop(true).slideUp();
	})
	//w_n_serach 动画
	var $w_n_serach=$(".w_n_serach");
	var $w_n_s_hide=$(".w_n_s_hide");
	$(".w_n_s_input input").focus(function(){
		$w_n_serach.addClass("focus");
		$w_n_s_hide.fadeIn();	
	}).blur(function(){
		$w_n_serach.removeClass("focus");
		$w_n_s_hide.fadeOut();
		
	})
	//w_n_center动画
	var $w_n_c_hover=$(".w_n_c_hover");
	var $w_n_c_li=$(".w_n_center .w_n_c_li");
	var $w_n_c_h_m_ul=$(".w_n_c_hover .w_n_c_h_main ul");
	$(".w_n_center .w_n_c_li").hover(function(){
		var _index=$(this).index();
		$w_n_c_hover.stop(true).slideDown(300);
		$w_n_c_h_m_ul.eq(_index).show().siblings().hide();
	},function(){
		$w_n_c_hover.stop(true).slideUp(300);
	})
	$w_n_c_hover.hover(function(){
		$(this).stop(true).slideDown(300);
	},function(){
		$(this).stop(true).slideUp(300);
	});
	
	//轮播图动画
	var $b_s_tabs_li=$(".b_s_tabs li");
	var $b_m_pic_li=$(".b_s_picture li");
	var $b_s_prev=$(".b_s_prev");
	var $b_s_next=$(".b_s_next");
	var $b_m_pic_li_len=$b_m_pic_li.length;
	var $b_show=$(".b_show");
	var banner_index=0;
	var timer=null//定时器
	autoPlay();
	$b_s_tabs_li.hover(function(){
		$(this).addClass("b_s_t_hover");
	},function(){
		$(this).removeClass("b_s_t_hover");
	}).click(function(){
		banner_index=$(this).index();
		bannerPlay();
	});
	$b_s_prev.click(function(){
		banner_index--;
		if(banner_index<0){
			banner_index=$b_m_pic_li_len-1;
		}
		bannerPlay();
		
	});
	$b_s_next.click(function(){
		banner_index++;
		if(banner_index >= $b_m_pic_li_len){
			banner_index=0;		
		}
		bannerPlay();
	})
	
	$b_show.hover(function(){
		clearInterval(timer);
	},function(){
		autoPlay();
	})
	function bannerPlay(){
		$b_m_pic_li.eq(banner_index).fadeIn().siblings().fadeOut();
		$b_s_tabs_li.eq(banner_index).addClass("b_s_t_hover").siblings().removeClass("b_s_t_hover");
	}
	
	function autoPlay(){
		timer=setInterval(function(){
			banner_index++;
			if(banner_index>=$b_m_pic_li_len){
				banner_index=0;
			}
			bannerPlay();
		},2000)
	}
	
	
	//左侧二级导航
	var $b_nav_li = $(".b_nav>ul>li");
	$b_nav_li.hover(function(){
		$(this).find(".b_n_hide").show();
	},function(){
		$(this).find(".b_n_hide").hide();
	})
})

