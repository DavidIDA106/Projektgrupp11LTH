let mini = true;
// om sidebaren är minimerad och vi drar musen över den så vill vi att den skall dras ut, när musen inte längre är över så
// dras den in igen.
function toggleSidebar() {
    if (mini){
        console.log("opening sidebar");
        document.getElementById("mySidebar").style.width = "250px";     //Sidebarens bredd vid utökat läge
        document.getElementById("main").style.marginLeft = "250px";
        mini = false;
    } else {
        console.log("closing sidebar");
        document.getElementById("mySidebar").style.width = "85px";      //Sidebarens bredd vid krympt läge
        document.getElementById("main").style.marginLeft = "85px";
        mini = true;
    }
}