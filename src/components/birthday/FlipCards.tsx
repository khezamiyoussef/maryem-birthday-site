import { motion } from "framer-motion";
import { useState } from "react";
import { Coffee, Moon, Music, Smile, Heart, Star, Sparkles, Sun } from "lucide-react";

const reasons = [
  {
    icon: Smile,
    reason: "The way you crinkle your nose when you laugh",
  },
  {
    icon: Coffee,
    reason: "How you always steal the blanket but I secretly love it",
  },
  {
    icon: Music,
    reason: "Your voice notes that I listen to 100 times",
  },
  {
    icon: Moon,
    reason: "Late night conversations that turn into early mornings",
  },
  {
    icon: Heart,
    reason: "How you make every ordinary moment extraordinary",
  },
  {
    icon: Star,
    reason: "The way you believe in me even when I don't",
  },
  {
    icon: Sparkles,
    reason: "Your spontaneous dance moves in the kitchen",
  },
  {
    icon: Sun,
    reason: "How you're the first thing I want to see every morning",
  },
];

const FlipCard = ({ item, index }: { item: typeof reasons[0]; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.div
        className="relative w-full h-64 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
        whileHover={{ scale: 1.05 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blush to-lavender rounded-2xl shadow-soft flex items-center justify-center p-6 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-center">
            <Icon className="w-16 h-16 mx-auto mb-4 text-foreground" />
            <p className="text-lg font-semibold text-foreground">Tap to reveal</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-gradient-gold rounded-2xl shadow-glow-gold flex items-center justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-center text-lg font-script text-foreground leading-relaxed">
            {item.reason}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

const FlipCards = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-cream to-blush">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
            Why I Love You
          </h2>
          <p className="text-xl text-foreground/70 font-script">
            There are infinite reasons, but here are just a few...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <FlipCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlipCards;
