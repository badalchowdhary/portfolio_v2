import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { CodeLabel } from "@/components/ui/CodeLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { TechTag } from "@/components/ui/TechTag";
import { TypingCursor } from "@/components/ui/TypingCursor";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Github, Linkedin, Mail, Send, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const allProjects = [
  {
    name: "Image Analysis of Plant Based Meat",
    slug: "image-analysis-plant-meat",
    description: "Research on image and texture analysis of plant-based meat alternatives using CLIP and Grounded-SAM for classification and segmentation.",
    stack: ["Python", "Computer Vision", "PyTorch", "CLIP"],
    impact: "96.43% validation accuracy on Food101 dataset",
  },
  {
    name: "Flood Forecasting System",
    slug: "flood-forecasting-system",
    description: "A real-time flood warning dashboard and supervised classification model for pixel-level river flood prediction using Google Earth Engine maps.",
    stack: ["React", "Flask", "Python", "Google Earth Engine"],
    impact: "F1 score of 0.86 in flood extent prediction",
  },
  {
    name: "Pathfinder",
    slug: "pathfinder",
    description: "A pathfinding visualization project that uses Dijkstra's Algorithm to find the shortest path between nodes in real-time.",
    stack: ["React", "JavaScript"],
    impact: "Interactive algorithm visualization tool",
  },
  {
    name: "tinyLink",
    slug: "tinylink",
    description: "A web application that allows users to shorten long URLs, generate QR codes for the shortened URLs, and manage them easily.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    impact: "URL shortening with QR code generation",
  },
  {
    name: "Rentify",
    slug: "rentify",
    description: "A platform that helps property owners list their properties and find correct buyers, and helps buyers find properties as per their requirements.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    impact: "Connecting property owners with buyers seamlessly",
  },
  {
    name: "BookishWear",
    slug: "bookishwear",
    description: "An eCommerce platform designed and developed for a book-themed clothing store with full shopping cart and checkout functionality.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    impact: "Complete e-commerce experience for niche market",
  },
  {
    name: "NEEV Management System",
    slug: "neev-management-system",
    description: "A database management system designed and developed using SQL for NEEV, handling data organization and retrieval efficiently.",
    stack: ["SQL"],
    impact: "Streamlined data management for NEEV",
  },
  {
    name: "House Price Prediction",
    slug: "house-price-prediction",
    description: "A machine learning model developed to predict house prices in India using various features and regression techniques.",
    stack: ["Python", "ML", "Pandas", "Scikit-learn"],
    impact: "Accurate house price predictions for the Indian market",
  },
  {
    name: "CashWise",
    slug: "cashwise",
    description: "A mobile application to track day-to-day expenses, helping users manage their personal finances effectively.",
    stack: ["Flutter", "Dart"],
    impact: "Personal finance tracking made simple",
  },
  {
    name: "CipherSafe",
    slug: "ciphersafe",
    description: "A secure mobile application where users can store their login credentials for different websites and apps with encryption.",
    stack: ["Flutter", "Dart"],
    impact: "Secure credential management on mobile",
  },
];

const experience = [
  {
    company: "Hoomanely",
    role: "Software Development Engineer (SDE I)",
    period: "Jan 2025 - Present",
    achievements: [
      "Contributed to the development of an end-to-end platform ecosystem, taking ownership across mobile app feature development, backend services, & AWS infrastructure supporting 1,000+ active users with weekly production releases, along with ML pipelines and deployment.",
      "Shipped production Flutter app features and Flask backend services; worked on a full UI revamp and internal maintenance tooling; added unit and regression tests improving crash-free sessions from 74% to 98.3% and executed a low-downtime AWS account migration, improving system reliability.",
      "Improved AI chatbot’s RAG pipeline via optimized chunking, and a two-level rolling context summarization strategy, increasing retrieval precision by 18%, reducing prompt token usage by 40%, and lowering end-to-end response latency by 25% while maintaining response relevance.",
      "Designed, implemented, and deployed edge CV models for dog eye segmentation (for non-invasive body temperature estimation), using GroundingDINO & YOLO, achieving F1 score of 0.94 and dog masking with background blurring, enforcing privacy-by-design.",
      "Developed and deployed a dog sound classification pipeline using a transformer-based teacher model AudioCLIP and an edge-optimized student model YAMNet, leveraging unsupervised clustering and human-in-the-loop refinement for classification and anomaly detection, achieving 90.8% test accuracy.",
      "Built image and audio data augmentation pipelines using diffusion-based audio synthesis and Gemini Flash-generated image variations, increasing the image dataset size by 50% and balancing previously skewed audio classes.",
    ]
  },
  {
    company: "Sarvm.ai",
    role: "Backend Engineer Intern",
    period: "Oct 2024 - Jan 2025",
    achievements: [
      "Integrated ONDC MP2 API for assignment of orders to delivery partners, enhancing order fulfillment rates.",
      "Designed HLD/LLD and implemented REST APIs for a family shared-cart feature, enabling multi-user cart edits and order lifecycle management."
    ]
  },
  {
    company: "ESI [Engineering Services International]",
    role: "Image Processing Intern",
    period: "May - Jul 2023",
    achievements: [
      "Worked on a DRDO-associated ATOL project, focussed on monocular depth estimation using classical Computer Vision.",
      "Implemented and evaluated Depth from Focus (DFF) algorithm across 8+ image sets, achieving accurate depth estimation for objects within a 30–40 cm range."
    ]
  }
];

const technicalSkills = [
  {
    category: "Programming",
    skills: ["Python", "C++", "JavaScript", "SQL", "Dart"],
  },
  {
    category: "Backend & Data Systems",
    skills: [
      "Flask",
      "Node.js",
      "Express.js",
      "REST API Development",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "EC2, ECS, Lambda, S3, API Gateway, Cognito, DynamoDB",
      "DocumentDB, Keyspaces, SQS, EventBridge",
      "OpenSearch, Bedrock",
      "CI/CD",
      "Git",
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: ["React.js", "Next.js", "Flutter"],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "Computer Vision",
      "Audio ML",
      "Edge ML",
      "Model Distillation",
      "RAG Systems",
      "LLM Integration",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
    ],
  },
];

const socialLinks = [
  { href: "mailto:badal.chowdhary@alumni.iitgn.ac.in", icon: Mail, label: "Email", handle: "badal.chowdhary@alumni.iitgn.ac.in" },
  { href: "https://github.com/badalchowdhary", icon: Github, label: "GitHub", handle: "@badalchowdhary" },
  { href: "https://www.linkedin.com/in/badalchowdhary47/", icon: Linkedin, label: "LinkedIn", handle: "/in/badalchowdhary47" },
];

export default function Home() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message sent",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center bg-grid">
        <div className="container">
          <div className="max-w-3xl opacity-0 animate-fade-in-up">
            <CodeLabel className="mb-6">Software Engineer</CodeLabel>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Hi,
              <br />
              I'm Badal Chowdhary.
              <br />
              <span className="text-muted-foreground">I build & ship production-grade software</span>
              <TypingCursor />
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed opacity-0 animate-fade-in-up stagger-1">
              A software engineer with 1+ years of experience building and shipping
              production-grade software products and ML pipelines. B.Tech graduate from
              IIT Gandhinagar, turning complex problems into elegant solutions.
            </p>
            <div className="opacity-0 animate-fade-in-up stagger-2">
              <Button asChild size="lg" className="font-mono transition-transform hover:scale-105">
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experience</h2>
            <p className="text-muted-foreground leading-relaxed">
              My professional journey and key contributions across software development,
              machine learning, and engineering.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Professional Experience" />
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 border-l-2 border-muted/50 opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary" />
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm mt-1">
                    <span className="text-primary">@</span>
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2.5 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Projects</h2>
            <p className="text-muted-foreground leading-relaxed">
              A selection of projects spanning full-stack web development, mobile apps,
              and machine learning — each solving real-world problems with clean,
              production-ready code.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Projects" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {allProjects.map((project, index) => (
              <div
                key={project.name}
                className={`opacity-0 animate-fade-in-up stagger-${Math.min(index + 2, 4)}`}
              >
                <ProjectCard {...project} className="hover-lift" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About</h2>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <span className="text-primary font-medium">Badal Chowdhary</span>, a software engineer with 1+ years of experience building and shipping production-grade software products and ML pipelines.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-2">
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about software development and engineering, focused on
                  applying my skills to real-world challenges. My experience spans
                  full-stack web development, mobile applications, and machine learning —
                  always aiming to deliver clean, production-ready solutions.
                </p>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-3">
                <CodeDivider label="Education" />
                <div className="space-y-4 mt-6">
                  <div className="space-y-1">
                    <h3 className="font-bold text-foreground">Indian Institute of Technology Gandhinagar</h3>
                    <p className="text-sm text-muted-foreground">B.Tech (2020 - 2024)</p>
                    {/* <p className="text-sm text-muted-foreground">Materials Science & Engineering</p>
                    <p className="text-sm text-muted-foreground">Minors in Computer Science & Engineering</p> */}
                  </div>
                </div>
              </div>

              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Coding Profiles" />
                <div className="space-y-4">
                  <a
                    href="https://leetcode.com/u/badal_0503/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-muted/50 border border-border rounded-lg hover:border-primary/50 transition-colors group max-w-sm"
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-lg border border-border shrink-0 group-hover:border-primary/50 transition-colors">
                      <img src="/leetcode.png" alt="LeetCode" className="h-6 w-6 object-contain" />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">LeetCode</p>
                      <p className="text-xs text-muted-foreground w-full truncate">View Profile</p>
                    </div>
                    <ExternalLink className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <CodeDivider label="Technical Skills" className="pt-0" />
                <div className="space-y-8 mt-6">
                  {technicalSkills.map((category, index) => (
                    <div key={category.category} className={`space-y-3 ${index > 0 ? 'opacity-0 animate-fade-in-up stagger-' + (index + 2) : ''}`}>
                      <h3 className="font-mono text-sm text-primary">
                        <span className="text-muted-foreground">/*</span> {category.category} <span className="text-muted-foreground">*/</span>
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <TechTag key={skill}>{skill}</TechTag>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Contact Section */}
      < section id="contact" className="py-20" >
        <div className="container">
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Have a project in mind or want to discuss opportunities?
              I'm always open to interesting conversations and collaborations.
            </p>
          </div>

          <div>
            <CodeDivider label="Connect" />
            <div className="space-y-4 max-w-lg">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                    <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-foreground group-hover:text-primary transition-colors">{link.label}</p>
                    <p className="font-mono text-xs text-muted-foreground">{link.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section >
    </Layout >
  );
}

