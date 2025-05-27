"use client";

import React, { useEffect } from "react";

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

const Tracker = ({ sectionActive }: { sectionActive: string }) => {
	useEffect(() => {
		elementIds.forEach((dataTarget) => {
			const element = document.querySelector(`[data-target="${dataTarget}"]`);
			if (element.dataset.target === sectionActive) {
				element.style.background = "#e2e8f066";
			} else {
				element.style.background = "";
			}
		});
	}, [sectionActive]);

	return (
		<ul className="flex flex-col">
			<li>
				<a
					href="#roles"
					className="px-2 text-xl font-extrabold text-slate-200 border-2  border-slate-200 py-1 inline-block w-full"
					data-target="roles"
				>
					Role I'm searching for...
				</a>

				<ul>
					<li>
						<a
							className="text-xl text-slate-200 border-[1px]  border-slate-200 py-1 px-2 inline-block w-full"
							href="#frontend"
							data-target="frontend"
						>
							Frontend developer
						</a>
					</li>
					<li>
						<a
							className="text-xl text-slate-200 border-[1px]  border-slate-200 py-1 px-2 inline-block w-full"
							href="#fullstack"
							data-target="fullstack"
						>
							Fullstack developer
						</a>
					</li>
				</ul>
			</li>
			<li>
				<a
					className="px-2 text-xl font-extrabold text-slate-200 border-2  border-slate-200 py-1 inline-block w-full"
					href="#current"
					data-target="current"
				>
					I'm currently working on
				</a>
				<ul>
					<li>
						<a
							className="text-xl text-slate-200 border-[1px]  border-slate-200 py-1 px-2 inline-block w-full"
							href="#futuro"
							data-target="futuro"
						>
							Futuro projects
						</a>
					</li>
					<li>
						<a
							className="text-xl text-slate-200 border-[1px]  border-slate-200 py-1 px-2 inline-block w-full"
							href="#personal"
							data-target="personal"
						>
							Personal projects
						</a>
					</li>
					<li>
						<a
							className="text-xl text-slate-200 border-[1px]  border-slate-200 py-1 px-2 inline-block w-full"
							href="#projekti"
							data-target="projekti"
						>
							List of my projects
						</a>
					</li>
				</ul>
			</li>
			<li>
				<a
					className="px-2 text-xl font-extrabold text-slate-200 border-2  border-slate-200 py-1 block"
					href="#skills"
					data-target="skills"
				>
					My skills include
				</a>

				<ul>
					<li>
						<a
							className="text-xl text-slate-200 border-[1px]  border-slate-200 py-1 px-2 inline-block w-full"
							href="#stack"
							data-target="stack"
						>
							Stack
						</a>
					</li>
					<li>
						<a
							className="text-xl text-slate-200 border-[1px]  border-slate-200 py-1 px-2 inline-block w-full"
							href="#frameworks"
							data-target="frameworks"
						>
							Frameworks & Libraries
						</a>
					</li>
					<li>
						<a
							className="text-xl text-slate-200 border-[1px]  border-slate-200 py-1 px-2 inline-block w-full"
							href="#additional"
							data-target="additional"
						>
							Additional
						</a>
					</li>
				</ul>
			</li>
		</ul>
	);
};

export default Tracker;
