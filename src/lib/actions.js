'use server';

import { redirect } from 'next/navigation';

import { saveProduct } from './products';
import { revalidatePath } from 'next/cache';

function isInvalidText(text) {
    return !text || text.trim() === '';
}

export async function shareProduct(prevState, formData) {
    const product = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };

    if (
        isInvalidText(product.title) ||
        isInvalidText(product.summary) ||
        isInvalidText(product.instructions) ||
        isInvalidText(product.creator) ||
        isInvalidText(product.creator_email) ||
        !product.creator_email.includes('@') ||
        !product.image ||
        product.image.size === 0
    ) {
        return {
            message: 'Invalid input.',
        };
    }

    await saveProduct(product);
    revalidatePath('/showcase');
    redirect('/showcase');
}
