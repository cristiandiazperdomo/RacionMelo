import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/SingUp.css';

const SingUp = () => {
	const navigate = useNavigate();

	const handleInfo = () => {
		navigate('/');
	}

	return (
		<div className="singup-container">
			<div className="singup">
				<header className="singup-header">
					<h3>REGISTRARSE</h3>
				</header>
				<div className="form-singup">
					<div className="form-singup-info">
						<div className="form-singup-input">
							<label for="username">NOMBRE COMPLETO</label>
							<input type="text" id="username"/>
						</div>
					</div>
					<div className="form-singup-info">
						<div className="form-singup-input">
							<label for="lastame">APELLIDO COMPLETO</label>
							<input type="text" id="lastname"/>
						</div>
					</div>
					<div className="form-singup-info">
						<div className="form-singup-input">
							<label for="email">EMAIL</label>
							<input type="email" id="email"/>
						</div>
					</div>
					<div className="form-singup-info">
						<div className="form-singup-input">
							<label for="number">NUM. CELULAR</label>
							<input type="number" id="number"/>
						</div>
					</div>
					<div className="form-singup-info">
						<div className="form-singup-input">
							<label for="password">CONTRASEÑA</label>
							<input type="password" id="password"/>
						</div>
					</div>
					<div className="form-singup-info">
						<div className="form-singup-input">
							<label for="password">CONFIRMAR CONTRASEÑA</label>
							<input type="password" id="password" />
						</div>
					</div>
				</div>
				<footer className="singup-footer">
					<div className="footer-options">
						<div className="remember-me">
							
						</div>
						<Link to="/login">
							Ya tengo una cuenta
						</Link>
					</div>
					<div className="singup-send-info">
						<button type="button" onClick={handleInfo}>ENTRAR</button>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default SingUp;