'use client';
import Link from "next/link";
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";
export default function MyNavbar() {
    return (
        <Navbar expand="sm" className="bg-body-tertiary">
            <Container>
                <NavbarBrand>Restauranteur</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse>
                    <Nav className="me-auto">
                        <Link href={"/"} className="text-black nav-link">
                            Home
                        </Link>
                        <Link href={"/login"} className="text-black nav-link">
                            login
                        </Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}