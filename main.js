$(function() {
    let d = new Date().getMonth() + 1;
    let icon_id = document.getElementById("icon");
    const works_categories = ["scratch", "web", "art", "game"];

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
    
    select("all");

    //PROJECTS
    $("#filter-item-all").click(() => select("all"));

    //SCRATCH
    $("#filter-item-scratch").click(() => select("scratch"));

    //GAME
    $("#filter-item-game").click(() => select("game"));

    //WEB
    $("#filter-item-web").click(() => select("web"));

    //ART
    $("#filter-item-art").click(() => select("art"));

    //works
    $.getJSON("works.json", function(works){
        works.reverse().forEach(w => {
            const par = document.getElementById("Projects");
            let block = document.createElement("div");
            let a = document.createElement("a");
            let img = document.createElement("img");
            let h = document.createElement("h3");
            let div = document.createElement("div");
            let temp;

            a.setAttribute("target", "_blank");
            a.setAttribute("href", w.url);
            block.classList.add(...w.tag);
            img.setAttribute("src", w.image);
            h.id = "project-name";
            h.innerHTML = w.name;
            w.tag.forEach(function(t){
                temp = document.createElement("img");
                temp.setAttribute("src", `./images/tags/${t}-logo.svg`);
                div.appendChild(temp);
            });
                
            div.classList.add("tag");

            a.appendChild(img);
            block.appendChild(a);
            block.appendChild(h);
            block.appendChild(div);
            par.appendChild(block);
        });
    });
    

    function select(item) {
        let season_color = document.documentElement.style.getPropertyValue("--season-color");
        let white = document.documentElement.style.getPropertyValue("--white");
        
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