"use client";

import Description from "@/components/Description";
import MyProfile from "@/components/MyProfile";
import Tracker from "@/components/Tracker";
import { useState } from "react";

const Home = () => {
	const [sectionActive, setSectionActive] = useState<string>("");

	return (
		<div className="flex xl:flex-row flex-col w-full xl:max-w-[1200px] mx-auto pt-6 pb-12  gap-8 xl:px-0 px-6">
			{/* Left sidebar */}
			<aside className="xl:w-[240px] xl:sticky xl:top-[110px] xl:max-h-[calc(100vh-110px)] xl:overflow-y-auto xl:self-start xl:pb-20 order-2 xl:order-1">
				<MyProfile />
			</aside>

			{/* Main content */}
			<main className="flex-1 flex flex-col gap-8  order-3 xl:order-2">
				<Description handleSectionActive={setSectionActive} />
			</main>

			{/* Right sidebar */}
			<aside className="xl:w-[240px] xl:sticky xl:top-[110px] xl:max-h-[calc(100vh-110px)] xl:overflow-y-auto xl:self-start order-1 xl:order-3 ">
				<Tracker sectionActive={sectionActive} />
			</aside>
		</div>
	);
};

export default Home;
