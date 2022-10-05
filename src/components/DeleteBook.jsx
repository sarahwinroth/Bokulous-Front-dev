import '../styles/PopUp.css';
import config from '../config.js';

const DeleteBook = (props) => {

  const books = props.books
  const book = books[props.index]

    function deleteBook() 
    {
      let action = "/api/Books/DeleteBook"
          fetch(config.apiSettings.address + ":" + config.apiSettings.port + action +"/"+ book.id, {
             method: 'PUT',
             headers: {
                  'Accept':'application/json',
                  'Content-Type':'application/json',
                  'Mode':'no-cors'
              },
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
        <button className="lp-buttons" onClick={deleteBook}>Ta bort</button>
      </div>
    </div>
  );
};

export default DeleteBook;