import { Briefcase, GraduationCap } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "GBCS Group SkyIT",
      period: "Oct 2025 - Present",
      description: "Developed and maintained full-stack features for fleet management applications, including frontend and backend components",
      achievements: [
        "Assisted in troubleshooting, performance tuning, and continuous improvement of software systems",
        "Participated in application deployment and management on cloud platforms, notably Microsoft Azure",
        "Implemented responsive and dynamic frontend applications using ReactJS, NextJS, and related technologies",
        "Contributed to API design and integration, utilizing RESTful and GraphQL services"
      ]
    },
    {
      title: "Programming Intern",
      company: "Research and Business Development Center",
      period: " Jan 2024 - May 2024",
      description: "Started my career building features for the company's main product. Learned best practices and modern development workflows",
      achievements: [
        "Applied Scrum framework to prioritize backlog items, improving project progress by 30%",
        "Established naming conventions, diminishing documentation errors by 10%",
        "Enhanced UI design using best practices, increasing satisfaction ratings by 20%",
        "Facilitated team collaboration via Microsoft Teams for meetings and updates"
      ]
    },
    {
      title: "Full-time Representative",
      company: "The Church of Jesus Christ of Latter-Day Saints",
      period: " April 2020 - May 2022",
      description: "Led community outreach and administrative efforts across diverse cultural settings, fostering engagement and operational efficiency",
      achievements: [
        " Created financial spreadsheets, reducing working-fund processing time by 70%",
        "Led weekly goal-setting meetings, boosting member retention by 5%",
        "Delivered culturally adapted speeches, achieving 80% audience engagement and understanding",
        "Provided interpreting services for 150+ attendees with 90% satisfaction"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Applied Science of Software Development",
      school: "Brigham Young University - Idaho",
      period: "2023 - 2026",
      details: "GPA: 4.0"
    },
    {
      degree: "Associate of Applied Science of Software Development",
      school: "Brigham Young University - Idaho",
      period: "2023 - 2025",
      details: "GPA: 4.0"
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl text-[var(--secondary-color)] mb-4">Experience & Education</h2>
            <div className="w-20 h-1 bg-[var(--tertiary-color)]"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="h-8 w-8 text-[var(--secondary-color)]" />
              <h3 className="text-2xl text-[var(--secondary-color)]">Work Experience</h3>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-[var(--primary-color)] last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[var(--secondary-color)]"></div>

                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-[var(--border)]">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-3">
                      <div>
                        <h4 className="text-xl text-[var(--secondary-color)]">{exp.title}</h4>
                        <p className="text-[var(--tertiary-color)]">{exp.company}</p>
                      </div>
                      <span className="px-4 py-1 rounded-full bg-[var(--primary-color)] text-[var(--secondary-color)]">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-[var(--secondary-color)] opacity-80 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-2 text-[var(--secondary-color)] opacity-70"
                        >
                          <span className="text-[var(--tertiary-color)] mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 pt-8">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-[var(--secondary-color)]" />
              <h3 className="text-2xl text-[var(--secondary-color)]">Education</h3>
            </div>

            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow border border-[var(--border)]"
              >
                <div className="flex flex-wrap justify-between items-start gap-4">
                  <div>
                    <h4 className="text-xl text-[var(--secondary-color)] mb-1">{edu.degree}</h4>
                    <p className="text-[var(--tertiary-color)] mb-2">{edu.school}</p>
                    <p className="text-[var(--secondary-color)] opacity-70">{edu.details}</p>
                  </div>
                  <span className="px-4 py-1 rounded-full bg-[var(--primary-color)] text-[var(--secondary-color)]">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
