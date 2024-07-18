import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col self-stretch pt-6 md:pt-14 mt-28 w-full bg-gray-800 max-md:mt-10 max-md:max-w-full">
      <div className="self-center px-5 w-full max-w-screen-lg max-md:max-w-full">
        <div className="flex gap-5 px-5 md:px-0 max-md:flex-col max-md:gap-0">
          <FooterColumn title="Company" items={["About Us", "Careers", "Blog", "Contact Us"]} />
          <FooterColumn title="Support" items={["FAQ", "Terms", "Privacy Policy", "Returns & Warranty"]} />
          <FooterColumn title="Get In Touch" items={[
            "+1 815-369-0989",
            "help@inito.com",
            "355 Bryant Street, Suite 403, San Francisco 94017"
          ]} />
          <div className="flex flex-col order-first md:order-last ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 justify-between max-md:mt-10">
              {["https://cdn.builder.io/api/v1/image/assets/TEMP/63313f5da8a273cb9a750f4f57f2f0a550c52de45fead7ee272d74a425f151e1?apiKey=04f95d2705624fe9a9121f14a6037de9&", "https://cdn.builder.io/api/v1/image/assets/TEMP/9b5bdfd7eb074e26e0cf68e9190054c737ef30c54c0688f3a8713955c4b0da0a?apiKey=04f95d2705624fe9a9121f14a6037de9&", "https://cdn.builder.io/api/v1/image/assets/TEMP/3ab5e384ca00e01c24d2a5a1b8d0d015042b1f13c87a3adcdd4aba8391309962?apiKey=04f95d2705624fe9a9121f14a6037de9&", "https://cdn.builder.io/api/v1/image/assets/TEMP/c134d2af5af1e833bf73a89c1c38075af0e6ae0898a73cf4ed0b27e0daddaeb9?apiKey=04f95d2705624fe9a9121f14a6037de9&"].map((src, index) => (
                <Image height={100} width={100} key={index} loading="lazy" src={src} alt={`Social icon ${index + 1}`} className="shrink-0 aspect-square w-[29px]" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-4 mt-24 w-full text-xs font-medium tracking-wide leading-5 text-right bg-black text-neutral-400 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-5 w-full max-w-screen-lg max-md:flex-wrap max-md:max-w-full">
          <Image height={100} width={100} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1f7c37d0f5abf121112c7ac074b5e054cba9ef62063df3ef892e6fdaa992cfc?apiKey=04f95d2705624fe9a9121f14a6037de9&" alt="Inito logo" className="shrink-0 aspect-[2.94] w-[83px]" />
          <div className="flex-auto my-auto">Copyright 2023, Inito Inc.</div>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  items: string[];
}

const FooterColumn = ({ title, items }: FooterColumnProps) => {
  return (
    <div className="flex flex-col md:w-[21%]">
      <div className="flex flex-col grow text-base text-gray-400 max-md:mt-10">
        <div className="font-semibold text-white flex justify-between">{title} <div className='md:hidden'><svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></div></div>
        <div className='hidden md:grid'>
          {items.map((item, index) => (
            <div key={index} className={`mt-${index === 0 ? '10' : '6'}`}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;