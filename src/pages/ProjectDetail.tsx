import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectsData: Record<string, {
  name: string;
  description: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  challenges: string[];
  features: string[];
}> = {
  "tinylink": {
    name: "tinyLink",
    description: "A web application for URL shortening with QR code generation.",
    fullDescription: "tinyLink is a full-stack web application that allows users to shorten long URLs, generate QR codes for the shortened URLs, and manage them easily. Built with a modern MERN stack, it provides a clean interface for URL management with analytics tracking.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    impact: "URL shortening with QR code generation",
    challenges: [
      "Generating unique, collision-free short codes at scale",
      "Implementing efficient URL redirection with minimal latency",
      "Building a QR code generation pipeline for shortened URLs",
      "Designing an intuitive dashboard for URL management"
    ],
    features: [
      "Custom short URL generation",
      "QR code generation for each shortened URL",
      "Click analytics and tracking",
      "User dashboard for URL management"
    ]
  },
  "rentify": {
    name: "Rentify",
    description: "A property listing and discovery platform.",
    fullDescription: "Rentify is a comprehensive platform that bridges the gap between property owners and potential buyers/renters. It allows property owners to list their properties with detailed information and helps buyers find properties matching their specific requirements through advanced filtering and search capabilities.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    impact: "Connecting property owners with buyers seamlessly",
    challenges: [
      "Building an efficient property search with multiple filter criteria",
      "Implementing user authentication and role-based access",
      "Designing responsive property listing cards with image galleries",
      "Creating a messaging system between owners and buyers"
    ],
    features: [
      "Property listing with detailed descriptions and images",
      "Advanced search and filtering by location, price, and type",
      "User authentication for owners and buyers",
      "Responsive design for mobile and desktop"
    ]
  },
  "bookishwear": {
    name: "BookishWear",
    description: "An eCommerce platform for book-themed clothing.",
    fullDescription: "BookishWear is a fully-functional eCommerce platform designed for a niche market — book-themed clothing. It features a complete shopping experience with product catalog, cart management, user authentication, and order processing, all powered by Redux for state management.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    impact: "Complete e-commerce experience for niche market",
    challenges: [
      "Implementing complex state management with Redux for cart and orders",
      "Building a scalable product catalog with categories and filters",
      "Creating a seamless checkout flow with order tracking",
      "Ensuring responsive design across all device sizes"
    ],
    features: [
      "Product catalog with categories and search",
      "Shopping cart with Redux state management",
      "User authentication and profile management",
      "Order processing and tracking"
    ]
  },
  "pathfinder": {
    name: "Pathfinder",
    description: "A pathfinding visualization tool using Dijkstra's Algorithm.",
    fullDescription: "Pathfinder is an interactive visualization tool that demonstrates Dijkstra's Algorithm in action. Users can create grids, place start and end points, add obstacles, and watch the algorithm find the shortest path in real-time with step-by-step animation.",
    stack: ["React", "JavaScript"],
    impact: "Interactive algorithm visualization tool",
    challenges: [
      "Implementing Dijkstra's Algorithm with visual step-by-step animation",
      "Building an interactive grid system for obstacle placement",
      "Optimizing rendering performance for large grids",
      "Creating intuitive controls for algorithm speed and grid manipulation"
    ],
    features: [
      "Interactive grid with drag-to-draw obstacles",
      "Real-time Dijkstra's Algorithm visualization",
      "Adjustable animation speed",
      "Clear path and reset functionality"
    ]
  },
  "neev-management-system": {
    name: "NEEV Management System",
    description: "A database management system for NEEV.",
    fullDescription: "Designed and developed a comprehensive database management system using SQL for NEEV. The system handles data organization, retrieval, and reporting with optimized queries and a well-structured relational schema.",
    stack: ["SQL"],
    impact: "Streamlined data management for NEEV",
    challenges: [
      "Designing an efficient relational database schema",
      "Writing optimized SQL queries for complex data retrieval",
      "Ensuring data integrity with proper constraints and relations",
      "Building reporting capabilities with aggregated queries"
    ],
    features: [
      "Relational database design with normalized schema",
      "Optimized SQL queries for fast data retrieval",
      "Data integrity with constraints and foreign keys",
      "Reporting and analytics queries"
    ]
  },
  "house-price-prediction": {
    name: "House Price Prediction",
    description: "An ML model for predicting house prices in India.",
    fullDescription: "Developed a machine learning model to predict house prices in the Indian market. The project involved data collection, feature engineering, model selection, and evaluation using various regression techniques to achieve accurate price predictions.",
    stack: ["Python", "ML", "Pandas", "Scikit-learn"],
    impact: "Accurate house price predictions for the Indian market",
    challenges: [
      "Collecting and cleaning real estate data for the Indian market",
      "Feature engineering to identify key price-influencing factors",
      "Comparing and selecting the best regression model",
      "Handling missing data and outliers in the dataset"
    ],
    features: [
      "Data preprocessing and feature engineering pipeline",
      "Multiple regression model comparison",
      "Price prediction based on location, size, and amenities",
      "Model evaluation with cross-validation"
    ]
  },
  "cashwise": {
    name: "CashWise",
    description: "A mobile expense tracking application.",
    fullDescription: "CashWise is a Flutter-based mobile application designed to help users track their day-to-day expenses. It provides an intuitive interface for logging expenses, categorizing spending, and viewing financial summaries to better manage personal finances.",
    stack: ["Flutter", "Dart"],
    impact: "Personal finance tracking made simple",
    challenges: [
      "Designing an intuitive UI for quick expense logging",
      "Implementing local data persistence for offline usage",
      "Building expense categorization and filtering",
      "Creating visual spending summaries and charts"
    ],
    features: [
      "Quick expense logging with categories",
      "Daily, weekly, and monthly spending summaries",
      "Expense categorization and filtering",
      "Clean, intuitive mobile UI"
    ]
  },
  "ciphersafe": {
    name: "CipherSafe",
    description: "A secure credential management mobile app.",
    fullDescription: "CipherSafe is a Flutter application focused on security, allowing users to safely store login credentials for different websites and apps. It uses encryption to protect sensitive data and provides a convenient way to manage passwords across platforms.",
    stack: ["Flutter", "Dart"],
    impact: "Secure credential management on mobile",
    challenges: [
      "Implementing secure encryption for stored credentials",
      "Building a master password authentication system",
      "Designing a user-friendly interface for credential management",
      "Ensuring data security with local encrypted storage"
    ],
    features: [
      "Encrypted credential storage",
      "Master password protection",
      "Organized storage by website/app",
      "Quick copy-to-clipboard functionality"
    ]
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <Layout>
        <section className="py-20">
          <div className="container">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
              <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
              <Button asChild>
                <Link to="/work">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Back Link */}
          <Link 
            to="/work" 
            className="inline-flex items-center font-mono text-sm text-muted-foreground hover:text-primary transition-colors mb-8 opacity-0 animate-fade-in-up"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Work
          </Link>

          {/* Project Header */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-1">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {project.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <TechTag key={tech}>{tech}</TechTag>
              ))}
            </div>

            {/* Impact */}
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <span className="font-mono text-sm text-primary">
                <span className="text-muted-foreground">{"//"}</span> Impact: {project.impact}
              </span>
            </div>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-2">
            <CodeDivider label="Challenges" />
          </div>

          {/* Challenges */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-3">
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">→</span>
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="opacity-0 animate-fade-in-up stagger-3">
            <CodeDivider label="Features" />
          </div>

          {/* Features */}
          <div className="mb-12 opacity-0 animate-fade-in-up stagger-4">
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="font-mono text-primary mt-1">✓</span>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-8 border-t border-border opacity-0 animate-fade-in-up stagger-4">
            <Button variant="outline" className="font-mono" disabled>
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
            <Button variant="outline" className="font-mono" disabled>
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
