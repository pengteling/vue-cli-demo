<template functional>
 <div class="child-1">
 <p>in child1:</p>
 <p>props: {{props}}</p>
 <p>$attrs: {{data}}</p>

 <hr>
 <!-- C组件中能直接触发test的原因在于 B组件调用C组件时 使用 v-on 绑定了$listeners 属性 -->
 <!-- 通过v-bind 绑定$attrs属性，C组件可以直接获取到A组件中传递下来的props（除了B组件中props声明的） -->

 </div>
</template>
<script>

export default {
  // props: ['pChild1']

  // mounted () {
  //   this.$emit('test1')
  // }
}
</script>
