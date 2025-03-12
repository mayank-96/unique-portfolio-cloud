
import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experiences = [
  {
    id: "geekyants-se",
    company: "GeekyAnts",
    title: "Software Engineer",
    period: "07/2022 – present",
    location: "Bangalore, India",
    responsibilities: [
      "Collaborated on the development of a performant Universal component library for both React and React Native environment.",
      "Built a Figma plugin which generates a design system from storybook with a single click, reducing designers effort time by 99% and maintaining single source of truth between Figma and the component library.",
      "Led a project by handling setup, fixing bugs, reviewing code, and improving code structure with a small team.",
      "Developed a Plugin System for a framework which generates different targets from a single storybook."
    ]
  },
  {
    id: "geekyants-intern",
    company: "GeekyAnts",
    title: "Software Engineer Intern",
    period: "11/2021 – 07/2022",
    location: "Bangalore, India",
    responsibilities: [
      "Worked on NativeBase core, a widely adopted UI library with over 65 K+ weekly downloads and 18K+ Github stars.",
      "Actively maintained and improved the library by resolving Github issues and enhancing its functionality for exceptional user experience."
    ]
  },
  {
    id: "educompanion",
    company: "EduCompanion",
    title: "Backend Developer Intern",
    period: "07/2021 – 11/2021",
    location: "(Remote) Murcia, Spain",
    responsibilities: [
      "Developed a website for the MOOC platform using MERN stack.",
      "Worked on advanced features such as authentication, course filtering, and Admin Dashboard."
    ]
  },
  {
    id: "destroai",
    company: "Destro.ai",
    title: "Data Science Intern",
    period: "04/2021 – 05/2021",
    location: "(Remote) Mumbai, India",
    responsibilities: [
      "Automated data collection by scheduling scripts.",
      "Created a website using WordPress. Worked on Flutter app by adding some UI elements and a feature for scheduling meetings."
    ]
  },
  {
    id: "amazebasket",
    company: "AmazeBasket",
    title: "AI/ML Intern",
    period: "03/2021 – 05/2021",
    location: "(Remote) Mumbai, India",
    responsibilities: [
      "Developed retrieval-based Chatbot API using Bi-LSTM model to classify which category the user's message belongs to and then give a random response from the list of responses.",
      "Added extra functionality by creating and integrating Sentiment Classification API to calculate user satisfaction score.",
      "Built Ingredient Recommendation API using KNN by collecting recipe data through web scraping."
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="py-24 bg-secondary/50 relative">
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
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            My journey as a software engineer, working with innovative teams and technologies.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs 
            defaultValue={experiences[0].id} 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="mb-8 overflow-x-auto pb-3">
              <TabsList className="bg-transparent space-x-2 sm:space-x-4 w-max">
                {experiences.map((exp) => (
                  <TabsTrigger 
                    key={exp.id} 
                    value={exp.id}
                    className="px-4 py-3 data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary"
                  >
                    {exp.company}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {experiences.map((exp) => (
              <TabsContent key={exp.id} value={exp.id} className="mt-0">
                <motion.div 
                  className="bg-card rounded-lg p-6 border border-border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar size={18} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Briefcase size={18} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, index) => (
                          <motion.li 
                            key={index}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <span className="text-primary mr-2 mt-1">•</span>
                            <span>{responsibility}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Experience;
