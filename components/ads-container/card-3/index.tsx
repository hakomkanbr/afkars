import { Col, Collapse, Row } from "antd";
import CustomImage from "components/utils/c-image";
import FlexDiv from "components/utils/flex-div";
import Text from "components/utils/text";
import { BsCheck2All } from "react-icons/bs";
import { MdOutlineDataThresholding } from "react-icons/md";
import { TbPhotoSearch, TbPhotoSensor3 } from "react-icons/tb";
import data from "../blog/data";
import { CardStyle } from "./style";

const { Panel } = Collapse;

export default function CoCard3() {
    return (
        <CardStyle>
            <Row gutter={[16, 16]} >
                <Col sm={{ span: 8 }}>
                    <div className="card">
                        <Text as="h3" margin={0} padding={[15, 15, 0]}>
                            <MdOutlineDataThresholding /> تحليل البيانات
                        </Text>
                        <Text as="p" margin={[10, 10, 0]} padding={0}>
                            <BsCheck2All /> العصف الذهني
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All /> المفهوم والتحقق من المشكلة
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All />  User & Market Research
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All /> المفهوم والتحقق من المشكلة
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All />  User & Market Research
                        </Text>
                        <Text as="p" margin={[0, 10]} cstyle={`
                            padding:10px 7px 14px!important;
                        `}>
                            <BsCheck2All /> MVP Build
                        </Text>
                    </div>
                </Col>
                <Col sm={{ span: 8 }}>
                    <div className="card">
                        <Text as="h3" margin={0} padding={[15, 15, 0]}>
                            <TbPhotoSearch /> تصميم المواقع
                        </Text>
                        <Text as="p" margin={[10, 10, 0]} padding={0}>
                            <BsCheck2All /> العصف الذهني
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All /> المفهوم والتحقق من المشكلة
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All />  User & Market Research
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All /> المفهوم والتحقق من المشكلة
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All />  User & Market Research
                        </Text>
                        <Text as="p" margin={[0, 10]} cstyle={`
                            padding:10px 7px 14px!important;
                        `}>
                            <BsCheck2All /> MVP Build
                        </Text>
                    </div>
                </Col>
                <Col sm={{ span: 8 }}>
                    <div className="card">
                        <Text as="h3" margin={0} padding={[15, 15, 0]}>
                            <TbPhotoSensor3 /> أفضل نوعية
                        </Text>
                        <Text as="p" margin={[10, 10, 0]} padding={0}>
                            <BsCheck2All /> العصف الذهني
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All /> المفهوم والتحقق من المشكلة
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All />  User & Market Research
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All /> المفهوم والتحقق من المشكلة
                        </Text>
                        <Text as="p" margin={[0, 10]} padding={0}>
                            <BsCheck2All />  User & Market Research
                        </Text>
                        <Text as="p" margin={[0, 10]} cstyle={`
                            padding:10px 7px 14px!important;
                        `}>
                            <BsCheck2All /> MVP Build
                        </Text>
                    </div>
                </Col>
            </Row>
        </CardStyle >
    );
}
