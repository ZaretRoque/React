import React from 'react';

export default class Elemento extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nombre: props.nombre,
			numeroLicencia: props.numeroLicencia,
			fechaNacimiento: props.fechaNacimiento,
			correo: props.correo,
		}
	}

	render(){
		return (
			<div>
				<h1>Resultado: </h1>
				<div>
					<label>Nombre: </label>
					<label>{this.state.nombre}</label>
				</div>
				<div>
					<label>Número de licencia: </label>
					<label>{this.state.numeroLicencia}</label>
				</div>
				<div>
					<label>Fecha de nacimiento: </label>
					<label>{this.state.fechaNacimiento}</label>
				</div>
				<div>
					<label>Correo: </label>
					<label>{this.state.correo}</label>
				</div>
			</div>	
		);
	}
}