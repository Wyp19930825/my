import ajax from './ajax'
export const goodsList = () => ajax('/api/goods/all')
export const goodsOne = (id) => ajax('/api/goods/one', { id })
export const adminLogin = (user, pass) => ajax('/api/admin/login', { user, pass }, "POST")