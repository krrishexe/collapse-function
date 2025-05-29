// Test file for the Collapse Functions extension
// Try running "Collapse All Functions" command on this file

// Regular function declaration
function regularFunction() {
    console.log("This is a regular function");
    return true;
}

// Arrow function
const arrowFunction = () => {
    console.log("This is an arrow function");
    return false;
}

// Function expression
const functionExpression = function () {
    console.log("This is a function expression");
    return null;
}

// Object with methods
const myObject = {
    method1() {
        console.log("Object method using shorthand");
        return "method1";
    },

    method2: function () {
        console.log("Object method using function expression");
        return "method2";
    },

    method3: () => {
        console.log("Object method using arrow function");
        return "method3";
    }
};

// Class with methods
class MyClass {
    constructor() {
        this.value = 0;
    }

    classMethod() {
        console.log("This is a class method");
        return this.value;
    }

    static staticMethod() {
        console.log("This is a static method");
        return "static";
    }
}

// Async functions
async function asyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async function completed");
}

const asyncArrow = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Async arrow function completed");
}

// Nested functions
function outerFunction() {
    console.log("Outer function");

    function innerFunction() {
        console.log("Inner function");
        return "nested";
    }

    return innerFunction();
}

// Higher-order function
function higherOrderFunction(callback) {
    console.log("Higher-order function");
    return callback();
}

// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("IIFE executed");
})();

// Export functions
export function exportedFunction() {
    console.log("This function is exported");
    return "exported";
}

export const exportedArrow = () => {
    console.log("Exported arrow function");
    return "exported arrow";
} 