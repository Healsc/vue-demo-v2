<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ reversedMessage }}</div>
    <button @click="changeName">changename</button>
    <button @click="changeAge">changeage</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "zs",
      age: 1024,
      message: "hello",
    };
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      console.log(this.name);
      console.log(this.age);
      // `this` 指向 vm 实例
      // return this.message.split("").reverse().join("");
      return this.name + this.age;
    },
  },
  methods: {
    changeName() {
      this.name = "lisi";
    },
    changeAge() {
      this.age++;
    },
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
