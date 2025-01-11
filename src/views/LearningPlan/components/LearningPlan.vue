<template>
  <div class="learning-plan">
    <!-- 其他现有的内容 -->
    
    <!-- 添加学习成就部分 -->
    <AchievementSection />
  </div>
</template>

<script>
import AchievementSection from '@/components/AchievementSection.vue'

export default {
  name: 'LearningPlan',
  components: {
    AchievementSection
  }
  // ... 其他现有的配置
}
</script> 