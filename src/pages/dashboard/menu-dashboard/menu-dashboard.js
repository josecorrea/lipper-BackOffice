import TranslateService from "../../../services/translate-service";
import Logo from '../../../assets/images/login/Logo.png';
import iconButtonPlus from '../../../assets/images/dashboard/buttonPlus.png'
import iconDashboard from '../../../assets/images/dashboard/dashboard.png'
import iconCollaborators from '../../../assets/images/dashboard/person.png'
import iconContacts from '../../../assets/images/dashboard/contact.png'
import iconContent from '../../../assets/images/dashboard/content.png'
import iconTemplate from '../../../assets/images/dashboard/template.png'
import iconSettings from '../../../assets/images/dashboard/settings.png'
import imgUser from '../../../assets/images/dashboard/imgUser.png'
import iconRight from '../../../assets/images/dashboard/iconRight.png'

import "./menu-dashboard.scss";
import Home from '../pagesDashboard/Home';
import Collaborators from '../pagesDashboard/Collaborators';
import Contacts from '../pagesDashboard/Contacts';
import {Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Contents from '../pagesDashboard/Contents';
import Templates from '../pagesDashboard/Templates';


export default function MenuDashboard() {
    return (
        <div className="menu-dashboard-page">
            <div className='menu-dashboard-sidebar'>
                <div>
                    <img src={Logo} className="menu-dashboard-image" alt="" />
                </div>
                <div className='menu-dashboard-title-content' >
                        <img src={iconDashboard} alt="" className='iconDashboard' />
                    <div>
                        <Link to="/auth/dashboard/">{TranslateService.get("dashboard.title")}</Link>
                    </div>
                </div>
                <div className='menu-dashboard-content'>
                    <div className='menu-dashboard-subtitle'>
                        <strong>
                            {TranslateService.get("dashboard.label.subtitle.administrate")}
                        </strong>
                    </div>
                    
                    <div className='menu-dasboard-content'>
                        <div className='menu-dasboard-row'>
                            <div>
                                <img src={iconCollaborators} className="iconImg" alt="" />
                                <Link to="/auth/dashboard/collaborators">{TranslateService.get("dashboard.label.collaborators")} </Link>
                            </div>
                            <div>
                                <img src={iconButtonPlus} alt="" />
                            </div>
                        </div>
                        <div className='menu-dasboard-row'>
                            <div>
                                <img src={iconContacts} className="iconImg" alt="" />
                                <Link to="/auth/dashboard/contacts">{TranslateService.get("dashboard.label.contacts")}</Link>
                            </div>
                            <div>
                                <img src={iconButtonPlus} alt="" />
                            </div>
                        </div>
                        <div className='menu-dasboard-row'>
                            <div>
                                <img src={iconContent} className="iconImg" alt="" />
                                <Link to="/auth/dashboard/contents">{TranslateService.get("dashboard.label.content")}</Link>
                            </div>
                            <div>
                                <img src={iconButtonPlus} alt="" />
                            </div>
                        </div>
                        <div className='menu-dasboard-row'>
                            <div>
                                <img src={iconTemplate} className="iconImg" alt="" />
                                <Link to="/auth/dashboard/templates">{TranslateService.get("dashboard.label.templates")}</Link>
                            </div>
                            <div>
                                <img src={iconButtonPlus} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='menu-dashboard-subtitle'>
                        <strong>
                            {TranslateService.get("dashboard.label.subtitle.plataform")}
                        </strong>
                    </div>
                    <div className='menu-dasboard-content'>
                        <div className='menu-dasboard-row'>
                            <div>
                                <img src={iconSettings} className="iconImg" alt="" />
                                <Link to="/auth/dashboard/collaborators">{TranslateService.get("dashboard.label.settings")} </Link>
                            </div>
                            <div>
                                <img src={iconButtonPlus} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='menu-dasboard-footer'>
                        <div className='menu-dasboard-row-footer'>
                            <div>
                                <img src={imgUser} alt="" />
                            </div>
                            <div>Darla Garc??a</div>
                            <div>
                                <img src={iconRight} alt="" />
                            </div>
                        </div>
                        <div className='menu-dasboard-row-footer-close-session'>
                            <p>{TranslateService.get("dashboard.label.singOff")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/collaborators" exact element={<Collaborators />} />
                    <Route path="/contacts" exact element={<Contacts />} />
                    <Route path="/contents" exact element={<Contents />} />
                    <Route path="/templates" exact element={<Templates />} />
                </Routes>
            </div>
        </div>


    )
}