import { motion } from "framer-motion";

const Category = ({
  title,
  score,
  keyIndex,
}: {
  title: string;
  score: number;
  keyIndex: number;
}) => {
  return (
    <motion.div
      key={keyIndex}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: keyIndex * 0.1 }}
      className="mb-8"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium pb-2 text-black">{title}</span>
        <span className="text-sm font-bold pb-2 text-black">{score}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <motion.div
          className={`h-3 rounded-full ${
            score > 69
              ? "bg-green-700"
              : score > 49
                ? "bg-yellow-500"
                : "bg-red-700"
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ delay: keyIndex * 0.1 + 0.2, duration: 0.8 }}
        />
      </div>
    </motion.div>
  );
};

const Summary = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div>
      <Category
        title={"Tone & Style"}
        score={feedback.toneAndStyle.score}
        keyIndex={1}
      />
      <Category title={"Content"} score={feedback.content.score} keyIndex={2} />
      <Category
        title={"Structure"}
        score={feedback.structure.score}
        keyIndex={3}
      />
      <Category title={"Skills"} score={feedback.skills.score} keyIndex={4} />
    </div>
  );
};

export default Summary;
