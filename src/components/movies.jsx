import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movie: getMovies(),
  };
  handleDelete = (movie) => {
    const movies = this.state.movie.filter((m) => m._id !== movie._id);
    this.setState({ movie: movies });
  };
  render() {
    const { length: count } = this.state.movie;
    if (count === 0) {
      return <h3>There are no movies in the database!</h3>;
    }
    return (
      <div>
        <h4>Showing {count} in the database.</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movie.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-warning btn-sm"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
