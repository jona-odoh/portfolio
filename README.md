# Jonathan Odoh - Developer Portfolio

A modern, professional, and futuristic developer portfolio website built with cutting-edge technologies.

## 🌟 Features

### Design & UX

- **Futuristic 3D Gradient Theme** - Deep blue, neon purple, and pink glow effects
- **Glassmorphism Design** - Modern frosted glass effect with backdrop blur
- **Smooth Animations** - GSAP-powered scroll-triggered animations
- **Particle Background** - Interactive canvas-based particle system with mouse tracking
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dark Mode** - Beautiful dark theme optimized for eye comfort

### Interactive Elements

- **Loading Screen** - Animated logo with glow effects
- **Floating Blobs** - 3D gradient shapes with parallax effects
- **Scroll Animations** - Staggered reveal animations on scroll
- **Hover Effects** - Interactive cards and buttons with scale animations
- **Form Validation** - Contact form with email integration
- **Scroll-to-Top Button** - Smooth scroll navigation

### Performance

- **Optimized Assets** - Minimal CSS/JS for fast loading
- **Lazy Loading** - Images and content load on demand
- **Hardware Acceleration** - GPU-accelerated animations
- **SEO Friendly** - Semantic HTML and proper meta tags

## 🛠️ Technologies Used

### Frontend

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling framework
- **JavaScript (ES6+)** - Modern JavaScript with classes and arrow functions
- **GSAP** - GreenSock Animation Platform for smooth animations
- **Canvas API** - Custom particle background system

### Libraries & Dependencies

- Font Awesome 6.4.0 - Icon library
- GSAP 3.12.2 - Animation library
- ScrollTrigger - GSAP plugin for scroll-based animations
- Tailwind CSS (CDN) - Styling framework

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── styles.css          # Custom CSS animations and styling
├── script.js           # JavaScript interactivity and animations
├── particles.js        # Particle background system
├── README.md           # This file
└── assets/             # (Optional) For images and additional files
    ├── images/
    └── fonts/
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- No build tools or server required!

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jona-odoh/portfolio.git
   cd portfolio
   ```

2. **Open in browser**

   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:

     ```bash
     # Using Python 3
     python -m http.server 8000

     # Using Node.js (http-server)
     npx http-server
     ```

3. **Access the site**
   - Open http://localhost:8000 in your browser

## 📋 Sections

### 1. Loading Screen

- Animated "JO" logo with glow effect
- Progress bar animation
- Auto-fades after 2.4 seconds

### 2. Navigation

- Fixed navigation bar that transforms on scroll
- Smooth scrolling to sections
- Mobile-responsive hamburger menu
- Keyboard navigation support

### 3. Hero Section

- Eye-catching introduction text
- Typewriter animation effect
- Call-to-action buttons
- Floating blob animations
- Scroll indicator
- Interactive particle background

### 4. About Section

- Profile image with gradient frame
- Bio and career description
- Animated stat counters
- Achievements and projects list

### 5. Skills Section

- 9 skill cards with progress bars
- Technology icons and descriptions
- Hover animations
- Responsive grid layout

### 6. Projects Section

- 4 featured projects
- Project descriptions and tech stacks
- Interactive project cards
- Links to project details

### 7. Contact Section

- Contact form with validation
- Email integration
- Social media links
- Contact information
- Location details

### 8. Footer

- Quick navigation links
- Social links
- Copyright information
- Technical details

## 🎨 Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  --accent: #06b6d4;
}
```

### Particle Count

Modify in `particles.js`:

```javascript
this.particleCount = 50; // Change to desired number
```

### Animation Speed

Adjust GSAP animation durations in `script.js`:

```javascript
gsap.to(element, {
  duration: 0.6, // Increase for slower, decrease for faster
});
```

### Content

All content is easily editable directly in `index.html`. Update:

- Name and titles
- Bio and descriptions
- Project details
- Skills and technologies
- Social links
- Contact information

## 📱 Responsive Breakpoints

- **Mobile** - Up to 640px
- **Tablet** - 641px to 1024px
- **Desktop** - 1025px and above

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus states for better UX
- Color contrast compliance
- Alt text for images

## ⚡ Performance Optimization

- Minimal external dependencies
- CSS animations use GPU acceleration
- Debounced scroll events
- Lazy loading for images
- Canvas optimization for particles
- Efficient DOM manipulation

## 🔍 SEO Optimization

- Meta tags for social sharing
- Semantic HTML5 elements
- Structured data ready
- Mobile-friendly design
- Fast loading times
- Clean URL structure

## 🐛 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android

## 📝 License

This portfolio template is free to use for personal or commercial projects.

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio as a template for your own portfolio!

## 📧 Contact

- **Email**: jonathan.odoh.dev@gmail.com
- **GitHub**: https://github.com/jona-odoh
- **LinkedIn**: [Jonathan Odoh](https://www.linkedin.com/in/jonathan-odoh-8aa801231/)
- **Twitter**: [Jonathan Odoh](https://x.com/Jonathanoodoh)

## 🙏 Acknowledgments

- [GSAP](https://greensock.com/gsap/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Unsplash](https://unsplash.com/) - Free images

---

**Built with ❤️ and modern web technologies**

Last Updated: 2025-11-04
