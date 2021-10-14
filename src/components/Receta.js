import React, { useContext } from 'react';
import { ModalContext } from '../Context/ModalContext';

const Receta = ({ receta }) => {
	// Extraer los valores del context
	const { guardarIdReceta } = useContext(ModalContext);
	// console.log(receta);
	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<h2 className="card-header">{receta.strDrink}</h2>
				<img
					className="card-img-top"
					src={receta.strDrinkThumb}
					alt={`Imagen de ${receta.strDrink}`}
				/>
				<div className="card-body">
					<button
						className="btn btn-block btn-primary"
						type="button"
						onClick={() => guardarIdReceta(receta.idDrink)}
					>
						Ver Receta
					</button>
				</div>
			</div>
		</div>
	);
};

export default Receta;
