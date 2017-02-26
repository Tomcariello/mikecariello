$( document ).ready(function() {
    console.log('loaded');
   $('#myCarousel').carousel({
        interval: 5000,
        pause: "false"
    });
    $('#playButton').click(function () {
        // console.log("Play button clicked");
        $('#myCarousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        // console.log("Pause button clicked");
        $('#myCarousel').carousel('pause');
    });

    //Handle Image Gallery Modals
     $('.modalTrigger').click(function(target){
        target.preventDefault();
        // var targetID = $(this).data('id');
        var imgTitle = $(this).attr('alt');
        var imgSource = $(this).attr('src');
        var selectedImage = "<img src='" + imgSource + "''>";
        $('#modal-7 .modal-title').html(imgTitle);
        $('#modal-7 .modal-body').html(selectedImage);
        $('#modal-7').modal('show', {backdrop: 'static'});
     });
});