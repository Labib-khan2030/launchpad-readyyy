# Cønexus AI - Quick Start

## What's Ready

Your Cønexus AI app is fully configured with:

- ✅ **Supabase Database**: Waitlist table created and ready
- ✅ **App Code**: App.html integrated with Supabase (UI unchanged)
- ✅ **Deployment Files**: Ready to deploy to Vercel
- ✅ **Index.html**: Created in `public/` folder

## Deploy Now (2 minutes)

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - Conexus AI with Supabase"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/conexus-ai.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to **vercel.com**
2. Click **Sign up with GitHub**
3. Click **Add New... > Project**
4. Import your GitHub repo
5. Click **Deploy**

**Done!** Your app is live at `vercel-generated-url.vercel.app`

### 3. Add Custom Domain

1. Go to Vercel project dashboard
2. Click **Settings > Domains**
3. Add your domain
4. Update nameservers at domain registrar
5. Wait 24 hours for DNS propagation

**Full guide**: See `DEPLOYMENT_GUIDE.md`

---

## Test Locally

Want to test before deploying?

```bash
# Install Python (if you don't have it)
# Then run a simple server
python -m http.server 8000

# Visit http://localhost:8000
```

Open `public/index.html` in your browser. Try the waitlist form - it will send data to Supabase!

---

## App Features

- **Waitlist Form**: Username + Email → Saved to Supabase
- **Live Counter**: Shows total waitlist count
- **Username Display**: Shows latest usernames who joined
- **Uptime Counter**: Shows how long page has been running
- **Mobile Menu**: Responsive navigation
- **Beautiful UI**: Fully styled with Tailwind CSS

---

## File Structure

```
project/
├── public/
│   └── index.html          ← Your deployed app (copy of App.html)
├── src/
│   └── App.html            ← Source file (editable)
├── vercel.json             ← Vercel config
├── DEPLOYMENT_GUIDE.md     ← Full deployment instructions
└── QUICK_START.md          ← This file
```

---

## Customize Your App

**Want to change text or colors?**
- Edit `src/App.html`
- All CSS and HTML is inline (easy to modify)
- Commit to GitHub
- Vercel auto-redeploys

**Example**: To change the hero title:
```html
<!-- Find this line -->
<h1 class="...">The Agentic Group Chat</h1>

<!-- Change to -->
<h1 class="...">Your Custom Title</h1>
```

---

## Database Access

View your waitlist entries anytime:

1. Go to **supabase.co**
2. Log into your project
3. Click **Tables > waitlist**
4. See all signups with timestamps

---

## Environment

- **Database**: Supabase (connected)
- **CDN**: Tailwind CSS + Lucide Icons (CDN loaded)
- **Hosting**: Vercel (free tier)
- **Domain**: Your custom domain (optional, ~$10/year)

**Total cost**: $0-15/year (domain only, everything else free)

---

## Need Help?

1. **Deployment issues?** → See `DEPLOYMENT_GUIDE.md`
2. **App not working?** → Check browser console (F12)
3. **Database not saving?** → Check Supabase dashboard for errors
4. **DNS propagation?** → Check https://mxtoolbox.com/dnspropagate

---

**You're all set!** Deploy to Vercel and share your custom domain with the world.
