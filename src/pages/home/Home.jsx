import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MessageBox from "../../components/messages/MessageBox.jsx";
const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageBox />
		</div>
	);
};
export default Home;