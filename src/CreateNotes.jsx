import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

export default function CreateNotes(props) {
    const [note,setNote] = useState({
        title:"",
        content:"",
    })

    const [expand, setExpand] = useState(false);
    const InputEvent = (event) => {

        const {name,value} = event.target;
        setNote((prevalue) => {
            return {
                ...prevalue,
                [name]:value,
            }
        })
    }
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })
    }
    const expandIt = () => {
        setExpand(true);
    }
    const dbexpandIt = () => {
        setExpand(false);
    }
    return (
        <>
            <div className="form_box">
                <form action="" id='form1'>
                    {expand?<input 
                    type="text"
                    name='title'
                     placeholder='Title' 
                     id='input1'
                     value={note.title} 
                     onChange={InputEvent}
                     />: null}
                    <textarea 
                    id="input2"
                    name='content'
                     cols="" rows=""
                      placeholder='Write a note'
                      value={note.content}
                      onChange={InputEvent}
                      onClick={expandIt}
                      onDoubleClick={dbexpandIt}
                      ></textarea>
                    {expand?<Button className='btn1' onClick={addEvent}>
                        <AddIcon />
                    </Button>:null}
                </form>
            </div>
        </>
    )
}
 