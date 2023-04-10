import { useState } from 'react'
import { PaymentMethode } from './paymentMethode';
import { CardSummery } from './cardSummery';
export const CartList = ({ carts }) => {
    const [activeDialog, setActiveDialog] = useState(false);
    const dialog = () => {
        setActiveDialog(true);
    };

    const CloseDialog = () => {
        setActiveDialog(!activeDialog);
    };

    return (
        <div className=' text-black ' >
            <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                {/* card summry */}
                <CardSummery
                    carts={carts}
                />
                {/* payment method */}
                <PaymentMethode
                    CloseDialog={CloseDialog}
                    activeDialog={activeDialog}
                    setActiveDialog={setActiveDialog}
                    dialog={dialog}
                />
            </div>
        </div>

    )
}
