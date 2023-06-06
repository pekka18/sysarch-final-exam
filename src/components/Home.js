import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Home() {

  return (
    <>
      <div class="gradient-custom">
        <div class="jumbotron" >
          <div class="container">
            <h1 class="display-3">Welcome, Job Seeker!</h1>
            <p>Are you a jobseeker looking for new opportunities? Look no further! Our job search website is designed to help you find the perfect job that aligns with your skills, experience, and career goals.<br/>
              We understand that finding the right job can be a challenging task. That's why our platform offers a comprehensive database of job listings from various industries and locations. Whether you're a fresh graduate, an experienced professional, or someone looking for a career change, we've got you covered.<br/>
              With our user-friendly interface and advanced search filters, you can easily navigate through the available job openings, filter them based on your preferences, and apply directly through our platform. We strive to make the job search process efficient and hassle-free for you.<br/>
              In addition to job listings, we provide valuable resources and tips to help you enhance your job search strategy. From resume writing to interview preparation, we offer guidance to empower you to put your best foot forward in the competitive job market.<br/>
              So, take the first step towards your dream career by exploring the exciting job opportunities on our website. Start your job search today and unlock a world of possibilities!<br/>
              We are here to support you on your job-seeking journey and wish you success in finding the job that fulfills your aspirations.</p>
            <p><a class="btn btn-primary btn-lg" href="/Registration" role="button">Learn more &raquo;</a></p>
          </div>
        </div>
        <div class="container">

            <div class="row">
              <div class="hi-custom" style={{border : '3px solid black'}}>
                <h2>Need help in Creating Resume?</h2>
                <p><a class="btn btn-secondary" href="/Resume" role="button">View details &raquo;</a></p>
              </div>
              <div class="hi-custom" style={{border : '3px solid black'}}>
                <h2>Need help in Interview Questions?</h2>
                <p><a class="btn btn-secondary" href="/Interview" role="button">View details &raquo;</a></p>
              </div>
              <div class="hi-custom" style={{border : '3px solid black'}}>
                <h2>Need help in Finding your Ideal Job?</h2>
                <p><a class="btn btn-secondary" href="/FindJob" role="button">View details &raquo;</a></p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Home