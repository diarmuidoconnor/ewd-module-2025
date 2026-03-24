import ReactDOM from "react-dom/client";
const DemoComponent = (props: { children: React.ReactNode }) => {
    return <div>
        <h1>Ent Web Dev</h1>
        {props.children}</div>;
};

const App = () => {
    return (
        <DemoComponent>
            <p>This is the content passed as children.</p>
        </DemoComponent>
    );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />
)