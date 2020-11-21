import react,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Styles from './ChatList/ChatListStyles';
import {withStyles} from '@material-ui/core';
import { withRouter } from "react-router-dom";
import ChatList from './ChatList/ChatList';

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
           
        }
    }
    logOut = ()=>{
        localStorage.setItem("user","");
        this.props.history.push("/");
    }
 
    render(){
        const {classes}=this.props;
        return(
            <div>
                <AppBar position="static">
                            <Toolbar>
                            <Typography variant="h6" className={classes.title}>
                              Welcome {localStorage.getItem('user')}!!!
                            </Typography>
                            <Button color="inherit" onClick={this.logOut}>Logout</Button>
                            </Toolbar>
                </AppBar>
                <div style={{ backgroundColor: '#cfe8fc' }}>
                <ChatList />
                </div>
            </div>
        );
    }
}
export default withRouter(withStyles(Styles)(Dashboard));