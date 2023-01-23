import React from "react";
import './Result.css'
const Results = ({data}) =>{
    const { firstName, lastName, email, password, confirmPassword } = data;
    return(
        <>
        <div className="boxResult">
            <div className="content">
                <h2>You Form Data</h2>
                <p>First Name: <em>{firstName}</em></p>
                <p>Last Name: <em>{lastName}</em></p>
                <p>Email: <em>{email}</em></p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
        </>
    );
}
export default Results;