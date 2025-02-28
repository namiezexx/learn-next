import { fetchProductById } from '@/api';
import ProductHeader from '@/components/ProductHeader';
import ProductInfo from '@/components/ProductInfo';

function ProductDetailPage({ productDetail }) {
	const headerTitle = '상품 상세 정보 페이지';

	return (
		<div>
			<ProductHeader title={headerTitle} />
			<ProductInfo productDetail={productDetail} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const id = context.params.productId;
	const { data } = await fetchProductById(id);

	return {
		props: {
			productDetail: data,
		},
	};
}

export default ProductDetailPage;
