//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'

//Dependencies
import {useState} from 'react'
import {connect} from 'react-redux'
import {Form, Button,Image,InputGroup,Modal} from 'react-bootstrap';

//Images
import Logo from '../images/SPS.jpg'

//Data
import dataUser from '../Database/user.json'

//Components
import {LoginAction} from '../redux/actions/loginAction'
import {authenticationService} from '../functions/service'

const Login=(props)=>{
    let sps='@spsolutions.com.mx';
    const [validated, setValidated] = useState(false);
    const [validated2, setValidated2] = useState(false);
    const [user,setUser]=useState(dataUser);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const login= (usuario,contrasena)=>{
        let payload ={usuario: usuario, contrasena: contrasena}
        props.loginAction(payload)
        .then(response =>{
            //console.log('response',response);
            if(response.success){
                if(JSON.parse(sessionStorage.getItem('app-evaluaciones-tih'))){
                    props.history.push(authenticationService.login(response.userDetails,props.location.state));
                    //console.log(JSON.parse(sessionStorage.getItem("app-evaluaciones-tih")))
                }
                //props.history.push('/home');
            }
        })
    }

    const handleChange=(e)=>{
        setUser({
                ...user,
                [e.target.name]:e.target.value
            }
        )
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            let aux=''
            if(user.usuario.indexOf(sps)===-1){
                aux=user.usuario+sps
            }
            setUser(u=>{return {...user,usuario:aux}})
            user.usuario.length && user.contrasena.length && login(aux,user.contrasena);
            event.preventDefault();
        }
    
        setValidated(true);
      };
      const handleSubmit2 = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }else{
            event.preventDefault();
            handleClose();
        }
    
        setValidated2(true);
      };

    return (
        <div className="login">
            <Image src={Logo} alt="SPS" className="spsLogos"/>
            <p className="opacos">Proporciona tus credenciales para iniciar sesión en la App de Evaluaciones</p>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group md="6" controlId="validationCustom03">
                    <InputGroup>
                        <Form.Control
                        type="text"
                        placeholder="Usuario"
                        name="usuario"
                        onChange={handleChange}
                        required
                        />
                        <Form.Control.Feedback type="invalid">Ingresa un usuario valido.</Form.Control.Feedback>
                        <InputGroup.Append>
                            <InputGroup.Text id="inputGroupPrepend">@spsolutions.com.mx</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>    
                </Form.Group>
                <Form.Group md="3" controlId="validationCustom04">
                    <Form.Control type="password" placeholder="Contraseña" name="contrasena" onChange={handleChange} required />
                </Form.Group>
                <Button md="6" type="submit" variant="primary" className="botonCentral" size="md" /*onClick={handleClick}*/ >Iniciar Sesión</Button>
            </Form>
            <Button variant="link" className="opacos" onClick={handleShow}>Olvidé mi contraseña</Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Talento In House</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated2} onSubmit={handleSubmit2}>
                        <Form.Group>
                            <Form.Label>Escribe tu correo para recstablcer tu contraseña</Form.Label>
                            <Form.Control type="email" placeholder="example@spsolutions.com.mx" required/>
                        </Form.Group>
                        <Button type="submit" variant="primary" className="botonPrimary">Enviar</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>Cerrar</Button>
                
                </Modal.Footer>
            </Modal>
        </div>
    );
}

const mapStateToProps=(state)=>{
    //console.log('Satate on login', state)
    return{
        userDetails: state.login.userDetails,
    }
}

const mapDispatchToProps ={
    loginAction:LoginAction
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);