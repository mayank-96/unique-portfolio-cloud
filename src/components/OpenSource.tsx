
import { motion } from "framer-motion";
import { Github, GitPullRequest, Code } from "lucide-react";

const OpenSource = () => {
  return (
    <section id="opensource" className="py-24 bg-secondary/50 relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Open Source <span className="text-primary">Contributions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Giving back to the community through code contributions.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-card rounded-lg border border-border shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-black rounded-lg flex items-center justify-center">
                  <Github className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">React Native Core</h3>
                  <a 
                    href="https://github.com/facebook/react-native/pull/34555" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1 text-sm"
                  >
                    <GitPullRequest size={16} />
                    <span>PR #34555</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start gap-3 mb-6">
                <div className="mt-1">
                  <GitPullRequest className="text-green-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Added aria-live alias for accessibilityLiveRegion</h4>
                  <p className="text-muted-foreground mt-2">
                    It unifies aria-live and accessibilityLiveRegion and also maps aria-live='off' to accessibilityLiveRegion='none'.
                  </p>
                </div>
              </div>
              
              <div className="code-section mt-6">
                <div className="line-numbers">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                    <div key={num}>{num}</div>
                  ))}
                </div>
                <div className="code-content">
                  <pre>
                    <code>
                      <span className="text-blue-400">const</span> <span className="text-yellow-400">ariaLiveToAccessibilityLiveRegion</span> = <span className="text-green-400">value</span> {'=>'} {'{'}
                      {"\n"}  <span className="text-blue-400">switch</span>(<span className="text-green-400">value</span>) {'{'}
                      {"\n"}    <span className="text-blue-400">case</span> <span className="text-orange-300">'assertive'</span>:
                      {"\n"}      <span className="text-blue-400">return</span> <span className="text-orange-300">'assertive'</span>;
                      {"\n"}    <span className="text-blue-400">case</span> <span className="text-orange-300">'polite'</span>:
                      {"\n"}      <span className="text-blue-400">return</span> <span className="text-orange-300">'polite'</span>;
                      {"\n"}    <span className="text-blue-400">case</span> <span className="text-orange-300">'off'</span>:
                      {"\n"}      <span className="text-blue-400">return</span> <span className="text-orange-300">'none'</span>;
                      {"\n"}  {'}'}
                      {"\n"}{'}'}
                    </code>
                  </pre>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://github.com/facebook/react-native/pull/34555" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg transition-colors hover:bg-primary/90"
                >
                  <Github className="mr-2" size={18} />
                  View on GitHub
                </a>
                <a 
                  href="https://github.com/mayank-96" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-10 px-4 py-2 border border-border bg-background font-medium rounded-lg transition-colors hover:bg-secondary"
                >
                  <Code className="mr-2" size={18} />
                  More contributions
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-8 shadow-sm text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="text-muted-foreground mb-6">
              I'm always looking for new open source projects to contribute to and collaborate on.
            </p>
            <a 
              href="https://github.com/mayank-96" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-6 bg-primary text-primary-foreground font-medium rounded-lg transition-colors hover:bg-primary/90"
            >
              <Github className="mr-2" size={18} />
              Find me on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
