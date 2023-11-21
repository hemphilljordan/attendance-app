const firebaseConfig = {
  apiKey: "AIzaSyBXR2ReXHEphV3Jae6MUd_jzHyUgIsK4z0",
  authDomain: "attendance-app-5d071.firebaseapp.com",
  projectId: "attendance-app-5d071",
  storageBucket: "attendance-app-5d071.appspot.com",
  messagingSenderId: "264314195393",
  appId: "1:264314195393:web:2116560aaea2f6d5053340"
};

  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();

  // get data

  // function getAllDataOnce(){
  //   db.collection('users').get().then((querySnapshot) => {
  //     var students = [];
  //     querySnapshot.forEach(doc => {
  //         students.push(doc.data());
  //     });
  //     console.log(students)
  //   })
  // }

  // function getAllDataRealTime(){
  //   db.collection('users').onSnapshot((querySnapshot) => {
  //     var students = [];
  //     querySnapshot.forEach(doc => {
  //         students.push(doc.data());
  //     });
  //   })
  // }

  let currentStudentData;

  function getStudentData(student) {
    db.collection('users').doc(student).get().then((doc) => {
      if (doc.exists) {
        console.log(doc.data());
        currentStudentData = doc.data();
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }
  
  

 

//   function updateDocument(student, dateAttended) {
//   const docIdToUpdate = student;
  
//   // Reference to the specific document
//   const docRef = db.collection('users').doc(docIdToUpdate);

//   // Update specific fields in the document
//   docRef.update({
//     // Update fields and their new values
//     datesAttended: dateAttended
//   })
//   .then(() => {
//     console.log('Document successfully updated!');
//   })
//   .catch((error) => {
//     console.error('Error updating document:', error);
//   });
// }

//add date to an array

// function updateDocument(student, dateAttended) {
//   const docIdToUpdate = student;
  
//   // Reference to the specific document
//   const docRef = db.collection('users').doc(docIdToUpdate);

//   // Update specific fields in the document using arrayUnion
//   docRef.update({
//     // Use Firestore's arrayUnion to add dateAttended to the beginning of the array
//     datesAttended: firebase.firestore.FieldValue.arrayUnion(dateAttended)
//   })
//   .then(() => {
//     console.log('Document successfully updated!');
//   })
//   .catch((error) => {
//     console.error('Error updating document:', error);
//   });
// }


//add date to the beginning of the array

function updateDocument(student, dateAttended) {
  const docIdToUpdate = student;
  
  // Reference to the specific document
  const docRef = db.collection('users').doc(docIdToUpdate);

  // Get the current datesAttended array
  docRef.get().then((doc) => {
    if (doc.exists) {
      const currentData = doc.data();
      let currentDatesAttended = currentData.datesAttended || []; // Initialize as empty array if it doesn't exist

      // Prepend the new date to the array
      currentDatesAttended.unshift(dateAttended); // Adds to the beginning of the array

      // Update the document with the modified datesAttended array
      docRef.update({
        datesAttended: currentDatesAttended
      })
      .then(() => {
        console.log('Document successfully updated with prepended date!');
      })
      .catch((error) => {
        console.error('Error updating document:', error);
      });
    } else {
      console.log('Document not found');
    }
  }).catch((error) => {
    console.error('Error getting document:', error);
  });
}





  //window.onload = getAllDataOnce;
