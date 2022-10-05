import config from '../config.js';
import '../styles/PopUp.css';

const DeleteCategory = (props) => {

  const categories = props.categories
  const category = categories[props.index]

    function deleteCategory() 
    {
      console.log(category.id)
      let action = "/api/Books/DeleteCategory"
          fetch(config.apiSettings.address + ":" + config.apiSettings.port + action, {
             method: 'DELETE',
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
                  console.warn(resp)
              })
          })
     }  

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <button className="lp-buttons" onClick={deleteCategory}>Ta bort</button>
      </div>
    </div>
  );
};

export default DeleteCategory;