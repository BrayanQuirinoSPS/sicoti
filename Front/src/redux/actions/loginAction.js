import { LOGIN } from "../constan";
import { LOGIN_ERROR } from "../constan";
import axios from "axios";
import consulta from "../../functions/simuladorConsulta";

const login = (payload, userData) => {
  return {
    type: LOGIN,
    userDetails: { ...payload },
    userData: userData,
    success: true,
  };
};

export const LoginAction = (payload) => (dispatch, getState) => {
  return new Promise((resolve, reject) => {
    axios({
      url: 'http://jsonplaceholder.typicode.com/posts',
      //url: `https://anypoint.mulesoft.com/mocking/api/v1/sources/exchange/assets/d4788f6c-c024-43ee-8253-b139c8997e9e/m/usuarios?usuario=${payload.usuario}&contrasena=${payload.contrasena}`,
      //url: "http://api-enriquecimiento.us-e2.cloudhub.io/api/gestionPagos/enriquecimiento/v2/contratos?claveEntidad=MONEX&idContrato=123455",
      //url:"https://anypoint.mulesoft.com/mocking/api/v1/links/e6895f63-9e74-420e-8235-f73d95d89bde/gestionPagos/enriquecimiento/v2/contratos?claveEntidad=MONEX&idContrato=123455",
      method: "GET",
      mode: "no-cors",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      auth: {
        username: 'mnx-mule',
        password: 'mnx-mule'
      },
    })
      .then((response) => {
        console.log(response);
        const cons=consulta(payload);
        if(cons){
          //console.log('sip mande')
          dispatch(login(cons, response));
          resolve(login(cons, response));
        }else{
          dispatch(login(payload, response));
          resolve(login(payload, response));
        }
      })
      .catch((error) => {
        dispatch({ type: LOGIN_ERROR, payload: "No se encontro el usuario." });
        resolve({ error });
        //alert(error.response.data.mensaje);
        alert("Error al consumir el servicio.");
      });
  });
};
