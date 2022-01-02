import React, { Component } from 'react';
import axios from 'axios';

export class Edit extends React.Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.onChangePlatform = this.onChangePlatform.bind(this);        
        this.onChangeAgeRating = this.onChangeAgeRating.bind(this);                                                       
                                               

        this.state = {
            Title: '',
            Year: '',
            Poster: '',
            Platform: '',
            AgeRating:''
        }
    }

    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        })

    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        })
    }

    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        })
    }  

    onChangePlatform(e){
        this.setState({
            Platform: e.target.value
        })
    }
    onChangeAgeRating(e){
        this.setState({
            AgeRating: e.target.value
        })
    }
    componentDidMount(){
        axios.get('http://localhost:4000/api/movies/' +this.props.match.params.id)
        .then((response)=>{
            this.setState({
                Title: response.data.Title,
                Year: response.data.Year,
                Poster: response.data.Poster,
                Platform: response.data.Platform,
                AgeRating: response.data.AgeRating,
                _id: response.data._id
            })
        })
        .catch((err)=>{
            console.log(err);
        });

        
    }

    handleSubmit(e) {
        e.preventDefault();
        alert("Game: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster +" " +this.state.Platform + "" );
        
        const newGame = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster,
            Platform: this.state.Platform,
            AgeRating: this.state.AgeRating
        }
        axios.put('http://localhost:4000/api/movies/' + this.state._id, newGame)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);  

        });   

        this.setState({
            Title: '',
            Year: '',
            Poster: '',
            Platform: '',
            AgeRating:''
        });
    }
    render() {
        return (
            <div className='App'>
               
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label>Add Game Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Game Year: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Year}
                            onChange={this.onChangeYear}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Game Cover: </label>
                        <textarea type="text"
                            className="form-control"
                            value={this.state.Poster}
                            onChange={this.onChangePoster}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Platform: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.Platform}
                            onChange={this.onChangePlatform}
                        />

                    </div>

                    <div className="form-group">
                        <label>Add Age Rating: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.AgeRating}
                            onChange={this.onChangeAgeRating} 
                        />

                    </div>
                    <div>
                        <input type="submit" value="Add Game"
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }
}