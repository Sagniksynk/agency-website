import { motion } from "framer-motion";
import { Twitter, MessageCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";
import BackgroundEffects from "@/components/effects/BackgroundEffects";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TextReveal from "@/components/ui/TextReveal";
import TiltCard from "@/components/ui/TiltCard";
import GlowCard from "@/components/ui/GlowCard";
import CTA from "@/components/sections/CTA";
import { team, values } from "@/data/team";

const About = () => {
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
              <TextReveal text="About Us" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Get to know the team behind the magic.
            </motion.p>
          </div>
        </section>

        {/* Our Story */}
        <section className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="shimmer-text">Story</span>
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded by a group of passionate developers and designers, we started with a simple mission: 
                to create digital experiences that truly stand out. What began as a small team working on 
                Roblox games has grown into a full-service agency serving clients worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we combine our expertise in game development and web technologies to deliver 
                comprehensive solutions. Whether it's an immersive Roblox experience or a stunning 
                website, we approach every project with the same dedication to quality and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Gradient Shape */}
              <div className="aspect-square rounded-3xl gradient-primary opacity-20 blur-3xl absolute inset-0" />
              <div className="aspect-square rounded-3xl glass relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-accent-pink/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-primary/20">A</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the <span className="shimmer-text">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The talented individuals who make the magic happen.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <TiltCard>
                  <div className="glass rounded-2xl p-8 text-center group">
                    {/* Avatar */}
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-primary flex items-center justify-center text-3xl font-bold text-primary-foreground shadow-lg shadow-primary/25">
                      {member.name.charAt(0)}
                    </div>

                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-6">{member.bio}</p>

                    {/* Social Icons - Appear on hover */}
                    <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.socials.twitter}
                        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href={member.socials.discord}
                        className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                      >
                        <MessageCircle size={18} />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="container mx-auto px-4 md:px-6 mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="shimmer-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard className="h-full text-center" glowColor={index % 2 === 0 ? "purple" : "cyan"}>
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground">
                    {getIcon(value.icon)}
                  </div>
                  <span className="text-sm font-medium text-primary">{value.number}</span>
                  <h3 className="text-lg font-bold mt-1 mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default About;
