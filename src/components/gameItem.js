import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './gameItem.css';

// some comments
class GameItem extends Component {

    constructor() {
        super();
        this.DeleteGame = this.DeleteGame.bind(this);
    }

    DeleteGame(e) {
        e.preventDefault();
        console.log("Delete: " + this.props.game._id);

        axios.delete("http://localhost:4000/api/movies/" + this.props.game._id)
            .then(() => {
                this.props.ReloadData();
            })
            .catch();
    }


    render() {
        return (
            <div>
                {/* some comments  */}
                <Card>
                    <Card.Header>{this.props.game.Title}</Card.Header>
                    <Card.Body>
                        <blockquote>
                            <img className = "img" src={this.props.game.Poster}></img>
                            <br></br>
                                {"Year: " +this.props.game.Year}
                                <br></br>
                                {"Platform: "+this.props.game.Platform}
                                <br></br>
                                {"Age Rating: "+this.props.game.AgeRating}
                            
                        </blockquote>
                    </Card.Body>
                    <Link to={"/edit/" + this.props.game._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteGame}>Delete</Button>

                </Card>
            </div>
        );
    }
}
export default GameItem;