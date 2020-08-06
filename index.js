const data = require('./data')

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

  // If country has no pattern, return true.
  if(countryData.postalCodeType===0)
    return true
    
  // If country has patten, test against that pattern.
  else if(countryData.postalCodeType===1)
    return countryData.pattern.test(testedValue)
  
  // If country has fixed value, it should already be correct as it was either set using module or checked and overwritten in db. Return true.
  else if(countryData.postalCodeType===3)
    return true
  
  // Other values are invalid
  else
    return false
}

module.exports = {
  postalCodeData: data,
  getPostalCodeData: get,
  defaultPostalCodeData: defaultData,
  sanitizePostalCode: sanitize,
  validatePostalCode: validate
}