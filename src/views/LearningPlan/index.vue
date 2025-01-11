<template>
  <div class="app-container">
    <header class="header">
      <h1>学习计划</h1>
      <div class="header-right">
        <el-button icon="User" text></el-button>
        <el-button icon="Setting" text></el-button>
        <el-button icon="Share" text></el-button>
      </div>
    </header>
    
    <div class="main-content">
      <div class="left-section">
        <Calendar />
        <StudyProgress />
      </div>
      <div class="center-section">
        <DailyTarget />
        <DailyPlan />
      </div>
      <div class="right-section">
        <StudyStats />
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from '../../components/Calendar.vue'
import DailyTarget from './components/DailyTarget.vue'
import DailyPlan from './components/DailyPlan.vue'
import StudyProgress from './components/StudyProgress.vue'
import StudyStats from './components/StudyStats.vue'

export default {
  name: 'LearningPlan',
  components: {
    Calendar,
    DailyTarget,
    DailyPlan,
    StudyProgress,
    StudyStats
  }
}
</script>

<style scoped>
.app-container {
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

h1 {
  font-size: 24px;
  font-weight: 500;
  color: #333;
}

.main-content {
  display: grid;
  grid-template-columns: 380px 1fr 380px;
  gap: 24px;
  align-items: start;
}

/* 所有卡片容器的通用样式 */
.calendar-section,
.daily-target,
.daily-plan,
.study-progress,
.study-stats {
  background: #f5fffd;  /* 统一使用浅青色背景 */
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

/* 如果有卡片内的白色背景元素，可以保持白色 */
.course-item,
.task-item {
  background: #fff;
}
</style> 