<template>
  <div class="achievement-section">
    <h3 class="achievement-title">学习成就</h3>
    <div class="achievement-grid">
      <div 
        v-for="achievement in achievements" 
        :key="achievement.id"
        :class="['achievement-item', { active: achievement.active }]"
      >
        <div class="achievement-icon">{{ achievement.icon }}</div>
        <span class="achievement-label">{{ achievement.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AchievementSection',
  data() {
    return {
      achievements: [
        { id: 1, icon: '✌', label: 'Great start!', active: true },
        { id: 2, icon: '⚡', label: 'Fast learner!', active: true },
        { id: 3, icon: '📊', label: 'Growth hero', active: false },
        { id: 4, icon: '🎯', label: 'Learning explorer', active: false },
        { id: 5, icon: '✋', label: 'Newbie', active: true },
        { id: 6, icon: '⏱', label: 'Streak star', active: false },
        { id: 7, icon: '⚙️', label: 'Night owl', active: false },
        { id: 8, icon: '🦅', label: 'Early bird', active: false }
      ]
    }
  }
}
</script>

<style scoped>
.achievement-section {
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  margin-top: 20px;
}

.achievement-title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
}

.achievement-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 15px;
  align-items: center;
}

.achievement-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.achievement-icon {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}

.achievement-item.active .achievement-icon {
  background: #e8f5e9;
}

.achievement-label {
  font-size: 12px;
  color: #666;
  text-align: center;
}

.achievement-item.active .achievement-label {
  color: #333;
}
</style> 