import { motion } from "framer-motion";
import { Gamepad2, Globe, Code, Palette, Rocket, Cog } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { Link } from "react-router-dom";

const ServicesPreview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What We <span className="shimmer-text">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From immersive Roblox games to stunning web experiences, we deliver excellence across digital platforms.
          </p>
          <div className="mt-4 w-24 h-1 gradient-primary mx-auto rounded-full" />
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {/* Roblox Development - Large Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
            <GlowCard className="h-full p-8" glowColor="purple">
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/25">
                  <Gamepad2 className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Roblox Development</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Full-service Roblox game development from concept to launch. We build engaging 
                  experiences that players love.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Advanced Lua Scripting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Custom Game Systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    UI/UX Design
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Performance Optimization
                  </li>
                </ul>
                <Link to="/services">
                  <MagneticButton variant="outline" size="sm">
                    Learn More
                  </MagneticButton>
                </Link>
              </div>
            </GlowCard>
          </motion.div>

          {/* Small Cards - Right Column */}
          <motion.div variants={itemVariants}>
            <GlowCard className="h-full" glowColor="cyan">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center shrink-0">
                  <Code className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">50+ Projects</h4>
                  <p className="text-sm text-muted-foreground">Successfully delivered</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlowCard className="h-full" glowColor="pink">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-pink to-primary flex items-center justify-center shrink-0">
                  <Palette className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Premium Quality</h4>
                  <p className="text-sm text-muted-foreground">Award-winning designs</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Small Cards - Bottom Left */}
          <motion.div variants={itemVariants}>
            <GlowCard className="h-full" glowColor="mixed">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-mixed flex items-center justify-center shrink-0">
                  <Rocket className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Fast Delivery</h4>
                  <p className="text-sm text-muted-foreground">On-time, every time</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>

          {/* Web Development - Large Card */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2">
            <GlowCard className="h-full p-8" glowColor="cyan">
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 shadow-lg shadow-accent/25">
                  <Globe className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Modern, responsive websites that look stunning and perform flawlessly. 
                  Built with the latest technologies.
                </p>
                <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    React & Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Framer Motion
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Full-Stack Solutions
                  </li>
                </ul>
                <Link to="/services">
                  <MagneticButton variant="outline" size="sm">
                    Learn More
                  </MagneticButton>
                </Link>
              </div>
            </GlowCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlowCard className="h-full" glowColor="purple">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <Cog className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">24/7 Support</h4>
                  <p className="text-sm text-muted-foreground">Always here to help</p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
