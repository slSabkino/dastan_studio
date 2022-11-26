import Account from "@components/account";
import headerProps from "types/headerTypes";

interface props {
	location: headerProps;
}
export default function HeaderMain(props: props) {
	const { base, category, subCategory } = props.location;

	return (
		<div className="header_wrapper">
			<div className="header">
				<Account />
				<div>{base}</div>
				{category && <div>{category} </div>}
				{subCategory && <div>{subCategory} </div>}
			</div>
		</div>
	);
}
