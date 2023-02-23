export const calculateTotalForEachProduct = payload => {
	return {
		type: 'CALCULAR_CART_FOR_EACH_PRODUCT',
		payload,
	}
} 

export const getState = () => {
	return {
		type: 'GET_STATE',
	}
} 