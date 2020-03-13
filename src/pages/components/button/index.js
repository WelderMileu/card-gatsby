import React from 'react';

const Button = props => {
	// Array padrão style dos botões.
	const model = ["btn", "focus:outline-none", "hover:opacity-50", "sm:w-40"];

	// Config Outline
	const model1 = [`${props.bg}`,"text-white"];
	const outline = model.concat(model1);

	// Config  Outline-none
	const model2 = [`${props.bg}`,"border","border-green-800","text-green-800"];
	const outlineNone = model.concat(model2);

	// Validando o tipo o button.
	function styleBtn() {
		switch(props.style) {
			case "outline":
				return outline.join(" ");
				break;
			case "outline-none":
				return outlineNone.join(" ");
				break;
			default:
				return null;
		}
	}

	return (
		<div className="mt-5">
			<button 
				type="button" 
				className={ styleBtn() }>
					{props.content}
			</button>
		</div>
	);
}

export default Button;
