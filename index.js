var express = require('express');
var app = express();
var COLUMN_HEIGHT = 6;

var A = [[0, 0, 1, 0, 0],
         [0, 1, 0, 1, 0],
         [1, 0, 0, 0, 1],
         [1, 1, 1, 1, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1]];
var B = [[1, 1, 0, 0],
         [1, 0, 1, 0],
         [1, 1, 1, 0],
         [1, 0, 0, 1],
         [1, 0, 0, 1],
         [1, 1, 1, 1]];
var C = [[0, 1, 1, 1],
         [1, 0, 0, 0],
         [1, 0, 0, 0],
         [1, 0, 0, 0],
         [1, 0, 0, 0],
         [0, 1, 1, 1]];
var D = [[1, 1, 1, 0],
         [1, 0, 0, 1],
         [1, 0, 0, 1],
         [1, 0, 0, 1],
         [1, 0, 0, 1],
         [1, 1, 1, 0]];
var E = [[1, 1, 1, 1, 1],
         [1, 0, 0, 0, 0],
         [1, 1, 1, 0, 0],
         [1, 0, 0, 0, 0],
         [1, 0, 0, 0, 0],
         [1, 1, 1, 1, 1]];
var F = [[1, 1, 1, 1, 1],
         [1, 0, 0, 0, 0],
         [1, 1, 1, 0, 0],
         [1, 0, 0, 0, 0],
         [1, 0, 0, 0, 0],
         [1, 0, 0, 0, 0]];
var G = [[1, 1, 1, 1, 1],
         [1, 0, 0, 0, 0],
         [1, 0, 0, 0, 0],
         [1, 0, 0, 1, 1],
         [1, 0, 0, 0, 1],
         [1, 1, 1, 1, 0]];
var H = [[1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 1, 1, 1, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1]];
var I = [[1, 1, 1, 1, 1],
         [0, 0, 1, 0, 0],
         [0, 0, 1, 0, 0],
         [0, 0, 1, 0, 0],
         [0, 0, 1, 0, 0],
         [1, 1, 1, 1, 1]];
var J = [[0, 1, 1, 1],
         [0, 0, 0, 1],
         [0, 0, 0, 1],
         [0, 0, 0, 1],
         [1, 0, 0, 1],
         [1, 1, 1, 0]];
var K = [[1, 0, 0, 1, 0],
         [1, 0, 1, 0, 0],
         [1, 1, 0, 0, 0],
         [1, 0, 1, 0, 0],
         [1, 0, 0, 1, 0],
         [1, 0, 0, 0, 1]];
var L = [[1, 0, 0, 0],
         [1, 0, 0, 0],
         [1, 0, 0, 0],
         [1, 0, 0, 0],
         [1, 0, 0, 0],
         [1, 1, 1, 1]];
var M = [[0, 1, 0, 1, 0],
         [1, 0, 1, 0, 1],
         [1, 0, 1, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1]];
var N = [[1, 0, 0, 0, 1],
         [1, 1, 0, 0, 1],
         [1, 0, 1, 0, 1],
         [1, 0, 1, 0, 1],
         [1, 0, 0, 1, 1],
         [1, 0, 0, 0, 1]];
var O = [[0, 1, 1, 1, 0],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [0, 1, 1, 1, 0]];
var P = [[1, 1, 1, 0],
         [1, 0, 0, 1],
         [1, 0, 0, 1],
         [1, 1, 1, 0],
         [1, 0, 0, 0],
         [1, 0, 0, 0]];
var Q = [[0, 1, 1, 1],
         [1, 0, 0, 1],
         [1, 0, 0, 1],
         [0, 1, 1, 1],
         [0, 0, 0, 1],
         [0, 0, 0, 1]];
var R = [[1, 1, 1, 0],
         [1, 0, 0, 1],
         [1, 0, 0, 1],
         [1, 1, 1, 0],
         [1, 0, 0, 1],
         [1, 0, 0, 1]];
var S = [[0, 1, 1, 1, 1],
         [1, 0, 0, 0, 0],
         [0, 1, 1, 1, 0],
         [0, 0, 0, 0, 1],
         [0, 0, 0, 0, 1],
         [1, 1, 1, 1, 0]];
var T = [[1, 1, 1, 1, 1],
         [0, 0, 1, 0, 0],
         [0, 0, 1, 0, 0],
         [0, 0, 1, 0, 0],
         [0, 0, 1, 0, 0],
         [0, 0, 1, 0, 0]];
var U = [[1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [0, 1, 1, 1, 0]];
var V = [[1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [0, 1, 0, 1, 0],
         [0, 1, 0, 1, 0],
         [0, 0, 1, 0, 0]];
var W = [[1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 0, 0, 1],
         [1, 0, 1, 0, 1],
         [1, 0, 1, 0, 1],
         [0, 1, 0, 1, 0]];
var X = [[0, 0, 0, 0, 0],
         [1, 0, 0, 0, 1],
         [0, 1, 0, 1, 0],
         [0, 0, 1, 0, 0],
         [0, 1, 0, 1, 0],
         [1, 0, 0, 0, 1]];
var Y = [[1, 0, 0, 0, 1],
         [0, 1, 0, 1, 0],
         [0, 0, 1, 0, 0],
         [0, 0, 1, 0, 0],
         [0, 0, 1, 0, 0],
         [0, 0, 1, 0, 0]];
var Z = [[1, 1, 1, 1, 1],
         [0, 0, 0, 1, 0],
         [0, 0, 1, 0, 0],
         [0, 1, 0, 0, 0],
         [1, 0, 0, 0, 0],
         [1, 1, 1, 1, 1]];

var alphabet = {
    A: A,
    B: B,
    C: C,
    D: D,
    E: E,
    F: F,
    G: G,
    H: H,
    I: I,
    J: J,
    K: K,
    L: L,
    M: M,
    N: N,
    O: O,
    P: P,
    Q: Q,
    R: R,
    S: S,
    T: T,
    U: U,
    V: V,
    W: W,
    X: X,
    Y: Y,
    Z: Z

};

/**
 * Validate the input
 * @param  {string} word   Word to display.
 * @param  {string} emoji1 First emoji.
 * @param  {string} emoji2 Second emoji.
 * @return {boolean}       True if input is valid, false otherwise.
 */
var validateInput = function(word, emoji1, emoji2) {

    if (!word || !emoji1 || !emoji2) {
        return false;
    }

    if (!(emoji1[0] === ':') || !(emoji1[emoji1.length-1] === ':')
            || !(emoji2[0] === ':') || !(emoji2[emoji2.length-1] === ':')) {
        return false;
    }

    return true;
};


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    var responseText = '.\n';
    var parameterArray = request.query.text.split(' ');
    var word = parameterArray[0].toUpperCase();
    var emoji1 = parameterArray[1];
    var emoji2 = parameterArray[2];
    var isValid = validateInput(word, emoji1, emoji2);

    //construct response row by row.
    if (isValid) {
        for (var i = 0; i < COLUMN_HEIGHT; i++) {
            for (var x = 0; x < word.length; x++) {
                var currentLetter = word[x];
                //tac a '0' on the end of each row, representing a space between letters
                var letterRow = alphabet[currentLetter][i].join('') + '0';
                var responseText = responseText + letterRow;
                if (x === word.length - 1) {
                    responseText = responseText + '\n';
                }
            }
        }

        responseText = responseText.replace(/0/g, emoji1).replace(/1/g, emoji2);

        response.setHeader('Content-Type', 'application/json');
        response.send(JSON.stringify({ text: responseText, response_type: 'in_channel' }));
    } else {
        response.send('Enter a valid input: word emoji1 emoji2');
    }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


