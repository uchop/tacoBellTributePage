function calculateTip() {
    var numOfLupas = document.getElementById("number").value;
    var tipAmount = document.getElementById("percent-tip").value;
    var numOfPpl =document.getElementById("split").value

    var costOfLupas = numOfLupas * 2.49
    var totalCost = costOfLupas * (tipAmount / 100) / numOfPpl
    totalCost = totalCost.toFixed(2)
    document.getElementById("cost").innerHTML = totalCost + " each"
}