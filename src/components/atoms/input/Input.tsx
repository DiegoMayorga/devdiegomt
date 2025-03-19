import { motion } from "framer-motion";

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
  const motionProps = {
    whileHover: { x: [0, 10, -10, 0] },
    transition: { duration: 0.5 },
    id: name,
    name,
    placeholder: label,
    disabled,
    required: !disabled,
  };

  return (
    <>
      <p>
        <label>
          {label}
          {textarea ? (
            <motion.textarea {...motionProps} {...props} />
          ) : (
            <motion.input {...motionProps} type={type} {...props} />
          )}
        </label>
      </p>
    </>
  );
};

export default Input;
