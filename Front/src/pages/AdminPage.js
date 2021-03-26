//Styles
import '../styles/home.css'
import '../index.css'
import '../../node_modules/react-simple-tree-menu/dist/main.css';

//Dependencies
import React, {useState} from 'react'
import TreeMenu from 'react-simple-tree-menu'
import {Image} from 'react-bootstrap'
import {connect} from 'react-redux'

//Images
import SPS from '../images/SPS.jpg'
import TALENTO from '../images/talento.png'

//Data
import {tree} from '../Database/treeAdmin'

//Components
import CentralUno from '../components/centralUno';
import {authenticationService} from '../functions/service'


const AdminPage=(props)=>{
    let talento=`¡Hola ${props.userDetails.usuario}!`
    talento= talento.split("\n").join("");
    function toPush(path){
        props.history.push(path);
    }
    const [contenido,setContenido]=useState(
        <>
            <h1>{talento}</h1>
            <Image src={TALENTO} alt={'Talent in House'} rounded fluid/>
        </>
    );
    return(
        <div className='App'>
            <div className='treeGlobal'>
                <div className='treeImage'>
                    <a href='https://www.spsolutions.com.mx/' target='_blank'  rel='noreferrer' className='treeImage'>
                        <Image src={SPS} className='spsLogo'/>
                    </a>
                </div>
                <div className='tree'>
                    <TreeMenu 
                        data={tree}
                        onClickItem={({ key, label, ...props }) => {
                            if(!props.hasNodes && props.central){
                                console.log(label)
                                switch (props.central){
                                    case 'centralUno':
                                        setContenido(<CentralUno nombre={label}/>)
                                        break;
                                    case 'logout':
                                        authenticationService.logout();
                                        //console.log('home storage', JSON.parse(sessionStorage.getItem('app-evaluaciones-tih')))
                                        toPush('/');
                                        break;
                                    default:
                                        setContenido(
                                            <>
                                                <h1>{talento}</h1>
                                                <Image src={TALENTO} alt={'Talent in House'} rounded fluid/>
                                            </>);
                                        break;
                                }
                            }
                        }}
                    />
                </div>
            </div>
            <div className='central'>
                {contenido}
            </div>
        </div>
    );
    
}



const mapStateToProps =(state)=>{
    console.log('state', state);
    return {
        userDetails: state.login.userDetails,
    }
}

export default connect(mapStateToProps,null)(AdminPage);