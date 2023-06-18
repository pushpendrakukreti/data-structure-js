// Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

const isPalindrome = (num) => {
    const isPalindrome = num === +num.toString().split('').reverse().join("");
    return isPalindrome;
}

const optimizedIsPalindrome = (num) => {
    const optimizedIsPalindrome = num < 0 ? false : num === +num.toString().split('').reverse().join("");
    return optimizedIsPalindrome;
}

console.log('Log 121 - ', isPalindrome(121));
console.log('Log 10 - ', isPalindrome(10));

console.log('Log 12121 - ', optimizedIsPalindrome(12121));
console.log('Log 12212 - ', optimizedIsPalindrome(12212));