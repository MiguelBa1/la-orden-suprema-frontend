type downloadImageProps = {
  image: {
    buffer?: string
    mimetype?: string
  }
  fileName: string
}

export function downloadImageFromUrl({ image, fileName }: downloadImageProps) {
  const base64String = `data:${image.mimetype};base64,${image.buffer}`
  const link = document.createElement('a')

  link.href = base64String
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
