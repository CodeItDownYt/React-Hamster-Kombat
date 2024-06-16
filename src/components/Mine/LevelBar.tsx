import { ArrowUpCircleOutline, StatsChartOutline } from "react-ionicons";

const LevelBar = () => {
	return (
		<div className="w-full flex items-center justify-between">
			<div className="flex items-center gap-2">
				<ArrowUpCircleOutline
					cssClasses={"!text-green-500"}
					width={"32px"}
					height={"32px"}
				/>
				<div className="flex flex-col justify-center">
					<span className="text-[13px] text-[#9fa0a7]">Level up</span>
					<span>1200 / 5000 Pts</span>
				</div>
			</div>
			<div className="flex items-center gap-2">
				<StatsChartOutline
					cssClasses={"!text-green-500"}
					width={"32px"}
					height={"32px"}
				/>
				<div className="flex flex-col justify-center">
					<span className="text-[13px] text-[#9fa0a7]">+23%</span>
					<span>19,200</span>
				</div>
			</div>
		</div>
	);
};

export default LevelBar;
