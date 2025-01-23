import { getEvent } from 'modecraft/lib/events';
import classes from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';


export async function generateMetadata({ params }) {
    const event = await getEvent(params.eventSlug);
    return {
        title: event.title,
        description: event.summary,
    };
}




export default async function EventDetailsPage({ params }) {
    const event = await getEvent(params.eventSlug);

    const formattedDate = new Date(event.date).toLocaleDateString('jp', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    });


    if (!event) {
        notFound();
    }

    event.instructions = event.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <Suspense fallback={<p className={classes.loading}>Fetching Page....</p>}>
                <header className={classes.header}>
                    <div className={classes.image}>
                        <Image
                            src={`https://modecraft-events-image.s3.amazonaws.com/${event.image}`}
                            alt={event.title}
                            fill
                        />{' '}
                    </div>
                    <div className={classes.headerText}>
                        <h1>{event.title}</h1>
                        <p className={classes.creator}>
                            by <a href={`malito:${event.creator_email}`}>{event.creator}</a>
                        </p>
                        <p className={classes.date}>{formattedDate}</p>
                        <p className={classes.location}>{event.location}</p>
                        <p className={classes.summary}>{event.summary}</p>
                    </div>
                </header>
                <main>
                    <p
                        className={classes.instructions}
                        dangerouslySetInnerHTML={{ __html: event.instructions }}
                    ></p>
                </main>
            </Suspense>
        </>
    );
}
