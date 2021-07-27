import React, { useContext, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { usersContext } from '../index';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const EditProfile = () => {

    const { id } = useParams(); //get id from the url

    const history = useHistory();

    const { state, dispatch } = useContext(usersContext); // get the users array

    const currentUser = state.find((user) => user.id === id); // using id to find correct user

    const onSubmit = (e) => { //onsubmit function
        e.preventDefault();
        currentUser.name = name; //updating value
        currentUser.avatar = avatar; //updating value
        currentUser.createdAt = new Date(); //updating value
        console.log(currentUser);
        dispatch({
            type: "UPDATE-USER",
            payload: currentUser
        })
        history.push('/'); // go back to home page
    }

    const [name, setName] = useState(currentUser.name);
    const [avatar, setAvatar] = useState(currentUser.avatar);

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
                            label="Name"
                            variant="outlined"
                            className="label"
                            value={name}
                            name="movieTitle"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                    </div>
                    <div className="input">
                        <TextField
                            id="outlined-basic"
                            label="Profile Image URL"
                            variant="outlined"
                            className="label"
                            value={avatar}
                            name="movieImage"
                            onChange={(e) => {
                                setAvatar(e.target.value);
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

export default EditProfile;