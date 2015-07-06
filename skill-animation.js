	$('.progress.progress-bar').each(function (i) {
		$(this).appear(function () {
			$(this).animate({
				opacity: 1,
				left: "0px"
			}, 1200);
			var b = $(this).find(".wrapper span").attr("data-width");
			$(this).find("span").animate({
				width: b + "%"
			}, 1700, "swing");
		});
	});
