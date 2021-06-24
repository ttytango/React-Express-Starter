import React, { useState } from "react";
import styles from "./Form.module.scss";

const Form = () => {
	const [text, setText] = useState("");
	function changeHandler(event) {
		setText(event.target.value);
	}
	function submitFormHandler(event) {
		event.preventDefault();
		console.log(text);
	}
	return (
		<div>
			<form
				onSubmit={submitFormHandler}
				onChange={changeHandler}
				className={styles.form}>
				<input type="text" value={text} name={text} />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Form;
