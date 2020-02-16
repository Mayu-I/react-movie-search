import React from 'react'

class MovieRow extends React.Component {
    render() {
        return <table key={this.props.movie.id} className="movie__list">
            <tbody>
                <tr>
                    <td className="movie__thumbnail" >
                        <img src={this.props.movie.poster_src} alt="poster" width="80" />
                    </td>
                    <td className="movie__content" >
                        <h3>{this.props.movie.title}</h3>
                        <p>{this.props.movie.overview}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    }
}

export default MovieRow;