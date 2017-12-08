function solve() {
    var input = document.getElementById("input").value;
    var position = 5;
    var instructions = input.split("\n");
    var instructions2 = instructions.slice();

    var currentIndex = 0;
    var steps = 0;
    while (true) {
        currentIndex += instructions[currentIndex]++;
        steps++;
        if (currentIndex < 0 || currentIndex >= instructions.length) {
            break;
        }
    }

    var currentIndex2 = 0;
    var steps2 = 0;
    while (true) {
        currentIndex2 += instructions2[currentIndex2] >= 3 ? instructions2[currentIndex2]-- : instructions2[currentIndex2]++;
        steps2++;
        if (currentIndex2 < 0 || currentIndex2 >= instructions2.length) {
            break;
        }
    }

    document.getElementById("solution").innerHTML = steps;
    document.getElementById("solution2").innerHTML = steps2;
}