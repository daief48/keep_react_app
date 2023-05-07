import './App.css';
import Header from './Header';
import Footer from './Footer';
import CreateNotes from './CreateNotes';
import Note from './Note';
import { useState } from 'react';
function App() {
  const [addItem,setAddItem] = useState([]);
  const addNote = (note) => {
    console.log("Clicked..")
    setAddItem((preData) => {
      return [...preData,note]
    })
    console.log(addItem);
  }
  const onDelete = (id) => {
    setAddItem((olddata) =>
    olddata.filter((currdata,indx) =>{
      return indx !== id;
    }))
    console.log(id);
  }
  return (
    <>
      <Header/>
      <Footer/>
      <CreateNotes passNote={addNote}/>
      <div className="notes">
      {addItem.map((val,index) => {
        return (
          <Note 
            key = {index}
            id={index}
            title = {val.title}
            content = {val.content}
            deleteItem={onDelete}
          />
        )
      })}
      </div>
    </>
  );
}

export default App;
