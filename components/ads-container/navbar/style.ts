import styled from "styled-components";

export const NavbarStyle = styled.div`
    width:100%;
    /* position: fixed; */
    z-index:3;
    padding: 10px 0px 0px 0;
    transition: all 0.2s ease-in-out;

    .btn-custum{
        background: linear-gradient(to right,#6093ed87 0%,#668eea 100%);
        color: #fefeff;
        font-weight: 500;
    }

    .nav-list{
        a{
            padding: 0px 12px;
            font-weight: bold;
            color: #3c3a3a;
            font-size: 14px;
        }
    }

    &.bg-navbar{
        background:#fff;
        box-shadow: 2px 1px 59px -21px rgba(0,0,0,0.75);
        -webkit-box-shadow: 2px 1px 59px -21px rgba(0,0,0,0.75);
        -moz-box-shadow: 2px 1px 59px -21px rgba(0,0,0,0.75);
    }
`;