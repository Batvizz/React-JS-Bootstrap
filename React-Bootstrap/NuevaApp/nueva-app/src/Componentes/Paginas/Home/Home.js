import { Button, Navbar, Nav, Item } from 'react-bootstrap'
import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    /*MDBDropdown,
      MDBDropdownToggle,
      MDBDropdownMenu,
      MDBDropdownItem,
      MDBDropdownLink, */
    MDBCollapse
} from 'mdb-react-ui-kit';


export default function Home() {

    const [showBasic, setShowBasic] = useState(false);

    return (

        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'> Inicio </MDBNavbarBrand>

                <MDBNavbarToggler aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' onClick={() => setShowBasic(!showBasic)}>

                    <MDBIcon icon='bars' fas />

                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink aria-current='page' href='#'>
                                Documentacion
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Link</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>

                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                                Disabled
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

