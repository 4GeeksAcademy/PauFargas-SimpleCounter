import React from "react";

import "../../styles/index.css";

import { SimpleCounterBonus } from "./SimpleCounterBonus.jsx";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return ( <div>
		<SimpleCounterBonus />
	</div>
		
	);
};

export default Home;
