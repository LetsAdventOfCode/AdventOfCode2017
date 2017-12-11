function solve() {
    var input = document.getElementById("input").value;
    var passphrases = input.split("\n");

    var validPassphrases = 0;
    var secureValidPassphrases = 0;

    for (var i = 0; i < passphrases.length; i++) {
        var passphrase = passphrases[i].split(" ");
        validPassphrases += isValid(passphrase.slice());
        secureValidPassphrases += isValidSecure(passphrase);
    }

    function isValid(passphrase) {
        while (passphrase.length > 0) {
            var word = passphrase.shift()
            for (var j = 0; j < passphrase.length; j++) {
                if (passphrase[j] == word) {
                    return 0;
                }
            }
        }
        return 1;
    }
    function isValidSecure(passphrase) {
        while (passphrase.length > 0) {
            var word = passphrase.shift()
            for (var j = 0; j < passphrase.length; j++) {
                if (passphrase[j] == word || new RegExp(anagramRegexGenerator(word)).test(passphrase[j])) {
                    return 0;
                }
            }
        }
        return 1;
    }
    document.getElementById("solution").innerHTML = validPassphrases;
    document.getElementById("solution2").innerHTML = secureValidPassphrases;
}

function anagramRegexGenerator(input) {
    var lookaheadPart = '', matchingPart = '^';
    var positiveLookaheadPrefix = '(?=', positiveLookaheadSuffix = ')';
    var inputCharacterFrequencyMap = {}
    for (var i = 0; i < input.length; i++) {
        !inputCharacterFrequencyMap[input[i]]
            ? inputCharacterFrequencyMap[input[i]] = 1
            : ++inputCharacterFrequencyMap[input[i]];
    }
    for (var j in inputCharacterFrequencyMap) {
        lookaheadPart += positiveLookaheadPrefix;
        for (var k = 0; k < inputCharacterFrequencyMap[j]; k++) {
            lookaheadPart += '.*';
            if (j == ' ') {
                lookaheadPart += '\\s';
            } else {
                lookaheadPart += j;
            }
            matchingPart += '.';
        }
        lookaheadPart += positiveLookaheadSuffix;
    }
    matchingPart += '$';
    return lookaheadPart + matchingPart;
}