import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const personalProjects = [
    {
      title: "Finance",
      description: "Allows users to calculate loans and savings by generating a schedule.",
      image: "https://github.com/ndongaloris/Portfolio-Website/blob/main/public/images/Screenshot_finance.jpeg?raw=true",
      technologies: ["Python", "Flask", "Numpy", "Pandas"],
      github: "https://github.com/ndongaloris/Finances",
      demo: "https://finance-y1i9.onrender.com/"
    },
    {
      title: "IdeaVault",
      description: "The app allows users to create, view, edit, and delete startup ideas, each tagged with metadata like stage, description, and technology focus. It connects to a Firestore cloud database, enabling persistent storage and real-time updates.",
      image: "https://github.com/ndongaloris/Portfolio-Website/blob/main/public/images/Screenshot_Ideavault.jpeg?raw=true",
      technologies: ["React", "Firebase", "No-SQL", "TypeScript", "Tailwind", "HTML", "CSS"],
      github: "https://github.com/ndongaloris/IdeaVault",
      demo: "https://example.com"
    }
  ];

  const teamProjects = [
    {
      title: "PathwayWorldwide-API",
      description: "An API for replicating BYU PathwayWorldwide, including resources/collections.",
      image: "https://github.com/ndongaloris/Portfolio-Website/blob/main/public/images/Screenshot_BYUPW-API.com.jpeg?raw=true",
      technologies: ["Jest", "Swagger", "MongoDB", "Node.js", "Rest API", "Passport", "Oauth 2.0"],
      github: "https://github.com/ndongaloris/BYU-PathwayWorldwide-API",
      demo: "https://cse341-team13.onrender.com/"
    },
    {
      title: "handcrafted haven",
      description: "Provides a platform for artisans and crafters to showcase and sell their unique handcrafted items.",
      image: "https://github.com/ndongaloris/Portfolio-Website/blob/main/public/images/Screenshot_handcraftedhaven.jpeg?raw=true",
      technologies: ["React", "Node.js", "CSS Framework", "Vercel", "Next.js"],
      github: "https://github.com/KukkikD/WDD430-Group6-Project",
      demo: "https://handcraftedhaven-72l3.vercel.app/"
    },
    {
      title: "BudgetBuddy",
      description: "Track expenses, manage budgets, and achieve your financial goals with BudgetBuddy - the simple and powerful personal finance manager.",
      image: "https://github.com/ndongaloris/Portfolio-Website/blob/main/public/images/Screenshot_budgetbuddy.jpeg?raw=true",
      technologies: ["Docker", "C#", "MongoDB", "Blazor", "CSS", "HTML", "Azure"],
      github: "https://github.com/ndongaloris/BudgetBuddy",
      demo: "https://budgetbuddy-u82p.onrender.com/"
    }
  ];

  const seniorProject = [
    {
      title: "Smart Campus Management System",
      description: "Comprehensive university management platform integrating student services, course management, facility booking, and campus navigation with IoT sensors for real-time occupancy tracking.",
      image: "https://images.unsplash.com/photo-1712903911017-7c10a3c4b3e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcHJvamVjdCUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NTkzMjk4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Python", "Django", "PostgreSQL", "IoT", "Docker"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  const renderProjectCard = (project: typeof personalProjects[0], index: number) => (
    <Card 
      key={index} 
      className="overflow-hidden hover:shadow-xl transition-shadow border-[var(--border)] flex flex-col"
    >
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-[var(--secondary-color)]">{project.title}</CardTitle>
        <CardDescription className="text-[var(--secondary-color)] opacity-70">
          {project.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, techIndex) => (
            <Badge 
              key={techIndex}
              variant="secondary"
              className="bg-[var(--primary-color)] text-[var(--secondary-color)]"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-3">
        <Button 
          variant="outline" 
          size="sm"
          className="flex-1 border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[var(--primary-color)]"
          asChild
        >
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            Code
          </a>
        </Button>
        <Button 
          size="sm"
          className="flex-1 bg-[var(--secondary-color)] text-[var(--primary-color)] hover:bg-[var(--tertiary-color)]"
          asChild
        >
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </a>
        </Button>
      </CardFooter>
    </Card>
  );

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full">
        <div className="space-y-16">
          <div>
            <h2 className="text-4xl md:text-5xl text-[var(--secondary-color)] mb-4">Projects</h2>
            <div className="w-20 h-1 bg-[var(--tertiary-color)]"></div>
          </div>
          
          {/* Team Projects */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl text-[var(--secondary-color)] mb-2">Team Projects</h3>
              <p className="text-lg text-[var(--secondary-color)] opacity-80">
                Collaborative projects demonstrating teamwork, code review, and agile methodologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>

          {/* Personal Projects */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl text-[var(--secondary-color)] mb-2">Personal Projects</h3>
              <p className="text-lg text-[var(--secondary-color)] opacity-80">
                Independent projects built to explore new technologies and solve real-world problems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {personalProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>

          {/* Senior Project */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl text-[var(--secondary-color)] mb-2">Senior Capstone Project</h3>
              <p className="text-lg text-[var(--secondary-color)] opacity-80">
                Year-long capstone project showcasing comprehensive software engineering skills.
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 max-w-2xl gap-8">
              {seniorProject.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
