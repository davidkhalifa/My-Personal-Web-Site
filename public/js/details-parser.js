/**
 * Markdown to JSON Parser
 * Converts details.md file to details.json format
 */

// This script would run server-side in a real application.
// For this demo, we're creating the details.json directly.

// Simulating the structure that would be parsed from details.md
const detailsJson = {
  "name": "David Khalifa",
  "jobTitle": "Principal Software Architect",
  "company": "Microsoft",
  "companyUrl": "https://www.microsoft.com",
  "location": "Seattle, Washington, United States",
  "jobDescription": "Leading digital and AI transformations across Microsoft's Cloud + AI division",
  
  "summary": {
    "personalSummary": "Innovative leader with 25+ years of extensive experience in strategic and tactical planning within Fortune 100/500/1000 corporations, specializing in digital transformation, AI solutions, and enterprise architecture.",
    "aboutMe": "Principal Software Architect with 25+ years of experience designing and implementing enterprise-scale digital transformation programs exceeding $800 million for global enterprises. Passionate about generative AI, cloud technologies, and creating intelligent enterprise solutions.",
    "myStory": "My journey began with electrical engineering, expanding into enterprise digital transformation. I've grown from an engineer at Schneider Electric to leadership roles at EDF, Queensland Finance, Capgemini, Deloitte, Sony Pictures, and now Microsoft, where I lead architecture initiatives for enterprise applications, with a focus on AI-driven transformation."
  },
  
  "contact": {
    "email-work": "davidkhalifa@microsoft.com",
    "email-personal": "david.kkhalifa@gmail.com",
    "phone": "+1 (408) 387-3928",
    "address": "Microsoft Redmond Campus, 15010 NE 36th St, Redmond, WA 98052",
    "mapCoordinates": {
      "latitude": 47.6423,
      "longitude": -122.1391
    },
    "social": {
      "linkedin": "https://www.linkedin.com/in/davidkhalifa",
      "github": "https://github.com/davidkhalifa",
      "twitter": "https://twitter.com/davidkhalifa"
    }
  },
  
  "skills": [
    "Generative AI & Agentic AI",
    "Microsoft AI Copilot",
    "Cloud Architecture",
    "Digital Transformation",
    "Microsoft Azure",
    "AWS",
    "GCP",
    "Responsible AI",
    "Distributed Systems",
    "Microservices",
    "Enterprise Architecture",
    "System Design",
    "Solution Architecture",
    "Product Strategy & Roadmap",
    "Executive Leadership",
    "Global Team Leadership",
    "DevOps",
    "CI/CD",
    "Kubernetes",
    "Docker",
    "C#/.NET",
    "Java",
    "Python",
    "JavaScript/TypeScript",
    "React",
    "Node.js",
    "SQL/NoSQL Databases",
    "Data Engineering",
    "API Design",
    "Event-driven Architecture",
    "Serverless Computing",
    "SAP S/4 HANA",
    "AI/ML Integration",
    "Program & Process Design",
    "Customer Engagement & UX",
    "SaaS & PaaS Solutions",
    "Agile Methodologies",
    "Enterprise Information Management"
  ],
  
  "experience": [
    {
      "company": "Microsoft",
      "logo": "images/microsoft-logo.svg",
      "duration": "2021 - Present",
      "positions": [
        {
          "title": "Principal Software Architect | Cloud + AI | C+E Commerce and Ecosystems",
          "period": "2021 - Present",
          "location": "Redmond, WA",
          "description": "Leading Microsoft Platform Engineering's Cloud + AI division, spearheading digital and GenAI transformations to enhance experiences for 10,000+ users across Finance and Business organizations. Orchestrated significant overhaul of CFO planning, streamlining operations with impact on PnL of $200B+."
        },
        {
          "title": "Principal PM Manager | Cloud + AI | C+E Commerce and Ecosystems",
          "period": "2021 - Present",
          "location": "Redmond, WA",
          "description": "Spearheading Engineering and product developments across organization verticals and horizontals, including Microsoft AI CoPilot for Commerce and Ecosystems, CFP&A Enterprise Planning, and Microsoft Enterprise ARC Audit, Risk and Compliance. Championed transformation projects in Revenue planning, Expense Planning, and Supply Chain financial planning."
        }
      ]
    },
    {
      "company": "Sony Pictures Entertainment",
      "logo": "images/icons/sony-logo.png",
      "duration": "2021",
      "positions": [
        {
          "title": "Managing Director",
          "period": "Mar 2021 - Aug 2021",
          "location": "Los Angeles, CA",
          "description": "Led an $80M+ digital transformation initiative covering implementation of SAP S/4 HANA Central Finance, SAP Ariba, integration with SAP IBP Integrated Business planning and SAP MDG Master data governance. Architected and managed end-to-end solution development and delivery."
        }
      ]
    },
    {
      "company": "Deloitte",
      "logo": "images/icons/deloitte-logo.png",
      "duration": "2019 - 2021",
      "positions": [
        {
          "title": "Enterprise Performance Global Leader",
          "period": "2019 - 2021",
          "location": "Houston, TX",
          "description": "Top-tier leader in SAP service line, delivering transformation programs globally. Orchestrated cloud migrations of SAP S/4 HANA, AI/ML, advanced analytics, data governance, and enterprise information management. Achieved 140% of targets, growing the business by 20% and managing digital transformation programs exceeding $350M for Fortune 100 companies."
        }
      ]
    },
    {
      "company": "Capgemini",
      "logo": "images/icons/capgemini-logo.png",
      "duration": "2008 - 2019",
      "positions": [
        {
          "title": "Consulting Executive | Service Line Leader Go-to-Market",
          "period": "2013 - 2019",
          "location": "Houston, TX",
          "description": "Led architectural discussions, design thinking sessions, and client workshops for global SAP S/4 HANA integrations. Directed $80M annual revenue targets, consistently outperforming KPIs. Increased efficiency of S/4 transformation programs via new operating models and global Center of Excellence implementations."
        },
        {
          "title": "Engagements Director | Principal Solution Architect",
          "period": "2008 - 2013",
          "location": "Houston, TX",
          "description": "Responsible for solutioning and delivering global SAP S/4 HANA programs with focus on analytics and enterprise information management. Reduced RFP response time by 10%, decreased deployment time by 25% delivering projects ahead of schedule and under budget."
        }
      ]
    },
    {
      "company": "Queensland Government",
      "logo": "images/icons/Queensland Gov.png",
      "duration": "2003 - 2008",
      "positions": [
        {
          "title": "SAP Business Analytics Director",
          "period": "2003 - 2008",
          "location": "Brisbane, Australia",
          "description": "Led the Queensland Finance Transformation Program, implementing enterprise-wide analytics and business intelligence solutions. Directed cross-functional teams in delivery of integrated SAP analytics capabilities."
        }
      ]
    },
    {
      "company": "EDF Electricite de France",
      "logo": "images/icons/EDF.png",
      "duration": "2000 - 2003",
      "positions": [
        {
          "title": "Sr. Director of Business Development",
          "period": "2000 - 2003",
          "location": "Europe/Middle East",
          "description": "Spearheaded business development initiatives across Europe and Middle East regions. Established strategic partnerships and drove enterprise solution implementations."
        }
      ]
    },
    {
      "company": "US Airforce - DOD ",
      "logo": "images/icons/DOD.png",
      "duration": "1998 - 2000",
      "positions": [
        {
          "title": "Program manager | EPC Engineering Procurement and Construction",
          "period": "1998 - 2000",
          "location": "Europe/Middle East",
          "description": "Program manager | EPC Engineering, Procurement and Construction projects | US Air bases in Middel East."
        }
      ]
    },
    {
      "company": "Schneider Electric",
      "logo": "images/icons/Schnieder.png",
      "duration": "1995 - 2000",
      "positions": [
        {
          "title": "Sr. Solution Manager | Systems Engineer",
          "period": "1995 - 2000",
          "location": "Europe",
          "description": "Managed EPC (Engineering, Procurement, and Construction) projects and delivered enterprise solution implementations. Designed and developed system architecture for industrial automation solutions."
        }
      ]
    }
  ],
  
  "education": [
    {
      "institution": "MIT Executive Education",
      "logo": "images/icons/MIT.jpeg",
      "degree": "Artificial Intelligence and Implications for Business Strategy",
      "period": "Recent",
      "location": "Cambridge, MA"
    },
    {
      "institution": "University of Queensland",
      "logo": "images/icons/university_of_queensland_logo.jpeg",
      "degree": "Ph.D /Master of Information Technology, Specialty in Business Process Re-Engineering",
      "period": "2003",
      "location": "Brisbane, Australia",
      "honors": "Awarded a Commendation certificate of high academic achievement"
    },
    {
      "institution": "University of Queensland",
      "logo": "images/icons/university_of_queensland_logo.jpeg",
      "degree": "Bachelor of Electrical Engineering with Honors",
      "period": "1993",
      "location": "Brisbane, Australia",
      "honors": "Awarded Best research student of the year certificate"
    }
  ],
  
  "testimonials": [
    {
      "text": "David's architectural guidance was instrumental in our successful migration to a microservices architecture. His deep knowledge of cloud patterns and practices helped us avoid common pitfalls and accelerate our delivery.",
      "author": "Sarah Chen",
      "position": "CTO, FinTech Innovations Inc."
    },
    {
      "text": "Working with David transformed how our organization approaches system design. His ability to balance theoretical best practices with pragmatic solutions sets him apart from other architects I've worked with.",
      "author": "Michael Rodriguez",
      "position": "VP of Engineering, Healthcare Solutions"
    },
    {
      "text": "David has a unique talent for making complex architectural concepts accessible to both technical and business stakeholders. His solutions are elegant, scalable, and aligned with business objectives.",
      "author": "Jennifer Kim",
      "position": "Director of Product, Enterprise SaaS Company"
    }
  ],
  
  "projectHighlights": [
    {
      "title": "Microsoft AI Copilot for Commerce and Ecosystems",
      "description": "Spearheaded the development and productization of advanced agentic AI capabilities to transform experiences for 10,000+ finance and business users. Embedded enterprise compliance, ethics, and trust into all AI capabilities.",
      "technologies": ["Azure", "Generative AI", "Machine Learning", "LLMs", "Responsible AI"]
    },
    {
      "title": "Enterprise Planning Digital Transformation",
      "description": "Orchestrated significant overhaul of CFO planning, streamlining financial operations across multiple Microsoft Organizations with an impact on PnL of $200B+. Drove process improvements achieving 70% improvement in key performance metrics.",
      "technologies": ["AI Analytics", "Cloud Enterprise Solutions", "Data Engineering", "Financial Modeling", "Process Automation"]
    },
    {
      "title": "Global Financial Services Platform",
      "description": "Architected a cloud-native platform processing over $2B in daily transactions. Implemented event-driven architecture with microservices to ensure scalability and resilience.",
      "technologies": ["Azure", "Kubernetes", "Event Hubs", "Cosmos DB", "C#/.NET"]
    },
    {
      "title": "SAP S/4 HANA Digital Transformation",
      "description": "Led $80M+ implementation at Sony Pictures Entertainment, integrating SAP S/4 HANA Central Finance, SAP Ariba, and enterprise business planning systems. Achieved seamless migration with zero business disruption.",
      "technologies": ["SAP S/4 HANA", "SAP Ariba", "SAP MDG", "Cloud Migration", "Enterprise Integration"]
    },
    {
      "title": "Enterprise AI/ML Implementation",
      "description": "Orchestrated cloud migrations leveraging AI/ML capabilities for Fortune 100 companies, driving advanced analytics, data governance, and enterprise information management with revenue impact exceeding $350M.",
      "technologies": ["AI/ML", "Advanced Analytics", "AWS", "Azure", "Data Governance"]
    },
    {
      "title": "DevOps Transformation",
      "description": "Guided a 200-person engineering organization through DevOps transformation. Established CI/CD pipelines and infrastructure-as-code practices, reducing deployment time by 80%.",
      "technologies": ["Azure DevOps", "GitHub Actions", "Terraform", "Docker", "Kubernetes"]
    }
  ],
  
  "coreExpertise": [
    {
      "title": "Generative AI & Agentic Technologies",
      "icon": "robot",
      "description": "Pioneering AI digital transformations including Microsoft AI Copilot development, embedding advanced agentic capabilities and responsible AI practices across enterprise systems.",
      "tags": ["LLMs", "Generative AI", "Responsible AI", "AI Integration", "Enterprise AI"]
    },
    {
      "title": "Cloud Architecture",
      "icon": "cloud",
      "description": "Designing scalable, resilient cloud-native solutions across AWS, Azure, and GCP platforms, with emphasis on enterprise-scale distributed systems.",
      "tags": ["AWS", "Azure", "GCP", "IaC", "Serverless"]
    },
    {
      "title": "Digital Transformation",
      "icon": "digital-tachograph",
      "description": "Converting intricate business and technology challenges into seamless, efficient solutions with a focus on $100M+ enterprise programs and intelligent enterprise enablement.",
      "tags": ["Enterprise Strategy", "Process Redesign", "Innovation", "Change Management"]
    },
    {
      "title": "Distributed Systems",
      "icon": "network-wired",
      "description": "Building high-performance, fault-tolerant distributed systems for enterprise applications supporting massive financial operations and planning.",
      "tags": ["Microservices", "Service Mesh", "Event-Driven", "Kafka"]
    },
    {
      "title": "Executive Leadership",
      "icon": "users-cog",
      "description": "Leading and inspiring cross-functional teams across global organizations, driving product innovation and optimizing user experiences for 10,000+ enterprise users.",
      "tags": ["Team Leadership", "Strategic Planning", "Executive Communication", "Global Teams"]
    },
    {
      "title": "Enterprise Architecture",
      "icon": "building",
      "description": "Developing comprehensive enterprise architecture strategies aligned with business goals for Fortune 100/500/1000 corporations.",
      "tags": ["Digital Transformation", "Modernization", "Legacy Integration", "Business Alignment"]
    },
    {
      "title": "Product Strategy & Roadmaps",
      "icon": "map",
      "description": "Creating and executing product strategies and roadmaps for complex enterprise software solutions, ensuring alignment with overarching business objectives.",
      "tags": ["Product Management", "OKRs", "Strategic Planning", "User Research"]
    },
    {
      "title": "DevOps & CI/CD",
      "icon": "code-branch",
      "description": "Implementing modern DevOps practices with automated testing, deployment, and monitoring across global engineering organizations.",
      "tags": ["GitOps", "CI/CD", "Infrastructure as Code", "Monitoring"]
    }
  ],
  
  "faq": [
    {
      "category": "Career Questions",
      "items": [
        {
          "question": "What's your approach to digital transformation in large enterprises?",
          "answer": "My approach focuses on aligning technology initiatives with business goals, breaking down transformation into manageable phases, and ensuring stakeholder buy-in at every step. I emphasize creating a solid architectural foundation that enables agility while maintaining governance and security. Having led transformations exceeding $800 million for Fortune 100 companies, I prioritize business outcomes alongside technical excellence."
        },
        {
          "question": "How do you integrate AI into enterprise systems?",
          "answer": "I take a strategic approach, first identifying high-value use cases that address real business challenges. I ensure responsible AI practices are embedded from the start, with clear governance structures and ethical guidelines. Integration follows a practical roadmap that balances innovation with enterprise stability, focusing on measurable outcomes rather than technology for its own sake. This has been particularly effective in my work developing Microsoft AI Copilot capabilities that transform user experiences."
        }
      ]
    },
    {
      "category": "Technical Questions",
      "items": [
        {
          "question": "How do you approach microservices architecture in large organizations?",
          "answer": "I focus on domain-driven design principles, establishing clear service boundaries and communication patterns. I advocate for starting with a modest implementation, proving the model works, then scaling gradually. Proper DevOps practices, monitoring, and service mesh infrastructure are essential foundations I establish early."
        },
        {
          "question": "What's your strategy for cloud migrations?",
          "answer": "My cloud migration strategy begins with a comprehensive assessment of the existing application portfolio, categorizing each application for rehosting, refactoring, rearchitecting, rebuilding, or replacing. I prioritize applications based on business value, technical complexity, and risk. During implementation, I favor a staged approach with parallel environments to minimize disruption. Throughout the process, I focus on building cloud-native capabilities within the organization, ensuring the team can maintain and optimize the environment post-migration."
        }
      ]
    },
    {
      "category": "Team Leadership",
      "items": [
        {
          "question": "How do you help teams adopt new architectural patterns?",
          "answer": "I believe in education through practical application. I typically start with workshops to establish foundational knowledge, then guide teams through implementing a small proof-of-concept. This hands-on approach builds confidence and skills simultaneously. I also establish communities of practice where engineers can share experiences and lessons learned."
        },
        {
          "question": "How do you manage global technical teams?",
          "answer": "Leading global teams requires balancing standardized approaches with cultural sensitivity and regional considerations. I establish clear, measurable objectives that align with business outcomes, implement robust communication protocols that accommodate different time zones, and create collaborative documentation systems. I also prioritize building genuine human connections across geographies, scheduling regular virtual team-building activities and, when possible, in-person gatherings to strengthen relationships and trust."
        }
      ]
    },
    {
      "category": "Innovation",
      "items": [
        {
          "question": "How do you stay current with emerging technologies?",
          "answer": "I maintain a disciplined learning routine that includes reading technical publications, participating in open-source projects, attending conferences, and building proof-of-concepts with new technologies. I also actively participate in architecture communities where we discuss emerging trends and their practical applications."
        },
        {
          "question": "How do you balance innovation with enterprise stability?",
          "answer": "I implement a dual-track approach to balance innovation with stability. First, I establish a solid foundation with well-defined core services and interfaces that remain stable. Then, I create designated innovation zones where teams can experiment with emerging technologies in controlled environments. The key is having clear criteria for transitioning experimental solutions into production, with appropriate testing and governance guardrails. This approach allows organizations to innovate continuously while maintaining the reliability that enterprise operations require."
        }
      ]
    }
  ],
  
  "certifications": [
    {
      "title": "AWS Certified Cloud Practitioner",
      "issuer": "Amazon Web Services",
      "year": "Recent"
    },
    {
      "title": "S/4 HANA Executive and Pre-sales Consultant",
      "issuer": "SAP",
      "year": "Recent"
    },
    {
      "title": "Certified Engagement Manager",
      "issuer": "Industry Certification",
      "year": "Recent"
    },
    {
      "title": "Certified Cap-Activate Project Manager",
      "issuer": "Capgemini",
      "year": "Recent"
    },
    {
      "title": "MCSE / MSCD Certificate of Excellency",
      "issuer": "Microsoft",
      "year": "Recent"
    }
  ],
  
  "languages": [
    "English",
    "French"
  ],
  
  "citizenship": [
    "United States",
    "Australia"
  ],
  
  "affiliations": [
    "Australian Institute of Project Management (AAIPM)",
    "Australian Computer Society (ACS)"
  ]
};

// Save to details.json
function saveDetailsJson() {
  // In a real implementation, this would write to a file
  // For this demo, we're creating the JSON in memory
  console.log('Details.json created successfully');
  return detailsJson;
}

// For browser use, make the JSON accessible globally
if (typeof window !== 'undefined') {
  window.personalDetails = detailsJson;
}