import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden glass p-2">
              <img
                src="https://picsum.photos/seed/future/1200/800"
                alt="Our Vision"
                className="rounded-2xl w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-purple/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold">
                About <span className="text-gradient">Paronoma</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Paronoma is a cutting-edge software development company specializing in 
                web development, mobile apps, cloud solutions, and AI integration. 
                We are dedicated to empowering businesses through innovation, 
                technology, and design.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-brand-blue" />
                  Our Mission
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  To empower businesses with innovative, reliable, and future-ready 
                  IT solutions. We strive to bridge technology and creativity to 
                  deliver exceptional digital experiences.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold flex items-center gap-2">
                  <span className="w-8 h-[2px] bg-brand-purple" />
                  Our Vision
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  To become a global leader in innovative IT solutions — empowering 
                  businesses to thrive in the digital era through technology, 
                  creativity, and excellence. We envision a world where every 
                  organization can harness the power of digital transformation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-3xl font-bold text-brand-blue mb-1">10+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-brand-purple mb-1">200+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Projects Done</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
