import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import ProductGrid from 'modecraft/components/showcase/ProductGrid';
import { getProducts } from 'modecraft/lib/products';

async function Products() {
	const products = await getProducts();

	return <ProductGrid products={products} />;
}

export default async function DesignerShowcase() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					あなたの手で創る
					<span className={classes.highlight}>クリエイティブなプロダクト</span>
				</h1>
				<p>
					お気に入りのプロダクトを選んで、自分だけの作品を作りましょう。簡単で楽しいです！
				</p>
				<p className={classes.cta}>
					<Link href='/showcase/share'>お気に入りのプロダクトをシェアする</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense fallback={<p className={classes.loading}>Fetching Products....</p>}>
					<Products />
				</Suspense>
			</main>
		</>
	);
}
