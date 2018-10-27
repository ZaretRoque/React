<?php
class Comentario_model extends CI_Model
{
	public function __construct()
	{
		$this->load->database('comentarios');
	}

	public function guardar($nombre, $correo, $comentario)
	{
		$data = array('nombre' => $nombre, 
			'correo' => $correo, 
			'comentario' => $comentario);
		return $this->db->insert('comentario', $data);
	}
}