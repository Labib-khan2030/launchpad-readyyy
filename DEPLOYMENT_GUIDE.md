# Cønexus AI - Deployment & Domain Setup Guide

Your app is ready to deploy with Supabase database connected! Here's how to get it live with your custom domain.

## What's Been Done

✅ **Supabase Database**: Created `waitlist` table
✅ **App Modified**: App.html now sends waitlist data to Supabase (UI unchanged)
✅ **Deployment Ready**: Ready to deploy to Vercel

---

## Deployment to Vercel

### Step 1: Create a GitHub Repository

1. Go to **github.com** and log in (or create an account)
2. Click **+** (top right) → **New repository**
3. Name it: `conexus-ai`
4. Click **Create repository**

### Step 2: Deploy to Vercel

1. Go to **vercel.com** and click **Sign up** (or log in)
2. Click **Sign up with GitHub** (easiest option)
3. Authorize GitHub access
4. Click **Add New...** → **Project**
5. Click **Import Git Repository**
6. Paste your GitHub repository URL: `https://github.com/YOUR_USERNAME/conexus-ai`
7. Click **Import**
8. In the settings screen, **no environment variables needed** (they're hardcoded in App.html)
9. Click **Deploy**

**Your site is now live at a Vercel URL like**: `https://conexus-ai-xxxxx.vercel.app`

---

## Connect Your Custom Domain

### Option A: Buy Domain from Namecheap (Cheapest - ~$8/year)

#### Step 1: Purchase Domain
1. Go to **namecheap.com**
2. Search for your desired domain (e.g., `conexus.ai`)
3. Add to cart and checkout
4. Complete payment

#### Step 2: Connect to Vercel
1. Go to your Vercel project dashboard
2. Click **Settings** → **Domains**
3. Click **Add Domain**
4. Enter your domain: `conexus.ai`
5. Choose **Add Domain**
6. Vercel shows you **nameservers** (e.g., `ns1.vercel-dns.com`)

#### Step 3: Update Namecheap DNS
1. Go to **Namecheap dashboard** → **My Domains**
2. Click the domain → **Manage**
3. Go to **Nameservers** tab
4. Select **Custom DNS**
5. Add Vercel's nameservers:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
   - `ns3.vercel-dns.com`
6. Save changes

**Wait 24 hours** for DNS to propagate. Your domain will then point to your Vercel app!

---

### Option B: Use GoDaddy (Popular - ~$12/year)

#### Step 1: Purchase Domain
1. Go to **godaddy.com**
2. Search and buy your domain
3. Complete checkout

#### Step 2: Connect to Vercel
1. Same steps as Option A, Steps 2-6 above

#### Step 3: Update GoDaddy DNS
1. Go to **GoDaddy dashboard** → **My Domains**
2. Click your domain
3. Go to **DNS** section
4. Find **Nameservers**
5. Replace with Vercel nameservers (same as Option A)
6. Save

---

### Option C: Use Domains.com (Budget - ~$7/year)

Same process as above, just search `domains.com` instead.

---

## Verify Everything Works

1. After DNS propagates (usually 1-24 hours):
   - Visit your custom domain
   - You should see your Cønexus AI app

2. Test the waitlist:
   - Click "I'm interested, join waitlist"
   - Enter username and email
   - It should save to Supabase
   - Refresh page - your name appears in "Latest usernames"

3. Check Supabase dashboard:
   - Go to **supabase.co** → Your project
   - Click **Tables** → **waitlist**
   - You should see your test entries

---

## Troubleshooting

**Domain not connecting?**
- Check DNS propagation: https://mxtoolbox.com/mxtoolbox/dnspropagate
- May take up to 48 hours to fully propagate
- Flush your DNS: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

**Waitlist not saving?**
- Open browser console (F12)
- Look for error messages
- Check that Supabase credentials in App.html are correct

**Need to update your app?**
- Edit `src/App.html`
- Commit and push to GitHub
- Vercel automatically redeploys on every push

---

## Next Steps

1. **Buy your domain** (Option A, B, or C above)
2. **Add domain to Vercel** (Settings → Domains)
3. **Update DNS nameservers** at your domain registrar
4. **Wait 24 hours** for DNS to propagate
5. **Test everything** works

Your Cønexus AI app will then be live on your custom domain with full Supabase database integration!

---

**Questions?** Check the Vercel docs: https://vercel.com/docs/concepts/deployments/custom-domains
