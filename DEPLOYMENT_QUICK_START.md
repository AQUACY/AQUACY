# Quick Start: Deploy Portfolio to GitHub Pages

## ✅ What's Been Fixed

Your portfolio is in a subdirectory (`portfolio/`) of your main repository. The deployment has been configured to:
- Build from the `portfolio/` folder
- Deploy to GitHub Pages
- Keep your root `README.md` (GitHub profile) untouched

## 🚀 Deploy Now (3 Steps)

### Step 1: Commit and Push
```bash
git add .
git commit -m "Configure GitHub Pages deployment for portfolio"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to https://github.com/AQUACY/AQUACY/settings/pages
2. Under "Build and deployment" → **Source**: Select **"GitHub Actions"**
3. Click Save

### Step 3: Wait and Access
- Wait 2-3 minutes for deployment
- Visit: **https://AQUACY.github.io/AQUACY/**

## 📁 Important Files

- **`.github/workflows/deploy.yml`** (root) - Deployment workflow
- **`portfolio/vite.config.ts`** - Base path set to `/AQUACY/`
- **`README.md`** (root) - Your GitHub profile (untouched)

## 🔄 Future Updates

Just push changes to the `portfolio/` folder:
```bash
git add portfolio/
git commit -m "Update portfolio"
git push
```

GitHub Actions will automatically rebuild and deploy!

## 🐛 If Something Goes Wrong

1. Check Actions tab: https://github.com/AQUACY/AQUACY/actions
2. Verify `.github/workflows/deploy.yml` is in the repository root
3. Ensure GitHub Pages source is set to "GitHub Actions"
4. See full troubleshooting in `portfolio/DEPLOYMENT.md`

## 🎉 Your URLs

- **Portfolio**: https://AQUACY.github.io/AQUACY/
- **GitHub Profile**: https://github.com/AQUACY
- **Repository**: https://github.com/AQUACY/AQUACY
