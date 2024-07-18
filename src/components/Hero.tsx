import Button from './Button';
import Image from 'next/image';
import src1 from './../../public/images/image-1.png';
import src2 from './../../public/images/image-1-small.png';
import star from './../../public/images/star.png';

const bgStyle = {

}

const Hero = () => {
    return (
        <div className='relative bg-[#c4f2ff] w-full md:h-[720px] md:aspect-[1] md:bg-transparent md:bg-center md:bg-hero-background bg-cover'>
            <div className='container mx-auto p-10 pb-0 md:p-0'>
                <section className="flex flex-col self-center md:ps-24 md:w-[45%] text-base text-gray-800 md:mt-36">
                    <div className="flex gap-5 self-start text-sm leading-4 text-black tracking-[1.95px]">
                        <div className='flex gap-1 md:gap-2'>
                            <Image height={15} width={15} loading="lazy" src={star} alt="" className="w-[15px] object-contain" />
                            <Image height={15} width={15} loading="lazy" src={star} alt="" className="w-[15px] object-contain" />
                            <Image height={15} width={15} loading="lazy" src={star} alt="" className="w-[15px] object-contain" />
                            <Image height={15} width={15} loading="lazy" src={star} alt="" className="w-[15px] object-contain" />
                            <Image height={15} width={15} loading="lazy" src={star} alt="" className="w-[15px] object-contain" />
                        </div>
                        <div className="flex-auto text-[0.6rem] font-semibold">TRUSTED BY 20,000+ COUPLES</div>
                    </div>
                    <h1 className="mt-6 text-3xl md:text-4xl font-bold w-[496px] leading-[58px] max-md:max-w-full max-md:text-4xl">
                        Track your fertility hormones at home, in 10 minutes
                    </h1>
                    <p className="mt-12 font-medium leading-7 text-wrap mb-8">
                        Get accurate results of{" "}
                        <span className="font-bold"> Estrogen, LH, Progesterone metabolite PdG and FSH </span>{" "}
                        with Inito, the all-in-one, FDA-registered fertility monitor.
                    </p>
                    <div className='absolute md:relative bottom-[-16px] left-[105px]'>
                        <div className='flex justify-center md:justify-start'>
                            <Button text="How does Inito work?" />
                        </div>
                    </div>
                </section>
                <div style={{ height: 'fit-content' }} className='hidden md:flex'>
                    <Image width={1000} height={1000} className="h-fit w-[750px] absolute right-[110px] top-[-60px]" src={src1} alt='' />
                </div>
            </div>
            <Image width={446} height={560} className="flex md:hidden object-fill" src={src2} alt='' />
        </div>
    );
};

export default Hero;