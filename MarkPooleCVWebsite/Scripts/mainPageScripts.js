function resizeProfile() {
	$(window).resize(function () {
                    var bodyheight = $(window).height();
                    $("#profile").css({
                        'top': bodyheight + 'px'
                    });
                }).resize();
};

function resizeMainBody() {
	$(window).resize(function () {
                    var bodyHeight = $(window).height() + $('#profile').height();
                    $('#mainBody').css({
                        'top': bodyHeight + 'px'
                    });
                }).resize();
};

function resizeMainBodyWCLInfo() {
	$(window).resize(function () {
                    var totalHeight = $('#WLCInfo').height();
                    $('#WestLothianCollege').css({
                        'height': totalHeight + 'px'
                    });
                }).resize();
};

function sidebarWrapper() {
 	var navBarWidth = $("#sidebar-wrapper").width();
                $("#page-wrap").css({
                    'left': navBarWidth + 'px'
                })

                $(window).resize(function () {
                    $("#page-wrap").css({
                        'left': navBarWidth + 'px'
                    })
                }).resize();
};

function resizeLineBreak () {
	$(window).resize(function () {
                    var totalHeight = $('#WLCInfo').height();
                    $('#lineBreakAfterWLC').css({
                        'height': totalHeight + 40 + 'px'
                    });
                }).resize();
};

function resizeExperience() {
	$(window).resize(function () {
                    var bodyHeight = $(window).height() + $('#profile').height() + $('#mainBody').height();
                    $('#experience').css({
                        'top': bodyHeight + 'px'
                    });
                }).resize();
};

function smoothScroll() {
 	$('a').click(function () {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
                return false;
            });
};


function backToTopButton() {
    var bodyheight = $(window).height();

    if ( ($(window).height() + 100) < $(document).height() ) {
        $('#top-link-block').removeClass('hidden').affix({
            // how far to scroll down before link "slides" into view
            offset: {top:100}
        });
    }
};