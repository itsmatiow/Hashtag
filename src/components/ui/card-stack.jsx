"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval;

export const CardStack = ({ items, offset, scaleFactor, className }) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 3000);
  };

  return (
    <div className={`relative h-60 w-60 md:h-60 md:w-96 ${className}`}>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute flex h-fit w-60 flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-4 shadow-xl shadow-black/10 md:h-fit md:w-96 dark:border-white/10 dark:bg-black dark:shadow-white/5"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="rounded-lg font-normal text-neutral-700 shadow-lg dark:text-neutral-200">
              {card.content}
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-black dark:text-white">
                {card.name}
              </p>
              <p className="font-medium text-black/60 dark:text-neutral-100">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
