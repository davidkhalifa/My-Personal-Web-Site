# MyWebSite Architecture Documentation

## Table of Contents
- [Overview](#overview)
- [High-Level Architecture](#high-level-architecture)
- [System Architecture](#system-architecture)
- [Project Structure](#project-structure)
- [Architecture Diagram](#architecture-diagram)
- [Sequence Diagrams](#sequence-diagrams)
- [Data Models](#data-models)
- [Key Components](#key-components)
- [Technologies Used](#technologies-used)
- [Data Flow](#data-flow)
- [Development Environment](#development-environment)

## Overview

The MyWebSite project is a modern, responsive personal website for David Khalifa, a Principal Software Architect at Microsoft. The website showcases professional experience, skills, and achievements through a multi-page structure with interactive components. The architecture follows best practices for web development including responsive design, component-based structure, and clean separation of concerns.

This documentation provides a comprehensive overview of the project's architecture, including diagrams, data models, and key components.

## High-Level Architecture

```mermaid
flowchart TB
    Browser["Client Browser"]
    HTML["HTML Pages"]
    CSS["CSS Styling"]
    JavaScript["JavaScript"]
    DetailsParser["details-parser.js"]
    DetailsJSON["details.json"]
    MarkdownData["details.md"]
    GoogleMaps["Google Maps"]
    FontAwesome["Font Awesome CDN"]
    GoogleFonts["Google Fonts API"]

    Browser -->|HTTP Requests| HTML
    HTML --> CSS
    HTML --> JavaScript
    JavaScript --> DetailsParser
    DetailsParser -->|Read/Write| DetailsJSON
    DetailsParser -->|Read| MarkdownData
    JavaScript -->|Read| DetailsJSON
    JavaScript -->|Data Synchronization| GoogleMaps
    HTML -->|Resource Requests| FontAwesome
    HTML -->|Resource Requests| GoogleFonts

    subgraph "Client Applications"
        Browser
    end

    subgraph "Public Web Files"
        HTML
        CSS
        JavaScript
    end

    subgraph "Data Layer Service"
        DetailsParser
    end

    subgraph "Storage"
        DetailsJSON
        MarkdownData
    end

    subgraph "External Services"
        GoogleMaps
        FontAwesome
        GoogleFonts
    end

    %% Styling
    classDef clientNode fill:#EAD7FA,stroke:#9370DB,stroke-width:2px
    classDef webFileNode fill:#FBFCD6,stroke:#DAA520,stroke-width:2px
    classDef dataLayerNode fill:#E0F5E9,stroke:#3CB371,stroke-width:2px
    classDef storageNode fill:#C9E7F9,stroke:#4682B4,stroke-width:2px
    classDef externalNode fill:#FFE4E1,stroke:#CD5C5C,stroke-width:2px

    class Browser clientNode
    class HTML,CSS,JavaScript webFileNode
    class DetailsParser dataLayerNode
    class DetailsJSON,MarkdownData storageNode
    class GoogleMaps,FontAwesome,GoogleFonts externalNode
```

## System Architecture

```mermaid
flowchart TD
    %% Development Environment
    A[VS Code / Editor] --> B[Node.js]
    B --> C[npm]
    C --> D[lite-server]
    D --> E[Browser-sync]

    %% Frontend Architecture
    F[User Browser] --> G[HTML Pages]
    G --> H[index.html]
    G --> I[about.html]
    G --> J[resume.html]
    G --> K[contact.html]
    G --> L[CSS Files]
    G --> P[JavaScript]
    
    %% Style Layer
    L --> M[normalize.css]
    L --> N[styles.css]
    L --> O[responsive.css]
    
    %% Script Layer
    P --> Q[details-parser.js]
    P --> R[chatbot.js]
    
    %% Data Layer
    S[details.json] --> T[Personal Info]
    S --> U[Experience Data]
    S --> V[Projects Data]
    S --> W[Testimonials]
    S --> X[FAQs]
    Y[details.md] --> Q
    Q --> S
    P --> S
    
    %% External Services
    Z[Google Maps API]
    AA[Font Awesome CDN]
    AB[Google Fonts]
    F --> Z
    F --> AA
    F --> AB
    
    %% Deployment
    AC[Web Server] --> F
    E --> F
    
    %% Subgraphs
    subgraph "Development Environment"
        A
        B
        C
        D
        E
    end
    
    subgraph "Frontend Architecture"
        F
        G
        
        subgraph "HTML Component Layer"
            H
            I
            J
            K
        end
        
        subgraph "Style Layer"
            L
            M
            N
            O
        end
        
        subgraph "Script Layer"
            P
            Q
            R
        end
        
        subgraph "Data Layer"
            S
            T
            U
            V
            W
            X
        end
        
        Y
    end
    
    subgraph "External Services"
        Z
        AA
        AB
    end
    
    subgraph "Deployment"
        AC
    end
    
    %% Styling
    classDef primary fill:#3498db,stroke:#333,stroke-width:2px,color:#fff
    classDef secondary fill:#2ecc71,stroke:#333,stroke-width:2px,color:#fff
    classDef accent fill:#e74c3c,stroke:#333,stroke-width:2px,color:#fff
    classDef neutral fill:#f9f9f9,stroke:#333,stroke-width:2px
    
    class A,B,C,D,E primary
    class F,G,H,I,J,K,AC neutral
    class L,M,N,O,P,Q,R secondary
    class S,T,U,V,W,X,Y neutral
    class Z,AA,AB accent
```

## Project Structure

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
│   │   ├── profile.png      # Profile photo
│   │   ├── microsoft-logo.svg # Company logo
│   │   ├── icons/           # Icons for company logos, education, etc.
│   │   └── [other images]   # Additional images
│   │
│   └── resume/
│       └── david-khalifa-resume.pdf  # Resume PDF
│
└── guide/
    ├── copilot-instructions.md # Project specifications
    ├── details_example.md      # Example markdown template 
    ├── details.md              # Markdown template for personal information
    └── github-agent-prompt.md  # GitHub agent instructions
```

## Architecture Diagram

Below is the overall architecture diagram of the MyWebSite project:

```mermaid
graph TD
    subgraph "Client Side"
        browser[Browser]
        html[HTML Pages]
        css[CSS Files]
        js[JavaScript]
        browser --> html
        html --> css
        html --> js
    end

    subgraph "HTML Components"
        index[index.html]
        about[about.html]
        resume[resume.html]
        contact[contact.html]
        html --> index
        html --> about
        html --> resume
        html --> contact
    end

    subgraph "CSS Components"
        styles[styles.css]
        responsive[responsive.css]
        normalize[normalize.css]
        css --> styles
        css --> responsive
        css --> normalize
    end

    subgraph "JavaScript Components"
        detailsParser[details-parser.js]
        detailsJson[details.json]
        chatbot[chatbot.js]
        js --> detailsParser
        detailsParser --> detailsJson
        js --> chatbot
    end

    subgraph "Data Sources"
        detailsMD[details.md]
        images[Images]
        resumePDF[Resume PDF]
        detailsMD --> detailsParser
    end
    
    subgraph "Development Environment"
        node[Node.js]
        liteServer[lite-server]
        packageJson[package.json]
        bsConfig[bs-config.js]
        node --> liteServer
        packageJson --> liteServer
        bsConfig --> liteServer
        liteServer --> browser
    end

    style browser fill:#f9f,stroke:#333,stroke-width:2px
    style detailsJson fill:#bbf,stroke:#333,stroke-width:2px
    style detailsParser fill:#bbf,stroke:#333,stroke-width:2px
    style chatbot fill:#bbf,stroke:#333,stroke-width:2px
```

## Sequence Diagrams

### Website Load and Initialization Sequence

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant HTML
    participant CSS
    participant JS
    participant DetailsParser
    participant DetailsJSON
    
    User->>Browser: Navigate to website
    Browser->>HTML: Request page
    HTML->>CSS: Load stylesheets
    HTML->>JS: Load scripts
    JS->>DetailsParser: Execute parser
    DetailsParser->>DetailsJSON: Parse data
    DetailsJSON-->>JS: Return structured data
    JS->>HTML: Populate content dynamically
    HTML-->>Browser: Render complete page
    Browser-->>User: Display website
```

### User Interaction with Timeline Component

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant TimelineComponent
    participant JS
    participant DetailsJSON
    
    User->>Browser: Visit About page
    Browser->>JS: Load page scripts
    JS->>DetailsJSON: Request experience data
    DetailsJSON-->>JS: Return work history
    JS->>TimelineComponent: Initialize timeline
    TimelineComponent-->>Browser: Display timeline entries
    Browser-->>User: Show timeline
    
    User->>TimelineComponent: Click next entry
    TimelineComponent->>JS: Handle navigation event
    JS->>TimelineComponent: Update active entry
    TimelineComponent-->>Browser: Animate transition
    Browser-->>User: Show next experience entry
```

### Contact Form Submission Sequence

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant ContactForm
    participant ValidationJS
    participant FormHandler
    
    User->>ContactForm: Fill form fields
    User->>ContactForm: Submit form
    ContactForm->>ValidationJS: Validate inputs
    
    alt Valid Form Data
        ValidationJS-->>FormHandler: Process form data
        FormHandler-->>Browser: Show success message
        Browser-->>User: Display confirmation
    else Invalid Form Data
        ValidationJS-->>ContactForm: Return validation errors
        ContactForm-->>Browser: Highlight invalid fields
        Browser-->>User: Show error messages
    end
```

### Chatbot Interaction Flow

```mermaid
sequenceDiagram
    actor User
    participant Browser
    participant ChatbotUI
    participant ChatbotJS
    participant ResponseSystem
    
    User->>Browser: Visit any page
    Browser->>ChatbotJS: Load chatbot
    ChatbotJS->>ChatbotUI: Create floating button
    ChatbotUI-->>Browser: Display chat button
    
    User->>ChatbotUI: Click chat button
    ChatbotUI->>ChatbotJS: Toggle chat interface
    ChatbotJS->>ChatbotUI: Expand chat window
    ChatbotUI-->>Browser: Show chat interface
    Browser-->>User: Display welcome message
    
    User->>ChatbotUI: Enter question
    ChatbotUI->>ChatbotJS: Process input
    ChatbotJS->>ResponseSystem: Match keywords
    ResponseSystem-->>ChatbotJS: Return response
    ChatbotJS->>ChatbotUI: Display response
    ChatbotUI-->>Browser: Show bot message
    Browser-->>User: Display answer
```

## Data Models

The project uses a structured JSON data model to store all personal information. This model is generated from the `details.md` markdown file using the `details-parser.js` script.

### Core Data Model

```mermaid
classDiagram
    class PersonalDetails {
        +String name
        +String jobTitle
        +String company
        +String companyUrl
        +String location
        +String jobDescription
    }
    
    class Summary {
        +String personalSummary
        +String aboutMe
        +String myStory
    }
    
    class Contact {
        +String email
        +String phone
        +String address
        +MapCoordinates mapCoordinates
        +Social social
    }
    
    class MapCoordinates {
        +float latitude
        +float longitude
    }
    
    class Social {
        +String linkedin
        +String github
        +String twitter
    }
    
    class Experience {
        +String company
        +String logo
        +String duration
        +Position[] positions
    }
    
    class Position {
        +String title
        +String period
        +String location
        +String description
    }
    
    class Education {
        +String institution
        +String logo
        +String degree
        +String period
        +String location
        +String honors
    }
    
    class Project {
        +String title
        +String description
        +String[] technologies
    }
    
    class Expertise {
        +String title
        +String icon
        +String description
        +String[] tags
    }
    
    class Testimonial {
        +String text
        +String author
        +String position
    }
    
    class FAQ {
        +String category
        +FAQItem[] items
    }
    
    class FAQItem {
        +String question
        +String answer
    }
    
    class Certification {
        +String title
        +String issuer
        +String year
    }

    PersonalDetails "1" -- "1" Summary
    PersonalDetails "1" -- "1" Contact
    PersonalDetails "1" -- "*" Experience
    Experience "1" -- "*" Position
    PersonalDetails "1" -- "*" Education
    PersonalDetails "1" -- "*" Project
    PersonalDetails "1" -- "*" Expertise
    PersonalDetails "1" -- "*" Testimonial
    PersonalDetails "1" -- "*" FAQ
    FAQ "1" -- "*" FAQItem
    PersonalDetails "1" -- "*" Certification
    Contact "1" -- "1" MapCoordinates
    Contact "1" -- "1" Social
```

## Key Components

### 1. HTML Pages

* **index.html** - Home page with profile information, core expertise, project highlights, and testimonials
* **about.html** - Personal profile, professional journey with interactive timeline, skills, education
* **resume.html** - Downloadable resume, work experience timeline, project highlights, FAQ section
* **contact.html** - Contact form, professional information, social links, Google Maps integration

### 2. CSS Structure

* **normalize.css** - CSS reset for consistent cross-browser rendering
* **styles.css** - Main stylesheet with CSS variables, typography, layout, and component styling
* **responsive.css** - Media queries for responsive design across different device sizes

### 3. JavaScript Components

* **details-parser.js** - Converts `details.md` into structured JSON format
* **details.json** - Stores all personal data to be loaded dynamically into the website
* **chatbot.js** - Implements chatbot functionality with keyword-based responses

### 4. UI Components

* **Navigation** - Responsive menu with mobile hamburger toggle
* **Card Components** - Reusable design for expertise, projects, and testimonials
* **Timeline Component** - Interactive display of professional history
* **FAQ Accordion** - Expandable/collapsible sections for questions and answers
* **Contact Form** - Form with validation for user interaction
* **Chatbot** - Floating chat interface for quick answers
* **Google Maps Integration** - Location display on contact page

## Technologies Used

* **Frontend**:
  * HTML5 (Semantic markup)
  * CSS3 (Variables, Flexbox, Grid, Animations)
  * JavaScript (ES6+)
  * Font Awesome (Icons)
  * Google Fonts (Typography)

* **Development Environment**:
  * Node.js
  * lite-server (local development server)
  * Browser-sync (live reload)

## Data Flow

1. **Initial Setup**:
   * User information is stored in `details.md` in Markdown format
   * `details-parser.js` converts the markdown to structured JSON data
   * The resulting `details.json` contains all personal information

2. **Page Load Process**:
   * HTML pages load with minimal static content
   * CSS files provide styling and responsive design
   * JavaScript loads the structured JSON data
   * DOM is populated dynamically with personal information

3. **User Interactions**:
   * Timeline navigation events handled by JavaScript
   * FAQ accordion expand/collapse managed by event listeners
   * Contact form validated before submission
   * Chatbot responds to user queries with keyword matching

## Development Environment

* **Local Development Server**: lite-server configured with browser-sync
* **Configuration**: bs-config.js defines server settings
* **Dependencies**: Managed through package.json
* **Installation**: Uses npm for package management
* **Run**: `npm start` launches local development server