<template>
  <div class="background">
    <div class="box">
      <h1>Welcome</h1>
      <div class="inputBox">
        <input placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button id="login" type="submit" @click="login">Log In</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      login() {
        this.$router.push({ path: '/body' })
      }
    }
  }
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 300;
  }

  .background {
    font-family: 'Source Sans Pro', sans-serif;
    color: white;
    font-weight: 300;
    height: 100%;
    background: linear-gradient(to bottom right, rgb(255, 149, 105) 0%, rgb(241, 58, 47) 100%);

    display: flex;
    align-items: center; /*定义body的元素垂直居中*/
    justify-content: center; /*定义body的里的元素水平居中*/

    overflow: hidden;

    ::-webkit-input-placeholder { /* WebKit browsers */
      font-family: 'Source Sans Pro', sans-serif;
      color: white;
      font-weight: 300;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      font-family: 'Source Sans Pro', sans-serif;
      color: white;
      opacity: 1;
      font-weight: 300;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
      font-family: 'Source Sans Pro', sans-serif;
      color: white;
      opacity: 1;
      font-weight: 300;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
      font-family: 'Source Sans Pro', sans-serif;
      color: white;
      font-weight: 300;
    }


    .box {
      position: relative;
      height: fit-content;
      min-width: 600px;

      h1 {
        width: fit-content;
        margin: 0 auto 15px auto;
      }

      .inputBox {
        display: flex;
        flex-direction: column;

        input {
          display: block;
          appearance: none; /*防止修改默认样式后样式变换抖动*/
          padding: 10px 15px;
          font-size: 20px;
          width: 300px;
          text-align: center;
          border-radius: 5px;
          border: 1px solid rgba(255, 255, 255, 0.5);
          background-color: rgba(255, 255, 255, 0.5);
          margin: 10px auto;
          outline: 0;
          font-weight: 600;
          color: white;
          transition-duration: 0.25s;

          &:hover {
            background-color: rgba(255, 255, 255, 0.7);
          }

          &:focus {
            background-color: white;
            width: 400px;
            color: #F13A2F;
          }
        }

        button {
          padding: 10px 15px;
          font-size: 20px;
          width: 300px;
          font-weight: bold;
          margin: 10px auto;
          outline: 0;
          border: 1px solid white;
          border-radius: 5px;
          cursor: pointer;
          color: #F13A2F;
          transition-duration: 0.25s;
          &:hover {
            border-color: #F13A2F;
            background-color: #F13A2F;
            color: white;
          }
          &:active {
            background-color: #bf2f26;
          }
        }
      }
    }
  }

</style>
