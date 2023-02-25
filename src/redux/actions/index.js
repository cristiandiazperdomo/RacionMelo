export const calculateTotalForEachProduct = payload => {
	return {
		type: 'CALCULAR_CART_FOR_EACH_PRODUCT',
		payload,
	}
} 

export const addToCart = payload => {
	return {
		type: 'ADD_TO_CART',
		payload,
	}
}

export const removeFromCart = payload => {
	return {
		type: 'REMOVE_FROM_CART',
		payload,
	}
}

export const calculateCartTotal = payload => {
	return {
		type: 'CALCULATE_CART_TOTAL',
		payload,
	}
}