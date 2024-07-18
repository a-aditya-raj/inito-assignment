import Header from './Header';
import Hero from './Hero';
import FAQ from './FAQSection';
import Footer from './Footer';
import Button from './Button';
import logo1 from '../../public/images/logo1.png';
import logo2 from '../../public/images/logo2.png';
import logo3 from '../../public/images/logo3.png';
import logo4 from '../../public/images/logo4.png';
import logo5 from '../../public/images/logo5.png';
import image1 from '../../public/images/image1.png';
import image2 from '../../public/images/image2.png';
import green from '../../public/images/green-tick.png';
import purple from '../../public/images/purple-tick.png';
import blue from '../../public/images/blue-tick.png';
import orange from '../../public/images/orange-tick.png';
import Image from 'next/image';
import FeatureSection from './FeatureSection';

const MainComponent = () => {
    const navItems = ["About Us", "Blog", "FAQ", "Contact Us"];
    const faqQuestions = [
        { question: "What results does Inito give?", answer: "" },
        { question: "How many test strips are required per cycle?", answer: "" },
        { question: "Where can I buy more refill strips? Do I need to buy a new monitor every cycle?", answer: "" },
        { question: "Do I need to use a test strip for each hormone?", answer: "" },
        { question: "Will Inito work if I have PCOS?", answer: "" },
        { question: "Do medications affect results?", answer: "" },
        { question: "How accurate is Inito?", answer: "" },
        { question: "Is Inito FDA Registered and can HSA benefits be used to purchase it?", answer: "" },
    ];

    return (
        <div className="flex flex-col bg-white">
            <Header navItems={navItems} />
            <Hero />
            <section className='grid place-items-center mt-12 md:mt-4 gap-4'>
                <span className="text-slate-400 text-[0.7rem]">AS SEEN ON</span>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-6 place-items-center'>
                    <Image height={30} width={162} loading="lazy" src={logo1} alt="" className='col-span-2 md:col-span-1 h-full' />
                    <Image height={37} width={136} loading="lazy" src={logo2} alt="" className='col-span-1' />
                    <Image height={38} width={157} loading="lazy" src={logo3} alt="" className='col-span-1' />
                    <Image height={31} width={157} loading="lazy" src={logo5} alt="" className='md:order-last col-span-1 ' />
                    <Image height={100} width={157} loading="lazy" src={logo4} alt="" className='col-span-1' />
                </div>
            </section>
            <div className="md:container px-10 py-6 md:mx-auto md:w-[35%] mt-24 text-center bg-[#F2F8FA] md:bg-white">
                <h2 className="text-3xl font-bold text-gray-800">
                    The <span className='bg-underline bg-bottom bg-no-repeat bg-contain'>only</span> fertility kit you will ever need
                </h2>
                <p className="mt-12 font-medium text-sm text-gray-800 max-md:mt-10 max-md:max-w-full">
                    Most ovulation tests predict your fertile days by tracking Estrogen and Luteinizing Hormone (LH), but fail to measure the hormone that actually confirms your ovulation and supports pregnancy:{" "}
                    <span className="font-bold">Progesterone.</span>
                </p>
                <h2 className="mt-8 text-xl font-bold text-gray-800">
                    What makes Inito different?
                </h2>
                <p className="mt-4 text-sm font-medium text-gray-800">
                    Inito is the only fertility monitor that measures all{" "}
                    <span className="font-bold">4 hormones</span>{" "}
                    on a{" "}
                    <span className="font-bold">single test strip</span>{" "}
                    , showing you a full picture of your cycles with results unique to your body.
                </p>
                <div className='flex flex-col gap-8 my-12 items-center md:hidden'>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_1159_622)">
                                <mask id="mask0_1159_622" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                                    <path d="M32 0H0V32H32V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_1159_622)">
                                    <path d="M24.8193 11.2615L16.2186 6.9608C16.1508 6.92685 16.0761 6.90918 16.0003 6.90918C15.9245 6.90918 15.8498 6.92685 15.7821 6.9608L7.1807 11.2615C7.09915 11.3016 7.03056 11.3639 6.98282 11.4412C6.93508 11.5185 6.91012 11.6077 6.91081 11.6986V20.2988C6.90955 20.3901 6.93424 20.48 6.98201 20.5579C7.02978 20.6358 7.09868 20.6986 7.1807 20.7389L15.7821 25.0396C15.85 25.073 15.9246 25.0903 16.0003 25.0903C16.076 25.0903 16.1507 25.073 16.2186 25.0396L24.8206 20.7383C24.9021 20.698 24.9705 20.6354 25.0181 20.5579C25.0656 20.4803 25.0903 20.3909 25.0892 20.3V11.6986C25.0896 11.6078 25.0645 11.5187 25.0168 11.4415C24.9691 11.3642 24.9007 11.3019 24.8193 11.2615ZM20.2029 10.0449L12.9208 13.9139L11.5363 13.2225L18.8184 9.35416L20.2029 10.0449ZM12.4414 14.7646V16.664L12.0453 16.268C12.0002 16.2226 11.9464 16.1866 11.8872 16.1621C11.8281 16.1376 11.7646 16.1252 11.7005 16.1255H10.9591V14.0243L12.4414 14.7646ZM16.0036 7.94193L17.7455 8.81499L10.464 12.6828L8.49089 11.698L16.0036 7.94193ZM15.514 23.8085L7.88711 19.9981V12.489L9.98281 13.5365V16.6157C9.98297 16.7452 10.0345 16.8693 10.1261 16.9607C10.2177 17.0522 10.3418 17.1036 10.4713 17.1036H11.4977L12.5845 18.1904C12.676 18.2815 12.8 18.3326 12.9292 18.3323C13.0585 18.332 13.1823 18.2804 13.2736 18.189C13.3649 18.0976 13.4163 17.9737 13.4165 17.8444V15.253L15.5116 16.3018L15.514 23.8085ZM16 15.4529L13.9949 14.4518L21.277 10.5816L23.511 11.6992L16 15.4529ZM24.1135 19.9981L16.4879 23.8103V16.3018L24.1129 12.4896L24.1135 19.9981Z" fill="#2894A9" />
                                    <path d="M16 0C12.8355 0 9.74207 0.938384 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87706C0.00693253 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 11.7565 30.3143 7.68687 27.3137 4.68629C24.3131 1.68571 20.2435 0 16 0ZM16 30.7925C13.0743 30.7925 10.2144 29.9249 7.78176 28.2995C5.34915 26.6741 3.45317 24.3638 2.33356 21.6608C1.21396 18.9579 0.921017 15.9836 1.49179 13.1141C2.06256 10.2447 3.4714 7.60892 5.54016 5.54016C7.60893 3.47139 10.2447 2.06255 13.1141 1.49178C15.9836 0.92101 18.9579 1.21395 21.6608 2.33356C24.3638 3.45316 26.6741 5.34915 28.2995 7.78175C29.9249 10.2144 30.7925 13.0743 30.7925 16C30.7925 19.9232 29.234 23.6857 26.4599 26.4598C23.6857 29.234 19.9232 30.7925 16 30.7925Z" fill="#2894A9" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_1159_622">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text-[0.7rem]'>TRUSTED BY <br /> 20,000+ COUPLES</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <path d="M16 0C12.8355 0 9.74207 0.938384 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87706C0.00693253 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C31.9952 11.758 30.308 7.69113 27.3084 4.69159C24.3089 1.69204 20.242 0.00479412 16 0ZM16 30.7925C13.0743 30.7925 10.2144 29.9249 7.78176 28.2995C5.34915 26.6741 3.45317 24.3638 2.33356 21.6608C1.21396 18.9579 0.921017 15.9836 1.49179 13.1141C2.06256 10.2447 3.4714 7.60892 5.54016 5.54016C7.60893 3.47139 10.2447 2.06255 13.1141 1.49178C15.9836 0.92101 18.9579 1.21395 21.6608 2.33356C24.3638 3.45316 26.6741 5.34915 28.2995 7.78175C29.9249 10.2144 30.7925 13.0743 30.7925 16C30.788 19.9218 29.2281 23.6817 26.4549 26.4549C23.6818 29.2281 19.9218 30.788 16 30.7925Z" fill="#1F94AA" />
                            <path d="M20.7246 10.2001C19.9724 10.6847 19.2573 11.2248 18.5854 11.8158C16.7681 13.3941 15.117 15.1542 13.658 17.0686L10.5788 14.9186L9.60608 15.8792L9.64714 15.9353C9.67612 15.9752 12.5314 19.8598 13.6055 21.6899L13.6761 21.8106L13.7449 21.6899C13.789 21.6126 18.1827 13.9386 22.2364 10.3281L22.394 10.188H20.7439L20.7246 10.2001Z" fill="#1F94AA" />
                        </svg>
                        <p className='text-[0.7rem]'>FREE US SHIPPING</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                            <g clipPath="url(#clip0_1159_636)">
                                <mask id="mask0_1159_636" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                                    <path d="M32 0H0V32H32V0Z" fill="white" />
                                </mask>
                                <g mask="url(#mask0_1159_636)">
                                    <path d="M16 0C12.8355 0 9.74207 0.938384 7.11088 2.69649C4.4797 4.45459 2.42894 6.95345 1.21793 9.87706C0.00693253 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C31.9952 11.758 30.308 7.69113 27.3084 4.69159C24.3089 1.69204 20.242 0.00479412 16 0ZM16 30.7925C13.0743 30.7925 10.2144 29.9249 7.78176 28.2995C5.34915 26.6741 3.45317 24.3638 2.33356 21.6608C1.21396 18.9579 0.921017 15.9836 1.49179 13.1141C2.06256 10.2447 3.4714 7.60892 5.54016 5.54016C7.60893 3.47139 10.2447 2.06255 13.1141 1.49178C15.9836 0.92101 18.9579 1.21395 21.6608 2.33356C24.3638 3.45316 26.6741 5.34915 28.2995 7.78175C29.9249 10.2144 30.7925 13.0743 30.7925 16C30.788 19.9218 29.2281 23.6817 26.4549 26.4549C23.6818 29.2281 19.9218 30.788 16 30.7925Z" fill="#2894A9" />
                                    <path d="M16.7083 14.8389L15.6052 12.605L14.5033 14.8389L12.0363 15.2012L13.8216 16.9383L13.399 19.395L15.6052 18.234L17.8114 19.395L17.3887 16.9383L19.1723 15.1976L16.7083 14.8389Z" fill="#2894A9" />
                                    <path d="M7.69152 16.108L6.89575 14.4954L6.09816 16.1086L4.31824 16.3671L5.60427 17.6223L5.30239 19.395L6.89454 18.5582L8.48428 19.395L8.18239 17.6223L9.47084 16.3671L7.69152 16.108Z" fill="#2894A9" />
                                    <path d="M25.2981 16.108L24.5023 14.4954L23.7053 16.1086L21.9254 16.3671L23.2115 17.6223L22.9096 19.395L24.5017 18.5582L26.0915 19.395L25.7896 17.6223L27.0774 16.3665L25.2981 16.108Z" fill="#2894A9" />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_1159_636">
                                    <rect width="32" height="32" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text-[0.7rem]'>HSA/FSA ELIGIBLE</p>
                    </div>
                </div>
            </div>
            <section className="md:container md:mx-auto md:px-32">
                <div className='flex flex-col md:gap-24 mt-5 md:rounded-3xl md:px-16 md:mt-20 w-full bg-sky-200 md:bg-sky-100'>
                    <div className="flex max-md:flex-col gap-5 px-8 md:py-16">
                        <div className={`flex flex-col w-6/12 max-md:ml-0 max-md:w-full max-md:order-last`}>
                            <div className="flex flex-col justify-center w-full bg-sky-200 rounded-3xl">
                                <Image height={100} width={100} loading="lazy" src={image1} alt='' className="w-full aspect-square max-md:max-w-full" />
                            </div>
                        </div>
                        <div className={`flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full order-2`}>
                            <div className="flex flex-col self-stretch my-auto text-gray-800 max-md:mt-10 max-md:max-w-full">
                                <h2 className="text-4xl font-bold leading-[50px] max-md:max-w-full">Predict and confirm your ovulation with <span className='bg-underline bg-no-repeat bg-bottom pb-1 bg-contain'>actual</span> data</h2>
                                <p className="mt-7 text-base italic font-medium leading-6 max-md:max-w-full">Unlike most ovulation tests that only give you &quot;yes/no&quot; results, Inito provides real numerical values of your fertility hormones. If you have irregular cycles, actual data is necessary to know exactly when you ovulate, and when is the best time to try to conceive.</p>
                                <div className="flex w-full justify-center">
                                    <button className="flex justify-center self-start px-7 py-3 mt-8 text-base font-semibold tracking-wide text-center text-white bg-cyan-600 rounded-3xl max-md:px-5">
                                        Get the Inito Kit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex max-md:flex-col gap-5 max-md:bg-white max-md:pt-6 md:pb-24">
                        <div className={`flex flex-col w-6/12 max-md:ml-0 max-md:w-full order-last`}>
                            <div className="flex flex-col justify-center w-full rounded-3xl my-6">
                                <Image height={100} width={100} loading="lazy" src={image2} alt='' className="w-full" />
                            </div>
                        </div>
                        <div className={`flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full order-1 px-4`}>
                            <div className="flex flex-col self-stretch my-auto text-gray-800 max-md:mt-10 max-md:max-w-full">
                                <h2 className="text-4xl font-bold leading-[50px] max-md:max-w-full">Never miss <span className='bg-egg bg-no-repeat bg-top bg-contain pt-10'><span className='bg-strike-text bg-no-repeat bg-center bg-contain bg-[length:140px_15px] px-2 opacity-100'>a day</span></span> again with Inito</h2>
                                <p className="mt-7 text-base italic font-medium leading-6 max-md:max-w-full">Inito tracks up to 6 fertile days and confirms ovulation by measuring all 4 hormones in just 10 minutes:</p>
                                <div className="mt-5">
                                    <ul className='flex flex-col gap-3'>
                                        <li className='flex gap-2'>
                                            <Image src={green} alt='' height={20} width={20} className='object-contain' />
                                            Estrogen, which rises 3-4 days before ovulation
                                        </li>
                                        <li className='flex gap-2'>
                                            <Image src={purple} alt='' height={20} width={20} className='object-contain' />
                                            LH, which surges 24-36 hours before ovulation
                                        </li>
                                        <li className='flex gap-2'>
                                            <Image src={blue} alt='' height={20} width={20} className='object-contain' />
                                            PdG, which rises after ovulation
                                        </li>
                                        <li className='flex gap-2'>
                                            <Image src={orange} alt='' height={20} width={20} className='object-contain' />
                                            FSH, to track follicle growth
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#E1F4FA] mt-60'>
                <FeatureSection />
            </section>
            <section className="mt-16 w-full md:container md:mx-auto md:px-36">
                <div>
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col px-5 mt-24 font-medium leading-6 text-gray-800 max-md:mt-10 max-md:max-w-full">
                                <h2 className="text-4xl font-bold leading-[50px] max-md:max-w-full">
                                    A <span className='bg-underline bg-[length:200px_8px] bg-no-repeat bg-bottom pb-1'>fertility lab</span> at <br /> your fingertips
                                </h2>
                                <p className="mt-10 text-base max-md:mt-10 max-md:max-w-full">
                                    Easy-to-read fertility diagnostic results directly on your iPhone¹, in just 10 minutes.
                                </p>
                                <div className='mt-10 max-md:hidden'>
                                    <Button text="Get the Inito Kit" />
                                </div>
                                <p className="mt-6 text-xs text-gray-400 max-md:max-w-full">
                                    * The Inito Fertility Monitor currently supports iPhone 7 and up. Android phones are not supported at the moment.
                                </p>
                                <Image height={100} width={100} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8e0f3ed61e0e352cc7af0454502caef679f77621e6ca5e4add502c5feb479f6?apiKey=04f95d2705624fe9a9121f14a6037de9&" alt="App Store badge" className="self-end mt-5 max-w-full aspect-[2.94] w-[134px]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-8 max-md:mt-10 ml-5 max-md:w-full md:w-6/12 max-md:ml-0 max-md:w-full justify-center items-center">
                            <div className='flex max-md:flex-col gap-8 max-md:items-center max-md:px-10'>
                                <div className="w-full md:w-6/12 flex flex-col gap-5 max-md:relative">
                                    <Image height={100} width={100} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ee62eb5151f17ef62174cdcc7557f7479f90fdb6bac18724fdff9b739b74e8e?apiKey=04f95d2705624fe9a9121f14a6037de9&" alt="Inito test strip" className="w-full aspect-[1.49] max-md:w-full max-md:mt-8" />
                                    <StepInstruction number={1} text="Dip the test strip in urine for 15 seconds." />
                                </div>
                                <div className="w-full md:w-6/12 flex flex-col gap-5 max-md:relative">
                                    <Image height={100} width={100} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4168f1948927b1d30dcb64b9ac9a1defd50b37635209b360f3a449292dcf0130?apiKey=04f95d2705624fe9a9121f14a6037de9&" alt="Inito device attached to phone" className="w-full ml-5 aspect-[1.49] max-md:w-full max-md:ml-0 max-md:mt-8" />
                                    <StepInstruction number={2} text="Attach the Inito Fertility Monitor to your iPhone*." />
                                </div>
                            </div>
                            <div className='flex max-md:flex-col gap-8 max-md:items-center max-md:px-10'>
                                <div className="w-full md:w-6/12 flex flex-col gap-5 max-md:relative">
                                    <Image height={100} width={100} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e45867debfe87c49a7f37835f57cbb681338fd5158274e873d44cfadffcdfe9d?apiKey=04f95d2705624fe9a9121f14a6037de9&" alt="Inserting test strip" className="w-full aspect-[1.49] max-md:w-full max-md:mt-8" />
                                    <StepInstruction number={3} text="Insert the test strip into the Inito Fertility Monitor." />
                                </div>
                                <div className="w-full md:w-6/12 flex flex-col gap-5 max-md:relative">
                                    <Image height={100} width={100} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cdedd723c11864df8db2869b8f52b18b94a5890e39c4fc935d999058ad940ecf?apiKey=04f95d2705624fe9a9121f14a6037de9&" alt="Inito app results" className="w-full ml-5 aspect-[1.49] max-md:w-full max-md:ml-0 max-md:mt-8" />
                                    <StepInstruction number={4} text="Get personalized results on our App in 10 minutes." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="md:container md:mx-auto px-8 md:px-36">
                <div className="flex flex-col px-12 py-6 mt-32 w-full font-medium text-gray-600 bg-slate-50 rounded-xl">
                    <Image height={10} width={70} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ced6e5a7e5618dd687036925ebe5f94f88dc788b012e14f1f02f3774ded2855?apiKey=04f95d2705624fe9a9121f14a6037de9&" alt="Five star rating" className='object-contain' />
                    <p className="mt-7">
                        This is my favorite fertility monitor I&apos;ve tried so far. I was cautious about ordering since there&apos;s very little info or reviews around the internet, but it seems to be a very well made and reliable device. It&apos;s totally fascinating to see my hormone levels on the chart! My LH levels don&apos;t cooperate with standard ovulation strips (I never get a positive with standard strips), so it&apos;s nice to see all the different hormones mapped out together.
                    </p>
                    <div className="flex md:hidden self-start font-semibold text-neutral-400 mt-4 text-cyan-600">Sunny</div>
                </div>
                <div className="flex gap-5 justify-center md:justify-between px-5 mt-5 w-full md:w-[658px]">
                    <div className="hidden md:flex self-start font-semibold text-neutral-400">Sunny</div>
                    <div className="flex flex-col">
                        <div className="flex gap-4 md:pr-32">
                            {[0, 1, 2, 3].map((index) => (
                                <div key={index} className={`shrink-0 w-2 h-2 rounded-full ${index === 0 ? 'bg-cyan-600' : 'bg-zinc-300'}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <FAQ faqs={faqQuestions} />
            <Footer />
        </div>
    );
};

interface StepInstructionProps {
    number: number;
    text: string;
}

const StepInstruction = ({ number, text }: StepInstructionProps) => {
    return (
        <div className="flex flex-1 gap-4">
            <div className='max-md:absolute max-md:top-0 max-md:left-[-20px]'>
                <div className="flex justify-center items-center px-6 text-2xl font-bold leading-8 whitespace-nowrap bg-gray-100 max-md:bg-cyan-200 rounded-full h-[60px] w-[60px] max-md:px-5">
                    {number}
                </div>
            </div>
            <div className="text-[0.9rem] text-slate-600 max-md:text-center max-md:w-8/12 max-md:mx-auto font-medium leading-6">
                {text}
            </div>
        </div>
    );
};

export default MainComponent;