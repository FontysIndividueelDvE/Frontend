import React, { useState, useEffect } from "react";
import axios from "axios";

function TestGateway() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/test')
            .then((response) => {
                setData(response.data);
                console.log(data);
                console.log(response.data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, []);

    return (
        <div>
        <h1>Test Gateway</h1>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
}
export default TestGateway;