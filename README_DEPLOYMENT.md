# Cønexus AI - Complete Setup

## Done: Database + App Integration

Your single-page HTML app is now fully connected to Supabase and ready to deploy.

### What Changed

**src/App.html** - Modified to use Supabase:
- Added Supabase JavaScript library (CDN)
- Replaced localStorage with Supabase database calls
- Added `loadUsers()` - fetches from database
- Added `addUser()` - saves to database
- Everything else remains 100% identical
- UI looks exactly the same

**Database Table Created**:
```sql
CREATE TABLE waitlist (
  id uuid PRIMARY KEY,
  username text NOT NULL,
  email text NOT NULL,
  created_at timestamp DEFAULT now()
)
```

---

## 3-Step Deployment

### Step 1: Push Code to GitHub

```bash
cd /path/to/project
git init
git add .
git commit -m "Conexus AI - ready to deploy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/conexus-ai.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to **vercel.com**
2. Sign up with GitHub
3. Click **Add New > Project**
4. Select `conexus-ai` repository
5. Click **Deploy**

**Your app is now live at**: `https://conexus-ai-xxxxx.vercel.app`

### Step 3: Add Custom Domain

1. **Buy domain** (Namecheap/GoDaddy - ~$10/year):
   - Go to namecheap.com or godaddy.com
   - Search domain, add to cart, buy

2. **Connect in Vercel**:
   - Vercel dashboard > Settings > Domains
   - Add your domain
   - Vercel shows nameservers

3. **Update DNS**:
   - Domain registrar dashboard
   - Find Nameservers section
   - Replace with Vercel nameservers
   - Save

4. **Wait 24 hours** for DNS to propagate

**Your app is now live at**: `https://yourdomain.com`

---

## Verify It Works

### Local Testing (Before Deployment)

```bash
# Start simple server
python -m http.server 8000

# Visit http://localhost:8000
```

Test waitlist:
1. Click "I'm interested, join waitlist"
2. Enter username + email
3. Click submit
4. See success message
5. Username appears in list
6. Refresh page - data persists

### After Deployment

Same tests but at your deployed URL or custom domain.

Check Supabase dashboard for entries:
- supabase.co > Your Project > Tables > waitlist

---

## File Overview

```
project/
├── src/
│   └── App.html              ← Main app (edit this)
├── public/
│   └── index.html            ← Deployment copy
├── vercel.json               ← Vercel config
├── QUICK_START.md            ← Fast guide
├── DEPLOYMENT_GUIDE.md       ← Detailed domain setup
├── APP_STATUS.md             ← Current status
└── README_DEPLOYMENT.md      ← This file
```

---

## Key Info

**Supabase Credentials** (hardcoded in App.html - safe):
- URL: `https://0ec90b57d6e95fcbda19832f.supabase.co`
- Key: Public anonymous key (read/write only to waitlist)

**Vercel Deployment**:
- Free tier includes unlimited deployments
- Auto-deploys on git push
- Free SSL/HTTPS
- Free domain (vercel.app) or add custom domain

**Costs**:
- Supabase: Free (unlimited for small projects)
- Vercel: Free
- Custom domain: $8-15/year (optional)

---

## Troubleshooting

**App not showing after deployment?**
- Clear browser cache
- Check Vercel deployment logs
- Ensure `public/index.html` exists

**Waitlist not saving?**
- Open browser console (F12)
- Look for JavaScript errors
- Check Supabase dashboard for table

**Domain not working?**
- Check DNS propagation: mxtoolbox.com/dnspropagate
- Wait 24 hours if just updated
- Verify nameservers in domain registrar

**Want to update app?**
- Edit `src/App.html`
- Commit and push to GitHub
- Vercel auto-deploys

---

## Questions?

1. **Deployment**: See DEPLOYMENT_GUIDE.md
2. **Quick start**: See QUICK_START.md
3. **Vercel docs**: vercel.com/docs
4. **Supabase docs**: supabase.com/docs

---

## You're Ready!

Your Cønexus AI app:
- ✅ Has a Supabase database
- ✅ Can accept waitlist signups
- ✅ Can be deployed to Vercel
- ✅ Can use a custom domain

Push to GitHub and deploy now!

