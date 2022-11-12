export const isAcceptFile = (file: File, accept: string): boolean => {
  if (accept && file) {
    const accepts = Array.isArray(accept)
      ? accept
      : accept
          .split(',')
          .map(x => x.trim())
          .filter(x => x)
    const fileExtension = file.name.includes('.') ? file.name.split('.').pop() : ''
    return accepts.some((type: string) => {
      const text = type && type.toLowerCase()
      const fileType = (file.type || '').toLowerCase()
      if (text === fileType) {
        return true
      }
      if (text.includes('*')) {
        return fileType.replace(/\.*$/, '') === text.replace(/\.*$/, '')
      }
      if (/\.+/.test(text)) {
        return text === `.${fileExtension && fileExtension.toLowerCase()}`
      }
      return false
    })
  }
  return !!file
}
