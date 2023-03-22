const employee = {
    "name": "Ashley",
    "streetAddress": "11th Broadway"}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;}
// updateEmployeeWithKeyAndValue()
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee}
// destructivelyUpdateEmployeeWithKeyAndValue()
console.log("Before update:", employee);
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "11th Broadway");
console.log("After update:", employee);
// deleteFromEmployeeByKey()
console.log("Before delete:", employee);
employee = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("After delete:", employee);
//destructivelyDeleteFromEmployeeByKey()
console.log("Before delete:", employee);
destructivelyDeleteFromEmployeeByKey(employee, "name");
console.log("After delete:", employee);