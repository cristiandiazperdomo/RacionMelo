import React from 'react';
import '../styles/SingUp.css';

const SingUp = () => {
	return (
		<div className="singup-container">
			<div className="singup">
				<header className="singup-header">
					<h3>Registrarse</h3>
				</header>
				<div className="form-singup">
					<div className="form-singup-info">
						<div className="form-singup-icon">
						</div>
						<div className="form-singup-input">
							<label for="name">Nombre*</label>
							<input type="name" placeholder="Name" id="name"/>
						</div>
					</div>
					<div className="form-singup-info">
						<div className="form-singup-icon">
						</div>
						<div className="form-singup-input">
							<label for="email">Email*</label>
							<input type="email" placeholder="Email" id="email"/>
						</div>
					</div>
					<div className="form-singup-info">
						<div className="form-singup-icon">
						</div>
						<div className="form-singup-input">
							<label for="numero">Número*</label>
							<input type="numero" placeholder="Número" id="numero"/>
						</div>
					</div>
					<div className="form-singup-info">
						<div className="form-singup-icon">
						</div>
						<div className="form-singup-input">
							<label for="password">Contraseña*</label>
							<input type="password" placeholder="*******" id="password" />
						</div>
					</div>
					<div className="form-singup-info">
						<div className="form-singup-icon">
						</div>
						<div className="form-singup-input">
							<label for="confirm-password">Confirmar contraseña*</label>
							<input type="password" placeholder="*******" id="confirm-password" />
						</div>
					</div>
				</div>
				<footer className="singup-footer">
					<div>
						<button>Registramé</button>
					</div>
				</footer>
			</div>
		</div>
	)
}

export default SingUp;