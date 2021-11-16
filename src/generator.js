const generateNumbers = (n)=> {
  return new Array(n).fill('').map((_, idx)=> idx + 1); 
};

module.exports = generateNumbers;
