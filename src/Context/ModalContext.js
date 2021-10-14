import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
	// State del provider
	const [idreceta, guardarIdReceta] = useState(null);
	const [receta, guardarReceta] = useState({});

	// Hacer llamado a la api
	useEffect(() => {
		const obtenerReceta = async () => {
			if (!idreceta) return;

			const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;

			const resultado = await axios.get(url);
			// console.log(resultado);
			guardarReceta(resultado);
		};
		obtenerReceta();
	}, [idreceta]);

	return (
		<ModalContext.Provider value={{ guardarIdReceta }}>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
