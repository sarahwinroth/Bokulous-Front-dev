import { useState } from 'react';
import config from '../config.js';
import '../styles/PopUp.css';

const UpdateBook = (props) => {
    const books = props.books
    const book = books[props.index]
    const userId = "633be9a332571fe27e4b06c3"
    const username = "MainAdmin"
    const mail = "94josper@gafe.molndal.se"
    //const userId = props.loggedInUser.id
    //const username = props.loggedInUser.username
    //const mail = props.loggedInUser.mail

    const [isbn, setIsbn] = useState(book.isbn);
    const [title, setTitle] = useState(book.title);
    const [joinedCategories, setJoinedCategories] = useState(book.categories.join(", "));
    const [joinedAuthors, setJoinedAuthors] = useState(book.authors.join(", "));   
    const [language, setLanguage] = useState(book.language);
    const [published, setPublished] = useState(book.published);
    const [weight, setWeight] = useState(book.weight);
    const [price, setPrice] = useState(book.price);
    const [inStorage, setInstorage] = useState(book.inStorage);
    const [isUsed, setIsUsed] = useState(book.isUsed);

    function updateBook() 
    {       
        const categories = joinedCategories.split(", ")
        const authors = joinedAuthors.split(", ")

        let action = "/api/Books/UpdateBook"
        fetch(config.apiSettings.address + ":" + config.apiSettings.port + action + `/${book.id}`, {
             method: 'PUT',
             headers: {
                 'Accept':'application/json',
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({  
                    id: book.id,                
                    isbn: isbn,
                    title: title,
                    categories: categories,
                    language: language,
                    authors: authors,
                    published: published,
                    weight: weight,
                    price: price,
                    inStorage: inStorage,
                    seller: {
                      id: userId,
                      username: username,
                      mail: mail
                    }
             })
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
            <h2>Redigera</h2>
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
    
            <button className="lp-buttons" onClick={updateBook}>Spara ändringar</button>
          
          </div>
        </div>
    );
  };
  
  export default UpdateBook;