type EducationProps = {
  edu: {
    title: string;
    place: string;
    period: string;
  };
};

const Education: React.FC<EducationProps> = ({ edu }) => {
  return (
    <li>
      <h4>{edu.title}</h4>
      <p>{edu.place}</p>
      <p>{edu.period}</p>
    </li>
  );
};

export default Education;
