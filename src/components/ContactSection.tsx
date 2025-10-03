import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ndongajared@gmail.com",
      href: "mailto:ndongajared@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+375 25 697 8184",
      href: "tel:+375 25 697 8184"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Belarus",
      href: null
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-8 py-20">
      <div className="max-w-6xl w-full">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl md:text-5xl text-[var(--secondary-color)] mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-[var(--tertiary-color)]"></div>
          </div>
          
          <p className="text-lg text-[var(--secondary-color)] opacity-90 max-w-3xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-8 shadow-md border border-[var(--border)]">
              <h3 className="text-2xl text-[var(--secondary-color)] mb-6">Send Message</h3>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[var(--secondary-color)]">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your name"
                    className="border-[var(--border)] focus:border-[var(--secondary-color)]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[var(--secondary-color)]">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="border-[var(--border)] focus:border-[var(--secondary-color)]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-[var(--secondary-color)]">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project inquiry"
                    className="border-[var(--border)] focus:border-[var(--secondary-color)]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[var(--secondary-color)]">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="border-[var(--border)] focus:border-[var(--secondary-color)]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-[var(--secondary-color)] text-[var(--primary-color)] hover:bg-[var(--tertiary-color)]"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl text-[var(--secondary-color)] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[var(--border)]"
                  >
                    <div className="p-3 rounded-full bg-[var(--secondary-color)]">
                      <info.icon className="h-6 w-6 text-[var(--primary-color)]" />
                    </div>
                    <div>
                      <h4 className="text-[var(--secondary-color)] mb-1">{info.label}</h4>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-[var(--tertiary-color)] hover:underline"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[var(--tertiary-color)]">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-[var(--secondary-color)] text-[var(--primary-color)] rounded-lg p-8 mt-8">
                <h4 className="text-xl mb-3">Available for Opportunities</h4>
                <p className="opacity-90 mb-4">
                  I'm currently available for freelance projects and full-time positions. 
                  Let's build something amazing together!
                </p>
                <Button 
                  variant="outline"
                  className="border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--tertiary-color)] hover:border-[var(--tertiary-color)]"
                >
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
