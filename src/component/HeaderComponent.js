import React, {Component} from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    appbar: {
        width: '98%',
        minHeight: 150,
        backgroundColor: '#1b233a',
        borderRadius: 10
    },
    titleHead: {
        margin: 30,
        fontSize: 15
    },
    titlePara: {
        fontSize: 30
    },
    daterRefreshContainer: {
        width: 200,
        height: 50,
        position: 'absolute',
        left: '40%',
        textAlign: 'center'        
    },
    dateRefersh: {
        width: 200,
        height: 50,
        backgroundColor: 'white',
        opacity: 0.3,
        borderRadius: 10,
        position: 'absolute'
    },
    colorbox: {
        position: 'absolute',
        right: '10%',
        color: '#888da4',
        fontSize: 13
    },
    colorContainer: {
        height: 30,
        width: 30,
        borderRadius: '50%',
        display: 'inline-flex',
        verticalAlign: 'inherit',
        marginRight: 10
    },
    redcolor: {
        backgroundColor: '#ff4a33'
    },
    greencolor: {
        backgroundColor: '#55bd4f'
    },
    ambercolor: {
        backgroundColor: '#ffb337'
    },
    yellowcolor: {
        backgroundColor: '#ffde2a'
    }
});
class Header extends Component {
    render() {
        const { classes } = this.props;
        return(
            <AppBar position="static" className={classes.appbar}>
                <ToolBar>
                    <Typography variant='title' color='inherit' className={classes.titleHead}>
                        CONDE NAST
                        <p className={classes.titlePara}>Data Status</p>
                    </Typography>
                    <div className={classes.daterRefreshContainer}>
                        <div className={classes.dateRefersh}></div>
                        Updated
                    </div> 
                    <table className={classes.colorbox}>
                    <tr>
                        <td>
                        <div className={[classes.colorContainer, classes.greencolor].join(' ')}></div>
                        Complete
                        </td>
                        <td>
                        <div className={[classes.colorContainer, classes.yellowcolor].join(' ')}></div>
                        Quality Alert
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className={[classes.colorContainer, classes.ambercolor].join(' ')}></div>
                        Partial Load
                        </td>
                        <td>
                        <div className={[classes.colorContainer, classes.redcolor].join(' ')}></div>
                        No Load
                        </td>
                    </tr>
                    </table>                   
                </ToolBar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);

