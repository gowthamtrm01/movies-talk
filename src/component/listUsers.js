import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { usersContext } from '../index';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

const Users = () => {

    const classes = useStyles();

    const { state, dispatch } = useContext(usersContext);

    const history = useHistory();

    const deleteUser = (id) => {
        dispatch({               // delteing user
            type: "DELETE-USER",
            id
        })
    }

    const editUser = (id) => {
        history.push(`/edit-user/${id}`) // pushing to edit user page
    }

    const editProfile = (id) => {
        history.push(`/edit-profile/${id}`) // pushing to edit profile page
    }

    return (
        <div>
            <div>
                <IconButton aria-label="add" onClick={() => {
                    history.push('/create-user')  // pushing to creat user page
                }}>
                    <AddBoxIcon />
                </IconButton>
            </div>
            {state.map((user, index) => {  // listing all user using map funtion
                return (
                    <div style={{ display: "inline-flex", margin: "10px", paddingRight: "40px" }} key={index}>
                        <div>
                            <Card className={classes.root}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="recipe" src={user.avatar} >
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="edit profile" onClick={() => { editProfile(user.id) }}>
                                            <EditIcon />
                                        </IconButton>
                                    }
                                    title={user.name}
                                    subheader={new Date(user.createdAt).toDateString()}
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={user.movieImage}
                                    title={user.movieTitle}
                                />
                                <CardContent>
                                    <Typography variant="h5" color="textSecondary" component="h5">
                                        {user.movieTitle}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {user.movieDescription}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="edit user" onClick={() => { editUser(user.id) }}>
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => {
                                        deleteUser(user.id)
                                    }}>
                                        <DeleteIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                )
            })}
        </div >
    );
}

export default Users;