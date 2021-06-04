var defTime = 60 * 10, display = document.querySelector('#time');

var startTimer = (function(duration, display) {
    var running = false;
    return function(duration, display) {
        if (!running) {
            running = true;
            var timer = duration, min, sec;
            var time = setInterval(function () {
                min = parseInt(timer / 60, 10);
                sec = parseInt(timer % 60, 10);

                min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;

                display.textContent = min + ":" + sec;

                if (--timer < 0) {
                    timer = duration;
                }

                if (min == 0 && sec == 0) {
                    display.textContent = "00:00";
                    clearInterval(time);
                }
            }, 1000);
        }
    };
})();


function openPopup() {
    $.fancybox.open({
        closeExisting: true,
        src: '#exit-popup',
        clickSlide: false
    });
}

function popupTrigger() {
    Bounceback.init({
        aggressive: !0, storeName: "bounceback-science", maxDisplay: 0, onBounce: function () {
            if ($.fancybox.getInstance() === false) {
                if(document.body.classList.contains("timer")){
                    startTimer(defTime, display);
                    openPopup();
                }
                else {
                    openPopup();
                }
            }
        }
    });
}


popupTrigger();