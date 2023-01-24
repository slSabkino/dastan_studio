import React, { useReducer } from "react";

type peyload = {
	keyName: string;
	value: string;
};

export default function Test() {
	const [state, dispatch] = useReducer(reducer, {
		username: "",
		firstName: "",
	});

	function reducer(state: any, peyload: peyload) {
		return { ...state, [peyload.keyName]: peyload.value };
	}

	function inputPerField(obj: any) {
		return (
			<>
				{Object.keys(obj).map((key, index) => {
					return (
						<input
							key={index}
							type="text"
							value={obj.key}
							placeholder={key}
							onChange={(e) => {
								dispatch({
									keyName: key,
									value: e.target.value,
								});
							}}
						/>
					);
				})}
			</>
		);
	}

	return (
		<div className="apsodi">
			{inputPerField(state)}

			<button
				onClick={() => {
					console.log(state);
				}}
			>
				log
			</button>
		</div>
	);
}
