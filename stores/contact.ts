export const useContactStore = defineStore('contact', () => {
  const all = ref({})

  const setAll = data => all.value = data

  const getAll = async () => {
    try {
      setAll({
        linkedin: 'https://linkedin.com',
        x: 'https://x.com',
        instagram: 'https://instagram.com'
      })
    }
    catch (error) { setAll({}) }
  }

  return {
    all,
    getAll
  }
})
