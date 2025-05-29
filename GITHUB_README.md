# 🚀 Collapse Functions - VS Code & Cursor Extension

> **Quickly collapse and expand all functions in JavaScript/TypeScript files**

[![Download Extension](https://img.shields.io/badge/Download-Latest%20Release-blue?style=for-the-badge)](https://github.com/krishyadav/vscode-collapse-functions-extension/releases/latest)
[![VS Code](https://img.shields.io/badge/VS%20Code-Compatible-green?style=flat-square)](https://code.visualstudio.com/)
[![Cursor](https://img.shields.io/badge/Cursor-Compatible-purple?style=flat-square)](https://cursor.sh/)

## ⚡ Quick Install

1. **[Download the latest .vsix file](https://github.com/krishyadav/vscode-collapse-functions-extension/releases/latest)**
2. **Open VS Code or Cursor**
3. **Press `Ctrl+Shift+P`** → Type **"Extensions: Install from VSIX"**
4. **Select the downloaded file**
5. **Restart your editor**

## 🎯 Features

| Command                    | Action                            | Shortcut                                  |
| -------------------------- | --------------------------------- | ----------------------------------------- |
| **Collapse All Functions** | Folds all functions in the file   | `Ctrl+Shift+P` → "Collapse All Functions" |
| **Expand All Functions**   | Unfolds all functions in the file | `Ctrl+Shift+P` → "Expand All Functions"   |

### Supported Function Types

- ✅ `function name() {}` - Regular functions
- ✅ `const name = () => {}` - Arrow functions
- ✅ `const name = function() {}` - Function expressions
- ✅ `export const name = () => {}` - Exported functions
- ✅ `async function name() {}` - Async functions
- ✅ Class methods and object methods

### Supported Languages

- 🟨 **JavaScript** (`.js`)
- 🔷 **TypeScript** (`.ts`)
- ⚛️ **React JSX** (`.jsx`)
- ⚛️ **React TSX** (`.tsx`)

## 🎬 Demo

```javascript
// Before: All functions expanded
function regularFunction() {
    console.log("This function will be collapsed");
    return true;
}

const arrowFunction = () => {
    console.log("This arrow function will be collapsed");
    return false;
}

// After: Run "Collapse All Functions"
function regularFunction() {...}
const arrowFunction = () => {...}
```

## 📥 Manual Installation Steps

### For VS Code:

1. Download `.vsix` from [Releases](https://github.com/krishyadav/vscode-collapse-functions-extension/releases)
2. Open VS Code
3. View → Extensions (`Ctrl+Shift+X`)
4. Click "..." → "Install from VSIX..."
5. Select the downloaded file

### For Cursor:

1. Download `.vsix` from [Releases](https://github.com/krishyadav/vscode-collapse-functions-extension/releases)
2. Open Cursor
3. Extensions panel → "..." → "Install from VSIX..."
4. Select the downloaded file

## 🔧 Development

Want to contribute or build from source?

```bash
git clone https://github.com/krishyadav/vscode-collapse-functions-extension.git
cd vscode-collapse-functions-extension
npm install
npm run compile
```

## 🐛 Issues & Feature Requests

Found a bug or have an idea? [Create an issue](https://github.com/krishyadav/vscode-collapse-functions-extension/issues)!

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

⭐ **Star this repo if you find it useful!**
