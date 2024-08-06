let isNotClicked = true;
let arr1 = ["cos", "coş", "coşkun", "coskun"]
let arr2 = ["gozde", "gözde"]

let loveCalculator = function () {
    let yourName = document.getElementById("firstname").value;
    let loversName = document.getElementById("lovername").value;
    let loveScore = Math.floor(Math.random() * 10);
    if (
        (arr2.includes(yourName.toLowerCase()) && arr1.includes(loversName.toLowerCase()))
        ||
        (arr1.includes(yourName.toLowerCase()) && arr2.includes(loversName.toLowerCase()))
    ) {
        loveScore = 100
    }
    let loveFinal = Math.round(loveScore);
    if (yourName === "") {
        alert("lütfen adını gir");
    } else if (loversName === "") {
        alert("lütfen o'nun adını gir");
    } else if (isNotClicked) {
        document.getElementById("lovefinal").innerHTML = yourName + " ve " + loversName + " aşk skoru: " + loveFinal + " % ";
        isNotclicked = false;
    }
    else {
        document.getElementById("lovefinal").innerHTML = yourName + " ve " + loversName + " aşk skoru " + loveFinal + " % ";
    }
};

//resetbutton
function resetFunction() {
    location.reload();
}
