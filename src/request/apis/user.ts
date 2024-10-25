import serviceAxios from '../index'

export const getTodos = () => {
  return serviceAxios({
    url: '/api/todos/1',
    // url: '/api/pc/category',
    method: 'get'
  })
}
