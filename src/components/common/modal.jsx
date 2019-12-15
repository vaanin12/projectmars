import React, { useState } from 'react';

const Modal = ({ data, handleSubmit, openModal, closeModal }) => {
	const [input, setInput] = useState();
	if(!openModal) return null;

	return (
		<div className="card text-white bg-primary mb-3" style={{maxWidth: "20rem"}}>
		  <div className="card-header">{ data.name }</div>
		  <div className="card-body">
		    <form onSubmit={(event) => handleSubmit()}>
	    		<div class="form-group">
				  <input 
				  	type="text" 
				  	class="form-control"
				  	value={data.budget} 
				  	onChange={(e) => setInput(e.target.value)} 
				  />
				</div>
				<button 
					type="button" 
					class="btn btn-secondary">
					update
				</button>
				<button 
					type="button"
					onClick={(e) => closeModal()}
					class="btn btn-danger mx-2">
					close
				</button>
		    </form>
		  </div>
		</div>
	)
}

export default Modal;