import { useEffect } from "react";
import Messages from "./Messages";
import {TiMessages} from "react-icons/ti";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageBox = () => {
    const {selectedConversation,setSelectedConversation}=useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation?(<NoChatSelected/>):
            (
			   <>
				{/* Header */}
				<div className='bg-red-800 px-4 py-4 mb-2'>
					<span className='label-text-bold text-white'>To:</span>{" "} <span className='text-white font-bold'>{selectedConversation.fullName}</span>
				</div>

				<Messages />
				<MessageInput />
			</>)}
		</div>
	);
};
export default MessageBox;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p className="text-red-900">Welcome 👋 {authUser.fullName}</p>
				<p className="text-red-900">Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center text-red-900' />
			</div>
		</div>
	);
};