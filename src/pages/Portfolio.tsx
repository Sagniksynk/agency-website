import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BackgroundEffects from "@/components/effects/BackgroundEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TextReveal from "@/components/ui/TextReveal";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";
import CTA from "@/components/sections/CTA";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const filters = ["All", "Roblox", "Web"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <TextReveal text="Our Work" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Explore our portfolio of successful projects across gaming and web.
            </motion.p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="container mx-auto px-4 md:px-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-2"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeFilter === filter
                    ? "gradient-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "glass text-muted-foreground hover:text-foreground"
                )}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <TiltCard>
                    <div className="relative group overflow-hidden rounded-2xl glass">
                      {/* Gradient Background */}
                      <div
                        className={cn(
                          "aspect-[4/3] bg-gradient-to-br",
                          project.gradient
                        )}
                      />

                      {/* Overlay - Slides up from bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          {/* Category Badge */}
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium mb-3">
                            <span
                              className={cn(
                                "w-2 h-2 rounded-full",
                                project.category === "Roblox"
                                  ? "bg-primary"
                                  : "bg-accent"
                              )}
                            />
                            {project.category}
                          </div>

                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            {project.description}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                            <MagneticButton variant="outline" size="sm">
                              View Details
                              <ArrowRight className="w-4 h-4" />
                            </MagneticButton>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
