document.getElementById('select-student').addEventListener('click', () => {
    const seats = document.querySelectorAll('.seat:not(.strike)');
    if (seats.length === 0) {
        alert('All students have been called!');
        return;
    }

    const randomIndex = Math.floor(Math.random() * seats.length);
    const selectedStudent = seats[randomIndex];
    const studentName = selectedStudent.innerText;

    document.getElementById('random-student').innerText = studentName;
    selectedStudent.classList.add('strike');
});
