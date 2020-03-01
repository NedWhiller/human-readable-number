module.exports = function toReadable (number) {
	let numbers = '' + number,
		step = 0,
	    words = [
		  	['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
		  	['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
		  ],
  	    final = [];

  if(numbers == 0) {
  	return 'zero';
  }	    

  if (numbers < 20) {
  	return words[0][numbers - 1];
  } 

  for (i = numbers.length - 1; i >= 0; i--) {
  	if (step == 0) {
  		let num = numbers[i - 1] + '' + numbers[i];
  		num = +num;
  		if (words[0][num - 1] != undefined) {
  			final.push(words[0][num - 1]);
  			i -= 1;
			step = 2;
			continue;
  		} else {
  		 	final.push(words[0][numbers[i] - 1]);
  		}
  	}
  	step == 1 ? final.push(words[1][numbers[i] - 2]) : '';
  	step == 2 ? (final.push('hundred'), i++) : '';
  	step == 3 ? final.push(words[0][numbers[i] - 1]) : '';
  	step += 1;
  }

  return final.reverse().join(' ').trim();
}
