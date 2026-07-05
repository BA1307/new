import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'computer-applications',
    title: 'Advanced Computer Applications',
    description: 'Master core computing tools, advanced document engineering, spreadsheet modeling, and digital workplace coordination.',
    longDescription: 'This course is engineered to transform standard computer users into high-efficiency digital workplace leaders. You will move beyond basic operations to master advanced data modeling in spreadsheets, structural document designs, and modern collaborative cloud suites.',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'Beginner',
    modules: [
      'Advanced Word Processing & Visual Document Architecture',
      'Data Analytics, Pivot Tables, and Spreadsheet Modeling',
      'Interactive Presentations and Audience Engagement',
      'Cloud Workspace Ecosystems (Google Workspace & MS Office 365)',
      'Digital File Management, Cyber-Hygiene & Workspace Safety'
    ],
    audience: [
      'Students looking to build a bulletproof workplace foundation',
      'Job seekers wishing to add competitive office skills to their resumes',
      'Administrative professionals seeking to automate daily tasks'
    ],
    benefits: [
      'Build spreadsheets that handle automated calculation and complex workflows',
      'Create high-impact, professional reports and client-ready slide decks',
      'Acquire standard-of-practice credentials that guarantee workplace readiness'
    ],
    iconName: 'Laptop',
    category: 'applications',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800',
    rating: 4.8,
    ratingCount: 312,
    instructorName: 'Makoba (TE)',
    price: 'Ksh 12,000'
  },
  {
    id: 'ai-productivity',
    title: 'Artificial Intelligence & Productivity Tools',
    description: 'Harness state-of-the-art Generative AI models, prompt engineering, and custom automation loops to complete tasks 10x faster.',
    longDescription: 'Generative AI is redefining every industry. This program equips you with structured prompt engineering frameworks and custom automation workflows. Learn to collaborate safely with AI to execute research, write clean reports, synthesize documents, and handle repetitive tasks.',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Intermediate',
    modules: [
      'Generative AI Fundamentals & Practical Capabilities',
      'Structured Prompt Engineering Frameworks',
      'AI-Powered Research, Writing, and Document Synthesis',
      'Workflow Automation and Custom AI Assistant Building',
      'Ethical AI, Data Security, and Privacy Safeguards'
    ],
    audience: [
      'Students looking to increase academic productivity and learn 10x faster',
      'Freelancers wanting to expand service speed and quality',
      'Entrepreneurs looking to automate operations with minimal cost'
    ],
    benefits: [
      'Reduce drafting and research time by over 70% with standard tools',
      'Build custom prompt libraries designed specifically for your goals',
      'Obtain an extremely competitive digital edge over traditional workers'
    ],
    iconName: 'Cpu',
    category: 'ai',
    imageUrl: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800',
    rating: 4.9,
    ratingCount: 480,
    instructorName: 'Makoba (TE)',
    price: 'Ksh 15,000'
  },
  {
    id: 'digital-marketing',
    title: 'Strategic Digital Marketing',
    description: 'Unlock traffic and conversions using SEO, targeted search marketing, high-ROI social campaigns, and data-driven analytics.',
    longDescription: 'Turn attention into measurable business outcomes. This course breaks down the mechanics of search engine visibility, paid ad optimization, subscriber list growth, and visual funnel tracking, enabling students to plan, deploy, and scale highly profitable digital campaigns.',
    duration: '8 Weeks (64 Hours)',
    skillLevel: 'Intermediate',
    modules: [
      'Marketing Fundamentals, Customer Journeys, and Digital Funnels',
      'Search Engine Optimization (SEO) & Web Visibility Strategies',
      'Paid Search and High-Conversion Social Advertising (Meta & Google)',
      'Email Marketing Cycles and Subscriber Automation',
      'Web Analytics, Conversions, and Performance Tracking'
    ],
    audience: [
      'Aspiring digital marketers looking for real-world execution expertise',
      'Small business owners wanting to acquire customers cost-effectively',
      'Content producers seeking to monetize and grow their personal audience'
    ],
    benefits: [
      'Design comprehensive, client-ready digital campaigns from scratch',
      'Understand search algorithms to position web pages at the top of results',
      'Measure, audit, and optimize marketing spend to ensure maximum profitability'
    ],
    iconName: 'TrendingUp',
    category: 'marketing',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800',
    rating: 4.7,
    ratingCount: 225,
    instructorName: 'Makoba (TE)',
    price: 'Ksh 14,000'
  },
  {
    id: 'content-creation',
    title: 'Content Creation & Social Media Skills',
    description: 'Design eye-catching vector assets, shoot and edit cinematic vertical video, write engaging copy, and scale an organic audience.',
    longDescription: 'In a digital-first economy, content is currency. Learn the creative and technical workflows of visual layout design, cinematic video editing, brand copywriting, and algorithm optimization to tell powerful stories that organically attract and engage thousands of subscribers.',
    duration: '6 Weeks (48 Hours)',
    skillLevel: 'All Levels',
    modules: [
      'Visual Composition, Typography, and Digital Vector Design',
      'Cinematic Mobile Video Production and Multi-Track Audio Editing',
      'Engaging Brand Copywriting & Scriptwriting',
      'Social Platform Algorithms (YouTube, TikTok, Instagram, LinkedIn)',
      'Community Management, Brand Partnerships & Monetization'
    ],
    audience: [
      'Aspiring content creators, influencers, and brand strategists',
      'Video editor enthusiasts wishing to turn hobbies into professional careers',
      'Marketers looking to expand internal organic video production capacities'
    ],
    benefits: [
      'Produce fully edited vertical videos with high-quality captions and audio',
      'Design vector banners, logos, and digital posts using standard software',
      'Develop a predictable 30-day content calendar designed for organic growth'
    ],
    iconName: 'Video',
    category: 'creative',
    imageUrl: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800',
    rating: 4.8,
    ratingCount: 195,
    instructorName: 'Makoba (TE)',
    price: 'Ksh 13,000'
  },
  {
    id: 'create-own-website',
    title: 'Create your Own Website',
    description: 'Learn how to design, build, and launch your own beautiful, fully-responsive professional website from scratch without complex code.',
    longDescription: 'Unleash your digital presence. This fully practical course guides you step-by-step from choosing a domain to designing layouts, writing rich copy, and publishing a responsive, modern website using standard visual builders, HTML/CSS essentials, and web publishing workflows.',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Beginner',
    modules: [
      'Domain Registration, Hosting, and DNS Configuration',
      'Visual Layout Design and Content Architecture',
      'Introduction to HTML, CSS, and Modern Web Standards',
      'Working with CMS Platforms and No-Code Creators',
      'Search Engine Optimization (SEO) and Launching Live'
    ],
    audience: [
      'Entrepreneurs wanting a modern online portfolio or landing page',
      'Freelancers looking to showcase their services professionally',
      'Beginners eager to learn the fundamentals of web design'
    ],
    benefits: [
      'Launch your own live website during the course',
      'Understand how hosting, server environments, and domain names connect',
      'Save thousands in agency web design fees by building it yourself'
    ],
    iconName: 'Laptop',
    category: 'applications',
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800',
    rating: 4.8,
    ratingCount: 142,
    instructorName: 'Makoba (TE)',
    price: 'Ksh 10,000'
  },
  {
    id: 'learn-adobe-illustrator',
    title: 'Learn Adobe Illustrator',
    description: 'Master vector graphics, custom typography, logo design, and illustrations using industry-standard Adobe Illustrator workflows.',
    longDescription: 'Vector design is the bedrock of professional visual communication. This course offers a deep dive into Adobe Illustrator, where you will master the pen tool, shape builder, advanced path controls, layer workflows, color gradients, and typography layout styles for web and print.',
    duration: '5 Weeks (40 Hours)',
    skillLevel: 'Beginner',
    modules: [
      'Illustrator Workspace, Artboards, and Vector Fundamentals',
      'Mastering Path Construction & the Pen and Curvature Tools',
      'Advanced Shading, Gradients, and the Shape Builder Tool',
      'Typography Styling, Vector Tracing, and Text-to-Path Layouts',
      'Preparing High-Quality Vector Assets for Web and Print Export'
    ],
    audience: [
      'Graphic design students wishing to acquire standard industry credentials',
      'Illustrators and artists transitioning from raster to high-resolution vector format',
      'Marketers wanting to create custom visual brand materials independently'
    ],
    benefits: [
      'Create infinitely scalable professional illustrations and print-ready designs',
      'Build a solid visual design portfolio containing custom logos and packaging',
      'Master complex tools that speed up vector creation workflow by 10x'
    ],
    iconName: 'Video',
    category: 'creative',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800',
    rating: 4.9,
    ratingCount: 118,
    instructorName: 'Makoba (TE)',
    price: 'Ksh 12,000'
  },
  {
    id: 'logo-design-pipeline',
    title: 'Logo Design Pipeline',
    description: 'A complete professional blueprint from brand brief and sketching to final vector delivery and identity systems.',
    longDescription: 'A logo is more than just an image — it is the cornerstone of brand identity. This masterclass guides you through the full logo design pipeline used by professional creative agencies: analyzing client briefs, brainstorming, geometric sketching, vector modeling, color theory, and presenting identity guides.',
    duration: '4 Weeks (32 Hours)',
    skillLevel: 'Intermediate',
    modules: [
      'Deconstructing Brand Briefs & Competitor Identity Audits',
      'Concept Sketching, Mind Mapping, and Creative Discovery',
      'Vector Geometry, Grid Systems, and Golden Ratio Layouts',
      'Color Psychology, Contrast Ratios, and Versatile Brand Contexts',
      'Designing Brand Style Guides, Logo Manuals, and Client Deliverables'
    ],
    audience: [
      'Junior graphic designers wanting to specialize in brand identity design',
      'Freelancers aiming to charge premium prices for logo deliverables',
      'Creative agency employees seeking a standardized brand pipeline'
    ],
    benefits: [
      'Develop an authentic, industry-standard logo design framework',
      'Deliver professional brand manuals detailing logo usage rules',
      'Acquire clients with a compelling brand-focused logo design portfolio'
    ],
    iconName: 'Video',
    category: 'creative',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800',
    rating: 4.7,
    ratingCount: 89,
    instructorName: 'Makoba (TE)',
    price: 'Ksh 10,000'
  },
  {
    id: 'ai-for-teachers',
    title: 'AI for Teachers',
    description: 'Empower educators to automate lesson planning, craft customized worksheets, design grading rubrics, and personalize student learning.',
    longDescription: 'Save hundreds of hours of administrative planning. This course teaches educators how to leverage Generative AI safely and productively to generate lesson guides, design highly customized reading comprehensions, formulate grading matrices, and generate interactive quizzes tailored to diverse student needs.',
    duration: '3 Weeks (24 Hours)',
    skillLevel: 'Beginner',
    modules: [
      'Generative AI Basics and Safe Educational Frameworks',
      'Automated Lesson Planning & Curriculum Integration',
      'Designing Personalized Assessments, Worksheets, and Rubrics',
      'Fostering Student Engagement through AI-Supported Tutoring',
      'Ethical AI Use, Plagiarism Detection, and Classroom Rules'
    ],
    audience: [
      'Primary, secondary, and tertiary educators seeking to optimize classroom time',
      'School administrators wanting to integrate digital tools into teaching workflows',
      'Tutors and custom curriculum developers seeking scalable content generation'
    ],
    benefits: [
      'Cut down weekly curriculum preparation time by over 50%',
      'Deliver highly adaptive, level-appropriate student assignments with ease',
      'Master the skills to guide students on ethical and responsible AI usage'
    ],
    iconName: 'Cpu',
    category: 'ai',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800',
    rating: 4.9,
    ratingCount: 165,
    instructorName: 'Makoba (TE)',
    price: 'Ksh 8,000'
  }
];
