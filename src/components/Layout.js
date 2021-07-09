import React from 'react';
import {Grid, Text, Button} from "../elements";
import {history} from '../redux/configureStore';

const Layout = (props) => {
    return (
        
        <Grid is_flex padding="4px 16px">
            <Grid>
            <Text margin="10px">레이아웃 변경</Text>
            </Grid>
                    <Grid margin="4px" padding="4px">
                        <Button _onClick={() => {history.push('/');}}>1</Button>
                    </Grid>
                    <Grid margin="4px" padding="4px">
                        <Button _onClick={() => {history.push('/2');}}>2</Button>
                    </Grid>
                    <Grid margin="4px" padding="4px">
                        <Button _onClick={() => {history.push('/3');}}>3</Button>
                    </Grid>
                    <Grid margin="4px" padding="4px">
                        <Button _onClick={() => {history.push('/4');}}>4</Button>
                    </Grid>
        </Grid>
    )
}



export default Layout;