import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

const MyProfile = () => {
	return (
		<div className="fixed w-[240px] left-[calc(50%-600px)] top-[110px] max-h-screen overflow-y-scroll pr-6">
			<div className="flex flex-col gap-7 h-fit">
				<div className="rounded-full overflow-hidden w-[200px] h-[200px] border-2 border-slate-200/50 flex items-center justify-center">
					<CiUser className="text-slate-200 w-[80%]  h-[80%]" />
				</div>
				<div className="flex flex-col gap-5">
					<h2 className="text-2xl font-bold">Šime Klapan</h2>
					<div className="text-xl">
						After working in finance sector I discovered a deep passion for
						coding and haven’t looked back since. <br />
						In the past two years, I’ve dedicated myself to learning software
						development and building real projects. I have hard-work mindset and
						like to solve complex problems.
					</div>
				</div>
				<div className="flex flex-col gap-5">
					<Link href="" className="flex items-center gap-2 text-2xl">
						<MdOutlineEmail />
						Email
					</Link>
					<Link href="" className="flex items-center gap-2 text-2xl">
						<FaGithub />
						Github
					</Link>
					<Link href="" className="flex items-center gap-2 text-2xl">
						<CiLinkedin />
						Linkedin
					</Link>
				</div>
			</div>
		</div>
	);
};

export default MyProfile;
