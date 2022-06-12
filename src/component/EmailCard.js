import React from 'react'
import "./EmailCard.css"

export default function EmailCard() {
    return (
        <>
        <hr/>
            <div className='container-fluid email-card-container'>
                <div>
                    <div className=' email-logo d-flex'>
                        <i class="fa-solid fa-envelope"></i>
                        <p>Email</p>
                    </div>
                    <div className='supplier-updates-container'>
                        <div className='supplier-updates col-6'>
                            <h4>FW: Supplier Updates</h4>
                            <p>PO: #12087633979</p>
                        </div>
                        <div className='receieved-date-time col-6'>
                            <p>Received: Mar 14, 2022 at 1:46PM GMT</p>
                            <p>Last opened: Mar 9, 2022 at 1:46PM GMT</p>
                            <p>opened 7 times</p>
                        </div>
                    </div>
                    <div className='mail-contained'>
                        <p>Dear JayaSinghe Sangakkara,</p>

                        <p>We need an urgent update for PO #12087633979 as we have not heard from you. Please provide us an update of the expected delivery date ASAP.</p>


                        <p>Jones Ferdinand</p>
                        <p>Brandix Procurement Manager</p>
                    </div>
                    <div className='row'>
                        <a className='col-2'>Reply</a>
                        <a className='col-2'>Reply All</a>
                        <a className='col-2'>Forward</a>
                    </div>
                </div>
            </div>
        </>
    )
}
