import CoBanner from "components/ads-container/banner";
import BlogSlider from "components/ads-container/blog";
import CoCard3 from "components/ads-container/card-3";
import CoContact from "components/ads-container/contact";
import CustumerSlider from "components/ads-container/custumer-slider";
import CoQuestions from "components/ads-container/questions";
import CoOfferCard from "components/ads-container/what-we-offer";
import Container from "components/utils/container";
import FlexDiv from "components/utils/flex-div";

export default function AHomeView() {
    return (
        <main >
            <CoBanner />
            <Container>
                <CoCard3 />
                <CoOfferCard />
                <CoContact />
                <BlogSlider />
                <CustumerSlider />
            </Container>
        </main>
    );
}
