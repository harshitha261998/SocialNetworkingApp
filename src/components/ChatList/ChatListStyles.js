const styles = theme =>({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      chatListArea:{
        padding:'10px',
        height: 'calc(100vh - 141px)',  
        overflow: 'auto',
        background: '#f7f7f7'
      },
      messageStyle:{
        background: 'white',
        boxShadow: '2px 2px 5px #ddd',
        borderRadius: '4px',
        padding:'10px',
        marginBottom:'10px'
      },
      TextField: {
          display:'flex',
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '100ch',
        },
      },
      buttonRoot:{
          height:50,
          margin:10

      },
      userName:{
        color: 'dodgerblue', 
        fontWeight: 'bold'
      },
      dateTime:{
        color: '#777', 
        fontSize: '12px'
      }
});
export default styles;