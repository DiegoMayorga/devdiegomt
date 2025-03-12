import profileImg from "../assets/images/profile.png";
import Social from "../components/molecules/Social";
import classes from "../styles/pages/Home.module.scss";

import linkedinImg from "../assets/images/linkedin.png";
import githubImg from "../assets/images/github.png";
import figmaImg from "../assets/images/figma.png";
import gmailImg from "../assets/images/gmail.png";

const SOCIAL_IMAGES = [
  {
    id: "s1",
    image: linkedinImg,
    alt: "Linkedin icon",
    href: "https://www.linkedin.com/in/devdiegomt/",
  },
  {
    id: "s2",
    image: githubImg,
    alt: "GitHub icon",
    href: "https://github.com/diegomayorga",
  },
  {
    id: "s3",
    image: figmaImg,
    alt: "Figma icon",
    href: "https://www.figma.com/files/team/1101288856553805647/project/55251532/Team-project?fuid=1083565092992569514"
  },
  {
    id: "s4",
    image: gmailImg,
    alt: "Gmail icon",
    href: "mailto:devdiegomt@gmail.com"
  },
];

export default function HomePage() {
  return (
    <div className={classes.home}>
      <img src={profileImg} alt="Profile image" />
      <div className={classes.box}>
        <h1>Diego Mayorga Torres</h1>
        <p>@devdiegomt</p>
        <div className={classes.social}>
          {SOCIAL_IMAGES.map((social) => (
            <Social key={social.id} social={social} className={classes.iconBckg} />
          ))}
        </div>
      </div>
    </div>
  );
}
