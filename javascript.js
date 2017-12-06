function clusters() {
    var num = document.getElementById("clusters").value;
    if (num < 2 || num > 10) {
        document.getElementById("tag").innerHTML = "Value must be between 2 and 10.";
    }
    document.body.style.cusor = "progress";
    setTimeout(redirect, 3500);
    return false;
}

function redirect() {
    var num = document.getElementById("clusters").value;
    if (num == 2) window.location = "http://dataclustering2.azurewebsites.net/data/2.png";
    if (num == 3) window.location = "http://dataclustering2.azurewebsites.net/data/3.png";
    if (num == 4) window.location = "http://dataclustering2.azurewebsites.net/data/4.png";
    if (num == 5) window.location = "http://dataclustering2.azurewebsites.net/data/5.png";
    if (num == 6) window.location = "http://dataclustering2.azurewebsites.net/data/6.png";
    if (num == 7) window.location = "http://dataclustering2.azurewebsites.net/data/7.png";
    if (num == 8) window.location = "http://dataclustering2.azurewebsites.net/data/8.png";
    if (num == 9) window.location = "http://dataclustering2.azurewebsites.net/data/9.png";
    if (num == 10) window.location = "http://dataclustering2.azurewebsites.net/data/10.png";
    return false;
}