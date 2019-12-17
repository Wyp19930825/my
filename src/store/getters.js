export default {
    totalCount(state) {
        return state.cartdata.reduce((preTotal, item) => preTotal + item.count, 0)
    },
    totalPrice(state) {
        return state.cartdata.reduce((preTotal, item) => preTotal + item.count * item.price, 0)
    }
}