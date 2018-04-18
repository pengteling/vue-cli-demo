
const ChildComponent = {
  // functional: true,
  props: {
    name: String,
    age: Number
  },
  render (h, context) {
    console.log(context)
    // console.log(context)
    return (
      <div class="child-jsx">
        <h3>{this.name} - {this.age}</h3>
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
            ><span>123</span><b slot="123"></b>
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
