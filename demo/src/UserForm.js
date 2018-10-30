import React, { Component } from 'react'

export default class UserForm extends Component{
constructor(props){
	super(props)
	this.state = {
		nombre: '',
		apellidos: '',
		numeroLicencia: '',
		telefono: '',
		contrasena: '',
		fechaNacimiento: '',
		email: ''
	}
	//Vincular el evento que se encarga del submit
	this.handleSubmit = this.handleSubmit.bind(this)
}

handleSubmit(event){
		event.preventDefault();
		 //URLSearchParams crea una cadena con formato para envío de parámetros
		var datos = new URLSearchParams();
		datos.append('nombre', this.state.nombre);
		datos.append('apellidos', this.state.apellidos);
		datos.append('numeroLicencia', this.state.numeroLicencia);
		datos.append('telefono', this.state.telefono);
		datos.append('contrasena', this.state.contrasena);
		datos.append('fechaNacimiento', this.state.fechaNacimiento);
		datos.append('email', this.state.email);

		console.log(datos.toString());

		//Se envía la petición
		fetch("http://localhost:8084/Transito//ws/servicios/registroconductores", {
			method: 'POST',
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			body: datos.toString()
		}).then(function(response){
			 if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
			return response.json();
		});
	
	}

	//Almacenar los cambios que ocurren en los inputs
	logChange(e) {
        this.setState({[e.target.name]: e.target.value});
	}

	//Los input tienen que tener vinculado el evento de cambio 
	render(){
		return (
			<form onSubmit={this.handleSubmit} method="POST">
			  <input type="text" onChange={this.logChange.bind(this)} placeholder="Nombre" name="nombre" />
			  <input type="text" onChange={this.logChange.bind(this)} placeholder="Apellidos" name="apellidos" />
			  <input type="text" onChange={this.logChange.bind(this)} placeholder="Licencia" name="numeroLicencia" />
			  <input type="text" onChange={this.logChange.bind(this)} placeholder="Telefono" name="telefono" />
			  <input type="password" onChange={this.logChange.bind(this)} placeholder="Contraseña" name="contrasena" />
			  <input type="text" onChange={this.logChange.bind(this)} placeholder="Fecha de nacimiento AAAA-MM-DD" name="fechaNacimiento" />
	          <input type="email" onChange={this.logChange.bind(this)} placeholder="Email" name="email" />
	          <input type="submit" value="Guardar" />
	        </form>
		);
	}

	
}