import { Button, Col, Form, Input, Row } from "antd";
import FlexDiv from "components/utils/flex-div";
import Text from "components/utils/text";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdGpsFixed } from "react-icons/md";
import { CardStyle } from "./style";

export default function CoContact() {
    return (
        <CardStyle id="contact">
            <Row gutter={[16, 16]} >
                <Col sm={{ span: 10 }}>
                    <div className="left">
                        <Text as="h3" size={22} margin={0} padding={[15, 10, 0]}>
                            معلومات الأتصال
                        </Text>
                        <Text as="p" margin={[0, 10, 0]} padding={0}>
                            هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.
                        </Text>
                        <Text as="h3" margin={0} padding={[15, 10, 0]}>
                            <MdGpsFixed /> العنوان
                        </Text>
                        <Text as="p" margin={[5, 10, 0]} padding={0}>The Queens Walk, Bishops, London SE1 7PB,United Kingdom</Text>
                        <Text as="h3" margin={0} padding={[15, 15, 0]}>
                            <AiOutlineMail /> E-Mail Address
                        </Text>
                        <Text as="p" margin={[5, 10, 0]} padding={0}>info@peacefulqode.com</Text>
                        <Text as="h3" margin={0} padding={[15, 15, 0]}>
                            <AiOutlinePhone /> Phone Number
                        </Text>
                        <Text as="p" margin={[5, 10, 0]} padding={0}>+ (567) 1234-567-8900</Text>
                    </div>
                </Col>
                <Col sm={{ span: 14 }}>
                    <Form name="contact_form">
                        <Row gutter={[16, 16]}>
                            <Col sm={{ span: 12 }}>
                                <Form.Item name="name">
                                    <Input placeholder="أدخل أسمك" />
                                </Form.Item>
                            </Col>
                            <Col sm={{ span: 12 }}>
                                <Form.Item name="email">
                                    <Input placeholder="عنوان البريد الألكتروني" />
                                </Form.Item>
                            </Col>
                            <Col sm={{ span: 12 }}>
                                <Form.Item name="phoneNumber">
                                    <Input placeholder="رقم الجوال" />
                                </Form.Item>
                            </Col>
                            <Col sm={{ span: 12 }}>
                                <Form.Item name="subject">
                                    <Input placeholder="الموضوع" />
                                </Form.Item>
                            </Col>
                            <Col sm={{ span: 24 }}>
                                <Form.Item name="message">
                                    <Input placeholder="أدخل رسالتك.." />
                                </Form.Item>
                            </Col>
                            <FlexDiv>
                                <Button htmlType="submit" className="btn-custum">أرسال</Button>
                            </FlexDiv>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </CardStyle >
    );
}
