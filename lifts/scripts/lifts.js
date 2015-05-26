var j = {};

j.amounts = {
	warmup: 45
};

j.setup = function() {
	j.$amountInput = $('.weight-input');
	j.$amountInput.on('keyup', j.handleAmountChange);
};

j.handleAmountChange = function() {
	var initialAmount = j.amounts.warmup;
	var amount = parseInt(j.$amountInput.val());
	var step = (amount - initialAmount) / 4;
	console.log(step);
	if(step >= 5) {
		$('.calc-weight').each(function() {
			initialAmount = j.roundToMultiple(initialAmount + step, 5);
			$(this).text(initialAmount);
		})
	}
};

j.roundToMultiple = function(num, multiple) {
	// var remainder = num % multiple;
	// return remainder == 0 ? num : num + multiple - remainder;
	return Math.round(num / multiple) * multiple;
};

$(j.setup);