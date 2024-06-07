import Link from "next/link";

export default function Users() {
    const arr = [
        {
            id: 1,
            name: "Kartik"
        },
        {
            id: 2,
            name: "Karan"
        }
    ];

    return (
        <>
            <h1>User page</h1>
            <ul>
                {arr.map(item =>
                    <li key={item.id}>
                        <Link href={`/users/${item.name}`}>
                            {item.name}
                        </Link>
                    </li>
                )}
            </ul>
        </>
    );
}
