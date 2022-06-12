import React from 'react'
import "./WhatsappCard.css"

export default function WhatsappCard() {
    return (
        <>
        <hr/>
            <div className='container'>
                <div>
                    <div className=' whatsapp-logo d-flex'>
                        <i class="fa-brands fa-whatsapp"></i>
                        <p>Whatsapp</p>
                    </div>
                    <div className='supplier-updates-container'>
                        <div className='supplier-updates col-6'>
                            <p>PO: #12087633979</p>
                        </div>
                        <div className='receieved-date-time col-6'>
                            <p>Mar 14, 2022 at 1:46PM GMT</p>
                        </div>
                    </div>
                    <div className='mail-contained'>
                        <p>Dear JayaSinghe Sangakkara,</p>

                        <p>We need an urgent update for PO #12087633979 as we have not heard from you. Please provide us an update of the expected delivery date ASAP.</p>


                        <div className='container-fluid regards'>
                            <p>Jones Ferdinand</p>
                            <p>Brandix Procurement Manager</p>
                        </div>

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
