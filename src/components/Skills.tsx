
import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Terminal, Workflow, Shield, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      name: "Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java"]
    },
    {
      name: "Frontend",
      icon: Layout,
      skills: ["React.js", "React Native", "Angular", "Lit", "HTML5", "CSS3", "Figma Plugin Development", "Component Library Development", "SDK Development", "Design Systems"]
    },
    {
      name: "Backend",
      icon: Server,
      skills: ["Firebase Realtime Database", "Firestore", "Cloud Functions", "Node.js", "RESTful APIs"]
    },
    {
      name: "Databases",
      icon: Database,
      skills: ["MySQL"]
    },
    {
      name: "Others",
      icon: Terminal,
      skills: ["Git", "Linux", "Testing", "Debugging", "Agile", "SDLC", "ARIA", "Internationalization", "Problem-Solving"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-neon-blue/5 to-transparent"></div>
      
      {/* 3D geometric background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="glass" className="mb-4 mx-auto">Technical Expertise</Badge>
          <h2 className="text-4xl md:text-5xl font-anton mb-6">
            <span className="heading-gradient">Technical Skills</span>
          </h2>
          <p className="text-lg text-white/60">
            I leverage these technologies and methodologies to craft exceptional digital experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="h-full"
            >
              <div className="futuristic-card h-full">
                <div className="relative h-full">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-neon-purple/10 to-transparent opacity-30"></div>
                  <div className="relative z-10 p-6 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-neon-purple/10 rounded-full flex items-center justify-center animate-pulse-glow">
                        <category.icon className="text-neon-purple" size={20} />
                      </div>
                      <h3 className="text-xl font-sora font-medium">{category.name}</h3>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 flex-1">
                      {category.skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="inline-block px-3 py-1 bg-futuristic-accent/30 border border-white/5 backdrop-blur-sm rounded-md text-sm font-medium text-white/90"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Featured skills with 3D objects */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { name: "Blockchain", icon: Shield, description: "Knowledge of Web3 and decentralized applications", color: "purple" },
            { name: "Security", icon: Shield, description: "Implementing secure coding practices", color: "blue" },
            { name: "Performance", icon: Terminal, description: "Optimizing for speed and efficiency", color: "green" },
            { name: "Scalability", icon: Globe, description: "Building solutions that grow with you", color: "pink" },
          ].map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card p-6 h-full flex flex-col items-center text-center group-hover:border-neon-blue/30 transition-all">
                <div className={`w-16 h-16 mb-4 flex items-center justify-center rounded-lg bg-neon-${feature.color}/10 group-hover:bg-neon-${feature.color}/20 transition-colors`}>
                  <feature.icon className={`text-neon-${feature.color}`} size={28} />
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.name}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
