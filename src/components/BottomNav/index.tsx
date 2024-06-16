import { useState } from "react";
import { Flash, LogoBitcoin, People, PersonCircle, Settings } from "react-ionicons";

const BottomNav = () => {
	const [navItems, setNavItems] = useState([
		{ title: "Energy", icon: Flash, active: false },
		{ title: "Friends", icon: People, active: false },
		{ title: "Earn", icon: LogoBitcoin, active: true },
		{ title: "Settings", icon: Settings, active: false },
		{ title: "Profile", icon: PersonCircle, active: false },
	]);

	const handleActive = (title: string) => {
		setNavItems((prevItems) =>
			prevItems.map((item) => {
				return { ...item, active: item.title === title ? true : false };
			})
		);
	};
	return (
		<div className="w-full my-0 mx-auto rounded-2xl bg-[#012237] flex items-center justify-between p-2">
			{navItems.map((item) => (
				<div
					key={item.title}
					className={`flex flex-col gap-2 cursor-pointer rounded-xl items-center w-full py-[6px] ${
						item.active ? "bg-[#003e65]" : "bg-transparent"
					}`}
					onClick={() => handleActive(item.title)}
				>
					<item.icon
						cssClasses={
							item.active
								? "!text-[#fdb224] !fill-[#fdb224]"
								: "!text-[#818288] !fill-[#818288]"
						}
					/>
					<span
						className={`text-sm font-medium ${
							item.active ? "text-[#fdb224]" : "text-[#818288]"
						}`}
					>
						{item.title}
					</span>
				</div>
			))}
		</div>
	);
};

export default BottomNav;
