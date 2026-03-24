import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-brand-blue"
        >
          <Sparkles className="w-4 h-4" />
          <span>Innovating Tomorrow's Software Today</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8"
        >
          We Build <span className="text-gradient">Digital</span> <br />
          <span className="text-gradient">Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12"
        >
          Paronoma is a cutting-edge software development company specializing in 
          web development, mobile apps, cloud solutions, and AI integration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto bg-gradient-brand px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto glass px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-colors"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="hidden lg:block absolute top-1/4 left-10 animate-bounce">
        <div className="glass p-4 rounded-2xl shadow-2xl">
          <div className="w-12 h-12 bg-brand-blue/20 rounded-lg flex items-center justify-center mb-2">
            <div className="w-6 h-6 bg-brand-blue rounded-sm" />
          </div>
          <div className="w-20 h-2 bg-white/10 rounded-full mb-1" />
          <div className="w-12 h-2 bg-white/10 rounded-full" />
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-1/4 right-10 animate-bounce delay-1000">
        <div className="glass p-4 rounded-2xl shadow-2xl">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-brand-purple rounded-full" />
            <div className="space-y-1">
              <div className="w-16 h-2 bg-white/20 rounded-full" />
              <div className="w-10 h-2 bg-white/10 rounded-full" />
            </div>
          </div>
          <div className="w-full h-20 bg-white/5 rounded-lg" />
        </div>
      </div>
    </section>
  );
}
