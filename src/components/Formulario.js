import React, { useContext } from 'react';
import { CategoriaContext } from '../Context/CategoriasContext';

const Formulario = () => {
	const { categorias } = useContext(CategoriaContext);

	console.log(categorias, ' desde el formulario');

	return (
		<form className="col-12">
			<fieldset className="text-center">
				<legend>Busca bebidas por categoría o ingrediente</legend>
			</fieldset>

			<div className="row mt-4">
				<div className="col-md-4">
					<input
						className="form-control"
						type="text"
						placeholder="Buscar por ingrediente"
						name="nombre"
					/>
				</div>
				<div className="col-md-4">
					<select className="form-control" name="categoria">
						<option value="">-- Selecciona Categoría --</option>
					</select>
				</div>
				<div className="col-md-4">
					<input
						type="submit"
						className="btn btn-block btn-primary"
						value="Buscar Bebidas"
					/>
				</div>
			</div>
		</form>
	);
};

export default Formulario;
