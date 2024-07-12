import Button from '@mui/material/Button';
import React from 'react';

function CreateSlides(props) {
    return (
        <Button 
            variant="outlined" 
            component="a"
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                '&.MuiButton-outlined': {
                    borderWidth: '2px',
                    color: 'inherit',
                    padding: '8px 16px',
                    display: 'inline-flex',
                    alignItems: 'center'
                },
                '&:hover': {
                    color: '#4287f5'
                },
                fontWeight: 'bold',
                a: {
                    color: '#0d365e', 
                    textDecoration: 'none',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }}
        >
            <span>{props.name}</span>
        </Button>
    );
}

export default CreateSlides;