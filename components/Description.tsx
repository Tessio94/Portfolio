import Link from "next/link";
import React from "react";

const Description = () => {
	return (
		<main className="mx-auto w-[650px] flex flex-col gap-16">
			<div className="">
				<h2 className="text-3xl text-slate-200 py-3 border-b-[1px] border-b-slate-200">
					Roles I'm searching for
				</h2>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-5 py-3">
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
					<div className="flex flex-col gap-5 py-3">
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
				<h2 className="text-3xl text-slate-200 py-3 border-b-[1px] border-b-slate-200">
					I'm currently working
				</h2>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-5 py-3">
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
					<div className="flex flex-col gap-5 py-3">
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
									target="no_blank"
									className="underline hover:text-slate-400 transition-all duration-300"
								>
									prehabilitationtherapycenter.hr
								</Link>
							</strong>
							, a fully functional website that is currently in production.
						</div>
					</div>
				</div>
			</div>
			<div>
				<h2 className="text-3xl text-slate-200 py-3 border-b-[1px] border-b-slate-200">
					My skills include
				</h2>
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-5 py-3">
						<h4 className="text-2xl font-bold">Languages & Technologies</h4>
						<div className="text-xl">
							<p>HTML</p>
							<p>CSS</p>
							<p>JS</p>
							<p>Winter CMS</p>
							<p>SQL</p>
							<p>PHP</p>
							<p>Git</p>
						</div>
					</div>
					<div className="flex flex-col gap-5 py-3">
						<h4 className="text-2xl font-bold">Frameworks & Libraries</h4>
						<div className="text-xl">
							<div>
								<p>HTML</p>
								<ul>
									<li>Twig</li>
								</ul>
							</div>
							<div>
								<p>CSS</p>
								<ul>
									<li>Tailwind</li>
									<li>Bootstrap</li>
									<li>ShadCN</li>
								</ul>
							</div>
							<div>
								<p>JS</p>
								<ul>
									<li>React</li>
									<li>Next</li>
									<li>Node</li>
									<li>TypeScript</li>
									<li>JQuery</li>
								</ul>
							</div>
							<div>
								<p>SQL</p>
								<ul>
									<li>PSQL</li>
									<li>MongoDB</li>
								</ul>
							</div>
							<div>
								<p>PHP</p>
								<ul>
									<li>Laravel</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-5 py-3">
						<h4 className="text-2xl font-bold">Tools & Platforms</h4>
						<div className="text-xl">
							<p>Photoshop</p>
							<p>Figma</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Description;
