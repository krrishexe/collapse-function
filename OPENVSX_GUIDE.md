# Publishing to OpenVSX Registry

## 🌐 What is OpenVSX?

OpenVSX is an **open-source alternative** to the VS Code Marketplace, used by:

- ✅ **Gitpod**
- ✅ **Theia IDE**
- ✅ **Code-OSS** (open source VS Code)
- ✅ Some other VS Code-compatible editors

## 🚀 Publishing Steps

### 1. Create OpenVSX Account

1. Go to [open-vsx.org](https://open-vsx.org/)
2. Sign in with GitHub account
3. Create a namespace (like `krishyadav`)

### 2. Get Access Token

1. Go to your OpenVSX profile
2. Generate a Personal Access Token
3. Copy the token

### 3. Publish Your Extension

```bash
# Install OpenVSX CLI
npm install -g ovsx

# Login with your token
npx ovsx login

# Publish your extension
npx ovsx publish collapse-functions-1.0.0.vsix
```

## 📊 Benefits

- ✅ Free and open source
- ✅ No Microsoft dependency
- ✅ Used by several IDEs
- ✅ Easy publishing process

## ⚠️ Limitations

- Limited reach compared to official marketplace
- Not used by official VS Code
- Smaller user base

## 🔗 Your Extension URL

After publishing: `https://open-vsx.org/extension/krishyadav/collapse-functions`
