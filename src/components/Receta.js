import React, { useState, useContext } from 'react';
import { ModalContext } from '../Context/ModalContext';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const Receta = ({ receta }) => {
	// Extraer los valores del context
	const { guardarIdReceta } = useContext(ModalContext);

	// Modal de material ui
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
						onClick={() => {
							guardarIdReceta(receta.idDrink);
							handleOpen();
						}}
					>
						Ver Receta
					</button>
					<Modal
						open={open}
						onClose={() => {
							handleClose();
							guardarIdReceta(null);
						}}
						aria-labelledby="modal-modal-title"
						aria-describedby="modal-modal-description"
					>
						<Box sx={style}>
							<Typography id="modal-modal-title" variant="h6" component="h2">
								Text in a modal
							</Typography>
							<Typography id="modal-modal-description" sx={{ mt: 2 }}>
								Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
							</Typography>
						</Box>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default Receta;
