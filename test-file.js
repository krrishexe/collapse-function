// Test file to demonstrate the Collapse Functions extension

// Function declaration
function regularFunction() {
    console.log('This is a regular function');
    return 'Hello World';
}

// Async function declaration
async function asyncFunction() {
    const data = await fetch('/api/data');
    return data.json();
}

// Arrow function - const
const arrowFunction = () => {
    console.log('This is an arrow function');
    return 42;
}

// Arrow function with parameters
const arrowWithParams = (a, b) => {
    const result = a + b;
    console.log(`Sum: ${result}`);
    return result;
}

// Function expression
const functionExpression = function () {
    console.log('This is a function expression');
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// Async arrow function
const asyncArrow = async (id) => {
    try {
        const response = await api.get(`/users/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Object with methods
const myObject = {
    // Method shorthand
    methodShorthand() {
        console.log('Method using shorthand syntax');
        return this;
    },

    // Traditional method
    traditionalMethod: function () {
        console.log('Traditional method syntax');
        return 'traditional';
    },

    // Arrow method
    arrowMethod: () => {
        console.log('Arrow function as method');
        return 'arrow';
    }
};

// Class with methods
class MyClass {
    constructor(name) {
        this.name = name;
    }

    // Class method
    instanceMethod() {
        console.log(`Instance method called for ${this.name}`);
        return this.name;
    }

    // Static method
    static staticMethod() {
        console.log('Static method called');
        return 'static';
    }

    // Async class method
    async asyncClassMethod() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log('Async class method completed');
        return 'async';
    }
}

// Export functions
export function exportedFunction() {
    console.log('This function is exported');
    return 'exported';
}

export const exportedArrow = () => {
    console.log('Exported arrow function');
    return 'exported arrow';
}

// Default export
export default function defaultExport() {
    console.log('This is the default export');
    return 'default';
}

// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log('IIFE executed');
})();

// Generator function
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

// Async generator
async function* asyncGenerator() {
    for (let i = 0; i < 3; i++) {
        await new Promise(resolve => setTimeout(resolve, 100));
        yield i;
    }
} 