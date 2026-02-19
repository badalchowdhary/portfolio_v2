import { Layout } from "@/components/layout/Layout";
import { CodeDivider } from "@/components/ui/CodeDivider";
import { TechTag } from "@/components/ui/TechTag";

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
      "AWS (EC2, ECS, Lambda, S3, API Gateway, Cognito, DynamoDB)",
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

export default function About() {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          {/* Page Header */}
          <div className="max-w-3xl mb-12 opacity-0 animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About
            </h1>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up stagger-1">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <span className="text-primary font-medium">Badal Chowdhary</span>, a software engineer with 1+ years of experience building and shipping production-grade software products and ML pipelines. I'm a B.Tech graduate from IIT Gandhinagar in Materials Science and Engineering with Minors in Computer Science and Engineering.
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

              {/* Experience */}
              <div className="opacity-0 animate-fade-in-up stagger-3">
                <CodeDivider label="Experience" />
                <div className="space-y-4 mt-6">
                  <div className="space-y-1">
                    <h3 className="font-bold text-foreground">Software Development Engineer (SDE I)</h3>
                    <p className="text-sm text-muted-foreground">Hoomanely • Jan 2025 - Present</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-foreground">Backend Engineer Intern</h3>
                    <p className="text-sm text-muted-foreground">Sarvm.ai • Oct 2024 - Jan 2025</p>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-foreground">Image Processing Intern</h3>
                    <p className="text-sm text-muted-foreground">ESI • May - Jul 2023</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="opacity-0 animate-fade-in-up stagger-4">
                <CodeDivider label="Education" />
                <div className="space-y-4 mt-6">
                  <div className="space-y-1">
                    <h3 className="font-bold text-foreground">Indian Institute of Technology Gandhinagar</h3>
                    <p className="text-sm text-muted-foreground">B.Tech (2020 - 2024)</p>
                    <p className="text-sm text-muted-foreground">Materials Science & Engineering</p>
                    <p className="text-sm text-muted-foreground">Minors in Computer Science & Engineering</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Technical Skills */}
            <div className="space-y-8">
              <div className="opacity-0 animate-fade-in-up stagger-2">
                <CodeDivider label="Technical Skills" />
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
      </section>
    </Layout>
  );
}
