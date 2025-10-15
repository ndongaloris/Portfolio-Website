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
                I'm Full-Stack Software Developer with an Associate Degree in 
                Software Development and currently pursuing a Bachelor's in the same 
                field at Brigham Young University–Idaho.
              </p>
              
              <p className="text-lg text-[var(--secondary-color)] opacity-90">
                I hold a professional CS50 certificate in Python, 
                which deepened my understanding of algorithms and object-oriented programming. 
                I’m passionate about creating impactful digital experiences.
              </p>
              <p className="text-lg text-[var(--secondary-color)] opacity-90">
               Outside of code, I recharge through anime, basketball, and 
               video games—always balancing logic with creativity.
              </p>
              
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--tertiary-color)]"></span>
                  <span className="text-[var(--secondary-color)]">
                    <strong>Location:</strong> Grodno, Belarus
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--tertiary-color)]"></span>
                  <span className="text-[var(--secondary-color)]">
                    <strong>Education:</strong> Bachelor of Applied Science of Software Development
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
