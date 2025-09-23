function sumSalary(salaries) {
  return Object.values(salaries).reduce((acc, currValue) => Number.isFinite(currValue) ? acc + currValue : acc, 0);
}