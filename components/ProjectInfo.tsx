import { useProjectInfo } from "@/context/ProjectContext";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CgCloseR } from "react-icons/cg";

const ProjectInfo = () => {
  const { dispatch, state } = useProjectInfo();

  console.log(state);

  return (
    <div
      className={cn(
        "fixed inset-0 backdrop-blur-xs z-20 flex items-center justify-center transition-all duration-300",
        state.show
          ? "opacity-100  visible  max-h-screen"
          : "opacity-0 max-h-0 invisible"
      )}
    >
      <div className="relative w-[1200px] max-w-[90%]  h-[800px] bg-stone-800 border-2 border-slate-200 z-30 rounded-2xl flex lg:flex-row flex-col items-center lg:items-start gap-12 px-6 lg:px-20 xl:px-30 py-20  overflow-y-scroll">
        <div className="basis-1/3 flex-col gap-8 flex">
          <div className="w-full max-w-[481px] border-slate-200 border-2 h-[220px] rounded-2xl overflow-hidden">
            <Image
              src={state.img}
              alt={state.imgAlt}
              width={228}
              height={120}
              className="w-full h-full"
            />
          </div>
          <div className="flex xsm:flex-col flex-row lg:flex-col gap-8 justify-between">
            <div className="flex flex-col gap-4 xsm:order-2">
              <p className="bold text-2xl underline">Stack</p>
              <ul className="list-disc">
                {state.stack.map((language, i) => {
                  return (
                    <li key={i} className="ml-4">
                      {language}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="font-bold underline">Link to project:</p>
              <a
                href={state.link}
                target="_blank"
                className="hover:underline transition-all duration-300 active:underline focus:underline"
              >
                {state.link}
              </a>
            </div>
          </div>
        </div>
        <div className="basis-2/3 flex flex-col gap-4">
          <h5 className="text-2xl bold underline">{state.title}</h5>
          <p className="mt-4">{state.description}</p>
          <p className="font-bold underline">
            Interesting things from project:
          </p>
          <ul className="list-disc flex flex-col gap-2">
            {state.points.map((point, i) => {
              return <li key={i}>{point}</li>;
            })}
          </ul>
        </div>
        <button
          className="absolute top-6 lg:top-20 right-6 lg:right-20 xl:right-30 cursor-pointer"
          onClick={() => {
            dispatch({ type: "HIDE_PROJECT" });
          }}
        >
          <CgCloseR className="text-slate-200 text-3xl hover:scale-105 active:scale-105 focus:scale-105 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
};

export default ProjectInfo;
