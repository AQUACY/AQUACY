# Deploying to GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer

## Step-by-Step Deployment

### 1. Initialize Git Repository (if not already done)

```bash
cd portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 2. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository `portfolio`
4. **Important**: Do NOT initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### 3. Push Your Code to GitHub

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/AQUACYE/AQUACY.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. In the left sidebar, click "Pages"
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically run and deploy your site

### 5. Access Your Portfolio

After the deployment completes (usually 2-3 minutes), your portfolio will be available at:

```
https://YOUR_USERNAME.github.io/AQUACY/
```

## Automatic Deployments

Every time you push changes to the `main` branch, GitHub Actions will automatically:
1. Build your portfolio
2. Deploy it to GitHub Pages

## Manual Deployment Trigger

You can also manually trigger a deployment:
1. Go to the "Actions" tab in your repository
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Custom Domain (Optional)

To use a custom domain:
1. Go to Settings > Pages
2. Add your custom domain in the "Custom domain" field
3. Follow GitHub's instructions to configure your DNS

## Troubleshooting

### Build Fails
- Check the Actions tab for error logs
- Ensure all dependencies are in `package.json`
- Make sure the build command works locally: `npm run build`

### 404 Error
- Verify the `base` path in `vite.config.ts` matches your repository name
- Wait a few minutes for DNS propagation

### Changes Not Showing
- Clear your browser cache
- Check if the workflow completed successfully in the Actions tab
- Verify you pushed to the `main` branch

## Local Build Test

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

This will build and serve your site locally to ensure everything works correctly.
