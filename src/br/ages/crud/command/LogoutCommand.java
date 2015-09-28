package br.ages.crud.command;

import javax.servlet.http.HttpServletRequest;

import br.ages.crud.util.MensagemContantes;

public class LogoutCommand implements Command {



	private String proxima;

	@Override
	public String execute(HttpServletRequest request) {
		// seta a mesma pagina, para o caso de erro/exce��o
		proxima = "login.jsp";
		

		try {
			request.getSession().setAttribute("usuario", null);
			request.setAttribute("msgErro", MensagemContantes.MSG_INF_LOGOUT);
		} catch (Exception e) {
			e.printStackTrace();
			request.setAttribute("msgErro", e.getMessage());
		}
		
		return proxima;
	}
}
