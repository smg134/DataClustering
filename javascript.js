function clusters() {
    var num = document.getElementById("number").value;
    if (num < 2 || num > 10) {
        document.getElementById("tag").innerHTML = "Value must be between 2 and 10.";
    }
    document.body.style.cursor = "progress";
    setTimeout(redirect, 3500);
    return false;
}

function redirect() {
    var num = document.getElementById("number").value;
    if (num == 2) document.getElementById("image").src = "http://dataclustering2.azurewebsites.net/data/2.png";
    if (num == 3) document.getElementById("image").src = "http://dataclustering2.azurewebsites.net/data/3.png";
    if (num == 4) document.getElementById("image").src = "http://dataclustering2.azurewebsites.net/data/4.png";
    if (num == 5) document.getElementById("image").src = "http://dataclustering2.azurewebsites.net/data/5.png";
    if (num == 6) document.getElementById("image").src = "http://dataclustering2.azurewebsites.net/data/6.png";
    if (num == 7) document.getElementById("image").src = "http://dataclustering2.azurewebsites.net/data/7.png";
    if (num == 8) document.getElementById("image").src = "http://dataclustering2.azurewebsites.net/data/8.png";
    if (num == 9) document.getElementById("image").src = "http://dataclustering2.azurewebsites.net/data/9.png";
    if (num == 10) document.getElementById("image").src = "http://dataclustering2.azurewebsites.net/data/10.png";
    document.body.style.cursor = "default";
    return false;
}