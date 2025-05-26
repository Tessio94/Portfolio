import Description from "@/components/Description";
import MyProfile from "@/components/MyProfile";
import Tracker from "@/components/Tracker";

const Home = () => {
  return (
    <div className="flex w-full max-w-[1200px] mx-auto pt-6 pb-12  gap-8">
      {/* Left sidebar */}
      <aside className="w-[240px] sticky top-[110px] max-h-[calc(100vh-110px)] overflow-y-auto self-start pb-20">
        <MyProfile />
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col gap-8">
        <Description />
      </main>

      {/* Right sidebar */}
      <aside className="w-[240px] sticky top-[110px] max-h-[calc(100vh-110px)] overflow-y-auto self-start">
        <Tracker />
      </aside>
    </div>
  );
};

export default Home;
