# Change Log

All notable changes to the "Collapse Functions" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-05-29

### Added

- Initial release of Collapse Functions extension
- Command to collapse all function expressions and declarations
- Support for JavaScript (`.js`) files
- Support for TypeScript (`.ts`) files
- Support for React JSX (`.jsx`) files
- Support for React TSX (`.tsx`) files
- Detection of various function patterns:
  - Function declarations: `function name() {}`
  - Arrow functions: `const name = () => {}`
  - Function expressions: `const name = function() {}`
  - Async functions: `async function name() {}`
  - Generator functions: `function* name() {}`
  - Class methods: `methodName() {}`
  - Object methods: `{ method() {} }`
  - Export functions: `export function name() {}`
- Smart brace matching that handles strings and comments
- Command Palette integration with "Collapse All Functions" command
- Automatic activation when opening JavaScript/TypeScript files

### Features

- Robust function detection using multiple regex patterns
- Fallback to VS Code's built-in folding provider
- Proper handling of nested functions
- Support for modern JavaScript/TypeScript syntax
- Cross-platform compatibility (Windows, macOS, Linux)

### Developer Features

- TypeScript source code
- Comprehensive test file with various function types
- Debug configuration for extension development
- Proper packaging with vsce
- MIT license
- Detailed documentation and installation guide

## [Unreleased]

### Planned Features

- Keyboard shortcut for the collapse command
- Configuration options for function detection patterns
- Support for additional file types (Vue, Svelte)
- Undo/expand all functions command
- Better handling of arrow functions without braces
- Performance optimizations for large files
