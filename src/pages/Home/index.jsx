import { useParams } from "react-router-dom";


export default function Home() {
  const { user } = useParams();
  return (
    <>
      <h1>Home</h1>
      {user == undefined ? <h2>Olá visitante!</h2> : <h2>Seja bem vindo(a), {user}!</h2>}
    </>
  );
}
