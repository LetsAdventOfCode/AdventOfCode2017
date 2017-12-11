function solve() {
    var input = document.getElementById("input").value;
    var banks = input.split("\t").map(function (i)
    {
        return parseInt(i, 10);
    });
    var backups = [];
    var cycleLength = 0;

    while (true) {
        var backup = getConfigurationBackup(banks);
        if (backups.some(function(e, i, a) {
            return e == backup;
        })) {
            cycleLength = backups.length - backups.indexOf(backup);
            break;
        }
        backups.push(backup)   
        var toReallocate = banks.reduce(function (a, b) {
            return Math.max(a, b);
        });
        var maxIndex = banks.indexOf(toReallocate);

        banks[maxIndex] = 0;
        for (var i = 1; i <= toReallocate; i++) {
            banks[(maxIndex + i) % 16]++;
        }
    }
    
    document.getElementById("solution").innerHTML = backups.length;
    document.getElementById("solution2").innerHTML = cycleLength;
}

function getConfigurationBackup(banks) {
    return banks.join();
}