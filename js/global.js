$(function () {

})



var browserWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;


function autoScrolling() {

    $('#dowebok').fullpage({
        navigation: true,                             //圆点导航
        navigationPosition: 'right',                        　//圆点导航位置left or right
        afterLoad: function (origin, destination, direction) {

            if (destination.index == 1) {
                $('.idxTec').find('.idxTitle').addClass("zoomIn animated").removeClass("zoomOut")
                $('.idxTec').find('.idxTitleCn').addClass("zoomIn animated").removeClass("zoomOut")
                $('.idxTec').find('.idxTecView').addClass("fadeInUp animated").removeClass("fadeOutUp")
            }
            if (destination.index == 2) {

                $('.idxPro').find('.ani').addClass("fadeInUp animated").removeClass("fadeOutUp")

            }
            if (destination.index == 3) {
                $('.idxCore').find('.idxTitle').addClass("zoomIn animated").removeClass("zoomOut")
                $('.idxCore').find('.idxTitleCn').addClass("zoomIn animated").removeClass("zoomOut")
                $('.idxCore').find('.idxCoreTxt').addClass("fadeInUp animated").removeClass("fadeOutUp")
                $('.idxCore').find('.idxCoreLine').addClass("fadeInUp animated").removeClass("fadeOutUp")
                $('.idxCore').find('.idxCoreList').addClass("fadeInUp animated").removeClass("fadeOutUp")
            }
            if (destination.index == 4) {

            }

        },
        onLeave: function (origin, destination, direction) {
            if (origin.index == 1) {
                $('.idxTec').find('.idxTitle').removeClass('zoomIn').addClass("zoomOut")
                $('.idxTec').find('.idxTitleCn').removeClass('zoomIn').addClass("zoomOut")
                $('.idxTec').find('.idxTecView').removeClass('fadeInUp').addClass("fadeOutUp")
            }
            if (origin.index == 2) {
                $('.idxPro').find('.ani').removeClass('fadeInUp').addClass("fadeOutUp")
            }
            if (origin.index == 3) {
                $('.idxCore').find('.idxTitle').removeClass('zoomIn').addClass("zoomOut")
                $('.idxCore').find('.idxTitleCn').removeClass('zoomIn').addClass("zoomOut")
                $('.idxCore').find('.idxCoreTxt').removeClass('fadeInUp').addClass("fadeOutUp")
                $('.idxCore').find('.idxCoreLine').removeClass('fadeInUp').addClass("fadeOutUp")
                $('.idxCore').find('.idxCoreList').removeClass('fadeInUp').addClass("fadeOutUp")
            }
            if (origin.index == 4) {
                $('.idxab').find('.idxTitle').removeClass('zoomIn').addClass("zoomOut")
                $('.idxab').find('.idxTitleCn').removeClass('zoomIn').addClass("zoomOut")
                $('.idxab').find('.idxabCon').removeClass('fadeInLeft').css("opacity", "0")
                $('.idxab').find('.idxabPic').removeClass('fadeInRight').css("opacity", "0")
                $('.idxab').find('.idxNumView').removeClass('fadeInUp').addClass("fadeOutUp")
            }


        }

    });
}
