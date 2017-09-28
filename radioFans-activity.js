function displaycontent() {

    document.getElementsByClassName("nav2")[0].style.display = "block";
    document.getElementsByClassName("content-second")[0].style.display="block";
    document.getElementsByClassName("news-second")[0].style.display="none";

}

function displaynews() {

    document.getElementsByClassName("nav2")[0].style.display = "block";
    document.getElementsByClassName("content-second")[0].style.display="none";
    document.getElementsByClassName("news-second")[0].style.display="block";

}

function hide() {

    document.getElementsByClassName("nav2")[0].style.display = "none";
}

function changeRecent(){
    document.getElementsByClassName("hideshow1")[0].style.borderRight="2px solid #3ea3ec";
    document.getElementsByClassName("hideshow1")[0].style.backgroundColor="#e6f7fe";
    document.getElementsByClassName("hideshow2")[0].style.borderRight="none";
    document.getElementsByClassName("hideshow2")[0].style.backgroundColor="white";
    document.getElementsByClassName("hideshow3")[0].style.borderRight="none";
    document.getElementsByClassName("hideshow3")[0].style.backgroundColor="white";
}

function changeReport(){
    document.getElementsByClassName("hideshow2")[0].style.borderRight="2px solid #3ea3ec";
    document.getElementsByClassName("hideshow2")[0].style.backgroundColor="#e6f7fe";
    document.getElementsByClassName("hideshow1")[0].style.borderRight="none";
    document.getElementsByClassName("hideshow1")[0].style.backgroundColor="white";
    document.getElementsByClassName("hideshow3")[0].style.borderRight="none";
    document.getElementsByClassName("hideshow3")[0].style.backgroundColor="white";
}

function changeCollection(){
    document.getElementsByClassName("hideshow3")[0].style.borderRight="2px solid #3ea3ec";
    document.getElementsByClassName("hideshow3")[0].style.backgroundColor="#e6f7fe";
    document.getElementsByClassName("hideshow2")[0].style.borderRight="none";
    document.getElementsByClassName("hideshow2")[0].style.backgroundColor="white";
    document.getElementsByClassName("hideshow1")[0].style.borderRight="none";
    document.getElementsByClassName("hideshow1")[0].style.backgroundColor="white";
}
function displayrecent() {

    document.getElementsByClassName("recent-activity")[0].style.display = "block";
    document.getElementsByClassName("activity-report")[0].style.display="none";
    document.getElementsByClassName("works-collection")[0].style.display="none";

}
function displayreport() {

    document.getElementsByClassName("recent-activity")[0].style.display = "none";
    document.getElementsByClassName("activity-report")[0].style.display="block";
    document.getElementsByClassName("works-collection")[0].style.display="none";

}
function displaycollection() {

    document.getElementsByClassName("recent-activity")[0].style.display = "none";
    document.getElementsByClassName("activity-report")[0].style.display="none";
    document.getElementsByClassName("works-collection")[0].style.display="block";

}
function open(){
    window.location.href="www.baidu.com";
}
function displaycontainer(){
    document.getElementsByClassName("white-container")[0].style.display="block";
}
