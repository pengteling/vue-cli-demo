// const ChildComponent = {
//   name: 'ChildComponent',
//   props: ['name'],
//   render () {
//     return (
//       <div>
//         <h2>子组件 { this.name } </h2>
//       </div>
//     )
//   }
// }

const ChildComponent = ({ props }) => {
  return (
    <div class="child-jsx">
      <h2>hi {props.name}</h2>
    </div>
  )
}

export default{
  // components: {
  //   ChildComponent
  // },
  render () {
    return (
      <div>
        <ChildComponent name="test" />
      </div>
    )
  }
}
