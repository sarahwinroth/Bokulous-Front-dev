import '../styles/GetBooksAdmin.css';
import { useState, useEffect } from 'react';
import config from '../config.js';
import AddCategory from './AddCategory';
import UpdateCategory from './UpdateCategory';
import DeleteCategory from './DeleteCategory';

const GetCategories = () => {
  const [categories, setCategories] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false); 
  const [isDeleteOpen, setIsDeleteOpen] = useState(false); 
  const [currentCategory, setCurrentCategory] = useState(-1); 

  useEffect(() => {
    async function fetchData() {
      let action = "/api/Books/GetCategories"
      let response = await fetch(config.apiSettings.address + ":" + config.apiSettings.port + action)

      let data = await response.json();
      console.log(data);
      setCategories(data);
    }

    fetchData();
  }, []);

  const toggleAdd = (e) => {
    setIsAddOpen(!isAddOpen);
  };
  const toggleEdit = (i) => {
    setCurrentCategory(i);
    setIsEditOpen(!isEditOpen);
  };

  const toggleDelete = (i) => {
    setCurrentCategory(i);
    setIsDeleteOpen(!isDeleteOpen);
  };

  return (
    <section className="main-container">
      <h2>Alla kategorier</h2>
      <button className="lp-buttons" onClick={toggleAdd}>Lägg till kategori</button>
              {isAddOpen && (
                <AddCategory              
                  handleClose={toggleAdd}
                />
                )}                
      <div className="list-books-container">
          <table>
            <tr>
                <th>Kategori</th>
                <th></th>
            </tr>
          {categories?.map((category, i) => (
            <tr key={category.id}>
                <td>{category.name}</td>                                 
                    <td>
                        <td className='array'>
                        <button onClick={() => toggleEdit(i)}>Redigera</button>
                        {isEditOpen && i == currentCategory && (
                        <UpdateCategory 
                        index = {currentCategory}
                        categories = {categories}
                        handleClose = {toggleEdit}
                        />
                        )}
                        </td>
                            <td className='array'>
                            <button onClick={() => toggleDelete(i)}>Ta bort</button>
                            {isDeleteOpen && i == currentCategory && (
                            <DeleteCategory 
                            index = {currentCategory}
                            categories = {categories}
                            content={
                                <>
                                <h2>Ta bort en kategori</h2>
                                <p>Kategorin kommer att tas bort.</p>
                                <p>Är du säker på att du vill ta bort {category.name}?</p>
                                </>
                            }
                            handleClose={toggleDelete}
                            />
                            )}                   
                            </td>
                    </td>                  
                </tr>  
              ))} 
          </table>
      </div>
    </section>
  );
};

export default GetCategories;