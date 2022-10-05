import { useState } from 'react';
import config from '../config.js';
import '../styles/PopUp.css';

const UpdateCategory = (props) => {
    const categories = props.categories
    const category = categories[props.index]
    const [newName, setCategory] = useState(category.name);

    function updateCategory() 
    {       
        let action = "/api/Books/UpdateCategory"
        fetch(config.apiSettings.address + ":" + config.apiSettings.port + action + `/${newName}`, {
             method: 'PUT',
             headers: {
                 'Accept':'application/json',
                 'Content-Type':'application/json',
                 'Mode':'no-cors'
             },
             body: JSON.stringify({
                id: category.id,
                name: category.name
        }),
         }).then((result) => {
            result.json().then((resp) => {
                 console.log(resp)
             })
             .catch(err => {
              console.log(err)
          })
         })
     }

    return (
    <div className="popup-box">
      <div className="box">
      <span className="close-icon" onClick={props.handleClose}>x</span>
        <h2>Ändra kategorin</h2>
        <input
          type="text"
          value={newName}
          placeholder="Ny kategori"
          onChange={(e) => setCategory(e.target.value)}
        />
        <span className='popup-btn' onClick={updateCategory}>Spara</span>     
      </div>
    </div>
    );
  };
  
  export default UpdateCategory;