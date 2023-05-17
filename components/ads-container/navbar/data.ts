import { MenuProps } from "antd";

export interface InProps {
    options: optionsType[]
}

interface optionsType {
    label: string;
    key: string;
    url: string;
    children?: MenuProps["items"]
}

const data: InProps = {
    options: [
        // {
        //     url: "/",
        //     key: "1",
        //     label: "الرئيسية"
        // },
        {
            url: "#services",
            key: "1",
            label: "خدماتنا"
        },
        {
            url: "#ourProducts",
            key: "1",
            label: "منتجاتنا"
        },
        {
            url: "#ourWorks",
            key: "1",
            label: "أعمالنا"
        },
        {
            url: "#blog",
            key: "1",
            label: "المدونة"
        },
        {
            url: "#contact",
            key: "1",
            label: "أتصل بنا"
        },
    ]
}


export default data;