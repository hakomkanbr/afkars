import styled from "styled-components";

export const BannerStyle = styled.div`
    background-image:url(/assets/images/2.jpg);
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: cover;
    height:100vh;
    position: relative;
    z-index: 1;
    &:before {
        position: absolute;
        left: 0;
        bottom: 0;
        right:0;
        top:0;
        content: "";
        height: 100%;
        width: 100%;
        background: #2c2d309e;
        background-size: cover;
        background-position: bottom;
        z-index: 2;
    }
    &:after {
        position: absolute;
        left: 0;
        bottom: 0;
        right:0;
        top:0;
        content: "";
        height: 100%;
        width: 100%;
        background: url(/assets/images/bg-2.png);
        background-size: cover;
        background-position: bottom;
        z-index: 3;
    }
    .btn1{
        background: linear-gradient(to right,#6093ed87 0%,#668eea 100%);
        color: #fefeff;
        font-weight: 500;
    }
    .btn2{
        color: #525252;
    }
    .btn1,.btn2{
        margin:15px 5px 0;
        border-radius: 4px;
        position: relative;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        -webkit-transition: all .3s ease-in-out!important;
        transition: all .3s ease-in-out!important;
        -webkit-transition: all .3s ease-in-out!important;
        font-family: poppins,Sans-serif;
        font-size: 16px;
        height: 49px;
        line-height: 0px;
    }
    .btn2{

    }
`;