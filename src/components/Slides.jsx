import Button from '@mui/material/Button';
import React from 'react';

function CreateSlides(props) {
    return (
        <Button 
            variant="outlined" 
            sx={{
                '&.MuiButton-outlined': {
                    borderWidth: '2px',
                    color: 'inherit', // inherit color to keep it consistent
                    textTransform: 'none', // prevent text from becoming uppercase
                    padding: '8px 16px', // adjust padding as needed
                    display: 'inline-flex', // keep it inline with link
                    alignItems: 'center' // center align items
                },
                '&:hover': {
                    color: '#4287f5'
                },
                fontWeight: 'bold',
                a: {
                    color: 'inherit', // inherit color from button
                    textDecoration: 'none', // remove underline from link
                    width: '100%', // ensure full width clickable
                    height: '100%',
                    display: 'flex', // use flex to center content
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }}
        >
            <a
                href={props.link}
                target="_blank"
                rel="noopener noreferrer" // security improvement
            >
                <span>{props.name}</span>
            </a>
        </Button>
    );
}

export default CreateSlides;