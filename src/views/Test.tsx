import { Layout } from "../components/Layout/Layout";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { SearchLayout } from "../components/SearchLayout/SearchLayout";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";


export const Test = () => {
    return <>
        <Layout header={<Header/>}>  
            <Sidebar/>
            <Routes> 
                <Route path="/" element={<Home/>}/>
                <Route path="/search" element={<SearchLayout/>}/>
            </Routes>
        </Layout>
    </>;
};