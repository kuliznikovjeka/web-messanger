import { authorization } from "./ui-elements.js";
import { DATA_SERVER } from "./dataFromServer.js";
import { showError, showSuccess } from "./utilits/utilits-functions.js";

async function sendCodeToUser(e) {
	e.preventDefault();
	const userEmail = authorization.inputEmail.value;

	const response = await fetch(DATA_SERVER.URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8'
		},
		body: JSON.stringify({ email: userEmail }),
	});

	response.ok ? showSuccess() : showError();
}

export { sendCodeToUser };

