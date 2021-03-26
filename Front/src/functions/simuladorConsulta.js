import {users} from '../Database/user.json'

const consulta= (payload)=>{
    const userDetails=payload
    //console.log('consulta',userDetails);
    let rol=users.filter(u=>{
        return (u.contraseña===userDetails.contrasena && u.usuario===userDetails.usuario);
    })
    if(rol.length){
        return rol[0];
    }else{
        return null;
    }
}
export default consulta;