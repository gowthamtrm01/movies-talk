import React, { useContext } from 'react';
import { usersContext } from '../index';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';


const CreateUser = () => {
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        data.id = uuid(); // setting id from uuid funtion
        data.createdAt = new Date(); // creating current new date
        console.log(data);
        dispatch({
            type: "CREATE-USER",
            payload: data
        });
        history.push('/');

    }

    const { dispatch } = useContext(usersContext);

    return (
        <div>
            <div>
                <IconButton onClick={() => {
                    history.goBack();  //go back home page
                }}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input">
                        <TextField id="outlined-basic" label="Name" variant="outlined" className="label"
                            {...register("name", { required: true })}
                        />
                        {errors.name && errors.name.type === "required" && (<span className="error">Name is  required</span>)}
                    </div>
                    <div className="input">
                        <TextField id="outlined-basic" label="Profile Image URL" variant="outlined" className="label"
                            {...register("avatar", { required: true })}
                        />
                        {errors.name && errors.name.type === "required" && (<span className="error">Profile image url is  required</span>)}
                    </div>
                    <div className="input">
                        <TextField id="outlined-basic" label="Movie Title" variant="outlined" className="label"
                            {...register("movieTitle", { required: true })}
                        />
                        {errors.name && errors.name.type === "required" && (<span className="error">Movie title is  required</span>)}
                    </div>
                    <div className="input">
                        <TextField id="outlined-basic" label="Movie Image URL" variant="outlined" className="label"
                            {...register("movieImage", { required: true })}
                        />
                        {errors.name && errors.name.type === "required" && (<span className="error">Movie image url is  required</span>)}
                    </div>
                    <div className="input">
                        <TextField id="outlined-basic" label="Movie Description" variant="outlined" className="label"
                            {...register("movieDescription", { required: true })}
                        />
                        {errors.name && errors.name.type === "required" && (<span className="error">Movie description is  required</span>)}
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

export default CreateUser;