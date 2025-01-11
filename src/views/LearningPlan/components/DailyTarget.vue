<template>
  <div class="daily-target">
    <h2>每日学习目标</h2>
    <div class="course-list">
      <div v-for="course in courses" :key="course.name" class="course-item">
        <div class="course-info">
          <div class="course-name">{{ course.name }}</div>
          <div class="course-time">{{ course.time }}</div>
        </div>
        <div class="course-status">
          <el-tag :type="getStatusType(course.status)" size="small" effect="plain">
            {{ course.status }}
          </el-tag>
          <div class="course-actions">
            <el-button text circle>?</el-button>
            <el-button text circle>▶</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const courses = [
  {
    name: 'Managing Projects and Risks',
    time: "Today's",
    status: 'In progress'
  },
  {
    name: 'Defining Project Scope',
    time: "Tomorrow's",
    status: 'In progress'
  },
  {
    name: 'Planning for Business Analysts',
    time: 'Thursday, 13/01/2021',
    status: 'Not started'
  }
]

const getStatusType = (status) => {
  return status === 'In progress' ? '' : 'info'
}
</script>

<style scoped>
.daily-target {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  height: var(--card-height);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.course-list {
  flex: 1;
  overflow-y: auto;
  margin-top: 20px;
}

.course-list::-webkit-scrollbar {
  width: 6px;
}

.course-list::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 3px;
}

.course-list::-webkit-scrollbar-track {
  background-color: transparent;
}

.course-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
}

.course-name {
  font-size: 15px;
  color: #333;
  margin-bottom: 4px;
}

.course-time {
  font-size: 13px;
  color: #999;
}

.course-status {
  display: flex;
  align-items: center;
  gap: 16px;
}

.course-status :deep(.el-tag) {
  background: #fff8e6;
  border-color: #fff8e6;
  color: #ffb020;
}

.course-status :deep(.el-tag.el-tag--info) {
  background: #f5f5f5;
  border-color: #f5f5f5;
  color: #999;
}

.course-actions {
  display: flex;
  gap: 8px;
}

.course-actions :deep(.el-button) {
  font-size: 18px;
  color: #666;
}
</style> 