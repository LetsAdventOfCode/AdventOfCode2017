function solve() {
    var input = document.getElementById("input").value;
    var rows = input.split("\n");
    var matrix = [];
    for (var i = 0; i < rows.length; i++) {
        matrix.push(rows[i].split("\t"));
    }

    var checksum = 0;
    var checksum2 = 0;
    for (var j = 0; j < matrix.length; j++) {
        checksum += Math.max.apply(null, matrix[j]) - Math.min.apply(null, matrix[j]);
        
    }

    

    document.getElementById("solution").innerHTML = checksum;
    document.getElementById("solution2").innerHTML = cycleLength;
}