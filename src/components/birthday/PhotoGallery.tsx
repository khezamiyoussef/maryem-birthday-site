import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

import photoHoodie from "@/pictures/1c82ae11-c14a-4b3c-adbb-e3d8a588959c (1).jpeg?url";
import photoLaugh from "@/pictures/9ce3d5f0-6086-4f97-b29a-9468cda29433.jpeg?url";
import photoBeach from "@/pictures/4a25c1ea-a68b-4e51-a041-2d4ea4c2406f.jpeg?url";
import photoBreakfast from "@/pictures/536459e9-b047-4a9a-b098-2c44b1427ef8.jpeg?url";
import photoMovieNight from "@/pictures/554e6881-28d1-405b-abff-ae7bc36d10d3.jpeg?url";
import photoKitchenDance from "@/pictures/6041dc3a-8e9e-4d1b-be0e-8defa3d6ac98.jpeg?url";

type PhotoMemory = {
  caption: string;
  rotation: number;
  src?: string;
};

const photos: PhotoMemory[] = [
  { caption: "Anytime you`re in my car", rotation: -3, src: photoHoodie },
  { caption: "dhahartli manesthak nkoul chay", rotation: 2, src: photoLaugh },
  { caption: "How can a person be this beautiful when this tired?", rotation: -2, src: photoBeach },
  { caption: "The lips...", rotation: 4, src: photoBreakfast },
  { caption: "A proud gf is all I want you to be ya rouhi", rotation: -4, src: photoMovieNight },
  { caption: "Enti kaada toghzrelna dancing in the kitchen one day", rotation: 3, src: photoKitchenDance },
  { caption: "Can't wait for the next adventure with you", rotation: -1 },
  { caption: "Can't wait to wake up to your smile again", rotation: 2 },
  { caption: "Can't wait for our next sunset together", rotation: -3 },
  { caption: "Can't wait bch nochreb kahwti kol sbeh ya rouhi", rotation: 1 },
];

const PhotoCard = ({ photo, index }: { photo: PhotoMemory; index: number }) => {
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
      {/* Photo / Placeholder */}
      <div className="aspect-square rounded-sm relative overflow-hidden bg-slate-100">
        {photo.src ? (
          <>
            <motion.img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-blush to-lavender text-white text-center px-4">
            <Heart className="w-12 h-12 text-white fill-white/30" />
            <span className="text-lg font-script leading-tight">{photo.caption}</span>
          </div>
        )}
        <div className="absolute bottom-2 right-2 text-xs text-white/80 font-script">
          {photo.src ? `Photo ${index + 1}` : "Can't Wait"}
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
          Six of our favorite shots are already here, and the others are saving space for the moments we still dream about.
        </motion.p>
      </div>
    </section>
  );
};

export default PhotoGallery;
