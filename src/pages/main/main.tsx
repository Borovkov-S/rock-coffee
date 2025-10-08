import { Hero, Advantages } from "./components";
import "./main.module.scss";

export function Main() {
    return (
        <main className="main">
            <Hero />
            <Advantages />
        </main>
    );
}
