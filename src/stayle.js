import Stayled from 'styled-components'
// import { ReactComponent as User} from './user/icons.svg';
export const Container = Stayled.div`
display:flex;
justify-content:center;
align-items: center;
background-color:#2A393E;
width: 100%;
height: 100vh;
color: white;
`
export const Wrapper = Stayled.div`
width: 360px;
height: 380px;
border: 2px solid #445859;
margin:10px;
border-redius: 5px;
display: flex;
flex-direction: column;
align-items: center;
padding:30px;
box-sizing: border-box;
`
export const Description = Stayled.div`
color: white;
font-weight: 600;
font-size: 20px;
margin-top:20px;
`
export const Title = Stayled.div`
color:#E7C961;
font-size: 28px;
`
export const InputWrapper = Stayled.div`
display:flex;
width:100%;
 
`
export const Input = Stayled.input`
width:100%;
height:50px;
border-radius: 4px;
backround-color:rgba(104,105,102,.1)
border: 1px solid #354545;
margin-top: 20px;
outline:none;
color: white;
font-size:22px;
padding-left:15px; 
`