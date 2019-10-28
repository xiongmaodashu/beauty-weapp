const today = date => {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    return [year, month, day].join('-')
}

const currentTime = date => {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()

    return [year, month, day].join('-') + ' ' + [hour, minute, second].join(':')
}

const currentHour = date => {
    const hour = date.getHours()
    return hour + ':00:00'
}

const timePassed = (orderTime, currentTime) => {
    if (new Date(orderTime).getTime() < new Date(currentTime).getTime()) {
        return true
    }
    return false
}

const getIndex = (value, array, key) => {
    for (let i=0; i<array.length;i++) {
        if (array[i][key] == value) {
            return i
        }
    }
    return null
}

export default {
    today, currentHour, timePassed, currentTime, getIndex
}