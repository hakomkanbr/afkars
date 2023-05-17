import { Button, Col, Collapse, Row } from "antd";
import CustomImage from "components/utils/c-image";
import FlexDiv from "components/utils/flex-div";
import Text from "components/utils/text";
import { BsCheck2All } from "react-icons/bs";
import { MdOutlineDataThresholding } from "react-icons/md";
import { TbPhotoSearch, TbPhotoSensor3 } from "react-icons/tb";
import data from "./data";
import { CardStyle } from "./style";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import Item from "antd/es/list/Item";
const { Panel } = Collapse;

export default function BlogSlider() {
    return (
        <CardStyle id="Blog">
            <Text as="h1" margin={[0, 0, 8, 0]} align="center">المدونة</Text>
            <Text as="p" margin={[0, 0, 30, 0]} cstyle={`
                letter-spacing: 0.2px;
                font-weight: 400;
                color: #7a7a7a;
            `} size={20} align="center">نسعى دائما أن نكون الخيار الأول للأفكار الإبداعية والمتميزة في مجال البرمجيات وتكنولوجيا المعلومات وتحويل الأفكار الى تطبيقات بأعلى جودة وفي أسرع وقت
                للمساهمة في نجاح مشروعك</Text>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    data.contents.map((item, index: number) => (
                        <SwiperSlide key={index}>
                            <div className="card">
                                <div className="card-head">
                                    <CustomImage layout="fill" src={item.src} />
                                </div>
                                <div className="card-body">
                                    <Text as="p" className="date" margin={0} padding={[10, 10, 0]}>
                                        01.01.2023
                                    </Text>
                                    <Text as="h3" className="title" margin={0} padding={[0, 10, 0]}>
                                        {item.title}
                                    </Text>
                                    <Text as="p" className="description" margin={[10, 10, 0]} padding={0}>
                                        {item.description}
                                    </Text>
                                    <FlexDiv className="btn-more" justifyContent="end">
                                        <Button type="text">أقرأ المزيد</Button>
                                    </FlexDiv>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </CardStyle >
    );
}
