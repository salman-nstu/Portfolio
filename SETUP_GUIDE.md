# Portfolio Setup Guide - Md. Salman Khan

## ✅ Files Updated

Your portfolio has been successfully personalized with your information. Here's what was changed:

### 1. **Home Section** (`src/components/home/Home.jsx`)
- Updated name to: **Md. Salman Khan**
- Updated title to: **Software Engineering Student**

### 2. **About Section** (`src/components/about/About.jsx`)
- Updated biography with your background
- Updated location to: **Noakhali, Bangladesh**
- Updated education details
- Updated technology stack:
  - C / C++
  - Java
  - Python
  - HTML / CSS
  - JavaScript
  - IoT Systems

### 3. **Work Experience** (`src/components/resume/WorkExperience.jsx`)
- Added your current education at NSTU
- Added Youth Network Centre role (2020-2022)
- Added Mental Health Care volunteer role (2020-Present)

### 4. **Projects** (`src/components/portfolio/Menu.jsx`)
- IoT-Enabled Smart Farming System
- ProCoordinator – CPM Calculator
- Academic Projects Portfolio
- Algorithm Implementations

### 5. **Services** (`src/components/services/Services.jsx`)
- Java Software Development
- Web Development
- IoT System Prototyping

### 6. **Social Media Links** (`src/components/home/HeaderSocials.jsx`)
- GitHub: https://github.com/salman-nstu
- LinkedIn: https://www.linkedin.com/in/mrsksalman
- Other social links (update as needed)

### 7. **Meta Information**
- Updated page title in `public/index.html`
- Updated package name in `package.json`
- Updated README.md

---

## 🚀 Next Steps to Complete Setup

### Step 1: Install Dependencies
```powershell
npm install
```

### Step 2: Configure Email Service (Contact Form)

The contact form uses EmailJS to send emails. Follow these steps:

1. **Create an EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Set Up Email Service**
   - Click "Add New Service"
   - Choose your email provider (Gmail recommended)
   - Connect your email account

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use these variables in your template:
     - `{{name}}` - sender's name
     - `{{email}}` - sender's email
     - `{{subject}}` - message subject
     - `{{message}}` - message content

4. **Get Your API Keys**
   - Service ID: Found in "Email Services"
   - Template ID: Found in "Email Templates"
   - Public Key: Found in "Account" → "General"

5. **Create `.env` File**
   - Copy `.env.example` to `.env`
   - Fill in your EmailJS credentials:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
   REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   REACT_APP_EMAILJS_PUBLIC_API=your_public_key
   ```

### Step 3: Update Project Images

Replace the following images in `src/assets/` folder:

1. **Profile Images:**
   - `avatar-1.svg` - Home page profile image
   - `avatar-2.svg` - About page profile image
   - `logo.svg` - Dark theme logo
   - `light-logo.svg` - Light theme logo

2. **Project Screenshots:**
   - `native-jobs.png` → Your IoT Smart Farming System screenshot
   - `cryptoverse.png` → Your ProCoordinator CPM Calculator screenshot
   - `travel.png` → Your Academic Projects screenshot
   - `blog-1.svg` → Your Algorithm Implementations screenshot

3. **Resume/CV:**
   - `resume.pdf` - Your actual CV/resume file

### Step 4: Update Project Details

Edit `src/components/portfolio/Menu.jsx` to add:
- Live project URLs (if deployed)
- Correct GitHub repository URLs for each project
- Better project descriptions if needed

### Step 5: Update Social Media Links

Edit `src/components/home/HeaderSocials.jsx` to add your actual:
- Facebook URL (if you have one)
- Twitter/X URL (if you have one)
- Dev.to profile (if you have one)
- Hashnode profile (if you have one)

Or remove the ones you don't use.

### Step 6: Run the Application
```powershell
npm start
```

Your portfolio will open at: http://localhost:3000

---

## 📝 Additional Customizations

### Update Colors/Theme
- Edit `src/index.css` for global styles
- Edit individual component CSS files for specific sections

### Add More Projects
Edit `src/components/portfolio/Menu.jsx` and add new project objects:
```javascript
{
    id: 5,
    image: YourImage,
    title: "Project Name",
    category: ["Frontend", "Backend"],
    url: "https://yourproject.com",
    repositoryUrl: "https://github.com/yourusername/repo"
}
```

### Add More Work Experience
Edit `src/components/resume/WorkExperience.jsx` and add new experience objects.

---

## 🛠️ Troubleshooting

### PowerShell Script Execution Error
If you get a script execution error, run PowerShell as Administrator:
```powershell
Set-ExecutionPolicy RemoteSigned
```

### Port Already in Use
If port 3000 is busy:
```powershell
# Windows: Find and kill process
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Contact Form Not Working
- Check if `.env` file exists and has correct EmailJS credentials
- Verify EmailJS service is active
- Check browser console for errors

---

## 📧 Contact Information in Portfolio

Current contact email configured: **salman.nstu@gmail.com**

To receive form submissions:
1. Configure EmailJS to send to this email
2. Or update the email in EmailJS template settings

---

## 🎨 Your Portfolio Sections

1. **Home** - Introduction with name and title
2. **About** - Biography and skills
3. **Services** - Services you offer
4. **Resume** - Work experience and education
5. **Portfolio** - Your projects with filters
6. **Testimonials** - Client testimonials (optional)
7. **Blog** - Blog posts (optional)
8. **Contact** - Contact form

---

## 📦 Deployment

When ready to deploy:

### Option 1: GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d build"
npm run deploy
```

### Option 2: Vercel
1. Push code to GitHub
2. Import repository on vercel.com
3. Deploy

### Option 3: Netlify
1. Push code to GitHub
2. Import repository on netlify.com
3. Deploy

---

## ✨ Final Checklist

- [ ] Install dependencies (`npm install`)
- [ ] Configure EmailJS (.env file)
- [ ] Replace profile images
- [ ] Replace project screenshots
- [ ] Add your resume PDF
- [ ] Update project URLs
- [ ] Update social media links
- [ ] Test contact form
- [ ] Run the app (`npm start`)
- [ ] Test all sections
- [ ] Deploy to hosting platform

---

**Your portfolio is ready to launch! 🚀**

For any issues or questions, check the console logs or feel free to ask for help.
