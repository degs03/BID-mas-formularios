import React from "react";
import './Forms.css';
const Form = props => {
        const {inputs, setInputs} = props;
        const onChange = (e) => {
            setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        });
    };
        return (
            <form>
                <h2>Form</h2>
                <div className="box">
                    <label htmlFor="firstName">First Name:</label>
                    <input onChange={onChange} className="Input" type="text" name="firstName" />
                </div>
                <div className="box">
                    <label htmlFor="lastName">Last Name:</label>
                    <input onChange={onChange} className="Input" type="text" name="lastName" />
                </div>
                <div className="box">
                    <label htmlFor="email">Email:</label>
                    <input onChange={onChange} className="Input" type="text" name="email" />
                </div>
                <div className="box">
                    <label htmlFor="password">Password:</label>
                    <input onChange={onChange} className="Input" type="password" name="password" />
                </div>
                <div className="box">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input onChange={onChange} className="Input" type="password" name="confirmPassword" />
                </div>
            </form>
        );
};

export default Form;