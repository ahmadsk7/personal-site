import { motion } from "framer-motion";

const Terminal = () => {
  const terminalText = [
    { text: "> whoami", delay: 0 },
    { text: "cs @ university of michigan | builder | learner", delay: 0.5 },
    { text: "> cat mission.txt", delay: 2 },
    { text: "building thoughtful tools and learning in public.", delay: 3 },
    { text: "> logout", delay: 4 },
    { text: "session ended. explore my ~/projects below ↓ 🚀", delay: 5 },
  ];

  // Calculate the total delay for each line including the typing time
  const getLineDelay = (index: number) => {
    const baseDelay = terminalText[index].delay;
    const previousLines = terminalText.slice(0, index);
    const previousTypingTime = previousLines.reduce((acc, line) => acc + (line.text.length * 0.05), 0);
    return baseDelay + previousTypingTime;
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/90 rounded-lg p-6 font-mono text-sm md:text-base shadow-[0_0_15px_rgba(0,255,0,0.2)]">
      {terminalText.map((item, lineIndex) => (
        <div
          key={lineIndex}
          className="flex items-start space-x-2"
        >
          <motion.span
            className="text-[#00ff00]"
          >
            {item.text.split('').map((char, charIndex) => (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: getLineDelay(lineIndex) + (charIndex * 0.05),
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default Terminal;