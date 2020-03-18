/*A simple script that adds photos to the page.*/
$(document).ready(function() {
    $('.gallery_content').append('<div class="row">');
    /*Add picture from folder in img folder. Max 50 picture. To increase the number of photos, change the number in the for. */
    for (i = 1; i < 50; i++) {
        $('.gallery_content').append('<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 gallery_product filter motorization"><a href="img/motorization/' + i + '.jpg" data-lightbox="image-1"><img src="img/motorization/' + i + '.jpg" class="img-responsive"></a></div>');
        $('.gallery_content').append('<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 gallery_product  filter culinary"><a href="img/culinary/' + i + '.jpg" data-lightbox="image-1"><img src="img/culinary/' + i + '.jpg" class="img-responsive"></a></div>');
        $('.gallery_content').append('<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 gallery_product  filter sport"><a href="img/sport/' + i + '.jpg" data-lightbox="image-1"><img src="img/sport/' + i + '.jpg" class="img-responsive"></a></div>');
        $('.gallery_content').append('<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 gallery_product  filter nature"><a href="img/nature/' + i + '.jpg" data-lightbox="image-1"><img src="img/nature/' + i + '.jpg" class="img-responsive"></a></div>');
    }
	
    $('.gallery_content').append('</div>');
    $('.gallery_content').show();
    
    /*Removes empty spaces. If the photo could not be loaded, do not show this item on the page. */
    $("img").on("error", function() {
        $(this).parent().parent().remove();
    });
});