// ✅ DateUtils is a simple helper class for working with dates in a consistent format across the test suite.
//
// All utility/helper classes should be placed inside the `support/utils/` directory.
//
// Other examples of utility classes you might need:
// - NumberUtils → to format numbers, decimals, currency, etc.
// - StringUtils → for cleaning or transforming strings (e.g. trim, replace, slugify)
// - IdGenerator → to generate unique IDs or test data dynamically

import dayjs from 'dayjs';

class DateUtils {
  private readonly defaultFormat = 'MMM DD, YYYY';

  public getCurrentDate = (format: string = this.defaultFormat) => dayjs().format(format);
}

const dateUtils = new DateUtils();
export default dateUtils;
