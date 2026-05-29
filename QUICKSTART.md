# 🚀 Quick Start Guide - SIS Website

## 5-Minute Setup

### Step 1: Download & Install (2 min)

```bash
# Navigate to the folder with all the files
cd sis-website

# Install dependencies (coffee break ☕)
npm install
```

### Step 2: Run Locally (1 min)

```bash
npm run dev
```

Open http://localhost:3000 in your browser. You see the site live!

---

## Deploy to the Web (2 min)

### Option A: Vercel (RECOMMENDED - Easiest)

1. **Sign up free**: https://vercel.com
2. **Connect GitHub** (or upload folder)
3. **Click "Deploy"**
4. **Done!** Your site is live with a `.vercel.app` domain

Or from terminal:
```bash
npm i -g vercel
vercel
```

### Option B: Netlify

1. Sign up: https://netlify.com
2. Drag & drop the `sis-website` folder
3. Done!

### Option C: Your Own Server

```bash
# Build for production
npm run build

# Start server
npm start
```

Then deploy to:
- AWS
- DigitalOcean
- Heroku
- Any hosting with Node.js support

---

## Customize Content

### Change Text on Homepage
Edit `app/page.tsx`:
- Line 30: Hero headline
- Line 40: Hero subheading
- Line 43: Value proposition

### Change Projects Data
In `app/page.tsx`, find the `projects` array and update:
```typescript
{
  name: 'Your Project Name',
  location: 'Your Location',
  investment: '$XXX,000',
  roi: 'XX%',
  // ... other fields
}
```

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  'navy': { /* your shades */ },
  'gold': { /* your accent */ },
}
```

### Change Fonts
Edit `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT');
```

---

## Add Form Submission

### Option 1: Telegram Bot (Instant Notifications)

1. Create bot on Telegram: @BotFather
2. Get `BOT_TOKEN` and `CHAT_ID`
3. Add to `.env.local`:
```
TELEGRAM_BOT_TOKEN=your_token
TELEGRAM_CHAT_ID=your_chat_id
```

4. Uncomment Telegram code in `app/api/submit-form/route.ts`

### Option 2: Google Sheets (Simple Database)

1. Use Zapier.com (free)
2. Connect form submission → Google Sheets
3. No coding required!

### Option 3: Email (SendPulse)

1. Sign up: https://sendpulse.com
2. Get API key
3. Add to `.env.local`:
```
SENDPULSE_API_KEY=your_api_key
SENDPULSE_TEMPLATE_ID=your_template_id
```

4. Uncomment email code in `app/api/submit-form/route.ts`

---

## Analytics Setup

### Google Analytics
1. Go to https://analytics.google.com
2. Create new property
3. Get **Measurement ID** (G-XXXXXXXXXX)
4. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
5. Update in `app/layout.tsx`

### Meta Pixel
1. Go to https://business.facebook.com/tools/meta-pixel
2. Create new pixel
3. Get **Pixel ID**
4. Add to `.env.local`: `NEXT_PUBLIC_META_PIXEL_ID=your_id`
5. Update in `app/layout.tsx`

---

## Domain & Email

### Get Your Own Domain

1. Buy at: GoDaddy, Namecheap, or Google Domains
2. Point to Vercel DNS
3. Update in Vercel project settings

### Email (mail@yoursite.com)

Use free option:
- **Vercel Aliases** (if using Vercel)
- **Mailgun** (free tier)
- **SendGrid** (free tier)

Or use Google Workspace ($12/month/user)

---

## Monitor Performance

### Check Site Speed
- https://pagespeed.web.dev (free)
- Vercel Analytics (built-in)
- Google Analytics (real visitors)

### Check Form Submissions
- Telegram (instant notifications)
- Google Sheets (spreadsheet)
- Email (Gmail inbox)

---

## Troubleshooting

### "Port 3000 already in use"
```bash
# Kill the process
lsof -i :3000
kill -9 <PID>

# Or use different port
npm run dev -- -p 3001
```

### Images not showing?
Add domain to `next.config.js`:
```js
images: {
  domains: ['your-image-domain.com'],
}
```

### Form not submitting?
1. Check browser console (F12)
2. Look for errors
3. Make sure API route exists at `app/api/submit-form/route.ts`

### Slow site?
Run Lighthouse audit (DevTools → Lighthouse)

---

## File Structure (What You Got)

```
sis-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage (ALL SECTIONS)
│   ├── contact/
│   │   └── page.tsx        # Contact + Multi-step form
│   ├── api/
│   │   └── submit-form/    # Form handler
│   └── globals.css         # All styles & design system
├── components/
│   ├── Navigation.tsx      # Top nav bar
│   ├── HeroSection.tsx     # Hero with animations
│   └── Footer.tsx          # Footer
├── public/                 # Static files (images, etc.)
├── package.json            # Dependencies
├── tailwind.config.js      # Design tokens
└── README.md              # Full documentation
```

---

## Next Steps

1. ✅ Deploy (choose Vercel, Netlify, or your host)
2. ✅ Connect analytics (Google Analytics + Meta Pixel)
3. ✅ Setup form (Telegram, Zapier, or email)
4. ✅ Buy domain
5. ✅ Customize content & colors
6. ✅ Test on mobile
7. ✅ Start capturing leads!

---

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion
- **Vercel Deploy**: https://vercel.com/docs

---

## 🎯 You're All Set!

Your polished, high-converting investment consultancy website is ready. It's:

✅ Beautifully designed (luxury aesthetic)
✅ Fully responsive (mobile-perfect)
✅ Fast-loading (optimized)
✅ SEO-friendly
✅ Form-ready (qualified leads)
✅ Analytics-ready (track everything)
✅ Production-grade code

Now go convert those leads! 🚀
