import { useDailyQuote } from "../../../hooks/useDailyQuote";
import { useTranslation } from "react-i18next";
import classes from "./Quotes.module.scss";
import { motion } from "framer-motion";

const Quotes = () => {
  const { dailyQuote } = useDailyQuote();
  const { t } = useTranslation();
  return (
    <div className={classes.quote}>
      <motion.p
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <strong>{t("profile.quotePrefix")}:</strong> "{dailyQuote.quote}" —{" "}
        {dailyQuote.author}
      </motion.p>
    </div>
  );
};

export default Quotes;
