import { GOODSLIST, ADMININFO, ADDCART, ADDCOUNT, SUBCOUNT } from "./mutations-type";
import Vue from 'vue'
export default {
    [GOODSLIST](state, { goods }) {
        state.goodslist = goods;
    },
    [ADMININFO](state, { admin }) {
        state.admininfo = admin;
    },
    [ADDCART](state, { onegood }) {
        let flag = true
        state.cartdata.forEach(item => {
            if (item.id === onegood.id) {
                onegood.count++
                    flag = false
            }
        })
        if (flag) {
            //onegood.count = 1 在Vue中添加属性,要通过Vue,set
            Vue.set(onegood, "count", 1)
            state.cartdata.push(onegood)
        }
    },
    [ADDCOUNT](state, { item }) {
        if (item.count) {
            item.count++
        }
    },
    [SUBCOUNT](state, { item }) {
        if (item.count) {
            item.count--
                if (item.count < 1) {
                    item.count = 1
                }
        }
    },
};