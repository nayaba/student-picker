let prevStudent
 
document.querySelectorAll('.seat').forEach(seat => {
    if (!seat.innerText) {
        seat.classList.add('empty')
        seat.classList.remove('seat')
    }
});

document.getElementById('select-student').addEventListener('click', () => {
  const seats = document.querySelectorAll('.seat:not(.strike)')
  if (seats.length === 0) {
    alert('All students have been called!')
    return
  }

  const randomIndex = Math.floor(Math.random() * seats.length)
  const selectedStudent = seats[randomIndex]
  const studentName = selectedStudent.innerText

  if (prevStudent) {
    prevStudent.classList.remove('current')
    prevStudent.classList.add('strike')
  }
  prevStudent = selectedStudent
  prevStudent.classList.add('current')

  document.getElementById('random-student').innerText = studentName
})
