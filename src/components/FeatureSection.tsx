import Image from 'next/image';
import Button from './Button';
import smallWomen from '../../public/images/small-women.png';
import calendar from '../../public/images/calendar.svg';
import women from '../../public/images/women.png';
import graph from '../../public/images/graph.png';
import maskGroup from '../../public/images/Mask group.png';
import chakri from '../../public/images/chakri.svg';

const FeatureSection = () => {

  return (
    <div className='md:container md:mx-auto md:px-60 flex flex-col gap-8 pt-5'>
      <div className='bg-white rounded-3xl mx-8 p-12 drop-shadow-md -translate-y-48 md:-translate-y-36 relative'>
        <p className='text-[#1F94AA]'>WHY MEASURE PROGESTERONE?</p>
        <p className='text-[0.9rem] py-5'><strong>Anovulation</strong> (having a menstrual cycle with no egg) is actually a common occurrence, affecting 1 in 10 women*.</p>
        <p className='text-[0.9rem]'>A sure way to confirm ovulation is a <strong>rise in Progesterone level</strong> after peak fertility. Progesterone also supports implantation and elevated levels of PdG during the 7-10 day window after ovulation correlates to higher chances of a successful pregnancy.</p>
        <p className='text-[0.7rem] text-slate-400 py-3'>* Source: National Institutes of Health</p>
        <h2 className='font-bold'>&quot;Inito is all that you need to give you the best chance of conception.&quot;</h2>
        <div className='pt-6 flex gap-5 items-center'>
          <Image src={smallWomen} alt='' height={70} width={70} className='object-contain' />
          <div>
            <p className='font-semibold'>Dr. Rachel Wagner</p>
            <p className='text-slate-300 italic'>MD</p>
          </div>
        </div>
        <Image src={calendar} alt={''} height={100} width={100} className='absolute top-[-30px] right-[-30px] hidden md:flex' />
      </div>
      <div className='text-center text-2xl font-semibold -translate-y-28 max-md:hidden'>
        Why Inito is the smarter <br /> way to get <span className='bg-underline bg-contain pb-1 bg-no-repeat bg-bottom'>pregnant</span>
      </div>
      <div className='md:bg-white rounded-3xl flex max-md:flex-col -translate-y-32 md:-translate-y-20'>
        <div className='md:w-6/12 px-12 pb-24 md:p-12'>
          <h2 className='font-bold text-2xl'>Adapts to your irregular cycle</h2>
          <p className='text-[0.8rem] py-5'>Most ovulation kits have a set value or a threshold, making them likely to give a false read if your hormones fall outside the average range.</p>
          <p className='text-[0.8rem]'>Every woman is unique, especially with a condition like PCOS or Thyroid which can influence hormone levels. Inito measures real values of your hormones to personalize results to the unique you.</p>
        </div>
        <div className='md:w-6/12'>
          <Image src={women} alt='' height={1000} width={1000} className='object-contain' />
        </div>
      </div>
      <div className='bg-white md:rounded-3xl flex max-md:flex-col -translate-y-40 max-md:py-16 md:-translate-y-12'>
        <div className='md:w-6/12'>
          <Image src={maskGroup} alt='' height={1000} width={1000} className='object-contain' />
        </div>
        <div className='md:w-6/12 px-12 pt-5'>
          <h2 className='font-bold text-2xl'>Inito tracks everything so you don&apos;t have to</h2>
          <p className='text-[0.8rem] py-4'>The Inito Fertility Monitor comes with a free easy-to-use App, so you can track your fertile days with ease and know exactly when you ovulate.</p>
          <p className='text-[0.8rem] mb-2'>Our App notifies you for everything:</p>
          <ul className="text-[0.8rem] mb-3">
            <li className='flex items-center gap-2'> <div className='h-1 w-1 rounded-circle bg-sky-200'></div>Your fertility levels</li>
            <li className='flex items-center gap-2'> <div className='h-1 w-1 rounded-circle bg-sky-200'></div>When to test on the right days</li>
            <li className='flex items-center gap-2'> <div className='h-1 w-1 rounded-circle bg-sky-200'></div>When you&apos;ve successfully ovulated</li>
            <li className='flex items-center gap-2'> <div className='h-1 w-1 rounded-circle bg-sky-200'></div>And when to roll into bed!</li>
          </ul>
          <Button text='Get the Inito Kit' />
        </div>
      </div>
      <div className="md:bg-white md:rounded-3xl flex max-md:flex-col md:-translate-y-8">
        <div className='md:w-6/12 px-12 pb-24 md:p-12'>
          <h2 className='font-bold text-2xl'>Get charts and actual <span className='bg-underline bg-bottom bg-no-repeat bg-contain pb-1'>values</span> of your <div className="flex">hormones<Image src={chakri} alt='' height={30} width={30} className='-translate-y-3' /></div></h2>
          <p className='text-[0.8rem] py-5'>Actual numerical values are necessary to know whether your PdG levels are sufficient enough to support a healthy pregnancy.</p>
          <p className='text-[0.8rem]'>Studies show that PdG levels lower than 7.9ng/ml in serum (around 10ug/ml PdG) 6-8 days after ovulation are associated with lower pregnancy outcomes.</p>
        </div>
        <div className='md:w-6/12'>
          <Image src={graph} alt='' height={1000} width={1000} className='object-contain' />
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;