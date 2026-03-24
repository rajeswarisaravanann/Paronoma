import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Application",
      image: "https://picsum.photos/seed/ecommerce/800/600",
      description: "A full-featured e-commerce platform with real-time inventory and AI-driven recommendations.",
      tags: ["React", "Node.js", "PostgreSQL", "AI"],
    },
    {
      title: "Health & Fitness App",
      category: "Mobile App",
      image: "https://picsum.photos/seed/fitness/800/600",
      description: "A cross-platform mobile app for tracking health metrics and personalized workout plans.",
      tags: ["React Native", "Firebase", "HealthKit"],
    },
    {
      title: "Cloud Analytics Dashboard",
      category: "Enterprise Solution",
      image: "https://picsum.photos/seed/analytics/800/600",
      description: "Real-time data visualization and analytics dashboard for large-scale cloud infrastructures.",
      tags: ["D3.js", "AWS", "Python", "Docker"],
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Take a look at some of our recent work and see how we help businesses 
            achieve their digital goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-64 overflow-hidden rounded-3xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <ExternalLink className="w-6 h-6" />
                  </button>
                  <button className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <Github className="w-6 h-6" />
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-brand-blue text-sm font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 glass rounded-md text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-display">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
