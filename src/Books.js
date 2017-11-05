import React, { Component } from 'react';

class Book extends Component {
  handleOnChange
  }

  render() {
    const { shelf, thumbnail } = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${ thumbnail })`
              }}
            />
            <div className="book-shelf-changer">
              <select value={shelf} onChange={this.handleOnChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        </div>
      </li>
    );
  }
}



export default Book;
