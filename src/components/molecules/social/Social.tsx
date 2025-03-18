import { motion } from "motion/react";

type SocialProps = {
  className: string;
  social: {
    id: string;
    image: string;
    alt: string;
    href: string;
  };
};

const Social: React.FC<SocialProps> = ({ className, social }) => {
  return (
    <motion.div whileHover={{ scale: 1.1}} className={className}>
      <a href={social.href}>
        <img src={social.image} alt={social.alt} />
      </a>
    </motion.div>
  );
};

export default Social;
