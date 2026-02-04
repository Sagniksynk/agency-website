import { motion } from "framer-motion";
import { Briefcase, Users, Clock, Award } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  {
    icon: Briefcase,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    icon: Users,
    value: 30,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: Clock,
    value: 2,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Satisfaction Rate",
  },
];

const Stats = () => {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6 shadow-lg shadow-primary/25 animate-glow">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
