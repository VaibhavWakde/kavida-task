import React, { useState } from 'react'
import "./ComposeEmail.css"

export default function ComposeEmail() {
    const [emailto, setEmailTo] = useState()
    const [cc, setCC] = useState()
    const [subject, setSubject] = useState()
    const [contentP, setContentP] = useState('')
    const [contentC, setContentC] = useState('')
    const [contentF1, setContentF1] = useState('')
    const [contentF2, setContentF2] = useState('')


    const composeEmailData = {
        to: "Jay Shetty",
        cc: "Pelpola Vijaya, Caroll Doyle",
        subject: "Internal Milestone Update needed",
        contentP: "Dear Jay Shetty,",
        contentC: "We need an urgent update for PO #12087633979 as we have not heard from you. Please provide us an update of the expected delivery date ASAP.",
        contentF1: "Jones Ferdinand",
        contentF2: "Brandix Procurement Manager"
    }


    function autofillEmail() {
        setEmailTo(composeEmailData.to)
        setCC(composeEmailData.cc)
        setSubject(composeEmailData.subject)
        setContentP(composeEmailData.contentP)
        setContentC(composeEmailData.contentC)
        setContentF1(composeEmailData.contentF1)
        setContentF2(composeEmailData.contentF2)
    }
    return (
        <>
            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Email</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body ">
                            <div className="email-to">
                                <h4>To:</h4>
                                <input type='text' value={emailto} />
                            </div>
                            <hr />
                            <div className="email-cc ">
                                <h4>CC:</h4>
                                <input type='text' value={cc} />
                            </div>
                            <hr />
                            <div className="email-subject ">
                                <h4>Subject:</h4>
                                <input type='text' value={subject} />
                            </div>
                            <hr />
                            <div className="email-content">
                                <p>{contentP}</p>
                                <br />
                                <p>{contentC}</p>
                                <br />
                                <p>{contentF1}</p>
                                <p>{contentF2}</p>
                            </div>
                            <div className="fill-in-form d-flex">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                <p>Fill in form</p>
                            </div>
                            <hr className="full" />
                            <div className="email-regards">
                                <h3>Jones Ferdinand</h3>
                                <p>Procurement Manager</p>
                                <p>Brandix</p>
                                <p>(+94)(011)2449834</p>
                            </div>
                            <div className="email-autofill-container row">
                                <div className="col-4" onClick={autofillEmail} >
                                    <button className="email-autofill-option" onClick={autofillEmail} >Internal Milestones Update</button>
                                </div>
                                <div className="col-4" >
                                    <button className="email-autofill-option">External Risks Update</button>
                                </div>
                                <div className="col-4" >
                                    <button className="email-autofill-option" >Shipping Information</button>
                                </div>
                            </div>
                            <div className="email-footer row">
                                <div className='col-4'>
                                    <button className="send-email-btn">Send Email</button>
                                </div>
                                <div className='text-style-container col-8'>
                                    <i class="fa-solid fa-bold"></i>
                                    <i class="fa-solid fa-italic"></i>
                                    <i class="fa-solid fa-underline"></i>
                                    <i class="fa-solid fa-align-left"></i>
                                    <i class="fa-solid fa-align-right"></i>
                                    <i class="fa-solid fa-paperclip"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
