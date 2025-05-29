# Installation and Testing Guide

## 🚀 Quick Start

### Option 1: Install from .vsix file (Recommended for testing)

1. **Install the extension:**

   ```bash
   code --install-extension collapse-functions-1.0.0.vsix
   ```

   Or manually in VS Code:

   - Open VS Code
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
   - Type "Extensions: Install from VSIX..."
   - Select the `collapse-functions-1.0.0.vsix` file

2. **Test the extension:**
   - Open the `test-file.js` included in this project
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P`)
   - Type "Collapse All Functions"
   - Press Enter
   - Watch all functions fold/collapse!

### Option 2: Development Mode

1. **Open in VS Code:**

   ```bash
   code .
   ```

2. **Run the extension:**
   - Press `F5` to launch a new Extension Development Host window
   - In the new window, open a JavaScript/TypeScript file
   - Use `Ctrl+Shift+P` and search for "Collapse All Functions"

## 📝 Testing

### Test with the included file:

1. Open `test-file.js`
2. Notice the various function types (declarations, expressions, arrow functions, etc.)
3. Run the "Collapse All Functions" command
4. All functions should be collapsed/folded

### Test with your own files:

- JavaScript (`.js`)
- TypeScript (`.ts`)
- React JSX (`.jsx`)
- React TSX (`.tsx`)

## 🌐 Publishing to VS Code Marketplace

### Prerequisites:

1. **Create a publisher account:**

   - Visit https://marketplace.visualstudio.com/
   - Sign in with Microsoft account
   - Create a publisher profile

2. **Update package.json:**
   ```json
   {
     "publisher": "your-actual-publisher-name"
   }
   ```

### Publishing Steps:

1. **Login to your publisher account:**

   ```bash
   npx @vscode/vsce login your-publisher-name
   ```

2. **Publish the extension:**

   ```bash
   npx @vscode/vsce publish
   ```

   Or publish the existing .vsix file:

   ```bash
   npx @vscode/vsce publish collapse-functions-1.0.0.vsix
   ```

### Alternative: Publish to Open VSX Registry

For users of VSCodium and other VS Code alternatives:

```bash
npx ovsx publish collapse-functions-1.0.0.vsix -p YOUR_ACCESS_TOKEN
```

## 🔧 Development

### Building from source:

```bash
npm install
npm run compile
```

### Packaging:

```bash
npx @vscode/vsce package
```

### Debugging:

1. Open the project in VS Code
2. Press `F5` to start debugging
3. Set breakpoints in `src/extension.ts`

## 📋 System Requirements

- VS Code version 1.74.0 or higher
- Node.js (for development)

## ⚡ Features

The extension detects and collapses:

- ✅ Function declarations (`function name() {}`)
- ✅ Arrow functions (`const name = () => {}`)
- ✅ Function expressions (`const name = function() {}`)
- ✅ Async functions (`async function name() {}`)
- ✅ Generator functions (`function* name() {}`)
- ✅ Class methods (`methodName() {}`)
- ✅ Object methods (`{ method() {} }`)
- ✅ Export functions (`export function name() {}`)

## 🐛 Troubleshooting

**Extension not working?**

- Ensure you're in a JavaScript/TypeScript file
- Check that the file contains functions with `{}` braces
- Try reloading VS Code (`Ctrl+Shift+P` → "Developer: Reload Window")

**No functions detected?**

- The extension looks for functions with curly braces `{}`
- Single-line arrow functions without braces are not detected
- Comments at the start of lines may interfere with detection

## 📞 Support

- **Issues:** Open an issue on GitHub
- **Feature Requests:** Submit a feature request
- **Questions:** Check the README.md file
