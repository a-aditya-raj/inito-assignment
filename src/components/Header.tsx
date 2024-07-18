import Logo from './Logo';
import NavItem from './NavItem';
import Button from './Button';
import src from './../../public/images/Logo.svg';

interface HeaderProps {
    navItems: string[];
}

const Header = ({ navItems }: HeaderProps) => {
    return (
        <header className="flex sticky top-[0] justify-center items-center px-4 md:px-16 md:py-5 w-full text-center bg-white h-[60px] md:h-[80px] fixed top-0 bg-white z-[51]">
            <div className="flex justify-between w-full max-w-screen-lg max-md:flex-wrap max-md:max-w-full">
                <div className='flex align-center gap-4 my-auto'>
                    <div className="ham-menu flex md:hidden">
                        <div className="py-[2.5px]">
                            <div className="mb-[6px] w-[25px] h-[3px] bg-[#112d35] rounded-sm"></div>
                            <div className="mb-[6px] w-[25px] h-[3px] bg-[#112d35] rounded-sm"></div>
                            <div className="w-[25px] h-[3px] bg-[#112d35] rounded-sm"></div>
                        </div>
                    </div>
                    <Logo src={src} alt="Company logo" />
                </div>
                <nav className="flex gap-5 justify-end">
                    <div className="hidden md:flex gap-14 justify-center my-auto text-base text-gray-800 mx-3">
                        {navItems.map((item, index) => (
                            <NavItem key={index} text={item} />
                        ))}
                    </div>
                    <Button text="Try Inito" />
                </nav>
            </div>
        </header>
    );
};

export default Header;