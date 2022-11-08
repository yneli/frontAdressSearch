import { Layout } from "../components/Layout/Layout";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { SearchLayout } from "../components/SearchLayout/SearchLayout";
import { Routes, Route } from "react-router-dom";

export const Test = () => {
    return <>
        <Layout header={<Header/>}>  
            <Sidebar/>
            <Routes> 
                <Route path="/search" element={<SearchLayout/>}/>
            </Routes>
        </Layout>
    </>;
};