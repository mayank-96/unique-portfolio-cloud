import { ExternalLink, Github, Chrome, Code, Database, Library } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const Projects = () => {
  const categories = [
    {
      name: "Professional Work",
      projects: [
        {
          title: "Velt Collaboration SDK",
          description: "Framework-agnostic collaboration SDK with customizable components and theming system",
          tech: ["React", "TypeScript", "Design Systems", "Accessibility"],
          icon: Library,
          color: "bg-blue-600",
          link: "https://velt.dev/",
        },
        {
          title: "Superflow File Drive",
          description: "Collaborative file manager with custom media players for various file types",
          tech: ["React", "Media Players", "Collaboration"],
          icon: Chrome,
          color: "bg-purple-600",
          link: "https://drive.usesuperflow.com/upload",
        },
        {
          title: "GlueStack Components",
          description: "Universal component library for React and React Native with 3.5k GitHub stars",
          tech: ["React", "React Native", "Component Library"],
          icon: Code,
          color: "bg-green-600",
          link: "https://gluestack.io/",
        },
        {
          title: "NativeBase",
          description: "UI library with 65k+ weekly downloads and 18k+ GitHub stars",
          tech: ["React Native", "Component Library", "UI Design"],
          icon: Code,
          color: "bg-indigo-600",
          link: "https://nativebase.io/",
        }
      ]
    },
    {
      name: "Tools & Plugins",
      projects: [
        {
          title: "GlueStack Figma Plugin",
          description: "Plugin enabling batch updates for color palette alpha tokens and font families",
          tech: ["Figma Plugin", "Design", "JavaScript"],
          icon: Chrome,
          color: "bg-pink-500",
          link: "https://www.figma.com/community/plugin/1304000704678516266/gluestack",
        },
        {
          title: "React Native Core",
          description: "Added aria-live alias for accessibilityLiveRegion, improved accessibility",
          tech: ["React Native", "Accessibility", "JavaScript"],
          icon: Code,
          color: "bg-blue-500",
          link: "https://github.com/facebook/react-native/pull/34555",
        }
      ]
    },
    {
      name: "Personal Projects",
      projects: [
        {
          title: "ChessMate",
          description: "Chess practice app with Stockfish engine integration, won 2nd position in hackathon",
          tech: ["Flask", "Stockfish", "chessboard.js", "Python"],
          icon: Chrome,
          color: "bg-blue-500"
        },
        {
          title: "Titanic Survival Predictor",
          description: "ML model predicting survival odds on the Titanic, winner of web development contest",
          tech: ["Python", "Machine Learning", "Statistical Analysis"],
          icon: Database,
          color: "bg-red-500"
        }
      ]
    }
  ];

  const renderRegularProject = (project, projectIndex) => (
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
              <div className={`w-10 h-10 ${project.color} rounded-full flex items-center justify-center`}>
                <project.icon size={20} className="text-white" />
              </div>
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
                <span 
                  key={tech} 
                  className="inline-block text-xs font-medium bg-secondary/70 backdrop-blur-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
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
              A selection of my professional work, open-source contributions, and personal projects across various domains.
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
                  {categories[0].name}
                </span>
              </motion.h3>
              
              <div className="grid grid-cols-1 gap-12">
                {categories[0].projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                    className="w-full"
                  >
                    <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex flex-col lg:flex-row">
                          <div className={`lg:w-1/3 ${project.color} p-8 flex items-center justify-center`}>
                            <div className="text-white">
                              <project.icon size={80} className="mx-auto mb-4" />
                              <h3 className="text-2xl font-bold text-center">{project.title}</h3>
                            </div>
                          </div>
                          <div className="lg:w-2/3 p-8">
                            <div className="flex justify-between items-start mb-4">
                              <div>
                                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                                <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
                              </div>
                              {project.link && (
                                <a 
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary hover:text-primary/80 transition-colors rounded-full bg-primary/10 p-2 flex items-center justify-center"
                                  aria-label={`Visit ${project.title} website`}
                                >
                                  <ExternalLink size={24} />
                                </a>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-3 mt-6">
                              {project.tech.map(tech => (
                                <span 
                                  key={tech} 
                                  className="inline-block text-sm font-medium bg-secondary px-4 py-2 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {categories.slice(1).map((category, categoryIndex) => (
              <div key={category.name} className="space-y-10">
                <motion.h3 
                  className="inline-block text-3xl font-anton uppercase relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="relative after:absolute after:w-full after:h-0.5 after:bg-primary after:bottom-0 after:left-0">
                    {category.name}
                  </span>
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.projects.map((project, projectIndex) => 
                    renderRegularProject(project, projectIndex)
                  )}
                </div>
              </div>
            ))}
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
