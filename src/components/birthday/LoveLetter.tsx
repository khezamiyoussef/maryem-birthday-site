import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import flowersImage from "@/assets/flowers-decoration.jpg";

const letterText = [
  "My Dearest Love,",
  "",
<<<<<<< HEAD
  "Haleyan tawa fi almania w ghodwa iid miledek and for some reason kaed nhes li howa iid miledi zeda, khater kol nhar maak is a gift omri matsawart niichou.",
  "",
  "You came into my life and changed everything, kifeh naaadi nhari, kifeh nkhamem, les objectifs mteei, literally kolchay. Bin nhar w lila walit nhes fi rouhi responsable aala zouz aabed w nkhamem aala zouz aabed tellement you mean to me w a life alongside you means to me. Maak, I learned to be myself again, w Youssef li yahki maak kolyoum hedheka howa w bch yokeed dima akeka w somehow it's enough for you, saha leya.",
  "",
  "Taalamt zeda li love isn't just the big romantic gestures – it's in the quiet moments. It's in the way you talk to me exactly how I like. It's in your sleepy 'good morning' texts. It's in ki toghzerli aala jnab wakteli nkolek haja tdhawbek w tetbassem taht hes mess wena nra fi chtar wejhek w naatik hyeti bch nra wejhek lkol waktha.",
  "",
  "Nkamel bl anglais thessou yaaber akther hahah. Thank you for choosing me, every single day. Thank you for your patience when I'm difficult, your understanding when I'm fked up, and your unwavering belief in us.",
  "",
  "On this special day, I want you to know: You are extraordinary. You are loved beyond measure. And I promise to spend the rest of my life trying to make you feel as special as you make me feel.",
  "",
  "Happy Birthday, my beautiful love. Here's to many more adventures, inside jokes, barcha tea, bechir, and stolen moments together.",
  "",
  "Forever yours,",
  "Youssef",
=======
  "As I sit here writing this, my heart is so full it feels like it might burst. Today is your day, but somehow it feels like mine too – because every day with you is a gift I never knew I needed.",
  "",
  "You came into my life and changed everything. You showed me what it means to be truly seen, truly heard, and truly loved. With you, I don't have to pretend or hold back. I can just be... me. And somehow, miraculously, that's enough for you.",
  "",
  "I love the way you make me laugh until my stomach hurts. I love how you always know when I need a hug, even before I do. I love your random 3am thoughts, your terrible jokes, and the way you sing off-key but with so much confidence.",
  "",
  "You've taught me that love isn't just the big romantic gestures – it's in the quiet moments. It's in the way you make my coffee exactly how I like it. It's in your sleepy 'good morning' texts. It's in how you hold my hand when we're just sitting together, doing nothing at all.",
  "",
  "Thank you for choosing me, every single day. Thank you for your patience when I'm difficult, your understanding when I'm lost, and your unwavering belief in us.",
  "",
  "On this special day, I want you to know: You are extraordinary. You are loved beyond measure. And I promise to spend the rest of my life trying to make you feel as special as you make me feel.",
  "",
  "Happy Birthday, my beautiful love. Here's to many more adventures, inside jokes, lazy Sundays, and stolen moments together.",
  "",
  "Forever yours,",
  "Your [Name]",
>>>>>>> 633eb8a6875d926cc5931481e831122269e9cc96
];

const LoveLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-cream relative overflow-hidden">
      {/* Decorative flowers */}
      <div
        className="absolute top-0 left-0 w-64 h-64 opacity-20 bg-contain bg-no-repeat"
        style={{ backgroundImage: `url(${flowersImage})` }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-20 bg-contain bg-no-repeat rotate-180"
        style={{ backgroundImage: `url(${flowersImage})` }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-foreground mb-4">
            A Letter to You
          </h2>
        </motion.div>

        <motion.div
          ref={ref}
          className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-soft border-2 border-primary/20"
        >
          {letterText.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`${
                paragraph === ""
                  ? "mb-4"
                  : index === 0
                  ? "text-2xl font-script text-foreground mb-6"
                  : index === letterText.length - 2
                  ? "text-xl font-script text-right text-foreground mt-8"
                  : index === letterText.length - 1
                  ? "text-lg font-script text-right text-foreground italic"
                  : "text-lg text-foreground/80 leading-relaxed mb-4"
              }`}
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Decorative hearts */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: letterText.length * 0.15 + 0.5, duration: 0.5 }}
            className="flex justify-center mt-8 gap-2"
          >
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-rose-gold text-2xl">
<<<<<<< HEAD
                {"\u2665"}
=======
                ♡
>>>>>>> 633eb8a6875d926cc5931481e831122269e9cc96
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;
