<template>
  <div class="listRenderCss">
    <el-divider content-position="left">数组作为元素</el-divider>
    <ul style="background: #c724b1;">
      <li v-for="(item, index) in items" :key="item.message">
        索引：{{ index }}，内容：{{ item.message }}
      </li>
    </ul>
    <el-divider content-position="left">对象作为元素</el-divider>
    <ul style="background: #e4002b">
      <li v-for="(value, key, index) in object" :key="object.value">
        索引：{{ index }}，Key值：{{ key }}，内容：{{ value }}
      </li>
    </ul>
    <el-divider content-position="left">过滤和排序</el-divider>
    <ul v-for="n in evenNumbers" style="background: #ff6900;">
      <li>{{ n }}</li>
    </ul>
    <ul v-for="set in sets" style="background: #f6be00">
      <li v-for="n in even(set)">{{ n }}</li>
    </ul>
    <el-divider content-position="left">v-for和v-if一起使用</el-divider>
    <span>v-for的优先级大于v-if</span>
    <ul style="background: #00ab84">
      <li v-for="todo in todos" v-if="!todo.isComplete">
        {{ todo }}
      </li>
    </ul>
    <ul v-if="fadeTodos.length" style="background: #00a3e0">
      <li v-for="todo in fadeTodos">
        {{ todo }}
      </li>
    </ul>
    <el-divider content-position="left">组件上使用v-for</el-divider>
    <div id="todo-list-example">
      <form v-on:submit.prevent="addNewTodo">
        <label for="new-todo">Add a todo</label>
        <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="E.g. Feed the cat"
        >
        <button>Add</button>
      </form>
      <ul>
        <li
          v-for="(todo, index) in todos"
          v-bind:key="todo.id"
          v-bind:title="todo.title"
          v-on:remove="todos.splice(index, 1)"
        >{{ todo.title }}<button @click="todos.splice(index, 1)">Remove</button></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {message: 'Foo'},
          {message: 'Bar'}
        ],
        object: {
          title: 'How to do lists in Vue',
          author: 'Jane Doe',
          publishedAt: '2016-04-10'
        },
        numbers: [1412322, 23243, 386788, 499996, 553843],
        sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],
        fadeTodos: [
          {a: 'Tom'},
          {b: 'Jenny'},
          {c: 'Bob'},
          {isComplete: 'Calley'}
        ],
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Do the dishes',
          },
          {
            id: 2,
            title: 'Take out the trash',
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      even: function (numbers) {
        return numbers.filter(function (number) {
          return number % 2 === 0
        })
      },
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      },
    },
    computed: {
      evenNumbers: function () {
        return this.numbers.filter(function (number) {
          return number % 2 === 0
        })
      },

    }
  }
</script>

<style lang="scss">
  .listRenderCss {
    padding: 10px;
  }
</style>
