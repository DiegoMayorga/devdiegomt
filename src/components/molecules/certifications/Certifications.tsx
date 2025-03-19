import classes from "./Certifications.module.scss";

type CertificationsProps = {
  crt: {
    img: string;
    name: string;
    place: string;
    year: string;
  };
};

const Certifications: React.FC<CertificationsProps> = ({ crt }) => {
  return (
    <li className={classes["crt-li"]}>
      <img
        className={classes["crt-img"]}
        src={crt.img}
        alt={`${crt.place} logo`}
      />
      <div className={classes["crt-content"]}>
        <h4>{crt.name}</h4>
        <p>{crt.place}</p>
        <p>{crt.year}</p>
      </div>
    </li>
  );
};

export default Certifications;
