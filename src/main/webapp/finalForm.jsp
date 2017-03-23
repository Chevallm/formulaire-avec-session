<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Bonjour</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	</head>
	<body>
	  <nav>
	    <div class="nav-wrapper">
	      <a href="#" class="brand-logo center">Formulaire avec Session</a>
	    </div>
	  </nav>
        
       <main>
	       	<div class="row">
	       		<div class="card col m6 offset-m3 s12" style="margin-top: 64px">
	       			<div class="card-content">
	       				<span class="card-title">
	       					Formulaire
	       				</span>
	       				<hr/>
	       				<div class="row">
	       					<p class="col s12">
	       						<p>Vos informations :</p>
	       						<ul>
	       							<li>Prénom: ${sessionScope['first-name']}</li>
	       							<li>Nom: ${sessionScope['name']}</li>
	       							<li>Adresse: ${sessionScope['address']}</li>
	       						</ul>
	       					</p>
	       				</div>
	       			</div>
	       		</div>
	       	</div>
	    </main>
	       	
	    <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>

	</body>
</html>