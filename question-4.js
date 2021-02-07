/**
 * 4) Write an efficient method that tells us whether or not an input string brackets ("{", "}",
    "(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
    “{([)]}” => false
 *
 */

// bracket pair's rules
const bracketPairRules = [
    { "(": ")" },
    { "{": "}" },
    { "[": "]" }
]

//this function checks if there any pair matches for brackets
function checkHasPair(brackets = []) {
    let hasPair = false;

    for (let i = 0; i < brackets.length; i++) {
        const item = brackets[i];

        //this iteration checks if there any matching pair of the bracket
        for (let j = 0; j < bracketPairRules.length; j++) {
            const rule = bracketPairRules[j];

            //this comparison checks if there any matches rule for the current grouped brackets
            hasPair = (Object.keys(item)[0] === Object.keys(rule)[0]) && (Object.values(item)[0] === Object.values(rule)[0])

            if (hasPair) break;
        }
        if (!hasPair) break;
    }
    return hasPair;
}
//this function matches open and closed brackets
function matchPairs(brackets = '') {
    const bracketArr = brackets.split('');
    const pairedBrackets = [];
    for (let i = 0; i < Math.round(bracketArr.length / 2); i++) {

        const open = bracketArr[i];

        const close = bracketArr[bracketArr.length - (i + 1)];

        pairedBrackets.push({ [open]: close });
    }
    return checkHasPair(pairedBrackets);
}
console.log(matchPairs('{[]}'));
console.log(matchPairs('{(])}'));
console.log(matchPairs('{([)]}'));