export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/users/sign_out'
  })
)
