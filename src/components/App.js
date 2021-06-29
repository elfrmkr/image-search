import React from 'react';
import axios from 'axios';
import SearchBar from './searchbar';

class App extends React.Component {

state = {
    images: []
    };
/* Making request to get search of photos,
async request. you can also use promise .then but this is easier
*/
 onSearchSubmit = async (term) => {
   const response = await axios.get('https://api.unsplash.com/search/photos', {  params: {query: term},
       headers: {
           Authorization: 'Client-ID _l8Ap2dXnt2zy3YXJI5uvmiUsJK-Swb3EY9N3Zjcn10'
        } 
    });
    this.setState({images: response.data.results});
}  
    
render(){    
    return (
    <div className = "ui container" style = {{marginTop: '10px'}}>
        <SearchBar onSubmit = {this.onSearchSubmit}/>
        Found: {this.state.images.length} images
    </div>)
    }
};

export default App;