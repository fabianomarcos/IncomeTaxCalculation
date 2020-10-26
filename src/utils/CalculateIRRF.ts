/* eslint-disable @typescript-eslint/explicit-function-return-type */
function checkAliquot(grossSalary: number) {
  if (grossSalary > 4664.68) {
    return {
      aliquot: 27.5,
      deducted: 869.36,
      dependentDeduction: 164.56,
    };
  }

  if (grossSalary > 3751.06) {
    return {
      aliquot: 22.5,
      deducted: 636.13,
      dependentDeduction: 164.56,
    };
  }

  if (grossSalary > 2826.66) {
    return {
      aliquot: 15,
      deducted: 354.8,
      dependentDeduction: 164.56,
    };
  }

  if (grossSalary > 1903.99) {
    return {
      aliquot: 7.5,
      deducted: 142.8,
      dependentDeduction: 164.56,
    };
  }

  return {
    aliquot: 0,
    deducted: 0,
    dependentDeduction: 164.56,
  };
}

function calculateDiscountIRRF(grossSalary: number, dependents: number) {
  const { aliquot, deducted, dependentDeduction } = checkAliquot(grossSalary);
  const salaryBase = grossSalary - deducted - dependentDeduction * dependents;
  const IRRFDiscount = (salaryBase * aliquot) / 100 - deducted;

  return IRRFDiscount;
}

export default calculateDiscountIRRF;
