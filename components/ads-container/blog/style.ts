import styled from "styled-components";

export const CardStyle = styled.div`
    margin-top:100px;
    .swiper-pagination{
        position: relative;
        .swiper-pagination-bullet{
            width: 13px;
            height: 7px;
            border-radius: 4px;
        }
        .swiper-pagination-bullet-active{
            width: 30px;
                background: linear-gradient(to right,#6093ed87 0%,#668eea 100%);
        }
    }
    .card{
        width:100%;
        border-radius:10px;
        background:#fff;
        box-shadow: 1px -2px 35px -11px rgba(172,158,158,0.75);
        -webkit-box-shadow: 1px -2px 35px -11px rgba(172,158,158,0.75);
        -moz-box-shadow: 1px -2px 35px -11px rgba(172,158,158,0.75);
        .card-head{
            height:250px;
            position:relative;
        }
        .card-body{
            height: 174px;
            margin-bottom: 20px;
            .title{}
            .description{
                margin-bottom: 25px;
            }
            .btn-more{
                position: absolute;
                bottom: 0;
                margin-bottom: 25px;
                right:0;
            }
        }
    }
`;