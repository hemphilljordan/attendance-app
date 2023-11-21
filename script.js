


//console.log(jason)
//sessionStorage.clear();

// POPULATE DROPDOWN MENU



const menu = document.querySelector('.menu');

fullStudentListArray.forEach((student) => {
  const studentLi = document.createElement('li')
  studentLi.textContent = student.name
  menu.appendChild(studentLi)
})



//  DROPDOWN MENU FUNCTIONALITY


const dropdowns = document.querySelectorAll('.dropdown')

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open')
  })

  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked')
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open')

      options.forEach(option => {
        option.classList.remove('active');
      })
      option.classList.add('active')
      const chosenStudent = option.innerText

      // Convert the chosenStudent object to a string using JSON.stringify
      const chosenStudentString = JSON.stringify(chosenStudent);

      // Store the stringified data in sessionStorage under the key 'chosenStudent'
      sessionStorage.setItem('chosenStudent', chosenStudentString);


      // sendData('/getStudent', {
      //   name: chosenStudent
      // })
      getStudentData(chosenStudent)
      didStudentAttendPage(option.innerText)
    })
  })
})







function didStudentAttendPage(student) {
  document.querySelector('.dropdown').style.display = 'none'
  document.querySelector('.is-student-in-attendance').style.display = 'flex'

  document.querySelector('.student-name').textContent = student
  document.getElementById('current-date').textContent = formattedDate

  document.querySelector('.modal__text').textContent = `
  ${student.toUpperCase()} ATTENDED ${formattedDate}?`

  const confirmButton = document.getElementById('confirm-btn')
  confirmButton.addEventListener('click', function () {
    confirmAttendance(student)
  })

  // const getStudentFromStorage = sessionStorage.getItem('studentData');
  // currentStudent = JSON.parse(getStudent)
  // console.log(currentStudent)
}

console.log(formattedDate)


//  CONFIRM POPUP MENU FOR STUDENT ATTENDANCE

function confirmAttendance(student) {
  //localStorage.setItem('selectedStudent', student);

  const newAttendance = {
    date: dataDateFormat,
    paid: false
  }

  updateDocument(student, newAttendance)
  // currentStudentData.datesAttended.unshift(newAttendance);
  // console.log(currentStudentData)
  //sessionStorage.setItem('studentData', JSON.stringify(currentStudentData));
  window.location.href = 'students-attendance-sheet.html'
}

const changeDateButton = document.getElementById('change-btn')
changeDateButton.addEventListener('click', () => {
  window.location.href = 'fix-date.html'
})






