function urlPathname(url: string): string {
  const _url = new URL(url)
  return _url.pathname
}

function fileName(file: string): string {
  return file.replace(/\.[^/.]+$/, '')
}

function parseImageSize(url: string): string {
  const filename = fileName(urlPathname(url))
  if (filename.includes('@')) {
    const size = filename.split('@')[1]
    return `${url} ${size}`
  }
  return url
}

export function getImageSet(images: string[]): string {
  return images.map((img) => parseImageSize(img)).join(', ')
}
