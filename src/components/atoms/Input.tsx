import { motion } from "motion/react";

type InputProps = {
  label: string;
  name: string;
  type: string;
  textarea?: boolean;
};

const Input: React.FC<InputProps> = ({ label, name, type, textarea }) => {
  return (
    <>
      <p>
        <label htmlFor={name}>{label}</label>
      </p>
      <p>
        {textarea ? (
          <motion.textarea
            whileHover={{ x: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            name={name}
            placeholder={label}
            required
            disabled
          />
        ) : (
          <motion.input
            whileHover={{ x: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            type={type}
            name={name}
            placeholder={label}
            required
            disabled
          />
        )}
      </p>
    </>
  );
};

export default Input;
