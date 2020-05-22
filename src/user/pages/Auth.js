import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import "./Auth.css";
import {
	VALIDATOR_EMAIL,
	VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

const Auth = () => {
	const [formState, inputHandler] = useForm(
		{
			email: {
				value: "",
				isValid: false,
			},
			password: {
				value: "",
				isValid: false,
			},
		},
		false
	);

	return (
		<Card className="authentication">
			<h2>Login Required</h2>
			<hr />
			<form>
				<Input
					id="email"
					element="input"
					type="email"
					label="E-Mail"
					validators={[VALIDATOR_EMAIL()]}
					errorText="Please enter email"
					onInput={inputHandler}
				/>
				<Input
					id="password"
					element="password"
					type="password"
					label="Password"
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText="Please enter password"
					onInput={inputHandler}
				/>
				<Button type="submit" disabled={!formState.isValid}>
					Login
				</Button>
			</form>
		</Card>
	);
};

export default Auth;
