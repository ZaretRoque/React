import React from 'react';

export default class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			nombre: "",
			correo: "",
			comentario: "",
			msg: "",
		}
	}

	logChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
	handleSubmit(event){
		event.preventDefault();
		var data = {
            nombre: this.state.nombre,
            correo: this.state.correo,
            comentario: this.state.comentario,
        }
        fetch("http://localhost/CodeIgniter/index.php/react/Comentario_resource/comentario", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(this.mostrarMensaje(data).bind(this)).catch(function(err) {
            console.log(err)
            alert('Lo sentimos, no pudimos enviar tu comentario');
        });	
	}
	mostrarMensaje (data){
		this.setState({'msg': data['stored']?'Gracias por dejar su comentario!' : 'Lo sentimos, algo salió mal',});
	}

	render(){
		return (
			<form onSubmit={this.handleSubmit.bind(this)} method="POST">
				<div>
					<input type="text" name="nombre" placeholder="Nombre" onChange={this.logChange.bind(this)}/>
				</div>
				<div>
					<input type="email" name="correo" placeholder="Correo" onChange={this.logChange.bind(this)}/>
				</div>
				<div>
					<textarea rows="4" cols="18" name="comentario" placeholder="Tu Comentario" onChange={this.logChange.bind(this)}></textarea>
				</div>
				<div>{this.state.msg}</div>
				<input type="submit" value="Enviar"/>
			</form>
		);
	}
}