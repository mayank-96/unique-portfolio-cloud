
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

// Function to calculate experience duration
const calculateDuration = (startDate: string, endDate: string = "Present") => {
  const parseDate = (dateStr: string) => {
    if (dateStr === "Present") {
      return new Date();
    }
    
    const [month, year] = dateStr.split("/");
    return new Date(parseInt(year), parseInt(month) - 1);
  };

  const start = parseDate(startDate);
  const end = parseDate(endDate);
  
  // Calculate difference in months
  const diffMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  
  if (years === 0) {
    return `${months} month${months !== 1 ? 's' : ''}`;
  } else if (months === 0) {
    return `${years} year${years !== 1 ? 's' : ''}`;
  } else {
    return `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`;
  }
};

const experiences = [
  {
    id: "velt",
    company: "Velt [YC W22]",
    title: "Founding UI Engineer",
    period: "12/2023 – Present",
    startDate: "12/2023",
    endDate: "Present",
    location: "Remote (India)",
    isInternship: false,
    responsibilities: [
      <>Solely developed and launched a collaborative <a href="https://drive.usesuperflow.com/upload" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">File Drive</a> (Lottie, PDF, image, video) with custom media players, driving a 10% revenue increase.</>,
      <>Refactored legacy onboarding code for <a href="https://velt.dev/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Superflow</a>, reducing bugs by 99% through improved logic.</>,
      <>Introduced a "wireframes" architecture, providing users with fully <a href="https://velt.dev/components" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Customizable Components</a> within a framework-agnostic collaboration SDK, and driving a 6x revenue growth.</>,
      <>Developed a comprehensive <a href="https://velt.dev/theming" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Theming system</a>, reducing user implementation time by 80% through customizable colors, spacing, and fonts.</>,
      "Enhanced SDK accessibility and globalization via ARIA, test IDs, and internalization.",
      "Implemented in-product Video Trimming Editor."
    ]
  },
  {
    id: "geekyants-se3",
    company: "GeekyAnts",
    title: "Software Engineer - III",
    period: "07/2023 – 12/2023",
    startDate: "07/2023",
    endDate: "12/2023",
    location: "Bangalore, India",
    isInternship: false,
    responsibilities: [
      <>Developed an internal Figma plugin that auto-generates a design system from Storybook, supporting complex features like auto layout, reducing designer effort by 99%. The resulting auto-generated Figma file achieved 114 likes and 6.2k users.</>,
      <>Developed the <a href="https://www.figma.com/community/plugin/1304000704678516266/gluestack" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GlueStack Figma plugin</a>, enabling batch updates for color palette alpha tokens and font families, streamlining design consistency and workflow, and achieving 28 likes and 1.3k users.</>
    ]
  },
  {
    id: "geekyants-se1",
    company: "GeekyAnts",
    title: "Software Engineer - I",
    period: "07/2022 – 07/2023",
    startDate: "07/2022",
    endDate: "07/2023",
    location: "Bangalore, India",
    isInternship: false,
    responsibilities: [
      <>Co-created a performant Universal component library <a href="https://gluestack.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GlueStack</a> for React and React Native environments, achieving 3.5k GitHub stars and 14k monthly npm users.</>,
      "Led a project by handling setup, fixing bugs, reviewing code, and improving code structure with a small team.",
      "Developed a Plugin System for a framework which generates different targets from a single storybook."
    ]
  },
  {
    id: "geekyants-intern",
    company: "GeekyAnts",
    title: "Software Engineer Intern",
    period: "11/2021 – 07/2022",
    startDate: "11/2021",
    endDate: "07/2022",
    location: "Banglore, India",
    isInternship: true,
    responsibilities: [
      <>Worked on <a href="https://nativebase.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">NativeBase</a> core, a widely adopted UI library with over 65 K+ weekly downloads and 18K+ Github stars.</>,
      "Actively maintained and improved the library by resolving Github issues and enhancing its functionality for exceptional user experience."
    ]
  },
  {
    id: "educompanion",
    company: "EduCompanion",
    title: "Backend Developer Intern",
    period: "07/2021 – 11/2021",
    startDate: "07/2021",
    endDate: "11/2021",
    location: "(Remote) Murcia, Spain",
    isInternship: true,
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
    startDate: "04/2021",
    endDate: "05/2021",
    location: "(Remote) Mumbai, India",
    isInternship: true,
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
    startDate: "03/2021",
    endDate: "05/2021",
    location: "(Remote) Mumbai, India",
    isInternship: true,
    responsibilities: [
      <>Developed retrieval-based <a href="https://github.com/mayank-96/chatbot-flask-api" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Chatbot API</a> using Bi-LSTM model to classify which category the user's message belongs to and then give a random response from the list of responses.</>,
      <>Added extra functionality by creating and integrating <a href="https://github.com/mayank-96/sentiment-analysis-api" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Sentiment Classification API</a> to calculate user satisfaction score.</>,
      <>Built <a href="https://github.com/mayank-96/recipe-recommendation-api" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ingredient Recommendation API</a> using KNN by collecting recipe data through web scraping.</>
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);
  const [includeInternships, setIncludeInternships] = useState(true);

  // Calculate total experience
  const totalExperience = useMemo(() => {
    // Filter experiences based on internship toggle
    const filteredExperiences = includeInternships 
      ? experiences 
      : experiences.filter(exp => !exp.isInternship);
    
    // Find earliest start date
    const earliestStart = filteredExperiences.reduce((earliest, exp) => {
      const currentStartDate = exp.startDate.split('/');
      const currentStartMonth = parseInt(currentStartDate[0]);
      const currentStartYear = parseInt(currentStartDate[1]);
      
      if (!earliest) return { month: currentStartMonth, year: currentStartYear };
      
      if (currentStartYear < earliest.year || 
          (currentStartYear === earliest.year && currentStartMonth < earliest.month)) {
        return { month: currentStartMonth, year: currentStartYear };
      }
      
      return earliest;
    }, null as { month: number; year: number } | null);
    
    if (!earliestStart) return "N/A";
    
    const startDateString = `${earliestStart.month}/${earliestStart.year}`;
    return calculateDuration(startDateString);
  }, [includeInternships]);

  // Calculate individual experience durations
  const experiencesWithDuration = useMemo(() => {
    return experiences.map(exp => ({
      ...exp,
      duration: calculateDuration(exp.startDate, exp.endDate)
    }));
  }, []);

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
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
              <Clock size={18} className="mr-2" />
              <span>Total Experience: {totalExperience}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch 
                id="include-internships" 
                checked={includeInternships} 
                onCheckedChange={setIncludeInternships}
              />
              <label 
                htmlFor="include-internships" 
                className="text-sm font-medium cursor-pointer"
              >
                Include Internships
              </label>
            </div>
          </div>
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
                {experiencesWithDuration.map((exp) => (
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
            
            {experiencesWithDuration.map((exp) => (
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
                        <Clock size={18} className="mr-2" />
                        <span>{exp.duration}</span>
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
