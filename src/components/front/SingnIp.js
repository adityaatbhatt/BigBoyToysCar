import Header from "./Header";
import './SignUp.css'
const SignUp = () =>
{
    return (
        <><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
        crossorigin="anonymous"></link>
        <Header/>
        <div className="container mt-5">
            <form onSubmit={"/"} className="form">
                <label htmlFor="UserName" className="col">Username</label>
                <input type="text" className="col" id="UserName" placeholder="User Name"/><br/><br/>
                <label htmlFor="Email" className="col">Email</label>
                <input type="Email" className="col" id="Email" placeholder="Email"/><br/><br/>
                <label htmlFor="pass" className="col">Password</label>
                <input type="password" className="col" id="pass" placeholder="Password"/><br/><br/>
                <input type="Submit" className="col"/>
            </form>
        </div>
</>
    )    

};export default SignUp;