import React,{useEffect,useState} from 'react';
import {Redirect} from 'react-router-dom';
import Authorapi from '../api/authorapi';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Container,Col,Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input, FormText
  } from 'reactstrap';
import styled from 'styled-components';

const Wrapper=styled.div`
  background: black;

`;




const FriendList=()=>{
    const [user,setUser]=useState([]);
    const [modal, setModal] = useState(false);
    const [newFriend,setNewFriend]=useState({name:'', age:'', email:'', gender:''});

  const toggle = () => {
      setModal(!modal);
      const Friends= document.querySelectorAll('.col-3');
      if(modal === false){
          Friends.forEach(each=>each.style.filter='blur(8px)')
        } else {
            Friends.forEach(each=>each.style.filter='blur(0px)')
        }

  }
    
    const submitForm=(e)=>{
        e.preventDefault();
        Authorapi()
        .post('/api/friends',newFriend)
        .then(res=> setUser(res.data))
        .catch(err=> console.error(err))
    }

    useEffect(()=>{
        
        Authorapi()
        .get('/api/friends')
        .then(res=>{
            console.log(res); 
            setUser(res.data);
        })
        .catch(err=> console.error(err))
    },[]);
       
    Authorapi().delete('/api/friends/7')  
  
    return(
        <Wrapper>
        <Container style={{background:'black', width:'100vw',display:'flex',flexFlow: 'row wrap', alignItems:'center'}}>
            {user.map(friend=>
            <Col xs='3'><Card style={{marginTop:'10%', border:'3px solid RGB(255, 13, 191)'}} key={friend.id}>
            <CardBody>
            <CardImg style={{width:'200px', height:'200px'}} src={`https://randomuser.me/api/portraits/${friend.gender}/${friend.id}.jpg`} alt='' />
            <CardText   style={{color: 'black'}}> Name: {friend.name} </CardText>
            <CardText  style={{color: 'black'}}> Age: {friend.age} </CardText>
            <CardText  style={{color: 'black'}}> Email: {friend.email} </CardText>
            </CardBody>
            </Card> </Col>
            )}
            <Button onClick={toggle} style={{borderRadius:'50%', height: '100px'}} color='primary'> Add Friend</Button>
                <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add Friend</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label> Name :</Label>
                            <Input onChange={(e)=>setNewFriend({...newFriend, name:e.target.value})} type='text'/>
                        </FormGroup>
                        <FormGroup>
                            <Label> Gender :</Label>
                            <Input onChange={(e)=>setNewFriend({...newFriend, gender:e.target.value})} type='text'/>
                        </FormGroup>
                        <FormGroup>
                            <Label> Age :</Label>
                            <Input onChange={(e)=>setNewFriend({...newFriend, age:e.target.value})} type='number'/>
                            
                        </FormGroup>
                        <FormGroup>
                            <Label> Email :</Label>
                            <Input onChange={(e)=>setNewFriend({...newFriend, email:e.target.value})}  type='email'/>
                            
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={submitForm} type='submit' >Add Friend</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
        </Container>
        </Wrapper>
    );
}

export default FriendList;