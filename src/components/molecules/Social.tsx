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
    <div className={className}>
      <a href={social.href}>
        <img src={social.image} alt={social.alt} />
      </a>
    </div>
  );
};

export default Social;
