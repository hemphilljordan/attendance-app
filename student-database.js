class Student {
  constructor(name, datesAttended = [], parent, datesPaid = []) {
    this.name = name;
    this.datesAttended = datesAttended
      this.parent = parent;
    this.datesPaid = datesPaid;
  }

  // Methods to update attended and paid dates
  addAttendedDate(date) {
    this.datesAttended.unshift({ date, paid: false });
  }

  addPaidDate(date) {
    this.datesPaid.push(date);
  }

  // Getters for attended and paid dates
  getAttendedDates() {
    return this.datesAttended;
  }

  getPaidDates() {
    return this.datesPaid;
  }
}




let pinny = new Student(
  'Pinny',
  [
    {
      date: '2023-11-13',
      paid: false
    },
    {
      date: '2023-11-06',
      paid: false
    },
    {
      date: '2023-10-30',
      paid: false
    },
    {
      date: '2023-10-23',
      paid: false
    }
  ],
  'Zeldie',
  ['2023-10-23', '2023-09-19']
)


let julian = new Student(
  'Julian',
  [
    {
      date: '2023-11-13',
      paid: false
    },
    {
      date: '2023-10-30',
      paid: false
    },
    {
      date: '2023-10-23',
      paid: false
    },
    {
      date: '2023-10-16',
      paid: false
    }
  ],
  'Gina',
  ['2023-10-23', '2023-09-11']
)

let beri = new Student(
  'Beri',
  [
    {
      date: '2023-11-14',
      paid: false
    },
    {
      date: '2023-11-06',
      paid: false
    },
    {
      date: '2023-10-24',
      paid: false
    },
    {
      date: '2023-10-23',
      paid: false
    }
  ],
  'Fairah',
  ['2023-10-23', '2023-09-11']
)

let yonah = new Student(
  'Yonah',
  [
    {
      date: '2023-11-14',
      paid: false
    },
    {
      date: '2023-11-07',
      paid: false
    },
    {
      date: '2023-10-31',
      paid: false
    },
    {
      date: '2023-10-20',
      paid: false
    }
  ],
  'Devora',
  ['2023-10-20', '2023-09-12']
)

let isaac = new Student(
  'Isaac',
  [
    {
      date: '2023-11-14',
      paid: true
    },
    {
      date: '2023-10-31',
      paid: true
    }
  ],
  'Tova',
  ['2023-11-01']
)

let hunter = new Student(
  'Hunter',
  [
    {
      date: '2023-11-14',
      paid: false
    },
    {
      date: '2023-11-07',
      paid: false
    },
    {
      date: '2023-10-31',
      paid: false
    },
    {
      date: '2023-10-24',
      paid: false
    }
  ],
  'Barbara',
  ['2023-10-23']
)

let brack = new Student(
  'Brack',
  [
    {
      date: '2023-11-15',
      paid: false
    },
    {
      date: '2023-11-01',
      paid: false
    },
    {
      date: '2023-10-18',
      paid: false
    },
    {
      date: '2023-10-13',
      paid: false
    }
  ],
  'Barbara',
  ['2023-10-23']
)

let brandon = new Student(
  'Brandon',
  [
    {
      date: '2023-11-16',
      paid: false
    },
    {
      date: '2023-11-09',
      paid: false
    },
    {
      date: '2023-11-03',
      paid: false
    },
    {
      date: '2023-10-26',
      paid: false
    }
  ],
  'Barbara',
  ['2023-10-23']
)

let jenson = new Student(
  'Jenson',
  [
    {
      date: '2023-11-16',
      paid: false
    },
    {
      date: '2023-11-09',
      paid: false
    },
    {
      date: '2023-10-12',
      paid: false
    },
    {
      date: '2023-10-26',
      paid: false
    }
  ],
  'Nicole',
  ['2023-11-02', '2023-10-03', '2023-09-05']
)

let jason = new Student(
  'Jason',
  [
    {
      date: '2023-11-09',
      paid: true
    },
    {
      date: '2023-11-02',
      paid: true
    },
    {
      date: '2023-10-26',
      paid: true
    },
    {
      date: '2023-10-19',
      paid: true
    }
  ],
  'Adult',
  ['2023-11-16']
)

// sendData('/', {
//   name: jason.name,
//   datesAttended: jason.datesAttended,
//   datesPaid: jason.datesPaid,
//   parent: jason.parent
// })




const fullStudentListArray = [pinny, julian, beri, yonah, isaac, hunter, brack, brandon, jenson, jason]



// for(let i = 0; i < fullStudentListArray.length; i++){
//   sendData('/', {
//     name: fullStudentListArray[i].name,
//     datesAttended: fullStudentListArray[i].datesAttended,
//     datesPaid: fullStudentListArray[i].datesPaid,
//     parent: fullStudentListArray[i].parent,
//   })
// }







// nicolas stone last payment oct 12
// // Example usage:
// //julian.addAttendedDate('2023-11-10');

// console.log(julian.name); // Output: John Doe
// console.log(julian.getAttendedDates());
// // Output: [{ date: '2023-11-01', paid: true }, { date: '2023-11-05', paid: false }, { date: '2023-11-10', paid: false }]
// console.log(julian.getPaidDates()); // Output: ['2023-11-01']