import profileImg from "../../../assets/images/profile.png";
import { CV_FILES } from "../../../config/cv-files";

import Social from "../../molecules/social/Social";
import NavItem from "../../molecules/navigation/NavItem";
import Quotes from "../../molecules/quotes/Quotes";
import LangToggle from "../../molecules/lang-toggle/LangToggle";

import classes from "./MainNavigation.module.scss";
import { motion } from "framer-motion";

import { SOCIAL_IMAGES } from "../../../config/social-images";
import { NAV_ITEMS } from "../../../config/navigation";
import { useTranslation } from "react-i18next";
import { useLang } from "../../../i18n/useLang";

export default function MainNavigation() {
  const { t } = useTranslation();
  const lang = useLang();

  return (
    <header className={classes.header}>
      <div className={classes.box}>
        <div className={classes.topRow}>
          <LangToggle />
        </div>

        <div className={classes.avatarWrap}>
          <img
            className={classes.avatar}
            src={profileImg}
            alt="Diego Mayorga"
            width={180}
            height={180}
          />
        </div>

        <h2 aria-label="Diego Mayorga Torres" className={classes.name}>
          {[..."Diego Mayorga Torres"].map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.1, delay: index * 0.03 }}
              style={
                char === " " ? { display: "inline-block", width: "8px" } : {}
              }
            >
              {char}
            </motion.span>
          ))}
        </h2>
        <p className={classes.handle}>@devdiegomt</p>

        <p className={classes.tagline}>{t("profile.tagline")}</p>
        <p className={classes.availability}>{t("profile.availability")}</p>

        <a href={CV_FILES[lang]} download className={classes.cta}>
          {t("profile.downloadCv")}
        </a>

        <div className={classes.social}>
          {SOCIAL_IMAGES.map((social) => (
            <Social
              key={social.id}
              social={social}
              className={classes.iconBckg}
            />
          ))}
        </div>

        <nav>
          <ul className={classes.list}>
            {NAV_ITEMS.map((item) => (
              <li key={item.key}>
                <NavItem to={item.to} end={item.end}>
                  {t(`nav.${item.key}`)}
                </NavItem>
              </li>
            ))}
          </ul>
        </nav>

        <div className={classes.quote}>
          <Quotes />
        </div>
      </div>
    </header>
  );
}
