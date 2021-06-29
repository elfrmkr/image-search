import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './searchbar';
import ImageList from './imageList'; 

class App extends React.Component {

state = {
    images: []
    };
/* Making request to get search of photos,
async request. you can also use promise .then but this is easier
*/
 onSearchSubmit = async (term) => {
   const response = await unsplash.get('search/photos', {  params: {query: term},
      
    });
    this.setState({images: response.data.results});
}  
    
render(){    
    return (
    <div className = "ui container" style = {{marginTop: '10px'}}>
        <SearchBar onSubmit = {this.onSearchSubmit}/>
        <ImageList images = {this.state.images} />
    </div>)
    }
};

export default App;