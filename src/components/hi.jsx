export default{
  name: 'Hi',
  // template:`<div>test</div>`
  data () {
    return {
      msg: 'hi,jsx!'
    }
  },

  render () {
    return (
      <div id="milkmidi">
        { this.msg }
      </div>
    )
  }
}
