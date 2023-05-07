import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

export default function Note() {
    return (
        <>
            <div className="note">
                <h1>Title</h1>
                <br />
                <p>This is the content</p>
                <Button className='btn2'>
                    <DeleteIcon />
                </Button>
            </div>
        </>
    )
}
