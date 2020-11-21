import React, { Component } from 'react';
import { TextField, Grid, Button ,Paper,AppBar,Typography,Toolbar,Link} from '@material-ui/core';
import Styles from './LoginStyles';
import {withStyles} from '@material-ui/core';
import UserList from '../../Configs/UserList';

class Login extends Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    updateUserName =(event)=>{
        this.setState({email:event.target.value})
    }
    updatePassword =(event)=>{
        this.setState({password:event.target.value })
    }
    handleSubmit=()=>{
        const { email, password } = this.state;
        let validuser = 0;
        let user;
        UserList.map((item,index)=>{
            if(item.email==email && item.password==password){
                 validuser=1
                 user=item.userName
            }
        })
        if(validuser >0){
            localStorage.setItem("user",user);
            this.props.history.push("/dashboard");
        }
        else if(email!="" && password!=""){
            alert("Incorrect username and password");
        }
    }
    render() {
        const { email, password,showErrorMessage} = this.state;
        const {classes}=this.props;
        return (
            <div>
            <AppBar position="static" alignitems="center" color="primary">
                 <Toolbar>
                 <Grid container justify="center" wrap="wrap">
                 <Grid item>
                 <Typography variant="h6">{"Login Form"}</Typography>
                 </Grid>
                 </Grid>
                 </Toolbar>
            </AppBar>
            <Grid container spacing={0} justify="center" direction="row">
                <Grid item>
                        <Grid
                        container
                        direction="column"
                        justify="center"
                        spacing={2}
                        className={classes.loginForm}
                        >
                        <Paper
                        variant="elevation"
                        elevation={2}
                        className={classes.loginBackground}
                        >
                    <Grid item>
                    <Typography component="h1" variant="h5">  Log in</Typography>
                     </Grid>
                    <Grid item>
                    <form>
                         <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <TextField
                                placeholder="UserName"
                                fullWidth
                                name="userName"
                                variant="outlined"
                                value={email}
                                onChange={(event) =>this.updateUserName(event) }
                                required
                                />
                                </Grid>
                                <Grid item>
                                <TextField
                                type="password"
                                placeholder="Password"
                                fullWidth
                                name="password"
                                variant="outlined"
                                value={password}
                                onChange={(event) =>this.updatePassword(event) }
                                required
                                />
                                </Grid>
                                <Grid item>
                                <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.buttonBlock}
                                 onClick={this.handleSubmit}
                                >
                                Submit
                                </Button>
                                </Grid>
                                </Grid>
                                </form>
                    </Grid>
                    </Paper>
                    </Grid>
                </Grid>
            </Grid>
            </div>);
    }
}

export default withStyles(Styles)(Login);