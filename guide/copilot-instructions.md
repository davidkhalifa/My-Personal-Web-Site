# Personal Website Building Instructions

## Project Overview
This project aims to create a modern, responsive personal website for a professional named {user's full name}, with a job {user's job title/description} at Microsoft. The website should follow best practices for web development, be responsive for different screen sizes, and include navigation, content sections focused on professional experience, and interactive elements. Set up these 

Please follow this process ( numbered 1 to 12):

1. **Ask for the user's name** - Begin by asking the user to provide their full name - Ask for the user name once and do not repeat 
2. **Ask for the user's job title/description** - Request the user's current job title or description
3. **Use this information throughout the project** - Replace all instances of {user's full name} and {user's job title/description} with the confirmed information## Important: First Steps Before Starting

4. **First, create the project structure with all necessary directories as here under** 
    ## create the project structure

    1. **Set up the project structure repository**
        - **Use the following terminal commands to create the project structure**
        ```bash
          mkdir -Path public, public/css, public/js, public/images, public/images/icons, public/resume
        ```
        ## Complete Folder Structure
        ```
        MyWebSite/
        │
        ├── package.json             # Node.js dependencies and scripts
        ├── bs-config.js             # Configuration for lite-server
        │
        ├── public/
        │   ├── index.html           # Home page
        │   ├── about.html           # About page with professional history
        │   ├── resume.html          # Resume page with downloadable PDF
        │   ├── contact.html         # Contact page with form and map
        │   │
        │   ├── css/
        │   │   ├── styles.css       # Main styles
        │   │   ├── responsive.css   # Media queries for responsiveness
        │   │   └── normalize.css    # CSS normalization
        │   │
        │   ├── js/
        │   │   ├── details-parser.js # Converts details.md to details.json
        │   │   ├── details.json     # Personal information in JSON format
        │   │   └── chatbot/
        │   │       └── chatbot.js   # Chatbot functionality
        │   │
        │   ├── images/
        │   │   ├── profile.png      # Your profile photo
        │   │   ├── microsoft-logo.svg # Company logo
        │   │   ├── icons/           # Icons for company logos, education, etc.
        │   │   └── other images     # Additional images
        │   │
        │   └── resume/
        │       └── david-khalifa-resume.pdf  # Your resume PDF
        │
        └── guide/
            ├── copilot-instructions.md # Detailed project specifications
            ├── details.md              # Markdown template for personal information
        
        ```

5. **Next, create the configuration files**
   - package.json with lite-server configuration
   - bs-config.js for the development server
     as here under:

    ##  create the configuration files
    1. **Setup configuration files**
      - Create package.json
      - Create bs-config.js for lite-server

    2. **Create bs-config.js file for lite-server:**
    ```javascript
    /*
    * Browser-sync config file
    * For more options: https://browsersync.io/docs/options
    */
    module.exports = {
      server: {
        baseDir: './public',
        routes: {
          "/node_modules": "node_modules"
        }
      },
      port: 3000,
      files: ["./public/**/*"],
      injectChanges: true,
      logLevel: "info",
      logPrefix: "WebServer",
      notify: true,
      open: true,
      reloadDelay: 50
    };
    ```   
    4. **Set up package.json with:**
    ```json
    {
      "name": "modern-personal-website",
      "version": "1.0.0",
      "description": "A professional website with responsive design",
      "main": "index.html",
      "scripts": {
        "start": "lite-server -c bs-config.js",
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "responsive",
        "website",
        "business"
      ],
      "author": "",
      "license": "MIT",
      "devDependencies": {
        "lite-server": "^2.6.1"
      },
      "browserslist": [
        ">0.2%",
        "not dead",
        "not ie <= 11",
        "not op_mini all"
      ]
    }
    ```
6. **Create critical details.json to store all personal information** , as here under:    
  
    1. Read the contents of `details.md`
    2. Parse the markdown structure into appropriate sections
    3. Extract the information from each section
    4. Structure the data in JSON format
    5. Write the data to `details.json`
    6. Use the generated JSON file to populate the website content

    ### Example Conversion
    For example, this markdown format in details.md:
    ```markdown
    ## Basic Information

    **Name:** John Doe
    **Job Title:** Senior Developer
    ```

    Will be converted to this in details.json:
    ```json
    {
      "name": "John Doe",
      "jobTitle": "Senior Developer",
      ...
    }
    ```

    This approach allows non-technical users to easily update their personal information without worrying about JSON syntax, nested structures, or formatting issues.

    ## details.json Structure Requirements

    The details.json file should include the following example structure to support the card-based and timeline layouts:

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

7. **Then develop these HTML pages in order**
      ## develop these HTML pages
      The website should include the following pages and components:

      ### Pages
      1. **Home page** (`index.html`)
        - Header with navigation menu
        - Profile section with photo, name, job title, and company logo
        - About Me section with professional summary
        - Core Expertise section with card-based layout (4-8 cards in a grid)
          - Each card should have an icon, title, brief description, and skill tags
          - Cards should have subtle hover effects and consistent styling
        - Project Highlights section with card-based layout (3-4 featured projects)
          - Each project card should include title, description, and technology tags
          - Cards should be visually distinct with consistent styling across the section
        - What People Say section with testimonial cards (2-3 testimonials)
          - Each testimonial should include the quote, author name, and position
          - Cards should have a distinct design with quotation marks or other visual indicators
        - Call-to-action for contact
        - Footer with links and social media icons

      2. **About page** (`about.html`)
        - Personal profile header section with photo
        - My Story section with professional summary
        - Professional Journey section with interactive timeline
          - Timeline should have alternating entries with clear date indicators
          - Each entry should include position, company, duration, and description
          - Include company logos for visual enhancement
          - Implement navigation dots or arrows to browse through timeline entries
        - Skills section with categorized skill tags
        - Education history with school logos and degree information
        - Personal achievements

      3. **Resume page** (`resume.html`)
        - Resume viewer/download option with prominent buttons
        - Professional Summary section
        - Project Highlight cards in a grid layout
          - Each card should showcase a key project with title, description, and technology tags
          - Technology tags should be visually distinct (colored pills/badges)
        - FAQ section implemented as an expandable accordion
          - Questions should be clearly visible with expand/collapse indicators
          - Answers should be revealed smoothly with animations
          - Group related questions into logical sections if appropriate

      4. **Contact page** (`contact.html`)
        - Contact form with modern, accessible input styling
        - Professional contact information 
        - Social media links with recognizable icons
        - Location map with Google Maps integration
        - Additional contact channels with visual indicators

      ### Components
      - **Navigation**: Responsive navigation menu that collapses to a hamburger menu on mobile
      - **Footer**: Consistent footer across all pages with copyright, links, and social media
      - **Card Components**: Reusable card designs for projects, expertise areas, and testimonials
      - **Timeline Component**: Visual timeline for work history with interactive navigation
      - **Accordion Component**: Expandable/collapsible sections for FAQs
      - **Forms**: Properly validated forms with accessible markup and modern styling
      - **Responsive Design**: All pages should be fully responsive for desktop, tablet, and mobile
      - **Dynamic Content**: Load personal information from a JSON file for easy updates
      - **Tag/Badge Components**: Consistent styling for technology tags and skill indicators
      - **Google Maps Integration**: Display office location on the Contact page using Google Maps

8. **Create necessary CSS and JavaScript files as here udner:**
   - Load personal information dynamically from details.json
   - Implement responsive design for all device sizes
   - Add appropriate interactivity with JavaScript

    ## Technical Requirements

    ### HTML
    - Use semantic HTML5 elements
    - Include proper document structure with `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` tags
    - Include meta tags for viewport, description, and charset
    - Ensure accessibility with proper ARIA attributes and semantic elements
    - Use appropriate heading hierarchy and document outline

    ### CSS
    - Create a responsive design using CSS Grid and/or Flexbox
    - Use CSS variables for color scheme and repeating values
    - Include styles for different screen sizes using media queries
    - Implement card-based layouts for expertise, projects, and testimonials
    - Design a visually appealing timeline component for work history
    - Apply consistent styling to tags and badges across all sections
    - Implement transitions and subtle animations for interactive elements
    - Use box-shadows, border-radius, and gradients for modern UI components

    ### JavaScript
    - Implement navigation menu toggle for mobile view
    - Load personal details from details.json file
    - Create interactive timeline navigation for work history
    - Implement accordion functionality for FAQ sections
    - Add form validation with clear error messages
    - Include smooth animations for expanding/collapsing elements
    - Add Google Maps functionality to display office location
    - Implement filtering or categorization for project/skill displays if appropriate

    ### Assets
    - Use optimized images for web (proper format, size, and compression)
    - Include SVG icons where appropriate, especially for expertise areas
    - Use a modern font from Google Fonts or similar service
    - Include company logos for work history and education sections
    - Add appropriate social media and technology icons

    ## Design Guidelines
    - **Color Scheme**: Use a consistent color palette throughout the website
      - Primary: #3498db (blue)
      - Secondary: #2ecc71 (green)
      - Accent: #e74c3c (red)
      - Background: #f9f9f9 (light gray)
      - Text: #333333 (dark gray)
      - Card Background: #ffffff (white)
      - Timeline Elements: #3498db with varying opacities
      - Tag Colors: Different colors for different categories of skills/technologies

    - **Typography**:
      - Headings: 'Montserrat', sans-serif
      - Body: 'Open Sans', sans-serif
      - Use proper hierarchy with appropriate font sizes
      - Consistent line heights and letter spacing

    - **Card Design**:
      - Consistent padding (24px recommended)
      - Subtle shadows (0 4px 6px rgba(0,0,0,0.1))
      - Rounded corners (8px border-radius)
      - White background with accent borders or highlights
      - Clear visual hierarchy with headings and content
      - Consistent height for cards in the same row when possible
      - Interactive hover states with subtle transitions

    - **Timeline Design**:
      - Clear visual flow with connecting elements
      - Date indicators at consistent positions
      - Company logos positioned consistently
      - Alternating entry layouts for visual interest
      - Interactive navigation elements for browsing history
      - Responsive adaptation for smaller screens

    - **Spacing and Layout**:
      - Consistent padding and margins
      - Proper whitespace between sections and card elements
      - Grid-based layout with appropriate gutters
      - Maximum content width of 1200px with centered layout
      - Responsive adjustments for different screen sizes

    ## Chatbot Implementation
    The website includes an interactive chatbot feature that allows visitors to get quick answers about David Khalifa's professional background. The chatbot is accessible via a floating button that appears on all pages.

    ### Chatbot Features
    - Floating action button in the bottom-right corner of all pages
    - Expandable chat interface with smooth animations
    - Pre-programmed responses to common questions
    - Typing indicator animation
    - Mobile-responsive design

    ### Chatbot Implementation Example
    ```javascript
    // Create the chatbot UI elements
    function createChatbotUI() {
        // Create the main chatbot container
        const chatbotContainer = document.createElement('div');
        chatbotContainer.className = 'chatbot-container';
        chatbotContainer.innerHTML = `
            <div class="chatbot-toggle">
                <i class="fas fa-comments"></i>
            </div>
            <div class="chatbot-box">
                <div class="chatbot-header">
                    <h3>Chat with David's Bot</h3>
                    <button class="chatbot-close">&times;</button>
                </div>
                <div class="chatbot-messages">
                    <div class="message bot">
                        Hi there! I'm David's virtual assistant. How can I help you today?
                    </div>
                </div>
                <div class="chatbot-input-container">
                    <input type="text" class="chatbot-input" placeholder="Type your message here...">
                    <button class="chatbot-send">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(chatbotContainer);
    }
    ```

    ### Chatbot Response System
    The chatbot uses keyword matching to provide relevant responses to user queries:
    ```javascript
    function getBotResponse(userMessage) {
        userMessage = userMessage.toLowerCase();
        
        // Simple responses based on keywords
        if (userMessage.includes('hello') || userMessage.includes('hi') || userMessage.includes('hey')) {
            return "Hello! How can I help you learn more about David?";
        }
        else if (userMessage.includes('experience') || userMessage.includes('work')) {
            return "David has extensive experience in cloud architecture, software development, and leading technical teams. He currently works at Microsoft as a Principal Software Architect in the Cloud + AI division.";
        }
        // Additional keyword responses...
    }
    ```

      ## Card-Based Layouts

      ### 1. Card-Based Layouts
      For implementing the card-based layouts seen in Core Expertise, Project Highlights, and testimonials:

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
        /* Card Styling Example */
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

        .expertise-icon {
          font-size: 36px;
          color: #3498db;
          margin-bottom: 16px;
        }

        .expertise-title {
          font-size: 20px;
          margin-bottom: 12px;
          color: #333;
        }

        .expertise-description {
          color: #666;
          margin-bottom: 16px;
          line-height: 1.5;
        }

        .expertise-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          background: #e1f0fa;
          color: #3498db;
          padding: 4px 10px;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 500;
        }
        ```
       ## 2. Timeline Component
       ### 2. Timeline Component
        For implementing the professional journey timeline:

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
                  <p class="timeline-description">Leading teams in eCommerce and Logistics, delivering digital transformation initiatives including logistics infrastructure planning overhaul with $200M+ project.</p>
                </div>
              </div>
              <!-- Additional entries -->
            </div>
          </div>
        </div>
        ```

        ```css
        /* Timeline Styling */
        .timeline-container {
          margin: 60px 0;
        }

        .timeline {
          position: relative;
        }

        .timeline-entries {
          position: relative;
          overflow: hidden;
          min-height: 300px; /* Adjust based on content */
        }

        .timeline-entry {
          display: none;
          animation: fadeIn 0.5s ease-in-out;
        }

        .timeline-entry.active {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 30px;
        }

        .timeline-date {
          color: #3498db;
          font-weight: 600;
          text-align: right;
          padding-top: 6px;
        }

        .timeline-content {
          position: relative;
          border-left: 2px solid #3498db;
          padding-left: 30px;
        }

        .timeline-content:before {
          content: '';
          position: absolute;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #3498db;
          left: -8px;
          top: 6px;
        }

        .timeline-title {
          margin-bottom: 10px;
          font-size: 20px;
        }

        .timeline-company {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          color: #666;
        }

        .company-logo {
          height: 20px;
          margin-right: 10px;
        }

        .timeline-navigation {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
        }

        .timeline-dots {
          display: flex;
          gap: 8px;
          margin: 0 15px;
        }

        .timeline-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #ccc;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .timeline-dot.active {
          background: #3498db;
        }

        /* Timeline navigation button styling */
        .timeline-nav {
          background: #3498db;
          color: white;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media screen and (max-width: 768px) {
          .timeline-entry.active {
            grid-template-columns: 1fr;
          }
          
          .timeline-date {
            text-align: left;
            margin-bottom: 10px;
          }
        }
        ```

        ### 3. FAQ Accordion Component
        For implementing the expandable FAQ section:

        ```html
        <!-- FAQ Accordion Example -->
        <div class="faq-container">
          <div class="faq-item">
            <div class="faq-question">
              <h3>What's your approach to digital transformation in large enterprises?</h3>
              <span class="faq-toggle"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="faq-answer">
              <p>My approach focuses on aligning technology initiatives with business goals, breaking down transformation into manageable phases, and ensuring stakeholder buy-in at every step. I emphasize creating a solid architectural foundation that enables agility while maintaining governance and security.</p>
            </div>
          </div>
          <!-- Additional FAQ items -->
        </div>
        ```

        ```css
        /* FAQ Accordion Styling */
        .faq-container {
          max-width: 800px;
          margin: 40px auto;
        }

        .faq-item {
          margin-bottom: 16px;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          overflow: hidden;
        }

        .faq-question {
          padding: 20px;
          background: #f9f9f9;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }

        .faq-question h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 500;
        }

        .faq-toggle {
          color: #3498db;
          transition: transform 0.3s ease;
        }

        .faq-item.active .faq-toggle {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 20px;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease, padding 0.3s ease;
        }

        .faq-item.active .faq-answer {
          padding: 0 20px 20px;
          max-height: 1000px; /* Arbitrary large value */
        }
        ```

        ```javascript
        // FAQ Accordion Functionality
        document.addEventListener('DOMContentLoaded', function() {
          const faqItems = document.querySelectorAll('.faq-item');
          
          faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
              item.classList.toggle('active');
            });
          });
        });
        ```

      ## Google Maps Implementation Guide
      For implementing the Google Maps functionality in the Contact page:

      1. **Iframe Embedding Approach (No API Key Required)**
        - Use an iframe-based Google Maps embed instead of the JavaScript API
        - This approach doesn't require registering for and managing an API key
        - Implementation example:
        ```javascript
        function initMap() {
            const mapContainer = document.getElementById('contact-map');
            if (!mapContainer) return;
            
            // Loading indicator
            mapContainer.innerHTML = `
                <div class="map-loading">
                    <div class="spinner"></div>
                    <p>Loading map...</p>
                </div>
            `;
            
            // Get address from details.json
            if (window.personalDetails && window.personalDetails.contact && window.personalDetails.contact.address) {
                const address = window.personalDetails.contact.address;
                try {
                    // Create embedded iframe using address 
                    mapContainer.innerHTML = `
                        <iframe 
                            src="https://www.google.com/maps/embed/v1/place?q=${encodeURIComponent(address)}&zoom=15&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            width="100%" 
                            height="100%" 
                            frameborder="0" 
                            style="border:0;" 
                            allowfullscreen="" 
                            aria-hidden="false" 
                            tabindex="0"
                            onload="this.parentNode.classList.add('map-loaded')"
                            onerror="mapLoadError()"
                        ></iframe>
                    `;
                } catch (error) {
                    mapLoadError();
                }
            } else {
                mapLoadError();
            }
        }
        ```

    2. **Fallback Mechanism**
      - Implement a fallback display for when the iframe cannot load
      - This ensures users always see location information
      - Example fallback:
      ```javascript
      // Fallback to static display if iframe embedding fails
      mapContainer.innerHTML = `
          <div style="padding: 20px; text-align: center; height: 100%;">
              <i class="fas fa-map-marker-alt" style="font-size: 48px; color: #3498db;"></i>
              <h3>Microsoft Redmond Campus</h3>
              <p>15010 NE 36th St, Redmond, WA 98052</p>
              <a href="https://www.google.com/maps?q=47.6423,-122.1391" target="_blank">
                  View on Google Maps
              </a>
          </div>
      `;
      ```

9. ## Final Checklist Before Publishing
- All links are working correctly
- Images load properly
- JSON data loads and displays correctly
- Forms validate properly
- Website is responsive on all device sizes
- Card layouts display properly on all screen sizes
- Timeline navigation functions correctly
- FAQ accordion expands and collapses as expected
- HTML validates without errors
- CSS validates without errors
- JavaScript runs without console errors
- All personal information is updated
- README.md contains complete documentation
- CHANGELOG.md is up to date

10. ## Local Development Setup

  1. **Install Node.js First**
    - Node.js is required for any new project similar to this one
    - Install Node.js from [nodejs.org](https://nodejs.org)
    - The bs-config.js file alone is not enough to run a local server; it's just a configuration file for Browser-Sync/lite-server
    - For a new project, you would need to:
      - Install Node.js first
      - Initialize a new project with `npm init`
      - Install lite-server with `npm install lite-server --save-dev`
      - Create a bs-config.js configuration file
      - Set up the start script in package.json
  2. **Running the development server:**
      - Open terminal in project root
      - Run `npm install` to install dependencies
      - Run `npm start` to start the development server
      - The website will open automatically at http://localhost:3000