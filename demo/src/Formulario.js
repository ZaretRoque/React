import React from 'react';
import Elemento from './Elemento.js';
import ReactDOM from 'react-dom';

export default class Formulario extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			telefono: '',
		}
	}

	//Manejo del evento submit para el formulario de búsqueda
	handleSubmit(event){
		event.preventDefault();
		var data = {}
		var same = this;
		fetch("http://localhost:8084/Transito/ws/servicios/conductorTelefono/" + this.state.telefono, {
            method: 'GET',
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data){
        	console.log(data);
        	same.mostrarRegistro(data);
        }).catch(function(err) {
            console.log(err)
            alert('Lo sentimos, no pudimos encontrar el registro');
        });	
	}

	//Agrega el registro obtenido al div "elemento"
	mostrarRegistro(data){
		console.log(data);
		ReactDOM.render(<Elemento 
			nombre={data['nombre'] + ' ' + data['apellidos']} 
			numeroLicencia={data['numeroLicencia']} 
			fechaNacimiento={data['fechaNacimiento']} 
			correo={data['email']}/>, document.getElementById('elemento'));
	}
	logChange(e) {
        this.setState({[e.target.name]: e.target.value});
	}

	render(){
		return (
			<div>
				<h1>Buscar registros</h1>
				<form onSubmit={this.handleSubmit.bind(this)} method="GET">
					<input type="text" name="telefono" placeholder="Teléfono" onChange={this.logChange.bind(this)}/>
					<input type="submit" value="Buscar"/>
				</form>
				<div id="elemento"></div>
			</div>
		);
	}
}