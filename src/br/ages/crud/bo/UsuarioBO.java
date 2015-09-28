package br.ages.crud.bo;

import java.io.Serializable;
import java.sql.SQLException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import br.ages.crud.dao.UsuarioDAO;
import br.ages.crud.exception.PersistenciaException;
import br.ages.crud.model.Usuario;

public class UsuarioBO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Usuario usuario;
	private List<Usuario> usuarios;
	private UsuarioDAO usuarioDAO;
	
	public UsuarioBO() {
		usuarioDAO = new UsuarioDAO();
	}
	
	public Usuario getUsuario() {
		return usuario;
	}
	
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	public List<Usuario> listarUsuarios() throws PersistenciaException, SQLException {
		
		usuarios = usuarioDAO.listarUsuarios();
		
		return usuarios;
	}
	public void setUsuarios(ArrayList<Usuario> usuarios) {
		this.usuarios = usuarios;
	}
	
	public static void main(String[] args) throws PersistenciaException, SQLException {
		
		UsuarioBO dao = new UsuarioBO();		
		
		List<Usuario> listUser = dao.listarUsuarios();
		for (Usuario usuario : listUser) {
			System.out.println(usuario);
		}
	}	
	
	public boolean validaUsuario(Usuario usuario) throws PersistenciaException {
		
		return usuarioDAO.validarUsuario(usuario);
		 
		
		

	}

	public void cadastrarUsuario(Usuario usuarioDTO) throws PersistenciaException, SQLException, ParseException {
		usuarioDAO.cadastrarUsuario(usuarioDTO);
	}

	public boolean removerUsuario(int idUsuario) throws PersistenciaException, SQLException, ParseException {
		return usuarioDAO.removerUsuario(idUsuario);
	}
}

