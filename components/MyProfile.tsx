import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const MyProfile = () => {
	return (
		<div>
			{/* No fixed positioning, just the content */}
			<div className="flex xl:flex-col gap-7 h-fit pb-[20px] pr-3 flex-wrap md:flex-nowrap items-center md:items-start">
				<div className="rounded-full shrink-0 overflow-hidden w-[200px] h-[200px] border-2 border-slate-200/50 flex items-center justify-center  order-1">
					<CiUser className="text-slate-200 w-[80%] h-[80%]" />
				</div>
				<div className="flex flex-col gap-5 order-3 md:order-2">
					<h2 className="text-2xl font-bold">Šime Klapan</h2>
					<div className="text-xl">
						After working in finance sector I discovered a deep passion for
						coding and haven’t looked back since. <br />
						In the past two years, I’ve dedicated myself to learning software
						development and building real projects. I have hard-work mindset and
						like to solve complex problems.
					</div>
				</div>
				<div className="flex flex-col gap-5  md:mt-[52px] order-2 md:order-3 xl:mt-0">
					<a
						href="mailto:simeklapan@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-2xl hover:underline transition-all duration-300"
					>
						<MdOutlineEmail />
						Email
					</a>
					<a
						href="https://github.com/Tessio94"
						target="_blank"
						className="flex items-center gap-2 text-2xl hover:underline transition-all duration-300"
					>
						<FaGithub />
						Github
					</a>
					{/* <a
						href=""
						target="_blank"
						className="flex items-center gap-2 text-2xl hover:underline transition-all duration-300"
					>
						<CiLinkedin />
						Linkedin
					</a> */}
				</div>
			</div>
		</div>
	);
};

export default MyProfile;
