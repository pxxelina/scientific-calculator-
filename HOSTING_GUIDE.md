# Complete Guide to Hosting Your Calculator on GitHub

Hello Lina! This guide will walk you through the entire process of hosting your calculator on GitHub, from downloading the code to making it live on the web.

## Step 1: Download Your Calculator Code from Mocha

1. Look for the **Download** button at the top of your Mocha interface
2. Click this button to download a ZIP file containing all your calculator code
3. Once downloaded, extract/unzip this file to a folder on your computer
   - Right-click the ZIP file and select "Extract All" (Windows) or double-click (Mac)
   - Choose a location you can easily find (like your Desktop or Documents folder)
   - Name the folder something like "lina-calculator"

## Step 2: Set Up Git on Your Computer

Git is the tool that helps you upload your code to GitHub.

1. **Check if Git is installed**:
   - Open your computer's terminal/command prompt
   - Type `git --version` and press Enter
   - If you see a version number, Git is already installed; skip to Step 3
   - If not, continue to install Git

2. **Install Git**:
   - **For Windows**: Download from [git-scm.com](https://git-scm.com/) and follow the installation wizard
   - **For Mac**: Type `xcode-select --install` in Terminal, or download from [git-scm.com](https://git-scm.com/)
   - **For Linux**: Use your package manager (e.g., `sudo apt-get install git` for Ubuntu)

3. **Configure Git** (first-time setup):
   - Open terminal/command prompt
   - Set your name: `git config --global user.name "Your Name"`
   - Set your email: `git config --global user.email "your.email@example.com"`

## Step 3: Create a GitHub Account

1. Go to [github.com](https://github.com/)
2. Click "Sign up" and follow the instructions to create an account
3. Verify your email address when prompted
4. Choose the free plan when asked

## Step 4: Create a New GitHub Repository

1. After logging in to GitHub, click the "+" icon in the top-right corner
2. Select "New repository"
3. Name your repository (e.g., "lina-calculator" or "scientific-calculator")
4. Add a description if you'd like (e.g., "A scientific calculator built by Lina Yassire")
5. Keep it as a Public repository
6. **Do not** initialize with a README, .gitignore, or license (we'll upload your existing code)
7. Click "Create repository"

## Step 5: Upload Your Calculator Code to GitHub

Now you'll see instructions for uploading existing code. Follow these steps:

1. Open terminal/command prompt
2. Navigate to your calculator folder:
   ```
   cd path/to/your/lina-calculator
   ```
   (Replace "path/to/your/lina-calculator" with the actual path to your folder)

3. Initialize Git in this folder:
   ```
   git init
   ```

4. Add all your files to Git:
   ```
   git add .
   ```

5. Commit your files:
   ```
   git commit -m "Initial commit of my calculator"
   ```

6. Connect to your GitHub repository (replace USERNAME with your GitHub username and REPOSITORY with your repository name):
   ```
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   ```

7. Upload your code:
   ```
   git push -u origin main
   ```
   - If you get an error about "main" branch, try using "master" instead:
     ```
     git push -u origin master
     ```

8. If prompted, enter your GitHub username and password
   - If you keep getting password prompts, you might need to [set up a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

## Step 6: Enable GitHub Pages to Host Your Calculator

1. Go to your repository on GitHub.com
2. Click "Settings" (tab at the top of your repository)
3. Scroll down to the "GitHub Pages" section
4. Under "Source", click the dropdown and select "main" branch (or "master" if that's what you used)
5. Click "Save"
6. Wait a few minutes for GitHub to build your site
7. Scroll back to the "GitHub Pages" section to find the URL where your calculator is now hosted!
   - It will look something like: `https://yourusername.github.io/repository-name/`

## Step 7: View and Share Your Calculator!

1. Visit the URL GitHub provided to see your calculator live on the internet!
2. Share this URL with friends, family, or add it to your portfolio
3. Anytime you want to make changes, just:
   - Update the files on your computer
   - Use `git add .`, `git commit -m "Your message"`, and `git push` to update GitHub
   - Your website will automatically update!

## Common Issues and Solutions

- **Error pushing to GitHub**: Make sure you've set up Git correctly with your credentials
- **Page not showing up**: It can take up to 10 minutes for GitHub Pages to update
- **Blank page or errors**: Check your browser's developer console (F12) for error messages
- **Files not updating**: Make sure you've committed and pushed your changes

## Need More Help?

- GitHub's documentation: [docs.github.com](https://docs.github.com/)
- Git basics: [git-scm.com/book](https://git-scm.com/book)
- Feel free to ask Mocha for more specific help!

Congratulations! Your "Lina Yassire's Calculator" is now hosted online for the world to see!
