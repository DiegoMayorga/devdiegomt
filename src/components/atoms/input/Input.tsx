import { motion } from "motion/react";

type InputProps = {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  textarea,
  disabled,
  ...props
}) => {
  return (
    <>
      <p>
        <label htmlFor={name}>{label}</label>
      </p>
      <p>
        {textarea ? (
          <motion.textarea
            id={name}
            whileHover={{ x: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            name={name}
            placeholder={label}
            disabled={disabled}
            required={!disabled}
            {...props}
          />
        ) : (
          <motion.input
            id={name}
            whileHover={{ x: [0, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
            type={type}
            name={name}
            placeholder={label}
            disabled={disabled}
            required={!disabled}
            {...props}
          />
        )}
      </p>
    </>
  );
};

export default Input;
