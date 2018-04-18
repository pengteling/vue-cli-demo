
const ChildComponent = {
  functional: true,
  props: {
    name: String,
    age: Number
  },
  render (h, {props}) {
    console.log(props)
    // console.log(context)
    return (
      <div class="child-jsx">
        <h3>{props.name} - {props.age}</h3>
      </div>
    )
  }
}

export default {
  data: () => ({
    list: [
      { name: 'milkmidi', age: 18 },
      { name: '奶綠茶', age: 17 }
    ]
  }),
  methods: {
    handler () {

    }
  },
  render () {
    return (
      <section>
        {
          this.list.map(o =>
            <ChildComponent
              key={o.name}
              onChange={this.handler}
              {...{ props: o }}
            >
            </ChildComponent>
          )
          // React 版
          // <ChildComponent
          //  key={o.name}
          //  {...o} />)
        }
      </section>
    )
  }
}
