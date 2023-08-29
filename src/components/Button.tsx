const Button = ({ onClick, children }: any) => {
	return (
		<button onClick = {onClick} className="flex justify-center items-center text-white  font-bold p-3 rounded-lg bg-gradient-to-tr from-[#ff5100] to-[#9849ff]">
			{children}
		</button>
	);
};

export default Button;
