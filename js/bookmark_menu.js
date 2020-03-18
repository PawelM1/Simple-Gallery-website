/*Script that shows selected photos. Additionally added animations from Jquerry.*/
$(document).ready(function () {
	$(".filter-button").click(function () {
		var value = $(this).attr('data-filter'); /* value = all or motorization or sport or nature ... */

		/*if value = all show all */
		if (value == "all") {
			$('.filter').show('1000');
			$(".filter").children().removeAttr("data-lightbox")
			$('.filter').children().attr("data-lightbox", "image-1");

		/*else show only choosen picture */
		} else {
			$(".filter").not('.' + value).hide('3000');
			$(".filter").not('.' + value).children().removeAttr("data-lightbox")
			$('.filter').filter('.' + value).show('3000');
			$('.filter').filter('.' + value).children().attr("data-lightbox", "image-1");
		}
	});
});