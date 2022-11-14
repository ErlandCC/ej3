function fuerza() {
    var g = 6.67 * 10 ** (-11)
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var e1 = g * (a * b) / c ** 2
    document.getElementById('FACTORIZAR').innerHTML = e1
}