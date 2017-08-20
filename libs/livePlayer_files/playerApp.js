// namespace:
this.playerApp = this.playerApp || {};

(function() {
    "use strict";

    playerApp.type = "SW"; // SW  or  HLS

    var isAndroid = /Android/i.test(navigator.userAgent);
    var isIphone = /iphone/i.test(navigator.userAgent);
    var isChrome = /chrome\//i.test(navigator.userAgent);
    var isMobileDevice = function() {
        if (navigator === undefined || navigator.userAgent === undefined) {
            return true;
        }
        var s = navigator.userAgent;
        if (s.match(/iPhone/i) || s.match(/iPad/i) || s.match(/iPod/i) || s.match(/webOS/i) || s.match(/BlackBerry/i) || (s.match(/Windows/i) && s.match(/Phone/i)) || (s.match(/Android/i) && s.match(/Mobile/i))) {
            return true;
        }
        return false;
    }

    playerApp.init = function(videoUrl, divID) {
        document.addEventListener('touchmove', function(event) {
            event.preventDefault();
        }, false);

        playerApp.videoUrl = videoUrl;
        playerApp.divID = divID;

        if (isMobileDevice()) {
            initSewisePlayer();
        } else {
            initHLSPlayer()
        }

        var video = document.getElementById(playerApp.divID).getElementsByTagName("video")[0];
        video.setAttribute("x5-video-player-type","h5");
        video.setAttribute("x5-video-player-fullscreen","true");
        video.setAttribute("webkit-playsinline","true");
        video.setAttribute("playsinline","true");
        video.setAttribute("x-webkit-airplay","true");
        video.setAttribute("style","width:100%");
    }


    playerApp.doplay = function() {
        console.log("Swplayer doplay:"+playerApp.type);

        if (playerApp.type == "SW") {
            SewisePlayer.onStart();
            SewisePlayer.doLive();
        }
        if (playerApp.type == "HLS") {

        }

    }

    function initSewisePlayer() {
        playerApp.type = "SW";

        SewisePlayer.setup({
            server: "live",
            type: "m3u8",
            autostart: "true",
            streamurl: playerApp.videoUrl,
            controlbardisplay: "disable",
            topbardisplay: "disable",
            claritybutton: "disable",
            buffer: 1,
            title: "Video Title",
            lang: 'zh_CN'
        }, playerApp.divID);

        //播放器回调方法
        SewisePlayer.onStart(function(name) {
            SewisePlayer.onStart();
            SewisePlayer.doLive();
        });

    }

    function initHLSPlayer() {
        playerApp.type = "HLS";

        var video = document.createElement("video");
        video.style.width = "100%";
        video.style.backgroundColor = "#000000";
        video.autoplay = "autoplay";
        video.preload = "auto";
        video.poster = "";
        video.loop = "loop";
        video.src = playerApp.videoUrl;
        document.getElementById(playerApp.divID).appendChild(video);

        console.log("PC 浏览器播放 HLS 暂时不支持");

        // if (Hls.isSupported()) {
        //     var hls = new Hls();
        //     hls.loadSource(playerApp.videoUrl);
        //     hls.attachMedia(video);
        // }


    }


})();