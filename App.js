
    const hea1 = React.createElement("h1", { id: "h11", title: "header1" }, "Header1");
        const hea2 = React.createElement("h2", { id: "h22", title: "header2" }, "Header2");
        const h3 = React.createElement("div", { id: "container" }, [hea1, hea2]);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(h3)
    reactDom
