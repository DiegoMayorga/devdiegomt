import classes from "./Certifications.module.scss";
import { useLang } from "../../../i18n/useLang";
import type { CertificationItem } from "../../../config/profile";

const Certifications: React.FC<{ crt: CertificationItem }> = ({ crt }) => {
  const lang = useLang();
  return (
    <li className={classes.item}>
      <span className={classes.logoChip}>
        <img src={crt.img} alt={`${crt.place} logo`} loading="lazy" />
      </span>
      <div className={classes.content}>
        <h3 className={classes.title}>{crt.name[lang]}</h3>
        <p className={classes.meta}>
          {crt.place} · {crt.year}
        </p>
      </div>
    </li>
  );
};

export default Certifications;
