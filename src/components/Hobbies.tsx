
import { motion } from "framer-motion";
import { Camera, Palette, Video, ExternalLink } from "lucide-react";

const Hobbies = () => {
  return (
    <section id="hobbies" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-secondary/50 to-transparent"></div>
      
      {/* Gradient bg elements */}
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
          <h2 className="text-4xl md:text-5xl font-anton uppercase mb-6">
            <span className="text-primary">Hobbies</span> & Interests
          </h2>
          <p className="text-lg text-muted-foreground">
            Beyond coding, here are some of my creative pursuits and interests.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-16">
          {/* Video Editing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Video className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Video Editing</h3>
            </div>
            
            <div className="relative p-px overflow-hidden rounded-lg bg-gradient-to-br from-primary/30 via-primary/20 to-transparent">
              <div className="bg-background backdrop-blur-sm p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Peaky Blinders || Thomas Shelby || Experience</h4>
                <p className="text-muted-foreground mb-6">
                  I make edits of TV shows and films that I like, combining visual storytelling with creative editing techniques.
                </p>
                
                <div className="flex justify-center">
                  <motion.a 
                    href="https://www.youtube.com/watch?v=aHXhtOFzseE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary/80 text-white font-medium hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Watch on YouTube
                    <ExternalLink size={16} className="ml-2" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Sketching */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Palette className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Sketching</h3>
            </div>
            
            <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
              I enjoy creating sketches in my free time, exploring different artistic styles and subjects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                "https://photos.app.goo.gl/oDPVmddVPGpArH7d6",
                "https://photos.app.goo.gl/StuCjXcAGGPhvJLe7",
                "https://photos.app.goo.gl/bTWvhCPUaiJeNaPA8"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="relative p-px overflow-hidden rounded-lg bg-gradient-to-br from-primary/30 via-primary/20 to-transparent"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="aspect-square bg-background/50 backdrop-blur-sm flex items-center justify-center rounded-lg overflow-hidden">
                    <img 
                      src={item} 
                      alt={`Sketch ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://via.placeholder.com/400x400?text=Sketch+Not+Found";
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
