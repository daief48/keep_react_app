import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

export default function CreateNotes() {
    const [note,setNote] = useState({
        title:"",
        content:"",
    })

    const InputEvent = (event) => {
        setNote((prevalue) => {
            return {
                ...prevalue
            }
        })
    }
    return (
        <>
            <div className="form_box">
                <form action="" id='form1'>
                    <input 
                    type="text"
                    name='title'
                     placeholder='Title' 
                     id='input1'
                     value={note.title} 
                     onChange={InputEvent}
                     />
                    <textarea 
                    id="input2"
                    name='content'
                     cols="" rows=""
                      placeholder='Write a note'
                      value={note.content}
                      onChange={InputEvent}
                      ></textarea>
                    <Button className='btn1'>
                        <AddIcon />
                    </Button>
                </form>
            </div>
        </>
    )
}
