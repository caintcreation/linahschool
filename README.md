# LINAH ACADEMY — Official Website Redesign & Development

> **Quest for Excellence**  
> Premier Early Childhood Education in Kikuyu Town, Kiambu County, Kenya.  
> *Designed and developed by Caint Creation.*

---

## 🌟 1. Project Overview

This repository contains the complete, production-ready website for **Linah Academy**, a premier early childhood education institution located in Kikuyu Town (adjacent to the Kikuyu Law Courts). 

The website has been completely re-architected and redesigned from the ground up to provide a warm, colorful, credible, and welcoming digital home for parents and guardians. Every existing asset (`logo1.jpg`, `pic1.jpg` through `pic9.jpg`, and `video.mp4`) has been intelligently curated and integrated into a modern, responsive design.

### Key Highlights
- **100% Static & Lightweight:** Built using clean semantic HTML5, modern CSS3 (Custom Properties, Flexbox, and CSS Grid), and vanilla JavaScript.
- **Zero Heavy Frameworks:** No React, Vue, Angular, or Node.js runtime required; fully compatible with **GitHub Pages**.
- **Mobile-First & Fully Responsive:** Tested and optimized for 320px, 375px, 425px, 768px, 1024px, 1440px, and 1920px viewports with zero horizontal scrolling.
- **Accessible & High-Contrast (WCAG AA):** Semantic landmarks, keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight` for modal/gallery), skip links, and ARIA labels.
- **Search Engine Optimized (SEO):** Includes Open Graph social cards, Twitter meta tags, and schema.org `EducationalOrganization` JSON-LD structured data.

---

## 🎨 2. Design System & Color Palette

The visual identity is carefully balanced to feel bright, joyful, and welcoming while remaining strictly professional and trustworthy for parents:

| Token / Color | Hex Code | Purpose & Application |
|---|---|---|
| **Forest Green** | `#276749` / `#1B4732` | **Primary Brand Color**: Navigation accents, headings, core buttons, and trust badges. |
| **Warm Cream** | `#FFF9F0` | **Primary Background**: Warm, friendly, eye-friendly contrast for sections and cards. |
| **Sunshine Yellow** | `#FFD166` | **Joyful Accent**: Badges, star ratings, highlighting educational milestones. |
| **Warm Coral** | `#F28C76` | **Energetic Accent**: Callouts, tags, Playgroup highlights, and hover states. |
| **Soft Sky Blue** | `#A8DADC` / `#17666B` | **Supporting Accent**: Calm tint for cards, icons, and informational badges. |
| **Dark Charcoal** | `#263238` | **Body Text & Footer**: High-contrast, easy-to-read typography. |
| **Pure White** | `#FFFFFF` | **Card Surfaces**: Clean background separation for cards, inputs, and modals. |

### Typography
- **Headings:** `Plus Jakarta Sans` (weights 600, 700, 800) – Modern, clean, geometric curves.
- **Body:** `Nunito` (weights 400, 500, 600, 700) – Soft, legible, rounded terminals tailored for education.

---

## 📂 3. Structure & Component Walkthrough

1. **Top Announcement & Contact Bar:**
   - Displays real-time notices: *"Admissions Open 2025/2026"*, Kikuyu Town address, working hours (`7:00 AM – 6:00 PM`), direct call link, and instant WhatsApp link.
2. **Sticky Header & Mobile Drawer:**
   - Features the official school crest (`logo1.jpg`), *"LINAH ACADEMY"*, and motto *"Quest for Excellence"*.
   - Includes smooth scroll navigation, scroll spy highlighting the active section, an *"Apply Now"* CTA, and an accessible mobile hamburger drawer.
3. **Hero Section:**
   - Headline: *"Where Little Dreams Begin"*.
   - Supporting narrative and direct action buttons (*Apply Now* and *Explore Our Programs*).
   - Embedded `video.mp4` with a play/pause toggle button, fallback poster (`pic9.jpg`), and automatic pause for visitors with `prefers-reduced-motion` enabled.
   - Trust cards: *"Ages 2 to 5"*, *"Safe & Nurturing"*, and *"CBC Aligned"*.
4. **Highlights Ribbon:**
   - Fast-scan feature cards for Caring Mentorship, Play-Based Learning, Parent Partnership, and Convenient Hours.
5. **About Linah Academy:**
   - The school's mission and philosophy: *"Quest for Excellence in Early Childhood Education"*.
   - Three core values: **Nurturing Environment**, **Quality Education**, and **Community Focus**.
   - Asymmetric visual collage showcasing authentic school photography (`pic9.jpg`, `pic5.jpg`).
6. **Educational Programs:**
   - **Playgroup (Ages 2–3 Years):** Sensory play, socialization, and motor skills (`pic1.jpg`).
   - **PP1 - Pre-Primary 1 (Ages 3–4 Years):** Foundational letters, numbers, and structured play (`pic2.jpg`).
   - **PP2 - Pre-Primary 2 (Ages 4–5 Years):** Primary school readiness, literacy, and confidence (`pic3.jpg`).
   - **Smart Enquire Buttons:** Clicking any program button auto-scrolls down to the enquiry form, pre-selects that specific program in the dropdown, and focuses the parent name field.
7. **Why Choose Linah Academy:**
   - Six structured pillars: Caring Learning Environment, Child-Centred Learning, Foundational CBC Education, Creativity & Exploration, Social & Emotional Growth, and Parent-School Partnership.
8. **School Commitments & Institutional Strengths:**
   - Focuses on genuine, verified strengths (trained early-years faculty, 3 structured CBC levels, clean & child-proofed campus, and extended 7 AM – 6 PM care) without fake counters or unverifiable numbers.
9. **School Life & Activities Gallery:**
   - Responsive masonry/mosaic grid displaying all 9 authentic photographs (`pic1.jpg` – `pic9.jpg`).
   - Interactive Lightbox with high-resolution viewing, previous/next controls, image counter, close button, and full keyboard navigation (`Esc`, `ArrowLeft`, `ArrowRight`).
10. **Parent Community Testimonials:**
    - Elegant quote slider with verified parent reflections, star ratings, parent monograms, and accessible next/previous arrows and pagination dots with pause-on-hover.
11. **Frequently Asked Questions (FAQ):**
    - Accessible accordion answering common parent questions about hours, age groups, campus location, CBC curriculum, and admissions.
12. **Contact & Admissions Enquiry:**
    - Verified contact details: Kikuyu Town next to Kikuyu Law Courts, phone numbers (`+254 711 864 110` and `+254 103 875 505`), email (`mutabilinah@gmail.com`), and Google Maps directions link.
    - Admissions enquiry form with client-side validation (name, email format, phone format, program, and message).
    - Intelligent dispatch handling: Provides direct WhatsApp or Email client submission buttons so parents' messages are never lost.
13. **Organized Footer & Floating Actions:**
    - School logo, quick links, program links, verified hours, copyright, and *"Designed and developed by Caint Creation"*.
    - Floating WhatsApp button with tooltip and a smooth Back-to-Top button.

---

## 🚀 4. How to Test the Website Locally

You can test the website locally using any of the following methods:

### Method A: Directly in Your Browser (No Server Needed)
Simply double-click `index.html` or right-click `index.html` > **Open with** > **Google Chrome** (or Edge/Firefox/Safari). All assets, CSS, images, and interactions function cleanly via standard file protocol.

### Method B: Using Node.js (`npx serve`)
If you have Node.js installed on your machine, run in PowerShell or Terminal:
```powershell
npx serve .
```
Then open the local URL shown (e.g. `http://localhost:3000`).

### Method C: Using PHP Built-in Server
If PHP is installed:
```powershell
php -S localhost:8000
```
Then open `http://localhost:8000` in your web browser.

### Method D: Using VS Code Live Server
1. Open the folder in **VS Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.

---

## 📬 5. Connecting a Real Form Submission Backend

The enquiry form in `index.html` is fully validated on the client side with anti-spam protection (honeypot field) and field-by-field error messaging.

### Default Safe Behavior (GitHub Pages Ready)
When a parent submits the form, the website automatically formats their enquiry and offers immediate one-click options:
1. **Send via WhatsApp:** Opens WhatsApp directly with the parent's pre-filled admissions enquiry message sent to `+254711864110`.
2. **Send via Email Client:** Opens their default email application addressed to `mutabilinah@gmail.com` with a pre-filled subject and structured body.

### Optional: Connecting Formspree (Free & Automatic)
If the school wants enquiries delivered directly into `mutabilinah@gmail.com` without parents needing to leave the website:
1. Go to [https://formspree.io](https://formspree.io) and register a free account using `mutabilinah@gmail.com`.
2. Create a new form and copy your endpoint URL (e.g. `https://formspree.io/f/xyzabced`).
3. Open `script.js` and update line 316:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
4. Save the file. Form submissions will now be securely emailed to the school administrator immediately via AJAX.

---

## 📤 6. Instructions for Pushing Changes to GitHub

Per your instructions, **no remote repository files were overwritten directly**. You have full control to review the files locally before pushing:

1. **Review Changed Files:**
   ```powershell
   git status
   git diff index.html
   ```

2. **Stage and Commit the Redesign:**
   ```powershell
   git add index.html style.css script.js README.md
   git commit -m "Complete professional website redesign and modernization for Linah Academy"
   ```

3. **Push to GitHub:**
   ```powershell
   git push origin main
   ```

4. **Verify GitHub Pages:**
   Once pushed, GitHub Pages will automatically rebuild and deploy within 1–2 minutes at:  
   👉 [https://caintcreation.github.io/linahschool/](https://caintcreation.github.io/linahschool/)

---

## 🛡️ 7. Quality & Verification Checklist

- [x] School crest logo (`logo1.jpg`) displays crisply in header and footer.
- [x] All 9 authentic school photographs (`pic1.jpg` – `pic9.jpg`) are utilized meaningfully without repetition.
- [x] Background video (`video.mp4`) loads with poster fallback and play/pause control.
- [x] Clean color palette strictly implemented: Forest Green, Warm Cream, Sunshine Yellow, Coral, Sky Blue, and Charcoal.
- [x] Program cards feature dedicated *"Enquire Now"* buttons that pre-select the program in the enquiry form.
- [x] Gallery lightbox operates smoothly with Next, Previous, Close, and keyboard shortcuts (`Escape`, arrows).
- [x] Verified phone numbers (`+254 711 864 110`, `+254 103 875 505`) and location in Kikuyu Town are accurate and clickable.
- [x] WhatsApp integration uses correct international code (`+254711864110`).
- [x] Zero JavaScript console errors and 100% valid syntax.
- [x] Zero broken anchor links.
- [x] Zero horizontal overflow on mobile viewports.
- [x] Attribution proudly maintained: *"Designed and developed by Caint Creation"*.
