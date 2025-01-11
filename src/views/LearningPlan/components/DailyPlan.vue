<template>
  <div class="daily-plan">
    <h2>每日学习计划</h2>
    <div class="plan-list">
      <div v-for="(course, index) in courses" :key="index" class="plan-item">
        <div class="course-info">
          <span class="course-name">{{ course.name }}</span>
          <span class="course-time">{{ course.time }}</span>
        </div>
        <div class="course-status">
          <span :class="['status', course.status]">{{ getStatusText(course.status) }}</span>
          <span class="action">
            <span class="question-mark">?</span>
            <span class="play-icon">▶</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DailyPlan',
  data() {
    return {
      courses: [
        { name: 'Managing Projects and Risks', time: "Today's", status: 'in-progress' },
        { name: 'Defining Project Scope', time: "Tomorrow's", status: 'in-progress' },
        { name: 'Planning for Business Analysts', time: 'Thursday,', status: 'not-started' },
        { name: 'Usability Testing for UX Design', time: '13/01/2021', status: 'not-started' },
        { name: 'Scrum Essentials', time: 'Friday, January', status: 'not-started' },
        { name: 'Project Stakeholder Management', time: 'Sunday,', status: 'in-progress' },
        { name: 'UX Design and Wireframes', time: 'Tuesday,', status: 'in-progress' },
        { name: 'Agile Contracting', time: 'Thursday,', status: 'not-started' }
      ]
    }
  },
  methods: {
    getStatusText(status) {
      return status === 'in-progress' ? 'In progress' : 'Not started'
    }
  }
}
</script>

<style scoped>
.daily-plan {
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-top: 24px;
  height: var(--card-height);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 0;
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
}

.plan-list {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.plan-list::-webkit-scrollbar {
  width: 6px;
}

.plan-list::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 3px;
}

.plan-list::-webkit-scrollbar-track {
  background-color: transparent;
}

.plan-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.course-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.course-name {
  font-size: 14px;
  color: #333;
}

.course-time {
  font-size: 12px;
  color: #666;
}

.course-status {
  display: flex;
  align-items: center;
  gap: 15px;
}

.status {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 4px;
}

.status.in-progress {
  background: #e8f5e9;
  color: #4caf50;
}

.status.not-started {
  background: #f5f5f5;
  color: #999;
}

.action {
  display: flex;
  gap: 10px;
}

.question-mark, .play-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
}
</style> 