import '../styles/PopUp.css';
import config from '../config.js';

const PurgeBook = (props) => {

  const books = props.books
  const book = books[props.index]
  const adminId = "633be9a332571fe27e4b06c3"
  const password = "mainadmin123"

    function purgeBook() 
    {
      console.log(book.id)
      let action = "/api/Admin/PurgeBook"
          fetch(config.apiSettings.address + ":" + config.apiSettings.port + action + `/${book.id}` + `/${adminId}` + `/${password}`, {
             method: 'DELETE',
             headers: {
                  'Accept':'application/json',
                  'Content-Type':'application/json',
                  'Mode':'no-cors'
              },
                // body: JSON.stringify({
                //   bookId: book.id,
                //   //adminId: props.loggedInUser.id,
                //   //password: props.loggedInUser.password
                //   adminId: "633be9a332571fe27e4b06c3",
                //   password: "mainadmin123"
                // })
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
        <button className='popup-btn' onClick={purgeBook}>Radera</button>
      </div>
    </div>
  );
};

export default PurgeBook;