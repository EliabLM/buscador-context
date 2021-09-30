import React, { createContext, useState } from 'react';

// Crear el context
export const CategoriaContext = createContext();

// Provider: donde se encuentran las funcines y state
const CategoriasProvider = (props) => {
	// Crear el state del context
	const [state, setState] = useState('hola');

	return (
		<CategoriaContext.Provider value={{ state, setState }}>
			{props.children}
		</CategoriaContext.Provider>
	);
};

export default CategoriasProvider;
