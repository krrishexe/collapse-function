# Publishing via GitHub Releases

## 🚀 Step-by-Step Guide

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click "New repository"
3. Name it: `vscode-collapse-functions-extension`
4. Make it **Public** (so users can find it)
5. Initialize with README (optional, we have our own)

### 2. Upload Your Extension Code

```bash
# In your extension directory
git init
git add .
git commit -m "Initial commit - Collapse Functions extension v1.0.0"
git branch -M main
git remote add origin https://github.com/krishyadav/vscode-collapse-functions-extension.git
git push -u origin main
```

### 3. Create a Release

1. Go to your GitHub repo
2. Click "Releases" → "Create a new release"
3. **Tag version**: `v1.0.0`
4. **Release title**: `Collapse Functions v1.0.0`
5. **Description**:

```markdown
# Collapse Functions Extension v1.0.0

A VS Code/Cursor extension to collapse and expand all functions in JavaScript/TypeScript files.

## Features

- ✅ Collapse All Functions
- ✅ Expand All Functions
- ✅ Supports JS, TS, JSX, TSX
- ✅ Exported functions support

## Installation

1. Download the `collapse-functions-1.0.0.vsix` file below
2. In VS Code/Cursor: Extensions → "..." → "Install from VSIX"
3. Select the downloaded file
4. Restart your editor

## Usage

- Press `Ctrl+Shift+P` → "Collapse All Functions"
- Press `Ctrl+Shift+P` → "Expand All Functions"
```

6. **Attach the VSIX file**: Drag `collapse-functions-1.0.0.vsix` to the release
7. Click "Publish release"

### 4. Share Your Extension

Users can now:

- Visit: `https://github.com/krishyadav/vscode-collapse-functions-extension/releases`
- Download the `.vsix` file
- Install it in VS Code or Cursor

## 📢 How Users Install

### In VS Code:

1. Download `.vsix` from your GitHub release
2. Open VS Code
3. Press `Ctrl+Shift+P` → "Extensions: Install from VSIX"
4. Select the downloaded file

### In Cursor:

1. Download `.vsix` from your GitHub release
2. Open Cursor
3. Extensions panel → "..." → "Install from VSIX"
4. Select the downloaded file

## 🔄 Updating Your Extension

When you make updates:

1. Update version in `package.json`
2. Run `npx vsce package`
3. Commit changes to GitHub
4. Create new release with new VSIX file

## 📊 Benefits

- ✅ No Microsoft/Azure account needed
- ✅ Full control over distribution
- ✅ Users can see source code (trust)
- ✅ Issue tracking and community feedback
- ✅ Free hosting forever
