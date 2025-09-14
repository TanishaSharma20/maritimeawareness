# Naavik Maritime Awareness Campaign Website

## 📋 Project Overview

A responsive and interactive website for the Naavik Maritime Awareness Campaign, designed to promote maritime education and conservation efforts across key Indian cities. The website features information about the campaign, an interactive map, event calendar, volunteer registration form, and a media gallery.

## 🚀 Live Demo

[View Live Website](https://your-domain.com) 

## 📁 File Structure
naavik-maritime-website/
```
   ├── index.html          # Main website file
   ├── images/
      ├── naaviklogo.png      # Organization logo
      ├── 2.png              # Gallery image - Beach Cleanup
      ├── 3.png              # Gallery image - Maritime Exhibition
      ├── 4.png              # Gallery image - Student Engagement
      ├── 5.png              # Gallery image - Awareness Workshop
      ├── 6.png              # Gallery image - Community Event
      ├── 8.png              # Gallery image - Educational Materials
      ├── 9.png              # About section image
   ├── mp4/
      ├── iam.mp4            # Campaign video
      ├── meto.mp4           # Additional video content
   ├── do/
      ├── style.css          
      ├── script.js

   ├── README.md          # This file
```

## 🛠️ Technologies Used

- **HTML5** - Website structure and content
- **CSS3** - Styling and responsive design
- **JavaScript** - Interactive functionality
- **Leaflet.js** - Interactive maps
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins & Open Sans)

## ✨ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Interactive map with campaign locations
- ✅ Event calendar with filtering options
- ✅ Volunteer registration form
- ✅ Media gallery with images and videos
- ✅ Smooth scrolling navigation
- ✅ Modern, maritime-themed UI

## 🎯 Campaign Cities

The website focuses on these key locations:
- Delhi
- Lucknow
- Bihar
- Mumbai

## 📝 Setup Instructions

### Option 1: Direct File Access
1. Download all project files
2. Ensure all files are in the same directory
3. Open `index.html` in a web browser

### Option 2: Web Server Deployment
1. Upload all files to your web server
2. Ensure file permissions are set correctly
3. Access via your domain name

### Option 3: Using a Code Editor
1. Open the project folder in VS Code or similar editor
2. Use a live server extension for best viewing experience
3. Modify files as needed for customization

## 🎨 Customization Guide

### Updating Content
1. **Logo**: Replace `naaviklogo.png` with your logo (keep same filename or update HTML)
2. **Text Content**: Edit text directly in the HTML file
3. **Images**: Replace gallery images or update file references
4. **Videos**: Replace video files or update sources in HTML

### Modifying Colors
Change CSS variables in the `<style>` section:
```css
:root {
    --primary: #002B5B;       /* Main blue color */
    --secondary: #00A8A8;     /* Teal accent color */
    --accent: #FFD93D;        /* Yellow accent color */
    /* ... more variables */
}
```
### Adding New Cities to Map
Update the JavaScript array:
```javascript
const cities = [
    { name: 'Your City', latlng: [LATITUDE, LONGITUDE] },
    // ... more cities
];
```
### Updating Events
 Edit the event cards in the HTML or enhance with dynamic loading.

### 🌐 Browser Compatibility
 Browser	Support
* Chrome	✅ Full support
* Firefox	✅ Full support
* Safari	✅ Full support
* Edge	✅ Full support
* Mobile Browsers	✅ Responsive design


### 📧 Form Processing
The volunteer form currently shows a confirmation message but doesn't submit data. For full functionality:

Add a form processing script (PHP, Node.js, etc.)

Connect to a database if needed

Update the form action attribute in HTML

### 📊 Performance Notes
Images are optimized for web viewing

CSS and JavaScript are minified and embedded for faster loading

Consider compressing videos for better performance
