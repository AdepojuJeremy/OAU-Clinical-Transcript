export function convertToDigit(levelString) {
    // Mapping number words to digits
    const numberMap = {
      zero: '0',
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9',
      ten: '10',
      twenty: '20',
      thirty: '30',
      forty: '40',
      fifty: '50',
      sixty: '60',
      seventy: '70',
      eighty: '80',
      ninety: '90',
      hundred: '00'
    };
  
    // Regular expression to find number words
    const numberWordRegex = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred)/gi;
  
    // Find all matches
    const matches = levelString.match(numberWordRegex);
  
    // If no matches, return original string
    if (!matches) return levelString;
  
    // Convert matched number words to digits
    const digits = matches.map(word => numberMap[word.toLowerCase()]).join('');
  
    // Append 'l' to the end
    return `${digits}`;
  }
  
