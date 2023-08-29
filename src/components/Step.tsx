const Step = ({ number, text }: { number: number; text: string }) => {
	return (
		<div className="flex flex-col items-center gap-3">
			<div className="w-8 h-8 font-extrabold flex justify-center items-center rounded-full text-[#ff8592] bg-[#ffe6f4]">
				{number}
			</div>
			<span className="font-bold text-center">{text}</span>
		</div>
	);
};

export default Step;