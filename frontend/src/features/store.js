let isAuth = false
let token = ''

const checkAuth = () => {
    if(localStorage.getItem('token')) {
        token = localStorage.getItem('token')
        isAuth = true
    } else {
        token = '',
        isAuth = false
    }
}
  
export default checkAuth

