import styled from "styled-components";

export const CardStyle = styled.div`
    position: relative;
    top:-100px;
    z-index:6;
    .card{
        width:90%;
        border-radius:10px;
        margin:auto;
        background:#fff;
        box-shadow: 1px -2px 35px -11px rgba(172,158,158,0.75);
        -webkit-box-shadow: 1px -2px 35px -11px rgba(172,158,158,0.75);
        -moz-box-shadow: 1px -2px 35px -11px rgba(172,158,158,0.75);
        h3{
            display: flex;
            align-items: center;
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 12px;
            svg{
                font-size: 58px;
                color: #6890eb;
                margin-left: 4px;
            }
        }
        P{    
            padding: 6px 7px;
            svg{
                font-size: 16px;
                color: #6890eb;
                margin-left: 4px;
                position: relative;
                top: 4px;
            }
        }
    }
`;