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
    <li className={classes.item}>
      <span className={classes.logoChip}>
        <img src={crt.img} alt={`${crt.place} logo`} loading="lazy" />
      </span>
      <div className={classes.content}>
        <h3 className={classes.title}>{crt.name}</h3>
        <p className={classes.meta}>
          {crt.place} · {crt.year}
        </p>
      </div>
    </li>
  );
};

export default Certifications;
