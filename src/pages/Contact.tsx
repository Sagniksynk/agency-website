import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock, Send, CheckCircle } from "lucide-react";
import BackgroundEffects from "@/components/effects/BackgroundEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TextReveal from "@/components/ui/TextReveal";
import GlowCard from "@/components/ui/GlowCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { GlowInput, GlowTextarea, GlowSelect } from "@/components/ui/GlowInput";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <TextReveal text="Get in Touch" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Ready to start your project? We'd love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-3"
            >
              <GlowCard glowColor="purple">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <MagneticButton
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send Another Message
                    </MagneticButton>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <GlowInput
                        label="Your Name"
                        placeholder="John Doe"
                        required
                      />
                      <GlowInput
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <GlowSelect label="Service Interested In" required>
                        <option value="">Select a service</option>
                        <option value="roblox-scripting">Roblox - Game Scripting</option>
                        <option value="roblox-full">Roblox - Full Game Dev</option>
                        <option value="roblox-ui">Roblox - UI/UX Design</option>
                        <option value="web-landing">Web - Landing Page</option>
                        <option value="web-portfolio">Web - Portfolio</option>
                        <option value="web-business">Web - Business Website</option>
                        <option value="web-app">Web - Web Application</option>
                        <option value="other">Other</option>
                      </GlowSelect>
                      <GlowSelect label="Budget Range" required>
                        <option value="">Select budget</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                        <option value="discuss">Let's Discuss</option>
                      </GlowSelect>
                    </div>

                    <GlowTextarea
                      label="Project Details"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      required
                    />

                    <MagneticButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </MagneticButton>
                  </form>
                )}
              </GlowCard>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Email Card */}
              <GlowCard glowColor="purple" className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:animate-glow">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      For inquiries and project discussions
                    </p>
                    <a
                      href="mailto:contact@agency.com"
                      className="text-primary hover:underline"
                    >
                      contact@agency.com
                    </a>
                  </div>
                </div>
              </GlowCard>

              {/* Discord Card */}
              <GlowCard glowColor="cyan" className="group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shrink-0 group-hover:animate-glow">
                    <MessageCircle className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Join our Discord</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      For quick questions and community updates
                    </p>
                    <a
                      href="#"
                      className="text-accent hover:underline"
                    >
                      discord.gg/agency
                    </a>
                  </div>
                </div>
              </GlowCard>

              {/* Response Time Note */}
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">Quick Response</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  We typically respond within 24 hours during business days. 
                  For urgent matters, reach out on Discord for faster communication.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
