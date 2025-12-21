# Chrome UI Clone 🌐

A pixel-perfect recreation of the Google Chrome browser landing page featuring smooth GSAP scroll animations and modern React architecture.

## 🚀 Live Demo

https://harmonious-duckanoo-8fd503.netlify.app/ ← Replace with your actual Netlify link

## 📋 Overview

This project recreates the Chrome browser landing page with a focus on:
- Smooth, performant scroll animations using GSAP
- Responsive design across all devices
- Modern React best practices
- Clean, maintainable code structure

## ✨ Features

- **Scroll-Triggered Animations**: Dynamic heading and video animations powered by GSAP ScrollTrigger
- **Video Integration**: Auto-play/pause video based on scroll position
- **Icon Animations**: Icons converge toward the main image on scroll with smooth transitions
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile
- **Performance Optimized**: Efficient animations with hardware acceleration

## 🛠️ Technologies Used

- **React** - Component-based UI library
- **GSAP (GreenSock)** - Professional-grade animation library
- **ScrollTrigger** - GSAP plugin for scroll-based animations
- **CSS3** - Modern styling with flexbox/grid
- **JavaScript (ES6+)** - Modern JavaScript features

## 📦 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/YadavVaibhav600/chrome-clone.git

# Navigate to project directory
cd chrome-clone

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production
```bash
# Create optimized production build
npm run build

# The build folder is ready to be deployed
```

## 📂 Project Structure
```
chrome-clone/
├── public/
│   ├── index.html
│   ├── first-img.webp
│   ├── chrome-video.mp4
│   └── icon-img-*.png
├── src/
│   ├── components/
│   │   ├── ScrollSection.jsx
│   │   └── ExtendExperience.jsx
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## 🎯 Key Implementation Highlights

### Scroll Animations
- Used GSAP Timeline for sequenced animations
- Implemented ScrollTrigger for scroll-based interactions
- Optimized performance with `scrub` for smooth 60fps animations

### Component Architecture
- Modular, reusable React components
- Custom hooks for animation logic
- Clean separation of concerns

## 🌐 Deployment

This project is deployed on **Netlify** for fast, reliable hosting with continuous deployment from the main branch.

**Live URL**: [YOUR_NETLIFY_LINK_HERE]

## 🎨 Design Decisions

- **GSAP over CSS animations**: For complex scroll-based interactions and better control
- **Transform-based animations**: Hardware-accelerated for better performance
- **Mobile-first approach**: Responsive design that scales beautifully

## 🔮 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement additional Chrome feature sections
- [ ] Add lazy loading for images/videos
- [ ] Include accessibility improvements (ARIA labels)
- [ ] Add unit tests with React Testing Library

## 👨‍💻 Author

**Vaibhav Yadav**

- GitHub: [@YadavVaibhav600](https://github.com/YadavVaibhav600)
- LinkedIn: [Add your LinkedIn profile]
- Portfolio: [Add your portfolio link]

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

### 💡 Learning Outcomes

Through this project, I gained hands-on experience with:
- Advanced GSAP animations and ScrollTrigger
- React performance optimization
- Responsive design implementation
- Modern frontend development workflow

---

**⭐ If you found this project interesting, please consider giving it a star!**
