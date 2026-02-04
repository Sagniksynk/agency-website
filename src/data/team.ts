export const team = [
  {
    id: 1,
    name: "Jordan Rivera",
    role: "CEO & Client Relations",
    bio: "Passionate about building meaningful partnerships and ensuring every project exceeds expectations.",
    avatar: null,
    socials: {
      twitter: "#",
      discord: "#",
    },
  },
  {
    id: 2,
    name: "Taylor Kim",
    role: "Lead Roblox Developer",
    bio: "5+ years of Roblox development experience with expertise in complex game systems and optimization.",
    avatar: null,
    socials: {
      twitter: "#",
      discord: "#",
    },
  },
  {
    id: 3,
    name: "Casey Morgan",
    role: "Lead Web Developer",
    bio: "Full-stack developer specializing in modern React applications and stunning user experiences.",
    avatar: null,
    socials: {
      twitter: "#",
      discord: "#",
    },
  },
];

export const values = [
  {
    number: "01",
    title: "Quality First",
    description: "We never compromise on quality. Every line of code and pixel is crafted with care.",
    icon: "Star",
  },
  {
    number: "02",
    title: "Clear Communication",
    description: "Transparent updates and open dialogue throughout every project phase.",
    icon: "MessageSquare",
  },
  {
    number: "03",
    title: "On-Time Delivery",
    description: "We respect deadlines and deliver on our promises, every single time.",
    icon: "Clock",
  },
  {
    number: "04",
    title: "Client Satisfaction",
    description: "Your success is our success. We go above and beyond to exceed expectations.",
    icon: "Heart",
  },
];

export type TeamMember = (typeof team)[number];
export type Value = (typeof values)[number];
