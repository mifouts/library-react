import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const Featured = () => {
    return(
      <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className='purple'>Books</span>
                </h2>
                <div className="books">
                    <div className="book">
                        <a href="/">
                            <figure className='book__img--wrapper'>
                                <img src="https://covers.openlibrary.org/b/id/10958382-L.jpg" alt="" className='book__img' />
                            </figure>
                        </a>
                        <div className="book__title">
                            <a href="/" className='book__title--link'>
                                Atomic Habits
                            </a>
                        </div>
                        <div className="book__ratings">
                            <FontAwesomeIcon icon='star'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>  
    )
}

export default Featured;
