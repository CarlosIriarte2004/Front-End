import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CalendarDay {
  day: number;
  monthType: 'prev' | 'current' | 'next';
  isWeekend: boolean;
  isToday: boolean;
  isSelected: boolean;
  date: Date;
  events?: any[]; 
}

@Component({
  selector: 'app-calendar-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar-admin.component.html',
  styleUrls: ['./calendar-admin.component.css']
})
export class CalendarAdminComponent implements OnInit {
  @Output() addReminderRequest = new EventEmitter<Date>();

  currentMonthDisplay: string = '';
  weekDays: string[] = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
  allDaysInGrid: CalendarDay[] = [];

  displayDate: Date = new Date();
  today: Date = new Date();

  ngOnInit(): void {
    this.today.setHours(0, 0, 0, 0);
    this.displayDate.setHours(0, 0, 0, 0);
    this.updateCalendar();
  }

  private updateCalendar(): void {
    this.updateCurrentMonthDisplay();
    this.generateCalendarDays();
  }

  private updateCurrentMonthDisplay(): void {
    this.currentMonthDisplay = this.displayDate.toLocaleDateString('es-ES', {
      month: 'long',
      year: 'numeric'
    }); 
  }

  private generateCalendarDays(): void {
  
    const year = this.displayDate.getFullYear();
    const month = this.displayDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const firstDayOfWeekIndex = firstDayOfMonth.getDay(); 

    const prevMonthLastDay = new Date(year, month, 0);
    const daysInPrevMonth = prevMonthLastDay.getDate();

    const allDays: CalendarDay[] = [];

    for (let i = 0; i < firstDayOfWeekIndex; i++) {
      const dayNumber = daysInPrevMonth - firstDayOfWeekIndex + 1 + i;
      const dateValue = new Date(year, month - 1, dayNumber);
      dateValue.setHours(0,0,0,0);
      allDays.push({
        day: dayNumber, monthType: 'prev', isWeekend: dateValue.getDay() === 0 || dateValue.getDay() === 6,
        isToday: false, isSelected: false, date: dateValue, events: []
      });
    }

    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      const dateValue = new Date(year, month, i);
      dateValue.setHours(0,0,0,0);
      allDays.push({
        day: i, monthType: 'current', isWeekend: dateValue.getDay() === 0 || dateValue.getDay() === 6,
        isToday: dateValue.getTime() === this.today.getTime(), isSelected: false, date: dateValue, events: []
      });
    }

    const totalCells = 42;
    let nextMonthDay = 1;
    while (allDays.length < totalCells) {
      const dateValue = new Date(year, month + 1, nextMonthDay);
      dateValue.setHours(0,0,0,0);
      allDays.push({
        day: dateValue.getDate(),
        monthType: 'next',
        isWeekend: dateValue.getDay() === 0 || dateValue.getDay() === 6,
        isToday: dateValue.getTime() === this.today.getTime(),
        isSelected: false,
        date: dateValue,
        events: []
});
      nextMonthDay++;
    }

    this.allDaysInGrid = allDays
  }

  previousMonth(): void {
    this.displayDate.setMonth(this.displayDate.getMonth() - 1);
    this.displayDate = new Date(this.displayDate);
    this.updateCalendar();
  }

  nextMonth(): void {
    this.displayDate.setMonth(this.displayDate.getMonth() + 1);
    this.displayDate = new Date(this.displayDate);
    this.updateCalendar();
  }

  previousYear(): void {
    this.displayDate.setFullYear(this.displayDate.getFullYear() - 1);
    this.displayDate = new Date(this.displayDate);
    this.updateCalendar();
  }

  nextYear(): void {
    this.displayDate.setFullYear(this.displayDate.getFullYear() + 1);
    this.displayDate = new Date(this.displayDate);
    this.updateCalendar();
  }

  goToToday(): void {
    this.displayDate = new Date(this.today);
    this.updateCalendar();
  }

  selectDay(dayObj: CalendarDay): void {
    if (dayObj.monthType !== 'current') {
      this.displayDate = new Date(dayObj.date.getFullYear(), dayObj.date.getMonth(), 1);
      this.updateCalendar();
      return;
    }

    this.allDaysInGrid.forEach(d => {
      d.isSelected = (d.date.getTime() === dayObj.date.getTime() && d.monthType === 'current');
    });
  
  console.log('Día seleccionado:', dayObj.date);

  }

  onAddReminderClick(dayObj: CalendarDay, event: MouseEvent): void {
    event.stopPropagation();
    if (dayObj.monthType === 'current') {
      this.addReminderRequest.emit(dayObj.date);
      console.log('Solicitud para añadir recordatorio en:', dayObj.date);
    }
  }
}
