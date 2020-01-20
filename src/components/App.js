import React, {useEffect, useState} from 'react';

const App = () => {
    const [Auth, SetAuth] = useState(true); // True = Authed | False = Unauth
    
    if(Auth) {
        return <h1>Authentification Route</h1>;
    } else {
        return <h1>Unauth route</h1>
    }
}

export default App;