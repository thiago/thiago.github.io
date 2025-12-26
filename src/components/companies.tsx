"use client";

import ExportedImage from "next-image-export-optimizer";
import { motion } from "framer-motion";
import { companies } from "@/data/experience";

export function Companies() {
  // Remove duplicates (Guiabolso since it merged with PicPay)
  const uniqueCompanies = companies.filter(
    (company, index, self) =>
      index === self.findIndex((c) => c.name === company.name)
  );

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-medium text-muted-foreground text-center mb-8 uppercase tracking-wider">
            Companies I&apos;ve worked with
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {uniqueCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                title={company.name}
              >
                <ExportedImage
                  src={company.logo}
                  alt={company.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
