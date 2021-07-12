import { errInput } from "./error-text.constant";

//required validation
export const vRequired = (value) => {
  return (!!value && String(value).trim() !== '') ? '' : errInput.REQUIRED();
}

//size validation
export const vSize = (value, min, max) => {
  const strValue = String(value).trim();

  return strValue.length >= min && strValue.length <= max ? '' : errInput.SIZE(min, max);
}

//min validation
export const vMin = (value, min) => {
  const strValue = String(value).trim();
  
  return strValue.length >= min ? '' : errInput.MIN(min);
}

//max validation
export const vMax = (value, max) => {
  const strValue = String(value).trim();

  return strValue.length <= max ? '' : errInput.MAX(max);
}

//equal validation
export const vEquals = (value, target) => {
  const strValue = String(value).trim();
  const strTarget = String(target).trim();

  return strValue === strTarget ? '' : errInput.EQUALS();
}

export const vNotEquals = (value, target) => {
  const strValue = String(value).trim();
  const strTarget = String(target).trim();

  return strValue !== strTarget ? '' : errInput.NOT_EQUALS();
}

//number type validation
export const vIsNumber = (value) => {
  return (typeof value) === 'number' ? '' : errInput.IS_NUMBER();
}