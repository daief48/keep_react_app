import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

export default function CreateNotes() {
    return (
        <>
            <div className="form_box">
                <form action="">
                    <input type="text" placeholder='Title' id='input1' />
                    <textarea id="input2" cols="" rows="" placeholder='Write a note'></textarea>
                    <Button className='btn1'>
                        <AddIcon />
                    </Button>
                </form>
            </div>
        </>
    )
}
