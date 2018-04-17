<script>
import ChildComponent from './components/ChildComponent.jsx'

export default {
  data: () => ({
    list: [
      { name: 'milkmidi', age: 18 },
      { name: '奶綠茶', age: 17 }
    ]
  }),
  components: {
    ChildComponent
  }
}
</script>
<template>
  <section>
    <ChildComponent
      v-for="o in list"
      :key="o.name"
      v-bind="o"
       />
  </section>
</template>
