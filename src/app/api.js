import fetch from "isomorphic-fetch";

export const fetchCircuits = () => {
    return fetch( "http://ergast.com/api/f1/2018/circuits.json" )
        .then( res => res.json( ) )
        .then( res => res.MRData.CircuitTable.Circuits );
}

export const getUser = () => {
    return fetch("http://localhost:9000/api/users/me").then(res => res.json());
}
