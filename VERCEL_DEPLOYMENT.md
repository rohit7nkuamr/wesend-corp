# 🚀 Vercel Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **westendcorp** (or your choice)
   - In which directory is your code located? **./**
   - Want to override settings? **N**

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. **Go to Vercel**
   - Visit: https://vercel.com
   - Sign up or login with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Import your GitHub repository: `rohit7nkuamr/wesend-corp`

3. **Configure Project**
   - **Framework Preset:** Next.js
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

4. **Environment Variables**
   Add these in Vercel dashboard:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   NEXT_PUBLIC_SITE_NAME=Westend Corporation
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - Your site will be live at: `https://westendcorp.vercel.app`

## 📝 Important Notes

### Backend API
- Currently, the API URL points to `localhost:8000`
- This will work for development but NOT in production
- You need to deploy your Django backend separately (e.g., Railway, Render, Heroku)
- Then update `NEXT_PUBLIC_API_URL` in Vercel environment variables

### Custom Domain (Optional)
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Automatic Deployments
- Every push to `main` branch will trigger automatic deployment
- Preview deployments for pull requests
- Rollback to previous deployments anytime

## 🔧 Post-Deployment

### Update Environment Variables
Once your backend is deployed:

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Update `NEXT_PUBLIC_API_URL` to your backend URL
5. Redeploy

### Test Your Deployment
- Visit your Vercel URL
- Check all pages load correctly
- Products page will show mock data until backend is connected
- Contact form will work once backend is deployed

## 🎯 Next Steps

1. ✅ Deploy frontend to Vercel (you're doing this now!)
2. ⏳ Deploy Django backend (Railway, Render, or PythonAnywhere)
3. ⏳ Update `NEXT_PUBLIC_API_URL` in Vercel
4. ⏳ Add products via Django admin
5. ⏳ Test end-to-end functionality

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Environment Variables Not Working
- Must start with `NEXT_PUBLIC_` to be accessible in browser
- Redeploy after changing environment variables
- Check they're set for the correct environment (Production/Preview)

### Images Not Loading
- Ensure images are in `public` folder
- Check image paths are correct
- Configure image domains in `next.config.js` if using external images

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Your GitHub Repo: https://github.com/rohit7nkuamr/wesend-corp
