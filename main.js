$(function() {
    var d = new Date().getMonth() + 1;
    var icon_id = document.getElementById("icon");
    const works_categories = ["project", "scratch", "web", "art"];
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
    
    $("#filter-item-project").css("background-color", season_color);
    select("project");

    //PROJECTS
    $("#filter-item-project").click(() => select("project"));

    //SCRATCH
    $("#filter-item-scratch").click(() => select("scratch"));

    //WEB
    $("#filter-item-web").click(() => select("web"));

    //ART
    $("#filter-item-art").click(() => select("art"));

    function select(item) {
        var season_color = document.documentElement.style.getPropertyValue("--season-color");
        var white = document.documentElement.style.getPropertyValue("--white");
        
        works_categories.forEach(c => {
            if (item === "all") {
                $("." + c).css("display", "block");
            } else {
                $("." + c).css("display", "none");
            }
            $("#filter-item-" + c).css("background-color", white);
        });
        if (item !== "all") {
            $("." + item).css("display", "block");
        }
        $("#filter-item-all").css("background-color", white);
        $("#filter-item-" + item).css("background-color", season_color);
    }
});