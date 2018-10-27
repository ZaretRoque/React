import React from 'react';
import Form from '../Componentes/Form.js';

export default class Main extends React.Component{
	render(){
		return (
			<div>
				<div id="header">
					<h1>Este es un ejemplo de POST con react</h1>
				</div>
				<div id="formulario">
					<Form />
				</div>
				<div id="footer">
					<label>Final de la página</label>
				</div>
			</div>
		);
	}
}