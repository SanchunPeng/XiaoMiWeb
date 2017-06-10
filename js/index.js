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
})
