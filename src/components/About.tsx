
import { motion } from "framer-motion";
import { CodeIcon, Heart, Cpu, Zap, Sparkles } from "lucide-react";

const About = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "React Native", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      {/* Diagonal stripes background */}
      <div className="absolute inset-0 diagonal-stripes"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            I'm a dedicated software engineer with experience in building applications for web and mobile platforms. My specialization lies in creating elegant and efficient user interfaces that provide exceptional user experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold">My Expertise</h3>
            
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <CodeIcon className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Clean Code</h4>
              <p className="text-muted-foreground">I write clean, maintainable code with a focus on performance and scalability.</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Pixel Perfect</h4>
              <p className="text-muted-foreground">I'm passionate about creating pixel-perfect, responsive interfaces that users love.</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Cpu className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Problem Solver</h4>
              <p className="text-muted-foreground">I enjoy tackling complex problems and finding efficient, elegant solutions.</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Sparkles className="text-primary" size={24} />
              </div>
              <h4 className="text-lg font-semibold mb-2">Continuous Learner</h4>
              <p className="text-muted-foreground">I'm always learning and exploring new technologies and approaches.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
