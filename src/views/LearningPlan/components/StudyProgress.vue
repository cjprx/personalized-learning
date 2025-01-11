<template>
  <div class="study-progress">
    <h2>学习进度</h2>
    <div class="progress-content">
      <div class="progress-item">
        <div class="progress-header">
          <span class="progress-label">课程完成度</span>
          <span class="progress-value">70%</span>
        </div>
        <el-progress 
          :percentage="70"
          :show-text="false"
          :stroke-width="8"
          class="custom-progress"
        />
      </div>

      <div class="progress-stats">
        <div class="stat-item">
          <div class="stat-label">Lessons and activities</div>
          <div class="stat-value">5</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Completed courses</div>
          <div class="stat-value">12</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Certifications earned</div>
          <div class="stat-value">9</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Total study time</div>
          <div class="stat-value">Time</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Upcoming courses</div>
          <div class="stat-value">2</div>
        </div>
        <div class="stat-item">
          <div class="stat-label">Organized courses</div>
          <div class="stat-value">1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.study-progress {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  height: var(--card-height);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
}

.progress-content {
  flex: 1;
  margin-top: 20px;
  overflow-y: auto;
}

.progress-content::-webkit-scrollbar {
  width: 6px;
}

.progress-content::-webkit-scrollbar-thumb {
  background-color: #e0e0e0;
  border-radius: 3px;
}

.progress-content::-webkit-scrollbar-track {
  background-color: transparent;
}

.progress-item {
  margin-bottom: 24px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.progress-label {
  font-size: 14px;
  color: #333;
}

.progress-value {
  font-size: 14px;
  color: #1890ff;
  font-weight: 500;
}

.custom-progress :deep(.el-progress-bar__outer) {
  background-color: #f0f0f0;
  border-radius: 4px;
}

.custom-progress :deep(.el-progress-bar__inner) {
  background-color: #1890ff;
  border-radius: 4px;
  transition: width 0.6s ease;
}

.progress-stats {
  display: grid;
  gap: 16px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f5f7fa;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.stat-item:hover {
  background: #e6f7ff;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.stat-value {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}
</style> 