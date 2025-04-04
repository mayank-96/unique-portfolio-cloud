
import { ExternalLink, Github, Chrome, Code, Database, Library, ShoppingBag, Music, Film } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const personalProjects = [
    {
      title: "Mariela Cushions",
      description: "E-commerce platform for premium handcrafted cushions with secure payment processing and inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      icon: ShoppingBag,
      color: "bg-blue-600",
      link: "https://marielacushions.com"
    },
    {
      title: "Wave Music Player",
      description: "Modern music streaming application with playlist creation, artist discovery, and customizable themes",
      tech: ["React", "Firebase", "Web Audio API", "Styled Components"],
      icon: Music,
      color: "bg-purple-600",
      link: "https://wavemusicplayer.io"
    },
    {
      title: "WhatToWatch",
      description: "Movie and TV show recommendation engine based on user preferences and viewing history",
      tech: ["React", "TMDb API", "Machine Learning", "Express"],
      icon: Film,
      color: "bg-red-500",
      link: "https://whattowatch.app"
    }
  ];

  const professionalProjects = [
    {
      title: "Velt Collaboration SDK",
      description: "Real-time collaboration toolkit for web applications",
      tech: ["TypeScript", "React", "WebSockets"],
      link: "https://velt.dev"
    },
    {
      title: "GlueStack UI",
      description: "Universal component library for React and React Native",
      tech: ["React", "React Native", "Storybook"],
      link: "https://gluestack.io"
    },
    {
      title: "NativeBase",
      description: "Accessible component library for React Native",
      tech: ["React Native", "TypeScript"],
      link: "https://nativebase.io"
    }
  ];

  const renderProject = (project, projectIndex) => (
    <motion.div
      key={project.title}
      className="group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
    >
      <div className="relative p-px overflow-hidden rounded-lg bg-gradient-to-br from-primary/30 via-primary/20 to-transparent">
        <div className="bg-background p-6 h-full flex flex-col rounded-lg backdrop-blur-sm">
          <div className="mb-4 flex items-start justify-between">
            <div className="flex items-center gap-3">
              {project.icon && (
                <div className={`w-10 h-10 ${project.color} rounded-full flex items-center justify-center`}>
                  <project.icon size={20} className="text-white" />
                </div>
              )}
              <h4 className="text-xl font-bold">{project.title}</h4>
            </div>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={`Visit ${project.title} website`}
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          
          <p className="text-muted-foreground mb-6 flex-grow">
            {project.description}
          </p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map(tech => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 text-[20rem] font-anton text-primary/5 -z-10 opacity-70 leading-none">
        WORK
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-anton uppercase text-primary tracking-tight mb-8">
              Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of my personal and professional projects across various domains.
            </p>
          </div>
          
          <div className="space-y-24">            
            <div className="space-y-10">
              <motion.h3 
                className="inline-block text-3xl font-anton uppercase relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0">
                  Personal Projects
                </span>
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {personalProjects.map((project, projectIndex) => 
                  renderProject(project, projectIndex)
                )}
              </div>
            </div>

            <div className="space-y-10 mt-16">
              <motion.h3 
                className="inline-block text-3xl font-anton uppercase relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className="relative after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0">
                  Professional Work
                </span>
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {professionalProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <div className="relative p-[1px] overflow-hidden rounded-md bg-gradient-to-br from-primary/30 via-primary/20 to-transparent h-full">
                        <div className="bg-background/80 p-4 rounded-md h-full backdrop-blur-sm hover:bg-background/90 transition-all">
                          <h4 className="text-lg font-bold mb-1 flex items-center justify-between">
                            {project.title}
                            <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tech.map(tech => (
                              <Badge key={tech} variant="outline" className="text-xs py-0">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-16 flex justify-center">
            <motion.a 
              href="https://github.com/mayank-96" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-mono uppercase tracking-wider hover:translate-y-[-2px] transition-transform rounded-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={18} />
              View More on GitHub
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
