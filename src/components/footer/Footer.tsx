import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="w-full bg-white p-8 text-black">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                <Image src="https://res.cloudinary.com/dd6zbmehe/image/upload/v1704139362/inmobiliaria/icons/os5iwrewingzxbn9a8ks.svg" alt="Logo" width={100} height={100} className='h-8 w-auto' />
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Link
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            License
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contribute
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <span color="blue-gray" className="text-center font-normal">
                &copy; 2023 Company
            </span>
        </footer>
    );
}