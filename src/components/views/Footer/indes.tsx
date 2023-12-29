import { Logo } from "@/components/assets/Images";
import Image from "next/image";
import Link from "next/link";
import { ImGithub } from "react-icons/im"
import { GrYoutube } from "react-icons/gr"
import { BsTelephonePlusFill } from "react-icons/bs"
import { SiFacebook } from "react-icons/si"
import { IoLogoLinkedin } from "react-icons/io"
import { SiGmail } from "react-icons/si"


export default function Footer() {
    return (
        <div className={`w-full bg-[#F3F4F6] dark:bg-gradient-to-tl  from-darkBackgroundBottom via-darkBackgroundTop to-darkBackgroundBottom`}>
            <div className="pb-2 text-center bg-white dark:bg-darkBackgroundTop rounded-t-3xl w-full">
                <div className={`py-4 flex items-center justify-around text-center`}>
                    <div className="hidden sm:flex items-center space-x-1">
                        <Image className="block" width={45} src={Logo} alt="Ahmer Logo" />
                        <Link href="/"><h5 className="text-heading font-bold text-xl dark:text-[#aab5c5]">Ahmer  <span className="font-semibold">Ali</span></h5></Link>
                    </div>
                    <ul className="flex justify-center items-center space-x-4">
                        <li><Link aria-label="Github username" href="https://github.com/Ahmer-Rafique" target="_blank"><ImGithub fill="#7A879B" size={26} /></Link></li>
                        <li><Link aria-label="Youtube channel" href="https://www.youtube.com" target="_blank"><GrYoutube fill="#7A879B" size={24} /></Link></li>
                        <li><Link aria-label="call me throught mobile" href="tel:+923204896766"><BsTelephonePlusFill fill="#7A879B" size={22} /></Link></li>
                        <li><Link aria-label="reach me on Facebook" href="https://www.facebook.com" target="_blank"><SiFacebook fill="#7A879B" size={26} /></Link></li>
                        <li><Link aria-label="My LinkedIn" href="https://www.linkedin.com/in/ahmer-ali-483470253/" target="_blank"><IoLogoLinkedin fill="#7A879B" size={26} /></Link></li>
                        <li><Link aria-label="Mail me for give me work" href="mailto:ahmerali1771@gmail.com"><SiGmail fill="#7A879B" size={26} /></Link></li>
                    </ul>
                </div>
                <p className="text-subHeading dark:text-gray-400">© 2023 Ahmer-Ali All CopyRights Reserved</p>
            </div>
        </div>
    )
};