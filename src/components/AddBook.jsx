import { useState } from 'react';
import config from '../config.js';
import '../styles/PopUp.css';

const AddBook = (props) => {
    // const id = props.loggedInUser.id
    // const username = props.loggedInUser.username
    // const mail = props.loggedInUser.mail

    const [isbn, setIsbn] = useState("");
    const [title, setTitle] = useState("");
    const [joinedCategories, setJoinedCategories] = useState("");
    const [joinedAuthors, setJoinedAuthors] = useState("");   
    const [language, setLanguage] = useState("");
    const [published, setPublished] = useState(0);
    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState(0);
    const [inStorage, setInstorage] = useState(0);
    const [isUsed, setIsUsed] = useState(false);
    const [bookCover, setBookCover] = useState("");

     const [id, setId] = useState("633b4bbaa1414c18057c1d10");
     const [username, setUsername] = useState("admin");
     const [mail, setMail] = useState("admin@mail.com");

    const [inputCat, setInputCat] = useState("");
    const [inputAut, setInputAut] = useState("");

    function addBook() 
    {
      const categories = joinedCategories.split(", ")
      const authors = joinedAuthors.split(", ")

        let newBook = {
          isbn: isbn,
          title: title,
          categories: categories,
          lanuage: language,
          authors: authors,
          published: published,
          weight: weight,
          price: price,
          inStorage: inStorage,
          seller: {
            id: id,
            username: username,
            mail: mail
          },
          bookCover: bookCover
         }
        
         let action = "/api/Books/AddBook"
        fetch(config.apiSettings.address + ":" + config.apiSettings.port + action, {
             method: 'POST',
             headers: {
                 'Accept':'application/json',
                 'Content-Type':'application/json',
                 'Mode': 'no-cors'
             },
             body: JSON.stringify(newBook),
         }).then((result) => {
            result.json().then((resp) => {
                 console.log(resp)
             })
         })
     }

    return (
    <div className="popup-box">
      <div className="box">
      <span className="close-icon" onClick={props.handleClose}>x</span>
        <h2>Lägg till en bok till försäljning</h2>
        <form>
        <input
          type="text"
          value={isbn}
          placeholder="ISBN"
          onChange={(e) => setIsbn(e.target.value)}
        />
        <input
          type="text"
          value={title}
          placeholder="Titel"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={joinedCategories}
          placeholder="Kategori"
          onChange={(e) => setJoinedCategories(e.target.value)}
        />
        <input
          type="text"
          value={language}
          placeholder="Språk"
          onChange={(e) => setLanguage(e.target.value)}
        />
        <input
          type="text"
          value={joinedAuthors}
          placeholder="Författare"
          onChange={(e) => setJoinedAuthors(e.target.value)}
        />
        <input
          type="text"
          value={published}
          placeholder="Utgivningsår"
          onChange={(e) => setPublished(e.target.value)}
        />
        <input
          type="text"
          value={weight}
          placeholder="Vikt"
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          value={price}
          placeholder="Pris"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={inStorage}
          placeholder="Antal böcker"
          onChange={(e) => setInstorage(e.target.value)}
        />< br/>
        <label>Begagnad</label>
        <label> 
            <input type="checkbox" label="Begagnad bok" checked={isUsed} onChange={(e) => setIsUsed(e.target.value)}/>
        </label>
        </form> 

        <button className="lp-buttons" onClick={addBook}>Lägg till bok</button>
      
      </div>
    </div>
    );
  };
  
  export default AddBook;