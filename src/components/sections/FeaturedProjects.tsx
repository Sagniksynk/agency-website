import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";
import { projects } from "@/data/projects";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const FeaturedProjects = () => {
  const featuredProjects = projects.slice(0, 4);

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
            Our Recent <span className="shimmer-text">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore some of our latest projects and see what we can create together.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <TiltCard>
                <div className="relative group overflow-hidden rounded-2xl glass">
                  {/* Gradient Background */}
                  <div className={cn(
                    "aspect-[16/10] bg-gradient-to-br",
                    project.gradient
                  )} />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {/* Category Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium mb-3">
                        <span className={cn(
                          "w-2 h-2 rounded-full",
                          project.category === "Roblox" ? "bg-primary" : "bg-accent"
                        )} />
                        {project.category}
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <MagneticButton variant="outline" size="sm">
                        View Project
                        <ArrowRight className="w-4 h-4" />
                      </MagneticButton>
                    </div>
                  </div>

                  {/* Always visible info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium mb-2">
                      <span className={cn(
                        "w-2 h-2 rounded-full",
                        project.category === "Roblox" ? "bg-primary" : "bg-accent"
                      )} />
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/portfolio">
            <MagneticButton variant="primary" size="lg">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
