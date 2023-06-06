import React from 'react'

function Interview() {
  return (
    <section class="gradient-custom">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10">
                        <div class="card card-style1 border-0">
                            <div class="card-body p-4 p-md-5 p-xl-6">
                                <div class="text-center mb-2-3 mb-lg-6">
                                    <span class="section-title text-primary">Interview Questions</span>
                                    <h2 class="h1 mb-0 text-secondary">Possible Interview Questions</h2>
                                </div>
                                <div id="accordion" class="accordion-style">
                                    <div class="card mb-3">
                                        <div class="card-header" id="headingOne">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><span class="text-theme-secondary me-2">Q.</span>Could you tell me about yourself and describe your background in brief?</button>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                            <div class="card-body">
                                            Interviewers like to hear stories about candidates. Make sure your story has a great beginning, a riveting middle, and an end that makes the interviewer root for you to win the job.
                                            Talk about a relevant incident that made you keen on the profession you are pursuing and follow up by discussing your education. In the story, weave together how your academic training and your passion for the subject or industry the company specializes in, combined with your work experience, make you a great fit for the job. If you’ve managed a complex project or worked on an exciting, offbeat design, mention it.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-3">
                                        <div class="card-header" id="headingTwo">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><span class="text-theme-secondary me-2">Q.</span> How did you hear about this position?</button>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                            <div class="card-body">
                                            Employers want to know whether you are actively seeking out their company, heard of the role from a recruiter, or were recommended to the position by a current employee. In short, they want to know how you got to them.
                                            If someone recommended you for the position, be sure to say their name. Don’t assume that the interviewer already knows about the referral. You’ll probably want to also follow up with how you know the person who referred you. 
                                            For example, if you and Steve (who recommended you) worked together previously, or if you met him over coffee at a networking event, mention it to give yourself a little more credibility. If Steve works at the company and suggested that you apply for the job, explain why he thought you’d be the perfect fit.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-3">
                                        <div class="card-header" id="headingThree">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><span class="text-theme-secondary me-2">Q.</span> What type of work environment do you prefer?</button>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                            <div class="card-body">
                                            Be sure to do your homework on the organization and its culture before the interview. Your research will save you here. Your preferred environment should closely align to the company’s workplace culture (and if it doesn’t, it may not be the right fit for you).
                                            For example, you may find on the company’s website that they have a flat organizational structure or that they prioritize collaboration and autonomy. Those are key words you can mention in your answer to this question.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mb-3">
                                        <div class="card-header" id="headingFour">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><span class="text-theme-secondary me-2">Q.</span> How do you deal with pressure or stressful situations?</button>
                                            </h5>
                                        </div>
                                        <div id="collapseFour" class="collapse show" aria-labelledby="headingFour" data-bs-parent="#accordion">
                                            <div class="card-body">
                                                The employer wants to know: Do you hold down the fort or crumble under pressure? They want to make sure that you won’t have a meltdown when the pressure becomes intense and deadlines are looming. The ability to stay calm under pressure is a highly prized talent.
                                                Share an instance when you remained calm despite the turmoil. If it’s a skill you’re developing, acknowledge that and include the steps you’re taking to respond better to pressure in the future. 
                                                For example, you could indicate that you’ve started a mindfulness practice to help you better deal with stress.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div class="card-header" id="headingFive">
                                            <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><span class="text-theme-secondary me-2">Q.</span> Do you prefer working independently or on a team?</button>
                                            </h5>
                                        </div>
                                        <div id="collapseFive" class="collapse show" aria-labelledby="headingFive" data-bs-parent="#accordion">
                                            <div class="card-body">
                                            Your answer should be informed by the research you’ve done on the company culture and the job in question. Nevertheless, you should expect that most work environments will have some team aspect.
                                            Many positions require you to work collaboratively with other people on a daily basis, while some roles require you to work on your own. When you answer this question, highlight the best traits of your personality and how they fit the job requirements.
                                            It could also be in your interest to answer this question by highlighting the advantages and disadvantages of both situations.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Interview