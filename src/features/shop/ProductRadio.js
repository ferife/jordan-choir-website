import { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

const ProductRadio = ({ options }) => {
    const [activeId, setActiveId] = useState(0);

    return (
        <>
            <ButtonGroup vertical={options[0].price}>
                {options.map((option) => {
                    const addPriceToButton = option.price ? '$' + option.price + ' - ' : '';
                    return (
                        <Button onClick={() => setActiveId(option.id)} active={activeId === option.id}>
                            {addPriceToButton + option.name}
                        </Button>
                    );
                })}
            </ButtonGroup>
        </>
    );
};

export default ProductRadio;