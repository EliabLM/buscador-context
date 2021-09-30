import React, { useContext, useState } from 'react';
import { CategoriaContext } from '../Context/CategoriasContext';
import { RecetasContext } from '../Context/RecetasContext';

const Formulario = () => {
	// llamamos las categorias desde el Context
	const { categorias } = useContext(CategoriaContext);
	const { buscarRecetas } = useContext(RecetasContext);

	// Definimos un state local
	const [busqueda, guardarBusqueda] = useState({
		nombre: '',
		categoria: '',
	});

	// funcion para leer los contenidos
	const obtenerDatosReceta = (e) => {
		guardarBusqueda({
			...busqueda,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<form
			className="col-12"
			onSubmit={(e) => {
				e.preventDefault();
				buscarRecetas(busqueda);
			}}
		>
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
						onChange={obtenerDatosReceta}
					/>
				</div>
				<div className="col-md-4">
					<select
						className="form-control"
						name="categoria"
						onChange={obtenerDatosReceta}
					>
						<option value="">-- Selecciona Categoría --</option>
						{categorias.map((categoria) => (
							<option key={categoria.strCategory} value={categoria.strCategory}>
								{categoria.strCategory}
							</option>
						))}
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
