
// get student data
const retrievedChosenStudentString = sessionStorage.getItem('chosenStudent');
const retrievedChosenStudent = JSON.parse(retrievedChosenStudentString);




function getAttendanceTableData(student) {
  db.collection('users').doc(student).get().then((doc) => {
    if (doc.exists) {
      console.log(doc.data());
      currentStudentData = doc.data();
      const datesAttended = doc.data().datesAttended
      console.log(datesAttended)

      document.querySelector('.student-name').textContent = doc.data().name


      const attendanceTable = document.getElementById('attendance-table')
      datesAttended.forEach((date)=>{
        let payment;
        if(date.paid){
          payment = 'Paid'
        }else {
          payment = 'Unpaid'
        }
    
        const dateRow = document.createElement('tr');
        dateRow.innerHTML = `
        <td>${date.date}</td>
        <td>Present</td>
        <td>${payment}</td>`
      
        attendanceTable.appendChild(dateRow)
        dateRow.addEventListener('click', () => {
          document.querySelector('.main').style.display = "none"
          document.querySelector('.is-student-in-attendance').style.display = "flex"
    
          const paidDateTitle = document.getElementById('paid-date')
          paidDateTitle.textContent = `${date.date}`
        })
      })
    } else {
      console.log('No such document!');
    }
  }).catch((error) => {
    console.log('Error getting document:', error);
  });
}

getAttendanceTableData(retrievedChosenStudent)















