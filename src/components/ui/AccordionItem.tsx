import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export function AccordionItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className={cn(
        "glass-card rounded-2xl overflow-hidden transition-all duration-300",
        isOpen ? "border-gold-500/40 shadow-gold-glow/20" : "hover:border-gold-500/20",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start sm:items-center justify-between gap-4 p-6 sm:p-7 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4 flex-1">
          <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold-gradient text-navy-950 font-bold flex items-center justify-center text-lg font-display shadow-gold-glow">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-white font-semibold text-base sm:text-lg lg:text-xl pt-1 leading-snug">
            {question}
          </h3>
        </div>
        <div
          className={cn(
            "flex-shrink-0 mt-1 w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300",
            isOpen
              ? "bg-gold-gradient text-navy-950 border-gold-500/50 rotate-180"
              : "bg-white/5 text-gold-400 border-white/10 group-hover:border-gold-500/40 group-hover:text-gold-300",
          )}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="minus"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                <Minus className="w-5 h-5" strokeWidth={2.5} />
              </motion.div>
            ) : (
              <motion.div
                key="plus"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
              >
                <Plus className="w-5 h-5" strokeWidth={2.5} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <div className="px-6 sm:px-7 pb-7 pt-0">
              <div className="ml-14 sm:ml-[72px] border-l-2 border-gold-500/30 pl-5">
                <p className="text-white/75 text-base sm:text-lg leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

interface FAQAccordionProps {
  items: { q: string; a: string }[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          index={i}
          question={item.q}
          answer={item.a}
          isOpen={openIdx === i}
          onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
        />
      ))}
    </div>
  );
}
