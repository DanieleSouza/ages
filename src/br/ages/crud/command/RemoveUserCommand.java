package br.ages.crud.command;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;

import br.ages.crud.bo.UsuarioBO;

public class RemoveUserCommand implements Command {
	UsuarioBO usuario = new UsuarioBO();

	@Override
	public String execute(HttpServletRequest request) throws SQLException {
		String id = request.getParameter("id_usuario");
		int i = Integer.parseInt(id);
		try{
		usuario.removerUsuario(i);
		}
		catch(Exception e){
			
		}
		String proxima = "main?acao=listUser";
		return proxima;
		
	}

}