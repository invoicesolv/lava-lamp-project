# 🌊 Lava Lamp Project - Interactive Print-on-Demand Website

A stunning, interactive website featuring fluid blob animations, holographic product cards, and dynamic search functionality. Built with Next.js, React Three.js, and Tailwind CSS.

![Website Preview](https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=400&fit=crop)

## ✨ Features

### 🎨 Visual Effects
- **Fluid Lava Lamp Animation** - Real-time 3D blob morphing using GLSL shaders
- **Holographic Product Cards** - Interactive cards with rainbow glare effects
- **Mix-blend-exclusion Text** - Dynamic text that inverts based on background
- **3D Mouse Tracking** - Cards tilt and rotate following cursor movement

### 🔍 Interactive Elements  
- **Dynamic Search Field** - Real-time search with glassmorphism design
- **Responsive Title Updates** - Title changes as you type
- **Smooth Animations** - Butter-smooth transitions and hover effects
- **Mobile-First Design** - Fully responsive across all devices

### 🛍️ E-commerce Ready
- **Swedish Content** - Localized for Swedish print-on-demand market
- **Product Showcase** - Interactive product cards with CTAs
- **Business Sections** - Complete landing page structure
- **Call-to-Actions** - Strategic placement for conversions

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/invoicesolv/lava-lamp-project.git
cd lava-lamp-project

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework

### 3D & Animations
- **React Three.js** - 3D graphics and WebGL
- **@react-three/fiber** - React renderer for Three.js
- **GLSL Shaders** - Custom vertex and fragment shaders

### UI Components
- **shadcn/ui** - Beautiful, accessible component library
- **Lucide React** - Clean, consistent icons
- **Custom GlareCard** - Holographic effect component

## 📁 Project Structure

```
lava-lamp-project/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and CSS variables
│   │   ├── layout.tsx       # App layout wrapper
│   │   └── page.tsx         # Main page entry point
│   ├── components/
│   │   ├── ui/
│   │   │   ├── fluid-blob.tsx    # 3D lava lamp animation
│   │   │   └── glare-card.tsx    # Holographic product cards
│   │   ├── demo.tsx         # Hero section with search
│   │   └── sections.tsx     # Content sections
│   └── lib/
│       └── utils.ts         # Utility functions
├── components.json          # shadcn/ui configuration
└── tailwind.config.js       # Tailwind CSS config
```

## 🎮 Interactive Components

### Fluid Blob Animation
Real-time morphing 3D shapes created with:
- **Ray marching** for smooth surfaces
- **Signed distance functions** for blob merging
- **Dynamic rotation** with time-based animation
- **Mix-blend modes** for text visibility

### GlareCard Effects
Holographic cards featuring:
- **Mouse position tracking**
- **3D rotation transforms**
- **Rainbow gradient overlays**
- **Smooth hover transitions**

### Dynamic Search
Interactive search experience with:
- **Real-time title updates**
- **Glassmorphism styling**
- **Responsive design**
- **Accessibility features**

## 🌐 Content Sections

- **Hero Section** - Fluid animation with search
- **Value Propositions** - Target audience segments  
- **Product Showcase** - Interactive holographic cards
- **Process Steps** - How it works guide
- **Features Grid** - Key selling points
- **FAQ Section** - Print-on-demand explanation
- **Call-to-Actions** - Multiple conversion points

## 🚀 Deployment

The project is configured for easy deployment on:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Deploy dist folder
```

## 🤝 Contributing

Contributions are welcome! Please feel free to:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for the Swedish print-on-demand market
