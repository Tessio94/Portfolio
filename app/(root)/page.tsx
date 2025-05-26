import Description from "@/components/Description";
import MyProfile from "@/components/MyProfile";
import Tracker from "@/components/Tracker";

const Home = () => {
	return (
		<div className="relative py-6 px-16">
			<MyProfile />
			<Description />
			<Tracker />
		</div>
	);
};

export default Home;
