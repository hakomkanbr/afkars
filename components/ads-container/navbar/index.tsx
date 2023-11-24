import { NavbarStyle } from "./style";
import { useEffect } from "react";
import Container from "components/utils/container";
import FlexDiv from "components/utils/flex-div";
import { Button, Dropdown } from "antd";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Text from "components/utils/text";
import data from "./data";
import CustomImage from "components/utils/c-image";

export default function CoNavbar() {
    const router = useRouter();
    useEffect(() => {
        const element: any = document.getElementById("myNavbar");
        document.addEventListener("scroll", function () {
            const scroll = window.scrollY;
            if (scroll > 100) {
                element.classList.add("bg-navbar");
            } else {
                element.classList.remove("bg-navbar");
            }
        });
    }, []);
    return (
        <NavbarStyle className="bg-navbar" id="myNavbar">
            <Container>
                <FlexDiv justifyContent="space-between">
                    <FlexDiv alignItems="center" direction="row-reverse">
                        <Button type="primary" onClick={() => { router.push("#contact") }} className="btn-custum">تواصل معنا</Button>
                    </FlexDiv>
                    <FlexDiv className="nav-list" alignItems="center" direction="row-reverse">
                        {data.options.map((item, index: number) => (
                            <Dropdown key={index} menu={{
                                items: []
                            }}>
                                <Link href={item.url ?? "/"}>
                                    <a>
                                        {item.label}
                                    </a>
                                </Link>
                            </Dropdown>
                        ))}
                    </FlexDiv>
                    <div>
                        <CustomImage cstyle={`
                            display:grid;
                            position: relative;
                            top: -12px;
                        `} src="/assets/images/vercyel.svg" width={185} height={70} imgWidth={50} imgHeight={50} />
                    </div>
                </FlexDiv>
            </Container>
        </NavbarStyle>
    );
}
