
import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Terminal } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      name: "Languages",
      icon: Code,
      skills: ["JavaScript", "TypeScript", "Python", "Java"],
      bgColor: "bg-[#D3E4FD]",
    },
    {
      name: "Frontend",
      icon: Layout,
      skills: ["React.js", "React Native", "Angular", "Lit", "HTML5", "CSS3", "Figma Plugin Development", "Component Library Development", "SDK Development", "Design Systems"],
      bgColor: "bg-[#D3E4FD]",
    },
    {
      name: "Backend",
      icon: Server,
      skills: ["Firebase Realtime Database", "Firestore", "Cloud Functions", "Node.js", "RESTful APIs"],
      bgColor: "bg-[#D3E4FD]",

    },
    {
      name: "Databases",
      icon: Database,
      skills: ["MySQL"],
      bgColor: "bg-[#D3E4FD]",

    },
    {
      name: "Others",
      icon: Terminal,
      skills: ["Git", "Linux", "Testing", "Debugging", "Agile", "SDLC", "ARIA", "Internationalization", "Problem-Solving"],
      bgColor: "bg-[#D3E4FD]",
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary/50 to-transparent"></div>
      
      {/* Gradient bg elements */}
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-anton uppercase mb-6">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I specialize in these technologies and methodologies to build superior software solutions.
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
            >
              <div className={`relative p-px overflow-hidden rounded-xl bg-gradient-to-br from-primary/30 via-primary/20 to-transparent h-full ${category.bgColor} bg-opacity-10`}>
                <div className="bg-background/60 backdrop-blur-sm p-6 rounded-xl h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${category.bgColor} bg-opacity-10 rounded-full flex items-center justify-center`}>
                      <category.icon size={20} />
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        className={`inline-block px-3 py-1 ${category.bgColor} bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-medium`}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
