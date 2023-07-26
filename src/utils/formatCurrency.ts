export const removeSpecialChars = (numberString: string) => numberString.replaceAll(/[$,]/g, '')

export default function formatCurrency(
  value: number | string,
  options: { locale?: string; currency?: string; decimalPlaces?: number } = {
    locale: 'en-US',
    currency: 'USD',
    decimalPlaces: 2,
  }
) {
  const formatter = new Intl.NumberFormat(options.locale, {
    style: 'currency',
    currency: options.currency,
    minimumFractionDigits: options.decimalPlaces,
    maximumFractionDigits: options.decimalPlaces,
  })

  const formattableValue = typeof value === 'string' ? parseFloat(removeSpecialChars(value)) : value

  return formatter.format(formattableValue)
}