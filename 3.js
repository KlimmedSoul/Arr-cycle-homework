const namesArray = ['Сергей', 'Данила', 'Семен', 'Смбад', 'Кирилл']
const marksArray = [76, 56, 86, 99, 64]
let averageRating = 0;
if (namesArray.length == marksArray.length) {
    for (let i = 0; i < marksArray.length; i++) {
        averageRating += marksArray[i]
        if (marksArray[i] < 60) {
            console.log(namesArray[i], 'F - Оценка студента.')
        } else if (marksArray[i] < 70 && marksArray[i] > 60) {
            console.log(namesArray[i], 'D - Оценка студента.')
        } else if (marksArray[i] < 80 && marksArray[i] > 70) {
            console.log(namesArray[i], 'C - Оценка студента.')
        } else if (marksArray[i] < 90 && marksArray[i] > 80) {
            console.log(namesArray[i], 'B - Оценка студента.')
        } else if (marksArray[i] < 100 && marksArray[i] > 90) {
            console.log(namesArray[i], 'A - Оценка студента.')
        }
    }
    console.log(averageRating /= marksArray.length, 'Средняя оценка студентов')
} else {
    console.log('Количество оценок не соответствует количеству имен студентов')
}