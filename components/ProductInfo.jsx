import Image from 'next/image';
import styles from './ProductInfo.module.css';

function ProductInfo({ productDetail }) {
	return (
		<div className={styles.container}>
			<div>
				<Image
					src={productDetail.imageUrl}
					width={250}
					height={250}
					alt={productDetail.name}
				/>
			</div>
			<div className={styles.description}>
				<p>{productDetail.name}</p>
				<p>{productDetail.price}</p>
				<button>장바구니에 담기</button>
			</div>
		</div>
	);
}

export default ProductInfo;
