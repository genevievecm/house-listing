/**
 * Display currency in CAD via Intl.NumberFormat
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 * @param {num}
 * @returns {num} a number that has been formatted as CAD currency (with commas)
 */
export const formatPrice = (num) => {
	if(num) {
		return new Intl.NumberFormat('en-CA', {
			maximumSignificantDigits: 3
		}).format(num);
	}
}
