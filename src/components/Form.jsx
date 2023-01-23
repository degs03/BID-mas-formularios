import React from "react";
import './Forms.css';
const Form = props => {
        const {inputs, setInputs} = props;
        const { firstName, lastName, email, password, confirmPassword } = inputs;
        const onChange = (e) => {
            setInputs({
            ...inputs,
            [e.target.name]:e.target.value
        });
    }
        return (
            <form> 
                <h2>Form</h2>
                <div className="box">
                    <label htmlFor="firstName">First Name:</label>
                    <input onChange={onChange} className="Input" type="text" name="firstName" />     
                </div>
                    {
                        firstName.length<2 && firstName.length>0?
                        <p style ={{color:'red'}}>El campo debe tener al menos 2 caracteres </p> :
                        null
                    }  
                <div className="box">
                    <label htmlFor="lastName">Last Name:</label>
                    <input onChange={onChange} className="Input" type="text" name="lastName" /> 
                </div>
                    {
                        lastName.length<2 && lastName.length>0?
                        <p style ={{color:'red'}}>El campo debe tener al menos 2 caracteres</p> :
                        null
                    }
                <div className="box">
                    <label htmlFor="email">Email:</label>
                    <input onChange={onChange} className="Input" type="text" name="email" />
                </div>
                    {
                        email.length<5 && email.length>0?
                        <p style ={{color:'red'}}>El campo debe tener al menos 5 caracteres</p> :
                        null
                    }
                <div className="box">
                    <label htmlFor="password">Password:</label>
                    <input onChange={onChange} className="Input" type="password" name="password" />
                </div>
                    {
                        password.length<8 && password.length>0?
                        <p style ={{color:'red'}}>El campo debe tener al menos 8 caracteres</p> :
                        null
                    }
                <div className="box">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input onChange={onChange} className="Input" type="password" name="confirmPassword" />
                </div>
                    {
                        confirmPassword.length<8 && confirmPassword.length>0?
                        <p style ={{color:'red'}}>El campo debe tener al menos 8 caracteres</p> :
                        null
                    }   
                    {
                        password !== confirmPassword?
                        <p style ={{color:'red'}} >Las contraseñas deben coincidir</p>:
                        null
                    }
            </form>
        );
};

export default Form;