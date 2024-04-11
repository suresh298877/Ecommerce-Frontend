function CustomerLogout(){
    localStorage.removeItem('customer_login');
    localStorage.removeItem('customer_username');
    localStorage.removeItem('customer_id');
    window.location.href='/';
}

export default CustomerLogout;
