import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function Registration() {

    const history=useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    async function submit(e){
        e.preventDefault();

        try{
            
            await axios.post("http://localhost:8000/", {
                email, password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exist")
                    
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })
        }
        catch(e){
            console.log(e);
        }
    }
  return (
    <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
            <div class="row justify-content-center align-items-center h-100">
            <div class="col-12 col-lg-9 col-xl-7">
                <div class="card shadow-2-strong card-registration" style={{borderRadius: '15px'}}>
                <div class="card-body p-4 p-md-5">
                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                    <form>

                    <div class="row">
                        <div class="col-md-6 mb-4">

                        <div class="form-outline">
                            <input type="text" id="firstName" class="form-control form-control-lg" />
                            <label class="form-label" for="firstName">First Name</label>
                        </div>

                        </div>
                        <div class="col-md-6 mb-4">

                        <div class="form-outline">
                            <input type="text" id="lastName" class="form-control form-control-lg" />
                            <label class="form-label" for="lastName">Last Name</label>
                        </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-4 d-flex align-items-center">

                        <div class="form-outline datepicker w-100">
                            <input type="text" class="form-control form-control-lg" id="birthdayDate" />
                            <label for="birthdayDate" class="form-label">Birthday</label>
                        </div>

                        </div>
                        <div class="col-md-6 mb-4">

                        <h6 class="mb-2 pb-1">Gender: </h6>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="option1" checked />
                            <label class="form-check-label" for="femaleGender">Female</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="option2" />
                            <label class="form-check-label" for="maleGender">Male</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="option3" />
                            <label class="form-check-label" for="otherGender">Other</label>
                        </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                            <input type="email" id="emailAddress" class="form-control form-control-lg" />
                            <label class="form-label" for="emailAddress">Email</label>
                        </div>

                        </div>
                        <div class="col-md-6 mb-4 pb-2">

                        <div class="form-outline">
                            <input type="password" id="Password" class="form-control form-control-lg" />
                            <label class="form-label" for="Password">Password</label>
                        </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">

                        <select class="select form-control-lg">
                            <option value="1" disabled>Choose option</option>
                            <option value="2">Applicant</option>
                            <option value="3">Employer</option>
                            <option value="4">Guest</option>
                        </select>
                        <label class="form-label select-label">Choose option</label>

                        </div>
                    </div>

                    <div class="mt-4 pt-2">
                        <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                    </div>

                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Registration