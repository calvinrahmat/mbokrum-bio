# Mbokrum - Linktree Bio Page

A Next.js linktree-style bio page similar to the one in the alarasa_new project.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/bio](http://localhost:3000/bio) with your browser to see the bio page.

## Customization

### Update Profile Information

Edit `src/components/ProfileHeader.tsx` to update:
- Profile image/avatar
- Name
- Bio description

### Update Links

Edit `src/app/bio/page.tsx` to customize:
- Link buttons and their URLs
- WhatsApp contact number
- Icons for each link

### Update Customer Logos

Edit `src/components/CustomerLogos.tsx` to:
- Add your customer logos to the `customers` array
- Place logo images in the `public` folder
- Update the logo paths

### Background Image

To add a custom background image:
1. Place your image in the `public` folder (e.g., `public/bio.png`)
2. Uncomment the Image component in `src/app/bio/page.tsx` and update the src path

## Project Structure

```
mbokrum/
├── src/
│   ├── app/
│   │   ├── bio/
│   │   │   └── page.tsx          # Main bio page
│   │   ├── globals.css           # Global styles
│   │   └── layout.tsx            # Root layout
│   ├── components/
│   │   ├── ProfileHeader.tsx     # Profile header component
│   │   ├── LinkButton.tsx        # Link button component
│   │   ├── CustomerLogos.tsx     # Customer logos marquee
│   │   └── ui/
│   │       └── card.tsx          # Card UI component
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
└── package.json
```

## Technologies Used

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (for icons)

# mbokrum-bio
