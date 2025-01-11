<template>
  <div class="study-stats">
    <h2>学习数据统计</h2>
    <div class="stats-container">
      <div class="stats-left">
        <div class="stat-item questions">
          <div class="stat-circle">
            <div class="stat-value">12</div>
            <div class="stat-label">闯关数</div>
          </div>
        </div>
        
        <div class="stat-item exercises">
          <div class="stat-circle">
            <div class="stat-value">9</div>
            <div class="stat-label">结课数</div>
          </div>
        </div>
      </div>

      <div class="completion-rate">
        <div class="progress-circle">
          <svg width="260" height="260" viewBox="0 0 260 260">
            <circle
              cx="130"
              cy="130"
              r="110"
              fill="none"
              stroke="#ffeaea"
              stroke-width="20"
            />
            <circle
              cx="130"
              cy="130"
              r="110"
              fill="none"
              stroke="#ff4d4f"
              stroke-width="20"
              stroke-dasharray="691.15"
              stroke-dashoffset="6.9115"
              transform="rotate(-90 130 130)"
            />
          </svg>
          <div class="progress-info">
            <span class="progress-value">99%</span>
            <span class="progress-label">闯关成功率</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.study-stats {
  background: #fff;
  border-radius: 12px;
  padding: 24px;
  height: var(--card-height);
  box-sizing: border-box;
}

.stats-container {
  height: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stats-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 20px;
}

.stat-circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.questions .stat-circle {
  background-color: #fff8e6;
}

.exercises .stat-circle {
  background-color: #fff1f0;
}

.stat-value {
  font-size: 36px;
  font-weight: 500;
  color: #333;
  line-height: 1;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

.completion-rate {
  margin-right: 30px;
  transform: translateY(-10px);
}

.progress-circle {
  position: relative;
  width: 260px;
  height: 260px;
}

.progress-info {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

circle {
  transition: stroke-dashoffset 0.6s ease;
}

.progress-value {
  font-size: 32px;
  font-weight: 500;
  color: #333;
  line-height: 1;
}

.progress-label {
  font-size: 14px;
  color: #666;
}
</style> 