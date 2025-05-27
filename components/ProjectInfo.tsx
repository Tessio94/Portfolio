import { cn } from "@/lib/utils";
import Image from "next/image";
import { CgCloseR } from "react-icons/cg";

const ProjectInfo = ({
	show,
	setShow,
}: {
	show: boolean;
	setShow: (toggle: boolean) => void;
}) => {
	return (
		<div
			className={cn(
				"fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-[1200px]  h-[800px] max-h-[calc(100vh-200px)] bg-gray-600 z-30 rounded-2xl flex items-start gap-12 px-30 py-20",
				show ? "max-w-[90%] opacity-100" : "opacity-0 max-w-0"
			)}
		>
			<div className="basis-1/3 flex-col gap-8 flex">
				<div className="w-full border-slate-200 border-2 h-[220px] rounded-2xl overflow-hidden">
					<Image
						src="/zadar.jpg"
						alt="zadar project cover"
						width={228}
						height={120}
						className="w-full h-full"
					/>
				</div>
				<p className="bold text-2xl underline">Stack</p>
				<ul className="list-disc">
					<li className="ml-4">React</li>
				</ul>
			</div>
			<div className="basis-2/3 flex flex-col gap-4">
				<h5 className="text-2xl bold underline">Zadar Boat Tour</h5>
				<p className="mt-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut veniam
					earum consequatur dolorum distinctio autem consectetur reprehenderit
					eius ipsa. Voluptas doloremque perspiciatis, unde adipisci illo labore
					obcaecati alias itaque ipsa! Nihil laborum pariatur totam cumque
					similique, voluptate incidunt adipisci delectus eos quidem repellat
					ratione dignissimos aliquam fugit quae in, provident libero vitae
					deleniti earum, enim nobis nostrum. Ipsum, minima beatae delectus
					iure, repellat deserunt mollitia nisi, culpa excepturi voluptatum
					laborum obcaecati provident qui totam pariatur! Architecto pariatur
					consequatur ab velit libero. Delectus aliquid perferendis eveniet
					vitae similique, voluptatum, ullam facilis in optio dolores
					reprehenderit fuga quo sapiente labore? Dolore, officia.
				</p>
				<p className="font-bold underline">Interesting things from project:</p>
				<ul className="list-disc flex flex-col gap-2">
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus unde
						quia nesciunt nemo architecto ad explicabo minima pariatur
						repudiandae quo.
					</li>
					<li>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
						tempore!
					</li>
					<li>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
						accusamus asperiores laboriosam architecto distinctio. Doloribus
						beatae architecto corporis. Architecto, aliquid.
					</li>
					<li>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
						ullam.
					</li>
				</ul>
			</div>
			<button
				className="absolute top-20 right-30 cursor-pointer"
				onClick={() => {}}
			>
				<CgCloseR className="text-slate-200 text-3xl hover:scale-105 transition-all duration-300" />
			</button>
		</div>
	);
};

export default ProjectInfo;
