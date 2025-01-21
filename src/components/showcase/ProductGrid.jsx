import ProductCards from './ProductCards';
import classes from './product-grid.module.css';
export default function ProductGrid({ products }) {
	return (
		<ul className={classes.products}>
			{products.map((product) => (
				<li key={product.id}>
					<ProductCards {...product} />
				</li>
			))}
		</ul>
	);
}
