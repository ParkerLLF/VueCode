// 入口文件
import Vue from 'vue'
// 配置vuex的步骤
// 1. 运行 cnpm i vuex -S 
// 2. 导入包
import Vuex from 'vuex'
// 3. 注册vuex到vue中
Vue.use(Vuex)
// 4. new Vuex.Store() 实例，得到一个 数据仓储对象
var store = new Vuex.Store({
  state: {
    // 大家可以把 state 想象成 组件中的 data ,专门用来存储数据的
    // 如果在 组件中，想要访问，store 中的数据，只能通过 this.$store.state.*** 来访问
    count: 0
  },
  mutations: {
    // 注意： 如果要操作 store 中的 state 值，只能通过 调用 mutations 提供的方法，才能操作对应的数据，不推荐直接操作 state 中的数据，因为 万一导致了数据的紊乱，不能快速定位到错误的原因，因为，每个组件都可能有操作数据的方法；
    increment(state) {
      state.count++
    },
    // 注意： 如果组件想要调用 mutations 中的方法，只能使用 this.$store.commit('方法名')
    // 这种 调用 mutations 方法的格式，和 this.$emit('父组件中方法名')
    subtract(state, obj) {
      // 注意： mutations 的 函数参数列表中，最多支持两个参数，其中，参数1： 是 state 状态； 参数2： 通过 commit 提交过来的参数；
      console.log(obj)
      state.count -= (obj.c + obj.d)
    }
  },
  getters: {
    // 注意：这里的 getters， 只负责 对外提供数据，不负责 修改数据，如果想要修改 state 中的数据，请 去找 mutations
    optCount: function (state) {
      return '当前最新的count值是：' + state.count
    }
    // 经过咱们回顾对比，发现 getters 中的方法， 和组件中的过滤器比较类似，因为 过滤器和 getters 都没有修改原数据， 都是把原数据做了一层包装，提供给了 调用者；
    // 其次， getters 也和 computed 比较像， 只要 state 中的数据发生变化了，那么，如果 getters 正好也引用了这个数据，那么 就会立即触发 getters 的重新求值；
  }
})

// 总结：
// 1. state中的数据，不能直接修改，如果想要修改，必须通过 mutations
// 2. 如果组件想要直接 从 state 上获取数据： 需要 this.$store.state.***
// 3. 如果 组件，想要修改数据，必须使用 mutations 提供的方法，需要通过 this.$store.commit('方法的名称'， 唯一的一个参数)
// 4. 如果 store 中 state 上的数据， 在对外提供的时候，需要做一层包装，那么 ，推荐使用 getters, 如果需要使用 getters ,则用 this.$store.getters.***


import App from './App.vue'

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  store // 5. 将 vuex 创建的 store 挂载到 VM 实例上， 只要挂载到了 vm 上，任何组件都能使用 store 来存取数据
})