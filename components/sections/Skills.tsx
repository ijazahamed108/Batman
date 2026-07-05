"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { skills } from "@/data/content";
import { BatmanLogo } from "@/components/ui/BatmanLogo";
import { fadeUp, fadeUpDelayed } from "@/lib/motion";

const skillLogos: Record<string, string> = {
  TypeScript: "/skillLogos/typescript.svg",
  JavaScript: "/skillLogos/javascript.svg",
  Python: "/skillLogos/python.svg",
  Java: "/skillLogos/java.svg",
  SQL: "/skillLogos/sql.svg",
  HTML5: "/skillLogos/html5.svg",
  CSS3: "/skillLogos/css3.svg",
  React: "/skillLogos/react.svg",
  Redux: "/skillLogos/redux.svg",
  "Node.js": "/skillLogos/nodejs.svg",
  Express: "/skillLogos/express.svg",
  Jest: "/skillLogos/jest.svg",
  Bootstrap: "/skillLogos/bootstrap.svg",
  "Material UI": "/skillLogos/material-ui.svg",
  PostgreSQL: "/skillLogos/postgresql.svg",
  MongoDB: "/skillLogos/mongodb.svg",
  DynamoDB: "/skillLogos/dynamodb.svg",
  Redis: "/skillLogos/redis.svg",
  "AWS Lambda": "/skillLogos/aws-lambda.svg",
  S3: "/skillLogos/s3.svg",
  EC2: "/skillLogos/ec2.svg",
  SQS: "/skillLogos/sqs.svg",
  SNS: "/skillLogos/sns.svg",
  "API Gateway": "/skillLogos/api-gateway.svg",
  Docker: "/skillLogos/docker.svg",
  Git: "/skillLogos/git.svg",
};

function SlotWheel({ items, category }: { items: string[]; category: string }) {
  const [isDragging, setIsDragging] = useState(false);
  const y = useMotionValue(0);
  const constraintsRef = useRef(null);

  const itemHeight = 120;
  const extendedItems = [...items, ...items, ...items];

  return (
    <div className="relative">
      <div className="text-center mb-4">
        <h3 className="text-lg font-display font-bold text-primary">{category}</h3>
      </div>

      <div className="relative h-[360px] overflow-hidden glass-panel glow-border rounded-2xl">
        {/* Top gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gotham-dark to-transparent z-10 pointer-events-none" />
        
        {/* Selection indicator */}
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-[120px] border-y-2 border-primary/50 bg-primary/5 pointer-events-none z-10" />
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gotham-dark to-transparent z-10 pointer-events-none" />

        <motion.div
          ref={constraintsRef}
          drag="y"
          dragConstraints={{ top: -itemHeight * items.length, bottom: 0 }}
          dragElastic={0.1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          style={{ y }}
          className="cursor-grab active:cursor-grabbing py-[120px]"
        >
          {extendedItems.map((skill, index) => (
            <motion.div
              key={`${skill}-${index}`}
              className="h-[120px] flex flex-col items-center justify-center px-4"
              whileHover={{ scale: isDragging ? 1 : 1.05 }}
            >
              <div className="w-16 h-16 mb-2 rounded-2xl bg-white/95 p-3 flex items-center justify-center shadow-md">
                {skillLogos[skill] ? (
                  <Image
                    src={skillLogos[skill]}
                    alt={`${skill} logo`}
                    width={40}
                    height={40}
                    className="w-10 h-10 object-contain"
                  />
                ) : (
                  <span className="text-2xl">💎</span>
                )}
              </div>
              <div className="text-sm font-semibold text-center">{skill}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-2 text-xs text-muted-foreground">
        Drag to scroll
      </div>
    </div>
  );
}

export function Skills() {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="section-shell py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div {...fadeUp}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <BatmanLogo className="w-12 h-12 text-primary" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-center">
              The <span className="text-primary">Utility Belt</span>
            </h2>
            <BatmanLogo className="w-12 h-12 text-primary" />
          </div>
          <p className="text-center text-muted-foreground mb-12">
            Drag the wheels to explore my arsenal
          </p>

          {/* Slot Machine Wheels */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skillCategories.map(([category, items], index) => (
                <motion.div key={category} {...fadeUpDelayed(index * 0.06)}>
                  <SlotWheel items={items} category={category} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Batman Logo Center */}
          <motion.div
            className="flex justify-center mt-12"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <BatmanLogo className="w-20 h-20 text-primary/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
