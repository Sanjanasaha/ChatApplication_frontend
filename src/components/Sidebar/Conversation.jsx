import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";
const Conversation = ({conversation,lastIdx}) => {
	const { selectedConversation, setSelectedConversation } = useConversation();
	const isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-orange-500  rounded p-2 py-1 cursor-pointer
			${isSelected?"bg-red-800 hover:bg-red-800":""}`}
			onClick={()=>setSelectedConversation(conversation)}
			>
				<div className={`avatar ${isOnline?"online":""}`}>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.profilePic} alt="user avatar"
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						{/* <p className='font-bold text-gray-200 '>{conversation.fullName}</p> */}
						<p className={`${isSelected ? "font-bold text-slate-200" : "font-bold text-red-800"}`}>{conversation.fullName}</p>
						
					</div>
				</div>
			</div>

			{!lastIdx && <div className='divider my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;