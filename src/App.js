import "./App.css";
import logoMati from "../src/images/logoMati.png";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
	const [input, setInput] = useState("");

	const agregarInput = (val) => {
		setInput(input + val);
	};

	const calcularResultado = () => {
		if (input) {
			setInput(evaluate(input));
		} else {
			alert("Por favor ingrese valores para calcular");
		}
	};

	return (
		<div className="App">
			<div className="logoMatiCont">
				<img className="logoMati" src={logoMati} alt="logo" />
			</div>
			<div className="ppalCont-calculator">
				<Pantalla input={input} />
				<div className="fila">
					<Boton handlerClick={agregarInput}>1</Boton>
					<Boton handlerClick={agregarInput}>2</Boton>
					<Boton handlerClick={agregarInput}>3</Boton>
					<Boton handlerClick={agregarInput}>+</Boton>
				</div>
				<div className="fila">
					<Boton handlerClick={agregarInput}>4</Boton>
					<Boton handlerClick={agregarInput}>5</Boton>
					<Boton handlerClick={agregarInput}>6</Boton>
					<Boton handlerClick={agregarInput}>-</Boton>
				</div>
				<div className="fila">
					<Boton handlerClick={agregarInput}>7</Boton>
					<Boton handlerClick={agregarInput}>8</Boton>
					<Boton handlerClick={agregarInput}>9</Boton>
					<Boton handlerClick={agregarInput}>*</Boton>
				</div>
				<div className="fila">
					<Boton handlerClick={calcularResultado}>=</Boton>
					<Boton handlerClick={agregarInput}>0</Boton>
					<Boton handlerClick={agregarInput}>.</Boton>
					<Boton handlerClick={agregarInput}>/</Boton>
				</div>
				<div className="fila">
					<BotonClear handlerClear={() => setInput("")}>Clear</BotonClear>
				</div>
			</div>
		</div>
	);
}

export default App;
