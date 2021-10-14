import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = (props) => {
	// State del provider
	const [idreceta, guardarIdReceta] = useState(null);

	const url = `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`;

	return (
		<ModalContext.Provider value={{ guardarIdReceta }}>
			{props.children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
