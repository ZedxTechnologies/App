# Zedx Technologies — Official Website

A premium, modern software agency website built with Next.js 14, Tailwind CSS, and smooth scroll animations.

---

## 🗂 Folder Structure

```
zedx-technologies/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, fonts, animations
│   │   ├── layout.tsx           # Root layout with SEO metadata
│   │   └── page.tsx             # Main page (assembles all sections)
│   └── components/
│       ├── Navbar.tsx           # Sticky nav with mobile menu
│       ├── Footer.tsx           # Footer with links & socials
│       └── sections/
│           ├── Hero.tsx         # Landing hero section
│           ├── About.tsx        # About Zedx section
│           ├── Services.tsx     # 8 service cards
│           ├── WhyUs.tsx        # Why Choose Us + tech marquee
│           ├── Process.tsx      # 5-step dev process
│           ├── Portfolio.tsx    # Portfolio placeholder
│           ├── Testimonials.tsx # 6 client testimonials
│           ├── CTA.tsx          # Call-to-action block
│           └── Contact.tsx      # Contact form + info
├── public/                      # Static assets (add favicon here)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── vercel.json
└── .gitignore
```

---

## ⚙️ Tech Stack

| Layer      | Technology                    |
|------------|-------------------------------|
| Framework  | Next.js 14 (App Router)       |
| Language   | TypeScript                    |
| Styling    | Tailwind CSS                  |
| Fonts      | Syne (display) + DM Sans + JetBrains Mono |
| Icons      | Lucide React                  |
| Animations | CSS transitions + keyframes   |
| Deployment | Vercel                        |

---

## 🚀 Local Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Navigate to project folder
cd zedx-technologies

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

---

## 🏗 Production Build

```bash
# Build for production
npm run build

# Start production server locally
npm run start
```

---

## 🌐 Deploy to Vercel

### Option A: Deploy via Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
cd zedx-technologies
vercel

# Follow prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: zedx-technologies
# - Directory: ./

# For production deployment:
vercel --prod
```

### Option B: Deploy via GitHub + Vercel Dashboard

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Zedx Technologies website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zedx-technologies.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live in ~2 minutes! 🎉

### Environment Variables (if adding contact form backend)
In Vercel dashboard → Settings → Environment Variables:
```
# Optional: Add email service keys
RESEND_API_KEY=your_key_here
```

---

## 📧 Setting Up the Contact Form (Optional)

The contact form currently shows a success state after submission. To send real emails:

1. Install Resend:
```bash
npm install resend
```

2. Create `src/app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message, service } = await req.json();
  
  await resend.emails.send({
    from: 'website@zedxtechnologies.com',
    to: 'connectzedx@gmail.com',
    subject: `New inquiry from ${name} — ${service}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Service:</strong> ${service}</p>
           <p><strong>Message:</strong> ${message}</p>`,
  });
  
  return NextResponse.json({ success: true });
}
```

3. Update the form's `handleSubmit` to call this API route.

---

## 🎨 Customization

### Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --bg-primary: #050505;
  --text-primary: #f5f5f5;
  /* etc. */
}
```

### Fonts
Change Google Fonts import in `globals.css` and update font-family references.

### Content
- Edit company info in each section component
- Update testimonials in `Testimonials.tsx`
- Add real portfolio projects in `Portfolio.tsx`

### SEO
Update metadata in `src/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
  // ...
};
```

---

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Sticky navbar with blur effect on scroll  
- ✅ Smooth scroll-triggered animations
- ✅ Contact form with validation
- ✅ Tech stack marquee animation
- ✅ SEO-optimized metadata
- ✅ Custom scrollbar
- ✅ Noise texture overlay
- ✅ Grid background pattern
- ✅ Dark theme throughout
- ✅ Google Fonts (Syne + DM Sans + JetBrains Mono)
- ✅ Premium card hover effects

---

## 📞 Contact

**Zedx Technologies**  
📞 +91 96917 73489  
📧 connectzedx@gmail.com  
📸 [@zedxtechnologies](https://www.instagram.com/zedxtechnologies/)  
🐦 [@connectzedx](https://x.com/connectzedx)  
📍 [Google Business](https://share.google/VXqxlahMjJKbM2KGm)
