import { Code2, Rocket, Users, Award } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices"
    },
    {
      icon: Rocket,
      title: "Fast Delivery",
      description: "Agile development with quick iterations and timely delivery"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills"
    },
    {
      icon: Award,
      title: "Quality Focus",
      description: "Committed to delivering high-quality, tested solutions"
    }
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl text-[var(--secondary-color)] mb-4">About Me</h2>
            <div className="w-20 h-1 bg-[var(--tertiary-color)]"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-[var(--secondary-color)] opacity-90">
              I am Jared, a Full-Stack Developer & Team Lead with a track record of managing high-performing engineering teams and building scalable cloud architectures. With a 4.0 GPA in Software Development and experience leading 20+ developers, I thrive at the intersection of technical strategy and hands-on execution.
              </p>
              
              <p className="text-lg text-[var(--secondary-color)] opacity-90">
              Global Adaptability: A diverse background spanning the Republic Of Congo, US, South Africa, Côte d'Ivoire, Canada and Belarus, including a 2-year volunteer mission that sharpened my resilience and communication skills.
              </p>
              <p className="text-lg text-[var(--secondary-color)] opacity-90">
              Fluent in French & English | Currently expanding my Russian proficiency.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--tertiary-color)]"></span>
                  <span className="text-[var(--secondary-color)]">
                    <strong>Education:</strong> B.A.S. in Software Development
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--tertiary-color)]"></span>
                  <span className="text-[var(--secondary-color)]">
                    <strong>Experience:</strong> 1 Years
                  </span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-[var(--border)]"
                >
                  <highlight.icon className="h-10 w-10 text-[var(--secondary-color)] mb-3" />
                  <h3 className="text-[var(--secondary-color)] mb-2">{highlight.title}</h3>
                  <p className="text-sm text-[var(--secondary-color)] opacity-70">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
