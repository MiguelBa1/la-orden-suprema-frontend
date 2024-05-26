export const uploadImage = async (file: File): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(URL.createObjectURL(file))
    }, 1000)
  })
}
