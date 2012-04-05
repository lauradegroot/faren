$(document).ready(function(){
		
		$("div#holder p").click(function () {
			$("div.season").css("display","none");
			$("div#" + $(this).attr('data-ref')).css("display","block");
		});
});
