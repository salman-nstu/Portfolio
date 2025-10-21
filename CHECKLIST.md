# Portfolio Launch Checklist ✅

## Before Running the App

### 1. Install Dependencies
```powershell
npm install
```
Status: ⬜ Not Done

---

## Required Changes (Must Do)

### 2. Replace Images
Location: `src/assets/`

- [ ] `avatar-1.svg` - Your profile photo (Home page)
- [ ] `avatar-2.svg` - Your profile photo (About page)  
- [ ] `logo.svg` - Your logo/initials (Dark theme)
- [ ] `light-logo.svg` - Your logo/initials (Light theme)
- [ ] `resume.pdf` - Your actual CV/Resume

### 3. Replace Project Screenshots
Location: `src/assets/`

- [ ] `native-jobs.png` → IoT Smart Farming System screenshot
- [ ] `cryptoverse.png` → ProCoordinator CPM Calculator screenshot
- [ ] `travel.png` → Academic Projects screenshot
- [ ] `blog-1.svg` → Algorithm Implementations screenshot

### 4. Setup Contact Form (EmailJS)

- [ ] Create account at https://www.emailjs.com/
- [ ] Connect Gmail (salman.nstu@gmail.com)
- [ ] Create email service
- [ ] Create email template
- [ ] Get Service ID
- [ ] Get Template ID
- [ ] Get Public Key
- [ ] Copy `.env.example` to `.env`
- [ ] Add EmailJS credentials to `.env`

---

## Optional Changes (Should Do)

### 5. Update Project URLs
File: `src/components/portfolio/Menu.jsx`

- [ ] Add GitHub repo URLs for your projects
- [ ] Add live demo URLs (if deployed)
- [ ] Update project descriptions if needed

### 6. Update Social Media Links
File: `src/components/home/HeaderSocials.jsx`

✅ GitHub: Already added
✅ LinkedIn: Already added
- [ ] Update Facebook URL (or remove link)
- [ ] Update Twitter URL (or remove link)
- [ ] Update Dev.to URL (or remove link)
- [ ] Update Hashnode URL (or remove link)

### 7. Customize Styling (Optional)
- [ ] Review and adjust colors in `src/index.css`
- [ ] Adjust component-specific styles if needed

---

## Testing

### 8. Test the Application

- [ ] Run `npm start`
- [ ] Check Home page loads correctly
- [ ] Check About section displays your info
- [ ] Check Resume/Experience section
- [ ] Check Portfolio projects
- [ ] Check Services section
- [ ] Test project filters (All, Frontend, Backend, IoT, Java)
- [ ] Test dark/light theme toggle
- [ ] Test contact form (after EmailJS setup)
- [ ] Test on mobile view (responsive design)
- [ ] Test all navigation links
- [ ] Test social media links open correctly
- [ ] Test "Download CV" button

---

## Deployment

### 9. Deploy Your Portfolio

Choose one platform:

**Option A: Vercel (Recommended)**
- [ ] Push code to GitHub
- [ ] Connect GitHub to Vercel
- [ ] Deploy

**Option B: Netlify**
- [ ] Push code to GitHub
- [ ] Connect GitHub to Netlify
- [ ] Deploy

**Option C: GitHub Pages**
- [ ] Install gh-pages: `npm install gh-pages --save-dev`
- [ ] Add deploy scripts to package.json
- [ ] Run `npm run deploy`

---

## Post-Deployment

### 10. Share Your Portfolio

- [ ] Add portfolio URL to GitHub profile
- [ ] Add portfolio URL to LinkedIn
- [ ] Share on social media
- [ ] Add to your resume/CV
- [ ] Update email signatures with portfolio link

---

## Maintenance

### 11. Keep Updated

- [ ] Add new projects as you complete them
- [ ] Update work experience
- [ ] Keep skills/technologies current
- [ ] Update contact information if changed
- [ ] Refresh screenshots periodically

---

## Quick Reference

**Start Development Server:**
```powershell
npm start
```

**Build for Production:**
```powershell
npm run build
```

**Test Production Build:**
```powershell
npm run build
npx serve -s build
```

---

## Important Files to Remember

- `.env` - EmailJS credentials (DON'T commit to Git)
- `.env.example` - Template for .env file
- `src/assets/` - All images and resume
- `src/components/portfolio/Menu.jsx` - Projects
- `src/components/resume/WorkExperience.jsx` - Experience
- `src/components/home/HeaderSocials.jsx` - Social links

---

## Need Help?

📖 See `SETUP_GUIDE.md` for detailed instructions
📋 See `CUSTOMIZATION_SUMMARY.md` for what was changed

---

**Current Status:** Portfolio code customized ✅
**Next Step:** Complete the checklist above! 🚀

Good luck, Salman! 💪
