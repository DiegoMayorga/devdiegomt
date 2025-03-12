type SocialProps = {
  className: string;
  social: {
    id: string;
    image: string;
    alt: string;
  };
};

const Social: React.FC<SocialProps> = ({ className, social }) => {
  return (
    <div className={className}>
      <img src={social.image} alt={social.alt} />
    </div>
  );
};

export default Social;
