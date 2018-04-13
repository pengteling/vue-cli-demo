<template>
  <div class="helper">
      <span class="left">{{ leftItemsCount }} items left</span>
      <span class="tabs">
        <span
          v-for="state in states"
          :key="state"
          :class="{actived: state===filter}"
          @click="toggleFilter(state)"
        >
        {{ state }}
        </span>
      </span>
      <span class="clear" v-show="isHaveCompleted" @click="clearComplete">Clear Completed</span>
    </div>
</template>
<script>
export default {
  name: 'TabsComponent',
  props: {
    // "left-items-count":{
    leftItemsCount: {
      type: Number
    },
    filter: {
      type: String
    },
    isHaveCompleted: {
      type: Boolean
    }
  },
  data () {
    return {
      states: ['All', 'Active', 'Completed']
    }
  },
  methods: {
    toggleFilter (state) {
      this.$emit('toggle-tab-filter', state)
    },
    clearComplete () {
      this.$emit('clear-completed')
    }
  }
}
</script>
<style lang="scss" scoped>
.helper{
  height:40px;
  line-height: 40px;
}

.left{
  float: left;
  margin-right: 100px;
}
.clear{
  cursor: pointer;
  float: right;
}
.tabs span{
  padding:5px 14px;
  &.actived{
    border:#c00 1px solid;
  }
  border-radius: 3px;
  cursor: pointer;
}
</style>
