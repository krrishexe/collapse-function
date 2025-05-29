# Deployment Guide for Collapse Functions Extension

## 🧪 Testing Your Extension

### Local Testing

1. Open VS Code in this directory
2. Press `F5` to open Extension Development Host
3. Test the extension with `test-functions.js`
4. Use Command Palette (`Ctrl+Shift+P`) → "Collapse All Functions"

### Manual Installation

```bash
code --install-extension collapse-functions-1.0.0.vsix
```

## 🚀 Deployment Options

### Option 1: VS Code Marketplace (Public)

**Requirements:**

- Microsoft account
- Azure DevOps Personal Access Token
- Publisher account on VS Code Marketplace

**Steps:**

1. Create publisher account: https://marketplace.visualstudio.com/manage
2. Get Personal Access Token from Azure DevOps with "Marketplace (manage)" scope
3. Login and publish:

```bash
npx vsce login krishyadav
npx vsce publish
```

**Benefits:**

- Global distribution
- Automatic updates
- VS Code built-in discovery

### Option 2: GitHub Releases (Semi-Public)

**Steps:**

1. Create GitHub repository: `vscode-collapse-functions-extension`
2. Upload your code to GitHub
3. Create a release and attach the `.vsix` file
4. Users install via: `code --install-extension path/to/collapse-functions-1.0.0.vsix`

**Benefits:**

- No marketplace approval needed
- Version control integration
- Community feedback via issues

### Option 3: Direct Distribution (Private/Team)

**Steps:**

1. Share the `.vsix` file directly
2. Recipients install via: `code --install-extension collapse-functions-1.0.0.vsix`
3. Or via VS Code UI: Extensions → "..." → "Install from VSIX"

**Benefits:**

- Immediate distribution
- No external dependencies
- Perfect for private teams

### Option 4: Private Marketplace (Enterprise)

For enterprise environments, you can set up a private extension marketplace.

## 📦 Building for Distribution

### Create Production Package

```bash
npm run vscode:prepublish
npx vsce package
```

### Version Management

```bash
# Increment version and package
npx vsce publish patch  # 1.0.0 → 1.0.1
npx vsce publish minor  # 1.0.0 → 1.1.0
npx vsce publish major  # 1.0.0 → 2.0.0
```

## 🔍 Pre-Deployment Checklist

- [ ] Extension works in Development Host
- [ ] All function types are detected correctly
- [ ] No console errors or warnings
- [ ] README.md is complete and accurate
- [ ] package.json has correct publisher name
- [ ] Version number is appropriate
- [ ] License is included

## 📊 Post-Deployment

### Monitor Usage (Marketplace)

- View download statistics
- Respond to user reviews
- Monitor issue reports

### Maintenance

- Regular testing with new VS Code versions
- Update dependencies
- Add new features based on feedback

## 🛠 Development Commands

```bash
# Development
npm run watch          # Auto-compile on changes
npm run compile        # One-time compilation

# Packaging
npx vsce package      # Create .vsix file
npx vsce publish      # Publish to marketplace

# Installation
code --install-extension collapse-functions-1.0.0.vsix
code --uninstall-extension krishyadav.collapse-functions
```

## 🔗 Useful Links

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Marketplace Management](https://marketplace.visualstudio.com/manage)
- [Azure DevOps](https://dev.azure.com/)
