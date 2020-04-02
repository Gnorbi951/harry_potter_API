import React from 'react';
import styled from "styled-components";
import axios from "axios";


const OwlImage = styled.img`
    margin: 0 auto;
    min-width: 350px;
    max-height: 450px;
`;


const Application = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        axios({
            method: "POST", 
            url:"http://localhost:8888/application", 
            data: {
                name: name,   
                email: email                
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    return (
        <React.Fragment>
            <form  onSubmit={handleSubmit} method="POST">
                <label>Applicant's name: </label>
                <input type="text" id="name"></input>
                <label>Email: </label>
                <input type="email" id="email"></input>
                <button type="submit">submit application</button>
            </form>
            <OwlImage src='./subcomponents/images/owl.jpg'></OwlImage>
        </React.Fragment>
    )
}

export default Application;