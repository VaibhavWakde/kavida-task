import React, { useState } from 'react'
import ComposeEmail from './ComposeEmail';
import EmailCard from './EmailCard';
import "./Home.css"
import WhatsappCard from './WhatsappCard';

export default function Home() {
    const [searchValue, setSearchValue] = useState([])
    const [value, setValue] = useState("");
    const [showDetails, setShowDetails] = useState(false)

    const sidebarData = [
        {
            name: "Jay Shetty",
            company: "Eam Maliban Textiles (Pvt) Ltd.",
            role: "Logistics",
            email: "jay.shetty@eam-maliban.com",
            whatsapp: "(+94)(011)2449834",
            wechat: "+86 13013867129",
            pnumber: "(+94)(011)2449834"
        },
        {
            name: "Jonathan Holden",
            company: "Eam Maliban Textiles (Pvt) Ltd.",
            role: "Logistics",
            email: "jonathan.holden@eam-maliban.com",
            whatsapp: "(+94)(011)2449834",
            wechat: "+86 13013867129",
            pnumber: "(+94)(011)2449834"
        },
        {
            name: "Josh Jacob",
            company: "Eam Maliban Textiles (Pvt) Ltd.",
            role: "Logistics",
            email: "josh.jacob@eam-maliban.com",
            whatsapp: "(+94)(011)2449834",
            wechat: "+86 13013867129",
            pnumber: "(+94)(011)2449834"
        },
    ]

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onSearch = (searchTerm) => {
        setValue(searchTerm);
    };

    return (
        <>
            <div className="container-fluid row main-container">
                <div className="sidebar col-4">
                    <div className="searchbar-container m-2">
                        <i class="fa-solid fa-magnifying-glass icon"></i>
                        <input className="input-field" value={value} onChange={onChange} placeholder='Search for Contact' type='text' />

                        <div className="dropdown">
                            {sidebarData
                                .filter((item) => {
                                    const searchTerm = value.toLowerCase();
                                    const fullName = item.name.toLowerCase();
                                    return (
                                        searchTerm &&
                                        fullName.startsWith(searchTerm) &&
                                        fullName !== searchTerm
                                    );
                                })
                                .slice(0, 3)
                                .map((item) => (
                                    <div
                                        onClick={() => {
                                            onSearch(item.name)
                                            setSearchValue(item)
                                            setShowDetails(true)
                                        }}
                                        className="dropdown-row"
                                        key={item.name}
                                    >
                                        {item.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {showDetails ? <div className="contact-details-container container">
                        <h2>{searchValue.name}</h2>
                        <div className="contact-details container">
                            <p>company</p>
                            <p className="user-info">{searchValue.company}</p>
                        </div>
                        <div className="contact-details container">
                            <p>Role</p>
                            <p>{searchValue.role}</p>
                        </div>
                        <div className="contact-details container">
                            <h5>Contact Methods</h5>
                            <div>
                                <p>Email</p>
                                <p className="user-info">{searchValue.email}</p>

                                <p>Whatsapp</p>
                                <p className="user-info">{searchValue.whatsapp}</p>

                                <p>Wechat</p>
                                <p className="user-info">{searchValue.wechat}</p>

                                <p>Phone Number</p>
                                <p className="user-info">{searchValue.pnumber}</p>
                            </div>
                        </div>
                    </div>
                        : ''
                    }
                </div>
                <div className='contained col-8 p-2'>
                    <div className='contained-header container-fluid d-flex'>
                        <div>
                            <h2>Communications History</h2>
                        </div>
                        <div className='communication-searchbar' >
                            <i class="fa-solid fa-magnifying-glass icon"></i>
                            <input type='text' placeholder='Search for Activities or emails' />
                        </div>

                    </div>
                    <div>
                        {showDetails ?
                            <div className='send-option row'>
                                <button className='compose-email col-2 d-flex' data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <i class="fa-solid fa-envelope"></i>
                                    <p>Compose Mail</p>
                                </button>
                                <button className='send-whatsapp col-2 d-flex'>
                                    <i class="fa-brands fa-whatsapp"></i>
                                    <p>Send Whatsapp</p>
                                </button>
                                <div className='send-wechat col-2 d-flex'>

                                </div>
                                <div className='call col-2 d-flex'>

                                </div>
                            </div>
                            : ''}
                        <div className='communication-content'>
                            <EmailCard />
                            <WhatsappCard />
                            <EmailCard />
                            <WhatsappCard />
                            <EmailCard/>
                        </div>
                    </div>
                    <div>
                        <ComposeEmail />
                    </div>
                </div>
            </div>
        </>
    )
}
