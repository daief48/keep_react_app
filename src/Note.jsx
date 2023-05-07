import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export default function Note(props) {
    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p>{props.content}</p>
                <Button className='btn2' onClick={deleteNote}>
                    <DeleteIcon />
                </Button>
            </div>
        </>
    )
}
