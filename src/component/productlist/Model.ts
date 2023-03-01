export interface ProductCategory {
	id: number;
	name: string;
}

export interface Product {
	id: number;
	name: string;
	description: string;
	quantityAvailable: number;
	discountPercentage: number;
	originalPrice: number
	category: { 
		id: number;
		name: string;
	};
	images: {
		id: number;
		url: string;
	}[]
}