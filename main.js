$(function() {
    var d = new Date().getMonth() + 1
    var icon_id = document.getElementById("icon")
    if (3 <= d && d <= 5) {
        document.documentElement.style.setProperty("--season-color", "#a7e42e"); //テーマカラーを季節で変更
        icon_id.href = "./images/hiron0413-icon-spring.png" //アイコンを季節で変更
    } else if (6 <= d && d <= 8) {
        document.documentElement.style.setProperty("--season-color", "#46cc3d");
        icon_id.href = "./images/hiron0413-icon-summer.png"
    } else if (9 <= d && d <= 11) {
        document.documentElement.style.setProperty("--season-color", "#f28a22");
        icon_id.href = "./images/hiron0413-icon-fall.png"
    } else {
        document.documentElement.style.setProperty("--season-color", "#add8d8");
        icon_id.href = "./images/hiron0413-icon-winter.png"
    }

    var season_color = document.documentElement.style.getPropertyValue("--season-color");
    
    $("#filter-item-all").css("background-color", season_color)

    //ALL
    $("#filter-item-all").click(function(){
        var season_color = document.documentElement.style.getPropertyValue("--season-color");
        var white = document.documentElement.style.getPropertyValue("--white");
        
        $("#filter-item-all").css("background-color", season_color)
        $("#filter-item-scratch").css("background-color", white)
        $("#filter-item-web").css("background-color", white)
        $(".scratch").css("display", "block")
        $(".web").css("display", "block")
    });

    //SCRATCH
    $("#filter-item-scratch").click(function(){
        var season_color = document.documentElement.style.getPropertyValue("--season-color");
        var white = document.documentElement.style.getPropertyValue("--white");
        
        $("#filter-item-scratch").css("background-color", season_color)
        $("#filter-item-all").css("background-color", white)
        $("#filter-item-web").css("background-color", white)
        $(".web").css("display", "none")
        $(".scratch").css("display", "block")
    });

    //WEB
    $("#filter-item-web").click(function(){
        var season_color = document.documentElement.style.getPropertyValue("--season-color");
        var white = document.documentElement.style.getPropertyValue("--white");
        
        $("#filter-item-web").css("background-color", season_color)
        $("#filter-item-all").css("background-color", white)
        $("#filter-item-scratch").css("background-color", white)
        $(".scratch").css("display", "none")
        $(".web").css("display", "block")
    });
});