import { Outlet } from "react-router-dom";
import Header from "../component/header";

export default function RootPage(){
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        </>
    )
}