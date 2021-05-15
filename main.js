let body_div = document.getElementById("primary_container");
let theme_btn = document.getElementById("theme_btn");

let linkIn_anchor = document.getElementById("linkIn_anchor");
let git_anchor = document.getElementById("git_anchor");

let watchlist_demoLink = document.getElementById("link_watchlist");
let qclone_demoLink = document.getElementById("link_quizlet");
let karma_demoLink = document.getElementById("link_karmaTracker");
let calculator_demoLink = document.getElementById("link_calculator");

let watchlist_repoLink = document.getElementById("watchlist_repo");
let qClone_repoLink = document.getElementById("quizlet_repo");
let karma_repoLink = document.getElementById("karma_repo");
let calculator_repoLink = document.getElementById("calculator_repo");

document.querySelector('#theme_btn').addEventListener("click", ()=>{
    switch(body_div.classList[1]){
        case "div-lt":
            body_div.classList.replace(body_div.classList[1], "div-dt");
            theme_btn.classList.replace(theme_btn.classList[1], "btn-dt");
            linkIn_anchor.classList.replace(linkIn_anchor.classList[0], "btn-dt");
            git_anchor.classList.replace(git_anchor.classList[0], "btn-dt");
            watchlist_demoLink.classList.replace(watchlist_demoLink.classList[1], "demo-dt")
            qclone_demoLink.classList.replace(qclone_demoLink.classList[1], "demo-dt")
            karma_demoLink.classList.replace(karma_demoLink.classList[1], "demo-dt")
            calculator_demoLink.classList.replace(calculator_demoLink.classList[1], "demo-dt")
            watchlist_repoLink.setAttribute('class', 'repo-link__dark');
            qClone_repoLink.setAttribute('class', 'repo-link__dark');
            karma_repoLink.setAttribute('class', 'repo-link__dark');
            calculator_repoLink.setAttribute('class', 'repo-link__dark');
            break;
        case "div-dt":
            body_div.classList.replace(body_div.classList[1], "div-lt");
            theme_btn.classList.replace(theme_btn.classList[1], "btn-lt");
            linkIn_anchor.classList.replace(linkIn_anchor.classList[0], "btn-lt");
            git_anchor.classList.replace(git_anchor.classList[0], "btn-lt");
            watchlist_demoLink.classList.replace(watchlist_demoLink.classList[1], "demo-lt")
            qclone_demoLink.classList.replace(qclone_demoLink.classList[1], "demo-lt")
            karma_demoLink.classList.replace(karma_demoLink.classList[1], "demo-lt")
            calculator_demoLink.classList.replace(calculator_demoLink.classList[1], "demo-lt")
            watchlist_repoLink.setAttribute('class', 'repo-link__light');
            qClone_repoLink.setAttribute('class', 'repo-link__light');
            karma_repoLink.setAttribute('class', 'repo-link__light');
            calculator_repoLink.setAttribute('class', 'repo-link__light');
            break;
        default:
            throw Error("Element Class Not Found")
    }
})

$('#link_watchlist').click(()=>{
    $('#demo_container').css('display', 'block');
    $('#demo_title').text("TV Watchlist Application");
    $('#demo_video').attr("src", "https://www.youtube.com/embed/lhzG8mAqQrc")
})

$('#link_quizlet').click(()=>{
    $('#demo_container').css('display', 'block');
    $('#demo_title').text("Quizlet Clone Application");
    $('#demo_video').attr("src", "https://www.youtube.com/embed/byghUSaWBDU");
})

$('#link_karmaTracker').click(()=>{
    $('#demo_container').css('display', 'block');
    $('#demo_title').text("Karma Tracker Application");
    $('#demo_video').attr("src", "https://www.youtube.com/embed/-ZhWF9okkNs");
})

$('#link_calculator').click(()=>{
    $('#demo_container').css('display', 'block');
    $('#demo_title').text("Calculator Application");
    $('#demo_video').attr("src", "https://www.youtube.com/embed/Fku07Pdzvn4");
})

$('#modal_close').click(()=>{
    $('#demo_container').css('display', '');
    $('#demo_title').text("");
    $('#demo_video').attr("src", "");
})
