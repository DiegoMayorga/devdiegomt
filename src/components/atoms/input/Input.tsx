type InputProps = {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  disabled?: boolean;
  required?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  name,
  type,
  textarea,
  disabled,
  required,
  ...props
}) => {
  const inputProps = {
    id: name,
    name,
    placeholder: label,
    disabled,
    required,
  };

  return (
    <>
      <p>
        <label>
          {label}
          {textarea ? (
            <textarea {...inputProps} {...props} />
          ) : (
            <input {...inputProps} type={type} {...props} />
          )}
        </label>
      </p>
    </>
  );
};

export default Input;
