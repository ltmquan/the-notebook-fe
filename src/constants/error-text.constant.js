export const errInput = {
  REQUIRED: () => 'This field is required!',
  SIZE: (min, max) => `Must be between ${min} and ${max} characters!`,
  MIN: (min) => `Must be more than ${min} characters!`,
  MAX: (max) => `Must be less than ${max} characters!`,
  EQUALS: () => 'The values do not match!',
  NOT_EQUALS: () => 'The values must not match!',
  IS_NUMBER: () => 'Must be a number!'
}