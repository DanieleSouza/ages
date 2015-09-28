package br.ages.crud.command;

import java.sql.SQLException;

import javax.servlet.http.HttpServletRequest;

import br.ages.crud.dao.UsuarioDAO;

public class CreateScreenUserCommand implements Command {

	private String proxima;

	private UsuarioDAO cadastroDao;

	public String execute(HttpServletRequest request) throws SQLException {

		cadastroDao = new UsuarioDAO();
		
		// Verifica se abre tela edi��o de pessoa ou de adi��o de pessoa.
		String isEdit = request.getParameter("isEdit");
		if (isEdit != null && !"".equals(isEdit)) {
			proxima = "user/editUser.jsp";
		} else {
			proxima = "user/addUser.jsp";
		}
		try {


		} catch (Exception e) {
			request.setAttribute("msgErro", e.getMessage());
		}

		return proxima;
	}
}
