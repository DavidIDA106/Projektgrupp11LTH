let mini = true;

function toggleSidebar() {
    if (mini){
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        console.log("opening sidebar");
        mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementById("mySidebar").style.width = "100px";
        document.getElementById("main").style.marginLeft = "100px";
        mini = true;
    }
}