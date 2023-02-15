import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

interface User {
  id: number;
  name: string;
}

interface Props {
  ninjas: User[];
}

const Ninjas = ({ ninjas }: Props) => {
  return (
    <div>
      <h1 className="text-xl font-bold text-center">All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id} className="m-10 rounded-lg bg-gray-300 p-5 hover:border-l-8 hover:border-cyan-200">
          <Link href={'/ninjas/' + ninja.id}>
            <h3>{ninja.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Ninjas;