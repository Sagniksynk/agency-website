export const testimonials = [
  {
    id: 1,
    quote: "Working with this team was incredible. They delivered beyond our expectations and our game's player count has doubled since launch.",
    author: "Alex Chen",
    role: "Indie Game Developer",
    avatar: null,
  },
  {
    id: 2,
    quote: "The website they built for us is stunning. We've received countless compliments and our conversion rate has improved significantly.",
    author: "Sarah Mitchell",
    role: "Startup Founder",
    avatar: null,
  },
  {
    id: 3,
    quote: "Professional, responsive, and incredibly talented. They understood our vision and brought it to life perfectly.",
    author: "Marcus Johnson",
    role: "Content Creator",
    avatar: null,
  },
];

export type Testimonial = (typeof testimonials)[number];
