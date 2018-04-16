<template>
  <div class="container">
    <computer>
      <!-- <template slot-scope="props"> -->
        <!-- {{ props }} -->
        <ul slot-scope="props">
          <li v-for="item in props.data" :key="item">{{item}}</li>
        </ul>
      <!-- </template> -->
    </computer>
  </div>
</template>

<script>
import Computer from './components/Computer'
export default {
  name: 'App',
  components: {
    Computer
  }
}
</script>
