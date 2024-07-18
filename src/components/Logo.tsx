import Image from 'next/image';

interface LogoProps {
  src: any;
  alt: string;
}

const Logo = ({ src, alt }: LogoProps) => {
  return (
    <Image height={100} width={100} 
      loading="lazy" 
      src={src} 
      alt={alt}
      className="shrink-0 max-w-full h-[30px] md:h-full" 
    />
  );
};

export default Logo;