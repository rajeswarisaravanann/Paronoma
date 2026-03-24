import { motion } from "motion/react";
import { Briefcase, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import JobApplicationModal from "./JobApplicationModal";

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | undefined>(undefined);

  const handleApply = (jobTitle?: string) => {
    setSelectedJob(jobTitle);
    setIsModalOpen(true);
  };

  const jobs = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / Silicon Valley",
      type: "Full-time",
      description: "We're looking for a React expert to help us build next-generation user interfaces for our clients.",
    },
    {
      title: "Backend Engineer (Node.js)",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our core team to design and implement scalable microservices and robust API architectures.",
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / New York",
      type: "Contract",
      description: "Help us create beautiful, intuitive, and user-centered digital experiences for web and mobile.",
    },
    {
      title: "AI/ML Specialist",
      department: "Innovation",
      location: "Remote",
      type: "Full-time",
      description: "Integrate cutting-edge AI models into real-world applications and drive our innovation lab.",
    },
  ];

  return (
    <section id="careers" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Join Our <span className="text-gradient">Team</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            We're always looking for talented individuals who are passionate about 
            building software that makes a difference.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {jobs.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-all group cursor-pointer border border-white/5 hover:border-brand-blue/30"
              onClick={() => handleApply(job.title)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-bold rounded-full uppercase tracking-wider">
                      {job.department}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold font-display group-hover:text-brand-blue transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-gray-400 max-w-2xl">
                    {job.description}
                  </p>
                </div>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApply(job.title);
                  }}
                  className="flex items-center gap-2 bg-white/5 hover:bg-gradient-brand px-6 py-3 rounded-xl font-bold transition-all group-hover:scale-105"
                >
                  Apply Now
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-12 rounded-3xl bg-gradient-brand text-center"
        >
          <h3 className="text-3xl font-bold font-display mb-4">Don't see a fit?</h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            We're always interested in meeting brilliant people. Send us your resume 
            and we'll keep you in mind for future openings.
          </p>
          <button
            onClick={() => handleApply()}
            className="inline-block bg-white text-brand-bg px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Send Open Application
          </button>
        </motion.div>
      </div>

      <JobApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        jobTitle={selectedJob}
      />
    </section>
  );
}
