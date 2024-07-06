import ProductHeader from '@/components/ProductHeader';
import ProductList from '@/components/ProductList';

export default function ProductPage() {
	const headerTitle = '상품목록 페이지';

	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductList />
		</div>
	);
}
