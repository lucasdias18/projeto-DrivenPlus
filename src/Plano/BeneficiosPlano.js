

export default function BeneficiosPlano ({beneficio}) {
    const {perks} = beneficio

    return (
        <Caixa>
            {
                perks.map((i) => {
                    return (
                        <Link key={h.id} to={`/assentos/${h.id}`}>
                            <Lista>{h.name}</Lista>
                        </Link>
                    )
                })
            }
        </Caixa>
    )
}