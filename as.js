// arr1 = [2,4,5,7,2]
// arr2 = [1,7,3,7]
// arr3 = [6,6,9,5,9]
// arr4 = [5,9,11,34,1]

// result = false

function addToZero(arr)
{
    for(i = 0; i < arr.length; i++)
    {
        for(j = i + 1 ; j < arr.length; j++)
        if(arr[i] - arr[j] === 0)
        result = true

    }
    return result
}

console.log(addToZero(arr4))

// ----------------------------------------------------------

let string1 = "Kalazazoo"
let string2 = "Boby"
let string3 = "Zalon"

result = false

function hasUniqueChars(string)
{
    for(i = 0; i < string.length; i++)
    {
        for(j = i + 1 ; j < string.length; j++)
        if(string.charAt(i) === string.charAt(j))
        result = true
    }
    return result

}
console.log(hasUniqueChars(string3))

//-------------------------------------------------------
// alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

// const isPangram = (string) => {
//     string = string.toLowerCase();
//     return alphabets.every(x => string.includes(x));
// }

// console.log(isPangram("Detect Pangram"));
// console.log(isPangram("abcd efgh ijkl mnop qrst uvwx yz"));


//----------------------------------------------------

words = ["Hi","KalamazooMichigan","Hello","Trump2024","Tesla","KalamazooMi"]

var longest = words.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);

console.log(longest)
