<template>
  <div class="calendar-container">
    <div class="calendar-card">
      <div class="calendar-weekdays">
        <div class="weekday">Sun</div>
        <div class="weekday">Mon</div>
        <div class="weekday">Tue</div>
        <div class="weekday">Wed</div>
        <div class="weekday">Thu</div>
        <div class="weekday">Fri</div>
        <div class="weekday">Sat</div>
      </div>
      <div class="calendar-days">
        <div 
          v-for="day in days" 
          :key="day.date"
          class="day-cell"
          :class="{
            'other-month': !day.currentMonth,
            'selected': day.selected,
            'has-event': day.hasEvent,
            'today': day.isToday
          }"
        >
          {{ day.dayOfMonth }}
          <div v-if="day.hasEvent" class="event-dot"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentDate = ref(new Date())

// 模拟日历数据，包含上个月和下个月的日期
const days = ref([
  // 上个月最后几天
  { date: new Date(2025, 0, -2), dayOfMonth: 29, currentMonth: false },
  { date: new Date(2025, 0, -1), dayOfMonth: 30, currentMonth: false },
  { date: new Date(2025, 0, 0), dayOfMonth: 31, currentMonth: false },
  // 当月日期
  ...Array.from({ length: 31 }, (_, index) => ({
    date: new Date(2025, 0, index + 1),
    dayOfMonth: index + 1,
    currentMonth: true,
    selected: index === 9,
    hasEvent: [13, 15, 19, 25, 28].includes(index + 1),
    isToday: index === 9
  })),
  // 下个月开始几天
  { date: new Date(2025, 1, 1), dayOfMonth: 1, currentMonth: false },
  { date: new Date(2025, 1, 2), dayOfMonth: 2, currentMonth: false }
])
</script>

<style scoped>
.calendar-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.calendar-controls {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.calendar-card {
  background: #f5fffd;
  border-radius: 12px;
  padding: 24px;
  height: var(--card-height);
  box-sizing: border-box;
}

.calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 12px;
}

.weekday {
  text-align: center;
  color: #999;
  font-size: 13px;
  padding: 8px 0;
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}

.day-cell {
  position: relative;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.2s;
}

.day-cell:hover {
  background-color: #f5f7fa;
}

.day-cell.other-month {
  color: #c0c4cc;
}

.day-cell.selected {
  background-color: #e6f7ff;
  color: #1890ff;
  font-weight: 500;
}

.day-cell.today {
  color: #1890ff;
  font-weight: 500;
}

.event-dot {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #ff4949;
}

:deep(.el-button.is-text) {
  border-radius: 4px;
}

:deep(.el-button.is-text:hover) {
  background-color: #f5f7fa;
}
</style> 