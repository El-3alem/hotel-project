$(document).ready(function () {
    // Main nav
    $(".c3").click(function () {
        let r = $(".room-list").css("display");
        $(".services-list").css({ "display": "none" })
        if (r == "none") {
            $(".room-list").css({ "display": "block" })
        } else {
            $(".room-list").css({ "display": "none" })
        }
    })

    $(".room-list").mouseleave(function () {
        $(".room-list").slideUp()
    })

    $(".c4").click(function () {
        let s = $(".services-list").css("display");
        $(".room-list").css({ "display": "none" })
        if (s == "none") {
            $(".services-list").css({ "display": "block" })
        } else {
            $(".services-list").css({ "display": "none" })
        }
    })

    $(".services-list").mouseleave(function () {
        $(".services-list").slideUp()
    })

    // $("*").not($(".c3")).click(function () {
    //     if ($(".room-list").css({ "display": "block" })) {
    //         $(".room-list").css({ "display": "none" })
    //     }
    // })

    $(".option .l22").click(function () {
        let d = $(".option .l22 .ch").css("display");
        $(".option .l22 .ch").css({ "display": "none" })
        if (d == "none") {
            $(".option .l22 .ch").css({ "display": "block" });
            $(".option .l22").css({ "background": "gray" });
        } else {
            $(".option .l22 .ch").css({ "display": "none" });
            $(".option .l22").css({ "background": "white" });
        }
    })
    
    $(".option .l2").click(function () {
        let d = $(".option .l2 .ad").css("display");
        $(".option .l2 .ad").css({ "display": "none" })
        if (d == "none") {
            $(".option .l2 .ad").css({ "display": "block" });
            $(".option .l2").css({ "background": "gray" });
        } else {
            $(".option .l2 .ad").css({ "display": "none" });
            $(".option .l2").css({ "background": "white" });
        }
    })
    

    $(".option .l22 .ch span").click(function () {
        let l22 = $(this).html();
        $(".option .l22").html(l22);

    })
    
    $(".option .l2 .ad span").click(function () {
        let l2 = $(this).html();
        $(".option .l2").html(l2);

    })

    

    date = new Date()
    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()

    hours = 06
    minutes = 35
    seconds = 56
    setInterval(function () {

        $(".time span").html(hours + ":" + minutes + ":" + seconds + "PM")
        seconds++;

        if (seconds > 58) {
            seconds = 0
            minutes++
        }
        if (minutes > 58) {
            minutes = 0
            hours++
        }
        if (seconds < 10) {
            seconds = "0" + seconds

        }
    }, 1000)

    $(window).scroll(function () {
        let h = $(window).scrollTop();
        if (h >= 400) {
            $(".int .coont .r").css({ "transform": "translateX(-130px)" });
            $(".int .coont .l").css({ "transform": "translateX(130px)" });
        }
    })

    // Second Nav
    $(window).scroll(function () {
        let h = $(window).scrollTop();
        if (h >= 300) {
            $(".father").css({ "display": "flex" });
        }
        else {
            $(".father").css({ "display": "none" });
        }
    })
    // Arrow
    $(window).scroll(function () {
        let h = $(window).scrollTop();
        if (h >= 300) {
            $(".arrow").css({ "display": "block" });
        }
        else {
            $(".arrow").css({ "display": "none" });
        }
    })

    $(".arrow").click(function () {
        $(window).scrollTop(0);
    })














})