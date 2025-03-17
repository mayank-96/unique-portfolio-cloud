
import { ExternalLink, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "NativeBase X Formik",
    url: "https://nativebase.hashnode.dev/nativebase-x-formik",
    publisher: "NativeBase Hashnode",
    description: "A comprehensive guide on integrating NativeBase with Formik for form management in React Native applications.",
    banner: "https://cdn.hashnode.com/res/hashnode/image/upload/v1658214752263/ByLFYVE0c.png"
  },
  {
    title: "How Automated Web Scraping can Ease Your Pain",
    url: "https://medium.com/python-in-plain-english/how-automated-web-scraping-can-ease-your-pain-8839f436bb13",
    publisher: "Medium - Python in Plain English",
    description: "An in-depth tutorial on implementing automated web scraping solutions using Python.",
    banner: "https://miro.medium.com/max/1400/1*ubYV23kkMRr-xXH73x7Qgg.jpeg"
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.p 
              className="font-mono text-sm uppercase tracking-wider text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Knowledge Sharing
            </motion.p>
            <motion.h2 
              className="text-6xl md:text-7xl font-anton uppercase tracking-tight mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Blogs
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I share my technical knowledge and experiences through articles to help others in the developer community.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {blogs.map((blog, index) => (
              <motion.div 
                key={blog.title}
                className={`lg:col-span-6 group relative ${index === 0 ? "lg:col-start-1" : "lg:col-start-7"}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative p-px overflow-hidden rounded-lg bg-gradient-to-br from-primary/30 via-primary/20 to-transparent h-full">
                  <div className="bg-background backdrop-blur-sm rounded-lg h-full flex flex-col">
                    <div className="w-full h-48 overflow-hidden relative">
                      <img 
                        src={blog.banner} 
                        alt={blog.title} 
                        className="w-full h-full object-cover rounded-t-lg transition-transform group-hover:scale-105 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-60"></div>
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="mb-6 flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                          <BookOpen size={24} className="text-primary" />
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-primary font-mono mb-0">
                            {blog.publisher}
                          </p>
                        </div>
                      </div>
                      
                      <div className="h-[1px] w-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent mb-6"></div>
                      
                      <p className="text-muted-foreground mb-6 flex-grow">
                        {blog.description}
                      </p>
                      
                      <a 
                        href={blog.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-mono text-sm uppercase tracking-wide text-primary hover:underline mt-auto"
                      >
                        Read Article
                        <ExternalLink size={14} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
