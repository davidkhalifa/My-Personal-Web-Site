# GitHub Agent Website Development Prompt

Please build a complete, responsive modern personal website for David Khalifa based on the specifications below. This website should be fully functional, well-structured, and ready for deployment. Follow the best practices for web development and ensure the site is optimized for various devices and browsers.

## Required Documentation Files

1. **Create a details.json file** in the js folder that contains all dynamic content including:
   - Personal information (name, job title, company)
   - Contact information (including map coordinates for Google Maps integration)
   - Skills and expertise
   - Work experience
   - Education history
   - Testimonials
   - Core expertise areas with icons and descriptions
   - Project highlights with technology tags
   - FAQ items for accordion components
   - This will allow easy updates to the website content without changing HTML

2. **Create a comprehensive README.md** with:
   - Project overview and purpose
   - Technologies used
   - Features list
   - Installation and setup instructions
   - Project structure
   - Local development guidelines
   - Deployment steps

## Using details.md for Personal Information

To make the website building process more user-friendly, this project implements a markdown-to-JSON conversion approach. Instead of directly editing the complex details.json file, users can update their personal information in a simple markdown file (details.md).

### Implementation Requirements

1. **Create a details.md Parser System**
   - Develop functionality to read the user-edited details.md file from the guide directory
   - Parse the markdown structure and convert it to the appropriate JSON format
   - Generate the details.json file in the public/js directory

2. **Convert Markdown Sections to JSON Structure**
   - Each markdown heading should map to a corresponding section in the JSON
   - Properties marked with bold text (e.g., **Name:**) should be extracted as keys
   - Lists should be converted to JSON arrays
   - Nested sections should be converted to nested JSON objects

3. **Error Handling**
   - Implement validation to ensure all required fields are present
   - Provide clear error messages if the markdown format is incorrect
   - Ensure the parser can handle missing optional sections gracefully

### Process Flow

The details.md to details.json conversion process should follow these steps:
1. Read the contents of details.md
2. Parse the markdown structure into appropriate sections
3. Extract information from each section based on the expected format
4. Structure the data in valid JSON format
5. Write the structured data to details.json
6. Use the generated JSON file for populating the website content

This approach allows users who are unfamiliar with JSON syntax to easily update their personal information in a user-friendly markdown format.

## Project Setup

1. **Set up the project structure** with the following folders:
use commands
mkdir public
mkdir public/css 
mkdir public/js 
mkdir public/images
mkdir public/images/icons 
mkdir public/resume

   ```
   MyWebPage/
   │
   ├── CHANGELOG.md
   ├── Chat_History.md
   ├── README.md
   ├── package.json (with lite-server configuration)
   ├── bs-config.js (for lite-server)
   │
   └── public/
       ├── index.html
       ├── about.html
       ├── resume.html
       ├── contact.html
       ├── css/
       ├── js/
       ├── images/
       └── resume/
   ```

2. **Important Node.js Requirements**
   - Node.js installation is required for this project and any similar projects
   - The bs-config.js file alone is not enough to run a local server; it's just a configuration file for Browser-Sync/lite-server 
   - For a new project, you would need to:
     - Install Node.js first from [nodejs.org](https://nodejs.org)
     - Initialize a new project with `npm init`
     - Install lite-server with `npm install lite-server --save-dev`
     - Create a bs-config.js configuration file
     - Set up the start script in package.json

3. **Initialize package.json** with:
   ```json
   {
     "name": "modern-personal-website",
     "version": "1.0.0",
     "description": "Modern responsive personal website for {ask user to enter their name}",
     "main": "index.js",
     "scripts": {
       "start": "lite-server"
     },
     "dependencies": {
       "lite-server": "^2.6.1"
     }
   }
   ```

4. **Create bs-config.js** with:
   ```javascript
   module.exports = {
     port: 3000,
     server: {
       baseDir: "./public"
     },
     files: ["./public/**/*.{html,css,js}"],
     open: true
   };
   ```

## Website Requirements

Create a professional personal website with the following pages and features:

1. **Home page** (`index.html`)
   - Create a modern, visually appealing landing page
   - Include a responsive navigation bar with links to all pages
   - Add a profile section with photo, name, job title, and company logo
   - Design a card-based Core Expertise section with 4-8 cards in a grid layout
     - Each expertise card should include an icon, title, description, and skill tags
     - Cards should have subtle hover effects and consistent styling
     - Use color-coded tags for different skill categories
   - Add a Project Highlights section with card-based layout for 3-4 featured projects
     - Each card should include project title, description, and technology tags displayed as pills/badges
   - Create a "What People Say" testimonials section with 2-3 testimonial cards
     - Include quote text, author name, and position in each card
     - Add visual elements like quotation marks to enhance the design
   - Design a call-to-action section that encourages visitors to contact for professional opportunities
   - Design a comprehensive footer with links, contact information, and social media icons
   - Add a chat sidecar feature accessible via an icon button

2. **About page** (`about.html`)
   - Include a profile header with photo, name, job title, and company
   - Create a "My Story" section with professional summary (load from details.json)
   - Design a Professional Journey section with an interactive timeline layout
     - Include navigation dots or arrows to browse through timeline entries
     - Show one position at a time with clear date indicators
     - Each entry should include position title, company with logo, and description
     - Create visual connections between timeline elements
   - Create a skills section with skill tags grouped by category
   - Add an education section with school logos and degree information
   - Include achievements or certifications section

3. **Resume page** (`resume.html`)
   - Include prominent buttons to view or download the resume PDF
   - Add a Professional Summary section
   - Create a Project Highlights section with cards in a grid layout similar to the home page
     - Each card should show title, description, and technology tags
     - Technology tags should be styled as colorful pills/badges
   - Add a FAQ section implemented as an expandable accordion
     - Questions should be clearly visible with expand/collapse indicators
     - Answers should be revealed with smooth animations
     - Group related questions into logical sections if appropriate
   
4. **Contact page** (`contact.html`)
   - Create a functional contact form (with client-side validation)
   - Add Google Maps integration to display office location:
     - Use Google Maps iframe embed approach that doesn't require an API key
     - Implement with the following code pattern:
       ```javascript
       function initMap() {
          const mapContainer = document.getElementById('map');
          // Create embedded iframe using address from details.json
          fetch('js/details.json')
              .then(response => response.json())
              .then(data => {
                  const address = data.contact.address;
                  // Create an iframe that works without requiring your own API key
                  mapContainer.innerHTML = `
                      <iframe 
                          src="https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(address)}&zoom=15&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                          width="100%" height="100%" frameborder="0" style="border:0;" 
                          allowfullscreen="" aria-hidden="false" tabindex="0">
                      </iframe>
                  `;
              });
       }
       ```
     - Create a fallback display for when maps fail to load
     - Add loading indicator while the map loads
     - Style the map to match the website's design theme
     - Ensure the map is responsive on all device sizes
   - Include professional contact information
   - Add social media and professional network links

## Technical Requirements

1. **HTML/CSS/JavaScript**
   - Use semantic HTML5 markup
   - Implement responsive design using CSS Grid and/or Flexbox
   - Use CSS variables for consistent theming with this color scheme:
     - Primary: #3498db (blue)
     - Secondary: #2ecc71 (green)
     - Accent: #e74c3c (red)
     - Background: #f9f9f9 (light gray)
     - Text: #333333 (dark gray)
     - Card Background: #ffffff (white)
   - Create these CSS files:
     - normalize.css: For consistent rendering across browsers
     - styles.css: Main styling for the website
     - responsive.css: Media queries for responsive design
   - Write clean, modular JavaScript for interactive elements
   - Create and use a details.json file to store all personal information, including map coordinates
   - Implement dynamic loading of personal information from the JSON file
   - Ensure cross-browser compatibility

2. **Responsive Design**
   - Ensure the site works perfectly on mobile, tablet, and desktop
   - Implement a responsive navigation (hamburger menu on mobile)
   - Adapt card grids to single column on mobile devices
   - Adjust timeline layout for smaller screens
   - Use appropriate image sizes for different screen resolutions
   - Ensure appropriate spacing and typography across devices
   - Make sure map integration is fully responsive

3. **Performance & Accessibility**
   - Optimize images and assets for fast loading
   - Implement lazy loading for images where appropriate
   - Ensure WCAG compliance with proper contrast, alt text, and ARIA attributes
   - Test with Lighthouse or similar tools for performance metrics
   - Use async loading for Google Maps API to avoid blocking page render

4. **Design Elements**
   - Use a cohesive color scheme throughout the site
   - Implement card-based layouts for expertise, projects, and testimonials
     - Consistent padding (24px recommended)
     - Subtle shadows (0 4px 6px rgba(0,0,0,0.1))
     - Rounded corners (8px border-radius)
     - Interactive hover states with subtle transitions
   - Create a visually engaging interactive timeline component
   - Design an accordion component for FAQ with smooth animations
   - Style technology and skill tags as pills/badges with appropriate colors
   - Implement typography with:
     - Headings: 'Montserrat', sans-serif
     - Body: 'Open Sans', sans-serif
   - Include appropriate animations and transitions
   - Use high-quality images, icons, and graphics
   - Include microsoft-logo.svg and profile.png in the images folder

## Core Component Implementation

### 1. Card Components
Implement visually appealing card components for expertise areas, projects, and testimonials:

```html
<!-- Core Expertise Card Example -->
<div class="expertise-grid">
  <div class="expertise-card">
    <div class="expertise-icon">
      <i class="fas fa-cloud"></i> <!-- or use custom SVG icon -->
    </div>
    <h3 class="expertise-title">Cloud Architecture</h3>
    <p class="expertise-description">Designing scalable, resilient cloud-native solutions across AWS, Azure, and GCP platforms.</p>
    <div class="expertise-tags">
      <span class="tag">AWS</span>
      <span class="tag">Azure</span>
      <span class="tag">GCP</span>
    </div>
  </div>
  <!-- Additional cards -->
</div>
```

```css
/* Card Styling */
.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin: 40px 0;
}

.expertise-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
}
```

### 2. Timeline Component
Create an interactive timeline for the Professional Journey section:

```html
<!-- Timeline Component Example -->
<div class="timeline-container">
  <div class="timeline">
    <div class="timeline-navigation">
      <button class="timeline-nav prev" aria-label="Previous"><i class="fas fa-chevron-left"></i></button>
      <div class="timeline-dots">
        <span class="timeline-dot active" data-index="0"></span>
        <span class="timeline-dot" data-index="1"></span>
        <span class="timeline-dot" data-index="2"></span>
      </div>
      <button class="timeline-nav next" aria-label="Next"><i class="fas fa-chevron-right"></i></button>
    </div>
    <div class="timeline-entries">
      <div class="timeline-entry active" id="entry-0">
        <div class="timeline-date">Aug 2021 - Present</div>
        <div class="timeline-content">
          <h3 class="timeline-title">Principal Software Architect | Cloud + AI</h3>
          <div class="timeline-company">
            <img src="images/microsoft-logo.svg" alt="Microsoft" class="company-logo">
            Microsoft, Redmond, WA
          </div>
          <p class="timeline-description">Leading teams in eCommerce and Logistics, delivering digital transformation initiatives.</p>
        </div>
      </div>
      <!-- Additional entries -->
    </div>
  </div>
</div>
```

### 3. FAQ Accordion 
Implement an expandable accordion for the FAQs section:

```html
<!-- FAQ Accordion Example -->
<div class="faq-container">
  <div class="faq-item">
    <div class="faq-question">
      <h3>What's your approach to digital transformation in large enterprises?</h3>
      <span class="faq-toggle"><i class="fas fa-chevron-down"></i></span>
    </div>
    <div class="faq-answer">
      <p>My approach focuses on aligning technology initiatives with business goals, breaking down transformation into manageable phases, and ensuring stakeholder buy-in at every step.</p>
    </div>
  </div>
  <!-- Additional FAQ items -->
</div>
```

## Development Approach

1. Start by creating all required files
2. Set up the project structure and initialize npm
3. Create the details.json file with all personal information including map coordinates
4. Develop the details.md parser system to generate details.json
5. Develop the common components (header, footer, navigation)
6. Build each HTML page with proper semantic structure
7. Implement CSS styling with focus on:
   - Card-based layouts for expertise areas, projects, and testimonials
   - Interactive timeline component with navigation
   - Expandable accordion component for FAQs
   - Consistent tag/badge styling across the site
8. Add JavaScript functionality for:
   - Mobile navigation toggle
   - Loading content from details.json
   - Timeline navigation between entries
   - Accordion expand/collapse for FAQ items
   - Form validation
   - Interactive elements (slider, accordion, etc.)
   - Google Maps integration with proper error handling
9. Test across different devices and browsers
10. Optimize for performance and accessibility
11. Complete documentation in README.md
12. Install and configure lite-server for local development

## Additional JSON Structure Requirements

Ensure the details.json file includes the following structure to support the card-based and timeline layouts:

```json
{
  "coreExpertise": [
    {
      "title": "Cloud Architecture",
      "icon": "cloud",
      "description": "Designing scalable, resilient cloud-native solutions across AWS, Azure, and GCP platforms",
      "tags": ["AWS", "Azure", "GCP", "IaC"]
    }
  ],
  "experience": [
    {
      "company": "Microsoft",
      "logo": "microsoft-logo.svg",
      "duration": "2018 - Present",
      "positions": [
        {
          "title": "Principal Software Architect",
          "period": "2021 - Present",
          "location": "Seattle, WA",
          "description": "Lead architecture design for enterprise applications..."
        }
      ]
    }
  ],
  "projectHighlights": [
    {
      "title": "Global Financial Services Platform",
      "description": "Architected a cloud-native platform processing over $2B in daily transactions...",
      "technologies": ["Azure", "Kubernetes", "Event Hubs", "Cosmos DB", "C#/.NET"]
    }
  ],
  "testimonials": [
    {
      "text": "David's architectural guidance was instrumental in our successful migration to a microservices architecture...",
      "author": "Sarah Chen",
      "position": "CTO, FinTech Innovations Inc."
    }
  ],
  "faq": [
    {
      "question": "What's your approach to digital transformation in large enterprises?",
      "answer": "My approach focuses on aligning technology initiatives with business goals..."
    }
  ]
}
```

Please ensure all code is original, well-commented, and follows modern web development best practices. The final product should be visually appealing, user-friendly, and fully functional as a professional personal website for {ask user to enter their name}. All source files should be properly organized in the specified folder structure.