const reducer = (state, action) => {
	switch(action.type) {
	case 'CALCULAR_CART_FOR_EACH_PRODUCT': 
		const newState = { ...state };
		
		newState.cart.map(item => {
			if (item.id === action.payload.id) {
				console.log(item)
				return {
					...newState.cart,
					total: calculateTotalForEachProduct(item),
				};
			}
		});

		return {
			...state,
			newState,
		}
	case 'GET_STATE': {
		return state;
	}
	default: 
		return state;
	}
}

export default reducer;