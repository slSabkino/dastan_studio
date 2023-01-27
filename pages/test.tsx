import React, { useReducer } from "react";

type peyload = {
	keyName: string;
	value: string;
	index: number;
};

type field = {
	name: string;
	type: React.HTMLInputTypeAttribute;
	value: any;
	placeholder: string;
};

const filedsMap: field[] = [
	{ name: "username", type: "text", value: "a", placeholder: "username..." },
	{ name: "password", type: "password", value: "a", placeholder: "password ..." },
];

function inputMapper(dispacher: any, filedsMap: any): any {
	{
		// TODO switch case for radios and options
		return (
			<>
				{filedsMap.map((field: any, index: any) => {
					return (
						<input
							key={index}
							type={field.type}
							name={field.name}
							value={field.value}
							placeholder={field.placeholder}
							onChange={(e) => {
								dispacher({
									index,
									value: e.target.value,
								});
							}}
						/>
					);
				})}
			</>
		);
	}
}

function reducer(state: field[], peyload: peyload) {
	const newArr = [...state];
	const newObj = { ...newArr[peyload.index] };
	newObj.value = peyload.value;
	newArr[peyload.index] = newObj;
	return newArr;
}

export default function Test() {
	const [state, dispatch] = useReducer(reducer, filedsMap);

	return (
		<div className="apsodi">
			{inputMapper(dispatch, state)}

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

// function inputPerField(dispacher: any, obj: any) {
// 	return (
// 		<>
// 			{Object.keys(obj).map((key, index) => {
// 				return (
// 					<input
// 						key={index}
// 						type="text"
// 						value={obj.key}
// 						placeholder={key}
// 						onChange={(e) => {
// 							dispacher({
// 								keyName: key,
// 								value: e.target.value,
// 							});
// 						}}
// 					/>
// 				);
// 			})}
// 		</>
// 	);
// }

// function reducer(state: any, peyload: peyload) {
// 	return { ...state, [peyload.keyName]: peyload.value };
// }
