const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 6', function () {
    console.log('executando tarefa 1', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('cancelando tarefa 1')
}, 2200)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,6)]
regra.hour = 16
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('executando tarefa 2', new Date().getSeconds())
})