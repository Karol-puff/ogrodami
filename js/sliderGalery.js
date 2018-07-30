function setSizes() {
    var galery = $('#sliderGalery');
    
    if (true) {
        $('#pcDevicePanel').append(galery);
        $('#pcDevicePanel').css('height', $('#image1').css('height') ? $('#image1').css('height') : $('#image2').css('height'));
        $('#fh5co-header').css('height', $('#pcDevicePanel').css('height'));
        galery.css('height', '100%');
    }
}

window.onload = function() {
    setSizes();
}