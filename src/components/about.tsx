"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/personal";

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            About me
          </h2>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line mb-8">
              {personal.about}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {personal.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-muted rounded-xl"
                >
                  <div className="text-2xl font-bold text-primary mb-1">
                    {highlight.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {highlight.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
