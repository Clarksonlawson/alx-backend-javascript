// 100-createIteratorObject.js

export default function createIteratorObject(report) {
  let departments = Object.keys(report.allEmployees);
  let currentDeptIndex = 0;
  let currentEmpIndex = 0;

  return {
    next() {
      if (currentDeptIndex < departments.length) {
        const employees = report.allEmployees[departments[currentDeptIndex]];
        if (currentEmpIndex < employees.length) {
          return {
            value: employees[currentEmpIndex++],
            done: false,
          };
        } else {
          currentDeptIndex++;
          currentEmpIndex = 0;
          return this.next();
        }
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}

