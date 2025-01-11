<template>
  <div class="questionnaire-container">
    <h1 class="title">Learning Plan Questionnaire</h1>
    
    <div class="step-container">
      <div class="step">
        <h2>Step 1: Select Your Course</h2>
        <div class="course-cards">
          <div class="course-card" v-for="course in courses" :key="course.name" @click="selectCourse(course)">
            <img :src="course.image" :alt="course.name">
            <span class="course-name">{{ course.name }}</span>
          </div>
        </div>
      </div>

      <div class="step">
        <h2>Step 2: Select Learning Goals</h2>
        <div class="goal-options">
          <el-checkbox v-model="selectedGoals.mathSkills">Improve Math Skills</el-checkbox>
          <el-checkbox v-model="selectedGoals.programming">Learn New Programming Language</el-checkbox>
          <el-checkbox v-model="selectedGoals.other">Other</el-checkbox>
          <el-input 
            v-if="selectedGoals.other"
            v-model="customGoal"
            placeholder="Enter your custom goal"
          />
        </div>
        <div class="error-message" v-if="showGoalError">
          Please select at least one goal
        </div>
      </div>

      <div class="step">
        <h2>Step 3: Select Learning Period</h2>
        <el-radio-group v-model="learningPeriod">
          <el-radio label="1">1 Month</el-radio>
          <el-radio label="3">3 Months</el-radio>
          <el-radio label="6">6 Months</el-radio>
          <el-radio label="custom">Custom</el-radio>
        </el-radio-group>
      </div>

      <div class="step">
        <h2>Step 4: Daily Study Duration</h2>
        <div class="duration-slider">
          <el-slider
            v-model="studyDuration"
            :min="30"
            :max="180"
            :step="30"
            :format-tooltip="formatDuration"
          />
          <div class="duration-labels">
            <span>30m</span>
            <span>3h</span>
          </div>
        </div>
      </div>
    </div>

    <div class="action-buttons">
      <el-button @click="goBack">Previous</el-button>
      <el-button type="primary" @click="submitQuestionnaire">Next</el-button>
    </div>
  </div>
</template>

<script>
import { Monitor, Connection, Cpu, Grid, Share } from '@element-plus/icons-vue'

export default {
  name: 'CourseQuestionnaire',
  data() {
    return {
      courses: [
        { 
          name: 'Computer Composition Principles',
          image: '/images/computer.png'
        },
        { 
          name: 'Machine Learning',
          image: '/images/machine-learning.png'
        },
        { 
          name: 'Java Language',
          image: '/images/java.png'
        },
        { 
          name: 'Data Structures',
          image: '/images/data-structure.png'
        },
        { 
          name: 'Algorithm Design',
          image: '/images/algorithm.png'
        }
      ],
      selectedCourse: null,
      selectedGoals: {
        mathSkills: false,
        programming: false,
        other: false
      },
      customGoal: '',
      learningPeriod: '1',
      studyDuration: 60,
      showGoalError: false
    }
  },
  components: {
    Monitor,
    Connection,
    Cpu,
    Grid,
    Share
  },
  methods: {
    selectCourse(course) {
      this.selectedCourse = course
    },
    formatDuration(val) {
      return val >= 60 ? `${val / 60}h` : `${val}m`
    },
    goBack() {
      this.$router.go(-1)
    },
    submitQuestionnaire() {
      if (!this.selectedCourse) {
        // 显示课程选择错误
        return
      }
      
      const hasSelectedGoal = Object.values(this.selectedGoals).some(val => val) || this.customGoal
      if (!hasSelectedGoal) {
        this.showGoalError = true
        return
      }
      
      const questionnaireData = {
        course: this.selectedCourse,
        goals: {
          ...this.selectedGoals,
          customGoal: this.customGoal
        },
        learningPeriod: this.learningPeriod,
        studyDuration: this.studyDuration
      }
      
      console.log('Questionnaire Data:', questionnaireData)
      this.$router.push('/learning-plan')
    }
  }
}
</script>

<style scoped>
.questionnaire-container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #333;
  font-weight: 500;
  margin-bottom: 40px;
}

.step-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.step {
  background: #f5fffd;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

h2 {
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #b2dfdb;
}

.course-cards {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 10px 0;
  margin-left: -5px;
}

.course-card {
  width: 160px;
  height: 160px;
  background: #fff;
  border: 2px solid #e0f2f1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 10px;
}

.course-card:hover {
  border-color: #80cbc4;
  transform: translateY(-2px);
}

.course-card img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  margin-bottom: 6px;
  border-radius: 4px;
}

.course-name {
  font-size: 13px;
  color: #333;
  text-align: center;
  font-weight: 500;
  line-height: 1.2;
}

.goal-options {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.el-input {
  margin-top: 12px;
  max-width: 400px;
}

.error-message {
  color: #f56c6c;
  font-size: 14px;
  margin-top: 8px;
}

.duration-slider {
  padding: 0 20px;
}

.duration-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  color: #666;
  font-size: 14px;
}

.action-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0 20px;
}

:deep(.el-radio) {
  margin-right: 30px;
  margin-bottom: 12px;
}

:deep(.el-slider) {
  margin: 20px 0;
}

:deep(.el-slider__runway) {
  background-color: #e0f2f1;
}

:deep(.el-slider__bar) {
  background-color: #26a69a;
}

:deep(.el-slider__button) {
  border-color: #26a69a;
}

:deep(.el-checkbox__input.is-checked .el-checkbox__inner) {
  background-color: #26a69a;
  border-color: #26a69a;
}

:deep(.el-radio__input.is-checked .el-radio__inner) {
  background-color: #26a69a;
  border-color: #26a69a;
}

:deep(.el-button--primary) {
  background-color: #26a69a;
  border-color: #26a69a;
}

:deep(.el-button--primary:hover) {
  background-color: #00897b;
  border-color: #00897b;
}
</style> 