import { useEffect, useState } from "react"
import { Advice, Button, Container, Dice, Divider, Id, Title } from "./AdviceGenerator.styles"
import { getAdvice } from "./utils/getAdvice"

export const AdviceGenerator = () => {

    const [data, setData] = useState<{ id: number, advice: string }>()

    useEffect(() => {
        (async () => {
            const advice = await getAdvice()
            setData(advice)
        })()
    }, [])
    return (
        <Container>
            <Title>
                ADVICE #<Id>{data?.id}</Id>
            </Title>
            <Advice>&ldquo;{data?.advice}&rdquo;</Advice>
            <Divider src={`${process.env.PUBLIC_URL}/assets/images/pattern-divider-mobile.svg`} alt="Divider" />
            <Button onClick={async e => {
                const advice = await getAdvice()
                setData(advice)
            }} >
                <Dice src={`${process.env.PUBLIC_URL}/assets/images/icon-dice.svg`} />
            </Button>
        </Container>
    )
}