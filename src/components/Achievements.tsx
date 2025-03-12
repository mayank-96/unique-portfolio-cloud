
import { motion } from "framer-motion";
import { Award, Medal, Trophy } from "lucide-react";

const achievements = [
  {
    id: 1,
    title: "Winner of Web Development Contest",
    event: "Tech Adrishta Fest, SMIT",
    date: "12/2020",
    location: "Sikkim, India",
    description: "Built a web app which can hypothetically predict your survival odds in Titanic using Machine Learning.",
    icon: Trophy
  },
  {
    id: 2,
    title: "NPTEL Course Topper",
    event: "IIT Kharagpur, India",
    date: "04/2019",
    location: "IIT Kharagpur, India",
    description: "Joy of Computing using Python (93%). Received Elite Certificate with Gold Medal along with an award for being in top 5 percentile among 9034 certified candidates.",
    icon: Medal
  },
  {
    id: 3,
    title: "Secured 2nd position in Hackathon",
    event: "Tech Adrishta Fest, SMIT",
    date: "12/2020",
    location: "Sikkim, India",
    description: "Built a web app ChessMate that allows the users to play and practice chess against a bot and analyse their every move to get better. Added features to show various information regarding the game as it progresses like the current winning probability, mistakes, Inaccuracies, blunders and also an option to get the best possible move at the given Board State.",
    icon: Award
  }
];

const Achievements = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="achievements" className="py-24 relative">
      {/* Blob decoration */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-primary">Achievements</span> & Awards
          </h2>
          <p className="text-lg text-muted-foreground">
            Recognition for my work and contributions to the tech community.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="bg-card rounded-lg border border-border p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              {/* Background decoration */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <achievement.icon className="text-primary" size={24} />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <div className="text-sm text-primary mb-1 font-medium">
                  {achievement.event}
                </div>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <span>{achievement.date}</span>
                  <span className="mx-2">•</span>
                  <span>{achievement.location}</span>
                </div>
                
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 max-w-lg mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted-foreground italic">
            "Success is not final, failure is not fatal: It is the courage to continue that counts."
          </p>
          <p className="text-primary font-medium mt-2">— Winston Churchill</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
