import react,{Component} from 'react';
import Styles from './ChatListStyles';
import {withStyles} from '@material-ui/core';
import { withRouter } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import {isEmpty} from 'lodash';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import moment from 'moment';

class ChatList extends Component{
    constructor(props){
        super(props);
        this.state={
            chatList:[],
            enteredText:''
        }
    }
    componentDidMount(){
        let addedMessages = JSON.parse(localStorage.getItem('posts'));
        if(addedMessages==null){
           let initialPosts=[{
               user:'Jane',
               message:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. ',
               date:'2020-11-21 22:01:48'
           },{
               user:'Harshitha',
               message:'Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.',
               date:'2020-11-21 22:02:48'
           }]
           localStorage.setItem('posts',JSON.stringify(initialPosts));
        }
        this.updateChatList()
    }
    updateChatList=()=>{
        let addedMessages = JSON.parse(localStorage.getItem('posts'));
        this.setState({chatList:addedMessages.reverse()})
    }
    postMessage = ()=>{
        let addedMessages = JSON.parse(localStorage.getItem('posts'));
        let newObject={
           user:localStorage.getItem('user'),
           date: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
           message:this.state.enteredText
       }
        addedMessages.push(newObject);
        localStorage.setItem('posts',JSON.stringify(addedMessages));
        this.setState({
            enteredText:'',
            chatList:addedMessages.reverse()
        })
    }
    updateEnteredText=(event)=>{
        this.setState({enteredText:event.target.value})
    }
   
    render(){
        const {classes}=this.props;
        return(
            <div>
                <CssBaseline />
             <Container fixed maxWidth="md">
                <div   style={{background:'white'}}  >
                <div className={classes.TextField}> 
                    <TextField
                        id="outlined-textarea"
                        label="Type something"
                        placeholder="Type something"
                        multiline
                        value={this.state.enteredText}
                        variant="outlined"
                        onChange={(event)=>this.updateEnteredText(event)}
                        style={{background:'white'}}
                        />
                        <Button variant="contained" color="primary" classes={{root:classes.buttonRoot}} onClick={this.postMessage}>Post</Button>
                   </div>
                    <div className={classes.chatListArea}>
                        {!isEmpty(this.state.chatList) && 
                        this.state.chatList.map((Chat,index)=>{
                            return(
                                <div   className={classes.messageStyle}>
                                    <span className={classes.userName}>{Chat.user}</span>
                                    <p>{Chat.message}</p>
                                    <p className={classes.dateTime}>{Chat.date}</p>
                                </div>
                            )
                        })}
                    </div>
                 
                   
                </div>
             </Container>
            </div>
        );
    }
}
export default withRouter(withStyles(Styles)(ChatList));