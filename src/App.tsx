import { AppColumn, Footer, Header, Page } from "./components";
import { Route, Routes } from "react-router-dom";
import { Main, AboutSchool } from "./pages";

function App() {
    return (
        <AppColumn>
            <Header />
            <Page>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/about-school" element={<AboutSchool />} />
                    <Route path="/courses" element={<div>Направления</div>} />
                    <Route
                        path="/teachers"
                        element={<div>Преподаватели</div>}
                    />
                    <Route path="/prices" element={<div>Цены</div>} />
                    <Route path="/contacts" element={<div>Контакты</div>} />
                </Routes>
            </Page>
            <Footer />
        </AppColumn>
    );
}

export default App;
