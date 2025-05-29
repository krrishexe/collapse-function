# Collapse Functions

A VS Code extension that allows you to quickly collapse (fold) and expand (unfold) all function expressions and declarations in JavaScript and TypeScript files.

## Features

- **Collapse All Functions**: Instantly fold all function declarations and expressions in the current file
- **Expand All Functions**: Instantly unfold all function declarations and expressions in the current file
- **Multi-language Support**: Works with JavaScript, TypeScript, JSX, and TSX files
- **Smart Detection**: Recognizes various function patterns including:
  - Function declarations: `function name() {}`
  - Arrow functions: `const name = () => {}`
  - Function expressions: `const name = function() {}`
  - Method definitions: `methodName() {}`
  - Object method shorthand: `{ method() {} }`
  - Exported functions: `export const name = () => {}`

## Usage

### Collapse All Functions

1. Open a JavaScript or TypeScript file in VS Code
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
3. Type "Collapse All Functions" and press Enter
4. All functions in the current file will be collapsed/folded

### Expand All Functions

1. Open a JavaScript or TypeScript file in VS Code
2. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P`)
3. Type "Expand All Functions" and press Enter
4. All functions in the current file will be expanded/unfolded

## Supported Languages

- JavaScript (`.js`)
- TypeScript (`.ts`)
- React JSX (`.jsx`)
- React TSX (`.tsx`)

## Installation

### From VS Code Marketplace (Coming Soon)

Search for "Collapse Functions" in the VS Code Extensions marketplace.

### Manual Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run compile` to build the extension
4. Press `F5` to run the extension in a new Extension Development Host window

## Requirements

- VS Code 1.74.0 or higher

## Extension Settings

This extension doesn't add any VS Code settings.

## Known Issues

- Currently only supports brace-based function definitions (functions with `{}`)
- May not detect all edge cases of function syntax

## Release Notes

### 1.0.0

Initial release of Collapse Functions extension.

- Collapse all function declarations and expressions
- Expand all function declarations and expressions
- Support for JavaScript, TypeScript, JSX, and TSX files
- Support for exported functions
- Command palette integration

---

## Contributing

Found a bug or have a feature request? Please [open an issue](https://github.com/krishyadav/vscode-collapse-functions-extension/issues) on GitHub.

## License

This extension is licensed under the [MIT License](LICENSE).
