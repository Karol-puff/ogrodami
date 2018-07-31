function getScreenHeight() {
    return window.screen.availHeight;
}

function checkIsMobile() {
    try {
        var height = window.screen.availHeight;
        var width = window.screen.availWidth;
    
        var hipoScreen = Math.sqrt(Math.pow(height, 2) + Math.pow(width, 2));
    
        return (hipoScreen <= 1024);
    } catch (ex) {
        return true;
    }
}

function setSizes() {
    var galery = $('#sliderGalery');
    
    if (!checkIsMobile()) {
        $('#pcDevicePanel').append(galery);
        if ($('#image1').css('height') != '0px') {
            $('#image1').css('height', getScreenHeight().toString() + 'px');
        }
        if ($('#image2').css('height') != '0px') {
            $('#image2').css('height', getScreenHeight().toString() + 'px');
        }
        $('#pcDevicePanel').css('height', $('#image1').css('height') ? $('#image1').css('height') : $('#image2').css('height'));
        $('#fh5co-header').css('height', $('#pcDevicePanel').css('height'));
        galery.css('height', '100%');
    } else {
        $('#pcDevicePanel').append(galery);
        $('#pcDevicePanel').css('height', $('#image1').css('height') ? $('#image1').css('height') : $('#image2').css('height'));
        $('#fh5co-header').css('height', $('#pcDevicePanel').css('height'));
        galery.css('height', '100%');
    }
}

window.onload = function() {
    setSizes();
}

window.onresize = function() {
    setSizes();
}