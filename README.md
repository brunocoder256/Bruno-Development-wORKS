# Bruno Development Works - Portfolio Website

A modern, premium digital-agency style portfolio website for Bruno, a Web & Design Developer specializing in creating digital experiences.

## 🌟 Overview

This is a responsive, single-page portfolio website featuring a sleek dark theme with gold and blue accents, smooth animations, and a professional layout. The site showcases Bruno's services, portfolio projects, testimonials, and provides a contact form for potential clients.

## ✨ Features

- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI/UX**: Dark gradient backgrounds with glass-morphism effects
- **Smooth Animations**: Fade-in effects, parallax scrolling, hover animations, and scroll reveals
- **Interactive Elements**: Animated navigation, floating laptop mockup, and dynamic service cards
- **Contact Form**: Integrated EmailJS for seamless contact form submissions
- **Portfolio Showcase**: Grid layout with hover overlays for project details
- **Testimonials Section**: Client feedback with elegant card designs
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Interactive functionality and animations
- **EmailJS**: Contact form handling and email sending
- **Google Fonts (Inter)**: Modern typography
- **Unsplash Images**: High-quality stock photos for portfolio items

## 📁 Project Structure

```
bruno-development-works/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript for animations and interactions
├── README.md           # Project documentation
├── FIGMA_STYLE_GUIDE.md # Design system documentation
├── ANIMATION_SCRIPT_IDEAS.md # Animation concepts
├── TODO.md             # Project task list
├── EMAIL_SETUP.md      # EmailJS configuration guide
└── favicon.ico         # Website favicon
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection for Google Fonts and EmailJS

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/bruno-development-works.git
   cd bruno-development-works
   ```

2. **Open in browser**:
   - Simply open `index.html` in your web browser
   - For local development, you can use a local server:
     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js
     npx serve .
     ```

### EmailJS Setup (Required for Contact Form)

To enable the contact form functionality:

1. Follow the detailed instructions in `EMAIL_SETUP.md`
2. Create an EmailJS account and set up your email service
3. Update the configuration in `script.js`:
   ```javascript
   const serviceID = 'your_actual_service_id';
   const templateID = 'your_actual_template_id';
   const publicKey = 'your_actual_public_key';
   ```

## 🎨 Design System

### Color Palette
- Primary Background: Dark gradients (#0a0a0a to #1a1a1a)
- Accent Gold: #ffd700 to #ffed4e
- Accent Blue: #00bfff
- Text Colors: White (#ffffff), Gray (#b0b0b0), Dark Gray (#888)

### Typography
- Font Family: Inter (Google Fonts)
- Hero Title: 4.5rem, 800 weight
- Section Headings: 3.5rem, 700 weight
- Body Text: 1.2rem, 400 weight

### Key Components
- Fixed navigation with backdrop blur
- Hero section with floating laptop mockup
- Glass-morphism service cards
- Portfolio grid with hover overlays
- Animated contact form
- Responsive footer with social links

## 📱 Responsive Breakpoints

- Desktop: >1024px
- Tablet: 768px-1024px
- Mobile: <768px
- Small Mobile: <480px

## 🔧 Customization

### Changing Content
- Edit text content directly in `index.html`
- Update portfolio images by replacing Unsplash URLs
- Modify contact information in the contact section

### Styling Adjustments
- Colors and gradients can be modified in `styles.css`
- Animation timings and effects are defined in CSS keyframes
- Responsive breakpoints can be adjusted in the media queries

### Adding New Sections
- Follow the existing HTML structure
- Add corresponding CSS classes
- Include JavaScript animations if needed

## 📧 Contact Form Features

- Real-time validation
- Animated submission feedback
- Success/error message display
- Email delivery to brunodevelopmentworks@gmail.com
- Mobile-friendly input fields

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- Optimized images and assets
- Minimal JavaScript for fast loading
- CSS animations for smooth interactions
- Lazy loading considerations for portfolio images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Bruno Development Works**
- Website: www.brunodevworks.online
- Email: brunocoder13@gmail.com
- Phone: +256 768082948 and +256 746047086
- Location: Remote / Worldwide

---

*Built with ❤️ by Bruno - Transforming visions into digital realities*
