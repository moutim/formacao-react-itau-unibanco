import type ISelectorOption from './ISelectorOtpion.interface';

export const SelectorOption = ({ label, value, ...rest }: ISelectorOption) => {
  return (
    <option value={value} {...rest}>
      { label }
    </option>
  )
}
