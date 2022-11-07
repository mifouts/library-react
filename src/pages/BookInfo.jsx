import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function BookInfo({ books }) {
  return (
    <div id="books__body">
        <main id="books__main">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                              <FontAwesomeIcon icon="arrow-left"/>
                        </Link>
                        <Link to="/book" className="book__link">
                          <h2 className="book__selected--title--top">Books</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                      <figure className="book__selected--figure">
                        <img src="" alt="" className='book__selected--ig' />
                      </figure>
                      <div className="book__selected--description">
                        <h2 className="book__selected--title">Crack the Code</h2>
                        <FontAwesomeIcon icon="star"/>
                      </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
