const isAnagram = (input_1, input_2) => {
    input_1 = input_1.split("").sort().join("");
    input_2 = input_2.split("").sort().join("");

    return input_1 === input_2;
}

const optimizedIsAnagram = (str_1, str_2) => {
    if (str_1.length !== str_2.length) return false;

    let obj1 = {};
    let obj2 = {};

    for (let i = 0; i <= str_1.length; i++) {
        obj1[str_1[i]] = (obj1[str_1[i]] || 0) + 1;
        obj2[str_2[i]] = (obj2[str_2[i]] || 0) + 1;
    }

    for(let key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }

    return true;
}

console.time();
console.log(isAnagram("anagram", "nagaram"));
console.timeEnd();

console.time();
console.log(isAnagram("car", "rat"));
console.timeEnd();


console.time();
console.log(optimizedIsAnagram("anagram", "nagaram"));
console.timeEnd();

console.time();
console.log(optimizedIsAnagram("car", "rat"));
console.timeEnd();