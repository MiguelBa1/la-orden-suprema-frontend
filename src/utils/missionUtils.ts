type downloadImageProps = {
  url: string
  fileName: string
}

export function downloadImageFromUrl({ url, fileName }: downloadImageProps) {
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
