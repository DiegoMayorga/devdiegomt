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
          <textarea name={name} placeholder={label} required disabled/>
        ) : (
          <input type={type} name={name} placeholder={label} required disabled/>
        )}
      </p>
    </>
  );
};

export default Input;
