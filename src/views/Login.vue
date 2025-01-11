<template>
  <div class="login-container">
    <!-- 左侧介绍区域 -->
    <div class="intro-section">
      <div class="intro-content">
        <div class="logo">
          <el-icon :size="40" color="#fff"><User /></el-icon>
        </div>
        <h1>注册账号</h1>
        <p class="subtitle">加入我们，一起成长</p>
        
        <!-- 添加用户体验展示区域 -->
        <div class="user-experience">
          <div class="user-info">
            <div class="avatar">
              <el-icon :size="16"><User /></el-icon>
            </div>
            <span class="name">陈艳</span>
          </div>
          <p class="experience-text">注册学生成长计划账号，开始你的学习之旅</p>
          
          <!-- 添加轮播指示器 -->
          <div class="carousel-dots">
            <span class="dot active"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧登录表单 -->
    <div class="login-section">
      <div class="login-box">
        <h2>登录</h2>
        <p class="login-subtitle">加入我们，一起成长</p>
        
        <el-form class="login-form">
          <el-form-item>
            <el-input 
              v-model="username" 
              placeholder="请输入用户名"
              :prefix-icon="User"
            />
          </el-form-item>
          
          <el-form-item>
            <el-input 
              v-model="password" 
              type="password" 
              placeholder="请输入密码"
              :prefix-icon="Lock"
            />
          </el-form-item>

          <el-button type="primary" class="login-button" @click="handleLogin">
            注册
          </el-button>
        </el-form>

        <div class="divider">
          <span>or</span>
        </div>

        <div class="social-login">
          <el-button class="social-button">
            <el-icon><ChatDotRound /></el-icon>
            微信登录
          </el-button>
          <el-button class="social-button">
            <el-icon><Iphone /></el-icon>
            手机号登录
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { User, Lock, ChatDotRound, Iphone } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const username = ref('')
const password = ref('')

const handleLogin = () => {
  // 简单的登录验证
  if (username.value === 'admin' && password.value === '123456') {
    ElMessage.success('登录成功')
    router.push('/my-courses')
  } else {
    ElMessage.error('用户名或密码错误')
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  min-height: 100vh;
}

.intro-section {
  flex: 1;
  background-color: #f5fffd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #333;
}

.intro-content {
  max-width: 400px;
}

.logo {
  width: 64px;
  height: 64px;
  background: #26a69a;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.intro-content h1 {
  font-size: 32px;
  margin-bottom: 16px;
  color: #333;
}

.subtitle {
  font-size: 18px;
  color: #666;
  margin-bottom: 24px;
}

.author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 32px;
  height: 32px;
  background: #26a69a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.login-section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.login-box {
  width: 400px;
}

.login-box h2 {
  font-size: 24px;
  margin-bottom: 12px;
}

.login-subtitle {
  color: #666;
  margin-bottom: 32px;
}

.login-form {
  margin-bottom: 24px;
}

.login-button {
  width: 100%;
  height: 40px;
  background-color: #26a69a;
  border-color: #26a69a;
}

.login-button:hover {
  background-color: #00897b;
  border-color: #00897b;
}

.divider {
  display: flex;
  align-items: center;
  margin: 24px 0;
  color: #999;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #eee;
}

.divider span {
  padding: 0 16px;
}

.social-login {
  display: flex;
  gap: 16px;
}

.social-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

:deep(.el-input__wrapper) {
  padding: 1px 15px;
}

:deep(.el-input__inner) {
  height: 42px;
}

.user-experience {
  margin-top: 180px;
  padding: 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.name {
  font-size: 14px;
  color: #333;
}

.experience-text {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
}

.carousel-dots {
  display: flex;
  gap: 8px;
  justify-content: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e0e0e0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #26a69a;
  width: 24px;
  border-radius: 4px;
}
</style> 