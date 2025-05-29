// Test file for exported function patterns
// All of these should now be detected and collapsed

// Export function declarations
export function exportedFunction() {
    console.log("This is an exported function");
    return "exported";
}

export async function exportedAsyncFunction() {
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log("This is an exported async function");
    return "async exported";
}

// Export arrow functions - THIS WAS THE MISSING PATTERN
export const exportedArrow = () => {
    console.log('Exported arrow function');
    return 'exported arrow';
}

export const exportedAsyncArrow = async () => {
    await new Promise(resolve => setTimeout(resolve, 50));
    console.log('Exported async arrow function');
    return 'exported async arrow';
}

// Export function expressions
export const exportedFunctionExpression = function () {
    console.log('Exported function expression');
    return 'exported function expression';
}

export const exportedAsyncFunctionExpression = async function () {
    await new Promise(resolve => setTimeout(resolve, 75));
    console.log('Exported async function expression');
    return 'exported async function expression';
}

// Export single parameter arrow functions
export const singleParamArrow = param => {
    console.log('Single parameter arrow function:', param);
    return param;
}

export const asyncSingleParamArrow = async param => {
    await new Promise(resolve => setTimeout(resolve, 25));
    console.log('Async single parameter arrow function:', param);
    return param;
}

// Export with let and var (less common but should work)
export let exportedLetArrow = () => {
    console.log('Exported let arrow function');
    return 'let arrow';
}

export var exportedVarArrow = () => {
    console.log('Exported var arrow function');
    return 'var arrow';
}

// Export default functions
export default function defaultFunction() {
    console.log('Default exported function');
    return 'default';
}

// Mixed exports
export { exportedFunction as renamedFunction };

// These should all be collapsible now! 