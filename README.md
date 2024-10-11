# Jazz Musician Website

<div align="center">
  <a href="https://mattausgretzinger.com">
    <img src="https://github.com/user-attachments/assets/642aa386-637f-44ef-812f-027c1f26c7f8" alt="Logo">
  </a>

View the website at <a href="https://mattausgretzinger.com">mattausgretzinger.com</a>

</div>

## Overview

This is a website (designed by myself) that showcases a musician's portfolio, including information about upcoming and past performances, videos, and contact information.

The site is managed through a headless CMS interface and leverages a static site generation approach using Next.js.

### Main Features

CMS: The use of a Git-based headless CMS allows the musician to manage shows, videos, and website content through a dashboard. The solution is 100% free as it uses an open source CMS that interacts directly with the GitHub repository. When changes are made, a commit is automatically made in GitHub which triggers a new deployment.

![image](https://github.com/user-attachments/assets/68f19f66-df4a-4c7f-bfef-63f1c3aca6f1)

Design: I created the design myself from scratch using Figma. I used black & yellow colors with a cursive secondary font to make the site feel elegant, and to match the musician's style as a jazz saxophonist. All images have a filter applied to them (grain, saturation, tint) to create consistency across the site.

![image](https://github.com/user-attachments/assets/98b8e5de-e292-40f9-a847-bd61118f6e97)

Form Handling: Contact form for users to reach out to the musician. When a form is filled out, an email gets sent to the musician.

![image](https://github.com/user-attachments/assets/b3fa20b2-ef87-4554-b770-916220ab77df)

Responsive Design: Mobile-first responsive user experience.

<img src="https://github.com/user-attachments/assets/4477b77b-b804-44d5-87d3-13c29cfe2b9b" alt="image" width="300">

## Technologies Used

- **Next.js** (React Framework)
- **Decap CMS** (Git-based headless CMS)
- **Netlify** (Hosting, Contact Form)
- **TypeScript**
- **Tailwind CSS** (Styling)
- **YAML** (Content management in CMS)

## Project Structure

```
- content/
  - pages/         # YAML files for managing static content like home, about, shows, videos
  - shows/         # Markdown files with metadata for each show (title, date, venue, description)
- public/          # Static assets like images, videos, and icons
- src/
  - app/
    - (site)/      # Main pages (about, contact, shows, videos) and their components
  - components/    # Reusable components like buttons, forms, cards
  - lib/           # Utility functions for fetching and processing content
  - sections/      # Section-based components for specific page layouts
  - previews/      # Components for previewing content in CMS
```

## Setup Instructions

### Prerequisites

- Node.js (v16.x or higher)
- npm or yarn (package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/owengretzinger/jazz-musician-website
   cd jazz-musician-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will run at `http://localhost:3000`.

### Deployment

This project is optimized for deployment on Netlify. After pushing your code to GitHub, link the repository to Netlify, and it will handle the deployment automatically. There are some additional steps to set up contact form integration.

## CMS Configuration

The content is managed via the Decap CMS dashboard, where you can easily add or modify:

- Pages (about, contact, etc.)
- Shows
- Videos
- Contact information

CMS pages are defined in the `content/pages` directory in YAML format.

## How to Contribute

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch and open a Pull Request.

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
