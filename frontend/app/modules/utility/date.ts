/**
 * Formats datetime string like: 05 MAR, 25
 */
export function formatDate(dateString: string) {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase()
  const year = String(date.getFullYear()).slice(-2)
  return `${day} ${month}, ${year}`
}
