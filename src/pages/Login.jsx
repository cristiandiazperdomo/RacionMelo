import React from 'react';
import '../styles/Login.css';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
	const navigate = useNavigate();

	const handleInfo = () => {
		navigate('/');
	}

	return (
		<div className="login-container">
			<div className="login">
				<header className="login-header">
					<h3>ENTRAR</h3>
				</header>
				<div className="form-login">
					<div className="form-login-info">
						<div className="form-login-input">
							<label for="email">EMAIL</label>
							<input type="email" id="email"/>
						</div>
					</div>
					<div className="form-login-info">
						<div className="form-login-input">
							<label for="password">CONTRASEÑA</label>
							<input type="password" id="password" />
						</div>
					</div>
				</div>
				<footer className="login-footer">
					<div className="footer-options">
						<div className="remember-me">
							<input type="checkbox" id="remember-me"/>
							<label htmlFor="remember-me">Recuerdamé</label>
						</div>
						<Link to="recovery-password">
							¿Olvidaste tú contraseña?
						</Link>
					</div>
					<div className="login-send-info">
						<button type="button" onClick={handleInfo}>ENTRAR</button>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default Login;