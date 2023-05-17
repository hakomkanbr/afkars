import { Button, Col, Row } from "antd";
import Container from "components/utils/container";
import FlexDiv from "components/utils/flex-div";
import Text from "components/utils/text";
import { BannerStyle } from "./style";

export default function CoBanner() {
    return (
        <BannerStyle>
            <FlexDiv cstyle={`
                position: relative;
                z-index: 4;
            `} width={700} height="100%" alignItems="center" margin="0 auto" justifyContent="center">
                <div>
                    <Text as="h2" color="#fff" size={40} align="center">نوفر لك تصميم مُبهر يساعدك في جذب المزيد من العملاء وتلميع علامتك التجارية بين جمهورك</Text>
                    <Text as="p" color="#fbf8f8e8" size={17} align="center">تم إلصاق حساب التظاهر العشرة الطبيعي. تحتاج أكل أسبوع حتى ذلك الحين. يسعد Incommode أنه عازم على الرياضيين في الاستماع</Text>
                    <FlexDiv width={700} alignItems="center" margin="0 auto" justifyContent="center">
                        <Button onClick={() => {
                            window.open(`https://api.whatsapp.com/send?phone=+972509599989&text=مرحبا , هل يمكنني معرفة المزيد عن خدمتكم`)
                        }} htmlType="button" className="btn1" type="primary">تواصل معنا</Button>
                        <Button htmlType="button" onClick={() => {
                            alert("هذه الخدمة جاري تحديثها")
                        }} className="btn2" type="default">أعمالنا</Button>
                    </FlexDiv>
                </div>
            </FlexDiv>
        </BannerStyle>
    );
}
