// Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

const fibonacci = (num) => {
    const arr = [0, 1];

    for (let i = 2; i <= num; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    console.log('Fibonacci Series - ', arr);
}

const optimizedFibonacci = (num) => (num <= 1 ? num : optimizedFibonacci(num - 1) + optimizedFibonacci(num - 2));

console.time();
fibonacci(10);
console.timeEnd();

console.time();
console.log(optimizedFibonacci(10));
console.timeEnd();