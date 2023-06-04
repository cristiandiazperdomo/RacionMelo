// CART

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

export const addDeliveryInfo = payload => {
	return {
		type: 'DELIVERY_INFO',
		payload,
	}
}

// COMMENTS

export const addComment = payload => {
	return {
		type: 'ADD_COMMENT',
		payload,
	}
}

export const likedComment = payload => {
	return {
		type: 'LIKED_COMMENT',
		payload,
	}
}

export const removeComment = payload => {
	return {
		type: 'REMOVE_COMMENT',
		payload,
	}
}

export const markAsSpam = (payload) => {
	return {
		type: 'MARK_AS_SPAM',
		payload,
	}
}