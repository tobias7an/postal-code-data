# postal-code-data

Barebones JS dataset of country postal code types, regular expressions and placeholders for use in address form postal code validation. Includes a few utility functions for common usage with inputs.

Country list source: [postal-country-region-data](https://github.com/tobias7an/postal-country-region-data). These two repos are used together and countries should not be added/removed from one without the same on the other.

Data is cross-referenced between the [Universal Postal Union Postal Addressing Systems Database](http://www.upu.int/en/activities/addressing/postal-addressing-systems-in-member-countries.html), postal service websites, and propietary commercial shipping address databases.  

This dataset may not be 100% accurate, complete or up to date, but aims to be sufficiently complete for production use and preferable to available alternatives.

### Usage
`const {data} = require('postal-code-data')`
or
`import {data} from 'postal-code-data'`

### Types
- 0 - No postal code.
- 1 - Postal code required, follows pattern.
- 2 - Postal code optional.
- 3 - Postal code is fixed to specifically defined string.

### Changelog
- `1.0.0` - Jul 21, 2020. Initial compilation & commit.

### License
MIT.