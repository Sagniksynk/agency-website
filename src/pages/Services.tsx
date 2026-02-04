import { motion } from "framer-motion";
import { Gamepad2, Globe, ArrowRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import BackgroundEffects from "@/components/effects/BackgroundEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TextReveal from "@/components/ui/TextReveal";
import GlowCard from "@/components/ui/GlowCard";
import MagneticButton from "@/components/ui/MagneticButton";
import CTA from "@/components/sections/CTA";
import { services, processSteps } from "@/data/services";
import { Link } from "react-router-dom";

const Services = () => {
  const getIcon = (iconName: string) => {
    const Icon = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <TextReveal text="Our Services" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Comprehensive digital solutions tailored to bring your vision to life.
            </motion.p>
          </div>
        </section>

        {/* Roblox Development */}
        <section id="roblox" className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shadow-lg shadow-primary/25">
              <Gamepad2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Roblox Development</h2>
              <p className="text-muted-foreground">Build engaging games that players love</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.roblox.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full" glowColor="purple">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4 text-primary-foreground">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link to="/contact">
              <MagneticButton variant="primary">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </Link>
          </motion.div>
        </section>

        {/* Web Development */}
        <section id="web" className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center shadow-lg shadow-accent/25">
              <Globe className="w-7 h-7 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Web Development</h2>
              <p className="text-muted-foreground">Modern websites that convert</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.web.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full" glowColor="cyan">
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-4 text-accent-foreground">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link to="/contact">
              <MagneticButton variant="secondary">
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </Link>
          </motion.div>
        </section>

        {/* Our Process */}
        <section className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="shimmer-text">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to deliver exceptional results.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-accent-pink transform -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative text-center"
                >
                  {/* Step Number */}
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg shadow-primary/25">
                    {step.step}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Services;
