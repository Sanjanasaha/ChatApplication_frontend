import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};
	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-orange-300 border-red-900 text-black placeholder-red-800 font-bold'
					placeholder='Send a message...'
					value={message}
					onChange={(e)=>setMessage(e.target.value)}
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
				    {loading? <div className="loading loading-spinner"></div>:<BsSend className="text-red-900 font-bold " size={20}/>}
					{/* <BsSend className="text-red-900 font-bold " size={20}  /> */}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;