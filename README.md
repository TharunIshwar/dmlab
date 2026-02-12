# Lumina Skin Clinic Website

A professional, responsive, and elegant website for a premium Skincare Hospital.

## 🚀 Getting Started

To view the website, simply open the `index.html` file in any modern web browser.

### Prerequisites
No special software is required. Just a standard web browser (Chrome, Firefox, Edge, Safari).

## 📂 Project Structure

- **`index.html`**: The main landing page.
- **`css/`**: Contains all styling rules.
  - `main.css`: The primary stylesheet that imports all others.
  - `base/`: Reset, typography, and variables.
  - `layout/`: specific styles for header, footer, grid.
  - `components/`: Styles for buttons, cards, modals, etc.
- **`js/`**: Contains JavaScript source code.
  - `main.js`: Main entry point.
  - `components/`: Logic for navigation, sliders, modals, and forms.
  - `utils/`: Helper functions.
- **`assets/images/`**: Contains images.
- **`data/`**: JSON files containing data for services, doctors, and testimonials.

## 🎨 Customization

### Changing Images
The website currently uses **dynamic AI-generated images** from `pollinations.ai`. To use your own images:
1.  Place your image files in the corresponding `assets/images/` folder.
2.  Update the `src` attributes in the HTML files or `image` paths in the JSON files (`data/*.json`) to point to your new files.

### Changing Colors
To change the color theme, edit `css/base/variables.css`. Update the `--color-primary` and `--color-secondary` values.

## 📝 Features

- **Responsive Design**: Works on mobile, tablet, and desktop.
- **Interactive Elements**: Mobile menu, scroll animations, modals, and sliders.
- **Dynamic Content**: Data for doctors and services can be managed via JSON files.
- **Contact Forms**: Pre-validated forms (frontend only).

## 📄 License

This project is for educational and demonstration purposes.
