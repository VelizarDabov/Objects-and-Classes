function employeesList(list){
let empList = {};

list.forEach(person => {
    empList[person] = person.length;
});

for(const key in empList){
    console.log(`Name: ${key} -- Personal Number: ${empList[key]}`);
}
}
employeesList([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])