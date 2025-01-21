import { Suspense } from 'react';

import classes from './page.module.css';
import ProductGrid from 'modecraft/components/showcase/ProductGrid';
import { getProducts } from 'modecraft/lib/products';
import ShowcaseHeader from 'modecraft/components/showcase/showcaseHeader';

async function Products() {
    const products = await getProducts();

    return <ProductGrid products={products} />;
}

export default async function DesignerShowcase() {
    return (
        <>
            <ShowcaseHeader />
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching Products....</p>}>
                    <Products />
                </Suspense>
            </main>
        </>
    );
}
