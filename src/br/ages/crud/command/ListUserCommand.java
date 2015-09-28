package br.ages.crud.command;

import java.sql.SQLException;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import br.ages.crud.bo.UsuarioBO;
import br.ages.crud.model.*;

public class ListUserCommand implements Command {

	private UsuarioBO usuarioBO;
	
	private List<Usuario> listaUsuarios;
	
	private String proxima;
	
	@Override
	public String execute(HttpServletRequest request) throws SQLException {
		usuarioBO = new UsuarioBO();
		
		try{
			listaUsuarios = usuarioBO.listarUsuarios();
			request.setAttribute("listaUsuarios", listaUsuarios);
		}
		catch(Exception e){
			e.printStackTrace();
			request.setAttribute("msgErro", e.getMessage());
		}
		
		proxima = "user/listUser.jsp";
				
		return proxima;
	}

}