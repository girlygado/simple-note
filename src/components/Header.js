import React from 'react'
import { IconButton } from '@material-ui/core';
import { AddCircle, } from '@material-ui/icons';

const Header = ({ onAdd }) => {
    return (
        <div className="header">
            <h2 className="title">Simple Note App</h2>
            <div className="add-btn-container">
                <IconButton
                    onClick={onAdd}
                    size="medium"
                    color="secondary"
                    aria-label="add"
                    classes={{
                        root: 'add-btn'
                    }}>
                    <AddCircle />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
