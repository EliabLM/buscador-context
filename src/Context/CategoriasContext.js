import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Crear el context
export const CategoriaContext = createContext();

// Provider: donde se encuentran las funcines y state
const CategoriasProvider = (props) => {
	// Crear el state del context
	const [categorias, guardarCategorias] = useState([]);

	// ejecutar el llamado a la api
	useEffect(() => {
		const obtenerCategorias = async () => {
			const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

			const categorias = await axios.get(url);

			guardarCategorias(categorias.data.drinks);
		};

		obtenerCategorias();
	}, []);

	return (
		<CategoriaContext.Provider value={{ categorias }}>
			{props.children}
		</CategoriaContext.Provider>
	);
};

export default CategoriasProvider;
