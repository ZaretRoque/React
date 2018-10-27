<?php
require APPPATH . '/libraries/REST_Controller.php';
class Comentario_resource extends REST_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model('react/Comentario_model');
	}

	public function comentario_post()
	{
		$response;
		if ($this->Comentario_model->guardar($this->post('nombre'), $this->post('correo'), $this->post('comentario')))
		{
			$response['stored'] = True;
			$this->response($response, 200);
		}else{
			$response['stored'] = False;
			$this->response($response, 404);
		}
	}
}