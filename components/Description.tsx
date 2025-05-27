"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
	RiTailwindCssFill,
	RiNodejsFill,
	RiBootstrapLine,
} from "react-icons/ri";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import {
	SiJquery,
	SiLaravel,
	SiNextdotjs,
	SiPostgresql,
	SiReact,
	SiShadcnui,
	SiTypescript,
	SiMongodb,
	SiPhp,
	SiAdobephotoshop,
	SiGoogleanalytics,
	SiGooglesearchconsole,
	SiLighthouse,
} from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import Image from "next/image";

const elementIds = [
	"roles",
	"frontend",
	"fullstack",
	"current",
	"futuro",
	"personal",
	"projekti",
	"skills",
	"stack",
	"frameworks",
	"additional",
];

const Description = ({
	handleSectionActive,
}: {
	handleSectionActive: (section: string) => void;
}) => {
	useEffect(() => {
		const handleScroll = () => {
			// console.log("scroll :", window.scrollY);
			elementIds.forEach((id) => {
				const roles = document.getElementById(`${id}`);

				if (
					window.scrollY >= roles?.offsetTop &&
					window.scrollY < roles?.offsetTop + roles?.offsetHeight
				) {
					handleSectionActive(roles.id);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section className="xl:mx-auto xl:w-[650px] flex flex-col gap-16">
			<div>
				<h2
					className="text-3xl text-slate-200 py-3 border-b-[1px] border-b-slate-200"
					id="roles"
				>
					Roles I'm searching for
				</h2>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-5 py-3" id="frontend">
						<h4 className="text-2xl font-bold">Frontend developer</h4>
						<div className="text-xl">
							I specialize in frontend development, with a solid foundation in
							HTML and CSS, using frameworks like Tailwind, Bootstrap, and
							ShadCN. I build responsive interfaces with JavaScript
							(TypeScript), React, and Next.js, and have beginner-level
							experience with Photoshop and Figma for translating UI designs
							into code. In my current role, we mainly work with WinterCMS to
							deliver custom CMS solutions tailored to client needs. I also have
							a basic understanding of SEO, which helps ensure the websites I
							build are optimized for visibility and performance.
						</div>
					</div>
					<div className="flex flex-col gap-5 py-3" id="fullstack">
						<h4 className="text-2xl font-bold">Fullstack developer</h4>
						<div className="text-xl">
							As a fullstack developer, I create complete web applications,
							combining strong frontend skills with backend capabilities. I use
							technologies like Node.js and databases such as PostgreSQL and
							MongoDB (with more focus on PSQL). I’ve also worked with PHP and
							Laravel at a basic level. In my job, we primarily use WinterCMS to
							develop custom CMS platforms for our clients, allowing for
							flexible and scalable content management. My work emphasizes clean
							architecture, user-friendly design, and performance across the
							full tech stack.
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2
					className="text-3xl text-slate-200 py-3 border-b-[1px] border-b-slate-200"
					id="current"
				>
					I'm currently working
				</h2>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-5 py-3" id="futuro">
						<h4 className="text-2xl font-bold">Futuro projects</h4>
						<div className="text-xl">
							I’ve been working for about a year at Futuro Internet Studio and
							Web Design, where we focus on building tailored web solutions for
							clients. We primarily use WinterCMS to develop flexible content
							management systems that are easy for clients to use and maintain.
							One of our most exciting current projects is designing a new
							website for the City of Zadar, alongside various other
							client-focused websites and CMS platforms. This role has given me
							hands-on experience with real-world projects and strengthened my
							skills in both frontend and backend development.
						</div>
					</div>
					<div className="flex flex-col gap-5 py-3" id="personal">
						<h4 className="text-2xl font-bold">Personal projects</h4>
						<div className="text-xl">
							In my free time, I actively work on personal projects to sharpen
							my skills and explore new technologies—especially on the backend
							side of development. I enjoy experimenting with different stacks
							and learning through hands-on practice. One of my personal
							achievements is building and launching{" "}
							<strong>
								<Link
									href="https://www.prehabilitationtherapycenter.hr"
									target="_blank"
									className="underline hover:text-slate-400 transition-all duration-300"
								>
									prehabilitationtherapycenter.hr
								</Link>
							</strong>
							, a fully functional website that is currently in production.
						</div>
					</div>
					<div className="flex flex-col gap-5 py-3" id="projekti">
						<h4 className="text-2xl font-bold">My projects</h4>
						<div className="grid xsm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-3">
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/prehab.jpg')] bg-cover group bg-no-repeat">
								<div className="absolute opacity-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-slate-200/80 group-hover:opacity-100 flex flex-col items-center justify-center w-full h-full gap-4">
									<p className="text-slate-800 text-xl text-center ">Prehab</p>
									<div className="text-slate-800 text-2xl w-[40px] h-[40px] rounded-full border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 transition-all duration-500">
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/dynamic_map.jpg')] bg-cover bg-no-repeat group">
								<div className="absolute opacity-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-slate-200/80 group-hover:opacity-100 flex flex-col items-center justify-center w-full h-full gap-4">
									<p className="text-slate-800 text-xl text-center ">Prehab</p>
									<div className="text-slate-800 text-2xl w-[40px] h-[40px] rounded-full border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 transition-all duration-500">
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/prehab.jpg')] bg-cover bg-no-repeat group">
								<div className="absolute opacity-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-slate-200/80 group-hover:opacity-100 flex flex-col items-center justify-center w-full h-full gap-4">
									<p className="text-slate-800 text-xl text-center ">Prehab</p>
									<div className="text-slate-800 text-2xl w-[40px] h-[40px] rounded-full border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 transition-all duration-500">
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/boulder.jpg')] bg-cover bg-no-repeat group">
								<div className="absolute opacity-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-slate-200/80 group-hover:opacity-100 flex flex-col items-center justify-center w-full h-full gap-4">
									<p className="text-slate-800 text-xl text-center ">Prehab</p>
									<div className="text-slate-800 text-2xl w-[40px] h-[40px] rounded-full border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 transition-all duration-500">
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/prehab.jpg')] bg-cover bg-no-repeat group">
								<div className="absolute opacity-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-slate-200/80 group-hover:opacity-100 flex flex-col items-center justify-center w-full h-full gap-4">
									<p className="text-slate-800 text-xl text-center ">Prehab</p>
									<div className="text-slate-800 text-2xl w-[40px] h-[40px] rounded-full border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 transition-all duration-500">
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/parallax.jpg')] bg-cover bg-no-repeat group">
								<div className="absolute opacity-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-slate-200/80 group-hover:opacity-100 flex flex-col items-center justify-center w-full h-full gap-4">
									<p className="text-slate-800 text-xl text-center ">Prehab</p>
									<div className="text-slate-800 text-2xl w-[40px] h-[40px] rounded-full border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 transition-all duration-500">
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/prehab.jpg')] bg-cover bg-no-repeat group">
								<div className="absolute opacity-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-slate-200/80 group-hover:opacity-100 flex flex-col items-center justify-center w-full h-full gap-4">
									<p className="text-slate-800 text-xl text-center ">Prehab</p>
									<div className="text-slate-800 text-2xl w-[40px] h-[40px] rounded-full border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 transition-all duration-500">
										+
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2
					className="text-3xl text-slate-200 py-3 border-b-[1px] border-b-slate-200"
					id="skills"
				>
					My skills include
				</h2>
				<div className="flex xl:flex-col xl:gap-8 gap-y-12 justify-between flex-wrap">
					<div className="flex flex-col gap-5 py-3" id="stack">
						<h4 className="text-2xl font-bold">Languages & Technologies</h4>
						<div className="text-xl w-[100px] max-w-[250px]">
							<p className="language">
								HTML <FaHtml5 />
							</p>
							<p className="language">
								CSS <IoLogoCss3 />
							</p>
							<p className="language">
								JS <IoLogoJavascript />
							</p>
							<p className="language">
								SQL <PiFileSqlFill />
							</p>
							<p className="language">
								PHP <SiPhp />
							</p>
							<p className="language">
								Git <FaGitAlt />
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-5 py-3" id="frameworks">
						<h4 className="text-2xl font-bold">Frameworks & Libraries</h4>
						<div className="text-xl">
							<div>
								<p>HTML</p>
								<ul className="ml-6 w-[170px]">
									<li className="language-list">
										Twig{" "}
										<Image
											src="/twig.svg"
											alt="twig icon"
											width={20}
											height={20}
										/>
									</li>
								</ul>
							</div>
							<div>
								<p>CSS</p>
								<ul className="ml-6 w-[170px]">
									<li className="language-list">
										Tailwind <RiTailwindCssFill />
									</li>
									<li className="language-list">
										Bootstrap <RiBootstrapLine />
									</li>
									<li className="language-list">
										ShadCN <SiShadcnui />
									</li>
								</ul>
							</div>
							<div>
								<p>JS</p>
								<ul className="ml-6 w-[170px]">
									<li className="language-list">
										React <SiReact />
									</li>
									<li className="language-list">
										Next <SiNextdotjs />
									</li>
									<li className="language-list">
										Node <RiNodejsFill />
									</li>
									<li className="language-list">
										TypeScript <SiTypescript />
									</li>
									<li className="language-list">
										JQuery <SiJquery />
									</li>
								</ul>
							</div>
							<div>
								<p>SQL</p>
								<ul className="ml-6 w-[170px]">
									<li className="language-list">
										PSQL <SiPostgresql />
									</li>
									<li className="language-list">
										MongoDB <SiMongodb />
									</li>
								</ul>
							</div>
							<div>
								<p>PHP</p>
								<ul className="ml-6 w-[170px]">
									<li className="language-list">
										Laravel <SiLaravel />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 py-3" id="additional">
						<h4 className="text-2xl font-bold">Additional</h4>
						<div className="text-xl">
							<div>
								<p>SEO</p>
								<ul className="ml-6 w-[270px]">
									<li className="language-list">
										Google Analytics <SiGoogleanalytics />
									</li>
									<li className="language-list">
										Google Search console <SiGooglesearchconsole />
									</li>
									<li className="language-list">
										Google Lighthouse <SiLighthouse />
									</li>
								</ul>
							</div>
							<div>
								<p>CMS</p>
								<ul className="ml-6 w-[270px]">
									<li className="language-list">
										Winter CMS{" "}
										<Image
											src="/wintercms.svg"
											alt="wintercms icon"
											width={20}
											height={20}
										/>
									</li>
								</ul>
							</div>
							<div>
								<p>Design</p>
								<ul className="ml-6 w-[270px]">
									<li className="language-list">
										Figma <IoLogoFigma />
									</li>
									<li className="language-list">
										Photoshop <SiAdobephotoshop />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Description;
