import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-[var(--primary-color)] text-[var(--secondary-color)]">
            <p>Available for work</p>
          </div>

          <h1 className="text-5xl md:text-7xl text-[var(--secondary-color)]">
            Hi, I'm <span className="text-[var(--tertiary-color)]">Loris Jared Ndonga</span>
          </h1>

          <h2 className="text-3xl md:text-4xl text-[var(--tertiary-color)]">
            Full Stack Software Engineer
          </h2>

          <p className="text-lg md:text-xl text-[var(--secondary-color)] opacity-80 max-w-2xl">
            I build exceptional digital experiences with modern web technologies.
            Specializing in React, Node.js, and cloud architecture to create scalable,
            user-centric applications.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-[var(--secondary-color)] text-[var(--primary-color)] hover:text-[var(--secondary-color)]"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              className="border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[var(--tertiary-color)]"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
