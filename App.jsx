import Entry from "./components/Entry";
import Header from "./components/Header";
import data from "./data";

const entryElement = data.map((entry) => (
    <Entry key={entry.id} {...entry} />
));

export default function App() {
    return (
        <div>
            <Header />
            {entryElement}
        </div>
    );
}