import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { ProjectCard } from "@/components/ui/ProjectCard";

const projects = [
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
    name: "Pathfinder",
    slug: "pathfinder",
    description: "A pathfinding visualization project that uses Dijkstra's Algorithm to find the shortest path between nodes in real-time.",
    stack: ["React", "JavaScript"],
    impact: "Interactive algorithm visualization tool",
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

export default function Work() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-2xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Work
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              A selection of projects spanning full-stack web development, mobile apps, 
              and machine learning — each solving real-world problems with clean, 
              production-ready code.
            </p>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-1">
            <CodeDivider label="Projects" />
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
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
    </Layout>
  );
}
