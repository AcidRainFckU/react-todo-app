export const setCategory = (status: string) => {
  return {
    type: 'CATEGORY',
    payload: { text: status },
  }
}
