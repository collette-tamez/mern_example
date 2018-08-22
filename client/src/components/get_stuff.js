import React, {Component} from 'react';
import axios from 'axios';

class GetStuff extends Component {
    componentDidMount(){
        axios.get('/api/get-stuff').then(res=>{
            console.log('HEYOOO', res);
        });
        axios.post('/api/get-user').then(res=>{
            console.log("ARE YOU READY!?", res);
        });
    }
    render(){
        return (
            <div>
                <h1>sum stuff</h1>
            </div>
        )
    }
}

export default GetStuff;