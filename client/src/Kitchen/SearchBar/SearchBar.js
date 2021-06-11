import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import classes from './SearchBar.css';

const SearchBar = () =>{
    return (
        <div class={classes.wrap}>
            <div class={classes.search}>
                <input
                    placeholder="Search..."
                    type="text"
                    className={classes.searchTerm}
                ></input>
                <button type="submit" className={classes.searchButton}>
                    <SearchIcon />
                </button>
            </div>
        </div>
       

    );
}

export default SearchBar;