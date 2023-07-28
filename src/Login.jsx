import React, {useState, useEffect} from "react";

function Login({onClick}){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const logarUser = async (e) => {
        // Bloquear o recarregamento da página
        e.preventDefault();
        
        console.log("User "+ user);
        console.log("Pass "+ password);
        
        setUser('');
        setPassword('');
    }

    return (
        <div className="cardPrincipal">
            <form onSubmit={logarUser}>

            <input type="text" className="inputText" name="user" placeholder="Usuário"
                onChange={(event) => {setUser(event.target.value)}} value={user} />    
            <input type="password" className="inputText" name="password" placeholder="Senha"
                onChange={(event) => {setPassword(event.target.value)}} value={password} />
            <button type="submit" className="btnAdd">Adicionar</button>
            
            </form>
        </div>
    )
}

export default Login
