import { AppColumn, Footer, Header, Page } from "./components";
import { Route, Routes } from "react-router-dom";
import { Main, AboutSchool, Courses, Services, Contacts } from "./pages";

function App() {
    return (
        <AppColumn>
            <Header />
            <Page>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about-school" element={<AboutSchool />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/prices" element={<Services />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </Page>
            <Footer />
        </AppColumn>
    );
}

export default App;
