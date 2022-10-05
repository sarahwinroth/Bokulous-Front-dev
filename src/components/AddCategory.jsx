import { useState } from 'react';
import config from '../config.js';
import '../styles/PopUp.css';

const AddCategory = (e) => {
    const [category, setCategory] = useState("");

    function addCategory() 
    {       
        let action = "/api/Books/AddCategory"
        fetch(config.apiSettings.address + ":" + config.apiSettings.port + action + `/${category}`, {
             method: 'POST',
             headers: {
                 'Accept':'application/json',
                 'Content-Type':'application/json',
                 'Mode':'no-cors'
             },
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
      <span className="close-icon" onClick={e.handleClose}>x</span>
        <h2>Lägg till en ny kategori</h2>
        <input
          type="text"
          value={category}
          placeholder="Ny kategori"
          onChange={(e) => setCategory(e.target.value)}
        />
        <span className='popup-btn' onClick={addCategory}>Spara</span>     
      </div>
    </div>
    );
  };
  
  export default AddCategory;