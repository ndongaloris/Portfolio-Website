import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { Home, User, Code, Briefcase, FolderOpen, Mail, Github, Linkedin, Download, MapPin, Phone } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  const menuItems = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Code, label: "Skills", href: "#skills" },
    { icon: FolderOpen, label: "Projects", href: "#projects" },
    { icon: Briefcase, label: "Experience", href: "#experience" },
    { icon: Mail, label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-[var(--background-color)]">
        <Sidebar className="border-r border-[var(--sidebar-border)]">
          <SidebarHeader className="p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=JohnDoe" />
                  <AvatarFallback className="bg-[var(--primary-color)] text-[var(--secondary-color)]">NLJ</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl text-[var(--sidebar-foreground)]">Loris Jared Ndonga</h2>
                  <p className="text-sm text-[var(--sidebar-foreground)] opacity-80">
                    Software Engineer
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 px-3 py-2 bg-[var(--sidebar-accent)] rounded-md">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-sm text-[var(--sidebar-foreground)]">Available for work</span>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton asChild>
                        <a 
                          href={item.href}
                          onClick={(e: any) => handleNavClick(e, item.href)}
                          className="flex items-center gap-3 px-4 py-3 text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] rounded-md transition-colors"
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <Separator className="my-4 bg-[var(--sidebar-border)]" />

            <SidebarGroup className="px-4">
              <div className="space-y-3">
                <Button 
                  className="w-full bg-[var(--primary-color)] text-[var(--secondary-color)] hover:bg-[var(--tertiary-color)] hover:text-[var(--primary-color)]"
                  size="sm"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download CV
                </Button>

                <div className="flex gap-2">
                  <a 
                    href="https://github.com/ndongaloris" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] rounded-md transition-colors text-sm"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com/in/lorisjaredndonga" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-[var(--sidebar-foreground)] hover:bg-[var(--sidebar-accent)] rounded-md transition-colors text-sm"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter className="p-6">
            <p className="text-xs text-[var(--sidebar-foreground)] opacity-60 text-center">
              © 2025 Loris Jared Ndonga
            </p>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 overflow-auto snap-y snap-mandatory">
          <div className="sticky top-0 z-10 bg-[var(--background-color)] border-b border-[var(--border)] px-6 py-4 md:hidden">
            <SidebarTrigger className="text-[var(--secondary-color)]" />
          </div>
          
          <div className="w-full">
            <div className="snap-start">
              <HeroSection />
            </div>
            <div className="snap-start">
              <AboutSection />
            </div>
            <div className="snap-start">
              <SkillsSection />
            </div>
            <div className="snap-start">
              <ProjectsSection />
            </div>
            <div className="snap-start">
              <ExperienceSection />
            </div>
            <div className="snap-start">
              <ContactSection />
            </div>
          </div>
          
          <footer className="bg-[var(--secondary-color)] text-[var(--primary-color)] py-8 px-8">
            <div className="max-w-6xl mx-auto text-center">
              <p className="mb-2">Built with React, TypeScript, and Tailwind CSS</p>
              <p className="opacity-80">© 2025 Loris Jared Ndonga. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
    </SidebarProvider>
  );
}
