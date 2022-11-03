import React from 'react'
import book from './ui/book';

const Featured = () => {
    return(
      <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Featured <span className='purple'>Books</span>
                </h2>
                <div className="books">
                    <book />
                </div>
            </div>
        </div>
      </section>  
    )
}

export default Featured;
