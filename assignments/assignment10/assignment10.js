  //problem 1 and problem 2
  
  let json = {
    "companyName": "Tech Stars",
    "website": "www.techstars.site",
    "employees": [
      {
        "firstName": "Sam",
        "department": "tech",
        "designation": "manager",
        "salary": 40000,
        "raise eligible": true
      },
      {
        "firstName": "Mary",
        "department": "finance",
        "designation": "trainee",
        "salary": 18500,
        "raise eligible": true
      },
      {
        "firstName": "Bill",
        "department": "HR",
        "designation": "executive",
        "salary": 21200,
        "raise eligible": false
      }
    ]
  };

  console.log(json); //print initial JSON for #1 and #2 to console

  //problem 3 

  const newemployee = {
    "firstName": "Anna",
    "department": "tech",
    "designation": "executive",
    "salary": 25600,
    "raise eligible": false
  };

  json["employees"].push(newemployee);  

  console.log(json); //print updated JSON to console for #3
  
  //problem 4

  totalSalary = 0;

  for (let i = 0; i < 4; i++) { //this iterates through employee salaries, how can you use this to find the total salary for #4?
    console.log(json["employees"][i].salary);
    totalSalary += json["employees"][i].salary;
  }
  console.log('Total Salary: ', totalSalary);

  //problem 5 

  for (let i = 0; i < json["employees"].length; i++) {
    if (json["employees"][i]["raise eligible"] === true) {
      json["employees"][i].salary *= 1.1;
      console.log('Salary increased to ', json["employees"][i].salary);
      json["employees"][i]["raise eligible"] = false;
    }
    else {
      console.log('Not raise eligible at this time.');
    }
    }

    //problem 6 
    
  const homeStatus = ['Anna', 'Sam'];

    for (let i = 0; i < json["employees"].length; i++) {
      if (json.employees[i].firstName == homeStatus[0] || json.employees[i].firstName == homeStatus[1]) {
        Object.assign(json.employees[i], {
          wfh: true
        });
        console.log("Working from home.");
      }
      else {
        Object.assign(json.employees[i], {
          wfh: false
        });
        console.log("Working in office.");
      }
    }

