<template>
  <div class="main">
    <div class="title">
      <a class="active" href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
    </div>
    <div class="sign-up-container">
      <el-form ref="userForm" :model="user">
        <el-form-item
          class="input-prepend restyle"
          :rules="[
            {
              required: true,
              message: '请输入手机号或邮箱',
              trigger: 'blur',
            },
            { validator: checkPhone, trigger: 'blur' },
          ]"
        >
          <div>
            <el-input
              type="text"
              placeholder="手机号或邮箱"
              v-model="user.mobileOrEmail"
            />
            <i class="iconfont icon-phone" />
          </div>
        </el-form-item>
        <el-form-item
          class="input-prepend"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <div>
            <el-input
              type="password"
              placeholder="密码"
              v-model="user.password"
            />
            <i class="iconfont icon-password" />
          </div>
        </el-form-item>
        <div class="btn">
          <input
            type="button"
            class="sign-in-button"
            value="登录"
            @click="submitLogin()"
          />
        </div>
      </el-form>
      <!-- 更多登录方式 -->
      <div class="more-sign">
        <h6>社交帐号登录</h6>
        <ul>
          <li>
            <a
              id="weixin"
              class="weixin"
              target="_blank"
              href="http://localhost:9001/api/ucenter/wx/login"
              ><i class="iconfont icon-weixin"
            /></a>
          </li>
          <li>
            <a id="qq" class="qq" target="_blank" href="#"
              ><i class="iconfont icon-qq"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import "~/assets/css/sign.css";
import "~/assets/css/iconfont.css";
import cookie from "js-cookie";
import loginApi from "@/api/login";
export default {
  layout: "sign",
  data() {
    return {
      user: {
        //封装用于登录的用户对象
        mobileOrEmail: "",
        password: "",
      },
      //用于获取接口传来的token中的对象
      loginInfo: {},
    };
  },
  methods: {
    submitLogin() {
      loginApi.submitLogin(this.user).then((response) => {
        if (response.data.success) {
          //把token存在cookie中、也可以放在localStorage中
          //参数1：cookie名称，参数2：具体的值，参数3：作用范围
          cookie.set("guli_token", response.data.data.token, {
            domain: "localhost",
          });
          //登录成功根据token获取用户信息
          loginApi.getLoginInfo().then((response) => {
            this.loginInfo = JSON.stringify(response.data.data.userInfo);
            //将用户信息记录cookie
            cookie.set("guli_ucenter", this.loginInfo, { domain: "localhost" });
            //跳转页面
            window.location.href = "/";
            //this.$router.push({path:'/'})
          });
        }
      });
    },
    checkPhone(rule, value, callback) {
      //debugger
      if (
        /^1[34578]\d{9}$/.test(value) ||
        /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
          value
        )
      ) {
        return callback();
      }
      return callback(new Error("格式不正确"));
    },
  },
};
</script>
<style>
.el-form-item__error {
  z-index: 9999999;
}
</style>
