import { motion } from "motion/react";
import { Code, Smartphone, Cloud, Brain, Database, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive, and high-performance web applications built with modern technologies.",
      icon: <Code className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile solutions for iOS and Android that users love.",
      icon: <Smartphone className="w-8 h-8 text-brand-purple" />,
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to power your business growth.",
      icon: <Cloud className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: "AI Integration",
      description: "Leverage the power of artificial intelligence to automate processes and gain insights.",
      icon: <Brain className="w-8 h-8 text-brand-purple" />,
    },
    {
      title: "Database Design",
      description: "Robust and optimized database architectures for seamless data management.",
      icon: <Database className="w-8 h-8 text-brand-blue" />,
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security audits and implementations to protect your digital assets.",
      icon: <Shield className="w-8 h-8 text-brand-purple" />,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We offer a wide range of software development services to help your business 
            thrive in the digital age.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
