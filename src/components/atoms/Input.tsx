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
          <textarea name={name} placeholder={label} required />
        ) : (
          <input type={type} name={name} placeholder={label} required />
        )}
      </p>
    </>
  );
};

export default Input;
