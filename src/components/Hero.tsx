
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden flex items-center">
      {/* Gradient background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full font-medium text-sm">
                Software Engineer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-primary">Mayank Pagar</span>
                <span className="inline-block">👋</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                I build things for the web & mobile
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              My passion for software lies with dreaming up ideas and making them come true with elegant pixel-perfect interfaces. I take great care in the experience, architecture, and code quality of the things I build.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#contact" className="inline-flex items-center justify-center h-12 px-6 bg-primary text-white font-medium rounded-lg transition-all hover:bg-primary/90">
                Get in touch
              </a>
              <a href="#experience" className="inline-flex items-center justify-center h-12 px-6 border border-border bg-background font-medium rounded-lg transition-all hover:bg-muted">
                View my work
              </a>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2 relative">
            <motion.div 
              className="relative z-10 code-section"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="line-numbers">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                  <div key={num}>{num}</div>
                ))}
              </div>
              <div className="code-content">
                <pre>
                  <code>
                    <span className="text-blue-400">const</span> <span className="text-green-400">developer</span> = {"{"}
                    {"\n"}  <span className="text-yellow-400">name</span>: <span className="text-orange-300">'Mayank Pagar'</span>,
                    {"\n"}  <span className="text-yellow-400">title</span>: <span className="text-orange-300">'Software Engineer'</span>,
                    {"\n"}  <span className="text-yellow-400">location</span>: <span className="text-orange-300">'Pune, India'</span>,
                    {"\n"}  <span className="text-yellow-400">skills</span>: [
                    {"\n"}    <span className="text-orange-300">'React'</span>, 
                    {"\n"}    <span className="text-orange-300">'React Native'</span>, 
                    {"\n"}    <span className="text-orange-300">'TypeScript'</span>,
                    {"\n"}    <span className="text-orange-300">'UI/UX'</span>
                    {"\n"}  ],
                    {"\n"}  <span className="text-yellow-400">passion</span>: <span className="text-orange-300">'Building elegant interfaces'</span>
                    {"\n"}{"}"}
                    <span className="cursor-blink">|</span>
                  </code>
                </pre>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
