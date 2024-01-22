import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebook } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import Image from "next/image";
import like from "../../public/like.png"
import Link from "next/link";


interface HeaderProps {
    isCompact: boolean;
}

const Header: React.FC<HeaderProps> = ({ isCompact }) => {
    const horizontalPadding = isCompact ? "px-[11.6rem]" : "px-[2.5rem]";
    const headerCTAWidth = isCompact ? "w-[72%]" : "w-[59%]";
    const headerLogoWidth = isCompact ? "w-[31%]" : "w-[20%]";
    const headerIconsWidth = isCompact ? "w-[31%]" : "w-[23%]";


    return (
        <div>
            <div className={`bg-[#23856D] ${horizontalPadding} py-5 flex items-center justify-between`}>
                <div className="flex items-center ">
                    <div className="flex items-center mr-7">
                        <FiPhone className="text-[16px] mr-1" />
                        <p className="text-[14px] font-[600]">(225) 555-0118</p>
                    </div>
                    <div className="flex items-center ">
                        <TfiEmail className="text-[16px] mr-1 rounded-sm" />
                        <p className="text-[14px] font-[600]">michelle.rivera@example.com</p>
                    </div>
                </div>
                <div>
                    <p className="text-[14px] font-[600]">Follow Us  and get a chance to win 80% off</p>
                </div>
                <div className="flex">
                    <p className="text-[14px] font-[600] mr-4">Follow Us :</p>
                    <div className="flex items-center text-[18px]">
                        <SlSocialInstagram className=" mr-4 rounded-sm " />
                        <TiSocialYoutube className=" mr-4 rounded-sm text-[22px] " />
                        <FaFacebook className=" mr-4 rounded-sm" />
                        <TiSocialTwitter className="text-[22px]" />
                    </div>
                </div>
            </div>

            <div className={`flex ${horizontalPadding} py-5 items-center justify-between px-3`}>
                <div className={`flex items-center ${headerCTAWidth}`}>
                    <div className={`text-[#252B42] text-[21px] font-[700] mr-9 ${headerLogoWidth}`}>
                        Bandage
                    </div>
                    <div className="flex text-[#737373] text-[14px] font-[600] justify-around w-[50%]">
                        <Link href="/"> <p>Home</p></Link>
                        <p className="flex items-center">Shop <FiChevronDown className="ml-1 text-[16px]" /></p>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Contact</p>
                        <p>Pages</p>
                    </div>
                </div>
                <div className={`flex text-[#23A6F0] text-[14px] font-bold ${headerIconsWidth}`}>
                    <div className="flex items-center mr-6"> <FaRegUser className="mr-2 text-[13px]" /> Login / Register</div>
                    <div className="flex items-center mr-8"><BsSearch className="text-[15px]" /></div>
                    <div className="flex items-center mr-8 font-normal"><BsCart className="text-[15px] mr-1" /> <p>1</p></div>
                    <div className="flex items-center font-normal">
                        <Image src={like} alt="like" width={18} height={18} className="mr-1" />
                        <p>1</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;