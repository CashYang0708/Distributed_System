let salaryRecords = [50000, 55000, 54000, 51000, 65000];

function increase(salaryRecords) {
    return salaryRecords.map(element => element + element * 0.2);
}

function increaseAndCommit(salaryRecords) {
    //salaryRecords.forEach((element, index, array) => array[index] = element + element * 0.2);
    salaryRecords.forEach(element => element = element + element * 0.2);
}

console.log(increase(salaryRecords));

increaseAndCommit(salaryRecords);

console.log(salaryRecords);