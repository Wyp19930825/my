import { GOODSLIST, ADMININFO, ADDCART, ADDCOUNT, SUBCOUNT } from "./mutations-type";
import { goodsList } from "../api";

export default {
    async getGoodsList({ commit, state }) {
        const goodsdata = await goodsList()
        if (goodsdata.fn === 0) {
            let goods = goodsdata.data
            commit(GOODSLIST, { goods })
        }
    },
    recordadmin({ commit }, admin) {
        commit(ADMININFO, { admin })
    },
    addGoods({ commit }, onegood) {
        commit(ADDCART, { onegood })
    },
    updateNumGoods({ commit }, { isAdd, item }) {
        if (isAdd) {
            commit(ADDCOUNT, { item })
        } else {
            commit(SUBCOUNT, { item })
        }
    },
}