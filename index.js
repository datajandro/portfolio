let menuArray = [[false, "about"], [false, "projects"]]

function menuArrayFalseAll() {
    for (let index = 0; index < menuArray.length; index++) {
        document.getElementById(menuArray[index][1]).style.display = "none";
        menuArray[index][0] = false;           
    }
}

function mostrarAbout() {
    if (menuArray[0][0] == false) {
        menuArrayFalseAll();
        document.getElementById("about").style.display = "block";
        menuArray[0][0] = true;
    } else if (menuArray[0][0] == true) {
        document.getElementById("about").style.display = "none";
        menuArray[0][0] = false;
    }
}

function mostrarProjects() {
    if (menuArray[1][0] == false) {
        menuArrayFalseAll();
        document.getElementById("projects").style.display = "block";
        menuArray[1][0] = true;
    } else if (menuArray[1][0] == true) {
        document.getElementById("projects").style.display = "none";
        menuArray[1][0] = false;
    }
}