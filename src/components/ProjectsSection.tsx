import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProjectsSection() {
  const personalProjects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing my work, built with modern web technologies and responsive design principles.",
      image: "https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2RpbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU5Mjg1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts, interactive maps, and historical weather data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NTkzMjk4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "API Integration", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Budget Tracker",
      description: "Personal finance management app for tracking expenses, creating budgets, and visualizing spending patterns.",
      image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHBsaWNhdGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NTkzMjk4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "MongoDB", "Chart.js"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ];

  const teamProjects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzU5MzA1NTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Team Collaboration Tool",
      description: "Real-time collaborative workspace with task management, file sharing, and video conferencing integration.",
      image: "https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTkyNDMwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Next.js", "PostgreSQL", "WebSocket", "AWS"],
      github: "https://github.com",
      demo: "https://example.com"
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
        <ImageWithFallback
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
          
          {/* Personal Projects */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl text-[var(--secondary-color)] mb-2">Personal Projects</h3>
              <p className="text-lg text-[var(--secondary-color)] opacity-80">
                Independent projects built to explore new technologies and solve real-world problems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {personalProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </div>

          {/* Team Projects */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl text-[var(--secondary-color)] mb-2">Team Projects</h3>
              <p className="text-lg text-[var(--secondary-color)] opacity-80">
                Collaborative projects demonstrating teamwork, code review, and agile methodologies.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {teamProjects.map((project, index) => renderProjectCard(project, index))}
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
