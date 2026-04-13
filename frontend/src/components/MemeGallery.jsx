import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const MASCOT_URL = "https://customer-assets.emergentagent.com/job_sloth-crypto-demo/artifacts/ho2kvm7x_mumu.jpg";

const galleryImages = [
  {
    src: "https://customer-assets.emergentagent.com/job_531ec90e-7e8f-4b7a-89cd-33ea431bc5f8/artifacts/s6yql5yo_photo_2026-04-12_22-48-19%20%282%29.jpg",
    alt: "Little Flash - Chill Mode",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_531ec90e-7e8f-4b7a-89cd-33ea431bc5f8/artifacts/xjxuvvem_photo_2026-04-12_22-48-17.jpg",
    alt: "Little Flash - Happy Vibes",
  },
  {
    src: MASCOT_URL,
    alt: "Little Flash - Superhero",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_sloth-crypto-demo/artifacts/t2mrcyiy_photo_2026-04-12_22-48-12.jpg",
    alt: "Little Flash - Tongue Out",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_sloth-crypto-demo/artifacts/vla54auu_photo_2026-04-12_22-48-11.jpg",
    alt: "Little Flash - Zoo Keeper",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_sloth-crypto-demo/artifacts/j74ntx9i_photo_2026-04-12_22-48-09.jpg",
    alt: "Little Flash - Baby Face",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_sloth-crypto-demo/artifacts/c0tzl50r_photo_2026-04-12_22-47-55.jpg",
    alt: "Little Flash - Cozy Nap",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_sloth-crypto-demo/artifacts/19yhqty8_photo_2026-04-12_22-46-41.jpg",
    alt: "Little Flash - Snack Time",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_sloth-crypto-demo/artifacts/3p4zgtkt_IMG_6849.jpeg",
    alt: "Little Flash - Green Candles",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_sloth-crypto-demo/artifacts/oyvlacao_IMG_6850.jpeg",
    alt: "Little Flash - Chart Hugger",
  },
];

export default function MemeGallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section
      id="memes"
      data-testid="meme-gallery-section"
      className="relative z-10 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Anton'] text-4xl sm:text-5xl tracking-tight uppercase text-white">
            Meme <span className="text-[#FF6B00]">Gallery</span>
          </h2>
          <p className="mt-3 text-[#A1BBAE] text-base sm:text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The finest FLASH content on the blockchain
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setLightbox(img)}
              data-testid={`gallery-image-${i}`}
              className="cursor-pointer group rounded-3xl overflow-hidden border border-[#39FF14]/15 bg-[rgba(10,31,20,0.4)] hover:border-[#39FF14]/40 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-[#A1BBAE] font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
            data-testid="lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                data-testid="lightbox-close"
                className="absolute -top-12 right-0 text-white hover:text-[#39FF14] transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
