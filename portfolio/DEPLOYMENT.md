# Deploying to GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages from the `portfolio/` subdirectory.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Your repository structure: `AQUACY/` (root) with `portfolio/` subdirectory

## Important: Repository Structure

Your repository has this structure:
```
AQUACY/
├── README.md (GitHub profile)
├── design_system_profile.json
├── portfolio/ (your website)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
└── .github/
    └── workflows/
        └── deploy.yml
```

The workflow file **must be in the root** `.github/workflows/` directory, not inside `portfolio/`.

## Step-by-Step Deployment

### 1. Commit and Push Your Changes

Since your repository already exists at https://github.com/AQUACY/AQUACY.git:

```bash
# From the root of your AQUACY repository
git add .
git commit -m "Add portfolio with GitHub Pages deployment"
git push origin main
```

### 2. Enable GitHub Pages

1. Go to https://github.com/AQUACY/AQUACY
2. Click on "Settings" tab
3. In the left sidebar, click "Pages"
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. The workflow will automatically run and deploy your site

### 3. Access Your Portfolio

After the deployment completes (usually 2-3 minutes), your portfolio will be available at:

```
https://AQUACY.github.io/AQUACY/
```

**Note**: Your README.md in the root will remain as your GitHub profile and won't be affected!

## How It Works

The GitHub Actions workflow:
1. Only triggers when files in `portfolio/` directory change
2. Builds the site from the `portfolio/` subdirectory
3. Deploys only the built files to GitHub Pages
4. Your root README.md stays untouched

## Automatic Deployments

Every time you push changes to files in the `portfolio/` directory on the `main` branch, GitHub Actions will automatically:
1. Build your portfolio
2. Deploy it to GitHub Pages

Changes to README.md or other root files won't trigger a deployment.

## Manual Deployment Trigger

You can also manually trigger a deployment:
1. Go to the "Actions" tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are in `portfolio/package.json`
- Make sure the build command works locally from the `portfolio/` directory:
  ```bash
  cd portfolio
  npm run build
  ```

### 404 Error
- Verify the `base` path in `portfolio/vite.config.ts` is set to `/AQUACY/`
- Wait a few minutes for deployment to complete
- Check the Actions tab to ensure deployment succeeded

### Workflow Not Running
- Ensure `.github/workflows/deploy.yml` is in the **root** of your repository, not in `portfolio/`
- Verify you've enabled GitHub Pages with "GitHub Actions" as the source
- Check that you pushed changes to the `main` branch

### Changes Not Showing
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check if the workflow completed successfully in the Actions tab
- Verify you pushed to the `main` branch
- Make sure changes were in the `portfolio/` directory

## Local Build Test

Before deploying, test the production build locally:

```bash
cd portfolio
npm run build
npm run preview
```

This will build and serve your site locally at `http://localhost:4173/AQUACY/` to ensure everything works correctly.

## File Structure Checklist

Make sure you have:
- ✅ `.github/workflows/deploy.yml` in the **root** of your repository
- ✅ `portfolio/vite.config.ts` with `base: '/AQUACY/'`
- ✅ All portfolio files in the `portfolio/` subdirectory
- ✅ `README.md` in the root (your GitHub profile)

## Custom Domain (Optional)

To use a custom domain:
1. Go to Settings > Pages
2. Add your custom domain in the "Custom domain" field
3. Follow GitHub's instructions to configure your DNS
4. Update `base: '/'` in `portfolio/vite.config.ts` if using a root domain