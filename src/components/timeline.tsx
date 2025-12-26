"use client";

import ExportedImage from "next-image-export-optimizer";
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export function Timeline() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-foreground mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

              {/* Content */}
              <div
                className={`ml-8 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div
                  className={`bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow ${
                    index % 2 === 0 ? "md:ml-auto" : ""
                  } max-w-md`}
                >
                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <ExportedImage
                        src={exp.logo}
                        alt={exp.company}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="font-bold text-foreground">{exp.company}</h3>
                      <p className="text-sm text-primary">{exp.role}</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground mb-3">
                    {exp.period}
                  </p>

                  <p className={`text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {exp.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                        +{exp.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
