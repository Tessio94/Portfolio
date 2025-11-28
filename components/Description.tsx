"use client";

// import Link from "next/link";
import React, { useEffect } from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import {
	RiTailwindCssFill,
	RiNodejsFill,
	RiBootstrapLine,
	RiArrowRightDoubleFill,
	RiArrowLeftDoubleFill,
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
	SiCpanel,
	SiNetlify,
	SiRender,
	SiPostman,
	SiSupabase,
} from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import Image from "next/image";
import ProjectInfo from "./ProjectInfo";
import { useProjectInfo } from "@/context/ProjectContext";

const elementIds = [
	"roles",
	"frontend",
	"fullstack",
	"current",
	"futuro",
	"personal",
	"projekti",
	"skills",
];

const Description = ({
	handleSectionActive,
}: {
	handleSectionActive: (section: string) => void;
}) => {
	// const [showOverlay, setShowOverlay] = useState<boolean>(false);
	const { dispatch } = useProjectInfo();

	useEffect(() => {
		const handleScroll = () => {
			// console.log("scroll :", window.scrollY);
			if (window.scrollY > 2300 && window.scrollY < 2350) {
				handleSectionActive("frameworks");
				return;
			}
			if (window.scrollY > 2350) {
				handleSectionActive("additional");
				return;
			}

			elementIds.forEach((id) => {
				const roles = document.getElementById(`${id}`);
				if (!roles) return;

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
	}, [handleSectionActive]);

	// console.log(showOverlay);

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
							I’ve been working at Futuro Internet Studio and Web Design since
							May of 2024. We focus on building tailored web solutions for
							clients. We primarily use WinterCMS (HTML, Twig, Jquery,
							Bootstrap, Laravel backend, MySQL) to develop flexible content
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
							and learning through hands-on practice. Most of my personal
							project i listed are built with Next.js, React or React + Node if
							it is web app.
						</div>
					</div>
					<div className="flex flex-col gap-5 py-3" id="projekti">
						<h4 className="text-2xl font-bold">My personal projects</h4>
						<h4 className="text-xl font-bold">Website</h4>
						<small className="hidden  italic text-xl lg:flex items-center gap-2 text-red-500">
							<RiArrowRightDoubleFill /> hover over project image and then click
							+ sign to get more info <RiArrowLeftDoubleFill />
						</small>
						<small className="lg:hidden  italic text-xl flex items-center gap-2 text-red-500">
							<RiArrowRightDoubleFill /> click + sign to get more info{" "}
							<RiArrowLeftDoubleFill />
						</small>
						{/* <small className="text-red-500">
              There may be a short wait for the project to load, as all of them
              are hosted using free services.*
            </small> */}
						<div className="grid xsm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-3">
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/plan41.jpg')] xl:bg-[url('/plan41_xl.jpg')] bg-cover group bg-no-repeat ">
								<div className="absolute lg:opacity-0 lg:translate-y-full lg:group-hover:translate-y-0   transition-all duration-500 lg:bg-slate-200/80 lg:group-hover:opacity-100  flex flex-col items-center justify-center w-full h-full gap-4 bg-slate-200/50 lg:pointer-events-none lg:group-hover:pointer-events-auto">
									<p className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 lg:rounded-none lg:border-0 lg:p-0 bg-slate-200 rounded-2xl py-1 px-2 font text-xl text-center ">
										Plan 41
									</p>
									<div
										className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 bg-slate-200 text-2xl w-[40px] h-[40px] rounded-full  lg:border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 active:bg-slate-800 focus:bg-slate-800 active:text-slate-200 focus:text-slate-200 transition-all duration-500"
										onClick={() =>
											dispatch({
												type: "SET_PROJECT_DATA",
												payload: {
													title: "Plan 41",
													img: "/plan41_info.jpg",
													stack: ["Next.js", "Tailwind"],
													link: "https://plan41.netlify.app/",
													description:
														"I built a professional website for Business Consulting Trade Plan 41 using Next.js to deliver fast, SEO-friendly, and scalable pages. Styled with Tailwind CSS, the site maintains a clean, modern, and fully responsive design. I implemented Nodemailer to handle email functionality, enabling seamless and secure message delivery directly from the contact form. The result is a streamlined, efficient online presence that effectively represents the consulting services offered.",
													points: [
														"Email form using nodemailer",
														"Toast confiramtion using sonner",
														"Transitions using motion react",
													],
												},
											})
										}
									>
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/nlstech.jpg')] xl:bg-[url('/nlstech_xl.jpg')] bg-cover group bg-no-repeat ">
								<div className="absolute lg:opacity-0 lg:translate-y-full lg:group-hover:translate-y-0   transition-all duration-500 lg:bg-slate-200/80 lg:group-hover:opacity-100  flex flex-col items-center justify-center w-full h-full gap-4 bg-slate-200/50 lg:pointer-events-none lg:group-hover:pointer-events-auto">
									<p className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 lg:rounded-none lg:border-0 lg:p-0 bg-slate-200 rounded-2xl py-1 px-2 font text-xl text-center ">
										NLS Tech
									</p>
									<div
										className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 bg-slate-200 text-2xl w-[40px] h-[40px] rounded-full  lg:border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 active:bg-slate-800 focus:bg-slate-800 active:text-slate-200 focus:text-slate-200 transition-all duration-500"
										onClick={() =>
											dispatch({
												type: "SET_PROJECT_DATA",
												payload: {
													title: "NLS Tech",
													img: "/nlstech_info.jpg",
													stack: ["Next.js", "Tailwind"],
													link: "https://nlstech.pro/",
													description:
														"I built a website for laser cleaning business using Next.js and Tailwind CSS for styling. I used nodemailer to enable contact form submissions directly to email.",
													points: [
														"Email form using nodemailer",
														"Toast confiramtion using sonner",
														"Transitions using motion react",
													],
												},
											})
										}
									>
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/prehab.jpg')] xl:bg-[url('/prehab_xl.jpg')] bg-cover group bg-no-repeat ">
								<div className="absolute lg:opacity-0 lg:translate-y-full lg:group-hover:translate-y-0   transition-all duration-500 lg:bg-slate-200/80 lg:group-hover:opacity-100  flex flex-col items-center justify-center w-full h-full gap-4 bg-slate-200/50 lg:pointer-events-none lg:group-hover:pointer-events-auto">
									<p className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 lg:rounded-none lg:border-0 lg:p-0 bg-slate-200 rounded-2xl py-1 px-2 font text-xl text-center ">
										Prehab
									</p>
									<div
										className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 bg-slate-200 text-2xl w-[40px] h-[40px] rounded-full  lg:border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 active:bg-slate-800 focus:bg-slate-800 active:text-slate-200 focus:text-slate-200 transition-all duration-500"
										onClick={() =>
											dispatch({
												type: "SET_PROJECT_DATA",
												payload: {
													title: "Prehab",
													img: "/prehab_info.jpg",
													stack: ["React", "Tailwind"],
													link: "https://prehabilitationtherapycenter.hr/",
													description:
														"I built a website for my friend’s physiotherapy clinic using React for dynamic components and Tailwind CSS for styling. React Router DOM handled navigation between pages. I integrated EmailJS to enable contact form submissions directly to email, creating a responsive, professional, and functional online presence tailored to his clinic's needs.",
													points: [
														"client side navigation with react-router-dom",
														"Meta tags implementation using React Helmet",
														"email form using emailjs library",
													],
												},
											})
										}
									>
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/lito.jpg')] xl:bg-[url('/lito_xl.jpg')] bg-cover group bg-no-repeat ">
								<div className="absolute lg:opacity-0 lg:translate-y-full lg:group-hover:translate-y-0   transition-all duration-500 lg:bg-slate-200/80 lg:group-hover:opacity-100  flex flex-col items-center justify-center w-full h-full gap-4 bg-slate-200/50 lg:pointer-events-none lg:group-hover:pointer-events-auto">
									<p className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 lg:rounded-none lg:border-0 lg:p-0 bg-slate-200 rounded-2xl py-1 px-2 font text-xl text-center ">
										Lito adventure
									</p>
									<div
										className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 bg-slate-200 text-2xl w-[40px] h-[40px] rounded-full  lg:border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 active:bg-slate-800 focus:bg-slate-800 active:text-slate-200 focus:text-slate-200 transition-all duration-500"
										onClick={() =>
											dispatch({
												type: "SET_PROJECT_DATA",
												payload: {
													title: "Lito adventure",
													img: "/lito_info.jpg",
													stack: [
														"Next.js",
														"Tailwind",
														"nodemailer",
														"sonner",
														"framer motion",
													],
													link: "https://lito-adventure.com/",
													description:
														"I developed a website for Lito Adventure, a bike tour business based in Zadar, using Next.js to deliver a fast, SEO-friendly experience. For dynamic visual appeal, I implemented Swiper for interactive image galleries and Framer Motion for smooth animations throughout the site. The contact form is powered by Nodemailer, enabling direct email inquiries, and Sonner provides responsive toast notifications to enhance user interaction. The result is a sleek, responsive platform that showcases the tours and simplifies customer engagement.",
													points: [
														"contact form using node mailer",
														"toast using sonner",
														"gallery using swipper",
													],
												},
											})
										}
									>
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/dynamic_map.jpg')] xl:bg-[url('/dynamic_map_xl.jpg')] bg-cover bg-no-repeat group ">
								<div className="absolute lg:opacity-0 lg:translate-y-full lg:group-hover:translate-y-0   transition-all duration-500 lg:bg-slate-200/80 lg:group-hover:opacity-100  flex flex-col items-center justify-center w-full h-full gap-4 bg-slate-200/50 lg:pointer-events-none lg:group-hover:pointer-events-auto">
									<p className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 lg:rounded-none lg:border-0 lg:p-0 bg-slate-200 rounded-2xl py-1 px-2 font text-xl text-center ">
										Dynamic parking map Zadar
									</p>
									<div
										className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 bg-slate-200 text-2xl w-[40px] h-[40px] rounded-full  lg:border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 active:bg-slate-800 focus:bg-slate-800 active:text-slate-200 focus:text-slate-200 transition-all duration-500"
										onClick={() =>
											dispatch({
												type: "SET_PROJECT_DATA",
												payload: {
													title: "Dynamic parking map Zadar",
													img: "/dynamic_map_info.jpg",
													stack: [
														"JQuery",
														"MapLibre",
														"Terradraw",
														"OpenFreeMap",
													],
													link: "https://sime-map.netlify.app/",
													description:
														"Created an interactive map using MapLibre GL JS, a free and open-source fork of Mapbox GL JS, developed before Mapbox became commercial. For map data, I used free vector tiles from OpenFreemap, based on OpenStreetMap. This setup allowed full customization and interactivity without any licensing fees or usage limits.",
													points: [
														"hover over markers to se tooltip",
														"markers styled based on parking zones",
														"zone created using terradraw",
														"zone colors are clickable to show an information container",
														"icon markers also clickable",
														"hover over sms parking element to get more info",
														"click to toggle 3D map",
														"use navigation to toggle parts of map",
													],
												},
											})
										}
									>
										+
									</div>
								</div>
							</div>
						</div>
						<h4 className="text-xl font-bold">Web app</h4>
						<div className="grid xsm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-3">
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/boulder.jpg')] xl:bg-[url('/boulder_xl.jpg')] bg-cover bg-no-repeat  group">
								<div className="absolute lg:opacity-0 lg:translate-y-full lg:group-hover:translate-y-0   transition-all duration-500 lg:bg-slate-200/80 lg:group-hover:opacity-100  flex flex-col items-center justify-center w-full h-full gap-4 bg-slate-200/50 lg:pointer-events-none lg:group-hover:pointer-events-auto">
									<p className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 lg:rounded-none lg:border-0 lg:p-0 bg-slate-200 rounded-2xl py-1 px-2 font text-xl text-center ">
										Bouldermeet
									</p>
									<div
										className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 bg-slate-200 text-2xl w-[40px] h-[40px] rounded-full  lg:border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 active:bg-slate-800 focus:bg-slate-800 active:text-slate-200 focus:text-slate-200 transition-all duration-500text-slate-800  duration-500"
										onClick={() =>
											dispatch({
												type: "SET_PROJECT_DATA",
												payload: {
													title: "Bouldermeet",
													img: "/Boulder_info.jpg",
													stack: [
														"PayloadCMS",
														"Next.js",
														"Typescrript",
														"PostgreSQL",
														"Tailwind",
														"Docker",
														"Nginx",
														"Linux Ubuntu server",
													],
													link: "https://bouldermeet.com/",
													description:
														"I've built a web app for boulder climbing competitions. The app is made using PayloadmCMS (CMS built on Next.js). The clients are able to log in using their account, apply for events, submit they results, check the news. Also the admin panel allows owner of the site to publish events, news, and keep scoreboards on different events. Every event can have multiple categories (male, women and based on age), multiple routes with multiple stages. Clients are able to see history of their results and all the events they attended to. To publish the website on VPS i used docker swarm, where i have payload, postgres, nginx, certbot and watctower containers.",
													points: [
														"create an account and log in",
														"apply for events and submit results",
														"check resutls history",
														"create everything on payloadCMS admin panel",
														"postgreSQL as database",
														"published using docker on vps",
													],
												},
											})
										}
									>
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/insignia.jpg')] xl:bg-[url('/insignia_xl.jpg')] bg-cover bg-no-repeat  group">
								<div className="absolute lg:opacity-0 lg:translate-y-full lg:group-hover:translate-y-0   transition-all duration-500 lg:bg-slate-200/80 lg:group-hover:opacity-100  flex flex-col items-center justify-center w-full h-full gap-4 bg-slate-200/50 lg:pointer-events-none lg:group-hover:pointer-events-auto">
									<p className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 lg:rounded-none lg:border-0 lg:p-0 bg-slate-200 rounded-2xl py-1 px-2 font text-xl text-center ">
										Insignia
									</p>
									<div
										className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 bg-slate-200 text-2xl w-[40px] h-[40px] rounded-full  lg:border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 active:bg-slate-800 focus:bg-slate-800 active:text-slate-200 focus:text-slate-200 transition-all duration-500text-slate-800  duration-500"
										onClick={() =>
											dispatch({
												type: "SET_PROJECT_DATA",
												payload: {
													title: "Insignia",
													img: "/insignia_info.jpg",
													stack: [
														"React",
														"Tailwind",
														"Node",
														"Express",
														"PostgreSQL",
													],
													link: "https://app2.tessio94.com/",
													description:
														"I built a physiotherapy web app with full booking functionality using React, Tailwind CSS, and shadcn/ui for a modern, responsive UI. Users can choose therapists, select services, and book appointments up to two weeks in advance. I used Node.js and Express to build the backend API, with PostgreSQL managing booking data, therapists, and availability. React Router DOM handled navigation, and an admin panel lets staff manage appointments and clinic resources efficiently.",
													points: [
														"choose from 6 therapist that each provide 3 different services",
														"book appointment two weeks in advance",
														"the user needs to log in to book",
														"login, register, Google 0auth, Facebook 0auth implemented",
														"full admin panel with CRUD functionality for admin",
														"data dashboard for admins",
													],
												},
											})
										}
									>
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/todo.jpg')] xl:bg-[url('/todo_xl.jpg')] bg-cover bg-no-repeat  group">
								<div className="absolute lg:opacity-0 lg:translate-y-full lg:group-hover:translate-y-0   transition-all duration-500 lg:bg-slate-200/80 lg:group-hover:opacity-100  flex flex-col items-center justify-center w-full h-full gap-4 bg-slate-200/50 lg:pointer-events-none lg:group-hover:pointer-events-auto">
									<p className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 lg:rounded-none lg:border-0 lg:p-0 bg-slate-200 rounded-2xl py-1 px-2 font text-xl text-center ">
										ToDo
									</p>
									<div
										className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 bg-slate-200 text-2xl w-[40px] h-[40px] rounded-full  lg:border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 active:bg-slate-800 focus:bg-slate-800 active:text-slate-200 focus:text-slate-200 transition-all duration-500"
										onClick={() =>
											dispatch({
												type: "SET_PROJECT_DATA",
												payload: {
													title: "Todo",
													img: "/todo_info.jpg",
													stack: ["React", "Tailwind", "Node", "Postgresql"],
													link: "https://app1.tessio94.com/",
													description:
														"I developed a to-do application using React for the frontend and Node.js with Express for the backend. The app features full CRUD functionality, allowing users to create, read, update, and delete tasks in real-time. PostgreSQL handles data persistence, ensuring tasks are stored reliably and efficiently. The interface is clean and responsive, built with Tailwind CSS, and provides a smooth user experience for managing daily tasks.",
													points: [
														"client side navigation with react-router-dom",
														"used react context to share and manipulate state through components",
														"full CRUD functionality",
													],
												},
											})
										}
									>
										+
									</div>
								</div>
							</div>
							<div className="relative border-[1px] border-slate-200 h-[120px] bg-[url('/bus.jpg')] xl:bg-[url('/bus_xl.jpg')] bg-cover bg-no-repeat  group">
								<div className="absolute lg:opacity-0 lg:translate-y-full lg:group-hover:translate-y-0   transition-all duration-500 lg:bg-slate-200/80 lg:group-hover:opacity-100  flex flex-col items-center justify-center w-full h-full gap-4 bg-slate-200/50 lg:pointer-events-none lg:group-hover:pointer-events-auto">
									<p className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 lg:rounded-none lg:border-0 lg:p-0 bg-slate-200 rounded-2xl py-1 px-2 font text-xl text-center ">
										Bus app
									</p>
									<div
										className="text-slate-800 lg:bg-transparent border-[1px] border-slate-2 bg-slate-200 text-2xl w-[40px] h-[40px] rounded-full  lg:border-2 border-slate-800 flex items-center justify-center cursor-pointer hover:bg-slate-800 hover:text-slate-200 active:bg-slate-800 focus:bg-slate-800 active:text-slate-200 focus:text-slate-200 transition-all duration-500"
										onClick={() =>
											dispatch({
												type: "SET_PROJECT_DATA",
												payload: {
													title: "Bus app",
													img: "/bus_info.jpg",
													stack: [
														"Next",
														"TypeScript",
														"Tailwind",
														"PostgreSQL",
													],
													link: "https://busapp-75xe.onrender.com/",
													description:
														"I developed a full-stack bus reservation website where users can select destinations, choose travel dates, view available bus lines, and reserve seats in real time. Built with Next.js and TypeScript for a robust frontend and backend, styled using Tailwind CSS for a modern UI, and powered by PostgreSQL for secure and scalable data management, the platform offers a smooth and intuitive booking experience.",
													points: [
														"Full-stack development using Next.js (App Router) and TypeScript",
														"Dynamic routing and server-side rendering for optimal performance",
														"Seat reservation system with availability tracking",
														"PostgreSQL integration for persistent booking and schedule data",
													],
												},
											})
										}
									>
										+
									</div>
								</div>
							</div>
						</div>
						<div className="text-red-500 text-sm">
							Check the code on my github account:{" "}
							<a
								href="https://github.com/Tessio94"
								target="_blank"
								className="underline font-semibold text-md"
							>
								https://github.com/Tessio94
							</a>
							*
						</div>
						<ul className="list-disc ml-5 text-red-500 underline">
							<li>
								<a
									href="https://github.com/Tessio94/BoulderCMS"
									target="_blank"
								>
									BoulderCMS
								</a>
							</li>

							<li>
								<a
									href="https://github.com/Tessio94/physio-app"
									target="_blank"
								>
									Physio-app
								</a>
							</li>
							<li>
								<a href="https://github.com/Tessio94/BusApp" target="_blank">
									BusApp
								</a>
							</li>
							<li>
								<a href="https://github.com/Tessio94/Todo-App" target="_blank">
									Todo-App
								</a>
							</li>
						</ul>
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
				<div className="flex xl:gap-8 gap-y-12 justify-between flex-wrap">
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
								<p>Hosting</p>
								<ul className="ml-6 w-[270px]">
									<li className="language-list">
										Cpanel <SiCpanel />
									</li>
									<li className="language-list">
										Netlify <SiNetlify />
									</li>
									<li className="language-list">
										Supabase <SiSupabase />
									</li>
									<li className="language-list">
										Render <SiRender />
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
							<div>
								<p>API testing</p>
								<ul className="ml-6 w-[270px]">
									<li className="language-list">
										Postman <SiPostman />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ProjectInfo />
		</section>
	);
};

export default Description;
