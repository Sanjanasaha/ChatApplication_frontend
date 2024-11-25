import { useState } from "react";
import GenderCheckbox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
	const [inputs, setInputs] = useState({
		fullName: "",
		userName: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});
	const { loading, signup } = useSignup();

	const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};
	const handleSubmit = async(e) => {
		e.preventDefault();
		await signup(inputs);
		// console.log(inputs);
	};

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-red-800'> ChatterBox</span>
				</h1>

				<form  onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='Enter fullname' className='w-full input input-bordered  h-10' value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value})} />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' value={inputs.userName} onChange={(e) => setInputs({ ...inputs, userName: e.target.value })} />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Confirm Password'
							className='w-full input input-bordered h-10' value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>

					<Link to={"/login"} className='text-sm hover:underline hover:text-red-900 mt-2 inline-block' href='#'>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border hover:text-red-900  border-slate-700 bg-red-700 hover:bg-orange-600 hover:font-bold text-gray-300 text-lg' disabled={loading}>{loading?<span className="loading loading-spinner"></span>:"Sign Up"}</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;