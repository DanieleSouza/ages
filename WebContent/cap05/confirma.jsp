<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="style.css" />
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Confirma Dados</title>
</head>
<% String nome = (String) session.getAttribute("nome"); %>

<body>
	<h1>
		Confirmado os dados de: <%=nome %>
	</h1>
</body>
</html>