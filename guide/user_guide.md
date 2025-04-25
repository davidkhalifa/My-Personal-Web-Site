# Building Your Personal Website: A Step-by-Step Guide Using GitHub Agent Mode

This comprehensive guide will walk you through the process of creating your own professional personal website using GitHub Agent Mode. By following these simple steps and using the provided instruction file, you can have a modern, responsive website up and running in no time.

## Table of Contents

- [Section 1: Setting up and running MyWebSite project](#section-1-setting-up-and-running-mywebsite-project)
  - [Purpose of This Project](#purpose-of-this-project)
  - [Prerequisites - Setting Up VS Code with GitHub Agent Mode](#prerequisites---setting-up-vs-code-with-github-agent-mode)
  - [Using the Guide Files with GitHub Agent Mode](#using-the-guide-files-with-github-agent-mode)
  - [Updating Personal Information](#updating-personal-information)
  - [How to Access Microsoft EMU and GitHub](#how-to-access-microsoft-emu-and-github)
- [Section 2: Understanding MyWebSite project](#section-2-understanding-mywebsite-project)
  - [Areas That Need Personalization](#areas-that-need-personalization)
  - [Project Structure Explanation](#project-structure-explanation)
  - [Working with the Project and GitHub Agent](#working-with-the-project-and-github-agent)
  - [Publishing to GitHub Pages (Optional)](#publishing-to-github-pages-optional)
  - [Final Tips for Success](#final-tips-for-success)
- [Additional Development Resources](#additional-development-resources)
  - [Customizing the Design](#customizing-the-design)
  - [Adding Additional Features](#adding-additional-features)
  - [Architecture Overview](#architecture-overview)
  - [Troubleshooting](#troubleshooting)
  - [Resources](#resources)

## Section 1: Setting up and running MyWebSite project

### Purpose of This Project

This project provides a framework to build a modern, responsive personal website leveraging the power of GitHub Copilot in Agent Mode. The purpose is to demonstrate how AI can assist in rapidly developing a professional website customized to your personal information, skills, and experience. The website serves as a digital portfolio showcasing your professional accomplishments, skills, and contact information in a visually appealing and responsive format.

The project includes:
- A responsive multi-page website with home, about, resume, and contact pages
- Dynamic content loaded from a JSON file for easy updates
- Modern design elements including a responsive navigation menu, interactive components, and a clean visual layout
- Documentation files that track changes and conversations with the AI agent

### Prerequisites - Setting Up VS Code with GitHub Agent Mode

Before starting this project, ensure you have:

1. **Launch Visual Studio Code**
   - Download and install the latest version from [code.visualstudio.com](https://code.visualstudio.com)
   - Open VS Code on your computer

2. **GitHub Account with Copilot Access**
   - You need a Microsoft GitHub account to run this website project: https://github.com/enterprises/microsoft/sso
   - Optional: You need a free personal GitHub account if you'd like to publish your website publicly through free domain username.github.io

3. **GitHub Copilot Extension**
   - Install the GitHub Copilot extension from the VS Code marketplace (GitHub Copilot Agent Mode)
   - Sign in to your GitHub account with VS Code

4. **Access Agent Mode / Access GitHub Copilot** (https://aka.ms/githubcopilot)
   - Open GitHub Copilot Chat with Ctrl+Alt+I (Windows/Linux)
   - Make sure GitHub Copilot is installed and activated in VS Code
   - Look for the Copilot icon in your VS Code status bar (usually at the bottom)

5. **Node.js**
   - Install Node.js from [nodejs.org](https://nodejs.org) (required for running the local development server)
   - Verify installation by running `node -v` in your terminal

### Using the Guide Files with GitHub Agent Mode

To build your website using the guide files provided, follow these steps:

1. **Copy the Guide Files and Create New Workspace**
   - Create a new folder for your project, folder MyWebSite (e.g., C:/MyWebsite)
   - Copy the guide folder and place it in folder MyWebSite
   - Check that copilot-instructions.md is in this folder
   - Open this folder in VS Code (File > Open Folder)
   - This will be the root directory for your website project

### Updating Personal Information

Before the website structure is built, you'll need to update it with your personal information:

1. **Locate the details.md File**
   - Make sure you update the markup file details.md file with your details to personalize your own data. There is an example details_example.md to guide you through it.
   - Update each section with your own information, including:
     - Name
     - Job title
     - Company
     - Professional summary and "about me" description
     - Contact information
     - Skills list
     - Work experience
     - Education history
     - Testimonials (quotes from colleagues or clients)
     - Project highlights

2. **Start with the Copilot Instructions**
   - Make sure you are in Agent mode and select Claude 3.7 Sonnet LLM model

3. **Prompt GitHub Agent to Build the Website**
   - In the GitHub Agent chat sidebar, enter the following prompt:
   ```
   I need you to build a complete professional and personal website using the specifications and instructions in "guide/copilot-instructions.md". It is imperative to follow the steps in order in this file, for the core requirements and detailed implementation guidance. This should be a modern, responsive website with multiple pages and dynamic content.
   ```

4. **Guide the Agent**
   - The agent will begin by creating the project structure and initial files
   - When the agent asks questions or needs clarification, provide specific guidance
   - If the agent gets stuck or misunderstands a requirement, refer it back to the guide files

5. **Review Progress Regularly**
   - Periodically review the files being created to ensure they match your expectations
   - Accept changes using "Keep" during the initial setup

6. **Complete Project Building**
   - Continue working with the agent until all pages and components are completed
   - Verify the site functions correctly in your browser
   - Run `npm install` to install dependencies
   - Run `npm start` to start the lite-server
   - Your website will open in your default browser at http://localhost:3000

7. **Replace Images**
   - Place your profile photo in public/images/ as profile.png
   - Replace company logos in public/images/icons/ with your own
   - Update any other images as needed

8. **Update Resume**
   - Place your resume PDF in public/resume/ folder
   - Name it "firstname-lastname-resume.pdf"

9. **Note:**
   - Filling your personalized details.md (as explained in section 4) as well as supplying your firstname-lastname-resume.pdf are important to personalize the website functionalities based on your background and experience

10. **Known errors:**
    - The error "502 Server Error," is a "Bad Gateway" error. This means that GitHub Copilot (or the backend service it uses) received an invalid response from an upstream server. Common reasons for this error include:
      1. Server overload or high traffic
      2. Server maintenance
      3. Temporary network issues
      4. The model or service timing out due to complex processing
    - Resolution: most of the time using prompt "Continue from where you left off" will trigger the agent to continue

### How to Access Microsoft EMU and GitHub

To get access to Microsoft EMU and GitHub, you can follow these steps:

**Accessing Microsoft EMU** (https://copilot.github.microsoft.com/)

1. **Login:** Use the Windows Single Sign-On (SSO) feature in your browser and login using your corporate account at https://github.com/enterprises/microsoft/sso

2. **Requesting Access:** From the same browser profile, go to https://aka.ms/startright. Pick the GitHub EMU instance, click "Join organization," and select "experiences-and-devices." You should be auto-approved immediately

**Using GitHub Copilot at Microsoft** https://github.com/ms-copilot

**Pre-requisites - Visual Studio Code:** Install GitHub Copilot extension

You can also follow the guide GitHub Copilot Installation Instructions and see recording Login from VSCode.mp4

This shows how to access GitHub Copilot using your Microsoft EMU account. If you are already logged in with that account, note that the GitHub username for this account is alias_microsoft where "alias" is your Microsoft alias. Sign in to your Microsoft EMU account.

You will be diverted to the browser to conclude your SSO.

Validate in VS Code that you already logged in with alias_microsoft account.

## Section 2: Understanding MyWebSite project

### Areas That Need Personalization

The following sections in the details.md file MUST BE UPDATED with your personal information:

```markdown
# Personal Information Template

> This file serves as a user-friendly way to update your personal information for the website. After editing this file, the website building process will convert this markdown format into the required details.json file automatically.

## Basic Information

**Name:** {Your full name}
**Job Title:** {Your job title}
**Company:** {Your company name}
**Company URL:** {Company website URL}
**Location:** {City, State, Country}
**Job Description:** {Brief description of what you do}

## Summary Information

**Personal Summary:** 
{A brief professional summary, 1-2 sentences}

**About Me:** 
{A paragraph about yourself and your professional focus}

**My Story:** 
{A longer narrative about your professional journey}

## Contact Information

**Email:** {your.email@example.com}
**Phone:** {+1 (123) 456-7890}
**Address:** {Your office address}

**Map Coordinates:**
- Latitude: {latitude value, e.g., 47.6423}
- Longitude: {longitude value, e.g., -122.1391}

**Social Media:**
- LinkedIn: {https://linkedin.com/in/yourprofile}
- GitHub: {https://github.com/yourusername}
- Twitter: {https://twitter.com/yourhandle}
- Other social platforms (optional)

## Skills

List your professional skills, one per line:
- {Skill 1}
- {Skill 2}
- {Skill 3}
- {Continue as needed...}

## Work Experience

### {Company Name 1}
**Logo:** {path to company logo, e.g., microsoft-logo.svg}
**Duration:** {Start year - Present/End year}

#### Position 1
**Title:** {Position title}
**Period:** {Start year - Present/End year}
**Location:** {City, State}
**Description:** 
{Detailed description of your responsibilities and achievements in this role}

#### Position 2 (if applicable)
**Title:** {Position title}
**Period:** {Start year - End year}
**Location:** {City, State}
**Description:** 
{Detailed description of your responsibilities and achievements in this role}

### {Company Name 2}
**Logo:** {path to company logo, e.g., icons/deloitte-logo.png}
**Duration:** {Start year - End year}

#### Position 1
**Title:** {Position title}
**Period:** {Start year - End year}
**Location:** {City, State}
**Description:** 
{Detailed description of your responsibilities and achievements in this role}

> Repeat this section for each company you've worked for

## Education

### {School/University Name 1}
**Logo:** {path to school logo, e.g., icons/MIT.jpeg}
**Degree:** {Your degree}
**Period:** {Start year - End year}
**Location:** {City, State/Country}

### {School/University Name 2}
**Logo:** {path to school logo}
**Degree:** {Your degree}
**Period:** {Start year - End year}
**Location:** {City, State/Country}

> Repeat this section for each educational institution

## Testimonials

### Testimonial 1
**Text:** "{The testimonial text}"
**Author:** {Name of the person}
**Position:** {Their job title and company}

### Testimonial 2
**Text:** "{The testimonial text}"
**Author:** {Name of the person}
**Position:** {Their job title and company}

> Repeat this section for each testimonial

## Project Highlights

### {Project Title 1}
**Description:** {Brief description of the project and your role/achievements}
**Technologies:** {List technologies used, separated by commas}

### {Project Title 2}
**Description:** {Brief description of the project and your role/achievements}
**Technologies:** {List technologies used, separated by commas}

> Repeat this section for each project highlight

## Additional Information
> Add any other information you'd like to include on your website
```

### Project Structure Explanation

The website project follows this structure:

```
MyWebSite/
│
├── README.md                # Project documentation and setup instructions
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
│   │   └── [other images]   # Additional images
│   │
│   └── resume/
│       └── firstname-lastname-resume.pdf  # Your resume PDF
│
└── guide/
    ├── copilot-instructions.md # Project specifications
    ├── details.md              # Markdown template for personal information
```

**Key Components:**

1. **HTML Files**
   - index.html - Home page
   - about.html - About page with professional history
   - resume.html - Resume page with downloadable PDF
   - contact.html - Contact page with form and map

2. **CSS Files**
   - styles.css: Main styling for the website
   - responsive.css: Media queries for different screen sizes
   - normalize.css: Ensures consistent rendering across browsers

3. **JavaScript Files**
   - details-parser.js: Handles interactive elements and dynamic content
   - details.json: Stores all personal information for easy updates
   - chatbot.js: Implements chatbot functionality

4. **Documentation Files**
   - README.md: Provides project information and setup instructions

5. **Configuration Files**
   - package.json: Manages dependencies and scripts for local development
   - bs-config.js: Configures the lite-server for local testing

### Working with the Project and GitHub Agent

Once your project is set up, here's how to work with it and make changes:

1. **Start the Local Development Server**
   - Open a terminal in VS Code (Terminal > New Terminal)
   - Run `npm install` to install dependencies
   - Run `npm start` to start the lite-server
   - Your website