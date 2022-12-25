

document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
        let FullCalendar = require('fullCalendar');
        
        var calendar = new FullCalendar.Calendar(calendarEl, {
            locale: 'ru',
          initialView: 'dayGridMonth',
          initialDate: '2022-12-07',
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
          },
          monthNames: ['Январь','Февраль','Март','Апрель','Май','οюнь','οюль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','Июнь','Июль','Авг.','Сент.','Окт.','Ноя.','Дек.'],
                dayNames: ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
                dayNamesShort: ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],
                buttonText: {
                    prev: 'Пред',
        next: 'След',
        today: 'Сегодня',
        month: 'Месяц',
        week: 'Неделя',
        day: 'День',
        title: 'Повтор',
        list: 'Повестка дня',
                },
                weekText: 'Нед',
    allDayText: 'Весь день',
    moreLinkText(n) {
        return '+ ещё ' + n;
    },
    noEventsText: 'Нет событий для отображения',
          events: [
            {
              title: 'Весь день',
              start: '2022-12-01'
            },
            {
              title: 'Тим билдинг',
              start: '2022-12-07',
              end: '2022-12-10'
            },
            {
              groupId: '999',
              title: 'Повтор',
              start: '2022-12-09T16:00:00'
            },
            {
              groupId: '999',
              title: 'Повтор',
              start: '2022-12-16T16:00:00'
            },
            {
              title: 'Собрание',
              start: '2022-12-11',
              end: '2022-12-13'
            },
            {
              title: 'Встреча',
              start: '2022-12-12T10:30:00',
              end: '2022-12-12T12:30:00'
            },
            {
              title: 'Обед',
              start: '2022-12-12T12:00:00'
            },
            {
              title: 'Встреча',
              start: '2022-12-12T14:30:00'
            },
            {
              title: 'Вечеринка',
              start: '2022-12-13T07:00:00'
            },
            {
              title: 'Ссылка Google',
              url: 'http://google.com/',
              start: '2022-12-28'
            }
          ]
        });
        
        calendar.render();
        let moment = require('moment');
        require('moment/locale/ru');
        let day = moment();
            moment.locale('ru');
            document.getElementById('today').innerHTML=day.format('dddd');
            let Chart = require('chart.js');
           let week = document.getElementById('myChart').getContext('2d');
            let myChart = new Chart(week, {
                type: 'bar',
                data: {
                    labels: ['Понедельник', 'Вториник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
                    datasets: [{
                        label: 'Активность',
                        data: [84.308, 84.188, 84.118, 83.706, 83.5, 83.468],
                        backgroundColor: [
                            'rgba(216, 27, 96, 0.6)',
                            'rgba(3, 169, 244, 0.6)',
                            'rgba(255, 152, 0, 0.6)',
                            'rgba(29, 233, 182, 0.6)',
                            'rgba(156, 39, 176, 0.6)',
                            'rgba(84, 110, 122, 0.6)'
                        ],
                        borderColor: [
                            'rgba(216, 27, 96, 1)',
                            'rgba(3, 169, 244, 1)',
                            'rgba(255, 152, 0, 1)',
                            'rgba(29, 233, 182, 1)',
                            'rgba(156, 39, 176, 1)',
                            'rgba(84, 110, 122, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Активность',
                        position: 'top',
                        fontSize: 16,
                        padding: 20
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 75
                            }
                        }]
                    }
                }
            });
          
      });
          
