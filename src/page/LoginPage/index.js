import './index.scss'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
} from 'mdb-react-ui-kit';
import logo_untar from "../../assets/logo/img.png"
import {useState} from "react";

const Index = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        alert(`${username}, ${password}`)
    }

    return (
            <MDBContainer className="p-3 my-5 container_wrapper">
                <MDBRow>
                    <MDBCol col='12' md='12' className={"form_wrapper"}>
                        <img src={logo_untar} alt="untar logo" className={"my-5"}/>
                        <MDBCol col='6' md='6'>
                            <MDBInput wrapperClass='mb-4' onChange={e => setUsername(e.target.value)} label='Username' type='text' size="lg"/>
                            <MDBInput wrapperClass='mb-4' onChange={e => setPassword(e.target.value)} label='Password' type='password' size="lg"/>

                            <MDBBtn className="mb-4 w-100" onClick={login} size="lg">Sign in</MDBBtn>
                        </MDBCol>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
    );
}

export default Index;
