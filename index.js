$(document).ready(function() {
	$("#bg1").click(function() {
		$(this).addClass('bg_on');
		$("#bg2, #bg3, #bg4").removeClass('bg_on');

		$("#bg1_p").addClass('p_on');
		$("#bg2_p, #bg3_p, #bg4_p").removeClass('p_on');

		$("#bgc1").addClass('bgc_on');
		$("#bgc2, #bgc3, #bgc4").removeClass('bgc_on');		

		$("body").addClass('body_color_home');
		$("body").removeClass('body_color_like');	
		$("body").removeClass('body_color_search');	
		$("body").removeClass('body_color_profile');

		$(".container").addClass('container_shadow_home');
		$(".container").removeClass('container_shadow_like');
		$(".container").removeClass('container_shadow_search');
		$(".container").removeClass('container_shadow_profile');

		$("#bg1 img").addClass('img_color');
		$("#bg2 img").removeClass('img_color');
		$("#bg3 img").removeClass('img_color');
		$("#bg4 img").removeClass('img_color');


	});
	$("#bg2").click(function() {
		$(this).addClass('bg_on');
		$("#bg1, #bg3, #bg4").removeClass('bg_on');

		$("#bg2_p").addClass('p_on');
		$("#bg1_p, #bg3_p, #bg4_p").removeClass('p_on');

		$("#bgc2").addClass('bgc_on');
		$("#bgc1, #bgc3, #bgc4").removeClass('bgc_on');		

		$("body").removeClass('body_color_home');
		$("body").addClass('body_color_like');	
		$("body").removeClass('body_color_search');	
		$("body").removeClass('body_color_profile');

		$(".container").removeClass('container_shadow_home');
		$(".container").addClass('container_shadow_like');
		$(".container").removeClass('container_shadow_search');
		$(".container").removeClass('container_shadow_profile');

		$("#bg1 img").removeClass('img_color');
		$("#bg2 img").addClass('img_color');
		$("#bg3 img").removeClass('img_color');
		$("#bg4 img").removeClass('img_color');		
	});
	$("#bg3").click(function() {
		$(this).addClass('bg_on');
		$("#bg2, #bg1, #bg4").removeClass('bg_on');

		$("#bg3_p").addClass('p_on');
		$("#bg2_p, #bg1_p, #bg4_p").removeClass('p_on');

		$("#bgc3").addClass('bgc_on');
		$("#bgc2, #bgc1, #bgc4").removeClass('bgc_on');	

		$("body").removeClass('body_color_home');
		$("body").removeClass('body_color_like');	
		$("body").addClass('body_color_search');	
		$("body").removeClass('body_color_profile');

		$(".container").removeClass('container_shadow_home');
		$(".container").removeClass('container_shadow_like');
		$(".container").addClass('container_shadow_search');
		$(".container").removeClass('container_shadow_profile');

		$("#bg1 img").removeClass('img_color');
		$("#bg2 img").removeClass('img_color');
		$("#bg3 img").addClass('img_color');
		$("#bg4 img").removeClass('img_color');			
	});
	$("#bg4").click(function() {
		$(this).addClass('bg_on');
		$("#bg2, #bg3, #bg1").removeClass('bg_on');

		$("#bg4_p").addClass('p_on');
		$("#bg2_p, #bg3_p, #bg1_p").removeClass('p_on');

		$("#bgc4").addClass('bgc_on');
		$("#bgc2, #bgc3, #bgc1").removeClass('bgc_on');		

		$("body").removeClass('body_color_home');
		$("body").removeClass('body_color_like');	
		$("body").removeClass('body_color_search');	
		$("body").addClass('body_color_profile');

		$(".container").removeClass('container_shadow_home');
		$(".container").removeClass('container_shadow_like');
		$(".container").removeClass('container_shadow_search');
		$(".container").addClass('container_shadow_profile');

		$("#bg1 img").removeClass('img_color');
		$("#bg2 img").removeClass('img_color');
		$("#bg3 img").removeClass('img_color');
		$("#bg4 img").addClass('img_color');				
	});		
});