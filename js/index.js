$(function(){
	//h_t_r_shopCart动画
	$(".h_t_r_shopCart").hover(function(){
		$(".h_m_r_s_hide").stop(true).slideDown();	
	},function(){
		$(".h_m_r_s_hide").stop(true).slideUp();
	})
	//w_n_serach 动画
	$(".w_n_s_input input").focus(function(){
		$(".w_n_serach").addClass("focus");
		$(".w_n_s_hide").fadeIn();	
	}).blur(function(){
		$(".w_n_serach").removeClass("focus");
		$(".w_n_s_hide").fadeOut();
		
	})
})
