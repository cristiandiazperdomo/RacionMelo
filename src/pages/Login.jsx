import React from 'react';
import '../styles/Login.css';
import { MdPersonOutline, MdLockOutline } from "react-icons/md";

const Login = () => {
	return (
		<div className="login-container">
			<div className="login">
				<header className="login-header">
					<h3>Entrar</h3>
				</header>
				<div className="form-login">
					<div className="form-login-info">
						<div className="form-login-icon">
							<MdPersonOutline />
						</div>
						<div className="form-login-input">
							<label for="email">Email*</label>
							<input type="email" placeholder="Email" id="email"/>
						</div>
					</div>
					<div className="form-login-info">
						<div className="form-login-icon">
							<MdLockOutline />
						</div>
						<div className="form-login-input">
							<label for="password">Contraseña*</label>
							<input type="password" placeholder="*******" id="password" />
						</div>
					</div>
				</div>
				<footer className="login-footer">
					<div>
						<p>Forgot your password?</p>
					</div>
					<div>
						<button>Entrar</button>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default Login;