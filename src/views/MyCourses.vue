<template>
  <div class="my-courses">
    <div class="header">
      <h1>我的课程</h1>
      <div class="user-avatar">
        <el-icon :size="24"><User /></el-icon>
      </div>
    </div>

    <div class="content-grid">
      <!-- 使用相同的日历组件 -->
      <div class="left-section">
        <Calendar />
      </div>

      <!-- 课程进度部分 -->
      <div class="progress-section">
        <h2>课程进度</h2>
        <div class="progress-chart">
          <div class="months">
            <span v-for="month in months" :key="month">{{ month }}月</span>
          </div>
          <div class="courses">
            <div v-for="course in courses" :key="course.name" class="course-progress">
              <span class="course-name">{{ course.name }}</span>
              <div class="progress-bar">
                <div class="progress" :style="{ width: course.progress + '%', left: course.start + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 课程表部分 -->
      <div class="schedule-section">
        <div class="schedule-header">
          <h2>12月8日课程表</h2>
          <el-button text>详情 <el-icon><ArrowRight /></el-icon></el-button>
        </div>
        <div class="course-list">
          <div v-for="course in todayCourses" :key="course.id" class="course-item">
            <img :src="course.image" :alt="course.name">
            <div class="course-info">
              <h3>{{ course.name }}</h3>
              <p>{{ course.room }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 任务列表部分 -->
      <div class="tasks-section">
        <h2>任务列表</h2>
        <div class="task-groups">
          <div class="task-group">
            <div class="task-header">
              <div class="small-avatar">
                <el-icon :size="16"><User /></el-icon>
              </div>
              <span>12月8号的任务</span>
            </div>
            <div class="task-list">
              <div v-for="task in currentTasks" :key="task.id" class="task-item">
                <el-checkbox v-model="task.completed">{{ task.name }}</el-checkbox>
                <div class="task-info">
                  <span class="task-date">{{ task.date }}</span>
                  <el-button type="primary" size="small">查看详情</el-button>
                  <el-button type="success" size="small">空白评估</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 添加底部按钮区域 -->
    <div class="bottom-action">
      <el-button 
        type="primary" 
        @click="goToQuestionnaire"
        class="plan-button"
        size="large"
      >
        制定我的学习计划
        <el-icon class="el-icon--right"><ArrowRight /></el-icon>
      </el-button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { ArrowLeft, ArrowRight, User } from '@element-plus/icons-vue'
import Calendar from '../components/Calendar.vue'  // 从 src/components 导入
import { useRouter } from 'vue-router'

export default {
  name: 'MyCourses',
  components: {
    ArrowLeft,
    ArrowRight,
    User,
    Calendar
  },
  setup() {
    const months = ['九', '十', '十一', '十二', '一', '二']
    
    const courses = ref([
      { name: '实验报告作业', progress: 30, start: 0 },
      { name: '周末汇报', progress: 40, start: 20 },
      { name: '期末考试', progress: 50, start: 60 },
      { name: '学习计划', progress: 70, start: 80 }
    ])

    const todayCourses = ref([
      { id: 1, name: '计算机组成原理', room: '3-104', image: '/images/computer.png' },
      { id: 2, name: 'JAVA语言', room: '12-706', image: '/images/java.png' },
      { id: 3, name: '机器学习', room: '12-512', image: '/images/machine-learning.png' },
      { id: 4, name: '数据结构', room: '12-501', image: '/images/data-structure.png' }
    ])

    const currentTasks = ref([
      { id: 1, name: '数据结构大作业', completed: false, date: '2024/12/8-2024/12/15' },
      { id: 2, name: '计算机网络通信作业', completed: false, date: '2024/12/8-2024/12/10' },
      { id: 3, name: '小组项目讨论', completed: false, date: '2024/12/8' }
    ])

    // 生成日历数据
    const generateCalendarDays = () => {
      // 这里简化处理，实际应该根据真实日期计算
      return Array(35).fill(null).map((_, index) => ({
        date: new Date(2023, 11, index - 3),
        dayOfMonth: index - 3,
        currentMonth: index > 3 && index < 34
      }))
    }

    const router = useRouter()
    
    const goToQuestionnaire = () => {
      router.push('/questionnaire')
    }

    return {
      months,
      courses,
      todayCourses,
      currentTasks,
      calendarDays: generateCalendarDays(),
      goToQuestionnaire
    }
  }
}
</script>

<style scoped>
.my-courses {
  padding: 20px 40px;
  max-width: 1440px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.content-grid {
  display: grid;
  grid-template-columns: 380px 1fr;  /* 调整为与 LearningPlan 相同的布局 */
  gap: 24px;
}

/* 日历部分 */
.calendar-section {
  background: #f5fffd;
  border-radius: 12px;
  padding: 20px;
}

.month-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 10px;
  font-size: 14px;
  color: #666;
}

.days-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.day-cell {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.day-cell:hover {
  background: #e0f2f1;
}

.other-month {
  color: #999;
}

/* 课程进度部分 */
.progress-section {
  background: #f5fffd;
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;
}

.progress-chart {
  margin-top: 20px;
  width: 100%;
}

.months {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 10px;
}

.course-progress {
  margin-bottom: 15px;
  position: relative;
}

.progress-bar {
  height: 20px;
  background: #e0f2f1;
  border-radius: 10px;
  position: relative;
  margin-top: 5px;
  overflow: hidden;
}

.progress {
  position: absolute;
  height: 100%;
  background: #26a69a;
  border-radius: 10px;
  max-width: 100%;
}

.course-name {
  font-size: 14px;
  margin-bottom: 4px;
}

/* 课程表部分 */
.schedule-section {
  background: #f5fffd;
  border-radius: 12px;
  padding: 20px;
}

.schedule-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.course-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.course-item {
  display: flex;
  align-items: center;
  gap: 10px;
  background: white;
  padding: 10px;
  border-radius: 8px;
}

.course-item img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
}

.course-info h3 {
  font-size: 14px;
  margin: 0;
}

.course-info p {
  font-size: 12px;
  color: #666;
  margin: 4px 0 0;
}

/* 任务列表部分 */
.tasks-section {
  background: #f5fffd;
  border-radius: 12px;
  padding: 20px;
}

.task-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.small-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #e0f2f1;
}

.task-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.task-date {
  font-size: 12px;
  color: #666;
}

/* 移除原来的日历样式，使用 Calendar 组件的样式 */
.left-section {
  background: #f5fffd;
  border-radius: 12px;
  height: var(--card-height);
}

.header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.plan-button {
  background-color: #26a69a;
  border-color: #26a69a;
}

.plan-button:hover {
  background-color: #00897b;
  border-color: #00897b;
}

h1 {
  margin: 0;  /* 移除标题的默认边距 */
}

.bottom-action {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  padding: 20px 0;
}

.plan-button {
  background-color: #26a69a;
  border-color: #26a69a;
  padding: 0 40px;  /* 增加按钮的水平内边距 */
  height: 44px;     /* 增加按钮高度 */
  font-size: 16px;  /* 增加字体大小 */
}

.plan-button:hover {
  background-color: #00897b;
  border-color: #00897b;
}
</style> 