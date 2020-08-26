import React, {useEffect, useState, useContext}from 'react';
import axios from 'axios';
import { } from 'react-bootstrap';
import {searchItem} from './form.jsx';
import '../../assets/styles/results.css';


function Results(){
	const search = useContext(searchItem);
	const [team, setTeam] = useState([]); 
	
	useEffect( () =>{
		const reset = []
		axios.post('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=' + search)
		.then(res => {
			if(search !== ""){
				setTeam(res.data.teams);

			}else{
				setTeam(reset);
			}
			
		})
		.catch( err => {
			console.log(err)
		})
	}, [search]);

	if(team && team.length){
			return(
		<div className='result'>	
			{team.map((t)=>(
				<p key={t.idTeam}>{t.strTeam}</p>
				))}
		</div>
			);		
	}
	else if (!team){
		return(
			<div className="invalidEntry">
				<p>*Search does not exist.</p>
			</div>
			)
	}
	else{
		return(
			<div className="noresult"></div>
			)
	}


}
export default Results;