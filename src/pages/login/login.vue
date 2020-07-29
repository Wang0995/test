<template>
  <div>
    <div id="back">
      <div class="backRight"></div>
      <div class="backLeft"></div>
    </div>

    <div id="slideBox">
      <div class="topLayer">
        <div class="left">
          <div class="content">
            <h2>Sign Up</h2>
              <input type="text" style="color: darkgray" placeholder="username" v-model="signupUsername"/>
              <input type="password" style="color: darkgray" placeholder="password" v-model="signupPassword"/>
            <div class="button-group">
              <button>Sign up</button>
              <button id="goLeft" class="off">Log In</button>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="content">
            <h2>Log In</h2>
              <input type="text" placeholder="username" v-model="loginUsername"/>
              <input type="password" placeholder="password" v-model="loginPassword"/>
            <div class="button-group">
            <button id="login" type="submit" @click="login">Log In</button>
            <button id="goRight" class="off">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Inspiration from: http://ertekinn.com/loginsignup/-->
</template>

<script>
  export default {
    data () {
      return {
        loginUsername: '',
        loginPassword: '',
        signupUsername: '',
        signupPassword: '',
      }
    },
    methods: {
      login () {
        console.log(this.loginUsername)
        console.log(this.loginPassword)
        this.$router.push({ path: '/body' })
      }
    }
  }
  $(document).ready(function () {
    $('#goRight').on('click', function () {
      $('#slideBox').animate({
        'marginLeft': '0'
      });
      $('.topLayer').animate({
        'marginLeft': '100%'
      });
    });
    $('#goLeft').on('click', function () {
      $('#slideBox').animate({
        'marginLeft': '50%'
      });
      $('.topLayer').animate({
        'marginLeft': '0'
      });
    });
  });
</script>

<style lang="scss" scoped>
  body {
    height: 100%;
    overflow: hidden;
    width: 100% !important;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .backRight {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    background: #3498db url('./../../assets/images/bridge.jpg');
    background-size: cover;
    background-position: 50% 50%;
  }

  .backLeft {
    position: absolute;
    left: 0;
    width: 50%;
    height: 100%;
    background: #e74c3c url('./../../assets/images/sea.jpg');
    background-size: cover;
    background-position: 50% 50%;
  }

  #back {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -999;
  }

  #slideBox {
    width: 50%;
    max-height: 100%;
    height: 100%;
    overflow: hidden;
    margin-left: 50%;
    position: absolute;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .topLayer {
    width: 200%;
    height: 100%;
    position: relative;
    left: -100%;
  }

  .left {
    width: 50%;
    height: 100%;
    background: #2C3034;
    left: 0;
    position: absolute;
  }

  .right {
    width: 50%;
    height: 100%;
    background: #f9f9f9;
    right: 0;
    position: absolute;
  }

  .content {
    width: 250px;
    margin: 0 auto;
    top: 30%;
    position: absolute;
    left: 50%;
    margin-left: -125px;
  }

  .content h2 {
    color: #f13a2f;
    font-weight: 300;
    font-size: 35px;
  }

  .button-group {
    margin-top: 30px;
  }

  button {
    background: #f13a2f;
    padding: 10px 16px;
    width: 100px;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
    line-height: 16px;
    letter-spacing: 0.5px;
    border-radius: 2px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
    border: 0;
    outline: 0;
    transition: all 0.25s;
    cursor: pointer;
  }

  button:hover {
    background: #f13a2f;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
  }

  .off {
    background: none;
    color: #f13a2f;
    box-shadow: none;
  }

  .right .off:hover {
    background: #eee;
    color: #f13a2f;
    box-shadow: none;
  }

  .left .off:hover {
    box-shadow: none;
    color: #f13a2f;
    background: #363A3D;
  }

  input {
    background: transparent;
    border: 0;
    outline: 0;
    border-bottom: 1px solid #45494C;
    font-size: 14px;
    color: #45494C;
    padding: 8px 0;
    margin-top: 20px;
    width: 205px;
  }

  input:focus {
    border-bottom: 1px solid #f13a2f;
  }
</style>
