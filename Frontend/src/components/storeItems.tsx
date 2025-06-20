import { Card } from "react-bootstrap"

type storeItemsProps = {
    id: number
    name: string
    price: number
    imageUrl: string
}

export function storeItems({ id, name, price, imageUrl }: storeItemsProps) {
    return (
        <Card>
            <Card>
                <Card.Img
                    variant="top"
                    src={imageUrl} width="200px"
                    height="200px"
                    style={{ objectFit: "cover" }}
                />
            </Card>
            )
}

