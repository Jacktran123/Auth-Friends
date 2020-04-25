import React from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const Container= styled.div`
    display: flex;
    flex-flow: row;
`;

const Image=styled.img`
    width: 50%;
    height: 100vh;
    
    

`;

const Form=styled.form`
    background: black;
    border-left: 2px solid RGB(255, 13, 191);
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
   
    
`;

const ContainerForm= styled.div`
    border: 2px solid RGB(255, 13, 191);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 70vh;
    width: 40vw;
    input{
        border-radius: 10px;
        margin-top: 2%;
        margin-bottom: 3%;
        width: 50%;
        font-size: calc(6px + 2vw);
        margin-left: 10px;
        border: 3px solid #FFFFFF;
    }
    h1{
        font-size: calc(8px + 3vw);
        color: #ef6eae;

    }
    label{
        font-weight: 100;
        font-size: calc(6px + 2vw);
        margin-left: 5%;
        color: #ef6eae;
    }
    button{
        background: black;
        border: 1px solid #ef6eae;
        color: #ef6eae;
        top: 500px;
        right: 100px;
        font-weight: 800;
        font-size: 1.2rem;
        position: fixed;
        padding: 1% 3%;
        border-radius: 20px;
        margin: 20px;
        margin-top: 2%;
        &:hover,
        &:focus {
        box-shadow: 0 0.5em 0.5em -0.4em ;
        transform: translateY(-0.25em);
        cursor: pointer;
        }
            

    }
`;


export default function LoginForm() {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)
     
    return ( 
        <Container>
            <Image  src='https://c.stocksy.com/a/yiv300/z9/936880.jpg' /> 
      <Form onSubmit={handleSubmit(onSubmit)}>
          <ContainerForm>
            <h1> Friends <span style={{color: 'white'}}>&</span> Connect </h1>
            <div>
            <label> Username: </label>
            <input name="userName" ref={register} /> 
            </div>
            <div>
            <label> Password: </label>
            <input name="passWord" type='password' ref={register} />
            </div>
            <button name='submit'> Login</button>
            
          </ContainerForm>
          
           
      </Form>
      </Container>
    );
  }

