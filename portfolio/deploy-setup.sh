#!/bin/bash

# Portfolio GitHub Pages Deployment Setup Script

echo "🚀 Portfolio Deployment Setup"
echo "=============================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "📝 Please enter your GitHub username:"
read github_username

if [ -z "$github_username" ]; then
    echo "❌ GitHub username cannot be empty"
    exit 1
fi

echo ""
echo "🔗 Setting up remote repository..."
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$github_username/AQUACY.git"
echo "✅ Remote added: https://github.com/$github_username/AQUACY.git"

echo ""
echo "📋 Staging files..."
git add .

echo ""
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Portfolio website with GitHub Pages deployment"

echo ""
echo "🌿 Setting main branch..."
git branch -M main

echo ""
echo "📤 Ready to push to GitHub!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub named 'AQUACY'"
echo "2. Run: git push -u origin main"
echo "3. Enable GitHub Pages in repository Settings > Pages"
echo "4. Select 'GitHub Actions' as the source"
echo ""
echo "Your portfolio will be available at:"
echo "https://$github_username.github.io/AQUACY/"
echo ""
echo "✨ Setup complete!"
