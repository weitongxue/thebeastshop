export default {
//储存分类数据
SAVE_CATEGORIES(state,data){
  state.categories = data
},
//储存所有商品数据
SAVE_PRODUCTS(state,data){
  state.products = data
},
//储存首页推荐商品数据
SEAV_REXOMMEND(state,data){
  state.recommend = data
}


}