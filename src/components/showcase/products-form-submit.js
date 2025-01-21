'use client';
import { useFormStatus } from 'react-dom';

export default function ProductsFormSubmit() {
    const { pending } = useFormStatus();

    return <button disabled={pending}>{pending ? 'Submitting...' : 'Share Prodct'}</button>;
}
