import React from 'react';

const Receta = ({ receta }) => {
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
					<button className="btn btn-block btn-primary" type="button">
						Ver Receta
					</button>
				</div>
			</div>
		</div>
	);
};

export default Receta;
