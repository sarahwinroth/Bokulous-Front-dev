import '../styles/table.css';
import '../styles/Landingpage.css';
import { useState, useEffect } from 'react';
import config from '../config.js';
import AddBook from './AddBook';
import UpdateBook from './UpdateBook';
import DeleteBook from './DeleteBook';
import PurgeBook from './PurgeBook';

const GetUserBooks = () => {
  const [books, setBooks] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false); 
  const [isDeleteOpen, setIsDeleteOpen] = useState(false); 
  const [isPurgeOpen, setIsPurgeOpen] = useState(false);
  const [currentOpenBook, setCurrentOpenBook] = useState(-1); 

  useEffect(() => {
    async function fetchData() {
      
      const userId = "633be9a332571fe27e4b06c3"

      let action = "/api/Books/GetBooksSeller"
      let response = await fetch(config.apiSettings.address + ":" + config.apiSettings.port + action + `/${userId}`)

      let data = await response.json();
      console.log(data);
      setBooks(data);
    }

    fetchData();
  }, []);

  const togglePopUpAddBook = (e) => {
    setIsAddOpen(!isAddOpen);
  };
  const togglePopUpEdit = (i) => {
    setCurrentOpenBook(i);
    setIsEditOpen(!isEditOpen);
  };

  const togglePopUpDeleteBook = (i) => {
    setCurrentOpenBook(i);
    setIsDeleteOpen(!isDeleteOpen);
  };

  const togglePopUpPurgeBook = (i) => {
    setCurrentOpenBook(i);
    setIsPurgeOpen(!isPurgeOpen);
  };

  return (
    <section className="main-container">
      <h2>Dina böcker till försäljning</h2>
      <button className="lp-buttons" onClick={togglePopUpAddBook}>Lägg till bok</button>
              {isAddOpen && (
                <AddBook               
                  handleClose={togglePopUpAddBook}/>
                )}                
      <div className="list-books-container">
          <table>
            <tr>
                <th>Antal</th>
                <th>Titel</th>
                <th>Författare</th>
                <th>Kategori</th>
                <th></th>
            </tr>
          {books?.map((book, i) => (
            <tr key={book.id}>
                <td>{book.inStorage}</td>
                <td>{book.title}</td>
                <td>
                    {book?.authors?.map((author) => (                  
                        <tr>                 
                            <td className='array'>{author}</td>
                        </tr>                   
                ))}
                </td>
                <td>        
                {book?.categories?.map((category) => (               
                   <tr>
                        <td className='array'>{category}</td>  
                    </tr>                                
                ))}   
                </td>         
                <tr>
                    <td>
                    <td className='array'>
                    <button className="lp-buttons" onClick={() => togglePopUpEdit(i)}>Redigera</button>
                    {isEditOpen && i == currentOpenBook && (
                    <UpdateBook 
                      index = {currentOpenBook}
                      books = {books}
                      handleClose={togglePopUpEdit}
                    />
                    )}                  
                    </td>
                    <td className='array'>
                    <button className="lp-buttons" onClick={() => togglePopUpDeleteBook(i)}>Ta bort</button> 
                    {isDeleteOpen && i == currentOpenBook && (
                    <DeleteBook 
                      index = {currentOpenBook}
                      books = {books}
                      content={
                        <>
                          <h2>Ta bort en bok</h2>
                          <p>En bok kommer att tas bort från lagret.</p>
                          <p>Är du säker på att du vill minska antalet av {book.title}?</p>
                        </>
                      }
                      handleClose={togglePopUpDeleteBook}
                    />
                    )}                         
                    </td>
                    <td className='array'>
                    <button className="lp-buttons" onClick={() => togglePopUpPurgeBook(i)}>Radera</button> 
                    {isPurgeOpen && i == currentOpenBook && (
                    <PurgeBook
                      index = {currentOpenBook}
                      books = {books}
                      content={
                        <>
                          <h2>Radera bok</h2>
                          <p>Boken kommer att raderas från lagret.</p>
                          <p>Är du säker på att du vill radera {book.title}?</p>
                        </>
                      }
                      handleClose={togglePopUpPurgeBook}
                    />
                    )}                       
                    </td>
                    </td>                  
                </tr>
            </tr>
          ))}          
          </table>
      </div>
    </section>
  );
};

export default GetUserBooks;