import styled from "styled-components";

export const OfferStyle = styled.div`
    margin-bottom:50px;
    .card{
        box-shadow: 1px -2px 35px -11px rgba(172,158,158,0.75);
        -webkit-box-shadow: 1px -2px 35px -11px rgba(172,158,158,0.75);
        -moz-box-shadow: 1px -2px 35px -11px rgba(172,158,158,0.75);
        .icon{    
            position: absolute;
            top: -50px;
            right: 0;
            left: 0;
            text-align: center;
            padding: 15px;
            font-size: 29px;
            height:250px;
            margin: auto;
            color: white;
            border-bottom:1px solid #d1d1d1;
        }
        .body{
            min-height: 350px;
            padding-top: 180px;
            .title{
                text-align: center;
                font-size: 20px;
                font-weight: bold;
                margin: 10px;
                color: #5f5f5f;
            }
            .description{
                text-align: center;
                font-size: 16px;
                font-weight: 400;
                margin: 10px;
                font-weight: 400;
                letter-spacing: 0.1px;
                color: #898080;
            }
        }
    }
    `;