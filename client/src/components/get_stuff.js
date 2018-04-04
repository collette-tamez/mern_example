import React, {Component} from 'react';
import axios from 'axios';

class GetStuff extends Component {
    componentDidMount(){
        axios.get('http://localhost:9000/api/get-stuff').then(res=>{
            console.log('HEYOOO', res);
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