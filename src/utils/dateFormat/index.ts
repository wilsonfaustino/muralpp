export const dateFormat = () => {
  return new Date().toLocaleDateString('pt-BR', {
    month: 'long',
    day: 'numeric',
  })
}
