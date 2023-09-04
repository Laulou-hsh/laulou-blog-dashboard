export const isMobile = () => {
  if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i)) {
    return 'mobile'
  }
  return 'desktop'
}
