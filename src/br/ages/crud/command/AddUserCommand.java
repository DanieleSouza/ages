package br.ages.crud.command;

import java.sql.SQLException;
import javax.servlet.http.HttpServletRequest;
import br.ages.crud.bo.UsuarioBO;
import br.ages.crud.model.Usuario;

public class AddUserCommand implements Command {

	private UsuarioBO usuarioBO;
	
	private String proxima;
	
	public String execute(HttpServletRequest request) throws SQLException {
		String matricula = request.getParameter("matricula");
		String nome = request.getParameter("nome");
		String usuario = request.getParameter("usuario");
		String senha = request.getParameter("senha");
		String email = request.getParameter("email");
		String adm = request.getParameter("adm");
		
		Usuario usuarioDTO = new Usuario();
		usuarioDTO.setAdministrador(adm);
		usuarioDTO.setNome(nome);
		usuarioDTO.setMatricula(matricula);
		usuarioDTO.setSenha(senha);
		usuarioDTO.setEmail(email);
		usuarioDTO.setUsuario(usuario);

		
		usuarioBO = new UsuarioBO();
		try{
			usuarioBO.cadastrarUsuario(usuarioDTO);
		}
		catch(Exception e){
			
		}
		
		proxima= "main?acao=listUser";
		return proxima;
	}
}