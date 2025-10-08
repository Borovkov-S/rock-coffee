import { Hero, Advantages, Cources } from "./components";
import "./main.module.scss";

export function Main() {
    return (
        <main className="main">
            <Hero />
            <Advantages />
            <Cources />
        </main>
    );
}
