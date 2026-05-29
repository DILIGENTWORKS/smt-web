# Sri Sivasubramaniya Swami Trust Website

A React-based website for the Sri Sivasubramaniya Swami Trust (Charity No: 1189088), a registered Charitable Incorporated Organisation in Croydon dedicated to advancing Hindu religion, culture, and spiritual values.

## Features

- **Home Page**: Welcome section with information about the trust
- **Events Page**: Upcoming festivals and special events
- **About Us Page**: Trust mission, vision, and charity information
- **Contact & Opening Times**: Contact information and temple opening hours

## Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## GitHub Pages Deployment

This project is configured for GitHub Pages deployment using `gh-pages`.

### First-time Setup

1. Ensure your repository is pushed to GitHub
2. Update the `base` path in `vite.config.js` if your repository name is not the root:
   ```js
   base: '/your-repo-name/',
   ```
3. Run the deployment command:
   ```bash
   npm run deploy
   ```

This will build the project and deploy the `dist` folder to the `gh-pages` branch.

### Enable GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Pages** (under "Code and automation")
3. Under **Source**, select **Deploy from a branch**
4. Choose `gh-pages` branch and `/ (root)` folder
5. Click **Save**

Your website will be available at `https://your-username.github.io/your-repo-name/`

## Adding the Hero Image

To add the `SMTMurugan.jpeg` image for the home page slider:

1. Place the image file in the `public/` directory
2. Update `src/pages/Home.jsx` to use the image:
   ```jsx
   <img src="/SMTMurugan.jpeg" alt="Sri Sivasubramaniya Swami" className="hero-image" />
   ```
3. Update `src/pages/Home.css` to style the image appropriately

## Tech Stack

- React 19
- Vite
- React Router DOM
- CSS3 with modern features
