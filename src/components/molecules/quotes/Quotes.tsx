// Custom Hook
import { useDailyQuote } from "../../../hooks/useDailyQuote";

// Styles
import classes from "./Quotes.module.scss";
import { motion } from "framer-motion";

const Quotes = () => {
  const { dailyQuote } = useDailyQuote();
  return (
    <div className={classes.quote}>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
        }}
      >
        "{dailyQuote.quote}" - {dailyQuote.author}
      </motion.p>
    </div>
  );
};

export default Quotes;
