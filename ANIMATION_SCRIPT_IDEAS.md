# Animation Script Ideas - Bruno Development Works Portfolio

## Page Load Sequence
1. **Initial Load**: Body fade-in (0.5s)
2. **Hero Title**: Fade-in up with stagger (1s, 0.2s delay)
3. **Hero Subtitle**: Fade-in up (1s, 0.4s delay)
4. **CTA Button**: Fade-in up with scale (1s, 0.6s delay)
5. **Laptop Mockup**: Float animation starts immediately

## Scroll-Triggered Animations
- **Sections**: Reveal on scroll with translateY and opacity
- **Service Cards**: Staggered reveal (0.1s delay between each)
- **Portfolio Items**: Staggered reveal with scale effect
- **Testimonials**: Fade-in with slide from bottom

## Hover Effects
- **Navigation Links**: Underline slide-in (0.3s)
- **Buttons**: Scale + lift + glow (0.3s)
- **Service Cards**: Lift + background change (0.3s)
- **Portfolio Images**: Scale on hover (0.3s)
- **Portfolio Overlay**: Slide up from bottom (0.3s)

## Interactive Elements
- **Contact Form**: Focus glow effects
- **Form Submission**: Button state change + success message animation
- **Mobile Menu**: Slide down with backdrop blur

## Advanced Animation Concepts
- **Parallax Scrolling**: Laptop mockup moves at different speed
- **Intersection Observer**: Triggers animations when elements enter viewport
- **CSS Custom Properties**: Dynamic animation values
- **Performance Optimization**: Use transform and opacity for smooth animations

## Animation Timing
- **Fast**: 0.2s - 0.3s (hover effects)
- **Medium**: 0.5s - 0.6s (scroll reveals)
- **Slow**: 1s (hero elements)
- **Continuous**: 6s (floating laptop)

## Easing Functions
- **Default**: ease (most transitions)
- **Smooth**: ease-out (fade-ins)
- **Bounce**: ease-in-out (floating)
- **Custom**: cubic-bezier for special effects

## JavaScript Animation Libraries (Optional)
- **GSAP**: For complex timelines and advanced effects
- **Framer Motion**: React-based smooth animations
- **Anime.js**: Lightweight JavaScript animation library

## Performance Considerations
- Use `transform` and `opacity` for GPU acceleration
- Avoid animating layout properties (width, height, margin)
- Implement `will-change` for frequently animated elements
- Use `requestAnimationFrame` for custom animations
- Debounce scroll events for performance

## Accessibility
- Respect `prefers-reduced-motion` media query
- Provide animation controls if needed
- Ensure animations don't interfere with content readability
- Test with screen readers and keyboard navigation
