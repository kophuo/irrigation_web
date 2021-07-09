<template>
  <div class="login_container">
    <div class="login_box">
      <!--   头像   -->
      <div class="login_avatar">
        <img src="../assets/logo.png" alt="头像">
      </div>
      <!--   登录表单   -->
      <el-form class="login_form" :rules="rules" ref="loginFormRef" :model="loginForm">
        <!--   用户名   -->
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user-solid" type="text" v-model="loginForm.username" ></el-input>
        </el-form-item>
        <!--   密码   -->
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" type="password" v-model="loginForm.password" ></el-input>
        </el-form-item>
        <!--   按钮   -->
        <el-form-item class="login_btn">
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button type="info" @click="reset()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      // 登录表单
      loginForm: {
        username: '',
        password: ''
      },
      // 表单验证规则
      rules: {
        // 验证username是否合法
        username: [
          { required: true, message: '用户名不能为空' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '密码不能为空' }
        ]
      }
    }
  },
  methods: {
    // 重置登录表单
    reset () {
      console.log(this.loginForm)
      this.$refs.loginFormRef.resetFields()
    },
    // 登录
    login () {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return this.$message.warning('登录参数验证无效，请检查并重新输入')
        const res = await this.$http.post('/entrance/login', this.loginForm)
        console.log(res)
        if (res.data.code === 'failure') return this.$message.error('登录失败，请检查用户名与密码')
        this.$message.success('登录成功')
        await this.$router.push('/home')
      })
    }
  }
}
</script>

<style scoped>
  .login_container {
    height: 100%;
    background-color: #2b4b6b;
  }
  .login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .login_box .login_avatar {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }
  .login_box .login_avatar img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #eee;
  }
  .login_btn {
    display: flex;
    justify-content: flex-end;
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
</style>
