import { Col, Collapse, Row } from "antd";
import CustomImage from "components/utils/c-image";
import Text from "components/utils/text";
import data from "./data";
import { OfferStyle } from "./style";

const { Panel } = Collapse;

export default function CoOfferCard() {
    return (
        <OfferStyle id="services">
            <Text as="h1" margin={[0, 0, 8, 0]} align="center">خدماتنا</Text>
            <Text as="p" margin={[0, 0, 30, 0]} cstyle={`
                letter-spacing: 0.2px;
                font-weight: 400;
                color: #7a7a7a;
            `} size={20} align="center">نسعى دائما أن نكون الخيار الأول للأفكار الإبداعية والمتميزة في مجال البرمجيات وتكنولوجيا المعلومات وتحويل الأفكار الى تطبيقات بأعلى جودة وفي أسرع وقت
                للمساهمة في نجاح مشروعك</Text>
            <Row className="rows">
                {
                    data.contents.map((item, index: number) => (
                        <Col style={{ padding: 20, margin: "60px 0px" }} key={index} sm={{ span: 8 }}>
                            <div key={index} className="card">
                                <div className="icon">
                                    <CustomImage style={{ margin: "auto" }} src={item.icon} width={126} height={216} layout="fill" />
                                </div>
                                <div className="body">
                                    <div className="title">
                                        {item.title}
                                    </div>
                                    <div className="description">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </OfferStyle>
    );
}
