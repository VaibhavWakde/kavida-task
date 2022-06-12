import React from 'react'
import "./Demo.css"

export default function Demo() {
    return (
        <>
            <div className='wrapper'>
                <div className='header'>Header (Absolute)</div>
                <div className='sidebar-1'>
                    <div className='sticky-spacer'></div>
                    <div class="sticky-content">Sidebar 1 Absolute position, Fixed width</div>
                </div>
                <div class="content">
                    <div class="sticky-spacer"></div>
                    <div class="sticky-content">
                        Scrollable content<br /><br />
                        line 1<br /><br />
                        line 2<br /><br />
                        line 3<br /><br />
                        line 4<br /><br />
                        line 5<br /><br />
                        line 6<br /><br />
                        line 7<br /><br />
                        line 8<br /><br />
                        line 9<br /><br />
                        line 10<br /><br />
                        line 11<br /><br />
                        line 12<br /><br />
                        line 13<br /><br />
                        line 14<br /><br />
                        line 15<br /><br />
                        line 16<br /><br />
                        line 17<br /><br />
                        line 18<br /><br />
                        line 19<br /><br />
                        line 20
                    </div>
                </div>
            </div>
        </>
    )
}
