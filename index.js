const data = require('data')

const sanitize = (input) => {
  return String(input).toUpperCase().replace(/[^A-Z0-9 \-]/g,'').substr(0,15)
}

const defaultData = {
	countryCode: undefined,
	postalCodeType: 1,
	pattern: /^([0-9A-Z\-\s]?){15}$/,
	placeholder: 'Postal code'
}

const get = (countryCode) => {
  let matchCountry = data.filter(c=>c.countryCode===countryCode)
  return matchCountry.length ? matchCountry[0] : defaultData
}

const validate = (input, countryCode, sanitize) => {
  let testedValue = sanitize ? sanitize(input) : String(input)
  let countryData = get(countryCode)
  return countryData.pattern.test(testedValue)
}

module.exports = {
  postalCodeData: data,
  getPostalCodeData: get,
  defaultPostalCodeData: defaultData,
  sanitizePostalCode: sanitize,
  validatePostalCode: validate
}