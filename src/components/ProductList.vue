<template>
  <div class="product-list">
    <h2>商品列表</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>价格: {{ product.price }} 元</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        { id: 1, name: '商品1', description: '这是商品1的描述', price: 100 },
        { id: 2, name: '商品2', description: '这是商品2的描述', price: 200 },
        { id: 3, name: '商品3', description: '这是商品3的描述', price: 300 }
      ]
    };
  }
}
</script>

<style scoped>
.product-list {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.product-list h2 {
  text-align: center;
}
.product-list ul {
  list-style: none;
  padding: 0;
}
.product-list li {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
}
.product-list li:last-child {
  border-bottom: none;
}
</style>
