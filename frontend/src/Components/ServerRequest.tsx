// DjangoRequest

import axios from 'axios'
import React, {useEffect, useState} from "react";


interface IData {
    message: any;
}
interface IProps {
  mylink: string;
}

const DjangoAxiosRequest: React.FC <IProps> = (props) => {
    const [data, setData] = useState<IData | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get<IData>(props.mylink || "http://127.0.0.1:8000/foundation/homepage/my-function/")
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
            {data && <p>Data: {data.message}</p>}
        </div>
    );
};


export default DjangoAxiosRequest;