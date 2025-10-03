export function formatRelativeTime(dateString: string) {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now - date
  const diffSec = Math.floor(diffMs / 1000)
  const diffMin = Math.floor(diffSec / 60)
  const diffHour = Math.floor(diffMin / 60)
  const diffDay = Math.floor(diffHour / 24)
  const diffWeek = Math.floor(diffDay / 7)
  const diffMonth = Math.floor(diffDay / 30)
  const diffYear = Math.floor(diffDay / 365)

  if (diffSec < 60) {
    return diffSec <= 1 ? 'just now' : `${diffSec} seconds ago`
  }
  else if (diffMin < 60) {
    return diffMin === 1 ? '1 minute ago' : `${diffMin} minutes ago`
  }
  else if (diffHour < 24) {
    return diffHour === 1 ? '1 hour ago' : `${diffHour} hours ago`
  }
  else if (diffDay < 7) {
    return diffDay === 1 ? '1 day ago' : `${diffDay} days ago`
  }
  else if (diffDay < 30) {
    return diffWeek === 1 ? '1 week ago' : `${diffWeek} weeks ago`
  }
  else if (diffDay < 365) {
    return diffMonth === 1 ? '1 month ago' : `${diffMonth} months ago`
  }
  else {
    return diffYear === 1 ? '1 year ago' : `${diffYear} years ago`
  }
}
