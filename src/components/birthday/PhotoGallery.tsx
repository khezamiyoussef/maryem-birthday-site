import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

const photos = [
  { caption: "The night you stole my hoodie", rotation: -3 },
  { caption: "Your laugh here kills me every time", rotation: 2 },
  { caption: "Beach day with my favorite person", rotation: -2 },
  { caption: "When you made me breakfast", rotation: 4 },
  { caption: "Our cozy movie night", rotation: -4 },
  { caption: "You dancing in the kitchen", rotation: 3 },
  { caption: "That sunset we watched together", rotation: -1 },
  { caption: "Your sleepy morning smile", rotation: 2 },
  { caption: "Adventure time with you", rotation: -3 },
  { caption: "Just another perfect day", rotation: 1 },
];

const PhotoCard = ({ photo, index }: { photo: typeof photos[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-white p-3 shadow-soft hover:shadow-glow-romantic transition-shadow duration-300 cursor-pointer"
      style={{ rotate: photo.rotation }}
    >
      {/* Placeholder photo area */}
      <div className="aspect-square bg-gradient-to-br from-blush to-lavender rounded-sm relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Heart className="w-12 h-12 text-white/50" />
        </div>
        <div className="absolute bottom-2 right-2 text-xs text-white/60 font-script">
          Photo {index + 1}
        </div>
      </div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0.7 }}
        className="mt-3 text-sm text-center font-script text-foreground"
      >
        {photo.caption}
      </motion.p>

      {/* Corner heart decoration */}
      <Heart className="absolute -top-2 -right-2 w-6 h-6 text-rose-gold fill-rose-gold" />
    </motion.div>
  );
};

const PhotoGallery = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-lavender to-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
            Our Beautiful Memories
          </h2>
          <p className="text-xl text-foreground/70 font-script">
            Every picture tells a story of us
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {photos.map((photo, index) => (
            <PhotoCard key={index} photo={photo} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 text-lg text-muted-foreground font-script"
        >
          Replace these placeholders with our actual photos to make this gallery truly ours ♡
        </motion.p>
      </div>
    </section>
  );
};

export default PhotoGallery;
