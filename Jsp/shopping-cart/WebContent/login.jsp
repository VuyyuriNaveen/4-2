<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
	<%@page import="java.util.*"%>
	
	
	<%@page import="cn.techtutorial.model.*" %>
	
	<%
    User auth= (User) request.getSession().getAttribute("auth");
    if(auth != null){
    	//request.setAttribute("auth", auth);
    	response.sendRedirect("index.jsp");
    }
    
    ArrayList<Cart> cart_list = (ArrayList<Cart>) session.getAttribute("cart-list");
    if (cart_list != null) {	
    	request.setAttribute("cart_list", cart_list);
    }

    
    %>
<!DOCTYPE html>
<html>
<head>
<title>Login Page</title>
<%@include file="includes/head.jsp"%>
</head>
<body>
	<%@include file="includes/footer.jsp"%>
	
	<%@include file="includes/navbar.jsp" %>
	<div class="container">
		<div class="card w-50 mx-auto my-6">
			<div class="card-header text-center">User Login</div>
				<div class="card-body">
					<form action="user-login" method="post">
						<div class="form-group mb-3">
							<label class="mb-3">Email Address</label> <input type="email"
								class="form-control mb-3" name="login-email" required
								placeholder="Enter Your Email" />
						</div>
						<div class="form-group">
							<label class="mb-3">Password</label> <input type="password"
								class="form-control mb-3" name="login-password" required
								placeholder="*******" />
						</div>
						<div class="text-center">
							<button type="submit" class="btn btn-primary">Login</button>
						</div>
					</form>
			</div>
		</div>
	</div>
</body>
</html>