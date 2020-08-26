import React, {useState, createContext,} from 'react';
import { useForm } from "react-hook-form";
import Results from './searchResults.jsx';
import { InputGroup, FormControl, Form} from 'react-bootstrap';
import {FaSearch} from 'react-icons/fa';

export const searchItem = createContext();

function SearchForm(){
	const { register, handleSubmit } = useForm();
	const [searchValue, setSearchValue] = useState('');

	const onSub = (values)=>{
		setSearchValue(values.query);
	};

	return (
		<React.Fragment>
		<Form inline onSubmit={handleSubmit(onSub)}>
	      <InputGroup id='input' size='sm'>
		    <FormControl
		      placeholder="Search"
		      aria-label="Search"
		      aria-describedby="basic-addon2"
		      name='query'
		      ref={register} 
		    />
		    <InputGroup.Append>
		      <InputGroup.Text type="submit" id="basic-addon2"><FaSearch/></InputGroup.Text>
		    </InputGroup.Append>
	 	  </InputGroup>
	    </Form>
	    <searchItem.Provider value={searchValue}>
	    	<Results/>
	    </searchItem.Provider>
		</React.Fragment>
	);
}
export default SearchForm;