import { Badge } from "./ui/badge";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Vue.js", "HTML5", "CSS3"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Redis", "GraphQL"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Git", "Jest", "Linux", "Nginx"]
    },
    {
      category: "Other",
      skills: ["REST APIs", "Microservices", "Agile", "System Design", "Testing", "WebSockets"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl text-[var(--secondary-color)] mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-[var(--tertiary-color)]"></div>
          </div>
          
          <p className="text-lg text-[var(--secondary-color)] opacity-90 max-w-3xl">
            I work with a wide range of technologies and tools to build modern, scalable applications. 
            Here's my current tech stack:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow border border-[var(--border)]"
              >
                <h3 className="text-2xl text-[var(--secondary-color)] mb-6">{category.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--tertiary-color)] hover:text-[var(--primary-color)] transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-lg p-8 mt-8">
            <h3 className="text-2xl mb-4">Currently Learning</h3>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-4 py-2 border-[var(--primary-color)] text-[var(--primary-color)]">
                Rust
              </Badge>
              <Badge variant="outline" className="px-4 py-2 border-[var(--primary-color)] text-[var(--primary-color)]">
                WebAssembly
              </Badge>
              <Badge variant="outline" className="px-4 py-2 border-[var(--primary-color)] text-[var(--primary-color)]">
                Machine Learning
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
