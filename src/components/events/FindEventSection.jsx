'use client'
import { useRef } from 'react';

export default function FindEventSection() {
    const searchElement = useRef();

    return (
        <section className='content-section' id='all-events-section'>
            <header>
                <h2>Find your next event!</h2>
                <form onSubmit={handleSubmit} id='search-form'>
                    <input type='search' placeholder='Search events' ref={searchElement} />
                    <button>Search</button>
                </form>
            </header>
            {content}
        </section>
    );
}