import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2, Upload, FileText } from "lucide-react";
import React, { useState, useRef } from "react";

interface JobApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
}

export default function JobApplicationModal({ isOpen, onClose, jobTitle }: JobApplicationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [resume, setResume] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleClose = () => {
    setResume(null);
    setIsSubmitted(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resume) {
      alert("Please upload your resume first.");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-brand-bg/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-display font-bold">
                  {isSubmitted ? "Application Sent" : "Apply for Role"}
                </h2>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {isSubmitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="flex justify-center">
                    <div className="w-20 h-20 bg-brand-blue/20 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-brand-blue" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xl font-bold">Thank you for applying!</p>
                    <p className="text-gray-400">
                      We've received your application for <span className="text-white">{jobTitle || "Open Application"}</span>. 
                      Our team will review it and get back to you soon.
                    </p>
                  </div>
                  <button
                    onClick={handleClose}
                    className="bg-gradient-brand px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {jobTitle && (
                    <div className="p-4 bg-brand-blue/10 rounded-2xl border border-brand-blue/20">
                      <p className="text-sm text-brand-blue font-bold uppercase tracking-wider mb-1">Position</p>
                      <p className="text-lg font-bold">{jobTitle}</p>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                        <input
                          required
                          type="text"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                        <input
                          required
                          type="email"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                        <input
                          required
                          type="tel"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400 ml-1">Portfolio / LinkedIn URL</label>
                        <input
                          required
                          type="url"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors"
                          placeholder="https://..."
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Resume / CV</label>
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className={`w-full flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-dashed transition-all ${
                          resume 
                            ? "border-brand-blue bg-brand-blue/5 text-white" 
                            : "border-white/10 bg-white/5 text-gray-400 hover:border-white/20 hover:bg-white/10"
                        }`}
                      >
                        {resume ? (
                          <>
                            <FileText className="w-5 h-5 text-brand-blue" />
                            <span className="truncate max-w-[200px]">{resume.name}</span>
                            <span className="text-xs text-brand-blue font-bold ml-auto">Change</span>
                          </>
                        ) : (
                          <>
                            <Upload className="w-5 h-5" />
                            <span>Upload Resume (PDF, DOCX)</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400 ml-1">Why Paronoma?</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-blue transition-colors resize-none"
                        placeholder="Tell us a bit about yourself and your passion for software innovation..."
                      />
                    </div>
                  </div>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-gradient-brand py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Application
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
