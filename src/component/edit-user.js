import React, { useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { usersContext } from '../index';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditUser = () => {

    const { id } = useParams(); //get id from url

    const history = useHistory();

    const { state, dispatch } = useContext(usersContext); // gets users array

    const currentUser = state.find((user) => user.id === id); // using find id to get correct user

    const onSubmit = (e) => {
        e.preventDefault();
        currentUser.movieTitle = movieTitle; //updating value
        currentUser.movieImage = movieImage; //updating value
        currentUser.movieDescription = movieDescription; //updating value
        currentUser.createdAt = new Date(); //updating value
        console.log(currentUser);
        dispatch({
            type: "UPDATE-USER",
            payload: currentUser
        })
        history.push('/'); // go back to home page
    }

    const [movieTitle, setMovieTitle] = useState(currentUser.movieTitle);
    const [movieImage, setMovieImage] = useState(currentUser.movieImage);
    const [movieDescription, setMovieDescription] = useState(currentUser.movieDescription);

    return (
        <div>
            <div>
                <IconButton onClick={() => {
                    history.goBack();
                }}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <div>
                <form onSubmit={(e) => { onSubmit(e) }}>
                    <div className="input">
                        <TextField
                            id="outlined-basic"
                            label="Movie Title"
                            variant="outlined"
                            className="label"
                            value={movieTitle}
                            name="movieTitle"
                            onChange={(e) => {
                                setMovieTitle(e.target.value);
                            }}
                        />
                    </div>
                    <div className="input">
                        <TextField
                            id="outlined-basic"
                            label="Movie Image URL"
                            variant="outlined"
                            className="label"
                            value={movieImage}
                            name="movieImage"
                            onChange={(e) => {
                                setMovieImage(e.target.value);
                            }}
                        />

                    </div>
                    <div className="input">
                        <TextField
                            id="outlined-basic"
                            label="Movie Description"
                            variant="outlined"
                            className="label"
                            value={movieDescription}
                            name="movieDescription"
                            onChange={(e) => {
                                setMovieDescription(e.target.value);
                            }}
                        />

                    </div>
                    <div className='input'>
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    );
}

export default EditUser;