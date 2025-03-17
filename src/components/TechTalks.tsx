
import { motion } from "framer-motion";
import { ExternalLink, Video } from "lucide-react";

const talks = [
  {
    title: "Headless CMS as a Low Code Tool",
    event: "Low-code/No-code Hybrid Meetup | GeekyAnts",
    url: "https://www.youtube.com/watch?v=7-UUZBn8e7c&list=PLgCGQtEZyQbNDO9l7wtzeyZZ9C0Dxa4Mf&index=6",
    thumbnail: "/lovable-uploads/d699d4cb-8097-47b1-9486-500b5f003814.png"
  },
  {
    title: "Panel Discussion Ft. Sanket Sahu and the Speakers",
    event: "Low-code/No-code Hybrid Meetup | GeekyAnts",
    url: "https://www.youtube.com/watch?v=cFcjH4WbRS0&list=PLgCGQtEZyQbNDO9l7wtzeyZZ9C0Dxa4Mf&index=6",
    thumbnail: "/lovable-uploads/d699d4cb-8097-47b1-9486-500b5f003814.png"
  }
];

const TechTalks = () => {
  return (
    <section id="talks" className="py-24 bg-gradient-to-b from-secondary/30 to-background relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-anton uppercase mb-6">
            <span className="text-primary">Tech</span> Talks
          </h2>
          <p className="text-lg text-muted-foreground">
            Sharing knowledge and insights through conference talks and presentations.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {talks.map((talk, index) => (
            <motion.div
              key={talk.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative p-px overflow-hidden rounded-lg bg-gradient-to-br from-primary/30 via-primary/20 to-transparent h-full">
                <div className="bg-background backdrop-blur-sm rounded-lg overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-video bg-black/20 overflow-hidden">
                    <img 
                      src={talk.thumbnail} 
                      alt={talk.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Video size={48} className="text-white/80" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 group-hover:opacity-70 transition-opacity"></div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {talk.title}
                    </h3>
                    <p className="text-sm text-primary mb-4">
                      {talk.event}
                    </p>
                    
                    <div className="mt-auto">
                      <a 
                        href={talk.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-medium hover:shadow-lg transition-all"
                      >
                        Watch Talk
                        <ExternalLink size={14} className="ml-2" />
                      </a>
                    </div>
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

export default TechTalks;
