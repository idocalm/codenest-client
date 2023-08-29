const Card = ({ title, subtitle, children }: any): JSX.Element => {
	return (
		<div className="flex flex-col items-center gap-3 border-2 border-[#2f2f2f] rounded-xl w-30 p-5">
			<div className="flex flex-col gap-3 justify-center items-center w-full text-center font-extrabold">
				<div className="flex flex-col items-center gap-3">
					<span className="text-4xl  font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-[#ff5100] to-[#9849ff]">
						{title}
					</span>
					<span className="text-xl text-white font-bold text-center">
						{subtitle}
					</span>
				</div>
			</div>
            <br/>
			{children}
		</div>
	);
};

export default Card;
