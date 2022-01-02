import React from 'react';
import  {Games}  from './games';
import axios from 'axios';
export class Read extends React.Component {

    constructor(){
        super()
        this.ReloadData = this.ReloadData.bind(this)
    }

    state = {games:[]}

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    this.setState({games: response.data
                    })
                })
            .catch(
                (error) => {
                    console.log(error)
                }
            );
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/movies')
        .then((response)=>{
            this.setState({games: response.data})
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <h1>This is a read Component</h1>
                <Games games={this.state.games}ReloadData ={this.ReloadData}></Games>
            </div>
        );
    }
}