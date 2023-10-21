import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResponsiveAppBar from './NavbarComponent';

function ProductSearch(props) {
    const { searchTerm } = props; 

    const [searchResults, setSearchResults] = useState([]);
    const apiUrl = "https://dummyjson.com/products"; 
useEffect(() => {
    console.log('Search term:', searchTerm); // Debug: Log the search term
    const fetchProducts = async () => {
        try {
            const response = await axios.get(apiUrl, {
                params: {
                    search: searchTerm,
                },
            });
            console.log('API Response:', response.data); // Debug: Log the API response
            setSearchResults(response.data);
        } catch (error) {
            console.error('Error searching for products:', error);
        }
    };

    if (searchTerm) {
        fetchProducts();
    } else {
        setSearchResults([]);
    }
}, [searchTerm, apiUrl]);


    return (
        <div>
            <ResponsiveAppBar/>
            <div>
                {searchResults.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductSearch;

