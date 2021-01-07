# 递归

递归是一种解决问题的方法，它从解决问题的各个小部分开始，直到解决最初的大问题。递
归通常涉及函数调用自身。
递归函数是像下面这样能够直接调用自身的方法或函数。
```js
function recursiveFunction(someParam){ 
 recursiveFunction(someParam); 
}
```
能够像下面这样间接调用自身的函数，也是递归函数。
```js
function recursiveFunction1(someParam){ 
 recursiveFunction2(someParam); 
} 
function recursiveFunction2(someParam){ 
 recursiveFunction1(someParam); 
}
```
假设现在必须要执行 recursiveFunction，结果是什么？单就上述情况而言，它会一直执
行下去。因此，每个递归函数都必须有基线条件，即一个不再递归调用的条件（停止点），以防
止无限递归。
可以写成下面这样。
```js
function understandRecursion(doIunderstandRecursion) { 
 const recursionAnswer = confirm('Do you understand recursion?'); 
 if (recursionAnswer === true) { // 基线条件或停止点
 return true; 
 } 
 understandRecursion(recursionAnswer); // 递归调用
}
```
understandRecursion 函数会不断地调用自身，直到 recursionAnswer 为真（true）。
recursionAnswer 为真就是上述代码的基线条件。

## 计算一个数的阶乘
作为递归的第一个例子，我们来看看如何计算一个数的阶乘。数 n 的阶乘，定义为 n!，表示
从 1 到 n 的整数的乘积。
5 的阶乘表示为 5!，和 5 × 4 × 3 × 2 × 1 相等，结果是 120。

### 迭代阶乘
如果尝试表示计算任意数 n 的阶乘的步骤，可以将步骤定义如下：(n) * (n - 1) * (n - 
2) * (n - 3) * ... * 1。
可以使用循环来写一个计算一个数阶乘的函数，如下所示。
```js
function factorialIterative(number) { 
 if (number < 0) return undefined; 
 let total = 1; 
 for (let n = number; n > 1; n--) { 
 total = total * n; 
 }
 return total; 
} 
console.log(factorialIterative(5)); // 120
```

### 递归阶乘
factorial.ts => factorial


## 斐波那契数列
斐波那契数列是另一个可以用递归解决的问题。它是一个由 0、1、1、2、3、5、8、13、21、
34 等数组成的序列。数 2 由 1 + 1 得到，数 3 由 1 + 2 得到，数 5 由 2 + 3 得到，以此类推。斐波
那契数列的定义如下。

- 位置 0 的斐波那契数是零。
- 1 和 2 的斐波那契数是 1。 
- n（此处 n > 2）的斐波那契数是（n - 1）的斐波那契数加上（n - 2）的斐波那契数。

### fibonacciIterative 迭代求斐波那契数

###  fibonacci 递归求斐波那契数